// ---- script 1 ----

/* ======================================================
   DICCIONARIO MULTILINGÜE
====================================================== */
const i18n = {
  es: {
    langLabel: "Idioma:",
    inputTitle: "1. Fuente de Audio",
    uploadLabel: "Importar archivo MP3:",
    btnRecord: "Grabar Micrófono",
    btnStopRecord: "Detener",
    recReady: "Micrófono inactivo",
    recActive: "Grabando...",
    timelineTitle: "2. Editor de Audio y Línea de Tiempo",
    editorHint: "Arrastra sobre la onda con el ratón para seleccionar un tramo o pulsa 'Seleccionar Todo'. Puedes cortar, silenciar, aplicar efectos o fraccionar en lapsos continuos idénticos.",
    btnPlay: "▶ Reproducir",
    btnPlaySel: "▶ Tramo",
    btnStop: "⏹ Detener",
    btnSelectAll: "Seleccionar Todo",
    btnFxSel: "✨ FX a Selección",
    btnCrop: "✂ Recortar",
    btnDelete: "🗑 Borrar",
    btnSilence: "🔇 Silenciar",
    btnUndo: "↩ Deshacer",
    autoSliceLabel: "Partir continuo cada:",
    btnAutoSlice: "Procesar Lapsos Continuos",
    eqTitle: "3. Ecualizador Gráfico (7 Bandas)",
    fxTitle: "4. Efectos de Audio",
    fxRobot: "Voz Robótica (Ring Modulator)",
    fxRobotFreq: "Frecuencia Portadora:",
    fxEcho: "Eco / Retardo",
    fxEchoTime: "Tiempo de Retardo (s):",
    fxEchoFeedback: "Retroalimentación (Eco):",
    exportTitle: "5. Exportación",
    btnExportMp3: "Exportar Audio MP3",
    btnExportMp4: "Exportar Video MP4 (Pantalla Negra)",
    btnExportPartsMp4: "Exportar PARTES en Video MP4 (Pantalla Negra)",
    exportingMp3: "Codificando MP3...",
    exportingMp4: "Generando Video MP4...",
    exportingPart: "Exportando parte {current} de {total}...",
    exportSuccess: "¡Archivo generado con éxito!",
    exportPartsSuccess: "¡Todas las partes exportadas exitosamente!",
    slicesReady: "¡{count} partes generadas con 0ms de pérdida!",
    manualTitle: "¿Para qué sirve esta página y Manual de Uso?",
    manualHtml: `
      <h3>¿Para qué sirve AudioLab Studio Pro?</h3>
      <p><strong>AudioLab Studio Pro</strong> es una estación de trabajo de audio digital (DAW) ligera, profesional y 100% basada en navegador web. Permite a creadores de contenido, podcasters, locutores, docentes y músicos editar, mejorar, ecualizar y fragmentar grabaciones sin necesidad de instalar programas pesados ni cargar sus archivos a servidores externos, garantizando máxima velocidad y total privacidad.</p>
      <p>Su función estrella de <strong>fragmentación continua con precisión a nivel de muestra</strong> resuelve una de las necesidades más demandadas de las redes sociales actuales: dividir audios o conferencias largas en bloques perfectos y consecutivos (de 5, 10, 15, 30 o 60 segundos) sin perder ni un solo milisegundo de información. Además, permite exportar cada bloque automáticamente como videos en formato <strong>MP4 con pantalla negra</strong> listos para subir como historias, reels, shorts o lecciones educativas consecutivas sin necesidad de abrir un editor de video.</p>
      
      <h3>Guía rápida de uso:</h3>
      <ol>
        <li><strong>Importar o Grabar:</strong> Carga cualquier archivo MP3 o graba tu voz en directo utilizando el micrófono.</li>
        <li><strong>Línea de Tiempo y Selección:</strong> Arrastra el ratón sobre la onda para marcar un fragmento o pulsa <em>"Seleccionar Todo"</em> para abarcar la pista entera.</li>
        <li><strong>Procesar Lapsos Continuos:</strong> Elige la duración (ej. 10s) y haz clic en <em>"Procesar Lapsos Continuos"</em>. El sistema cortará la onda sin pérdida y visualizará las divisiones correlativas (P1, P2, P3...) en la línea de tiempo.</li>
        <li><strong>Ecualización y Efectos:</strong> Modela las frecuencias con el ecualizador de 7 bandas o activa la voz robótica y el eco delay.</li>
        <li><strong>Exportación:</strong> Puedes descargar el audio completo en MP3, el video completo en MP4 o pulsar <em>"Exportar PARTES en Video MP4 (Pantalla Negra)"</em> para obtener automáticamente cada fragmento enumerado y consecutivo.</li>
      </ol>`
  },
  en: {
    langLabel: "Language:",
    inputTitle: "1. Audio Source",
    uploadLabel: "Import MP3 file:",
    btnRecord: "Record Microphone",
    btnStopRecord: "Stop",
    recReady: "Microphone idle",
    recActive: "Recording...",
    timelineTitle: "2. Audio Editor & Timeline",
    editorHint: "Drag across the waveform to select an area or click 'Select All'. You can crop, silence, apply FX, or partition into continuous seamless slices.",
    btnPlay: "▶ Play",
    btnPlaySel: "▶ Selection",
    btnStop: "⏹ Stop",
    btnSelectAll: "Select All",
    btnFxSel: "✨ FX to Selection",
    btnCrop: "✂ Crop",
    btnDelete: "🗑 Delete",
    btnSilence: "🔇 Mute",
    btnUndo: "↩ Undo",
    autoSliceLabel: "Continuous slice every:",
    btnAutoSlice: "Process Continuous Slices",
    eqTitle: "3. Graphic Equalizer (7 Bands)",
    fxTitle: "4. Audio Effects",
    fxRobot: "Robotic Voice (Ring Modulator)",
    fxRobotFreq: "Carrier Frequency:",
    fxEcho: "Echo / Delay",
    fxEchoTime: "Delay Time (s):",
    fxEchoFeedback: "Feedback intensity:",
    exportTitle: "5. Export Studio",
    btnExportMp3: "Export MP3 Audio",
    btnExportMp4: "Export MP4 Video (Black Screen)",
    btnExportPartsMp4: "Export PARTS to MP4 Video (Black Screen)",
    exportingMp3: "Encoding MP3...",
    exportingMp4: "Generating MP4 Video...",
    exportingPart: "Exporting part {current} of {total}...",
    exportSuccess: "File exported successfully!",
    exportPartsSuccess: "All parts exported successfully!",
    slicesReady: "{count} parts generated with 0ms loss!",
    manualTitle: "What is this page for & User Manual",
    manualHtml: `
      <h3>What is AudioLab Studio Pro used for?</h3>
      <p><strong>AudioLab Studio Pro</strong> is a lightweight, professional, browser-based digital audio workstation (DAW). It allows content creators, podcasters, narrators, teachers, and musicians to edit, enhance, equalize, and slice audio recordings without installing software or uploading private data to cloud servers.</p>
      <p>Its flagship feature is <strong>sample-accurate continuous slicing</strong>, designed for modern creators who need to partition long recordings into equal, seamless chunks (e.g. 5s, 10s, 30s, 60s) without losing even a single millisecond between cuts. With the <strong>Export PARTS to MP4 Video (Black Screen)</strong> button, each slice is automatically converted into consecutive, numbered MP4 video files ready for Reels, TikTok, YouTube Shorts, or podcast lessons without using complicated video software.</p>

      <h3>Step-by-step instructions:</h3>
      <ol>
        <li><strong>Import or Record:</strong> Upload any MP3 or record speech in real time with your microphone.</li>
        <li><strong>Selection Tools:</strong> Drag over the waveform or click <em>"Select All"</em> to frame the entire file.</li>
        <li><strong>Process Continuous Slices:</strong> Choose the segment length and press <em>"Process Continuous Slices"</em>. Slices will be indexed seamlessly (P1, P2, P3...) with zero millisecond gap.</li>
        <li><strong>EQ & Audio Effects:</strong> Shape tone with the 7-band graphic equalizer, or blend robotic ring modulation and delay.</li>
        <li><strong>Batch Export:</strong> Export full master MP3, master black-screen MP4, or sequentially render and download all consecutive slices as black-screen MP4 video files.</li>
      </ol>`
  },
  pt: {
    langLabel: "Idioma:",
    inputTitle: "1. Fonte de Áudio",
    uploadLabel: "Importar arquivo MP3:",
    btnRecord: "Gravar Microfone",
    btnStopRecord: "Parar",
    recReady: "Microfone ocioso",
    recActive: "Gravando...",
    timelineTitle: "2. Editor de Áudio e Linha do Tempo",
    editorHint: "Arraste sobre a forma de onda para selecionar um trecho ou clique em 'Selecionar Tudo'. Você pode cortar, silenciar, aplicar efeitos ou particionar em intervalos contínuos idênticos.",
    btnPlay: "▶ Reproduzir",
    btnPlaySel: "▶ Seleção",
    btnStop: "⏹ Parar",
    btnSelectAll: "Selecionar Tudo",
    btnFxSel: "✨ FX na Seleção",
    btnCrop: "✂ Cortar",
    btnDelete: "🗑 Deletar",
    btnSilence: "🔇 Silenciar",
    btnUndo: "↩ Desfazer",
    autoSliceLabel: "Corte contínuo a cada:",
    btnAutoSlice: "Processar Intervalos Contínuos",
    eqTitle: "3. Equalizador Gráfico (7 Bandas)",
    fxTitle: "4. Efeitos de Áudio",
    fxRobot: "Voz Robótica (Ring Modulator)",
    fxRobotFreq: "Frequência Portadora:",
    fxEcho: "Eco / Delay",
    fxEchoTime: "Tempo de Delay (s):",
    fxEchoFeedback: "Realimentação:",
    exportTitle: "5. Exportação",
    btnExportMp3: "Exportar Áudio MP3",
    btnExportMp4: "Exportar Vídeo MP4 (Tela Preta)",
    btnExportPartsMp4: "Exportar PARTES em Vídeo MP4 (Tela Preta)",
    exportingMp3: "Codificando MP3...",
    exportingMp4: "Gerando Vídeo MP4...",
    exportingPart: "Exportando parte {current} de {total}...",
    exportSuccess: "Arquivo exportado com sucesso!",
    exportPartsSuccess: "Todas as partes foram exportadas com sucesso!",
    slicesReady: "{count} partes geradas com 0ms de perda!",
    manualTitle: "Para que serve esta página e Manual do Usuário",
    manualHtml: `
      <h3>Para que serve o AudioLab Studio Pro?</h3>
      <p>O <strong>AudioLab Studio Pro</strong> é uma estação de trabalho de áudio digital (DAW) completa e executada 100% no navegador. Ideal para podcasters, professores, músicos e criadores de conteúdo que necessitam gravar, equalizar e editar áudio rapidamente com total privacidade, sem enviar arquivos para a nuvem.</p>
      <p>Sua função exclusiva de <strong>particionamento contínuo com precisão exata de amostra</strong> permite dividir gravações longas em blocos iguais (5, 10, 15, 30 ou 60 segundos) com zero perda de milissegundos entre as junções. O botão <strong>Exportar PARTES em Vídeo MP4 (Tela Preta)</strong> renderiza cada trecho em vídeos sequenciais numerados com tela preta de alta definição, perfeitos para Shorts, Reels e TikTok sem precisar de editores de vídeo adicionais.</p>

      <h3>Guia de Utilização:</h3>
      <ol>
        <li><strong>Importar ou Gravar:</strong> Abra um áudio ou grave direto pelo microfone.</li>
        <li><strong>Linha do Tempo:</strong> Clique e arraste na onda ou utilize o botão <em>"Selecionar Tudo"</em>.</li>
        <li><strong>Processar Intervalos Contínuos:</strong> Escolha a duração do corte e processe. As divisões sem perda (P1, P2, P3...) aparecem na linha do tempo.</li>
        <li><strong>Equalizador e Efeitos:</strong> Molde o som com 7 canais ou adicione voz robótica e eco delay.</li>
        <li><strong>Exportação em Lote:</strong> Baixe o áudio MP3, o vídeo MP4 completo ou todas as partes contínuas consecutivas em vídeos MP4 numerados.</li>
      </ol>`
  }
};

/* ======================================================
   ESTADO GLOBAL & HISTORIAL (UNDO)
====================================================== */
let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let currentAudioBuffer = null;
let activeSourceNode = null;
let isPlaying = false;
let playbackStartContextTime = 0;
let playbackStartOffset = 0;
let undoStack = [];

// Estado de la Línea de Tiempo (Editor)
let viewStart = 0;       // Inicio visual (segundos)
let viewEnd = 0;         // Fin visual (segundos)
let selectionStart = null;
let selectionEnd = null;
let playheadPosition = 0;
let isDraggingSelection = false;

// Particiones continuas generadas (0ms pérdida)
let generatedSlices = []; // Array de AudioBuffers correlativos
let sliceMarkers = [];    // Posiciones en segundos para dibujar divisiones en el lienzo

// Grabación
let mediaRecorder = null;
let recordedChunks = [];

// Elementos DOM
const langSelect = document.getElementById("langSelect");
const audioFileInput = document.getElementById("audioFileInput");
const btnRecord = document.getElementById("btnRecord");
const btnStopRecord = document.getElementById("btnStopRecord");
const recStatus = document.getElementById("recStatus");
const timelineCanvas = document.getElementById("timelineCanvas");
const btnPlay = document.getElementById("btnPlay");
const btnPlaySelection = document.getElementById("btnPlaySelection");
const btnStop = document.getElementById("btnStop");
const btnSelectAll = document.getElementById("btnSelectAll");
const btnApplyFxSel = document.getElementById("btnApplyFxSel");
const btnCrop = document.getElementById("btnCrop");
const btnDelete = document.getElementById("btnDelete");
const btnSilence = document.getElementById("btnSilence");
const btnUndo = document.getElementById("btnUndo");
const btnZoomIn = document.getElementById("btnZoomIn");
const btnZoomOut = document.getElementById("btnZoomOut");
const btnZoomFit = document.getElementById("btnZoomFit");
const btnAutoSlice = document.getElementById("btnAutoSlice");
const sliceInterval = document.getElementById("sliceInterval");
const sliceInfo = document.getElementById("sliceInfo");
const timeDisplay = document.getElementById("timeDisplay");
const selDisplay = document.getElementById("selDisplay");
const robotToggle = document.getElementById("robotToggle");
const robotFreq = document.getElementById("robotFreq");
const echoToggle = document.getElementById("echoToggle");
const echoTime = document.getElementById("echoTime");
const echoFeedback = document.getElementById("echoFeedback");
const btnExportMp3 = document.getElementById("btnExportMp3");
const btnExportMp4 = document.getElementById("btnExportMp4");
const btnExportPartsMp4 = document.getElementById("btnExportPartsMp4");
const exportStatus = document.getElementById("exportStatus");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");

/* ======================================================
   IDIOMA
====================================================== */
function updateLanguage(lang) {
  const t = i18n[lang] || i18n.es;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  
  const introEl = document.getElementById("manualIntro");
  const guideEl = document.getElementById("manualGuide");
  if (introEl && guideEl) {
    const firstH3 = t.manualHtml.indexOf("<h3>");
    const secondH3 = t.manualHtml.indexOf("<h3>", firstH3 + 1);
    if (secondH3 !== -1) {
      introEl.innerHTML = t.manualHtml.substring(0, secondH3);
      guideEl.innerHTML = t.manualHtml.substring(secondH3);
    } else {
      introEl.innerHTML = t.manualHtml;
      guideEl.innerHTML = "";
    }
  } else if (document.getElementById("manualText")) {
    document.getElementById("manualText").innerHTML = t.manualHtml;
  }
}
langSelect.addEventListener("change", (e) => updateLanguage(e.target.value));
updateLanguage("es");

/* ======================================================
   HISTORIAL / BUFFER UTILITIES
====================================================== */
function saveUndoState() {
  if (!currentAudioBuffer) return;
  const clone = audioCtx.createBuffer(
    currentAudioBuffer.numberOfChannels,
    currentAudioBuffer.length,
    currentAudioBuffer.sampleRate
  );
  for (let ch = 0; ch < currentAudioBuffer.numberOfChannels; ch++) {
    clone.copyToChannel(currentAudioBuffer.getChannelData(ch), ch);
  }
  undoStack.push(clone);
  if (undoStack.length > 6) undoStack.shift();
  btnUndo.disabled = false;
}

btnUndo.addEventListener("click", () => {
  if (undoStack.length === 0) return;
  stopAudio();
  currentAudioBuffer = undoStack.pop();
  if (undoStack.length === 0) btnUndo.disabled = true;
  selectionStart = null;
  selectionEnd = null;
  sliceMarkers = [];
  generatedSlices = [];
  btnExportPartsMp4.disabled = true;
  sliceInfo.textContent = "";
  fitZoom();
  renderTimeline();
  updateTimeUI();
});

function fitZoom() {
  if (!currentAudioBuffer) return;
  viewStart = 0;
  viewEnd = currentAudioBuffer.duration;
}

function enableAppControls() {
  btnPlay.disabled = false;
  btnStop.disabled = false;
  btnSelectAll.disabled = false;
  btnAutoSlice.disabled = false;
  btnExportMp3.disabled = false;
  btnExportMp4.disabled = false;
  fitZoom();
  renderTimeline();
  updateTimeUI();
}

/* ======================================================
   CANVAS & TIMELINE RENDERING
====================================================== */
function formatTime(sec) {
  if (isNaN(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  const ms = Math.floor((sec % 1) * 10);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${ms}`;
}

function updateTimeUI() {
  const total = currentAudioBuffer ? currentAudioBuffer.duration : 0;
  timeDisplay.textContent = `${formatTime(playheadPosition)} / ${formatTime(total)}`;

  if (selectionStart !== null && selectionEnd !== null && Math.abs(selectionEnd - selectionStart) > 0.001) {
    const s = Math.min(selectionStart, selectionEnd);
    const e = Math.max(selectionStart, selectionEnd);
    selDisplay.textContent = `Sel: ${formatTime(s)} - ${formatTime(e)} (${(e - s).toFixed(3)}s)`;
    btnPlaySelection.disabled = false;
    btnApplyFxSel.disabled = false;
    btnCrop.disabled = false;
    btnDelete.disabled = false;
    btnSilence.disabled = false;
  } else {
    selDisplay.textContent = "Sel: Ninguna";
    btnPlaySelection.disabled = true;
    btnApplyFxSel.disabled = true;
    btnCrop.disabled = true;
    btnDelete.disabled = true;
    btnSilence.disabled = true;
  }
}

function renderTimeline() {
  const canvas = timelineCanvas;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  // Fondo
  ctx.fillStyle = "#050811";
  ctx.fillRect(0, 0, width, height);

  if (!currentAudioBuffer) {
    ctx.fillStyle = "#475569";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Cargue o grabe un audio para comenzar a editar", width / 2, height / 2);
    return;
  }

  const rulerHeight = 22;
  const waveHeight = height - rulerHeight;
  const duration = currentAudioBuffer.duration;
  const visibleDuration = viewEnd - viewStart;

  // 1. Dibujar Regla de Tiempo
  ctx.fillStyle = "#0b1329";
  ctx.fillRect(0, 0, width, rulerHeight);
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, rulerHeight);
  ctx.lineTo(width, rulerHeight);
  ctx.stroke();

  // Marcas de tiempo en la regla
  const stepTime = visibleDuration > 60 ? 10 : (visibleDuration > 15 ? 2 : (visibleDuration > 5 ? 1 : 0.2));
  const firstTick = Math.ceil(viewStart / stepTime) * stepTime;
  ctx.fillStyle = "#94a3b8";
  ctx.font = "10px monospace";
  ctx.textAlign = "center";

  for (let t = firstTick; t <= viewEnd; t += stepTime) {
    const x = ((t - viewStart) / visibleDuration) * width;
    ctx.beginPath();
    ctx.moveTo(x, rulerHeight - 7);
    ctx.lineTo(x, rulerHeight);
    ctx.stroke();
    ctx.fillText(t.toFixed(stepTime < 1 ? 1 : 0) + "s", x, rulerHeight - 9);
  }

  // 2. Dibujar Forma de Onda (Waveform)
  const data = currentAudioBuffer.getChannelData(0);
  const sampleRate = currentAudioBuffer.sampleRate;
  const startSample = Math.floor(viewStart * sampleRate);
  const endSample = Math.floor(viewEnd * sampleRate);
  const viewSamples = endSample - startSample;
  const step = Math.max(1, Math.floor(viewSamples / width));
  const amp = waveHeight / 2;
  const centerY = rulerHeight + amp;

  ctx.fillStyle = "#38bdf8";
  for (let i = 0; i < width; i++) {
    const sIdx = startSample + (i * step);
    let min = 1.0;
    let max = -1.0;
    for (let j = 0; j < step; j++) {
      const val = data[sIdx + j] || 0;
      if (val < min) min = val;
      if (val > max) max = val;
    }
    const y1 = centerY + (min * amp);
    const y2 = centerY + (max * amp);
    ctx.fillRect(i, y1, 1, Math.max(1, y2 - y1));
  }

  // 3. Región de Selección
  if (selectionStart !== null && selectionEnd !== null) {
    const s = Math.min(selectionStart, selectionEnd);
    const e = Math.max(selectionStart, selectionEnd);
    const selX1 = Math.max(0, ((s - viewStart) / visibleDuration) * width);
    const selX2 = Math.min(width, ((e - viewStart) / visibleDuration) * width);

    if (selX2 > selX1) {
      ctx.fillStyle = "rgba(56, 189, 248, 0.22)";
      ctx.fillRect(selX1, rulerHeight, selX2 - selX1, waveHeight);
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(selX1, rulerHeight); ctx.lineTo(selX1, height);
      ctx.moveTo(selX2, rulerHeight); ctx.lineTo(selX2, height);
      ctx.stroke();
    }
  }

  // 4. Dibujar Marcadores de Partición Continua (Cortes)
  if (sliceMarkers.length > 0) {
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    for (let m = 0; m < sliceMarkers.length; m++) {
      const item = sliceMarkers[m];
      if (item.time >= viewStart && item.time <= viewEnd) {
        const mx = ((item.time - viewStart) / visibleDuration) * width;
        ctx.strokeStyle = "#f59e0b";
        ctx.beginPath();
        ctx.moveTo(mx, rulerHeight);
        ctx.lineTo(mx, height);
        ctx.stroke();

        // Etiqueta de la parte
        ctx.fillStyle = "#f59e0b";
        ctx.font = "bold 9px monospace";
        ctx.textAlign = "left";
        ctx.fillText(item.label, mx + 3, rulerHeight + 14);
      }
    }
    ctx.setLineDash([]); // Reset dashed
  }

  // 5. Cabezal de Reproducción (Playhead)
  if (playheadPosition >= viewStart && playheadPosition <= viewEnd) {
    const playX = ((playheadPosition - viewStart) / visibleDuration) * width;
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(playX, 0);
    ctx.lineTo(playX, height);
    ctx.stroke();

    // Pequeño indicador superior
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.moveTo(playX - 5, 0);
    ctx.lineTo(playX + 5, 0);
    ctx.lineTo(playX, 8);
    ctx.fill();
  }
}

window.addEventListener("resize", () => renderTimeline());

/* ======================================================
   INTERACCIONES DE SELECCIÓN Y ZOOM
====================================================== */
function getTimeFromX(clientX) {
  const rect = timelineCanvas.getBoundingClientRect();
  const x = Math.max(0, Math.min(rect.width, clientX - rect.x));
  const ratio = x / rect.width;
  return viewStart + ratio * (viewEnd - viewStart);
}

timelineCanvas.addEventListener("mousedown", (e) => {
  if (!currentAudioBuffer) return;
  const time = getTimeFromX(e.clientX);
  isDraggingSelection = true;
  selectionStart = time;
  selectionEnd = time;
  playheadPosition = time;
  renderTimeline();
  updateTimeUI();
});

window.addEventListener("mousemove", (e) => {
  if (!isDraggingSelection || !currentAudioBuffer) return;
  selectionEnd = getTimeFromX(e.clientX);
  renderTimeline();
  updateTimeUI();
});

window.addEventListener("mouseup", () => {
  if (isDraggingSelection) {
    isDraggingSelection = false;
    if (selectionStart !== null && selectionEnd !== null) {
      if (Math.abs(selectionEnd - selectionStart) < 0.05) {
        selectionStart = null;
        selectionEnd = null;
      } else {
        const s = Math.min(selectionStart, selectionEnd);
        const e = Math.max(selectionStart, selectionEnd);
        selectionStart = s;
        selectionEnd = e;
      }
    }
    renderTimeline();
    updateTimeUI();
  }
});

// Soporte táctil en móviles
timelineCanvas.addEventListener("touchstart", (e) => {
  if (!currentAudioBuffer || e.touches.length === 0) return;
  const time = getTimeFromX(e.touches[0].clientX);
  isDraggingSelection = true;
  selectionStart = time;
  selectionEnd = time;
  playheadPosition = time;
  renderTimeline();
  updateTimeUI();
});

timelineCanvas.addEventListener("touchmove", (e) => {
  if (!isDraggingSelection || !currentAudioBuffer || e.touches.length === 0) return;
  selectionEnd = getTimeFromX(e.touches[0].clientX);
  renderTimeline();
  updateTimeUI();
});

timelineCanvas.addEventListener("touchend", () => {
  isDraggingSelection = false;
  if (selectionStart !== null && selectionEnd !== null) {
    if (Math.abs(selectionEnd - selectionStart) < 0.05) {
      selectionStart = null;
      selectionEnd = null;
    }
  }
  renderTimeline();
  updateTimeUI();
});

// Seleccionar Todo el Audio
btnSelectAll.addEventListener("click", () => {
  if (!currentAudioBuffer) return;
  selectionStart = 0;
  selectionEnd = currentAudioBuffer.duration;
  playheadPosition = 0;
  fitZoom();
  renderTimeline();
  updateTimeUI();
});

// Controles Zoom
btnZoomIn.addEventListener("click", () => {
  if (!currentAudioBuffer) return;
  const span = (viewEnd - viewStart) * 0.7;
  const center = (viewStart + viewEnd) / 2;
  viewStart = Math.max(0, center - span / 2);
  viewEnd = Math.min(currentAudioBuffer.duration, center + span / 2);
  renderTimeline();
});

btnZoomOut.addEventListener("click", () => {
  if (!currentAudioBuffer) return;
  const span = (viewEnd - viewStart) * 1.4;
  const center = (viewStart + viewEnd) / 2;
  viewStart = Math.max(0, center - span / 2);
  viewEnd = Math.min(currentAudioBuffer.duration, center + span / 2);
  renderTimeline();
});

btnZoomFit.addEventListener("click", () => {
  fitZoom();
  renderTimeline();
});

/* ======================================================
   REPRODUCCIÓN Y CADENA DE PROCESAMIENTO (EQ & FX)
====================================================== */
function buildGraph(ctx, sourceNode) {
  let lastNode = sourceNode;

  // 1. Ecualizador 7 bandas
  const sliders = document.querySelectorAll(".eq-slider");
  sliders.forEach(slider => {
    const freq = parseFloat(slider.dataset.freq);
    const gainVal = parseFloat(slider.value);
    const filter = ctx.createBiquadFilter();
    filter.type = (freq < 100) ? "lowshelf" : (freq > 8000 ? "highshelf" : "peaking");
    filter.frequency.value = freq;
    filter.gain.value = gainVal;
    lastNode.connect(filter);
    lastNode = filter;
  });

  // 2. Efecto Robótico (Ring Modulation)
  if (robotToggle.checked) {
    const carrier = ctx.createOscillator();
    carrier.type = "sine";
    carrier.frequency.value = parseFloat(robotFreq.value);

    const modGain = ctx.createGain();
    modGain.gain.value = 0;

    carrier.connect(modGain.gain);
    lastNode.connect(modGain);
    carrier.start();
    lastNode = modGain;
  }

  // 3. Efecto Eco / Delay
  if (echoToggle.checked) {
    const delay = ctx.createDelay();
    delay.delayTime.value = parseFloat(echoTime.value);

    const feedback = ctx.createGain();
    feedback.gain.value = parseFloat(echoFeedback.value);

    const dryGain = ctx.createGain();
    const wetGain = ctx.createGain();
    const merger = ctx.createGain();

    dryGain.gain.value = 1.0;
    wetGain.gain.value = 0.7;

    lastNode.connect(dryGain);
    lastNode.connect(delay);

    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wetGain);

    dryGain.connect(merger);
    wetGain.connect(merger);

    lastNode = merger;
  }

  return lastNode;
}

function startPlayback(offset = 0, duration = null) {
  if (!currentAudioBuffer) return;
  stopAudio();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  activeSourceNode = audioCtx.createBufferSource();
  activeSourceNode.buffer = currentAudioBuffer;

  const output = buildGraph(audioCtx, activeSourceNode);
  output.connect(audioCtx.destination);

  playbackStartOffset = offset;
  playbackStartContextTime = audioCtx.currentTime;

  if (duration !== null) {
    activeSourceNode.start(0, offset, duration);
  } else {
    activeSourceNode.start(0, offset);
  }

  isPlaying = true;

  function updatePlayhead() {
    if (!isPlaying) return;
    const elapsed = audioCtx.currentTime - playbackStartContextTime;
    playheadPosition = playbackStartOffset + elapsed;

    if (duration !== null && playheadPosition >= (playbackStartOffset + duration)) {
      stopAudio();
      return;
    }
    if (playheadPosition >= currentAudioBuffer.duration) {
      stopAudio();
      playheadPosition = 0;
      return;
    }

    renderTimeline();
    updateTimeUI();
    requestAnimationFrame(updatePlayhead);
  }
  requestAnimationFrame(updatePlayhead);

  activeSourceNode.onended = () => { isPlaying = false; };
}

function stopAudio() {
  if (activeSourceNode && isPlaying) {
    try { activeSourceNode.stop(); } catch(e){}
    isPlaying = false;
  }
  renderTimeline();
  updateTimeUI();
}

btnPlay.addEventListener("click", () => startPlayback(playheadPosition));
btnPlaySelection.addEventListener("click", () => {
  if (selectionStart !== null && selectionEnd !== null) {
    const s = Math.min(selectionStart, selectionEnd);
    const len = Math.max(0.01, Math.abs(selectionEnd - selectionStart));
    startPlayback(s, len);
  }
});
btnStop.addEventListener("click", stopAudio);

// Feedback visual dB en sliders EQ
document.querySelectorAll(".eq-slider").forEach(slider => {
  slider.addEventListener("input", (e) => {
    e.target.nextElementSibling.textContent = `${e.target.value > 0 ? '+' : ''}${e.target.value} dB`;
  });
});

/* ======================================================
   HERRAMIENTAS DE EDICIÓN Y PROCESAMIENTO
====================================================== */

// 1. APLICAR FX SOLO A LA SELECCIÓN
btnApplyFxSel.addEventListener("click", async () => {
  if (!currentAudioBuffer || selectionStart === null || selectionEnd === null) return;
  saveUndoState();
  stopAudio();

  const s = Math.min(selectionStart, selectionEnd);
  const e = Math.max(selectionStart, selectionEnd);
  const sampleRate = currentAudioBuffer.sampleRate;
  const startIdx = Math.floor(s * sampleRate);
  const endIdx = Math.floor(e * sampleRate);
  const segmentLength = endIdx - startIdx;

  if (segmentLength <= 0) return;

  const subBuffer = audioCtx.createBuffer(currentAudioBuffer.numberOfChannels, segmentLength, sampleRate);
  for (let ch = 0; ch < currentAudioBuffer.numberOfChannels; ch++) {
    subBuffer.copyToChannel(currentAudioBuffer.getChannelData(ch).subarray(startIdx, endIdx), ch);
  }

  const offlineCtx = new OfflineAudioContext(subBuffer.numberOfChannels, subBuffer.length, sampleRate);
  const src = offlineCtx.createBufferSource();
  src.buffer = subBuffer;
  const output = buildGraph(offlineCtx, src);
  output.connect(offlineCtx.destination);
  src.start(0);

  const processedSegment = await offlineCtx.startRendering();

  const fade = Math.min(Math.floor(sampleRate * 0.005), Math.floor(segmentLength / 4));
  for (let ch = 0; ch < currentAudioBuffer.numberOfChannels; ch++) {
    const original = currentAudioBuffer.getChannelData(ch);
    const proc = processedSegment.getChannelData(ch);

    for (let i = 0; i < segmentLength; i++) {
      let weight = 1.0;
      if (i < fade) weight = i / fade;
      else if (i > segmentLength - fade) weight = (segmentLength - i) / fade;

      original[startIdx + i] = (original[startIdx + i] * (1 - weight)) + (proc[i] * weight);
    }
  }

  renderTimeline();
  updateTimeUI();
  alert("¡Efectos aplicados exitosamente al tramo seleccionado!");
});

// 2. RECORTAR SELECCIÓN (CROP)
btnCrop.addEventListener("click", () => {
  if (!currentAudioBuffer || selectionStart === null || selectionEnd === null) return;
  saveUndoState();
  stopAudio();

  const s = Math.min(selectionStart, selectionEnd);
  const e = Math.max(selectionStart, selectionEnd);
  const sampleRate = currentAudioBuffer.sampleRate;
  const startSample = Math.floor(s * sampleRate);
  const endSample = Math.floor(e * sampleRate);
  const newLen = endSample - startSample;

  const cropped = audioCtx.createBuffer(currentAudioBuffer.numberOfChannels, newLen, sampleRate);
  for (let ch = 0; ch < currentAudioBuffer.numberOfChannels; ch++) {
    cropped.copyToChannel(currentAudioBuffer.getChannelData(ch).subarray(startSample, endSample), ch);
  }

  currentAudioBuffer = cropped;
  selectionStart = null;
  selectionEnd = null;
  sliceMarkers = [];
  generatedSlices = [];
  btnExportPartsMp4.disabled = true;
  sliceInfo.textContent = "";
  playheadPosition = 0;
  fitZoom();
  renderTimeline();
  updateTimeUI();
});

// 3. ELIMINAR SELECCIÓN Y UNIR EXTREMOS (DELETE & SPLICING)
btnDelete.addEventListener("click", () => {
  if (!currentAudioBuffer || selectionStart === null || selectionEnd === null) return;
  saveUndoState();
  stopAudio();

  const s = Math.min(selectionStart, selectionEnd);
  const e = Math.max(selectionStart, selectionEnd);
  const sampleRate = currentAudioBuffer.sampleRate;
  const startSample = Math.floor(s * sampleRate);
  const endSample = Math.floor(e * sampleRate);
  const delLen = endSample - startSample;
  const newLen = currentAudioBuffer.length - delLen;

  if (newLen <= 0) return;

  const spliced = audioCtx.createBuffer(currentAudioBuffer.numberOfChannels, newLen, sampleRate);
  const crossfadeLen = Math.min(Math.floor(sampleRate * 0.005), Math.floor(newLen / 2));

  for (let ch = 0; ch < currentAudioBuffer.numberOfChannels; ch++) {
    const orig = currentAudioBuffer.getChannelData(ch);
    const dest = spliced.getChannelData(ch);

    dest.set(orig.subarray(0, startSample), 0);
    dest.set(orig.subarray(endSample), startSample);

    for (let i = 0; i < crossfadeLen; i++) {
      const idx = startSample - crossfadeLen + i;
      if (idx >= 0 && idx < newLen) {
        const factor = 0.5 * (1 - Math.cos(Math.PI * i / crossfadeLen));
        dest[idx] *= factor;
      }
    }
  }

  currentAudioBuffer = spliced;
  selectionStart = null;
  selectionEnd = null;
  sliceMarkers = [];
  generatedSlices = [];
  btnExportPartsMp4.disabled = true;
  sliceInfo.textContent = "";
  playheadPosition = s;
  fitZoom();
  renderTimeline();
  updateTimeUI();
});

// 4. SILENCIAR TRAMO
btnSilence.addEventListener("click", () => {
  if (!currentAudioBuffer || selectionStart === null || selectionEnd === null) return;
  saveUndoState();

  const s = Math.min(selectionStart, selectionEnd);
  const e = Math.max(selectionStart, selectionEnd);
  const sampleRate = currentAudioBuffer.sampleRate;
  const startIdx = Math.floor(s * sampleRate);
  const endIdx = Math.floor(e * sampleRate);

  for (let ch = 0; ch < currentAudioBuffer.numberOfChannels; ch++) {
    const data = currentAudioBuffer.getChannelData(ch);
    for (let i = startIdx; i < endIdx; i++) data[i] = 0;
  }

  renderTimeline();
  updateTimeUI();
});

// 5. FRAGMENTACIÓN CONTINUA EN PARTES IGUALES (0 ms pérdida, sample-accurate)
btnAutoSlice.addEventListener("click", () => {
  if (!currentAudioBuffer) return;
  saveUndoState();

  const sampleRate = currentAudioBuffer.sampleRate;
  const channels = currentAudioBuffer.numberOfChannels;
  const intervalSec = parseFloat(sliceInterval.value);
  const sliceSamples = Math.round(intervalSec * sampleRate);

  let sTime = 0;
  let eTime = currentAudioBuffer.duration;
  if (selectionStart !== null && selectionEnd !== null && Math.abs(selectionEnd - selectionStart) > 0.05) {
    sTime = Math.min(selectionStart, selectionEnd);
    eTime = Math.max(selectionStart, selectionEnd);
  }

  const startSample = Math.round(sTime * sampleRate);
  const endSample = Math.round(eTime * sampleRate);
  const totalSamples = endSample - startSample;

  if (totalSamples <= 0) return;

  generatedSlices = [];
  sliceMarkers = [];

  let currentSample = startSample;
  let partIndex = 1;

  while (currentSample < endSample) {
    const nextSample = Math.min(endSample, currentSample + sliceSamples);
    const thisLen = nextSample - currentSample;

    const sliceBuf = audioCtx.createBuffer(channels, thisLen, sampleRate);
    for (let ch = 0; ch < channels; ch++) {
      const srcChannel = currentAudioBuffer.getChannelData(ch);
      const destChannel = sliceBuf.getChannelData(ch);
      destChannel.set(srcChannel.subarray(currentSample, nextSample));
    }

    generatedSlices.push({
      buffer: sliceBuf,
      partNumber: partIndex,
      startSec: currentSample / sampleRate,
      endSec: nextSample / sampleRate,
      duration: thisLen / sampleRate
    });

    sliceMarkers.push({
      time: currentSample / sampleRate,
      label: `P${partIndex}`
    });

    partIndex++;
    currentSample = nextSample;
  }

  selectionStart = sTime;
  selectionEnd = eTime;

  btnExportPartsMp4.disabled = false;

  const currentLang = langSelect.value;
  const msgTemplate = i18n[currentLang]?.slicesReady || i18n.es.slicesReady;
  const msg = msgTemplate.replace("{count}", generatedSlices.length);
  sliceInfo.textContent = msg;

  renderTimeline();
  updateTimeUI();
  alert(`${msg}\nSe han configurado ${generatedSlices.length} partes continuas y correlativas.`);
});

/* ======================================================
   ENTRADA DE ARCHIVO & GRABACIÓN
====================================================== */
audioFileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const arrayBuffer = await file.arrayBuffer();
  if (audioCtx.state === 'suspended') await audioCtx.resume();
  currentAudioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  undoStack = [];
  generatedSlices = [];
  sliceMarkers = [];
  btnExportPartsMp4.disabled = true;
  sliceInfo.textContent = "";
  btnUndo.disabled = true;
  enableAppControls();
});

btnRecord.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    recordedChunks = [];

    mediaRecorder.ondataavailable = e => { if (e.data.size > 0) recordedChunks.push(e.data); };
    mediaRecorder.onstop = async () => {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      const arrayBuf = await blob.arrayBuffer();
      if (audioCtx.state === 'suspended') await audioCtx.resume();
      currentAudioBuffer = await audioCtx.decodeAudioData(arrayBuf);
      undoStack = [];
      generatedSlices = [];
      sliceMarkers = [];
      btnExportPartsMp4.disabled = true;
      sliceInfo.textContent = "";
      btnUndo.disabled = true;
      enableAppControls();
      recStatus.textContent = i18n[langSelect.value].recReady;
      recStatus.classList.remove("status-recording");
    };

    mediaRecorder.start();
    btnRecord.disabled = true;
    btnStopRecord.disabled = false;
    recStatus.textContent = i18n[langSelect.value].recActive;
    recStatus.classList.add("status-recording");
  } catch (err) {
    alert("Error al acceder al micrófono: " + err.message);
  }
});

btnStopRecord.addEventListener("click", () => {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    btnRecord.disabled = false;
    btnStopRecord.disabled = true;
  }
});

/* ======================================================
   EXPORTACIÓN: MASTER MP3, MASTER MP4 & PARTES MP4
====================================================== */
async function renderProcessedBuffer(audioBuffer) {
  const offlineCtx = new OfflineAudioContext(
    audioBuffer.numberOfChannels,
    audioBuffer.length,
    audioBuffer.sampleRate
  );
  const src = offlineCtx.createBufferSource();
  src.buffer = audioBuffer;
  const output = buildGraph(offlineCtx, src);
  output.connect(offlineCtx.destination);
  src.start(0);
  return await offlineCtx.startRendering();
}

// 1. MP3 Export
btnExportMp3.addEventListener("click", async () => {
  try {
    exportStatus.textContent = i18n[langSelect.value].exportingMp3;
    progressBar.style.display = "block";
    progressFill.style.width = "20%";

    const processed = await renderProcessedBuffer(currentAudioBuffer);
    progressFill.style.width = "50%";

    const channels = processed.numberOfChannels;
    const sampleRate = processed.sampleRate;
    const mp3encoder = new lamejs.Mp3Encoder(channels, sampleRate, 128);
    const mp3Data = [];

    const left = processed.getChannelData(0);
    const right = channels > 1 ? processed.getChannelData(1) : left;
    const sampleCount = left.length;

    const leftInt16 = new Int16Array(sampleCount);
    const rightInt16 = new Int16Array(sampleCount);
    for (let i = 0; i < sampleCount; i++) {
      leftInt16[i] = Math.max(-32768, Math.min(32767, left[i] * 32767));
      rightInt16[i] = Math.max(-32768, Math.min(32767, right[i] * 32767));
    }

    const chunkSize = 1152;
    for (let i = 0; i < sampleCount; i += chunkSize) {
      const lChunk = leftInt16.subarray(i, i + chunkSize);
      const rChunk = rightInt16.subarray(i, i + chunkSize);
      const mp3buf = channels === 2 ? mp3encoder.encodeBuffer(lChunk, rChunk) : mp3encoder.encodeBuffer(lChunk);
      if (mp3buf.length > 0) mp3Data.push(mp3buf);
    }
    const endBuf = mp3encoder.flush();
    if (endBuf.length > 0) mp3Data.push(endBuf);

    progressFill.style.width = "100%";
    const blob = new Blob(mp3Data, { type: "audio/mp3" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AudioLab_Master_${Date.now()}.mp3`;
    a.click();

    exportStatus.textContent = i18n[langSelect.value].exportSuccess;
  } catch (err) {
    alert("Error exportando MP3: " + err.message);
  } finally {
    setTimeout(() => { progressBar.style.display = "none"; }, 1500);
  }
});

// Función auxiliar para grabar video MP4 (pantalla negra) a partir de un AudioBuffer procesado
function recordVideoFromBuffer(renderedBuffer) {
  return new Promise((resolve, reject) => {
    try {
      const vCanvas = document.createElement("canvas");
      vCanvas.width = 1280;
      vCanvas.height = 720;
      const vCtx = vCanvas.getContext("2d");
      vCtx.fillStyle = "#000000";
      vCtx.fillRect(0, 0, vCanvas.width, vCanvas.height);

      const videoStream = vCanvas.captureStream(24);
      const tempAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const bufferSource = tempAudioCtx.createBufferSource();
      bufferSource.buffer = renderedBuffer;
      const streamDest = tempAudioCtx.createMediaStreamDestination();
      bufferSource.connect(streamDest);

      const combinedStream = new MediaStream([
        videoStream.getVideoTracks()[0],
        streamDest.stream.getAudioTracks()[0]
      ]);

      const mime = MediaRecorder.isTypeSupported('video/mp4;codecs=avc1,mp4a.40.2') 
                   ? 'video/mp4;codecs=avc1,mp4a.40.2' 
                   : (MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm');

      const recorder = new MediaRecorder(combinedStream, { mimeType: mime });
      const chunks = [];

      recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: mime });
        tempAudioCtx.close();
        resolve({ blob, extension: mime.includes('mp4') ? 'mp4' : 'webm' });
      };

      recorder.onerror = err => reject(err);

      recorder.start();
      bufferSource.start(0);

      bufferSource.onended = () => {
        setTimeout(() => { recorder.stop(); }, 150);
      };
    } catch (err) {
      reject(err);
    }
  });
}

// 2. MP4 Master Export (Black Screen Video HD)
btnExportMp4.addEventListener("click", async () => {
  try {
    exportStatus.textContent = i18n[langSelect.value].exportingMp4;
    progressBar.style.display = "block";
    progressFill.style.width = "25%";

    const processed = await renderProcessedBuffer(currentAudioBuffer);
    progressFill.style.width = "50%";

    const { blob, extension } = await recordVideoFromBuffer(processed);
    progressFill.style.width = "100%";

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AudioLab_Video_${Date.now()}.${extension}`;
    a.click();

    exportStatus.textContent = i18n[langSelect.value].exportSuccess;
  } catch (err) {
    alert("Error exportando Video MP4: " + err.message);
  } finally {
    setTimeout(() => { progressBar.style.display = "none"; }, 1500);
  }
});

// 3. Exportar PARTES continuas en Video MP4 consecutivos y correlativos
btnExportPartsMp4.addEventListener("click", async () => {
  if (generatedSlices.length === 0) {
    alert("Primero haz clic en 'Procesar Lapsos Continuos' para generar las partes.");
    return;
  }

  btnExportPartsMp4.disabled = true;
  progressBar.style.display = "block";
  progressFill.style.width = "0%";

  const total = generatedSlices.length;
  const currentLang = langSelect.value;
  const partTemplate = i18n[currentLang]?.exportingPart || i18n.es.exportingPart;

  for (let i = 0; i < total; i++) {
    const sliceObj = generatedSlices[i];
    const partNumStr = String(sliceObj.partNumber).padStart(2, '0');

    exportStatus.textContent = partTemplate
      .replace("{current}", i + 1)
      .replace("{total}", total);

    progressFill.style.width = `${Math.round(((i) / total) * 100)}%`;

    try {
      const processedSlice = await renderProcessedBuffer(sliceObj.buffer);
      const { blob, extension } = await recordVideoFromBuffer(processedSlice);

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `AudioLab_Parte_${partNumStr}.${extension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      progressFill.style.width = `${Math.round(((i + 1) / total) * 100)}%`;

      await new Promise(r => setTimeout(r, 650));
    } catch (err) {
      console.error(`Error exportando parte ${partNumStr}:`, err);
    }
  }

  exportStatus.textContent = i18n[currentLang]?.exportPartsSuccess || i18n.es.exportPartsSuccess;
  btnExportPartsMp4.disabled = false;
  setTimeout(() => { progressBar.style.display = "none"; }, 2500);
});
