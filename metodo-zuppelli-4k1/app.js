// ---- script 1 ----

    // FUNCIÓN PARA COPIAR PROMPTS
    function copyPromptText(btn, elementId) {
      const textToCopy = document.getElementById(elementId).innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✔ ¡Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
    }

    // CANVAS Y WEB APP LOGIC
    const MASTER_W = 3840;
    const MASTER_H = 2160;
    const GAP = 20;

    const PANELS_GEOMETRY = [
      { x: GAP, y: GAP, w: 1800, h: 2120, label: "BUSTO FRENTE" },
      { x: 1840, y: GAP, w: 1370, h: 1050, label: "PERFIL DERECHO" },
      { x: 1840, y: 1090, w: 1370, h: 1050, label: "PERFIL IZQUIERDO" },
      { x: 3230, y: GAP, w: 590, h: 1050, label: "CUERPO FRENTE (9:16)" },
      { x: 3230, y: 1090, w: 590, h: 1050, label: "CUERPO ESPALDA (9:16)" }
    ];

    const panelsState = PANELS_GEOMETRY.map(() => ({
      img: null,
      zoom: 1.0,
      panX: 0,
      panY: 0
    }));

    // GUÍAS DINÁMICAS Y MODO CALIBRE
    let showGuides = false;
    let guideEyeY = 925;
    let guideChinY = 1900;

    let selectedPanelIndex = -1;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;

    const previewCanvas = document.getElementById('previewCanvas');
    const ctx = previewCanvas.getContext('2d');
    const charNameInput = document.getElementById('charName');
    const textPosSelect = document.getElementById('textPos');
    const textOpacityInput = document.getElementById('textOpacity');
    const bgColorInput = document.getElementById('bgColor');
    const btnToggleGuides = document.getElementById('btnToggleGuides');
    const btnExport = document.getElementById('btnExport');
    const guidesPanel = document.getElementById('guidesPanel');
    const sliderGuideEye = document.getElementById('sliderGuideEye');
    const sliderGuideChin = document.getElementById('sliderGuideChin');
    const sliderGuideMove = document.getElementById('sliderGuideMove');
    const valGuideGap = document.getElementById('val-guide-gap');
    const valGuideCenter = document.getElementById('val-guide-center');

    function init() {
      resizePreviewCanvas();
      window.addEventListener('resize', resizePreviewCanvas);
      setupEventListeners();
      updateCaliperUI();
      renderAll();
    }

    function resizePreviewCanvas() {
      const container = document.querySelector('.canvas-container');
      const maxW = container.clientWidth - 40;
      const maxH = container.clientHeight - 60;
      
      let w = maxW;
      let h = w * (9 / 16);

      if (h > maxH) {
        h = maxH;
        w = h * (16 / 9);
      }

      previewCanvas.width = Math.round(w);
      previewCanvas.height = Math.round(h);
      renderAll();
    }

    function updateCaliperUI() {
      const gap = Math.abs(guideChinY - guideEyeY);
      const center = Math.round((guideEyeY + guideChinY) / 2);

      valGuideGap.innerText = gap + "px";
      valGuideCenter.innerText = center + "px";

      document.getElementById('val-guide-eye').innerText = guideEyeY + "px";
      document.getElementById('val-guide-chin').innerText = guideChinY + "px";

      sliderGuideEye.value = guideEyeY;
      sliderGuideChin.value = guideChinY;
      sliderGuideMove.value = center;
    }

    function renderCanvas(targetCtx, renderW, renderH, isExport = false) {
      const scaleFactor = renderW / MASTER_W;

      // Fondo
      targetCtx.fillStyle = bgColorInput.value;
      targetCtx.fillRect(0, 0, renderW, renderH);

      // Paneles
      PANELS_GEOMETRY.forEach((geo, i) => {
        const state = panelsState[i];
        const px = geo.x * scaleFactor;
        const py = geo.y * scaleFactor;
        const pw = geo.w * scaleFactor;
        const ph = geo.h * scaleFactor;

        targetCtx.save();
        targetCtx.beginPath();
        targetCtx.rect(px, py, pw, ph);
        targetCtx.clip();

        if (state.img) {
          const imgRatio = state.img.width / state.img.height;
          const boxRatio = pw / ph;
          let drawW, drawH;

          if (imgRatio > boxRatio) {
            drawH = ph * state.zoom;
            drawW = drawH * imgRatio;
          } else {
            drawW = pw * state.zoom;
            drawH = drawW / imgRatio;
          }

          const centerX = px + pw / 2 + (state.panX * scaleFactor);
          const centerY = py + ph / 2 + (state.panY * scaleFactor);
          const drawX = centerX - drawW / 2;
          const drawY = centerY - drawH / 2;

          targetCtx.drawImage(state.img, drawX, drawY, drawW, drawH);
        } else {
          targetCtx.fillStyle = "#1e2026";
          targetCtx.fillRect(px, py, pw, ph);
          if (!isExport) {
            targetCtx.fillStyle = "#6b7280";
            targetCtx.font = `${Math.round(16 * scaleFactor)}px sans-serif`;
            targetCtx.textAlign = "center";
            targetCtx.textBaseline = "middle";
            targetCtx.fillText(geo.label, px + pw / 2, py + ph / 2);
          }
        }
        targetCtx.restore();

        // Marco del panel
        targetCtx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        targetCtx.lineWidth = Math.max(1, 2 * scaleFactor);
        targetCtx.strokeRect(px, py, pw, ph);
      });

      // MODO CALIBRE: DIBUJAR LAS DOS LÍNEAS PARALELAS CON SU DISTANCIA FIJA
      if (showGuides && !isExport) {
        // Línea Ojos (Roja)
        targetCtx.strokeStyle = "rgba(239, 68, 68, 0.95)";
        targetCtx.lineWidth = 3 * scaleFactor;
        targetCtx.setLineDash([8 * scaleFactor, 4 * scaleFactor]);
        
        const eyeY = guideEyeY * scaleFactor;
        targetCtx.beginPath();
        targetCtx.moveTo(0, eyeY);
        targetCtx.lineTo(renderW, eyeY);
        targetCtx.stroke();

        // Línea Mentón (Azul)
        targetCtx.strokeStyle = "rgba(59, 130, 246, 0.95)";
        const chinY = guideChinY * scaleFactor;
        targetCtx.beginPath();
        targetCtx.moveTo(0, chinY);
        targetCtx.lineTo(renderW, chinY);
        targetCtx.stroke();
        targetCtx.setLineDash([]);
      }

      // Rótulo
      const nameText = charNameInput.value.trim();
      if (nameText) {
        targetCtx.save();
        const fontSize = Math.round(36 * scaleFactor);
        targetCtx.font = `700 ${fontSize}px sans-serif`;
        targetCtx.fillStyle = `rgba(0, 0, 0, ${textOpacityInput.value})`;
        targetCtx.textAlign = "center";

        let textX = renderW / 2;
        let textY = (GAP + 45) * scaleFactor;

        const pos = textPosSelect.value;
        if (pos === "top-left") textX = renderW * 0.25;
        else if (pos === "top-right") textX = renderW * 0.75;
        else if (pos === "bottom-center") textY = renderH - (30 * scaleFactor);

        targetCtx.fillText(nameText.toUpperCase(), textX, textY);
        targetCtx.restore();
      }
    }

    function renderAll() {
      renderCanvas(ctx, previewCanvas.width, previewCanvas.height, false);
    }

    function syncSlidersUI(index) {
      const state = panelsState[index];
      document.querySelector(`.slider-zoom[data-panel="${index}"]`).value = state.zoom;
      document.querySelector(`.slider-panx[data-panel="${index}"]`).value = state.panX;
      document.querySelector(`.slider-pany[data-panel="${index}"]`).value = state.panY;

      document.getElementById(`val-zoom-${index}`).innerText = state.zoom.toFixed(2) + "x";
      document.getElementById(`val-x-${index}`).innerText = Math.round(state.panX);
      document.getElementById(`val-y-${index}`).innerText = Math.round(state.panY);
    }

    function setupEventListeners() {
      // SLIDERS CALIBRE INDIVIDUALES
      sliderGuideEye.addEventListener('input', (e) => {
        guideEyeY = parseInt(e.target.value);
        updateCaliperUI();
        renderAll();
      });

      sliderGuideChin.addEventListener('input', (e) => {
        guideChinY = parseInt(e.target.value);
        updateCaliperUI();
        renderAll();
      });

      // SLIDER CLAVE: MOVER AMBAS LÍNEAS JUNTAS MANTENIENDO EL GAP EXACTO
      sliderGuideMove.addEventListener('input', (e) => {
        const newCenter = parseInt(e.target.value);
        const currentGap = guideChinY - guideEyeY;
        
        guideEyeY = Math.round(newCenter - (currentGap / 2));
        guideChinY = guideEyeY + currentGap;

        updateCaliperUI();
        renderAll();
      });

      // ACTIVAR MODO CALIBRE
      btnToggleGuides.addEventListener('click', () => {
        showGuides = !showGuides;
        guidesPanel.classList.toggle('active', showGuides);
        btnToggleGuides.style.backgroundColor = showGuides ? "rgba(239, 68, 68, 0.25)" : "";
        btnToggleGuides.style.borderColor = showGuides ? "#ef4444" : "";
        renderAll();
      });

      // CARGA DE ARCHIVOS
      document.querySelectorAll('.file-input').forEach(input => {
        input.addEventListener('change', (e) => {
          const index = parseInt(e.target.dataset.panel);
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const img = new Image();
              img.onload = () => {
                panelsState[index].img = img;
                panelsState[index].zoom = 1.0;
                panelsState[index].panX = 0;
                panelsState[index].panY = 0;

                document.getElementById(`card-${index}`).classList.add('loaded');
                document.getElementById(`status-${index}`).innerText = "Cargado ✓";
                document.getElementById(`status-${index}`).style.color = "#10b981";
                document.getElementById(`controls-${index}`).classList.add('active');

                syncSlidersUI(index);
                renderAll();
              };
              img.src = event.target.result;
            };
            reader.readAsDataURL(file);
          }
        });
      });

      // CONTROLES DE IMAGEN SLIDERS
      document.querySelectorAll('.slider-zoom').forEach(slider => {
        slider.addEventListener('input', (e) => {
          const i = parseInt(e.target.dataset.panel);
          panelsState[i].zoom = parseFloat(e.target.value);
          syncSlidersUI(i);
          renderAll();
        });
      });

      document.querySelectorAll('.slider-panx').forEach(slider => {
        slider.addEventListener('input', (e) => {
          const i = parseInt(e.target.dataset.panel);
          panelsState[i].panX = parseFloat(e.target.value);
          syncSlidersUI(i);
          renderAll();
        });
      });

      document.querySelectorAll('.slider-pany').forEach(slider => {
        slider.addEventListener('input', (e) => {
          const i = parseInt(e.target.dataset.panel);
          panelsState[i].panY = parseFloat(e.target.value);
          syncSlidersUI(i);
          renderAll();
        });
      });

      [charNameInput, textPosSelect, textOpacityInput, bgColorInput].forEach(el => {
        el.addEventListener('input', renderAll);
      });

      // ARRASTRE DIRECTO EN CANVAS
      previewCanvas.addEventListener('mousedown', (e) => {
        const rect = previewCanvas.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) * (MASTER_W / previewCanvas.width);
        const mouseY = (e.clientY - rect.top) * (MASTER_H / previewCanvas.height);

        selectedPanelIndex = PANELS_GEOMETRY.findIndex(g => 
          mouseX >= g.x && mouseX <= g.x + g.w &&
          mouseY >= g.y && mouseY <= g.y + g.h
        );

        if (selectedPanelIndex !== -1 && panelsState[selectedPanelIndex].img) {
          isDragging = true;
          dragStartX = e.clientX;
          dragStartY = e.clientY;
        }
      });

      window.addEventListener('mousemove', (e) => {
        if (isDragging && selectedPanelIndex !== -1) {
          const scaleFactor = MASTER_W / previewCanvas.width;
          const dx = (e.clientX - dragStartX) * scaleFactor;
          const dy = (e.clientY - dragStartY) * scaleFactor;

          panelsState[selectedPanelIndex].panX += dx;
          panelsState[selectedPanelIndex].panY += dy;

          dragStartX = e.clientX;
          dragStartY = e.clientY;

          syncSlidersUI(selectedPanelIndex);
          renderAll();
        }
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
        selectedPanelIndex = -1;
      });

      // ZOOM CON RUEDA DEL RATÓN
      previewCanvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = previewCanvas.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) * (MASTER_W / previewCanvas.width);
        const mouseY = (e.clientY - rect.top) * (MASTER_H / previewCanvas.height);

        const index = PANELS_GEOMETRY.findIndex(g => 
          mouseX >= g.x && mouseX <= g.x + g.w &&
          mouseY >= g.y && mouseY <= g.y + g.h
        );

        if (index !== -1 && panelsState[index].img) {
          const zoomFactor = e.deltaY < 0 ? 1.05 : 0.95;
          panelsState[index].zoom = Math.max(0.5, Math.min(3.0, panelsState[index].zoom * zoomFactor));
          syncSlidersUI(index);
          renderAll();
        }
      }, { passive: false });

      // EXPORTAR A 4K
      btnExport.addEventListener('click', () => {
        const exportCanvas = document.createElement('canvas');
        exportCanvas.width = MASTER_W;
        exportCanvas.height = MASTER_H;
        const exportCtx = exportCanvas.getContext('2d');

        renderCanvas(exportCtx, MASTER_W, MASTER_H, true);

        const link = document.createElement('a');
        link.download = `${charNameInput.value.trim() || 'Metodo_Zuppelli'}_4K.png`;
        link.href = exportCanvas.toDataURL('image/png', 1.0);
        link.click();
      });
    }

    init();
  
;
// [PROTECCIÓN DE DOMINIO ELIMINADA PARA USO LOCAL]
