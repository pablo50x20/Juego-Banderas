// ========== GAME DATA ==========
const CONTINENTS = ['AMERICA', 'EUROPA'];

const COUNTRIES = {
  AMERICA: ['ARGENTINA', 'BRASIL', 'CHILE', 'COLOMBIA', 'MEXICO'],
  EUROPA:  ['ALEMANIA', 'ESPANA', 'FRANCIA', 'INGLATERRA', 'ITALIA']
};

// Nombres con caracteres especiales (para modal y pantalla 4)
const DISPLAY_NAMES = {
  ARGENTINA:  'ARGENTINA',
  BRASIL:     'BRASIL',
  CHILE:      'CHILE',
  COLOMBIA:   'COLOMBIA',
  MEXICO:     'MÉXICO',
  ALEMANIA:   'ALEMANIA',
  ESPANA:     'ESPAÑA',
  FRANCIA:    'FRANCIA',
  INGLATERRA: 'INGLATERRA',
  ITALIA:     'ITALIA'
};

// Nombres normalizados para lógica del juego (sin tildes, Ñ se mantiene)
const GAME_NAMES = {
  ARGENTINA:  'ARGENTINA',
  BRASIL:     'BRASIL',
  CHILE:      'CHILE',
  COLOMBIA:   'COLOMBIA',
  MEXICO:     'MEXICO',
  ALEMANIA:   'ALEMANIA',
  ESPANA:     'ESPAÑA',
  FRANCIA:    'FRANCIA',
  INGLATERRA: 'INGLATERRA',
  ITALIA:     'ITALIA'
};

// Alfabeto español (27 letras)
const ALPHABET = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

// Filas teclado QWERTY español
const QWERTY_ROWS = [
  'QWERTYUIOP',
  'ASDFGHJKL',
  'ZXCVBNMÑ'
];

// ========== ESTADO ==========
let musicOn          = true;
let sfxOn            = true;
let currentContinent = 0;
let currentCountryKey= '';
let currentGameName  = '';
let score            = 0;
let blockLetters     = [];   // 30 slots: letra | 'GOOD' | 'BAD' | null
let blockVisible     = [];   // true = bloque removido (imagen visible)
let brightBlock      = 0;
let brightInterval   = null;
let animRunning      = false;
let waitingYesNo     = false;
let currentRevealedLetter = '';
let guessMode        = false;
let correctLetters   = new Set();
let wrongLetters     = new Set();

// Puntajes persistentes: { 'AMERICA/ARGENTINA': 850, ... }
let savedScores = {};

// ========== INICIO ==========
window.addEventListener('load', () => {
  loadSavedScores();
  document.getElementById('logo-img').src = IMAGES.LOGO;
  buildQwerty();
  goScreen(1);
  // Listeners del sound bar fijo
  document.getElementById('btn-music').addEventListener('click', toggleMusic);
  document.getElementById('btn-sfx').addEventListener('click', toggleSFX);
});

// ========== PERSISTENCIA ==========
function loadSavedScores() {
  try {
    const s = localStorage.getItem('quizbanderas_scores');
    if (s) savedScores = JSON.parse(s);
  } catch (e) { savedScores = {}; }
}
function saveScores() {
  localStorage.setItem('quizbanderas_scores', JSON.stringify(savedScores));
}
function scoreKey(continent, country) {
  return continent + '/' + country;
}

// ========== NAVEGACIÓN ==========
function goScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');
  document.getElementById('sound-bar').style.display = (n === 1) ? 'none' : 'flex';
  if (n === 4) renderScreen4();
}

// ========== SONIDO ==========
function toggleMusic() {
  musicOn = !musicOn;
  updateSoundUI();
}
function toggleSFX() {
  sfxOn = !sfxOn;
  updateSoundUI();
}
function updateSoundUI() {
  document.getElementById('s1-music').textContent = '🎵 Música: ' + (musicOn ? 'ON' : 'OFF');
  document.getElementById('s1-sfx').textContent   = '🔔 Sonidos: ' + (sfxOn  ? 'ON' : 'OFF');
  document.getElementById('btn-music').classList.toggle('off', !musicOn);
  document.getElementById('btn-sfx').classList.toggle('off', !sfxOn);
}

// ========== INICIO PARTIDA ==========
function startGame() {
  const all = [];
  for (const c of CONTINENTS) {
    for (const k of COUNTRIES[c]) all.push({ continent: c, key: k });
  }
  const unplayed = all.filter(x => savedScores[scoreKey(x.continent, x.key)] === undefined);
  if (unplayed.length === 0) {
    showToast('🏆 ¡Completaste todas las banderas!');
    goScreen(4);
    return;
  }
  const pick = unplayed[Math.floor(Math.random() * unplayed.length)];
  loadRound(pick.continent, pick.key);
}

function nextFlag() {
  document.getElementById('modal-overlay').classList.remove('visible');
  startGame();
}

function loadRound(continent, countryKey) {
  currentContinent  = CONTINENTS.indexOf(continent);
  currentCountryKey = countryKey;
  currentGameName   = GAME_NAMES[countryKey];
  score             = 1000;
  correctLetters    = new Set();
  wrongLetters      = new Set();
  guessMode         = false;
  waitingYesNo      = false;
  currentRevealedLetter = '';

  document.getElementById('flag-img').src = IMAGES[continent][countryKey];

  buildBlocks();
  buildNameBoxes();

  document.getElementById('score-display').textContent = '1000';
  document.getElementById('letter-panel').classList.remove('visible');
  document.getElementById('qwerty-panel').classList.remove('visible');
  document.getElementById('discarded-letters').innerHTML = '';
  document.getElementById('btn-stop').disabled  = false;
  document.getElementById('btn-guess').disabled = false;
  resetQwertyKeys();

  startBrightAnimation();
  goScreen(3);
}

// ========== BLOQUES ==========
function buildBlocks() {
  // 27 letras + 1 GOOD + 1 BAD + 1 null = 30 slots
  const pool = [...ALPHABET, 'GOOD', 'BAD', null];
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  blockLetters = pool;

  blockVisible = new Array(30).fill(false);
  // Un bloque aleatorio comienza descubierto
  blockVisible[Math.floor(Math.random() * 30)] = true;

  renderBlocks();
}

function renderBlocks() {
  const overlay = document.getElementById('blocks-overlay');
  overlay.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const div = document.createElement('div');
    div.className = 'block' + (blockVisible[i] ? ' hidden' : '');
    div.id = 'block-' + i;
    overlay.appendChild(div);
  }
}

function startBrightAnimation() {
  if (brightInterval) clearInterval(brightInterval);
  animRunning = true;
  brightBlock = randomHiddenBlock();
  updateBright();
  brightInterval = setInterval(() => {
    if (!animRunning) return;
    const next = randomHiddenBlock();
    if (next === -1) { stopAnimation(); return; }
    brightBlock = next;
    updateBright();
  }, 100);
}

function randomHiddenBlock() {
  const hidden = [];
  for (let i = 0; i < 30; i++) { if (!blockVisible[i]) hidden.push(i); }
  if (hidden.length === 0) return -1;
  return hidden[Math.floor(Math.random() * hidden.length)];
}

function updateBright() {
  document.querySelectorAll('.block').forEach((b, i) => {
    if (!blockVisible[i]) b.classList.toggle('bright', i === brightBlock);
  });
}

function stopAnimation() {
  animRunning = false;
  if (brightInterval) clearInterval(brightInterval);
  brightInterval = null;
}

// ========== BOTÓN STOP ==========
function pressStop() {
  if (!animRunning || waitingYesNo) return;

  stopAnimation();
  const idx = brightBlock;

  // Revelar bloque
  blockVisible[idx] = true;
  document.getElementById('block-' + idx)?.classList.add('hidden');

  const assignment = blockLetters[idx];

  if (assignment === 'GOOD') {
    addJokerBadge('⭐', 'green');
    handleGoodJoker();
    restartIfPossible();
    return;
  }
  if (assignment === 'BAD') {
    addJokerBadge('💀', 'red');
    changeScore(-100);
    showToast('💀 ¡Comodín Malo! -100 pts');
    restartIfPossible();
    return;
  }
  if (assignment === null) {
    restartIfPossible();
    return;
  }

  const letter = assignment;

  // Letra ya correcta → saltar
  if (correctLetters.has(letter)) {
    restartIfPossible();
    return;
  }
  // Letra en wrongLetters pero pertenece al nombre → revelar sin penalizar
  if (wrongLetters.has(letter)) {
    if (currentGameName.includes(letter)) {
      wrongLetters.delete(letter);
      addCorrectLetter(letter);
      checkWin();
      if (!isGameOver()) restartIfPossible();
    } else {
      restartIfPossible();
    }
    return;
  }

  // Mostrar panel de pregunta
  currentRevealedLetter = letter;
  document.getElementById('revealed-letter').textContent = letter;
  document.getElementById('letter-panel').classList.add('visible');
  waitingYesNo = true;
  document.getElementById('btn-stop').disabled  = true;
  document.getElementById('btn-guess').disabled = true;
}

function restartIfPossible() {
  if (blockVisible.every(v => v)) {
    document.getElementById('btn-stop').disabled = true;
    return;
  }
  if (!guessMode) {
    startBrightAnimation();
    document.getElementById('btn-stop').disabled  = false;
    document.getElementById('btn-guess').disabled = false;
  }
}

// ========== SÍ / NO ==========
function answerYesNo(userSaidYes) {
  if (!waitingYesNo) return;
  waitingYesNo = false;
  document.getElementById('letter-panel').classList.remove('visible');

  const letter = currentRevealedLetter;
  const inName = currentGameName.includes(letter);

  if (userSaidYes && inName) {
    addCorrectLetter(letter);
  } else if (userSaidYes && !inName) {
    changeScore(-100);
    addWrongLetter(letter, 'red');
  } else if (!userSaidYes && inName) {
    changeScore(-100);
    addCorrectLetter(letter, true);  // penalizada → cuadro rojo
  } else {
    addWrongLetter(letter, 'green');
  }

  checkWin();
  if (!isGameOver()) restartIfPossible();
}

// ========== LETRAS ==========
function addCorrectLetter(letter, penalized = false) {
  correctLetters.add(letter);
  const boxes = document.querySelectorAll('.letter-box:not(.space)');
  let boxIdx = 0;
  for (let i = 0; i < currentGameName.length; i++) {
    if (currentGameName[i] === ' ') continue;
    if (currentGameName[i] === letter) {
      boxes[boxIdx].textContent = letter;
      boxes[boxIdx].classList.add(penalized ? 'wrong' : 'correct');
    }
    boxIdx++;
  }
  const key = document.querySelector(`.qkey[data-letter="${letter}"]`);
  if (key) { key.disabled = true; key.classList.add('used-correct'); }
}

function addJokerBadge(emoji, color) {
  const disc = document.getElementById('discarded-letters');
  const span = document.createElement('span');
  span.className = 'disc-letter ' + color;
  span.textContent = emoji;
  disc.appendChild(span);
}

function addWrongLetter(letter, color) {
  wrongLetters.add(letter);
  const disc = document.getElementById('discarded-letters');
  const span = document.createElement('span');
  span.className = 'disc-letter ' + color;
  span.textContent = letter;
  disc.appendChild(span);
  const key = document.querySelector(`.qkey[data-letter="${letter}"]`);
  if (key) { key.disabled = true; key.classList.add('used-wrong'); }
}

// ========== COMODÍN BUENO ==========
function handleGoodJoker() {
  const remaining = [];
  for (const c of currentGameName) {
    if (c !== ' ' && !correctLetters.has(c)) remaining.push(c);
  }
  if (remaining.length === 0) return;
  const pick = remaining[Math.floor(Math.random() * remaining.length)];
  addCorrectLetter(pick);
  showToast('⭐ ¡Comodín Bueno! La letra ' + pick + ' fue revelada');
  checkWin();
}

// ========== PUNTAJE ==========
function changeScore(delta) {
  score = Math.max(0, score + delta);
  const el = document.getElementById('score-display');
  el.textContent = score;
  if (delta < 0) {
    el.classList.remove('score-hit');
    void el.offsetWidth;  // reflow para reiniciar animación
    el.classList.add('score-hit');
  }
}

// ========== CUADROS DEL NOMBRE ==========
function buildNameBoxes() {
  const container = document.getElementById('name-boxes');
  container.innerHTML = '';
  for (const c of currentGameName) {
    const box = document.createElement('div');
    box.className = (c === ' ') ? 'letter-box space' : 'letter-box';
    container.appendChild(box);
  }
}

// ========== VICTORIA ==========
function isGameOver() {
  for (const c of currentGameName) {
    if (c !== ' ' && !correctLetters.has(c)) return false;
  }
  return true;
}

function checkWin() {
  if (!isGameOver()) return;
  stopAnimation();
  const continent = CONTINENTS[currentContinent];
  savedScores[scoreKey(continent, currentCountryKey)] = score;
  saveScores();
  setTimeout(showWinModal, 500);
}

function showWinModal() {
  const continent = CONTINENTS[currentContinent];
  document.getElementById('modal-flag').src          = IMAGES[continent][currentCountryKey];
  document.getElementById('modal-country').textContent = DISPLAY_NAMES[currentCountryKey];
  document.getElementById('modal-score-val').textContent = score;
  document.getElementById('modal-overlay').classList.add('visible');
}

// ========== MODO ADIVINAR ==========
function enterGuessMode() {
  guessMode = true;
  stopAnimation();
  document.getElementById('btn-stop').disabled  = true;
  document.getElementById('btn-guess').disabled = true;
  document.getElementById('letter-panel').classList.remove('visible');
  document.getElementById('qwerty-panel').classList.add('visible');
}

function buildQwerty() {
  const rowIds = ['qrow1', 'qrow2', 'qrow3'];
  QWERTY_ROWS.forEach((row, ri) => {
    const el = document.getElementById(rowIds[ri]);
    el.innerHTML = '';
    for (const letter of row) {
      const btn = document.createElement('button');
      btn.className = 'qkey';
      btn.textContent = letter;
      btn.dataset.letter = letter;
      btn.addEventListener('click', () => pressQKey(letter));
      el.appendChild(btn);
    }
  });
}

function resetQwertyKeys() {
  document.querySelectorAll('.qkey').forEach(k => {
    k.disabled = false;
    k.classList.remove('used-correct', 'used-wrong');
  });
}

function pressQKey(letter) {
  if (correctLetters.has(letter) || wrongLetters.has(letter)) return;
  if (currentGameName.includes(letter)) {
    addCorrectLetter(letter);
  } else {
    changeScore(-100);
    addWrongLetter(letter, 'red');
  }
  checkWin();
}

// ========== PANTALLA 4 ==========
function renderScreen4() {
  const continent = CONTINENTS[currentContinent];
  document.getElementById('continent-name').textContent = continent;
  const list = document.getElementById('countries-list');
  list.innerHTML = '';
  const countries = [...COUNTRIES[continent]].sort();
  countries.forEach((k, idx) => {
    const key    = scoreKey(continent, k);
    const played = savedScores[key] !== undefined;
    const row    = document.createElement('div');
    row.className = 'country-row';
    row.innerHTML = `
      <span class="c-num">${idx + 1}.</span>
      <span class="c-name">${played ? DISPLAY_NAMES[k] : '?????????'}</span>
      ${played
        ? `<span class="c-score">${savedScores[key]} pts</span>`
        : `<span class="c-unknown">❓</span>`}
    `;
    list.appendChild(row);
  });
}

function changeContinent(dir) {
  currentContinent = (currentContinent + dir + CONTINENTS.length) % CONTINENTS.length;
  renderScreen4();
}

// ========== TOAST ==========
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
