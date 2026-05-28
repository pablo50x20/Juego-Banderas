// ========== GAME DATA ==========
const CONTINENTS = ['AFRICA', 'AMERICA', 'ASIA', 'EUROPA', 'OCEANIA'];

const COUNTRIES = {
  AFRICA: [
    'ANGOLA','ARGELIA','BENIN','BOTSUANA','BURKINA_FASO','BURUNDI','CABO_VERDE',
    'CAMERUN','CHAD','COMORAS','COSTA_DE_MARFIL','EGIPTO','ERITREA','ETIOPIA',
    'GABON','GAMBIA','GHANA','GUINEA','GUINEA_ECUATORIAL','GUINEA_BISAU','KENIA',
    'LESOTO','LIBERIA','LIBIA','MADAGASCAR','MALAUI','MALI','MARRUECOS','MAURICIO',
    'MAURITANIA','MOZAMBIQUE','NAMIBIA','NIGER','NIGERIA','REPUBLICA_CENTROAFRICANA',
    'REPUBLICA_DEL_CONGO','REPUBLICA_DEMOCRATICA_DEL_CONGO','RUANDA',
    'SANTO_TOME_Y_PRINCIPE','SENEGAL','SEYCHELLES','SIERRA_LEONA','SOMALIA',
    'SUDAFRICA','SUDAN','SUDAN_DEL_SUR','TUNEZ','TANZANIA','TOGO','UGANDA',
    'YIBUTI','ZAMBIA','ZIMBABUE'
  ],
  AMERICA: [
    'ANTIGUA_Y_BARBUDA','ARGENTINA','BAHAMAS','BARBADOS','BELICE','BOLIVIA',
    'BRASIL','CANADA','CHILE','COLOMBIA','COSTA_RICA','CUBA','DOMINICA',
    'ECUADOR','EL_SALVADOR','ESTADOS_UNIDOS','GRANADA','GUATEMALA','HAITI',
    'HONDURAS','JAMAICA','MEXICO','NICARAGUA','PANAMA','PARAGUAY','PERU',
    'REPUBLICA_DOMINICANA','SAN_CRISTOBAL_Y_NIEVES','SAN_VICENTE_Y_LAS_GRANADINAS',
    'SANTA_LUCIA','TRINIDAD_Y_TOBAGO','URUGUAY','VENEZUELA'
  ],
  ASIA: [
    'AFGANISTAN','ARABIA_SAUDITA','ARMENIA','AZERBAIYAN','BANGLADESH','BAREIN',
    'BIRMANIA','BRUNEI','BUTAN','CAMBOYA','CATAR','CHINA','CHIPRE',
    'COREA_DEL_NORTE','COREA_DEL_SUR','EMIRATOS_ARABES_UNIDOS','FILIPINAS',
    'GEORGIA','INDIA','INDONESIA','IRAN','IRAK','ISRAEL','JAPON','JORDANIA',
    'KAZAJISTAN','KIRGUISTAN','KUWAIT','LAOS','LIBANO','MALASIA','MALDIVAS',
    'MONGOLIA','OMAN','PAKISTAN','PALESTINA','SINGAPUR','SIRIA','SRI_LANKA',
    'TAILANDIA','TAYIKISTAN','TIMOR_ORIENTAL','TURKMENISTAN','TURQUIA',
    'UZBEKISTAN','VIETNAM','YEMEN'
  ],
  EUROPA: [
    'ALBANIA','ALEMANIA','ANDORRA','AUSTRIA','BELGICA','BIELORRUSIA',
    'BOSNIA_Y_HERZEGOVINA','BULGARIA','CIUDAD_DEL_VATICANO','CROACIA',
    'DINAMARCA','ESCOCIA','ESLOVAQUIA','ESLOVENIA','ESPANA','ESTONIA',
    'FINLANDIA','FRANCIA','GALES','GRECIA','HUNGRIA','INGLATERRA','IRLANDA',
    'ISLANDIA','ITALIA','LETONIA','LIECHTENSTEIN','LITUANIA','LUXEMBURGO',
    'MONACO','MACEDONIA_DEL_NORTE','MALTA','MOLDAVIA','MONTENEGRO','NORUEGA',
    'PAISES_BAJOS','POLONIA','PORTUGAL','REPUBLICA_CHECA','RUMANIA','RUSIA',
    'SAN_MARINO','SERBIA','SUECIA','SUIZA','UCRANIA'
  ],
  OCEANIA: [
    'AUSTRALIA','ESTADOS_FEDERADOS_DE_MICRONESIA','FIYI','ISLAS_MARSHALL',
    'ISLAS_SALOMON','KIRIBATI','NAURU','NUEVA_ZELANDA','PALAOS',
    'PAPUA_NUEVA_GUINEA','SAMOA','TONGA','TUVALU','VANUATU'
  ]
};

const DISPLAY_NAMES = {
  // AFRICA
  ANGOLA:'ANGOLA', ARGELIA:'ARGELIA', BENIN:'BENÍN', BOTSUANA:'BOTSUANA',
  BURKINA_FASO:'BURKINA FASO', BURUNDI:'BURUNDI', CABO_VERDE:'CABO VERDE',
  CAMERUN:'CAMERÚN', CHAD:'CHAD', COMORAS:'COMORAS', COSTA_DE_MARFIL:'COSTA DE MARFIL',
  EGIPTO:'EGIPTO', ERITREA:'ERITREA', ETIOPIA:'ETIOPÍA', GABON:'GABÓN',
  GAMBIA:'GAMBIA', GHANA:'GHANA', GUINEA:'GUINEA', GUINEA_ECUATORIAL:'GUINEA ECUATORIAL',
  GUINEA_BISAU:'GUINEA-BISÁU', KENIA:'KENIA', LESOTO:'LESOTO', LIBERIA:'LIBERIA',
  LIBIA:'LIBIA', MADAGASCAR:'MADAGASCAR', MALAUI:'MALAUI', MALI:'MALÍ',
  MARRUECOS:'MARRUECOS', MAURICIO:'MAURICIO', MAURITANIA:'MAURITANIA',
  MOZAMBIQUE:'MOZAMBIQUE', NAMIBIA:'NAMIBIA', NIGER:'NÍGER', NIGERIA:'NIGERIA',
  REPUBLICA_CENTROAFRICANA:'REPÚBLICA CENTROAFRICANA',
  REPUBLICA_DEL_CONGO:'REPÚBLICA DEL CONGO',
  REPUBLICA_DEMOCRATICA_DEL_CONGO:'REPÚBLICA DEMOCRÁTICA DEL CONGO',
  RUANDA:'RUANDA', SANTO_TOME_Y_PRINCIPE:'SANTO TOMÉ Y PRÍNCIPE',
  SENEGAL:'SENEGAL', SEYCHELLES:'SEYCHELLES', SIERRA_LEONA:'SIERRA LEONA',
  SOMALIA:'SOMALIA', SUDAFRICA:'SUDÁFRICA', SUDAN:'SUDÁN', SUDAN_DEL_SUR:'SUDÁN DEL SUR',
  TUNEZ:'TÚNEZ', TANZANIA:'TANZANIA', TOGO:'TOGO', UGANDA:'UGANDA',
  YIBUTI:'YIBUTI', ZAMBIA:'ZAMBIA', ZIMBABUE:'ZIMBABUE',
  // AMERICA
  ANTIGUA_Y_BARBUDA:'ANTIGUA Y BARBUDA', ARGENTINA:'ARGENTINA', BAHAMAS:'BAHAMAS',
  BARBADOS:'BARBADOS', BELICE:'BELICE', BOLIVIA:'BOLIVIA', BRASIL:'BRASIL',
  CANADA:'CANADÁ', CHILE:'CHILE', COLOMBIA:'COLOMBIA', COSTA_RICA:'COSTA RICA',
  CUBA:'CUBA', DOMINICA:'DOMÍNICA', ECUADOR:'ECUADOR', EL_SALVADOR:'EL SALVADOR',
  ESTADOS_UNIDOS:'ESTADOS UNIDOS', GRANADA:'GRANADA', GUATEMALA:'GUATEMALA',
  HAITI:'HAITÍ', HONDURAS:'HONDURAS', JAMAICA:'JAMAICA', MEXICO:'MÉXICO',
  NICARAGUA:'NICARAGUA', PANAMA:'PANAMÁ', PARAGUAY:'PARAGUAY', PERU:'PERÚ',
  REPUBLICA_DOMINICANA:'REPÚBLICA DOMINICANA',
  SAN_CRISTOBAL_Y_NIEVES:'SAN CRISTÓBAL Y NIEVES',
  SAN_VICENTE_Y_LAS_GRANADINAS:'SAN VICENTE Y LAS GRANADINAS',
  SANTA_LUCIA:'SANTA LUCÍA', TRINIDAD_Y_TOBAGO:'TRINIDAD Y TOBAGO',
  URUGUAY:'URUGUAY', VENEZUELA:'VENEZUELA',
  // ASIA
  AFGANISTAN:'AFGANISTÁN', ARABIA_SAUDITA:'ARABIA SAUDITA', ARMENIA:'ARMENIA',
  AZERBAIYAN:'AZERBAIYÁN', BANGLADESH:'BANGLADÉS', BAREIN:'BARÉIN',
  BIRMANIA:'BIRMANIA', BRUNEI:'BRUNÉI', BUTAN:'BUTÁN', CAMBOYA:'CAMBOYA',
  CATAR:'CATAR', CHINA:'CHINA', CHIPRE:'CHIPRE', COREA_DEL_NORTE:'COREA DEL NORTE',
  COREA_DEL_SUR:'COREA DEL SUR', EMIRATOS_ARABES_UNIDOS:'EMIRATOS ÁRABES UNIDOS',
  FILIPINAS:'FILIPINAS', GEORGIA:'GEORGIA', INDIA:'INDIA', INDONESIA:'INDONESIA',
  IRAN:'IRÁN', IRAK:'IRAK', ISRAEL:'ISRAEL', JAPON:'JAPÓN', JORDANIA:'JORDANIA',
  KAZAJISTAN:'KAZAJISTÁN', KIRGUISTAN:'KIRGUISTÁN', KUWAIT:'KUWAIT',
  LAOS:'LAOS', LIBANO:'LÍBANO', MALASIA:'MALASIA', MALDIVAS:'MALDIVAS',
  MONGOLIA:'MONGOLIA', OMAN:'OMÁN', PAKISTAN:'PAKISTÁN', PALESTINA:'PALESTINA',
  SINGAPUR:'SINGAPUR', SIRIA:'SIRIA', SRI_LANKA:'SRI LANKA', TAILANDIA:'TAILANDIA',
  TAYIKISTAN:'TAYIKISTÁN', TIMOR_ORIENTAL:'TIMOR ORIENTAL',
  TURKMENISTAN:'TURKMENISTÁN', TURQUIA:'TURQUÍA', UZBEKISTAN:'UZBEKISTÁN',
  VIETNAM:'VIETNAM', YEMEN:'YEMEN',
  // EUROPA
  ALBANIA:'ALBANIA', ALEMANIA:'ALEMANIA', ANDORRA:'ANDORRA', AUSTRIA:'AUSTRIA',
  BELGICA:'BÉLGICA', BIELORRUSIA:'BIELORRUSIA', BOSNIA_Y_HERZEGOVINA:'BOSNIA Y HERZEGOVINA',
  BULGARIA:'BULGARIA', CIUDAD_DEL_VATICANO:'CIUDAD DEL VATICANO', CROACIA:'CROACIA',
  DINAMARCA:'DINAMARCA', ESCOCIA:'ESCOCIA', ESLOVAQUIA:'ESLOVAQUIA',
  ESLOVENIA:'ESLOVENIA', ESPANA:'ESPAÑA', ESTONIA:'ESTONIA', FINLANDIA:'FINLANDIA',
  FRANCIA:'FRANCIA', GALES:'GALES', GRECIA:'GRECIA', HUNGRIA:'HUNGRÍA',
  INGLATERRA:'INGLATERRA', IRLANDA:'IRLANDA', ISLANDIA:'ISLANDIA', ITALIA:'ITALIA',
  LETONIA:'LETONIA', LIECHTENSTEIN:'LIECHTENSTEIN', LITUANIA:'LITUANIA',
  LUXEMBURGO:'LUXEMBURGO', MONACO:'MÓNACO', MACEDONIA_DEL_NORTE:'MACEDONIA DEL NORTE',
  MALTA:'MALTA', MOLDAVIA:'MOLDAVIA', MONTENEGRO:'MONTENEGRO', NORUEGA:'NORUEGA',
  PAISES_BAJOS:'PAÍSES BAJOS', POLONIA:'POLONIA', PORTUGAL:'PORTUGAL',
  REPUBLICA_CHECA:'REPÚBLICA CHECA', RUMANIA:'RUMANIA', RUSIA:'RUSIA',
  SAN_MARINO:'SAN MARINO', SERBIA:'SERBIA', SUECIA:'SUECIA', SUIZA:'SUIZA',
  UCRANIA:'UCRANIA',
  // OCEANIA
  AUSTRALIA:'AUSTRALIA', ESTADOS_FEDERADOS_DE_MICRONESIA:'ESTADOS FEDERADOS DE MICRONESIA',
  FIYI:'FIYI', ISLAS_MARSHALL:'ISLAS MARSHALL', ISLAS_SALOMON:'ISLAS SALOMÓN',
  KIRIBATI:'KIRIBATI', NAURU:'NAURU', NUEVA_ZELANDA:'NUEVA ZELANDA',
  PALAOS:'PALAOS', PAPUA_NUEVA_GUINEA:'PAPÚA NUEVA GUINEA', SAMOA:'SAMOA',
  TONGA:'TONGA', TUVALU:'TUVALU', VANUATU:'VANUATU',
};

// Nombres para lógica del juego (sin tildes, Ñ se mantiene)
const GAME_NAMES = {
  // AFRICA
  ANGOLA:'ANGOLA', ARGELIA:'ARGELIA', BENIN:'BENIN', BOTSUANA:'BOTSUANA',
  BURKINA_FASO:'BURKINA FASO', BURUNDI:'BURUNDI', CABO_VERDE:'CABO VERDE',
  CAMERUN:'CAMERUN', CHAD:'CHAD', COMORAS:'COMORAS', COSTA_DE_MARFIL:'COSTA DE MARFIL',
  EGIPTO:'EGIPTO', ERITREA:'ERITREA', ETIOPIA:'ETIOPIA', GABON:'GABON',
  GAMBIA:'GAMBIA', GHANA:'GHANA', GUINEA:'GUINEA', GUINEA_ECUATORIAL:'GUINEA ECUATORIAL',
  GUINEA_BISAU:'GUINEA-BISAU', KENIA:'KENIA', LESOTO:'LESOTO', LIBERIA:'LIBERIA',
  LIBIA:'LIBIA', MADAGASCAR:'MADAGASCAR', MALAUI:'MALAUI', MALI:'MALI',
  MARRUECOS:'MARRUECOS', MAURICIO:'MAURICIO', MAURITANIA:'MAURITANIA',
  MOZAMBIQUE:'MOZAMBIQUE', NAMIBIA:'NAMIBIA', NIGER:'NIGER', NIGERIA:'NIGERIA',
  REPUBLICA_CENTROAFRICANA:'REPUBLICA CENTROAFRICANA',
  REPUBLICA_DEL_CONGO:'REPUBLICA DEL CONGO',
  REPUBLICA_DEMOCRATICA_DEL_CONGO:'REPUBLICA DEMOCRATICA DEL CONGO',
  RUANDA:'RUANDA', SANTO_TOME_Y_PRINCIPE:'SANTO TOME Y PRINCIPE',
  SENEGAL:'SENEGAL', SEYCHELLES:'SEYCHELLES', SIERRA_LEONA:'SIERRA LEONA',
  SOMALIA:'SOMALIA', SUDAFRICA:'SUDAFRICA', SUDAN:'SUDAN', SUDAN_DEL_SUR:'SUDAN DEL SUR',
  TUNEZ:'TUNEZ', TANZANIA:'TANZANIA', TOGO:'TOGO', UGANDA:'UGANDA',
  YIBUTI:'YIBUTI', ZAMBIA:'ZAMBIA', ZIMBABUE:'ZIMBABUE',
  // AMERICA
  ANTIGUA_Y_BARBUDA:'ANTIGUA Y BARBUDA', ARGENTINA:'ARGENTINA', BAHAMAS:'BAHAMAS',
  BARBADOS:'BARBADOS', BELICE:'BELICE', BOLIVIA:'BOLIVIA', BRASIL:'BRASIL',
  CANADA:'CANADA', CHILE:'CHILE', COLOMBIA:'COLOMBIA', COSTA_RICA:'COSTA RICA',
  CUBA:'CUBA', DOMINICA:'DOMINICA', ECUADOR:'ECUADOR', EL_SALVADOR:'EL SALVADOR',
  ESTADOS_UNIDOS:'ESTADOS UNIDOS', GRANADA:'GRANADA', GUATEMALA:'GUATEMALA',
  HAITI:'HAITI', HONDURAS:'HONDURAS', JAMAICA:'JAMAICA', MEXICO:'MEXICO',
  NICARAGUA:'NICARAGUA', PANAMA:'PANAMA', PARAGUAY:'PARAGUAY', PERU:'PERU',
  REPUBLICA_DOMINICANA:'REPUBLICA DOMINICANA',
  SAN_CRISTOBAL_Y_NIEVES:'SAN CRISTOBAL Y NIEVES',
  SAN_VICENTE_Y_LAS_GRANADINAS:'SAN VICENTE Y LAS GRANADINAS',
  SANTA_LUCIA:'SANTA LUCIA', TRINIDAD_Y_TOBAGO:'TRINIDAD Y TOBAGO',
  URUGUAY:'URUGUAY', VENEZUELA:'VENEZUELA',
  // ASIA
  AFGANISTAN:'AFGANISTAN', ARABIA_SAUDITA:'ARABIA SAUDITA', ARMENIA:'ARMENIA',
  AZERBAIYAN:'AZERBAIYAN', BANGLADESH:'BANGLADESH', BAREIN:'BAREIN',
  BIRMANIA:'BIRMANIA', BRUNEI:'BRUNEI', BUTAN:'BUTAN', CAMBOYA:'CAMBOYA',
  CATAR:'CATAR', CHINA:'CHINA', CHIPRE:'CHIPRE', COREA_DEL_NORTE:'COREA DEL NORTE',
  COREA_DEL_SUR:'COREA DEL SUR', EMIRATOS_ARABES_UNIDOS:'EMIRATOS ARABES UNIDOS',
  FILIPINAS:'FILIPINAS', GEORGIA:'GEORGIA', INDIA:'INDIA', INDONESIA:'INDONESIA',
  IRAN:'IRAN', IRAK:'IRAK', ISRAEL:'ISRAEL', JAPON:'JAPON', JORDANIA:'JORDANIA',
  KAZAJISTAN:'KAZAJISTAN', KIRGUISTAN:'KIRGUISTAN', KUWAIT:'KUWAIT',
  LAOS:'LAOS', LIBANO:'LIBANO', MALASIA:'MALASIA', MALDIVAS:'MALDIVAS',
  MONGOLIA:'MONGOLIA', OMAN:'OMAN', PAKISTAN:'PAKISTAN', PALESTINA:'PALESTINA',
  SINGAPUR:'SINGAPUR', SIRIA:'SIRIA', SRI_LANKA:'SRI LANKA', TAILANDIA:'TAILANDIA',
  TAYIKISTAN:'TAYIKISTAN', TIMOR_ORIENTAL:'TIMOR ORIENTAL',
  TURKMENISTAN:'TURKMENISTAN', TURQUIA:'TURQUIA', UZBEKISTAN:'UZBEKISTAN',
  VIETNAM:'VIETNAM', YEMEN:'YEMEN',
  // EUROPA
  ALBANIA:'ALBANIA', ALEMANIA:'ALEMANIA', ANDORRA:'ANDORRA', AUSTRIA:'AUSTRIA',
  BELGICA:'BELGICA', BIELORRUSIA:'BIELORRUSIA', BOSNIA_Y_HERZEGOVINA:'BOSNIA Y HERZEGOVINA',
  BULGARIA:'BULGARIA', CIUDAD_DEL_VATICANO:'CIUDAD DEL VATICANO', CROACIA:'CROACIA',
  DINAMARCA:'DINAMARCA', ESCOCIA:'ESCOCIA', ESLOVAQUIA:'ESLOVAQUIA',
  ESLOVENIA:'ESLOVENIA', ESPANA:'ESPAÑA', ESTONIA:'ESTONIA', FINLANDIA:'FINLANDIA',
  FRANCIA:'FRANCIA', GALES:'GALES', GRECIA:'GRECIA', HUNGRIA:'HUNGRIA',
  INGLATERRA:'INGLATERRA', IRLANDA:'IRLANDA', ISLANDIA:'ISLANDIA', ITALIA:'ITALIA',
  LETONIA:'LETONIA', LIECHTENSTEIN:'LIECHTENSTEIN', LITUANIA:'LITUANIA',
  LUXEMBURGO:'LUXEMBURGO', MONACO:'MONACO', MACEDONIA_DEL_NORTE:'MACEDONIA DEL NORTE',
  MALTA:'MALTA', MOLDAVIA:'MOLDAVIA', MONTENEGRO:'MONTENEGRO', NORUEGA:'NORUEGA',
  PAISES_BAJOS:'PAISES BAJOS', POLONIA:'POLONIA', PORTUGAL:'PORTUGAL',
  REPUBLICA_CHECA:'REPUBLICA CHECA', RUMANIA:'RUMANIA', RUSIA:'RUSIA',
  SAN_MARINO:'SAN MARINO', SERBIA:'SERBIA', SUECIA:'SUECIA', SUIZA:'SUIZA',
  UCRANIA:'UCRANIA',
  // OCEANIA
  AUSTRALIA:'AUSTRALIA', ESTADOS_FEDERADOS_DE_MICRONESIA:'ESTADOS FEDERADOS DE MICRONESIA',
  FIYI:'FIYI', ISLAS_MARSHALL:'ISLAS MARSHALL', ISLAS_SALOMON:'ISLAS SALOMON',
  KIRIBATI:'KIRIBATI', NAURU:'NAURU', NUEVA_ZELANDA:'NUEVA ZELANDA',
  PALAOS:'PALAOS', PAPUA_NUEVA_GUINEA:'PAPUA NUEVA GUINEA', SAMOA:'SAMOA',
  TONGA:'TONGA', TUVALU:'TUVALU', VANUATU:'VANUATU',
};

const ALPHABET = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
const QWERTY_ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNMÑ'];

// ========== ESTADO ==========
let musicOn = true, sfxOn = true;
let currentContinent = 0;
let currentCountryKey = '';
let currentGameName = '';
let score = 0;
let blockLetters = [], blockVisible = [];
let brightBlock = 0, brightInterval = null, animRunning = false;
let waitingYesNo = false, currentRevealedLetter = '', guessMode = false;
let correctLetters = new Set(), wrongLetters = new Set();
let savedScores = {};
let selectedContinents = new Set(['AFRICA','AMERICA','ASIA','EUROPA','OCEANIA']); // todos por defecto
let filteredMode = false; // true cuando se juega desde pantalla 5

// ========== INICIO ==========
window.addEventListener('load', () => {
  loadSavedScores();
  document.getElementById('logo-img').src = IMAGES.LOGO;
  buildQwerty();
  goScreen(1);
  document.getElementById('btn-music').addEventListener('click', toggleMusic);
  document.getElementById('btn-sfx').addEventListener('click', toggleSFX);
});

function loadSavedScores() {
  try { const s = localStorage.getItem('quizbanderas_scores'); if (s) savedScores = JSON.parse(s); }
  catch (e) { savedScores = {}; }
}
function saveScores() { localStorage.setItem('quizbanderas_scores', JSON.stringify(savedScores)); }
function scoreKey(continent, country) { return continent + '/' + country; }

// ========== NAVEGACIÓN ==========
function goScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');
  document.getElementById('sound-bar').style.display = (n === 1) ? 'none' : 'flex';
  if (n === 4) renderScreen4();
  if (n === 5) renderScreen5();
}

// ========== SONIDO ==========
function toggleMusic() { musicOn = !musicOn; updateSoundUI(); }
function toggleSFX()   { sfxOn   = !sfxOn;   updateSoundUI(); }
function updateSoundUI() {
  document.getElementById('s1-music').textContent = '🎵 Música: ' + (musicOn ? 'ON' : 'OFF');
  document.getElementById('s1-sfx').textContent   = '🔔 Sonidos: ' + (sfxOn  ? 'ON' : 'OFF');
  document.getElementById('btn-music').classList.toggle('off', !musicOn);
  document.getElementById('btn-sfx').classList.toggle('off', !sfxOn);
}

// ========== INICIO PARTIDA ==========
function startGame() {
  // Siempre usa todos los continentes (botón JUGAR de pantalla 2)
  filteredMode = false;
  playFromPool(CONTINENTS);
}

function startGameFiltered() {
  // Usa solo los continentes seleccionados en pantalla 5
  if (selectedContinents.size === 0) { showToast('⚠️ Elige al menos un continente'); return; }
  filteredMode = true;
  playFromPool([...selectedContinents]);
}

function playFromPool(continentList) {
  const all = [];
  for (const c of continentList) for (const k of COUNTRIES[c]) all.push({ continent: c, key: k });
  const unplayed = all.filter(x => savedScores[scoreKey(x.continent, x.key)] === undefined);
  if (unplayed.length === 0) { showToast('🏆 ¡Completaste todas las banderas!'); goScreen(4); return; }
  const pick = unplayed[Math.floor(Math.random() * unplayed.length)];
  loadRound(pick.continent, pick.key);
}

function nextFlag() {
  document.getElementById('modal-overlay').classList.remove('visible');
  if (filteredMode) startGameFiltered();
  else startGame();
}

function loadRound(continent, countryKey) {
  currentContinent  = CONTINENTS.indexOf(continent);
  currentCountryKey = countryKey;
  currentGameName   = GAME_NAMES[countryKey];
  score = 1000;
  correctLetters = new Set(); wrongLetters = new Set();
  guessMode = false; waitingYesNo = false; currentRevealedLetter = '';

  document.getElementById('flag-img').src = IMAGES[continent][countryKey];
  buildBlocks(); buildNameBoxes();
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
  const pool = [...ALPHABET, 'GOOD', 'BAD', null];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  blockLetters = pool;
  blockVisible = new Array(30).fill(false);
  blockVisible[blockLetters.indexOf(null)] = true;
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
  return hidden.length === 0 ? -1 : hidden[Math.floor(Math.random() * hidden.length)];
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
  // Quitar el brillo de todos los bloques
  document.querySelectorAll('.block').forEach(b => b.classList.remove('bright'));
}

// ========== BOTÓN STOP ==========
function pressStop() {
  if (!animRunning || waitingYesNo) return;
  stopAnimation();
  const idx = brightBlock;
  blockVisible[idx] = true;
  document.getElementById('block-' + idx)?.classList.add('hidden');
  const assignment = blockLetters[idx];

  if (assignment === 'GOOD') { addJokerBadge('⭐','green'); handleGoodJoker(); restartIfPossible(); return; }
  if (assignment === 'BAD')  { addJokerBadge('💀','red'); changeScore(-100); showToast('💀 ¡Comodín Malo! -100 pts'); restartIfPossible(); return; }
  if (assignment === null)   { restartIfPossible(); return; }

  const letter = assignment;
  if (correctLetters.has(letter)) { restartIfPossible(); return; }
  if (wrongLetters.has(letter)) {
    if (currentGameName.includes(letter)) { wrongLetters.delete(letter); addCorrectLetter(letter); checkWin(); if (!isGameOver()) restartIfPossible(); }
    else { restartIfPossible(); }
    return;
  }

  currentRevealedLetter = letter;
  document.getElementById('revealed-letter').textContent = letter;
  document.getElementById('letter-panel').classList.add('visible');
  waitingYesNo = true;
  document.getElementById('btn-stop').disabled  = true;
  document.getElementById('btn-guess').disabled = true;
}

function restartIfPossible() {
  if (blockVisible.every(v => v)) { document.getElementById('btn-stop').disabled = true; return; }
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
  if      ( userSaidYes &&  inName) { addCorrectLetter(letter); }
  else if ( userSaidYes && !inName) { changeScore(-100); addWrongLetter(letter, 'red'); }
  else if (!userSaidYes &&  inName) { changeScore(-100); addCorrectLetter(letter, true); }
  else                              { addWrongLetter(letter, 'green'); }
  checkWin();
  if (!isGameOver()) restartIfPossible();
}

// ========== LETRAS ==========
function addCorrectLetter(letter, penalized = false) {
  correctLetters.add(letter);
  const boxes = document.querySelectorAll('.word-group .letter-box');
  let boxIdx = 0;
  for (let i = 0; i < currentGameName.length; i++) {
    if (currentGameName[i] === ' ') continue;
    if (currentGameName[i] === letter) { boxes[boxIdx].textContent = letter; boxes[boxIdx].classList.add(penalized ? 'wrong' : 'correct'); }
    boxIdx++;
  }
  const key = document.querySelector(`.qkey[data-letter="${letter}"]`);
  if (key) { key.disabled = true; key.classList.add('used-correct'); }
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

function addJokerBadge(emoji, color) {
  const disc = document.getElementById('discarded-letters');
  const span = document.createElement('span');
  span.className = 'disc-letter ' + color;
  span.textContent = emoji;
  disc.appendChild(span);
}

function handleGoodJoker() {
  const remaining = [];
  for (const c of currentGameName) { if (c !== ' ' && !correctLetters.has(c)) remaining.push(c); }
  if (remaining.length === 0) return;
  const pick = remaining[Math.floor(Math.random() * remaining.length)];
  addCorrectLetter(pick);
  showToast('⭐ ¡Comodín Bueno! La letra ' + pick + ' fue revelada');
  checkWin();
}

function changeScore(delta) {
  score = Math.max(0, score + delta);
  const el = document.getElementById('score-display');
  el.textContent = score;
  if (delta < 0) { el.classList.remove('score-hit'); void el.offsetWidth; el.classList.add('score-hit'); }
}

function buildNameBoxes() {
  const container = document.getElementById('name-boxes');
  container.innerHTML = '';

  const words = currentGameName.split(' ');
  const totalLetters = currentGameName.replace(/ /g, '').length;

  // Size class based on total letters
  const sizeClass = totalLetters >= 16 ? 'size-sm' : totalLetters >= 12 ? 'size-md' : '';

  // Multi-line: total letters > 11 AND more than one word
  const multiLine = totalLetters > 11 && words.length > 1;

  if (multiLine) {
    // Group joiners with the word that follows them
    const JOINERS = new Set(['Y','DE','DEL','EL','LA','LAS','SAN','SANTA']);
    const lineGroups = [];
    let i = 0;
    while (i < words.length) {
      if (JOINERS.has(words[i]) && i + 1 < words.length) {
        lineGroups.push(words[i] + ' ' + words[i + 1]);
        i += 2;
      } else {
        lineGroups.push(words[i]);
        i++;
      }
    }
    lineGroups.forEach(lineText => {
      const group = document.createElement('div');
      group.className = 'word-group' + (sizeClass ? ' ' + sizeClass : '');
      for (const c of lineText) {
        if (c === ' ') {
          const sp = document.createElement('div');
          sp.className = 'word-space';
          group.appendChild(sp);
        } else {
          const box = document.createElement('div');
          box.className = 'letter-box';
          group.appendChild(box);
        }
      }
      container.appendChild(group);
    });
  } else {
    // Single row (single word, or short multi-word like COSTA RICA)
    const group = document.createElement('div');
    group.className = 'word-group' + (sizeClass ? ' ' + sizeClass : '');
    for (const c of currentGameName) {
      if (c === ' ') {
        const sp = document.createElement('div');
        sp.className = 'word-space';
        group.appendChild(sp);
      } else {
        const box = document.createElement('div');
        box.className = 'letter-box';
        group.appendChild(box);
      }
    }
    container.appendChild(group);
  }
}

function isGameOver() {
  for (const c of currentGameName) { if (c !== ' ' && !correctLetters.has(c)) return false; }
  return true;
}

function checkWin() {
  if (!isGameOver()) return;
  stopAnimation();
  savedScores[scoreKey(CONTINENTS[currentContinent], currentCountryKey)] = score;
  saveScores();
  setTimeout(showWinModal, 500);
}

function showWinModal() {
  const continent = CONTINENTS[currentContinent];
  document.getElementById('modal-flag').src             = IMAGES[continent][currentCountryKey];
  document.getElementById('modal-country').textContent  = DISPLAY_NAMES[currentCountryKey];
  document.getElementById('modal-score-val').textContent = score;
  document.getElementById('modal-overlay').classList.add('visible');
}

// ========== MODO ADIVINAR ==========
function enterGuessMode() {
  guessMode = true; stopAnimation();
  document.getElementById('btn-stop').disabled  = true;
  document.getElementById('btn-guess').disabled = true;
  document.getElementById('letter-panel').classList.remove('visible');
  document.getElementById('qwerty-panel').classList.add('visible');
}

function buildQwerty() {
  ['qrow1','qrow2','qrow3'].forEach((rowId, ri) => {
    const el = document.getElementById(rowId);
    el.innerHTML = '';
    for (const letter of QWERTY_ROWS[ri]) {
      const btn = document.createElement('button');
      btn.className = 'qkey'; btn.textContent = letter; btn.dataset.letter = letter;
      btn.addEventListener('click', () => pressQKey(letter));
      el.appendChild(btn);
    }
  });
}

function resetQwertyKeys() {
  document.querySelectorAll('.qkey').forEach(k => { k.disabled = false; k.classList.remove('used-correct','used-wrong'); });
}

function pressQKey(letter) {
  if (correctLetters.has(letter) || wrongLetters.has(letter)) return;
  if (currentGameName.includes(letter)) { addCorrectLetter(letter); }
  else { changeScore(-100); addWrongLetter(letter, 'red'); }
  checkWin();
}

// ========== PANTALLA 5: Elegir Continentes ==========
const CONTINENT_META = {
  AFRICA:  { emoji: '🌍', label: 'ÁFRICA' },
  AMERICA: { emoji: '🌎', label: 'AMÉRICA' },
  ASIA:    { emoji: '🌏', label: 'ASIA' },
  EUROPA:  { emoji: '🏰', label: 'EUROPA' },
  OCEANIA: { emoji: '🌊', label: 'OCEANÍA' },
};

function renderScreen5() {
  const container = document.getElementById('continent-checkboxes');
  container.innerHTML = '';
  for (const c of CONTINENTS) {
    const meta  = CONTINENT_META[c];
    const count = COUNTRIES[c].length;
    const isSelected = selectedContinents.has(c);
    const div = document.createElement('div');
    div.className = 'continent-option' + (isSelected ? ' selected' : '');
    div.innerHTML = `
      <span class="c-emoji">${meta.emoji}</span>
      <span class="c-label">${meta.label}</span>
      <span class="c-count">${count} países</span>
      <span class="c-check">${isSelected ? '✓' : ''}</span>
    `;
    div.addEventListener('click', () => toggleContinent(c));
    container.appendChild(div);
  }
}

function toggleContinent(c) {
  if (selectedContinents.has(c)) { selectedContinents.delete(c); }
  else { selectedContinents.add(c); }
  renderScreen5();
}

function selectAllContinents() {
  CONTINENTS.forEach(c => selectedContinents.add(c));
  renderScreen5();
}

function clearAllContinents() {
  selectedContinents.clear();
  renderScreen5();
}

// ========== PANTALLA 4 ==========
function renderScreen4() {
  const continent = CONTINENTS[currentContinent];
  document.getElementById('continent-name').textContent = continent;
  const total = COUNTRIES[continent].length;
  const played = COUNTRIES[continent].filter(k => savedScores[scoreKey(continent, k)] !== undefined).length;
  document.getElementById('continent-progress').textContent = played + ' / ' + total + ' países';
  const list = document.getElementById('countries-list');
  list.innerHTML = '';
  [...COUNTRIES[continent]].sort().forEach((k, idx) => {
    const key = scoreKey(continent, k), played = savedScores[key] !== undefined;
    const row = document.createElement('div');
    row.className = 'country-row';
    row.innerHTML = `
      <span class="c-num">${idx+1}.</span>
      <span class="c-name">${played ? DISPLAY_NAMES[k] : '?????????'}</span>
      ${played ? `<span class="c-score">${savedScores[key]} pts</span>` : `<span class="c-unknown">❓</span>`}
    `;
    list.appendChild(row);
  });
}

function changeContinent(dir) {
  currentContinent = (currentContinent + dir + CONTINENTS.length) % CONTINENTS.length;
  renderScreen4();
}

// Helper para botón "Jugar Siguiente Bandera" en pantalla 4
function nextRound() {
  if (filteredMode) startGameFiltered();
  else startGame();
}

// ========== TOAST ==========
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}