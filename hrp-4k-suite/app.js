// ---- script 1 ----



// DICCIONARIO DE TRADUCCIONES COMPLETO (i18n) — VERSIÓN 1.5
    let currentLang = 'es';

    const I18N = {
      es: {
        splashBtn: 'INICIAR',
        splashVersionBtn: '⚡ VERSIÓN 1.5',
        welcomeTitle: '🎯 SELECCIONA EL MODO DE GENERACIÓN',
        welcomeSubtitle: 'Elige el estilo visual para configurar la Hoja de Referencia del Personaje (HDP)',
        modeRealTitle: 'Estilo Realista',
        mode2dTitle: 'Estilo 2D',
        modeDesc3D: '<strong>📌 Hoja Fisonómica 3D / Realista:</strong> Diseñada para creaciones de máximo realismo, renders 3D, cine y escaneo fotográfico. Genera textura dermatológica milimétrica, poros, iluminación de estudio, dispersión subsuperficial y reconstrucción anatómica 1:1.',
        modeDesc2D: '<strong>✏️ Hoja de Personaje Estilo 2D Universal:</strong> Diseñada para animación 2D, cómics, ilustración, cartoon, manga y Live2D. Preserva al 100% el estilo visual exacto de tu dibujo de referencia (línea limpia, color plano, cel shading) anulando cualquier volumen o textura 3D.',
        btnAccept: 'ACEPTAR',
        badgeReal: 'Estilo Realista 🔄',
        badge2D: 'Estilo 2D 🔄',
        headerSubtitle: 'Creador de Hojas de Personaje en 16:9 (3840x2160) By ClicMayores.com 2026',
        btnSubscribe: '▶ Suscríbete',
        chkGrid: 'Activar Grilla',
        btnCaliper: '📏 Activar Modo Calibre',
        btnExport: '💾 Exportar Hoja 4K (PNG)',
        sectionGeneralConfig: 'Configuración General',
        sidebarBadgeReal: 'Estilo Realista',
        sidebarBadge2D: 'Estilo 2D',
        lblCharName: 'Nombre / Rótulo del Personaje:',
        lblTextPos: 'Posición del Rótulo:',
        optTopLeft: 'Superior Izquierda',
        optTopCenter: 'Superior Centro',
        optTopRight: 'Superior Derecha',
        optBottomCenter: 'Inferior Centro',
        lblTextOpacity: 'Opacidad del Rótulo (Transparencia 35%):',
        lblBgColor: 'Color de Fondo del Lienzo:',
        sectionAddModule: '➕ Añadir Módulo al Canvas',
        btnAddModule: '➕ Agregar a la Hoja',
        btnTurnaroundVideo: '🎬 Turnaround 3D (Desde Video)',
        caliperTitle: '🎯 Modo Calibre (Escala 1:1)',
        caliperGapLabel: 'Distancia Facial Fija:',
        btnSetGap: 'Establecer px',
        lblMoveCaliper: '↕️ MOVER CALIBRE COMPLETO:',
        lblEyeGuide: '🔴 Altura Línea Ojos',
        lblChinGuide: '🔵 Altura Línea Mentón',
        sectionActiveModules: 'Módulos Activos en Lienzo',
        noModulesMsg: 'No hay módulos activos. Añade uno con el selector de arriba.',
        uploadBtn: '📂 Seleccionar Foto',
        framingToggle: '🖼️ ENCUADRE DE FOTO (Ratio {ratio})',
        zoomLbl: '🔍 Zoom',
        panXLbl: '↔️ Pan Foto X',
        panYLbl: '↕️ Pan Foto Y',
        uploadTipMsg: 'Sube una foto para activar Zoom y Panorámica.',
        emptyBadge: 'Vacío',
        modalRatioLabel: 'Ratio Requerido:',
        modalQualityLabel: 'Enfoque de Calidad:',
        modalQuality3D: 'Hiperrealismo milimétrico 8K, poros, micro-textura y referencia fisonómica 1:1.',
        modalQuality2D: 'Estilo 2D Universal, preservando la estética de la imagen de referencia (trazo vectorial limpio, cel shading sin volumen 3D).',
        customAdjPrefix: '💡 Ajuste Personalizado (Uso Recomendado):',
        btnRestoreBase: '🔄 Restaurar Base',
        btnCopyPrompt: '📋 Copiar Prompt',
        btnCopied: '✔ ¡Copiado!',
        includeHeadLbl: '¿Incluye cabeza y cuello?',
        btnOptionsText: '⚙️ OPCIONES',
        tbPhoto: 'Foto',
        tbFraming: 'Encuadre',
        tbZoom: '🔍 Zoom',
        tbPanX: '↔️ Pan X',
        tbPanY: '↕️ Pan Y',
        titleTbPhoto: 'Cargar o cambiar foto',
        titleTbFraming: 'Ajustar Zoom y Paneo',
        titleTbDelete: 'Eliminar Módulo',
        titleTbClose: 'Cerrar Opciones',
        btnJoinCommunity: '▶ UNETE A NUESTRA COMUNIDAD',
        footerRights: 'Todos los derechos reservados.',
        btnUndo: '↩ Deshacer',
        footerPrivacy: 'Política de Privacidad',

        // CHANGELOG V1.5
        chTitle: '🚀 Novedades y Actualizaciones (v1.5)',
        ch1Title: '🎬 Extractor de Video Turnaround 3D',
        ch1Desc: 'Escanea giros 360° en video y extrae automáticamente los 5 ángulos ortográficos con selector de proporción personalizado.',
        ch2Title: '🎨 Paleta Automática HEX',
        ch2Desc: 'Algoritmo que filtra fondos y extrae los 5 colores esenciales del personaje en muestras visuales listas para producción.',
        ch3Title: '⚙️ Barra Flotante Contextual',
        ch3Desc: 'Menú flotante con arrastre manual para controlar carga de foto, zoom y paneo directamente sobre cada módulo.',
        ch4Title: '↩️ Historial Deshacer (Undo)',
        ch4Desc: 'Recupera hasta 30 pasos previos ante cualquier cambio, movimiento o eliminación accidental dentro de la hoja.',
        ch5Title: '✏️ Suite 2D Ampliada y Chispas',
        ch5Desc: 'Nuevos módulos (Live2D, Chibi, Keyframes de acción) y efectos dinámicos de partículas térmicas en el inicio.',

        // MODAL EXTRACTOR DE VIDEO (ESPAÑOL)
        vmPromptBoxTitle: '💡 ¿Cómo crear este video en Kling / Luma / Runway / ComfyUI?',
        vmBtnCopyVideoPrompt: '📋 Copiar Prompt Video',
        vmPromptBoxDesc: 'Genera una imagen frontal de tu personaje en fondo gris neutro, súbela a tu motor de IA de video (Image-to-Video) y utiliza este prompt maestro:',
        vmModalTitle: '🎬 Escáner 3D / Extractor Turnaround a HRP 4K',
        vmModalSubtitle: 'La IA ha extraído automáticamente los 5 ángulos orbitales exactos de tu video 360°. Selecciona la proporción de salida deseada:',
        vmRotationLabel: 'Sentido de rotación del video:',
        vmRotCW: '🔄 Sentido Horario (Gira hacia la derecha)',
        vmRotCCW: '🔄 Sentido Antihorario (Gira hacia la izquierda)',
        vmRatioLabel: '📐 Proporción de salida de los módulos:',
        vmRatio916: '9:16 (Cuerpo Entero Vertical - Recomendado)',
        vmRatio34: '3:4 (Busto / Retrato Estándar)',
        vmRatio11: '1:1 (Cuadrado / Detalle)',
        vmRatio43: '4:3 (Horizontal Medio)',
        vmRatio169: '16:9 (Panorámico / Cinemático)',
        vmChkPalette: '🎨 Extraer automáticamente los 5 colores del personaje y generar el Módulo de Paleta (Swatches HEX)',
        vmBtnApply: '🚀 APLICAR LOS 5 ÁNGULOS A LA HOJA 4K',
        vmTh1: '1. Frente (0°)',
        vmTh2: '2. 3/4 Der (45°)',
        vmTh3: '3. Perfil Der (90°)',
        vmTh4: '4. Espalda (180°)',
        vmTh5: '5. Perfil Izq (270°)',
        vmPalTitle: '🎨 PALETA DE COLOR OFICIAL',
        vmPalColor: 'Color',

        // MANUAL DE USUARIO ACTUALIZADO V1.5 (ESPAÑOL)
        manualTitle: '📖 MANUAL DE USUARIO Y GUÍA TÉCNICA OFICIAL (v1.5)',
        manualSubtitle: '🚀 MÉTODO ZUPPELLI 4K — CONSTRUCTOR DE HOJAS DE PERSONAJE (HRP / MODEL SHEET)',
        manualAuthor: 'Desarrollado para producción cinematográfica, videojuegos, animación 2D y creación con IA — Por <strong>ClicMayores.com (2026)</strong>',
        manualSec1Title: '💎 1. ¿POR QUÉ UNA HOJA HRP EN 4K NATIVO (3840×2160)?',
        manualSec1Text1: 'Una <strong>Hoja de Referencia de Personaje (HRP / Model Sheet)</strong> estándar suele crearse en resoluciones bajas (1080p o imágenes sueltas sin escala). Esto provoca que los modelos de Inteligencia Artificial (Midjourney, Flux, Stable Diffusion) pierdan detalles faciales finos, generen piel plástica o deformen las proporciones anatómicas al cambiar de ángulo.',
        manualSec1Text2: '<strong>Ventajas exclusivas del Método Zuppelli 4K:</strong>',
        manualSec1List1: '<strong>Densidad de Píxeles Ultra HD (4K Nativo):</strong> Al maquetar en un lienzo de 3840×2160 px en relación 16:9, la IA puede extraer micro-poros, textura de iris, drapeado textil y arrugas con fidelidad 1:1.',
        manualSec1List2: '<strong>Consistencia Multiangular Absoluta:</strong> Tus personajes no cambian de fisionomía entre tomas de frente, perfil y 3/4 gracias al calibrador milimétrico integrado.',
        manualSec1List3: '<strong>Dualidad de Motores Gráficos:</strong> Soporta tanto <em>Estilo Realista</em> (textura dérmica 8K) como <em>Estilo 2D Universal</em> (anula texturas 3D y conserva trazos limpios, cel-shading y colores planos).',
        manualSec2Title: '👣 2. GUÍA PASO A PASO: CÓMO CREAR TU MODEL SHEET EN 5 PASOS',
        manualStep1: '<strong>Paso 1: Configuración Inicial</strong> — Selecciona tu idioma en la pantalla de inicio y elige entre <em>Estilo Realista</em> o <em>Estilo 2D</em>. Asigna un nombre al personaje en la barra lateral izquierda.',
        manualStep2: '<strong>Paso 2: Generar y Cargar la Vista Ancla o Video Turnaround</strong> — Genera el Busto de Frente con <code>PROMPT IA</code> o usa <code>🎬 Turnaround 3D</code> para extraer los 5 ángulos automáticos desde un video 360° con su paleta HEX.',
        manualStep3: '<strong>Paso 3: Calibrar la Escala Fisonómica con el Calibre</strong> — Activa el <code>📏 Modo Calibre</code> en la barra superior. Ajusta las líneas horizontales (Roja para ojos, Azul para mentón) para fijar la escala 1:1 idéntica.',
        manualStep4: '<strong>Paso 4: Añadir Vistas Secundarias e Igualar Proporción</strong> — Agrega módulos adicionales (Perfil, Cuerpo Entero, Expresiones). Pulsa el botón <code>=</code> para clonar tamaños exactos y alinear con el snap magnético.',
        manualStep5: '<strong>Paso 5: Encuadre con Barra Flotante y Exportación 4K</strong> — Usa el menú flotante <code>🔍 Encuadre</code> para zoom/paneo. Si cometes un error, usa <code>↩ Deshacer</code> (Ctrl+Z) y luego pulsa <code>💾 Exportar Hoja 4K (PNG)</code>.',
        manualSec3Title: '🛠️ 3. DICCIONARIO DE HERRAMIENTAS Y CONTROLES DEL LIENZO',
        manualTool1Title: '🎬 Extractor Turnaround 3D y Paleta Automática HEX',
        manualTool1Desc: 'Procesa videos 360° orbitales para extraer 5 ángulos ortográficos con proporción elegible y extrae los 5 colores clave del personaje filtrando fondos.',
        manualTool2Title: '⚙️ Botón OPCIONES y Barra Flotante Contextual con Arrastre',
        manualTool2Desc: 'Aparece sobre el módulo seleccionado. Permite cargar fotos, abrir el panel de zoom/paneo, mover la barra libremente y eliminar el módulo.',
        manualTool3Title: '📏 Calibrador Digital 1:1 (Pie de Rey Facial)',
        manualTool3Desc: 'Guías de alineación extrema con extremos circulares marcados. Permite fijar y mover en bloque la distancia milimétrica exacta entre ojos y mentón.',
        manualTool4Title: '🔲 Botón de Clonación de Ratio y Tamaño (=)',
        manualTool4Desc: 'Al activarse (rojo titilante), convierte al módulo en "fuente". Al hacer clic en cualquier otro módulo, transfiere instantáneamente su escala.',
        manualTool5Title: '↩️ Motor de Deshacer (Undo / Ctrl + Z) y Snap Magnético',
        manualTool5Desc: 'Historial de hasta 30 pasos para revertir cambios accidentales, acompañado de guías inteligentes magnéticas de alineación neón.'
      },
      pt: {
        splashBtn: 'INICIAR',
        splashVersionBtn: '⚡ VERSÃO 1.5',
        welcomeTitle: '🎯 SELECIONE O MODO DE GERAÇÃO',
        welcomeSubtitle: 'Escolha o estilo visual para configurar a Folha de Referência do Personagem (HDP)',
        modeRealTitle: 'Estilo Realista',
        mode2dTitle: 'Estilo 2D',
        modeDesc3D: '<strong>📌 Folha Fisionômica 3D / Realista:</strong> Projetada para máxima fidelidade, renderizações 3D, cinema e escaneamento fotográfico. Gera textura dermatológica milimétrica, poros, iluminação de estúdio, dispersão subsuperficial e reconstrução anatômica 1:1.',
        modeDesc2D: '<strong>✏️ Folha de Personagem Estilo 2D Universal:</strong> Projetada para animação 2D, quadrinhos, ilustração, cartoon, mangá e Live2D. Preserva 100% o estilo visual do seu desenho de referência (traço limpo, cores planas, cel shading) sem volume 3D.',
        btnAccept: 'ACEITAR',
        badgeReal: 'Estilo Realista 🔄',
        badge2D: 'Estilo 2D 🔄',
        headerSubtitle: 'Criador de Folhas de Personagem em 16:9 (3840x2160) By ClicMayores.com 2026',
        btnSubscribe: '▶ Inscreva-se',
        chkGrid: 'Ativar Grade',
        btnCaliper: '📏 Ativar Modo Calibre',
        btnExport: '💾 Exportar Folha 4K (PNG)',
        sectionGeneralConfig: 'Configuração Geral',
        sidebarBadgeReal: 'Estilo Realista',
        sidebarBadge2D: 'Estilo 2D',
        lblCharName: 'Nome / Rótulo do Personagem:',
        lblTextPos: 'Posição do Rótulo:',
        optTopLeft: 'Superior Esquerda',
        optTopCenter: 'Superior Centro',
        optTopRight: 'Superior Direita',
        optBottomCenter: 'Inferior Centro',
        lblTextOpacity: 'Opacidade do Rótulo (Transparência 35%):',
        lblBgColor: 'Cor de Fundo da Tela:',
        sectionAddModule: '➕ Adicionar Módulo à Tela',
        btnAddModule: '➕ Adicionar à Folha',
        btnTurnaroundVideo: '🎬 Turnaround 3D (A partir de Vídeo)',
        caliperTitle: '🎯 Modo Calibre (Escala 1:1)',
        caliperGapLabel: 'Distância Facial Fixa:',
        btnSetGap: 'Definir px',
        lblMoveCaliper: '↕️ MOVER CALIBRE COMPLETO:',
        lblEyeGuide: '🔴 Altura Linha dos Olhos',
        lblChinGuide: '🔵 Altura Linha do Queixo',
        sectionActiveModules: 'Módulos Ativos na Tela',
        noModulesMsg: 'Nenhum módulo ativo. Adicione um usando o seletor acima.',
        uploadBtn: '📂 Selecionar Foto',
        framingToggle: '🖼️ ENQUADRAMENTO DA FOTO (Ratio {ratio})',
        zoomLbl: '🔍 Zoom',
        panXLbl: '↔️ Pan Foto X',
        panYLbl: '↕️ Pan Foto Y',
        uploadTipMsg: 'Carregue uma foto para ativar Zoom e Panorâmica.',
        emptyBadge: 'Vazio',
        modalRatioLabel: 'Proporção Necessária:',
        modalQualityLabel: 'Foco de Qualidade:',
        modalQuality3D: 'Hiper-realismo milimétrico 8K, poros, microtextura e referência fisionômica 1:1.',
        modalQuality2D: 'Estilo 2D Universal, preservando a estética da imagem de referência (traço vetorial limpo, cel shading sem volume 3D).',
        customAdjPrefix: '💡 Ajuste Personalizado (Uso Recomendado):',
        btnRestoreBase: '🔄 Restaurar Padrão',
        btnCopyPrompt: '📋 Copiar Prompt',
        btnCopied: '✔ Copiado!',
        includeHeadLbl: 'Inclui cabeça e pescoço?',
        btnOptionsText: '⚙️ OPÇÕES',
        tbPhoto: 'Foto',
        tbFraming: 'Enquadrar',
        tbZoom: '🔍 Zoom',
        tbPanX: '↔️ Pan X',
        tbPanY: '↕️ Pan Y',
        titleTbPhoto: 'Carregar ou alterar foto',
        titleTbFraming: 'Ajustar Zoom e Panorâmica',
        titleTbDelete: 'Excluir Módulo',
        titleTbClose: 'Fechar Opções',
        btnJoinCommunity: '▶ PARTICIPE DA NOSSA COMUNIDADE',
        footerRights: 'Todos os direitos reservados.',
        btnUndo: '↩ Desfazer',
        footerPrivacy: 'Política de Privacidade',

        // CHANGELOG V1.5 (PORTUGUÊS)
        chTitle: '🚀 Novidades e Atualizações (v1.5)',
        ch1Title: '🎬 Extrator de Vídeo Turnaround 3D',
        ch1Desc: 'Escaneia giros 360° em vídeo e extrai automaticamente os 5 ângulos ortográficos com proporção personalizada.',
        ch2Title: '🎨 Paleta Automática HEX',
        ch2Desc: 'Algoritmo que filtra fundos e extrai as 5 cores essenciais do personagem em amostras visuais de produção.',
        ch3Title: '⚙️ Barra Flutuante Contextual',
        ch3Desc: 'Menu flutuante arrastável para controlar foto, zoom e enquadramento diretamente sobre cada módulo.',
        ch4Title: '↩️ Histórico Desfazer (Undo)',
        ch4Desc: 'Recupere até 30 ações anteriores diante de qualquer alteração ou exclusão acidental na tela.',
        ch5Title: '✏️ Suite 2D Expandida e Faíscas',
        ch5Desc: 'Novos módulos (Live2D, Chibi, Keyframes) e partículas térmicas dinâmicas na tela inicial.',

        // MODAL EXTRACTOR DE VIDEO (PORTUGUÊS)
        vmPromptBoxTitle: '💡 Como criar este vídeo no Kling / Luma / Runway / ComfyUI?',
        vmBtnCopyVideoPrompt: '📋 Copiar Prompt de Vídeo',
        vmPromptBoxDesc: 'Gere uma imagem frontal do seu personagem com fundo cinza neutro, envie para sua IA de vídeo (Image-to-Video) e use este prompt mestre:',
        vmModalTitle: '🎬 Escâner 3D / Extrator Turnaround para HRP 4K',
        vmModalSubtitle: 'A IA extraiu automaticamente os 5 ângulos orbitais exatos do seu vídeo 360°. Escolha a proporção de saída desejada:',
        vmRotationLabel: 'Sentido de rotação do vídeo:',
        vmRotCW: '🔄 Sentido Horário (Gira para a direita)',
        vmRotCCW: '🔄 Sentido Anti-horário (Gira para a esquerda)',
        vmRatioLabel: '📐 Proporção de saída dos módulos:',
        vmRatio916: '9:16 (Corpo Inteiro Vertical - Recomendado)',
        vmRatio34: '3:4 (Busto / Retrato Padrão)',
        vmRatio11: '1:1 (Quadrado / Detalhe)',
        vmRatio43: '4:3 (Horizontal Médio)',
        vmRatio169: '16:9 (Panorâmico / Cinemático)',
        vmChkPalette: '🎨 Extrair automaticamente as 5 cores do personagem e gerar a Paleta (Swatches HEX)',
        vmBtnApply: '🚀 APLICAR OS 5 ÂNGULOS À FOLHA 4K',
        vmTh1: '1. Frente (0°)',
        vmTh2: '2. 3/4 Dir (45°)',
        vmTh3: '3. Perfil Dir (90°)',
        vmTh4: '4. Costas (180°)',
        vmTh5: '5. Perfil Esq (270°)',
        vmPalTitle: '🎨 PALETA DE CORES OFICIAL',
        vmPalColor: 'Cor',

        // MANUAL DE USUÁRIO V1.5 (PORTUGUÊS)
        manualTitle: '📖 MANUAL DO USUÁRIO E GUIA TÉCNICO OFICIAL (v1.5)',
        manualSubtitle: '🚀 MÉTODO ZUPPELLI 4K — CONSTRUTOR DE FOLHAS DE PERSONAGEM (HRP / MODEL SHEET)',
        manualAuthor: 'Desenvolvido para produção de cinema, jogos, animação 2D e IA — Por <strong>ClicMayores.com (2026)</strong>',
        manualSec1Title: '💎 1. POR QUE UMA FOLHA HRP EM 4K NATIVO (3840×2160)?',
        manualSec1Text1: 'Uma <strong>Folha de Referência de Personagem (Model Sheet)</strong> padrão geralmente é criada em baixas resoluções. Isso faz com que modelos de IA (Midjourney, Flux, Stable Diffusion) percam detalhes finos e distorçam proporções.',
        manualSec1Text2: '<strong>Vantagens exclusivas do Método Zuppelli 4K:</strong>',
        manualSec1List1: '<strong>Densidade Ultra HD (4K Nativo):</strong> Na proporção 16:9 em 3840×2160 px, a IA captura microporos, íris e tecidos com fidelidade 1:1.',
        manualSec1List2: '<strong>Consistência Multiangular Absoluta:</strong> Seu personagem não muda de rosto entre vistas frontal, perfil e 3/4 graças ao calibrador facial integrado.',
        manualSec1List3: '<strong>Dois Motores Gráficos Dedicados:</strong> Suporta <em>Estilo Realista</em> (textura 8K) e <em>Estilo 2D Universal</em> (sem texturas 3D, com cores planas e traços limpos).',
        manualSec2Title: '👣 2. PASSO A PASSO: COMO CRIAR SEU MODEL SHEET EM 5 PASSOS',
        manualStep1: '<strong>Passo 1: Configuração Inicial</strong> — Escolha o idioma e o modo (Realista ou 2D). Digite o nome do personagem na barra lateral.',
        manualStep2: '<strong>Passo 2: Gerar Vista Âncora ou Vídeo Turnaround</strong> — Gere o Busto Frontal com <code>PROMPT IA</code> ou use <code>🎬 Turnaround 3D</code> para extrair 5 ângulos e paleta HEX de um vídeo 360°.',
        manualStep3: '<strong>Passo 3: Calibrar Escala com o Calibre</strong> — Ative o <code>📏 Modo Calibre</code>. Alinhe as guias nos olhos e queixo para fixar a escala facial padrão.',
        manualStep4: '<strong>Passo 4: Adicionar Outras Vistas e Clonar Tamanho</strong> — Adicione módulos de perfil, 3/4 e corpo inteiro. Use o botão <code>=</code> para igualar proporções e alinhar com o snap.',
        manualStep5: '<strong>Passo 5: Enquadramento com Barra Flutuante e Exportação 4K</strong> — Ajuste zoom/pan no menu <code>🔍 Enquadrar</code>. Use <code>↩ Desfazer</code> (Ctrl+Z) se errar e clique em <code>💾 Exportar Folha 4K (PNG)</code>.',
        manualSec3Title: '🛠️ 3. DICIONÁRIO DE FERRAMENTAS E CONTROLES',
        manualTool1Title: '🎬 Extrator Turnaround 3D e Paleta Automática HEX',
        manualTool1Desc: 'Processa vídeos 360° orbitais para extrair 5 ângulos ortográficos e gera automaticamente a paleta com 5 cores HEX filtrando o fundo.',
        manualTool2Title: '⚙️ Botão OPÇÕES e Barra Flutuante com Arraste',
        manualTool2Desc: 'Permite carregar fotos, fazer zoom/pan, arrastar a barra livremente e excluir módulos diretamente na tela.',
        manualTool3Title: '📏 Calibrador Digital 1:1',
        manualTool3Desc: 'Linhas guia horizontais de alta visibilidade para fixar a distância exata em pixels entre olhos e queixo.',
        manualTool4Title: '🔲 Botão Clonar Proporção (=)',
        manualTool4Desc: 'Transfere instantaneamente a largura, altura e proporção do módulo selecionado para qualquer outro.',
        manualTool5Title: '↩️ Motor Desfazer (Undo / Ctrl + Z) e Snap Magnético',
        manualTool5Desc: 'Histórico de até 30 passos para reverter ações acidentais, acompanhado de guias magnéticas inteligentes neon.'
      },
      en: {
        splashBtn: 'START',
        splashVersionBtn: '⚡ VERSION 1.5',
        welcomeTitle: '🎯 SELECT GENERATION MODE',
        welcomeSubtitle: 'Choose the visual style to configure your Character Reference Sheet (Model Sheet)',
        modeRealTitle: 'Realistic Style',
        mode2dTitle: '2D Style',
        modeDesc3D: '<strong>📌 3D / Realistic Sheet:</strong> Designed for maximum realism, 3D renders, cinema, and photographic scanning. Generates millimetric skin texture, pores, studio lighting, subsurface scattering, and 1:1 anatomical accuracy.',
        modeDesc2D: '<strong>✏️ Universal 2D Character Sheet:</strong> Designed for 2D animation, comics, illustration, cartoon, manga, and Live2D. Preserves 100% of your reference artwork style (clean line art, flat color, cel shading) eliminating any 3D volume or realistic shading.',
        btnAccept: 'ACCEPT',
        badgeReal: 'Realistic Style 🔄',
        badge2D: '2D Style 🔄',
        headerSubtitle: '16:9 (3840x2160) Character Model Sheet Creator By ClicMayores.com 2026',
        btnSubscribe: '▶ Subscribe',
        chkGrid: 'Enable Grid',
        btnCaliper: '📏 Enable Caliper Mode',
        btnExport: '💾 Export 4K Sheet (PNG)',
        sectionGeneralConfig: 'General Settings',
        sidebarBadgeReal: 'Realistic Style',
        sidebarBadge2D: '2D Style',
        lblCharName: 'Character Name / Title:',
        lblTextPos: 'Title Position:',
        optTopLeft: 'Top Left',
        optTopCenter: 'Top Center',
        optTopRight: 'Top Right',
        optBottomCenter: 'Bottom Center',
        lblTextOpacity: 'Title Opacity (35% Transparency):',
        lblBgColor: 'Canvas Background Color:',
        sectionAddModule: '➕ Add Module to Canvas',
        btnAddModule: '➕ Add to Sheet',
        btnTurnaroundVideo: '🎬 3D Turnaround (From Video)',
        caliperTitle: '🎯 Caliper Mode (1:1 Scale)',
        caliperGapLabel: 'Fixed Facial Distance:',
        btnSetGap: 'Set px',
        lblMoveCaliper: '↕️ MOVE COMPLETE CALIPER:',
        lblEyeGuide: '🔴 Eye Line Height',
        lblChinGuide: '🔵 Chin Line Height',
        sectionActiveModules: 'Active Modules on Canvas',
        noModulesMsg: 'No active modules. Add one using the selector above.',
        uploadBtn: '📂 Select Photo',
        framingToggle: '🖼️ PHOTO FRAMING (Ratio {ratio})',
        zoomLbl: '🔍 Zoom',
        panXLbl: '↔️ Photo Pan X',
        panYLbl: '↕️ Photo Pan Y',
        uploadTipMsg: 'Upload a photo to enable Zoom and Pan controls.',
        emptyBadge: 'Empty',
        modalRatioLabel: 'Required Ratio:',
        modalQualityLabel: 'Quality Focus:',
        modalQuality3D: 'Millimetric 8K hyperrealism, pores, micro-texture, and 1:1 physiognomic reference.',
        modalQuality2D: 'Universal 2D Style, preserving reference artwork aesthetic (clean vector line art, flat colors, cel shading without 3D volume).',
        customAdjPrefix: '💡 Custom Tuning (Recommended):',
        btnRestoreBase: '🔄 Restore Default',
        btnCopyPrompt: '📋 Copy Prompt',
        btnCopied: '✔ Copied!',
        includeHeadLbl: 'Include head and neck?',
        btnOptionsText: '⚙️ OPTIONS',
        tbPhoto: 'Photo',
        tbFraming: 'Framing',
        tbZoom: '🔍 Zoom',
        tbPanX: '↔️ Pan X',
        tbPanY: '↕️ Pan Y',
        titleTbPhoto: 'Upload or change photo',
        titleTbFraming: 'Adjust Zoom and Pan',
        titleTbDelete: 'Delete Module',
        titleTbClose: 'Close Options',
        btnJoinCommunity: '▶ JOIN OUR COMMUNITY',
        footerRights: 'All rights reserved.',
        btnUndo: '↩ Undo',
        footerPrivacy: 'Privacy Policy',

        // CHANGELOG V1.5 (ENGLISH)
        chTitle: '🚀 What’s New & Updates (v1.5)',
        ch1Title: '🎬 3D Video Turnaround Extractor',
        ch1Desc: 'Scans 360° orbital videos and automatically extracts 5 orthographic angles with custom ratio selection.',
        ch2Title: '🎨 Automatic HEX Palette',
        ch2Desc: 'Smart pixel algorithm filtering backgrounds to extract the character’s 5 core colors into production swatches.',
        ch3Title: '⚙️ Contextual Floating Toolbar',
        ch3Desc: 'Draggable floating menu allowing photo upload, live zoom, and pan controls directly over each module.',
        ch4Title: '↩️ Undo History (Ctrl + Z)',
        ch4Desc: 'Restore up to 30 previous canvas states after any accidental change, transformation, or deletion.',
        ch5Title: '✏️ Expanded 2D Suite & Sparks',
        ch5Desc: 'New modules (Live2D, Chibi SD, Action keyframes) and animated glowing embers on splash screen.',

        // MODAL EXTRACTOR DE VIDEO (ENGLISH)
        vmPromptBoxTitle: '💡 How to create this video in Kling / Luma / Runway / ComfyUI?',
        vmBtnCopyVideoPrompt: '📋 Copy Video Prompt',
        vmPromptBoxDesc: 'Generate a front image of your character on a neutral gray background, upload to your AI video engine (Image-to-Video), and use this master prompt:',
        vmModalTitle: '🎬 3D Scanner / Turnaround Extractor to 4K HRP',
        vmModalSubtitle: 'AI has automatically extracted 5 exact orbital angles from your 360° video. Choose your desired output aspect ratio:',
        vmRotationLabel: 'Video rotation direction:',
        vmRotCW: '🔄 Clockwise (Turns to the right)',
        vmRotCCW: '🔄 Counter-Clockwise (Turns to the left)',
        vmRatioLabel: '📐 Module output aspect ratio:',
        vmRatio916: '9:16 (Full Body Vertical - Recommended)',
        vmRatio34: '3:4 (Bust / Standard Portrait)',
        vmRatio11: '1:1 (Square / Detail)',
        vmRatio43: '4:3 (Medium Horizontal)',
        vmRatio169: '16:9 (Panoramic / Cinematic)',
        vmChkPalette: '🎨 Automatically extract 5 character colors & generate Palette Module (HEX Swatches)',
        vmBtnApply: '🚀 APPLY ALL 5 ANGLES TO 4K SHEET',
        vmTh1: '1. Front (0°)',
        vmTh2: '2. 3/4 Right (45°)',
        vmTh3: '3. Right Profile (90°)',
        vmTh4: '4. Back (180°)',
        vmTh5: '5. Left Profile (270°)',
        vmPalTitle: '🎨 OFFICIAL COLOR PALETTE',
        vmPalColor: 'Color',

        // MANUAL DE USUÁRIO V1.5 (ENGLISH)
        manualTitle: '📖 OFFICIAL USER MANUAL & TECHNICAL GUIDE (v1.5)',
        manualSubtitle: '🚀 ZUPPELLI METHOD 4K — CHARACTER REFERENCE SHEET BUILDER (HRP / MODEL SHEET)',
        manualAuthor: 'Engineered for cinema, game dev, 2D animation, and AI pipelines — By <strong>ClicMayores.com (2026)</strong>',
        manualSec1Title: '💎 1. WHY NATIVE 4K (3840×2160) CHARACTER SHEETS MATTER',
        manualSec1Text1: 'Standard model sheets are often created in low resolutions (1080p or loose sketches). This causes AI models (Midjourney, Flux, Stable Diffusion) to lose micro-facial details and distort facial anatomy across multiple angles.',
        manualSec1Text2: '<strong>Key Advantages of the Zuppelli 4K Method:</strong>',
        manualSec1List1: '<strong>Native Ultra HD Pixel Density (4K):</strong> Structured in 3840×2160 px (16:9), AI vision encoders extract iris patterns, micro-pores, and cloth textures with 1:1 fidelity.',
        manualSec1List2: '<strong>Flawless Multi-Angle Consistency:</strong> Keeps facial proportions identical across front, profile, and 3/4 views using the digital caliper.',
        manualSec1List3: '<strong>Dual Production Engines:</strong> Seamlessly switch between <em>Realistic Style</em> (8K skin rendering) and <em>Universal 2D Style</em> (blocks 3D shading, preserving clean line art and flat cel shading).',
        manualSec2Title: '👣 2. STEP-BY-STEP WORKFLOW: BUILD YOUR MODEL SHEET IN 5 STEPS',
        manualStep1: '<strong>Step 1: Setup</strong> — Pick your language and select <em>Realistic Style</em> or <em>2D Style</em>. Name your character in the left sidebar.',
        manualStep2: '<strong>Step 2: Generate Master Front Anchor or Turnaround Video</strong> — Click <code>PROMPT IA</code> for Front Bust or use <code>🎬 Turnaround 3D</code> to extract 5 angles & HEX palette from a 360° video.',
        manualStep3: '<strong>Step 3: Calibrate 1:1 Scale</strong> — Turn on <code>📏 Caliper Mode</code>. Align red (eyes) and blue (chin) guide lines to fix the exact facial height standard.',
        manualStep4: '<strong>Step 4: Add Secondary Views & Clone Scale</strong> — Add profile, 3/4, full body, and expression modules. Use <code>=</code> to clone exact dimensions.',
        manualStep5: '<strong>Step 5: Framing with Floating Toolbar & 4K Export</strong> — Refine framing via <code>🔍 Framing</code> (Zoom/Pan). Use <code>↩ Undo</code> (Ctrl+Z) if needed, and hit <code>💾 Export 4K Sheet (PNG)</code>.',
        manualSec3Title: '🛠️ 3. TOOLS & CANVAS CONTROLS DIRECTORY',
        manualTool1Title: '🎬 3D Turnaround Extractor & Auto HEX Palette',
        manualTool1Desc: 'Processes orbital 360° videos to automatically extract 5 orthographic views and generates 5 production-ready HEX swatches.',
        manualTool2Title: '⚙️ OPTIONS Button & Draggable Floating Toolbar',
        manualTool2Desc: 'Draggable hover toolbar providing 1-click photo upload, live zoom, X/Y pan sliders, and module deletion directly on canvas.',
        manualTool3Title: '📏 1:1 Digital Caliper',
        manualTool3Desc: 'High-contrast guide lines to lock and shift the exact pixel distance between eye level and chin.',
        manualTool4Title: '🔲 Clone Ratio & Size Tool (=)',
        manualTool4Desc: 'Instantly copies width, height, and aspect ratio from a master module to any secondary box.',
        manualTool5Title: '↩️ Undo History (Ctrl + Z) & Magnetic Snapping',
        manualTool5Desc: 'Up to 30-step undo buffer to revert unintended moves, paired with intelligent glowing neon snapping lines.'
      }
    };
    
    // RESTAURACIÓN COMPLETA DE LOS 32 MÓDULOS 3D ORIGINALES
    const CATALOGO_MODULOS_3D = [
      {
        id: 'busto_frente',
        cat: { es: '📐 Turnarounds y Vistas', pt: '📐 Turnarounds e Vistas', en: '📐 Turnarounds & Views' },
        label: { es: '1. Busto de Frente (Ancla Principal)', pt: '1. Busto de Frente (Âncora Principal)', en: '1. Front Bust (Main Anchor)' },
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Exact 1:1 physical clone of the character from reference photo, 100% identical facial features, master ultra-high resolution 8K photograph. Front bust portrait looking directly forward, subsurface scattering, millimetric skin pores, micro-wrinkles, fine skin texture, eyes with realistic iris reflections, exact hair texture and glasses frame. Captured at 85mm, wide open aperture f/1.8, razor-sharp focus, raw unedited photo, wearing exact same clothing from reference photo, solid neutral 50% middle gray studio background (#808080), studio lighting, seamless clean background --ar 3:4 --style raw --s 0 --no plastic, smooth skin, airbrushed, wax, CGI, 3D render, glossy',
        usageTip: { es: 'Vista ancla maestra del personaje. Sube tu foto base con --cref [URL_FOTO] --cw 100.', pt: 'Vista âncora mestre do personagem. Envie sua foto com --cref [URL_FOTO] --cw 100.', en: 'Master anchor view of character. Upload reference photo with --cref [URL_FOTO] --cw 100.' },
        customLabel: { es: 'URL de Foto Base / Parámetro Reference (--cref)', pt: 'URL da Foto Base / Parâmetro Reference (--cref)', en: 'Base Photo URL / Reference Param (--cref)' },
        customPlaceholder: 'https://ejemplo.com/mifoto.jpg',
        explanationText: {
          es: 'Vista frontal maestra para fijar la identidad 1:1 del personaje, simetría facial, proporción de ojos, nariz y boca.',
          pt: 'Vista frontal mestre para fixar a identidade 1:1 do personagem, simetria facial e proporções exatas.',
          en: 'Master front portrait establishing 1:1 facial identity, symmetry, eye spacing, and nose/mouth alignment.'
        }
      },
      {
        id: 'perfil_derecho',
        cat: { es: '📐 Turnarounds y Vistas', pt: '📐 Turnarounds e Vistas', en: '📐 Turnarounds & Views' },
        label: { es: '2. Perfil Derecho (90°)', pt: '2. Perfil Direito (90°)', en: '2. Right Profile (90°)' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Right profile portrait, facing towards the right side of the screen, right side profile 90 degrees, showing right cheek, right jawline, right ear and right side of nose. Exact 1:1 physical clone of character from reference photo. Master ultra-high resolution 8K raw photograph, millimetric skin pores, micro-wrinkles, natural skin texture, subsurface scattering, shot on 85mm prime lens, sharp focus, neutral studio background --ar 1:1 --style raw --s 0 --no plastic, airbrushed, wax, CGI',
        usageTip: { es: 'Enfocado en la profundidad lateral derecha, mandíbula y alineación del mentón.', pt: 'Focado na profundidade lateral direita, mandíbula e queixo.', en: 'Focuses on right side profile depth, jawline, and chin alignment.' },
        customLabel: { es: 'Detalles de Mandíbula / Mentón (Perfil Derecho)', pt: 'Detalhes da Mandíbula / Queixo (Perfil Direito)', en: 'Jawline / Chin Details (Right Profile)' },
        customPlaceholder: 'ej: mandíbula marcada y barbilla partida',
        explanationText: {
          es: 'Muestra la proyección exacta del rostro en un ángulo estricto de 90 grados hacia la derecha para calcular puente nasal y mandíbula.',
          pt: 'Exibe a projeção do rosto em ângulo estrito de 90° para a direita para determinar queixo e ponte nasal.',
          en: 'Displays strict 90-degree right profile projection to accurately define nose bridge, jaw depth, and ear placement.'
        }
      },
      {
        id: 'perfil_izquierdo',
        cat: { es: '📐 Turnarounds y Vistas', pt: '📐 Turnarounds e Vistas', en: '📐 Turnarounds & Views' },
        label: { es: '3. Perfil Izquierdo (90°)', pt: '3. Perfil Esquerdo (90°)', en: '3. Left Profile (90°)' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Left profile portrait, facing towards the left side of the screen, left side profile 90 degrees, showing skull structure, hair crown, left jawline, left ear anatomy. Exact 1:1 physical clone of character from reference photo. Master ultra-high resolution 8K raw photograph, millimetric skin pores, micro-wrinkles, natural skin texture, subsurface scattering, shot on 85mm prime lens, sharp focus, neutral studio background --ar 1:1 --style raw --s 0 --no plastic, airbrushed, wax, CGI',
        usageTip: { es: 'Enfocado en la estructura craneal del lado izquierdo y coronilla.', pt: 'Focado na estrutura craniana esquerda e topo do cabelo.', en: 'Focuses on left skull structure and hair volume.' },
        customLabel: { es: 'Estilo de Cabello / Coronilla (Perfil Izquierdo)', pt: 'Estilo de Cabelo / Topo (Perfil Esquerdo)', en: 'Hair Style / Crown (Left Profile)' },
        customPlaceholder: 'ej: rapado a los lados con degradado limpio',
        explanationText: {
          es: 'Ofrece la contraparte simétrica o asimétrica del perfil derecho del rostro a 90 grados.',
          pt: 'Fornece a contraparte do perfil direito a 90 graus para análise de simetria.',
          en: 'Provides the symmetrical or asymmetrical counterpart of the right profile at 90 degrees.'
        }
      },
      {
        id: 'vista_tres_cuartos_d',
        cat: { es: '📐 Turnarounds y Vistas', pt: '📐 Turnarounds e Vistas', en: '📐 Turnarounds & Views' },
        label: { es: 'Vista 3/4 Ángulo Derecho', pt: 'Vista 3/4 Ângulo Direito', en: '3/4 View Right Angle' },
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Exact 1:1 physical clone of the character from reference photo. Three-quarter front right portrait turned 45 degrees, showing volume of cheekbones, nose bridge, jaw depth, and ear. Master ultra-high resolution 8K raw photo, subsurface scattering, millimetric skin pores, fine texture, sharp focus, solid neutral 50% middle gray studio background (#808080), studio lighting, seamless clean background --ar 3:4 --style raw --s 0 --no plastic, CGI, 3D render',
        usageTip: { es: 'Esencial para entender la transición de volumen 3D del lado derecho.', pt: 'Essencial para transição de volume 3D do lado direito.', en: 'Crucial for understanding 3D volumetric facial transitions on the right.' },
        customLabel: { es: 'Estructura de Pómulos / Mejilla (3/4 Derecho)', pt: 'Estrutura das Maçãs do Rosto (3/4 Direito)', en: 'Cheekbone Structure (3/4 Right)' },
        customPlaceholder: 'ej: pómulos altos y prominentes',
        explanationText: {
          es: 'Muestra la tridimensionalidad facial a 45 grados hacia la derecha.',
          pt: 'Demonstra a tridimensionalidade facial a 45 graus para a direita.',
          en: 'Shows 45-degree volumetric depth and cheekbone prominence toward the right.'
        }
      },
      {
        id: 'vista_tres_cuartos_i',
        cat: { es: '📐 Turnarounds y Vistas', pt: '📐 Turnarounds e Vistas', en: '📐 Turnarounds & Views' },
        label: { es: 'Vista 3/4 Ángulo Izquierdo', pt: 'Vista 3/4 Ângulo Esquerdo', en: '3/4 View Left Angle' },
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Exact 1:1 physical clone of the character from reference photo. Three-quarter front left portrait turned 45 degrees, showing volumetric depth of facial features, cheekbones, nose profile, and ear. Master ultra-high resolution 8K raw photo, subsurface scattering, millimetric skin pores, fine texture, sharp focus, solid neutral 50% middle gray studio background (#808080), studio lighting, seamless clean background --ar 3:4 --style raw --s 0 --no plastic, CGI, 3D render',
        usageTip: { es: 'Esencial para entender la transición de volumen 3D del lado izquierdo.', pt: 'Essencial para transição de volume 3D do lado esquerdo.', en: 'Crucial for understanding 3D volumetric facial transitions on the left.' },
        customLabel: { es: 'Estilo de Iluminación / Sombras (3/4 Izquierdo)', pt: 'Estilo de Iluminação (3/4 Esquerdo)', en: 'Lighting / Shadows (3/4 Left)' },
        customPlaceholder: 'ej: sombras marcadas estilo claroscuro',
        explanationText: {
          es: 'Muestra la tridimensionalidad facial a 45 grados hacia la izquierda.',
          pt: 'Demonstra a tridimensionalidade facial a 45 graus para a esquerda.',
          en: 'Shows 45-degree volumetric depth and cheekbone prominence toward the left.'
        }
      },
      {
        id: 'vista_espalda_busto',
        cat: { es: '📐 Turnarounds y Vistas', pt: '📐 Turnarounds e Vistas', en: '📐 Turnarounds & Views' },
        label: { es: 'Vista Posterior / Espalda Busto', pt: 'Vista Posterior / Costas Busto', en: 'Back View Bust' },
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Exact 1:1 physical clone of the character from reference photo. Back view bust portrait seen from behind, showing exact hair crown texture, neck collar, and upper back clothing details. Master ultra-high resolution 8K raw photo, razor-sharp focus, neutral studio background --ar 3:4 --style raw --s 0 --no face, front features',
        usageTip: { es: 'Documenta la coronilla del cabello y el cuello de la vestimenta por detrás.', pt: 'Documenta o topo do cabelo e gola traseira.', en: 'Documents hair crown texture and upper collar from behind.' },
        customLabel: { es: 'Detalles de Nuca o Cuello de Ropa', pt: 'Detalhes da Nuca ou Gola', en: 'Nape or Collar Details' },
        customPlaceholder: 'ej: cuello alto de cuero con bordado dorado',
        explanationText: {
          es: 'Captura la cabeza y hombros desde una perspectiva trasera (180°).',
          pt: 'Captura a cabeça e ombros de uma perspectiva traseira (180°).',
          en: 'Captures head and shoulders directly from behind (180°).'
        }
      },
      {
        id: 'giro_cabeza',
        cat: { es: '📐 Turnarounds y Vistas', pt: '📐 Turnarounds e Vistas', en: '📐 Turnarounds & Views' },
        label: { es: 'Giro de Cabeza Completo (Head Turnaround)', pt: 'Giro Completo de Cabeça (Head Turnaround)', en: 'Full Head Turnaround' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Master character model sheet sequence displaying 4 head angles of the exact same character from reference photo: front view, 45-degree angle, side profile, and back of the head. 100% identical facial identity, skin texture, micro-pores, and hair structure across all angles. 8K resolution raw studio photography, neutral gray background --ar 16:9 --style raw --s 0 --no inconsistent features, plastic skin, CGI',
        usageTip: { es: 'Rotación coordinada exclusiva de la cabeza para documentar el peinado y rasgos.', pt: 'Rotação coordenada da cabeça para registrar penteado e traços.', en: 'Coordinated head rotation sequence documenting hairstyle and facial planes.' },
        customLabel: { es: 'Número de Ángulos en Secuencia', pt: 'Número de Ângulos na Sequência', en: 'Angles in Sequence' },
        customPlaceholder: 'ej: 4 ángulos (frente, 45°, perfil, espalda)',
        explanationText: {
          es: 'Muestra una secuencia coordinada de rotación de la cabeza en un solo panel panorámico.',
          pt: 'Exibe uma sequência alinhada de rotação de cabeça em painel panorâmico.',
          en: 'Displays an aligned multi-angle head rotation sequence in a single panoramic frame.'
        }
      },
      {
        id: 'vista_superior_inferior',
        cat: { es: '📐 Turnarounds y Vistas', pt: '📐 Turnarounds e Vistas', en: '📐 Turnarounds & Views' },
        label: { es: 'Vista Superior (Top) e Inferior (Bottom)', pt: 'Vista Superior (Top) e Inferior (Bottom)', en: 'Top & Bottom Angle Views' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'High resolution technical reference sheet showing top-down (birds eye view) and bottom-up angles of the character head and shoulders from reference photo. Precise anatomical perspective, showing crown of head, hair parting, shoulder breadth, and jawline from high and low angles. Raw photograph, studio lighting --ar 16:9 --style raw --s 0 --no distorted perspective',
        usageTip: { es: 'Perspectiva aérea y cenital para cascos, hombreras y mandíbula.', pt: 'Perspectiva aérea e de baixo para capacetes e mandíbula.', en: 'High and low angle perspectives for helmets, shoulder pads, and jaw definition.' },
        customLabel: { es: 'Accesorio Cenital / Casco / Capucha', pt: 'Acessório Superior / Capacete / Capuz', en: 'Top Accessory / Helmet / Hood' },
        customPlaceholder: 'ej: casco táctico con visera transparente',
        explanationText: {
          es: 'Ofrece ángulos picados (vista aérea) y contrapicados de la cabeza y hombros.',
          pt: 'Fornece ângulos superiores e inferiores da cabeça e ombros.',
          en: 'Provides high (bird-eye) and low angle views for 3D modeling precision.'
        }
      },
      {
        id: 'expresiones_clave',
        cat: { es: '😀 Rostro y Expresividad', pt: '😀 Rosto e Expressividade', en: '😀 Face & Expressions' },
        label: { es: 'Panel de Expresiones Clave (6 Emociones)', pt: 'Painel de Expressões Principais (6 Emoções)', en: 'Key Expressions Sheet (6 Emotions)' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Master character expression sheet displaying 6 distinct close-up emotions of the exact same person from reference photo: neutral, joyful laugh, deep sadness, furious anger, extreme surprise, and disgust. 100% identical facial identity, skin micro-pores, muscle tension wrinkles, eyes, and hair across all emotions. 8K raw studio photo --ar 16:9 --style raw --s 0 --no inconsistent face, distorted features',
        usageTip: { es: 'Define la personalidad del personaje mediante las 6 emociones universales.', pt: 'Define a personalidade com as 6 emoções universais.', en: 'Defines character personality across 6 universal facial emotions.' },
        customLabel: { es: 'Personalizar 6 Emociones Clave', pt: 'Personalizar 6 Emoções', en: 'Customize 6 Key Emotions' },
        customPlaceholder: 'ej: neutro, risa malvada, guiño, ira, miedo, sorpresa',
        explanationText: {
          es: 'Reúne en un solo panel las 6 reacciones emocionales fundamentales manteniendo identidad 1:1.',
          pt: 'Reúne em um painel as 6 reações emocionais fundamentais com fidelidade 1:1.',
          en: 'Consolidates 6 core emotional expressions in one panel maintaining 1:1 facial identity.'
        }
      },
      {
        id: 'visemas',
        cat: { es: '😀 Rostro y Expresividad', pt: '😀 Rosto e Expressividade', en: '😀 Face & Expressions' },
        label: { es: 'Sincronización Labial y Visemas', pt: 'Sincronização Labial e Visemas', en: 'Lip-Sync & Visemes Guide' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Viseme lip-sync character reference sheet showing 6 close-up mouth phoneme configurations (A, E, I, O, U, F/V) of the person from reference photo. Highly detailed mouth anatomy, lip creases, teeth alignment, skin micro-texture, and jaw movement. 8K raw photography, neutral background --ar 16:9 --style raw --s 0 --no extra teeth, distorted lips',
        usageTip: { es: 'Documenta la configuración bucal para animación y sincronización labial.', pt: 'Documenta configuração labial para sincronização de voz.', en: 'Documents mouth and phoneme postures for animation lip-sync.' },
        customLabel: { es: 'Configuración de Vocales / Fonemas', pt: 'Configuração de Vogais / Fonemas', en: 'Vowels / Phonemes Configuration' },
        customPlaceholder: 'ej: A, E, I, O, U, F/V, M/B/P',
        explanationText: {
          es: 'Muestra las posturas anatómicas de los labios y dentadura para los fonemas principales.',
          pt: 'Exibe posturas anatômicas dos lábios e dentes para os fonemas principais.',
          en: 'Displays mouth and dental alignment for major phonetic vocalizations.'
        }
      },
      {
        id: 'macro_ojos',
        cat: { es: '😀 Rostro y Expresividad', pt: '😀 Rosto e Expressividade', en: '😀 Face & Expressions' },
        label: { es: 'Macro Detalle: Ojos e Iris', pt: 'Macro Detalhe: Olhos e Íris', en: 'Macro Detail: Eyes & Iris' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro 100mm lens photograph focusing on the eye and iris texture of the character from reference photo. Ultra-high resolution millimetric skin texture, individual eyelashes, wet iris reflections, sclera blood vessels, skin pores, and fine eye wrinkles. Subsurface scattering, raw unedited photo --ar 1:1 --style raw --s 0 --no smooth skin, digital painting, CGI',
        usageTip: { es: 'Captura el iris, pestaña y reflejos oculares a nivel hiperrealista.', pt: 'Captura íris, cílios e reflexos com hiper-realismo.', en: 'Captures iris patterns, eyelashes, and specular reflections.' },
        customLabel: { es: 'Color y Patrón del Iris / Heterocromía', pt: 'Cor e Padrão da Íris', en: 'Iris Color / Heterochromia' },
        customPlaceholder: 'ej: iris verde esmeralda con motas doradas',
        explanationText: {
          es: 'Primerísimo plano macro enfocado exclusivamente en la estructura del iris, esclerótica y párpados.',
          pt: 'Close-up macro focado na estrutura da íris, esclera e pálpebras.',
          en: 'Extreme macro shot focused on iris patterns, cornea gloss, and eyelids.'
        }
      },
      {
        id: 'macro_piel_poros',
        cat: { es: '😀 Rostro y Expresividad', pt: '😀 Rosto e Expressividade', en: '😀 Face & Expressions' },
        label: { es: 'Macro Detalle: Piel y Poros Dermatológicos', pt: 'Macro Detalhe: Pele e Poros', en: 'Macro Detail: Skin & Pores' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro dermatological photograph focusing on the cheek and jaw skin texture of the character from reference photo. Millimetric skin pores, micro-wrinkles, natural skin oils, fine vellus facial hair, subsurface scattering, 8K ultra-detailed raw photograph, studio rim light --ar 1:1 --style raw --s 0 --no smooth skin, airbrushed, plastic, wax',
        usageTip: { es: 'Referencia dermatológica milimétrica para mapeo de textura facial.', pt: 'Referência dermatológica para textura facial.', en: 'Dermatological reference for pore and bump mapping.' },
        customLabel: { es: 'Tipo de Piel / Condición Dermatológica', pt: 'Tipo de Pele', en: 'Skin Type / Details' },
        customPlaceholder: 'ej: piel curtida por el sol con pecas densas',
        explanationText: {
          es: 'Acercamiento dermatológico milimétrico a la piel de las mejillas y barbilla.',
          pt: 'Aproximação dermatológica na pele das bochechas e queixo.',
          en: 'Close-up texture reference for micro-wrinkles, pores, and skin subsurface scattering.'
        }
      },
      {
        id: 'macro_boca_dientes',
        cat: { es: '😀 Rostro y Expresividad', pt: '😀 Rosto e Expressividade', en: '😀 Face & Expressions' },
        label: { es: 'Macro Detalle: Boca, Labios y Dientes', pt: 'Macro Detalhe: Boca e Dentes', en: 'Macro Detail: Mouth & Teeth' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro close-up photograph focusing on the lips, mouth, and teeth structure of the character from reference photo. Millimetric lip texture creases, moisture gloss, skin pores around mouth, natural teeth enamel texture. High resolution raw photo, sharp focus --ar 1:1 --style raw --s 0 --no distorted teeth, plastic skin',
        usageTip: { es: 'Alineación de dentadura, textura de labios y arrugas peribucales.', pt: 'Alinhamento dentário e textura labial.', en: 'Dental alignment, lip folds, and perioral texture.' },
        customLabel: { es: 'Rasgos Dentales / Piercings', pt: 'Traços Dentários / Piercings', en: 'Dental Features / Piercings' },
        customPlaceholder: 'ej: caninos ligeramente afilados y piercing en labio',
        explanationText: {
          es: 'Plano macro detallado del área peribucal, bordes de los labios y la alineación dental.',
          pt: 'Plano macro detalhado da área labial e arcada dentária.',
          en: 'Detailed macro view of lip texture, moisture, and dental anatomy.'
        }
      },
      {
        id: 'macro_nariz',
        cat: { es: '😀 Rostro y Expresividad', pt: '😀 Rosto e Expressividade', en: '😀 Face & Expressions' },
        label: { es: 'Macro Detalle: Nariz y Puente Nasal', pt: 'Macro Detalhe: Nariz e Ponte Nasal', en: 'Macro Detail: Nose Bridge' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro close-up photograph focusing on the nose structure, nostril contour, and nose bridge of the character from reference photo. Millimetric skin pores, natural skin texture, freckles, micro-wrinkles, subsurface scattering, 8K raw photography --ar 1:1 --style raw --s 0 --no smooth skin, airbrushed',
        usageTip: { es: 'Detalle de fosas nasales, pecas y puente óseo del caballete nasal.', pt: 'Detalhe das narinas e ponte nasal.', en: 'Nostril curvature, freckles, and nasal bone contour.' },
        customLabel: { es: 'Forma de Nariz / Puente Nasal', pt: 'Formato do Nariz', en: 'Nose Shape / Bridge' },
        customPlaceholder: 'ej: nariz aguileña con pequeña cicatriz en puente',
        explanationText: {
          es: 'Focus macro directo sobre el caballete nasal, alas nasales y fosas.',
          pt: 'Foco macro sobre o dorso nasal e asas do nariz.',
          en: 'Direct macro focus on nose tip, nostril flare, and nasal bridge.'
        }
      },
      {
        id: 'macro_oreja',
        cat: { es: '😀 Rostro y Expresividad', pt: '😀 Rosto e Expressividade', en: '😀 Face & Expressions' },
        label: { es: 'Macro Detalle: Oreja y Cartílago', pt: 'Macro Detalhe: Orelha e Cartilagem', en: 'Macro Detail: Ear Anatomy' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro close-up photograph focusing on the ear anatomy, cartilage folds, lobe, and surrounding skin texture of the character from reference photo. Subsurface scattering light passing through ear cartilage, millimetric skin pores, fine hair, 8K raw photo --ar 1:1 --style raw --s 0 --no distorted ear, smooth plastic',
        usageTip: { es: 'Estructura anatómica del cartílago auricular y lóbulo.', pt: 'Estrutura anatômica da orelha e lóbulo.', en: 'Anatomical cartilage folds and earlobe thickness.' },
        customLabel: { es: 'Modificación Auricular / Aretes', pt: 'Brincos / Modificação na Orelha', en: 'Earrings / Modifications' },
        customPlaceholder: 'ej: oreja tipo elfo con arete de aro de plata',
        explanationText: {
          es: 'Fotografía detallada de los pliegues del hélix, lóbulo y cartílago auricular.',
          pt: 'Detalhes da hélice, lóbulo e cartilagem auricular.',
          en: 'Detailed macro view of ear helix, antihelix, tragus, and lobe.'
        }
      },
      {
        id: 'macro_cicatrices',
        cat: { es: '😀 Rostro y Expresividad', pt: '😀 Rosto e Expressividade', en: '😀 Face & Expressions' },
        label: { es: 'Macro Detalle: Cicatrices, Lunares y Marcas', pt: 'Macro Detalhe: Cicatrizes e Marcas', en: 'Macro Detail: Scars & Moles' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro close-up photograph focusing on unique facial scars, moles, birthmarks, and skin imperfections of the character from reference photo. Millimetric scar tissue texture, skin pores, natural skin tone variation, 8K raw photo, sharp focus --ar 1:1 --style raw --s 0 --no airbrushed skin, CGI',
        usageTip: { es: 'Documentación milimétrica de marcas de nacimiento, lunares o cicatrices.', pt: 'Documentação de marcas, sinais ou cicatrizes.', en: 'Millimetric capture of distinctive scars, moles, and skin marks.' },
        customLabel: { es: 'Descripción de Marcas / Cicatrices', pt: 'Descrição de Marcas / Cicatrizes', en: 'Marks / Scars Description' },
        customPlaceholder: 'ej: cicatriz vertical sobre la ceja derecha',
        explanationText: {
          es: 'Módulo de inspección en zoom para rasgos característicos únicos como cicatrices o lunares.',
          pt: 'Módulo para inspeção detalhada de traços únicos como cicatrizes.',
          en: 'High-detail inspection shot for unique identity markers and skin scars.'
        }
      },
      {
        id: 'cuerpo_frente',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: '4. Cuerpo Entero Frente (Sin Cabeza)', pt: '4. Corpo Inteiro Frente (Sem Cabeça)', en: '4. Full Body Front (Headless)' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: 'NO HEAD, NO NECK, headless full body front view of the person from reference photo. Clean horizontal crop right at the shirt collar seam line with zero neck skin or head visible. Neutral relaxed standing pose with both arms resting straight down at sides. Millimetric fabric weave texture, seams, buttons, trousers fold, and footwear matching reference photo. 8K raw photo, neutral studio background --ar 9:16 --style raw --s 0 --no head, neck, face, skin above collar',
        usageTip: { es: 'Evita deformaciones faciales aislando 100% el vestuario y calzado frontal.', pt: 'Evita deformações isolando o traje e calçados frontais.', en: 'Prevents facial distortion by isolating front garment textures and shoes.' },
        customLabel: { es: 'Descripción del Atuendo Frontal Completo', pt: 'Descrição do Traje Frontal Completo', en: 'Full Front Outfit Description' },
        customPlaceholder: 'ej: chaqueta de cuero negra, jeans oscuros y botas tácticas',
        explanationText: {
          es: 'Aísla el cuerpo entero en vista frontal eliminando la cabeza desde el cuello de la prenda para un drapeado perfecto.',
          pt: 'Isola o corpo inteiro em vista frontal removendo a cabeça para análise das roupas.',
          en: 'Isolates full body outfit in front orthographic view cropped cleanly at collar line.'
        }
      },
      {
        id: 'cuerpo_espalda',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: '5. Cuerpo Entero Espalda (Sin Mochila)', pt: '5. Corpo Inteiro Costas (Sem Mochila)', en: '5. Full Body Back (No Backpack)' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: 'Full body back view of the person from reference photo, standing straight seen directly from behind, with NO backpack. Tight vertical framing filling entire height. Back of exact same outfit, shirt fabric weave, trousers folds, and footwear matching reference image. 8K raw photograph, solid neutral 50% middle gray studio background (#808080), studio lighting, seamless clean background --ar 9:16 --style raw --s 0 --no backpack, bags',
        usageTip: { es: 'Muestra la caída limpia del vestuario trasero sin mochilas ni bolsas.', pt: 'Mostra o caimento traseiro das roupas sem mochilas.', en: 'Shows clean back outfit folds and footwear without accessories.' },
        customLabel: { es: 'Detalles o Emblemas en la Espalda', pt: 'Detalhes ou Emblemas nas Costas', en: 'Back Details or Emblems' },
        customPlaceholder: 'ej: emblema de calavera bordado en hilo blanco',
        explanationText: {
          es: 'Vista posterior completa de cuerpo entero tomada exactamente a 180 grados desde atrás.',
          pt: 'Vista posterior completa de corpo inteiro a 180 graus.',
          en: 'Full rear orthographic body view at 180 degrees.'
        }
      },
      {
        id: 'cuerpo_perfil',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: '6. Cuerpo Entero de Perfil (Lado)', pt: '6. Corpo Inteiro de Perfil (Lado)', en: '6. Full Body Side Profile' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '90-degree full body side profile view of the person from the reference photo. Neutral relaxed standing pose looking directly to the side, both arms resting straight down at the sides. Tight vertical framing filling the entire height of the frame from the top of the head down to the boots at the bottom edge. Showing complete side view of the exact same outfit, shirt, pants, and footwear strictly matching the reference image. Master ultra-high resolution 8K photograph, subsurface scattering, millimetric skin pores on visible skin, sharp focus, raw unedited photograph, solid neutral 50% middle gray studio background (#808080), studio lighting, seamless clean background --ar 9:16 --style raw --s 0 --no plastic, smooth skin, airbrushed, wax, CGI, 3D render, glossy',
        usageTip: { es: 'Enfoque en silueta lateral y caída de la vestimenta.', pt: 'Foco na silhueta lateral e caimento da roupa.', en: 'Full side profile silhouette and garment drape.' },
        customLabel: { es: 'Detalles de Ropa / Perfil Lateral', pt: 'Detalhes da Roupa Lateral', en: 'Side Profile Garment Details' },
        customPlaceholder: 'ej: pliegues de chaqueta y costuras laterales',
        explanationText: {
          es: 'Muestra la silueta de perfil entero a 90 grados de pie.',
          pt: 'Exibe a silhueta lateral completa a 90 graus em pé.',
          en: 'Displays complete side body silhouette from head to shoes.'
        }
      },
      {
        id: 'pose_neutra_t',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: 'Pose Neutra en T (T-Pose / A-Pose)', pt: 'Pose Neutra em T (T-Pose / A-Pose)', en: 'Neutral T-Pose / A-Pose' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: 'Full body front view standing in neutral A-pose with arms extended outwards at 45 degrees, hands open showing fingers, feet flat on ground. Exact 1:1 physical clone of character from reference photo. Master 8K full height standing raw photograph, neutral studio lighting --ar 9:16 --style raw --s 0 --no bent limbs, distorted hands',
        usageTip: { es: 'Pose técnica rígida necesaria para modelado 3D, escultura y rigging.', pt: 'Pose técnica essencial para modelagem 3D e rigging.', en: 'Technical pose required for 3D modeling, sculpting, and rigging.' },
        customLabel: { es: 'Pose Técnica Deseada', pt: 'Pose Técnica Desejada', en: 'Desired Technical Pose' },
        customPlaceholder: 'ej: A-Pose (45°) o T-Pose (90°)',
        explanationText: {
          es: 'Pose ortográfica técnica con extremidades separadas en ángulo neutro.',
          pt: 'Pose ortográfica com membros afastados em ângulo neutro.',
          en: 'Orthographic technical pose with limbs outstretched for 3D character rigging.'
        }
      },
      {
        id: 'lectura_silueta',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: 'Lectura de Silueta Vectorial', pt: 'Leitura de Silhueta Vetorial', en: 'Vector Silhouette Check' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: 'Solid black vector silhouette cutout of the character in signature standing pose, high contrast pure black shape isolated on clean light gray background, crisp outer edge contour, graphic design presentation --ar 9:16 --style raw --s 0 --no interior details, colors',
        usageTip: { es: 'Permite evaluar si la forma exterior es icónica y reconocible.', pt: 'Permite avaliar se a silhueta externa é marcante.', en: 'Tests readability and iconicity of the outer body silhouette.' },
        customLabel: { es: 'Color de Fondo de la Silueta', pt: 'Cor de Fundo da Silhueta', en: 'Silhouette Background Color' },
        customPlaceholder: 'ej: blanco puro / gris claro',
        explanationText: {
          es: 'Representación vectorial recortada en negro sólido sobre fondo neutro.',
          pt: 'Recorte em preto sólido para testar a legibilidade da forma.',
          en: 'Solid black cutout silhouette testing shape readability and gesture clarity.'
        }
      },
      {
        id: 'guia_proporciones',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: 'Guía de Proporciones en Cabezas (1:8)', pt: 'Guia de Proporções em Cabeças (1:8)', en: '8-Heads Proportion Guide' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Technical character proportions reference sheet displaying full body front pose next to an 8-heads height grid diagram. Exact 1:1 physical clone of character from reference photo, demonstrating anatomical scale and body ratio. Clean studio photography --ar 16:9 --style raw --s 0 --no distorted grid, warped anatomy',
        usageTip: { es: 'Documenta la altura oficial del personaje medida en número de cabezas.', pt: 'Documenta a altura oficial medida em cabeças.', en: 'Establishes anatomical height proportion using heads as units.' },
        customLabel: { es: 'Proporción en Número de Cabezas', pt: 'Proporção em Cabeças', en: 'Proportions in Heads' },
        customPlaceholder: 'ej: 8 cabezas (heroico), 7 cabezas (realista)',
        explanationText: {
          es: 'Esquema métrico que subdivide la altura total del personaje usando como unidad el tamaño de su cabeza.',
          pt: 'Diagrama métrico que subdivide a altura usando a cabeça como medida.',
          en: 'Metric anatomical grid scaling total character height in head units.'
        }
      },
      {
        id: 'macro_manos_unas',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: 'Detalle Anatómico: Manos y Uñas', pt: 'Detalhe Anatômico: Mãos e Unhas', en: 'Anatomy Detail: Hands & Nails' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Anatomy detail photograph focusing on character hands, palm creases, knuckles, fingernails, skin pores, and hand posture matching reference photo. Ultra-high resolution 8K raw photo, millimetric skin texture, sharp focus --ar 16:9 --style raw --s 0 --no extra fingers, deformed hands',
        usageTip: { es: 'Referencia de manos en palma, dorso, uñas y textura de nudillos.', pt: 'Referência de mãos: palma, dorso, unhas e juntas.', en: 'Hand anatomy study showing palms, dorsal view, knuckles, and nails.' },
        customLabel: { es: 'Estado de Manos y Nudillos / Guantes', pt: 'Estado das Mãos e Nudillos', en: 'Hands / Gloves Condition' },
        customPlaceholder: 'ej: nudillos desgastados por combate, guantes sin dedos',
        explanationText: {
          es: 'Estudio de detalle centrado en las manos, arrugas palmares, nudillos y uñas.',
          pt: 'Estudo focado nas palmas, articulações e unhas das mãos.',
          en: 'Close-up anatomical study of palms, finger joints, and nail beds.'
        }
      },
      {
        id: 'macro_pies_calzado',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: 'Detalle Anatómico: Pies, Suelas y Calzado', pt: 'Detalhe Anatômico: Pés e Calçados', en: 'Anatomy Detail: Feet & Boots' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Detail reference photograph focusing on the character footwear, boots texture, leather/fabric seams, sole tread pattern, and feet alignment matching reference photo. High resolution 8K raw photography, sharp studio light --ar 16:9 --style raw --s 0 --no distorted shoes',
        usageTip: { es: 'Detalle de costuras de botas, grabado de suela y postura de calzado.', pt: 'Detalhes de costura das botas e sola.', en: 'Boot stitchings, leather texture, sole tread, and foot stance.' },
        customLabel: { es: 'Tipo de Calzado y Grabado de Suela', pt: 'Tipo de Calçado e Solado', en: 'Footwear & Sole Tread Type' },
        customPlaceholder: 'ej: botas militares de cuero con suela antiderrapante',
        explanationText: {
          es: 'Enfoque técnico en las botas, zapatos o pies descalzos del personaje.',
          pt: 'Foco técnico nos calçados ou pés descalços.',
          en: 'Technical focus on boots, shoe soles, seams, and foot alignment.'
        }
      },
      {
        id: 'poses_accion',
        cat: { es: '🧍 Cuerpo, Proporciones y Estructura', pt: '🧍 Corpo, Proporções e Estrutura', en: '🧍 Body, Proportions & Structure' },
        label: { es: 'Hoja de Poses Dinámicas y de Acción', pt: 'Folha de Poses Dinâmicas e Ação', en: 'Action & Dynamic Poses Sheet' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Character action pose sheet showing 3 dynamic, athletic postures typical of the character role. Exact 1:1 physical clone of person from reference photo, maintaining face identity and outfit consistency in motion. 8K raw photo --ar 16:9 --style raw --s 0 --no distorted face, broken limbs',
        usageTip: { es: 'Muestra el lenguaje corporal y comportamiento en movimiento.', pt: 'Exibe linguagem corporal e movimento.', en: 'Showcases body language and signature dynamic movements.' },
        customLabel: { es: 'Describir 3 Acciones Dinámicas', pt: 'Descrever 3 Ações Dinâmicas', en: 'Describe 3 Dynamic Actions' },
        customPlaceholder: 'ej: corriendo a máxima velocidad, esquivando disparo, salto en el aire',
        explanationText: {
          es: 'Presenta al personaje en 3 posturas atléticas y de acción activa.',
          pt: 'Apresenta o personagem em 3 posturas atléticas em movimento.',
          en: 'Captures 3 athletic postures showcasing center of gravity and motion dynamics.'
        }
      },

      {
        id: 'ficha_props',
        cat: { es: '👗 Vestuario y Props', pt: '👗 Vestuário e Props', en: '👗 Wardrobe & Props' },
        label: { es: 'Ficha de Accesorios y Armas (Props)', pt: 'Ficha de Acessórios e Armas (Props)', en: 'Props & Weapons Reference' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Isolated object reference sheet displaying character individual equipment, weapons, bags, belts, and tools. Clean orthographic views with realistic material textures (leather grain, brushed metal, fabric weave), matching reference photo, neutral studio background --ar 16:9 --style raw --s 0 --no character body',
        usageTip: { es: 'Aísla las herramientas, objetos y armas con sus materiales exactos.', pt: 'Isola armas, bolsas e ferramentas com materiais exatos.', en: 'Isolates inventory tools, belts, and weapons with realistic material shaders.' },
        customLabel: { es: 'Lista de Objetos / Armas Aisladas', pt: 'Lista de Objetos / Armas', en: 'List of Isolated Objects / Weapons' },
        customPlaceholder: 'ej: katana de acero, reloj táctico, radio portátil',
        explanationText: {
          es: 'Desglose ortográfico de todos los elementos portátiles, armas, mochilas y herramientas.',
          pt: 'Desdobramento ortográfico de itens portáteis, armas e equipamentos.',
          en: 'Orthographic isolated sheet of all wearable gear, firearms, and tools.'
        }
      },
      {
        id: 'variacion_outfits',
        cat: { es: '👗 Vestuario y Props', pt: '👗 Vestuário e Props', en: '👗 Wardrobe & Props' },
        label: { es: 'Variaciones de Atuendo y Ropa', pt: 'Variações de Roupas / Trajes', en: 'Outfit & Costume Variations' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Character outfit variation sheet showing the same person in 3 distinct clothing configurations (casual, tactical/armor, formal). Exact 1:1 identical facial features and body build across all three full-body views. 8K raw studio photography --ar 16:9 --style raw --s 0 --no inconsistent face',
        usageTip: { es: 'Muestra al personaje vistiendo diferentes prendas sin alterar el rostro.', pt: 'Exibe diferentes roupas mantendo o mesmo rosto.', en: 'Displays alternative outfits while preserving identical 1:1 facial identity.' },
        customLabel: { es: '3 Tipos de Ropa / Atuendos', pt: '3 Tipos de Trajes', en: '3 Outfit Types' },
        customPlaceholder: 'ej: casual urbano, traje de combate táctico, traje de gala',
        explanationText: {
          es: 'Exhibe al mismo personaje usando distintas mudas de ropa o trajes.',
          pt: 'Exibe o mesmo personagem em diferentes mudas de roupa.',
          en: 'Presents character in 3 distinct functional costumes (e.g. casual, tactical, formal).'
        }
      },
      {
        id: 'piezas_desmontables',
        cat: { es: '👗 Vestuario y Props', pt: '👗 Vestuário e Props', en: '👗 Wardrobe & Props' },
        label: { es: 'Piezas Desmontables (Capas, Máscaras, Cascos)', pt: 'Peças Desmontáveis (Capas, Máscaras)', en: 'Removable Layers (Masks, Capes)' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Character reference sheet showing removable outfit pieces (cape, mask, helmet, jacket) isolated on side, and character wearing vs not wearing them. Exact identity match to reference photo, raw photography --ar 16:9 --style raw --s 0',
        usageTip: { es: 'Aísla elementos removibles mostrando qué prendas hay debajo.', pt: 'Isola peças removíveis mostrando o traje por baixo.', en: 'Isolates detachable gear showing undergarments beneath.' },
        customLabel: { es: 'Pieza Desmontable Específica', pt: 'Peça Removível Específica', en: 'Specific Removable Piece' },
        customPlaceholder: 'ej: máscara de gas táctica y capucha removible',
        explanationText: {
          es: 'Demuestra cómo luce el personaje con y sin prendas superpuestas.',
          pt: 'Mostra como o personagem se veste com e sem acessórios externos.',
          en: 'Details character appearance with and without overlay gear (helmets, capes, jackets).'
        }
      },
      {
        id: 'modo_sujecion',
        cat: { es: '👗 Vestuario y Props', pt: '👗 Vestuário e Props', en: '👗 Wardrobe & Props' },
        label: { es: 'Modo de Sujeción (Hebillas, Correas, Broches)', pt: 'Fixações (Fivelas, Correias, Fechos)', en: 'Fasteners & Buckles Detail' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Macro close-up detail shot focusing on clothing fasteners, buckles, straps, zippers, buttons, and attachment mechanisms of character outfit from reference photo. Millimetric material texture, raw photo --ar 1:1 --style raw --s 0',
        usageTip: { es: 'Detalle de enganches, correas, hebillas y broches de vestuario.', pt: 'Detalhes de correias, fivelas e fechos.', en: 'Close-up mechanics of buckles, zippers, and holster straps.' },
        customLabel: { es: 'Mecanismo de Cierre / Hebillas', pt: 'Mecanismo de Fecho', en: 'Fastener Mechanism' },
        customPlaceholder: 'ej: hebillas de liberación rápida de polímero negro',
        explanationText: {
          es: 'Un macro enfocado en los sistemas de cierre, correaje y broches.',
          pt: 'Macro focado em fechos, zíperes e cintas de fixação.',
          en: 'Macro focus on harness attachment points, clips, and tactical buckles.'
        }
      },

      {
        id: 'paleta_color',
        cat: { es: '🎨 Color, Materiales y Producción', pt: '🎨 Cor, Materiais e Produção', en: '🎨 Color, Materials & Production' },
        label: { es: 'Paleta de Muestras de Color (Swatches)', pt: 'Paleta de Cores (Swatches)', en: 'Color Swatches Palette' },
        aspectRatioText: '4:3',
        aspectRatioNum: 4/3,
        promptTemplate: 'Clean graphic design color palette reference sheet with circular swatches representing primary color codes for skin tone, eye iris, hair, shirt, pants, and footwear of character from reference photo. Minimalist presentation --ar 4:3 --style raw --s 0',
        usageTip: { es: 'Códigos cromáticos puros para piel, ojos, cabello y ropa.', pt: 'Códigos cromáticos puros para pele, olhos e roupas.', en: 'Pure chromatic swatches for skin, iris, hair, and textiles.' },
        customLabel: { es: 'Colores Clave (Piel, Cabello, Ropa)', pt: 'Cores Principais', en: 'Key Colors (Skin, Hair, Clothes)' },
        customPlaceholder: 'ej: piel clara, cabello negro azabache, ropa verde oliva',
        explanationText: {
          es: 'Ficha gráfica minimalista con muestras circulares de color (Swatches) para estandarización cromática.',
          pt: 'Cartela gráfica com amostras circulares de cor para padronização.',
          en: 'Minimalist graphic palette with circular swatches defining standardized HEX color codes.'
        }
      },
      {
        id: 'guia_materiales',
        cat: { es: '🎨 Color, Materiales y Producción', pt: '🎨 Cor, Materiais e Produção', en: '🎨 Color, Materials & Production' },
        label: { es: 'Guía de Materiales y Texturas', pt: 'Guia de Materiais e Texturas', en: 'Materials & Shaders Guide' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Close-up material reference sheet highlighting textures of leather grain, metal shine, cloth weave, and skin surface from character reference photo. High detail studio lighting --ar 16:9 --style raw --s 0',
        usageTip: { es: 'Especifica la respuesta lumínica y tacto de metal, cuero y tela.', pt: 'Especifica reflexos e texturas de metal, couro e tecido.', en: 'Specifies roughness, specularity, and texture of fabrics and metals.' },
        customLabel: { es: 'Materiales y Texturas Predominantes', pt: 'Materiais Predominantes', en: 'Predominant Materials' },
        customPlaceholder: 'ej: cuero envejecido, fibra de carbono, algodón pesado',
        explanationText: {
          es: 'Muestra planos cerrados sobre las materias primas del personaje.',
          pt: 'Exibe planos aproximados das matérias-primas e brilhos.',
          en: 'Highlights texture maps for rough leather, metals, and cloth weaves.'
        }
      },
      {
        id: 'escala_comparativa',
        cat: { es: '🎨 Color, Materiales y Producción', pt: '🎨 Cor, Materiais e Produção', en: '🎨 Color, Materials & Production' },
        label: { es: 'Escala Comparativa de Altura', pt: 'Escala Comparativa de Altura', en: 'Height Comparison Scale' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Height scale comparison reference sheet showing character standing next to a standard metric height measuring chart (in meters and feet). Straight posture, clear grid lines on wall background --ar 16:9 --style raw --s 0',
        usageTip: { es: 'Ajusta la estatura real del personaje respecto al mundo.', pt: 'Ajusta a altura real do personagem.', en: 'Standardizes exact character stature against a metric/imperial grid.' },
        customLabel: { es: 'Estatura Exacta del Personaje', pt: 'Altura Exata do Personagem', en: 'Exact Character Height' },
        customPlaceholder: 'ej: 185 cm / 6\'1"',
        explanationText: {
          es: 'Ubica al personaje junto a una tabla graduada en metros y pies.',
          pt: 'Posiciona o personagem junto a uma régua em metros e pés.',
          en: 'Positions character alongside a calibrated metric and imperial height chart.'
        }
      }
    ];

    // CATÁLOGO UNIVERSAL 2D DEDICADO Y COMPLETO (22 MÓDULOS DE SUITE 2D PROFESIONAL)
    // CATÁLOGO UNIVERSAL 2D OPTIMIZADO POR NOTEBOOKLM + 3 BONUS (25 MÓDULOS MULTILINGÜES)
    const CATALOGO_MODULOS_2D = [
{
        id: 'busto_frente_2d',
        cat: { es: '📐 Turnarounds y Vistas 2D', pt: '📐 Turnarounds e Vistas 2D', en: '📐 2D Turnarounds & Views' },
        label: { es: '1. Busto de Frente 2D (Ancla Principal)', pt: '1. Busto de Frente 2D (Âncora Principal)', en: '1. 2D Front Bust (Main Anchor)' },
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Front view bust portrait looking directly forward, centered framing from head to waist, identical character clone, exact 1:1 replication of the reference artwork\'s visual art style, line art weight, coloring method, shading, and texture, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 3:4 --style raw --no text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, realistic photo',
        usageTip: { es: 'Vista ancla maestra 2D universal. Clona 1:1 estilo, trazo y técnica del original.', pt: 'Vista âncora 2D mestra universal. Clona 1:1 estilo e traço original.', en: 'Universal 2D master anchor view. 1:1 clones original style and technique.' },
        customLabel: { es: 'URL de Referencia 2D (--cref / --sref)', pt: 'URL de Referência 2D (--cref / --sref)', en: '2D Reference URL (--cref / --sref)' },
        customPlaceholder: 'https://ejemplo.com/mifoto2d.jpg',
        explanationText: {
          es: 'Vista frontal maestra universal sin textos ni artefactos añadidos, respetando al 100% el estilo base.',
          pt: 'Vista frontal mestra universal sem textos ou artefatos adicionais.',
          en: 'Universal master front portrait strictly preserving original reference art style.'
        }
      },
{
        id: 'perfil_derecho_2d',
        cat: { es: '📐 Turnarounds y Vistas 2D', pt: '📐 Turnarounds e Vistas 2D', en: '📐 2D Turnarounds & Views' },
        label: { es: '2. Perfil Derecho 90° 2D', pt: '2. Perfil Direito 90° 2D', en: '2. 2D Right Profile (90°)' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Strict 90-degree right profile portrait, facing directly right, centered bust framing, single eye visible, precise side contour of nose, lips, jawline and ear, identical character clone, exact 1:1 replication of the reference artwork\'s visual art style, line art weight, coloring method, shading, and texture, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 1:1 --style raw --no text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3/4 view, front view, two eyes visible, turned head, 3d, render, realistic photo',
        usageTip: { es: 'Perfil estricto a 90° hacia la derecha. Bloquea giros a 3/4 o vista frontal.', pt: 'Perfil estrito a 90° para a direita sem desvios.', en: 'Strict 90-degree right profile preventing 3/4 or front drift.' },
        customLabel: { es: 'Detalles de Mandíbula / Nariz (Perfil Derecho)', pt: 'Detalhes de Queixo / Nariz (Perfil Direito)', en: 'Jawline / Nose Details (Right Profile)' },
        customPlaceholder: 'ej: puente nasal recto, barbilla definida',
        explanationText: {
          es: 'Proyección lateral ortográfica a 90 grados a la derecha, preservando al 100% el estilo original.',
          pt: 'Projeção lateral ortográfica a 90 graus à direita, preservando o estilo original.',
          en: 'Strict 90-degree right profile orthographic view, strictly preserving original art style.'
        }
      },
{
        id: 'perfil_izquierdo_2d',
        cat: { es: '📐 Turnarounds y Vistas 2D', pt: '📐 Turnarounds e Vistas 2D', en: '📐 2D Turnarounds & Views' },
        label: { es: '3. Perfil Izquierdo 90° 2D', pt: '3. Perfil Esquerdo 90° 2D', en: '3. 2D Left Profile (90°)' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Strict 90-degree left profile portrait, facing directly left, centered bust framing, single eye visible, precise side contour of nose, lips, jawline, ear and hair anatomy, identical character clone, exact 1:1 replication of the reference artwork\'s visual art style, line art weight, coloring method, shading, and texture, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 1:1 --style raw --no text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3/4 view, front view, two eyes visible, turned head, 3d, render, realistic photo',
        usageTip: { es: 'Perfil estricto a 90° hacia la izquierda. Bloquea giros a 3/4 o vista frontal.', pt: 'Perfil estrito a 90° para a esquerda sem desvios.', en: 'Strict 90-degree left profile preventing 3/4 or front drift.' },
        customLabel: { es: 'Detalles de Cabello / Oreja (Perfil Izquierdo)', pt: 'Detalhes de Cabelo / Orelha (Perfil Esquerdo)', en: 'Hair / Ear Details (Left Profile)' },
        customPlaceholder: 'ej: pendiente en oreja izquierda, flequillo al lado',
        explanationText: {
          es: 'Proyección lateral ortográfica a 90 grados a la izquierda, preservando al 100% el estilo original.',
          pt: 'Projeção lateral ortográfica a 90 graus à esquerda, preservando o estilo original.',
          en: 'Strict 90-degree left profile orthographic view, strictly preserving original art style.'
        }
      },
{
        id: 'vista_tres_cuartos_d_2d',
        cat: { es: '📐 Turnarounds y Vistas 2D', pt: '📐 Turnarounds e Vistas 2D', en: '📐 2D Turnarounds & Views' },
        label: { es: '4. Vista 3/4 Ángulo Derecho 2D', pt: '4. Vista 3/4 Ângulo Direito 2D', en: '4. 2D 3/4 View Right Angle' },
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Orthographic 2D technical character model sheet view, three-quarter angle turned 45 degrees towards the right, neutral relaxed standing pose with arms straight down at sides, head and eyes looking straight ahead in the direction of the 45-degree turn, centered bust framing from head to waist, identical character clone, exact 1:1 replication of the reference artwork\'s visual art style, line art weight, coloring method, shading, and texture, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 3:4 --style raw --no looking at camera, eye contact, looking back, looking forward, hand on hip, dynamic pose, bent arms, action pose, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 90-degree profile, full front view, 3d, render, realistic photo',
        usageTip: { es: 'Ángulo 3/4 técnico a 45° a la derecha. Mirada y cuerpo alineados sin posar.', pt: 'Ângulo 3/4 técnico a 45° à direita com postura neutra.', en: 'Technical 45-degree right 3/4 view with neutral gaze and posture.' },
        customLabel: { es: 'Rasgos Distintivos en 3/4 Derecho', pt: 'Traços Distintivos em 3/4 Direito', en: 'Distinctive 3/4 Right Features' },
        customPlaceholder: 'ej: pómulos definidos, rasgos idénticos',
        explanationText: {
          es: 'Proyección 3/4 a 45° derecha estricta, con cuerpo y mirada alineados en pose neutra.',
          pt: 'Projeção 3/4 a 45° direita técnica em postura neutra sem contato visual.',
          en: 'Strict orthographic 45-degree right view in neutral pose without camera eye contact.'
        }
      },
{
        id: 'vista_tres_cuartos_i_2d',
        cat: { es: '📐 Turnarounds y Vistas 2D', pt: '📐 Turnarounds e Vistas 2D', en: '📐 2D Turnarounds & Views' },
        label: { es: '5. Vista 3/4 Ángulo Izquierdo 2D', pt: '5. Vista 3/4 Ângulo Esquerdo 2D', en: '5. 2D 3/4 View Left Angle' },
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Orthographic 2D technical character model sheet view, three-quarter angle turned 45 degrees towards the left, neutral relaxed standing pose with arms straight down at sides, head and eyes looking straight ahead in the direction of the 45-degree turn, centered bust framing from head to waist, identical character clone, exact 1:1 replication of the reference artwork\'s visual art style, line art weight, coloring method, shading, and texture, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 3:4 --style raw --no looking at camera, eye contact, looking back, looking forward, hand on hip, dynamic pose, bent arms, action pose, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 90-degree profile, full front view, 3d, render, realistic photo',
        usageTip: { es: 'Ángulo 3/4 técnico a 45° a la izquierda. Mirada y cuerpo alineados sin posar.', pt: 'Ângulo 3/4 técnico a 45° à esquerda com postura neutra.', en: 'Technical 45-degree left 3/4 view with neutral gaze and posture.' },
        customLabel: { es: 'Rasgos Distintivos en 3/4 Izquierdo', pt: 'Traços Distintivos em 3/4 Esquerdo', en: 'Distinctive 3/4 Left Features' },
        customPlaceholder: 'ej: pómulos definidos, rasgos idénticos',
        explanationText: {
          es: 'Proyección 3/4 a 45° izquierda estricta, con cuerpo y mirada alineados en pose neutra.',
          pt: 'Projeção 3/4 a 45° esquerda técnica em postura neutra sem contato visual.',
          en: 'Strict orthographic 45-degree left view in neutral pose without camera eye contact.'
        }
      },
{
        id: 'vista_espalda_busto_2d',
        cat: { es: '📐 Turnarounds y Vistas 2D', pt: '📐 Turnarounds e Vistas 2D', en: '📐 2D Turnarounds & Views' },
        label: { es: '6. Vista Posterior / Espalda Busto 2D', pt: '6. Vista Posterior / Costas Busto 2D', en: '6. 2D Back Bust View' },
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Orthographic 2D technical character model sheet turnaround, strict 180-degree rear view bust portrait seen directly from behind, centered framing from top of head to mid-chest, exact rear continuation of the reference subject, preserving identical hair length, natural hair flow drape, headwear, and shoulders without altering hairstyle or adding updos, identical character clone, exact 1:1 replication of the reference artwork\'s visual art style, line art weight, coloring method, shading, texture, and dirt marks, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 3:4 --style raw --no face, eyes, nose, mouth, front view, side profile, 3/4 view, turning head, looking over shoulder, looking back, ponytail, updo, tied hair, parted hair, altered hairstyle, waist, stomach, legs, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Vista trasera de busto a 180°. Preserva el flujo natural de cabello y hombros sin inventar peinados.', pt: 'Vista traseira de busto a 180° preservando o caimento natural do cabelo.', en: '180° rear bust view preserving natural hair drape without altering hairstyle.' },
        customLabel: { es: 'Detalles Posteriores 2D', pt: 'Detalhes Posteriores 2D', en: 'Rear Details 2D' },
        customPlaceholder: 'ej: flujo natural de cabello/pelaje, casco, nuca',
        explanationText: {
          es: 'Proyección trasera ortográfica de busto que mantiene la caída natural del peinado y diseño dorsal.',
          pt: 'Projeção traseira ortográfica preservando o design dorsal original.',
          en: 'Orthographic rear bust view preserving original dorsal design and natural hair drape.'
        }
      },
{
        id: 'settei_turnaround_lineart',
        cat: { es: '📐 Turnarounds y Vistas 2D', pt: '📐 Turnarounds e Vistas 2D', en: '📐 2D Turnarounds & Views' },
        label: { es: '7. Giro Completo de Cabeza 2D (Head Turnaround)', pt: '7. Giro Completo de Cabeça 2D (Head Turnaround)', en: '7. 2D Head Turnaround' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Panoramic 2D technical character head turnaround sequence, displaying 4 distinct rotation angles horizontally aligned side by side: front view, three-quarter view, 90-degree profile, and rear back view, head and upper neck close-up framing across all angles, identical character clone, exact 1:1 replication of the reference artwork\'s visual art style, line art weight, coloring method, shading, texture, and marks across every angle, solid neutral middle gray background (#808080)--cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 16:9 --style raw --no full body, torso, chest, legs, different characters, inconsistent features, guidelines, grid lines, measurement marks, frame lines, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Secuencia panorámica 16:9 de 4 ángulos de cabeza. Sin textos, cajas de división ni grillas.', pt: 'Sequência panorâmica 16:9 de 4 ângulos de cabeça sem textos ou divisórias.', en: '16:9 panoramic 4-angle head sequence without text, grid lines, or frame boxes.' },
        customLabel: { es: 'Ángulos en Secuencia (Opcional)', pt: 'Ângulos na Sequência (Opcional)', en: 'Sequence Angles (Optional)' },
        customPlaceholder: 'ej: frente, 3/4, perfil 90°, espalda',
        explanationText: {
          es: 'Turnaround panorámico de 4 ángulos de cabeza alineados horizontalmente, preservando estilo y consistencia 1:1.',
          pt: 'Turnaround panorâmico de 4 ângulos de cabeça alinhados horizontalmente mantendo o estilo 1:1.',
          en: 'Panoramic 4-angle head turnaround horizontally aligned, strictly preserving 1:1 style and features.'
        }
      },
{
        id: 'settei_expresiones',
        cat: { es: '😀 Rostro, Expresividad y Animación 2D', pt: '😀 Rosto, Expressividade e Animação 2D', en: '😀 2D Face & Animation' },
        label: { es: '8. Hoja de Expresiones Faciales 2D (6 Emociones)', pt: '8. Folha de Expressões Faciais 2D (6 Emoções)', en: '8. 2D Facial Expressions Sheet (6 Emotions)' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Technical 2D character expression sheet, balanced 2x3 grid layout displaying 6 distinct emotion portraits arranged evenly in 2 rows and 3 columns (neutral, joyful smile, intense anger, deep sadness, shock surprise, confident smirk), filling the 16:9 frame with balanced vertical and horizontal spacing, centered head and shoulders bust framing for each portrait, identical character clone, exact 1:1 replication of the reference artwork\'s visual art style, line art weight, coloring method, shading, texture, and marks across all 6 faces, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 0 --ar 16:9 --style raw --no single horizontal row, empty bottom half, blank lower space, off-center composition, text, font, letters, words, watermark, labels, annotations, emotion names, subtitles, Japanese text, color palette, color swatches, sample boxes, settei elements, frames, boxes, borders, dividing lines, grid lines, full body, legs, 3d, render, photo',
        usageTip: { es: 'Cuadrícula 2x3 de 6 expresiones que llena armónicamente el lienzo 16:9 sin espacios vacíos abajo.', pt: 'Grade 2x3 com 6 expressões preenchendo o formato 16:9 harmonicamente.', en: '2x3 grid of 6 expressions harmoniously filling the 16:9 frame without empty space.' },
        customLabel: { es: 'Lista de 6 Emociones (Grid 2x3)', pt: 'Lista de 6 Emoções (Grid 2x3)', en: 'List of 6 Emotions (2x3 Grid)' },
        customPlaceholder: 'ej: neutro, risa, ira, llanto, sorpresa, desdén',
        explanationText: {
          es: 'Panel de 6 expresiones distribuidas en cuadrícula 2x3 (2 filas de 3 caras) optimizado para relación de aspecto 16:9.',
          pt: 'Painel de 6 expressões distribuídas em grade 2x3 para formato 16:9.',
          en: '6-expression panel in a 2x3 grid layout optimized for 16:9 aspect ratio.'
        }
      },
{
        id: 'settei_bocas_visemas',
        cat: { es: '😀 Rostro, Expresividad y Animación 2D', pt: '😀 Rosto, Expressividade e Animação 2D', en: '😀 2D Face & Animation' },
        label: { es: '9. Sincronización Labial y Bocas 2D (Visemas A-I-U-E-O)', pt: '9. Sincronização Labial e Bocas 2D (Visemas A-I-U-E-O)', en: '9. 2D Lip-Sync & Mouth Guide (A-I-U-E-O Visemes)' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: '[URL_FOTO] Technical 2D character mouth expression study, seamless 2x3 grid layout displaying 6 distinct mouth and phoneme configurations arranged evenly in 2 rows and 3 columns on a solid neutral middle gray background (#808080) (closed resting mouth, open talking, slight smile speaking, wide vocalization, phoneme vowel shapes, clenched mouth), close-up lower facial framing from nose tip to chin, exact 1:1 identical reproduction of the reference artwork\'s visual art style, exact line art weight, identical inking technique, cross-hatching density, dirt speckles, skin texture, and lip color from reference, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 0 --ar 16:9 --style raw --no halftone dots, Ben-Day dots, screentone, raster dots, pop art dots, vintage comic print texture, white dividing lines, split screen lines, grid lines, border frames, boxes, letters, phoneme labels, alphabet text, subtitles, words, typography, annotations, phonetic marks, color palette, color swatches, sample boxes, settei elements, full face, eyes, 3d, photo',
        usageTip: { es: 'Guía de bocas 2x3 en 16:9. Bloquea tramas de puntos pop-art y líneas divisorias.', pt: 'Guia de bocas 2x3 em 16:9 bloqueando pontos pop-art e molduras.', en: '2x3 mouth chart in 16:9 blocking pop-art halftone dots and dividing lines.' },
        customLabel: { es: 'Configuración de Fonemas / Vocales 2D', pt: 'Configuração de Fonemas / Vogais 2D', en: 'Phonemes / Vowels Configuration' },
        customPlaceholder: 'ej: A, E, I, O, U, boca cerrada, sonrisa abierta',
        explanationText: {
          es: 'Ficha técnica de 6 bocas en cuadrícula 2x3 respetando la textura, entintado y color exactos del original.',
          pt: 'Ficha técnica de 6 bocas em grade 2x3 mantendo a textura e traço originais.',
          en: 'Technical 2x3 mouth chart strictly preserving original texture, inking, and color.'
        }
      },
{
        id: 'macro_ojos_2d',
        cat: { es: '😀 Rostro, Expresividad y Animación 2D', pt: '😀 Rosto, Expressividade e Animação 2D', en: '😀 2D Face & Animation' },
        label: { es: '10. Macro Detalle Ojos 2D (Ojos, Cejas y Mirada)', pt: '10. Macro Detalhe Olhos 2D (Olhos, Sobrancelhas e Olhar)', en: '10. 2D Eye Detail (Eyes, Eyebrows & Gaze)' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: '[URL_FOTO] Technical 2D character eye detail study, extreme close-up macro framing of both eyes looking directly forward, centered eye region with eyebrows, eyelashes, and upper nose bridge matching reference accessories or glasses if present, exact 1:1 identical reproduction of the reference artwork\'s visual art style, line art weight, inking technique, iris design, highlights, cross-hatching, dirt marks, and skin texture, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 1:1 --style raw --no single eye, cyclops, half face, mouth, lips, chin, halftone dots, Ben-Day dots, screentone, raster dots, pop art texture, realistic human iris texture, macro eyeball 3d render, photorealistic skin pores, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, photo',
        usageTip: { es: 'Macro de ambos ojos mirando al frente (1:1). Preserva accesorios, trazo original y bloquea texturas pop-art.', pt: 'Macro de ambos os olhos (1:1) preservando traço original e óculos/acessórios.', en: 'Both eyes macro detail (1:1) preserving original style, gaze, and accessories.' },
        customLabel: { es: 'Detalles Específicos de Mirada / Ojos 2D', pt: 'Detalhes Específicos dos Olhos 2D', en: 'Specific Eye Details 2D' },
        customPlaceholder: 'ej: iris azul con brillo blanco, gafas con montura circular',
        explanationText: {
          es: 'Detalle de ambos ojos y cejas en ratio 1:1 que reproduce fielmente el estilo, entintado y accesorios de la referencia.',
          pt: 'Detalhe de ambos os olhos em 1:1 reproduzindo fielmente o estilo e acessórios originais.',
          en: '1:1 eye detail study accurately reproducing original inking, accessories, and eye style.'
        }
      },
// ================= CÓDIGO NUEVO PARA CUERPO FRENTE 2D =================
{
        id: 'cuerpo_frente_2d',
        cat: { es: '🧍 Cuerpo, Estructura y Proporciones 2D', pt: '🧍 Corpo, Estrutura e Proporções 2D', en: '🧍 2D Body & Proportions' },
        label: { es: '11. Cuerpo Entero Frente 2D', pt: '11. Corpo Inteiro Frente 2D', en: '11. 2D Full Body Front' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '[URL_FOTO] Single solo character, full body front view portrait, facing directly forward looking at camera, neutral standing pose with arms at sides, centered vertical framing from head to toe, exact 1:1 character clone preserving original visual art style, line art weight, colors, and design, isolated on a solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 9:16 --style raw --no multiple views, multiple characters, two characters, ghost character, turnaround, character sheet, model sheet, split screen, grid, collage, front and back, profile, back view, text, words, labels, font, watermark, frame, border, shadows, 3d render, photo',
        usageTip: { es: 'Un solo personaje aislado de frente de cuerpo completo (9:16) sobre fondo blanco.', pt: 'Um único personagem isolado de corpo inteiro de frente em fundo branco.', en: 'Single isolated full body front character on white background.' },
        customLabel: { es: 'Descripción de Atuendo / Accesorios Frontales 2D', pt: 'Descrição do Traje Frontal 2D', en: 'Front Outfit / Accessories Description 2D' },
        customPlaceholder: 'ej: traje espacial azul, botas moradas, guantes blancos',
        explanationText: {
          es: 'Proyección frontal única de cuerpo entero (solo un personaje aislado) de pies a cabeza sobre fondo blanco puro.',
          pt: 'Projeção frontal única de corpo inteiro de pés à cabeça em fundo branco.',
          en: 'Single full-body front view from head to toe isolated on a pure white background.'
        }
      },
{
        id: 'cuerpo_espalda_2d',
        cat: { es: '🧍 Cuerpo, Estructura y Proporciones 2D', pt: '🧍 Corpo, Estrutura e Proporções 2D', en: '🧍 2D Body & Proportions' },
        label: { es: '12. Cuerpo Entero Espalda 2D (Sin Mochila)', pt: '12. Corpo Inteiro Costas 2D (Sem Mochila)', en: '12. 2D Full Body Back (No Backpack)' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '[URL_FOTO] Orthographic 2D technical character model sheet turnaround, strict 180-degree full body rear back view seen directly from behind, neutral relaxed standing pose facing completely away from camera with arms straight down at sides and feet flat on ground, tight vertical framing filling frame from top of head down to footwear soles, identical rear continuation of the reference subject without backpack or bags, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, clothing construction, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 9:16 --style raw --no face, eyes, nose, mouth, front view, side profile, 3/4 view, turning around, looking back, looking over shoulder, dynamic action pose, hand on hip, bent arms, backpack, rucksack, satchel, shoulder bag, side bag, modifying outfit, inventing new garments, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Cuerpo entero de espalda en 9:16. Muestra la caída limpia de la ropa trasera sin mochilas ni bolsos.', pt: 'Corpo inteiro de costas em 9:16 sem mochilas para visualização limpa.', en: 'Full body rear view in 9:16 showing clean back drape without backpacks or bags.' },
        customLabel: { es: 'Detalles de Espalda / Accesorios Dorsales 2D', pt: 'Detalhes de Costas 2D', en: 'Back Details / Rear Accessories 2D' },
        customPlaceholder: 'ej: costuras traseras de pantalones, suela de botas, sin mochila',
        explanationText: {
          es: 'Proyección ortográfica trasera de cuerpo completo a 180° que aísla la silueta posterior limpia.',
          pt: 'Projeção ortográfica traseira de corpo inteiro a 180° com silhueta limpa.',
          en: 'Full-body 180-degree rear orthographic projection showcasing clean back silhouette and footwear.'
        }
      },
{
        id: 'cuerpo_perfil_2d',
        cat: { es: '🧍 Cuerpo, Estructura y Proporciones 2D', pt: '🧍 Corpo, Estructura e Proporções 2D', en: '🧍 2D Body & Proportions' },
        label: { es: '13. Cuerpo Entero Perfil 2D (Lado)', pt: '13. Corpo Inteiro Perfil 2D (Lado)', en: '13. 2D Full Body Side Profile' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '[URL_FOTO] Orthographic 2D technical character model sheet turnaround, strict 90-degree full body side profile view facing directly to the right, neutral relaxed standing pose with arms straight down at side and feet flat on ground, tight vertical framing filling frame from top of head down to footwear soles, showing full side profile silhouette of anatomy, garments, belts, and boots matching reference, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 9:16 --style raw --no front view, 3/4 view, rear back view, two eyes visible, turned torso, angled perspective, dynamic action pose, hand on hip, bent arms, walking, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Silueta lateral pura a 90° de cuerpo entero en 9:16. Bloquea giros a 3/4 y contacto visual.', pt: 'Silhueta lateral 90° de corpo inteiro em 9:16 bloqueando giros para 3/4.', en: 'Strict 90-degree full body profile in 9:16 blocking 3/4 turns and eye contact.' },
        customLabel: { es: 'Detalles de Perfil Lateral / Calzado 2D', pt: 'Detalhes de Perfil Lateral 2D', en: 'Side Profile / Footwear Details 2D' },
        customPlaceholder: 'ej: postura recta, perfil de botas, bolsillos laterales',
        explanationText: {
          es: 'Proyección lateral ortográfica de cuerpo entero a 90° para registrar el grosor corporal, postura y silueta lateral.',
          pt: 'Projeção lateral ortográfica de corpo inteiro a 90° para registrar espessura e postura.',
          en: 'Full-body 90-degree side profile orthographic view to capture body depth, posture, and lateral silhouette.'
        }
      },
{
        id: 'pose_neutra_t_2d',
        cat: { es: '🧍 Cuerpo, Estructura y Proporciones 2D', pt: '🧍 Corpo, Estrutura e Proporções 2D', en: '🧍 2D Body & Proportions' },
        label: { es: '14. Pose Neutra T-Pose / A-Pose 2D', pt: '14. Pose Neutra T-Pose / A-Pose 2D', en: '14. 2D Neutral T-Pose / A-Pose' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '[URL_FOTO] Orthographic 2D technical character model sheet turnaround, symmetrical full body front view standing in neutral technical A-pose, arms extended straight outwards at a 45-degree angle away from torso, open hands with fingers extended, feet flat on ground shoulder-width apart, tight vertical framing filling frame from top of head down to footwear soles, identical character clone, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, clothing construction, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 9:16 --style raw --no dynamic action pose, asymmetrical pose, bent elbows, bent knees, hand on hip, closed fists, walking, turned head, side profile, 3/4 view, back view, blueprint grid, guidelines, measuring lines, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'A-Pose técnica en 9:16 con brazos a 45° y dedos abiertos. Ideal para rigging y animación.', pt: 'A-Pose técnica em 9:16 com braços a 45° e dedos abertos para rigging.', en: 'Technical 9:16 A-Pose with 45-degree arms and open fingers for rigging.' },
        customLabel: { es: 'Ángulo de Extremidades / Postura Técnica 2D', pt: 'Ângulo de Membros / Postura 2D', en: 'Limb Angle / Technical Stance 2D' },
        customPlaceholder: 'ej: A-Pose con brazos a 45 grados, T-Pose a 90 grados',
        explanationText: {
          es: 'Pose técnica simétrica con brazos separados a 45° para despiece de marionetas, rigging y análisis anatómico.',
          pt: 'Pose técnica simétrica com braços afastados a 45° para rigging e animação.',
          en: 'Symmetrical technical pose with arms at 45 degrees for digital puppet rigging and animation.'
        }
      },
{
        id: 'settei_construccion',
        cat: { es: '🧍 Cuerpo, Estructura y Proporciones 2D', pt: '🧍 Corpo, Estrutura e Proporções 2D', en: '🧍 2D Body & Proportions' },
        label: { es: '15. Hoja de Construcción y Geometría 2D (Anatomy Breakdown)', pt: '15. Construção e Geometria 2D (Anatomy Breakdown)', en: '15. 2D Anatomy Breakdown & Shapes' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: '[URL_FOTO] Technical 2D character design construction sheet, anatomical shape breakdown showing simplified geometric volumes, spheres, cylinders, and structural underdrawing lines of the character, rough structural animation sketch alongside contour lines, identical character proportions and silhouette matching reference, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 16:9 --style raw --no 3d wireframe, CGI, 3d render, photorealistic, dimensional arrows, measurement numbers, ruler marks, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border',
        usageTip: { es: 'Desglose geométrico y líneas de construcción en 16:9. Sin textos de medidas ni flechas.', pt: 'Desconstrução geométrica em 16:9 sem textos de medidas ou setas.', en: 'Geometric breakdown in 16:9 without measurement text or dimension arrows.' },
        customLabel: { es: 'Enfoque de Estructura / Geometría 2D', pt: 'Foco na Estrutura / Geometria 2D', en: 'Structure / Geometry Focus 2D' },
        customPlaceholder: 'ej: cilindros para extremidades y cajas para torso',
        explanationText: {
          es: 'Ficha de construcción que desglosa la anatomía del personaje en volúmenes geométricos y líneas guía de animación sin textos ni cotas.',
          pt: 'Ficha de construção anatômica em volumes geométricos para animação.',
          en: 'Construction sheet breaking down character anatomy into simplified geometric volumes and underdrawing lines without labels.'
        }
      },
{
        id: 'lectura_silueta_2d',
        cat: { es: '🧍 Cuerpo, Estructura y Proporciones 2D', pt: '🧍 Corpo, Estrutura e Proporções 2D', en: '🧍 2D Body & Proportions' },
        label: { es: '16. Lectura de Silueta Vectorial 2D', pt: '16. Leitura de Silhueta Vetorial 2D', en: '16. 2D Vector Silhouette Check' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '[URL_FOTO] Technical 2D character silhouette study, pure solid black flat silhouette cutout of the character in full body standing pose, exact 1:1 outer contour and shape silhouette matching the reference subject, completely filled in solid pitch black with sharp crisp edges and zero interior lines, isolated on a solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 9:16 --style raw --no interior details, inner lines, facial features, eyes, mouth, clothing folds, colors, white patches, gray shading, gradients, highlights, drop shadow, floor shadow, ground reflection, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Silueta 9:16 en negro sólido puro sobre fondo blanco. Cero detalles internos y cero sombras en el suelo.', pt: 'Silhueta em preto sólido puro em 9:16 para teste de pregnância visual.', en: '9:16 pure solid black silhouette on white background with zero interior details.' },
        customLabel: { es: 'Ajuste de Silueta 2D', pt: 'Ajuste de Silhueta 2D', en: '2D Silhouette Tuning' },
        customPlaceholder: 'ej: silueta en pose de pie neutra, contorno limpio',
        explanationText: {
          es: 'Recorte en negro sólido puro para evaluar la pregnancia, reconocimiento icónico y claridad del contorno exterior.',
          pt: 'Recorte em preto sólido para avaliar o contorno e legibilidade da forma.',
          en: 'Pure solid black cutout to evaluate iconic recognition, shape strength, and outer contour clarity.'
        }
      },
{
        id: 'guia_proporciones_2d',
        cat: { es: '🧍 Cuerpo, Estructura y Proporciones 2D', pt: '🧍 Corpo, Estructura e Proporções 2D', en: '🧍 2D Body & Proportions' },
        label: { es: '17. Guía de Proporciones en Cabezas (1:8) 2D', pt: '17. Guia de Proporções em Cabeças (1:8) 2D', en: '17. 2D 8-Heads Proportion Guide' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: '[URL_FOTO] Technical 2D character proportions model sheet, full body front view in neutral standing pose positioned next to a clean vertical head-proportion measurement scale, orthogonal projection, identical character clone, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, clothing construction, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 16:9 --style raw --no dynamic action pose, bent limbs, turned head, perspective angle, chaotic messy grids, random numbers, typography, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Escala de proporción de 8 cabezas en 16:9. Bloquea números caóticos y textos impresos.', pt: 'Escala de proporção de 8 cabeças em 16:9 sem números ou textos aleatórios.', en: '8-heads proportion scale in 16:9 blocking messy numbers and text annotations.' },
        customLabel: { es: 'Número de Cabezas / Escala 2D', pt: 'Número de Cabeças / Escala 2D', en: 'Heads Count / 2D Scale' },
        customPlaceholder: 'ej: 8 cabezas (heroico), 7 cabezas (estándar), 6 cabezas (juvenil)',
        explanationText: {
          es: 'Ficha técnica que muestra al personaje de cuerpo entero junto a una regla visual de proporción anatómica en cabezas sin textos ni cotas sucias.',
          pt: 'Ficha técnica comparativa de proporções corporais em cabeças sem poluição textual.',
          en: 'Technical model sheet displaying full-body figure alongside a clean visual head-proportion scale without textual clutter.'
        }
      },
{
        id: 'settei_vestuario_props',
        cat: { es: '👗 Vestuario, Props y Rigging Digital 2D', pt: '👗 Vestuário, Props e Rigging 2D', en: '👗 2D Wardrobe, Props & Rigging' },
        label: { es: '18. Desglose de Indumentaria 2D (Costume Sheet)', pt: '18. Desdobramento de Roupas 2D (Costume Sheet)', en: '18. 2D Costume & Wardrobe Sheet' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: '[URL_FOTO] Technical 2D costume and wardrobe design sheet, flat lay arrangement displaying the isolated clothing items, accessories, belts, and footwear from the reference subject, neatly organized across the 16:9 frame without character body or mannequin, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, fabric construction, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 0 --ar 16:9 --style raw --no human body, person, character, face, skin, limbs, mannequin, hanger, dress form, floating limbs, text, font, letters, words, watermark, labels, annotations, clothing names, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Desglose de prendas en plano (flat lay) en 16:9. Sin maniquíes, cuerpos ni textos.', pt: 'Desdobramento de roupas em plano (flat lay) em 16:9 sem corpos ou manequins.', en: 'Flat lay garment breakdown in 16:9 without body, mannequins, or text.' },
        customLabel: { es: 'Prendas Específicas a Desglosar 2D', pt: 'Roupas Específicas 2D', en: 'Specific Garments to Break Down 2D' },
        customPlaceholder: 'ej: camisa desabrochada, chaleco, cinturón de herramientas, pantalones cortos, botas',
        explanationText: {
          es: 'Ficha técnica que muestra las prendas y accesorios del personaje desplegados en plano, aislando su diseño sin cuerpo ni maniquí.',
          pt: 'Ficha técnica que exibe roupas e acessórios em plano, isolando o design têxtil.',
          en: 'Technical costume sheet showcasing clothing items and accessories laid flat, isolating garment design without body or mannequin.'
        }
      },
{
        id: 'props_settei_2d',
        cat: { es: '👗 Vestuario, Props y Rigging Digital 2D', pt: '👗 Vestuário, Props e Rigging 2D', en: '👗 2D Wardrobe, Props & Rigging' },
        label: { es: '19. Ficha de Accesorios y Armas 2D (Props Settei)', pt: '19. Ficha de Acessórios e Armas 2D (Props Settei)', en: '19. 2D Props & Weapons Settei' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: '[URL_FOTO] Technical 2D props and equipment reference sheet, neatly organized arrangement displaying the isolated tools, accessories, belts, pouches, headgear, and gear from the reference subject across a 16:9 frame, shown in clean orthographic views without any character or hands holding them, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, material finishes, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 0 --ar 16:9 --style raw --no human body, person, character, face, skin, hands, fingers, holding objects, mannequin, text, font, letters, words, watermark, labels, annotations, item names, arrows, leader lines, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Ficha de accesorios y armas aisladas en 16:9. Emplea --cw 0 para evitar que aparezcan manos o cuerpos.', pt: 'Ficha de itens e armas isolados em 16:9 com --cw 0 sem mãos ou corpos.', en: 'Isolated props and weapons sheet in 16:9 using --cw 0 without bodies or holding hands.' },
        customLabel: { es: 'Lista de Accesorios / Armas Específicas 2D', pt: 'Lista de Itens / Armas 2D', en: 'Specific Props / Weapons List 2D' },
        customPlaceholder: 'ej: casco de obra, cinturón con destornilladores, guantes, herramientas',
        explanationText: {
          es: 'Ficha técnica de utilería que aísla armas, herramientas y accesorios del personaje en vistas limpias sin cuerpos ni manos sosteniéndolos.',
          pt: 'Ficha técnica que isola equipamentos, armas e acessórios sem interferência de corpos ou mãos.',
          en: 'Technical prop sheet isolating weapons, tools, and accessories in clean views without holding hands or human bodies.'
        }
      },
{
        id: 'live2d_slicing_sheet',
        cat: { es: '👗 Vestuario, Props y Rigging Digital 2D', pt: '👗 Vestuário, Props e Rigging 2D', en: '👗 2D Wardrobe, Props & Rigging' },
        label: { es: '20. Desglose de Capas para Live2D / VTuber (Slicing Sheet)', pt: '20. Separação de Camadas para Live2D / VTuber (Slicing Sheet)', en: '20. Live2D / VTuber Layer Slicing Sheet' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '[URL_FOTO] Technical 2D character rigging breakdown sheet, modular body and layer slicing for 2D animation, neatly organized arrangement of separated character parts and layers (separated hair strands and bangs, detached limbs with rounded joint overlaps, isolated torso and garment pieces, separated facial components) matching the reference subject across the 9:16 frame, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 0 --ar 9:16 --style raw --no gore, blood, severed flesh, bones, internal organs, medical autopsy, fully assembled body, intact person, layer names, technical text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Despiece modular en 9:16 para Live2D/Spine. Sin textos de capas ni elementos de gore.', pt: 'Separação modular em 9:16 para Live2D/Spine sem textos ou gore.', en: '9:16 modular part slicing for Live2D/Spine without layer labels or gore.' },
        customLabel: { es: 'Capas Específicas a Desglosar 2D', pt: 'Camadas a Separar 2D', en: 'Specific Layers to Slice 2D' },
        customPlaceholder: 'ej: mechones de pelo, extremidades con articulaciones circulares, ojos por capas',
        explanationText: {
          es: 'Ficha técnica de despiece modular por capas para animación 2D y avatares Live2D/Spine, aislando partes sin textos ni sangre.',
          pt: 'Ficha técnica de separação modular de camadas para animação 2D e Live2D/Spine.',
          en: 'Technical modular layer slicing sheet for 2D animation and Live2D/Spine rigging without labels or gore.'
        }
      },
{
        id: 'settei_color_kage',
        cat: { es: '🎨 Color, Iluminación y Producción 2D', pt: '🎨 Cor, Iluminação e Produção 2D', en: '🎨 2D Color & Production' },
        label: { es: '21. Guía de Color y Mapa de Sombras (Shadow Guide)', pt: '21. Guia de Cores e Sombras (Shadow Guide)', en: '21. 2D Color & Shadow Guide' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: '[URL_FOTO] Technical 2D character lighting and shadow mapping reference sheet, side-by-side views across 16:9 frame displaying the character in neutral standing pose with clearly defined primary and secondary cast shadow areas, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 16:9 --style raw --no text, font, letters, words, watermark, labels, annotations, shadow labels, color names, Japanese characters, color palette, color swatches, sample boxes, settei elements, frames, boxes, borders, dividing lines, split lines, 3d render, photo',
        usageTip: { es: 'Guía de iluminación y sombras 2D en 16:9. Muestra zonas de sombra limpias sin etiquetas ni cajas.', pt: 'Guia de iluminação e sombras em 16:9 sem rótulos ou caixas de texto.', en: '2D lighting and shadow guide in 16:9 without labels or text boxes.' },
        customLabel: { es: 'Notas de Iluminación / Sombras 2D', pt: 'Notas de Iluminação / Sombras 2D', en: '2D Lighting / Shadow Notes' },
        customPlaceholder: 'ej: sombra dura en pliegues, luz cenital, tono de sombra fría',
        explanationText: {
          es: 'Ficha técnica comparativa que define las zonas de iluminación y sombra del personaje manteniendo el estilo e impidiendo la generación de textos o códigos de color.',
          pt: 'Ficha técnica que define zonas de luz e sombra do personagem sem poluição textual.',
          en: 'Technical sheet defining character lighting and shadow boundaries while preserving original style and blocking text labels.'
        }
      },
      {
        id: 'paleta_color_2d',
        cat: { es: '🎨 Color, Iluminación y Producción 2D', pt: '🎨 Cor, Iluminação e Produção 2D', en: '🎨 2D Color & Production' },
        label: { es: '22. Paleta de Muestras de Color (Swatches) 2D', pt: '22. Paleta de Cores (Swatches) 2D', en: '22. 2D Color Swatches Palette' },
        aspectRatioText: '4:3',
        aspectRatioNum: 4/3,
        promptTemplate: '[URL_FOTO] Minimalist 2D color palette design sheet, clean geometric grid of solid circular color swatches directly extracted from the reference subject colors (skin tone, hair, eyes, clothing, and gear), flat 2D presentation with pure solid color fills, neatly aligned on a solid neutral middle gray background (#808080) --sref [URL_FOTO] --sw 1000 --ar 4:3 --style raw --no human body, character, face, skin, eyes, clothing, text, font, letters, words, numbers, hex codes, color names, RGB codes, labels, annotations, 3d spheres, glossy reflections, glass spheres, gradients, drop shadows, borders, frames, settei elements',
        usageTip: { es: 'Muestras circulares de color en 4:3. Bloquea códigos hexadecimales, nombres de color y esferas 3D.', pt: 'Cartela de cores circulares em 4:3 sem códigos hexadecimais ou esferas 3D.', en: 'Circular color swatches in 4:3 blocking hex codes, color names, and 3D spheres.' },
        customLabel: { es: 'Colores Clave a Extraer 2D', pt: 'Cores Chave a Extrair 2D', en: 'Key Colors to Extract 2D' },
        customPlaceholder: 'ej: tono piel, cabello, ropa principal, accesorios',
        explanationText: {
          es: 'Ficha gráfica minimalista con muestras circulares planas de color estandarizadas sin textos, códigos numéricos ni brillos 3D.',
          pt: 'Ficha gráfica minimalista de cores planas sem códigos ou brilhos.',
          en: 'Minimalist flat color swatch sheet cleanly displaying extracted palette without hex codes, text, or 3D gloss.'
        }
      },
      /* ==================== MÓDULOS BONUS SENIOR (23, 24, 25) ==================== */
{
        id: 'pose_accion_keyframe',
        cat: { es: '⭐ Módulos Expertos Bonus 2D', pt: '⭐ Módulos Especialistas Bonus 2D', en: '⭐ Senior Bonus Modules 2D' },
        label: { es: '23. Pose de Acción Dinámica (Key Animation Frame)', pt: '23. Pose de Ação Dinâmica (Keyframe de Animação)', en: '23. Dynamic Action Pose (Key Animation Frame)' },
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: '[URL_FOTO] Technical 2D key animation frame, dynamic action pose with athletic movement and strong silhouette, full-body action staging isolated across the 16:9 frame, identical character clone, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, dirt marks, clothing construction, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 16:9 --style raw --no background scenery, environmental clutter, motion blur, speed lines clutter, blurred limbs, depth of field, text, font, letters, words, watermark, labels, annotations, action names, sound effects, onomatopoeia, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Pose de acción dinámica en 16:9 aislada sobre fondo blanco. Bloquea fondos, onomatopeyas y desenfoques.', pt: 'Pose de ação dinâmica em 16:9 isolada sem cenários ou onomatopeias.', en: '16:9 dynamic action pose isolated on white background blocking scenery, blur, and onomatopoeia.' },
        customLabel: { es: 'Descripción de la Acción Dinámica 2D', pt: 'Descrição da Ação Dinâmica 2D', en: 'Dynamic Action Description 2D' },
        customPlaceholder: 'ej: saltando en el aire con herramientas en mano, pose de carrera veloz',
        explanationText: {
          es: 'Captura al personaje en un fotograma clave de acción dinámica sin alterar el modelo ni generar fondos o desenfoques de movimiento.',
          pt: 'Registra o personagem em pose dinâmica mantendo o modelo sem cenários.',
          en: 'Captures character in a dynamic keyframe action pose staying strictly on-model without background clutter.'
        }
      },
{
        id: 'chibi_sd_settei',
        cat: { es: '⭐ Módulos Expertos Bonus 2D', pt: '⭐ Módulos Especialistas Bonus 2D', en: '⭐ Senior Bonus Modules 2D' },
        label: { es: '24. Versión Chibi / SD (Super Deformed)', pt: '24. Versão Chibi / SD (Super Deformed)', en: '24. Chibi / SD Version' },
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: '[URL_FOTO] Super Deformed SD chibi character design, full-body standing pose in cute 2-heads tall chibi proportion, oversized head with cute simplified features and tiny body, exact character translation preserving signature hair, outfit, accessories, and colors from reference, exact 1:1 reproduction of the reference artwork\'s visual art style, line art weight, inking technique, cross-hatching, texture grit, and colors, solid neutral middle gray background (#808080) --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 0 --ar 1:1 --style raw --no realistic adult proportions, tall body, realistic anatomy, text, font, letters, words, watermark, labels, annotations, chibi text, character name, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Versión Chibi en 1:1. Utiliza --cw 0 para deformar la anatomía a 2 cabezas manteniendo el estilo intacto.', pt: 'Versão Chibi em 1:1 com --cw 0 para proporções fofas mantendo o estilo.', en: '1:1 Chibi version using --cw 0 to deform anatomy to 2 heads while preserving original art style.' },
        customLabel: { es: 'Ajuste de Proporción Chibi 2D', pt: 'Ajuste de Proporção Chibi 2D', en: 'Chibi Proportion Tuning 2D' },
        customPlaceholder: 'ej: proporción de 2 cabezas, pose tierna, cabeza grande',
        explanationText: {
          es: 'Adaptación del personaje a estilo chibi / super-deformed en ratio 1:1, trasladando accesorios, ropa y estilo de entintado sin textos ni proporciones realistas.',
          pt: 'Adaptação do personagem para estilo chibi mantendo roupas e traços.',
          en: 'Super-deformed chibi adaptation in 1:1 ratio, translating garments, accessories, and inking style without text or adult anatomy.'
        }
      },
{
        id: 'lineart_puro_genga',
        cat: { es: '⭐ Módulos Expertos Bonus 2D', pt: '⭐ Módulos Especialistas Bonus 2D', en: '⭐ Senior Bonus Modules 2D' },
        label: { es: '25. Hoja de Lineart Puro (Clean Lineart)', pt: '25. Linha Pura (Clean Lineart)', en: '25. Pure Clean Lineart Sheet' },
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '[URL_FOTO] Technical 2D lineart drawing, pure black ink contour lines only on solid neutral middle gray background (#808080), NO COLOR, NO SHADING, NO GRAY TONES, NO FILLS, full body front view in neutral standing pose, tight vertical framing filling the 9:16 frame, exact 1:1 line art weight and inking consistency matching the reference subject outlines, crisp black outlines on white paper --cref [URL_FOTO] --sref [URL_FOTO] --sw 1000 --cw 100 --ar 9:16 --style raw --no color, colored ink, paint, gray tones, shading, shadows, gradients, halftone dots, red pencil, blue sketch lines, animator notes, cut numbers, text, font, letters, words, watermark, labels, annotations, color palette, color swatches, sample boxes, settei elements, frame, border, 3d, render, photo',
        usageTip: { es: 'Lineart 100% puro en tinta negra sobre fondo blanco en 9:16. Cero color, cero sombras y sin marcas de corte.', pt: 'Lineart puro em tinta preta sobre fundo branco em 9:16 sem cores ou sombras.', en: '100% pure black ink lineart on white background in 9:16 with zero colors, shading, or cut marks.' },
        customLabel: { es: 'Vista de Lineart: Frente, 3/4 o Perfil', pt: 'Vista do Lineart', en: 'Lineart View: Front, 3/4 or Side' },
        customPlaceholder: 'ej: vista de cuerpo entero frontal en línea negra limpia',
        explanationText: {
          es: 'Arte lineal purificado en tinta negra sobre blanco para coloreado digital, manteniendo el grosor de trazo original y bloqueando cualquier sombra, color o marca de producción.',
          pt: 'Arte linear pura em preto e branco para colorização digital sem sombras ou marcas.',
          en: 'Purified black ink line art on white for digital coloring, preserving original stroke weight while blocking all color, shading, and annotations.'
        }
      }
    ];

    const MASTER_W = 3840;
    const MASTER_H = 2160;
    const GAP = 20;

    let appCurrentMode = '3d';
    let panelesActivos = [];
    let showGuides = false;
    let guideEyeY = 925;
    let guideChinY = 1900;

    let sourceCopyPanelIndex = -1;
    let selectedPanelIndex = -1;
    let interactionMode = null;
    let dragStartX = 0;
    let dragStartY = 0;
    let initialGeo = null;

    let activeSnapLines = [];
    let modalActivePanel = null;

    const splashScreenOverlay = document.getElementById('splashScreenOverlay');
    const welcomeModalOverlay = document.getElementById('welcomeModalOverlay');
    const btnAcceptWelcomeMode = document.getElementById('btnAcceptWelcomeMode');
    const modeDescriptionBox = document.getElementById('modeDescriptionBox');
    const badgeModeIndicator = document.getElementById('badgeModeIndicator');
    const headerLangSelect = document.getElementById('headerLangSelect');

    const previewCanvas = document.getElementById('previewCanvas');
    const ctx = previewCanvas.getContext('2d');
    const charNameInput = document.getElementById('charName');
    const textPosSelect = document.getElementById('textPos');
    const textOpacityInput = document.getElementById('textOpacity');
    const bgColorInput = document.getElementById('bgColor');
    const btnToggleGuides = document.getElementById('btnToggleGuides');
    const btnExport = document.getElementById('btnExport');
    const chkShowGrid = document.getElementById('chkShowGrid');
    const guidesPanel = document.getElementById('guidesPanel');
    const sliderGuideEye = document.getElementById('sliderGuideEye');
    const sliderGuideChin = document.getElementById('sliderGuideChin');
    const sliderGuideMove = document.getElementById('sliderGuideMove');
    const valGuideGap = document.getElementById('val-guide-gap');
    const valGuideCenter = document.getElementById('val-guide-center');
    const inputManualGap = document.getElementById('inputManualGap');
    const btnSetManualGap = document.getElementById('btnSetManualGap');
    const selectNuevoModulo = document.getElementById('selectNuevoModulo');
    const btnAgregarModulo = document.getElementById('btnAgregarModulo');
    const activeModulesContainer = document.getElementById('activeModulesContainer');

    const floatingHelpPopup = document.getElementById('floatingHelpPopup');
    const helpTitle = document.getElementById('helpTitle');
    const helpBody = document.getElementById('helpBody');
    const btnCloseHelp = document.getElementById('btnCloseHelp');

    const promptModalOverlay = document.getElementById('promptModalOverlay');
    const btnClosePromptModal = document.getElementById('btnClosePromptModal');
    const modalPromptTitle = document.getElementById('modalPromptTitle');
    const modalRatioText = document.getElementById('modalRatioText');
    const modalQualityText = document.getElementById('modalQualityText');
    const modalCustomLabel = document.getElementById('modalCustomLabel');
    const modalInputContainer = document.getElementById('modalInputContainer');
    const modalHeadCheckboxContainer = document.getElementById('modalHeadCheckboxContainer');
    const modalPromptText = document.getElementById('modalPromptText');
    const modalUsageTip = document.getElementById('modalUsageTip');
    const modalBtnRestore = document.getElementById('modalBtnRestore');

// Variable global para controlar la animación de las chispas
    let sparksAnimationId = null;

 // =======================================================
    // MOTOR DE DESHACER (UNDO / CTRL + Z)
    // =======================================================
    const historialDeshacer = [];
    const MAX_HISTORIAL = 30; // Guarda los últimos 30 pasos

    // Guarda una "foto" del lienzo antes de hacer cualquier cambio
    function guardarEstadoParaUndo() {
      const snapshot = panelesActivos.map(p => ({
        ...p,
        geo: { ...p.geo }
      }));
      historialDeshacer.push(snapshot);
      if (historialDeshacer.length > MAX_HISTORIAL) {
        historialDeshacer.shift();
      }
      actualizarBotonUndo();
    }

    // Restaura el paso anterior
    function deshacerUltimoPaso() {
      if (historialDeshacer.length === 0) return;
      const estadoAnterior = historialDeshacer.pop();
      panelesActivos = estadoAnterior.map(p => ({
        ...p,
        geo: { ...p.geo }
      }));
      selectedPanelIndex = -1;
      sourceCopyPanelIndex = -1;
      cerrarToolbarFlotante();
      actualizarBotonUndo();
      generarControlesUI();
      renderAll();
    }

    // Activa o desactiva visualmente el botón según haya pasos guardados
    function actualizarBotonUndo() {
      const btnUndo = document.getElementById('btnUndo');
      if (!btnUndo) return;
      if (historialDeshacer.length > 0) {
        btnUndo.style.opacity = '1';
        btnUndo.style.cursor = 'pointer';
      } else {
        btnUndo.style.opacity = '0.5';
        btnUndo.style.cursor = 'not-allowed';
      }
    }

    function init() {
      // Configuración inicial
      cambiarIdiomaGlobal('es');
      setupWelcomeModalEvents();
      pobladoDropdownCatalog();
      generarControlesUI();
      resizePreviewCanvas();
      window.addEventListener('resize', resizePreviewCanvas);
      setupEventListeners();
      updateCaliperUI();
      renderAll();

      // 👉 INICIAMOS EL EFECTO DE CHISPAS AQUÍ
      initSplashSparks();
// Control de hover para mostrar el panel de novedades v1.5
      const btnVer = document.getElementById('btnSplashVersion');
      const panelNov = document.getElementById('splashChangelogPanel');
      if (btnVer && panelNov) {
        btnVer.addEventListener('mouseenter', () => panelNov.classList.add('visible'));
        btnVer.addEventListener('mouseleave', () => {
          setTimeout(() => {
            if (!panelNov.matches(':hover')) panelNov.classList.remove('visible');
          }, 150);
        });
        panelNov.addEventListener('mouseleave', () => panelNov.classList.remove('visible'));
      }
    }

function cambiarIdiomaGlobal(lang) {
      currentLang = lang;
      if (headerLangSelect) headerLangSelect.value = lang;
      
      const splashRadios = document.getElementsByName('splashLangRadio');
      splashRadios.forEach(r => {
        if (r.value === lang) r.checked = true;
      });

      // Actualizar botón de versión
      const btnVer = document.getElementById('btnSplashVersion');
      if (btnVer && I18N[lang] && I18N[lang].splashVersionBtn) {
        btnVer.innerText = I18N[lang].splashVersionBtn;
      }

      // Actualizar todos los textos data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N[lang] && I18N[lang][key]) {
          el.innerHTML = I18N[lang][key];
        }
      });

      // Actualizar opciones de los selectores de video
      const t = I18N[lang];
      if (t) {
        const optCW = document.getElementById('optRotCW');
        const optCCW = document.getElementById('optRotCCW');
        if (optCW) optCW.innerText = t.vmRotCW;
        if (optCCW) optCCW.innerText = t.vmRotCCW;

        const r916 = document.getElementById('optRatio916');
        const r34 = document.getElementById('optRatio34');
        const r11 = document.getElementById('optRatio11');
        const r43 = document.getElementById('optRatio43');
        const r169 = document.getElementById('optRatio169');
        if (r916) r916.innerText = t.vmRatio916;
        if (r34) r34.innerText = t.vmRatio34;
        if (r11) r11.innerText = t.vmRatio11;
        if (r43) r43.innerText = t.vmRatio43;
        if (r169) r169.innerText = t.vmRatio169;
      }

      const btnStart = document.getElementById('btnSplashStart');
      if (btnStart && I18N[lang]) btnStart.innerText = I18N[lang].splashBtn;

      // Actualizar tooltips de la barra flotante
      const btnFloatPhoto = document.getElementById('btnFloatPhoto');
      if (btnFloatPhoto) btnFloatPhoto.title = I18N[lang].titleTbPhoto;

      const btnFloatFraming = document.getElementById('btnToggleFloatTransform');
      if (btnFloatFraming) btnFloatFraming.title = I18N[lang].titleTbFraming;

      const btnFloatDelete = document.getElementById('btnFloatDelete');
      if (btnFloatDelete) btnFloatDelete.title = I18N[lang].titleTbDelete;

      const btnFloatClose = document.getElementById('btnFloatClose');
      if (btnFloatClose) btnFloatClose.title = I18N[lang].titleTbClose;

      actualizarDescripcionModo();
      actualizarBadgeModo();
      pobladoDropdownCatalog();
      generarControlesUI();
      if (videoCapturas && videoCapturas.frente) mostrarMiniaturasVideo();
      renderAll();
    }

function iniciarAppDesdeSplash() {
      // Si las chispas están activas, cancelamos la animación para liberar memoria
      if (sparksAnimationId) {
        cancelAnimationFrame(sparksAnimationId);
      }
      splashScreenOverlay.style.display = 'none';
      welcomeModalOverlay.style.display = 'flex';
      actualizarDescripcionModo();
    }

// =======================================================
    // MOTOR DE CHISPAS Y BRASAS TÉRMICAS FLOTANTES
    // =======================================================
    function initSplashSparks() {
      const canvas = document.getElementById('splashSparksCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      // Ajusta el tamaño del lienzo a la pantalla completa
      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      const CANTIDAD_CHISPAS = 70; // Número de chispas simultáneas
      const chispas = [];

      // Clase que define cómo nace, se mueve y se dibuja cada chispa
      class Chispa {
        constructor() {
          this.reiniciar(true);
        }

        // Configura los valores iniciales de cada chispa
        reiniciar(inicial = false) {
          this.x = Math.random() * canvas.width;
          // Al arrancar aparecen en toda la pantalla; luego nacen siempre desde abajo
          this.y = inicial ? Math.random() * canvas.height : canvas.height + (Math.random() * 20);
          this.size = Math.random() * 2.2 + 0.8; // Tamaño diminuto: entre 0.8px y 3px
          this.speedY = Math.random() * 1.8 + 0.8; // Velocidad hacia arriba
          this.speedX = (Math.random() - 0.5) * 0.8; // Leve deriva hacia los lados
          this.wobbleSpeed = Math.random() * 0.04 + 0.02; // Velocidad de oscilación
          this.wobbleAngle = Math.random() * Math.PI * 2;
          this.opacity = Math.random() * 0.7 + 0.3; // Opacidad aleatoria
          this.decay = Math.random() * 0.003 + 0.0015; // Velocidad con la que se apaga

          // Paleta de fuego térmico (Dorado, Naranja fuego, Rojo brasa, Amarillo chispa)
          const coloresFuego = [
            '255, 200, 60',  // Amarillo dorado
            '255, 120, 20',  // Naranja fuego
            '255, 60, 10',   // Rojo brasa
            '255, 235, 130'  // Chispa incandescente
          ];
          this.color = coloresFuego[Math.floor(Math.random() * coloresFuego.length)];
        }

        // Calcula el movimiento hacia arriba con balanceo de calor
        actualizar() {
          this.y -= this.speedY; // Sube
          this.wobbleAngle += this.wobbleSpeed;
          this.x += Math.sin(this.wobbleAngle) * 1.1 + this.speedX; // Balanceo suave
          this.opacity -= this.decay; // Se va desvaneciendo poco a poco

          // Si sale por arriba de la pantalla o se apaga, vuelve a nacer abajo
          if (this.y < -10 || this.opacity <= 0) {
            this.reiniciar();
          }
        }

        // Dibuja la partícula con resplandor neón
        dibujar() {
          ctx.save();
          ctx.globalAlpha = Math.max(0, this.opacity);
          ctx.shadowColor = `rgba(${this.color}, 0.9)`;
          ctx.shadowBlur = this.size * 5; // Efecto de luz brillante / bloom
          ctx.fillStyle = `rgb(${this.color})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // Creamos todas las partículas
      for (let i = 0; i < CANTIDAD_CHISPAS; i++) {
        chispas.push(new Chispa());
      }

      // Bucle de animación a 60 fotogramas por segundo
      function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let chispa of chispas) {
          chispa.actualizar();
          chispa.dibujar();
        }
        sparksAnimationId = requestAnimationFrame(animar);
      }

      animar();
    }

    function seleccionarOpcionModo(modo) {
      appCurrentMode = modo;
      const card3d = document.getElementById('cardMode3d');
      const card2d = document.getElementById('cardMode2d');
      const radio3d = document.getElementById('radioMode3d');
      const radio2d = document.getElementById('radioMode2d');

      if (modo === '3d') {
        card3d.classList.add('selected-3d');
        card2d.classList.remove('selected-2d');
        radio3d.checked = true;
      } else {
        card2d.classList.add('selected-2d');
        card3d.classList.remove('selected-3d');
        radio2d.checked = true;
      }
      actualizarDescripcionModo();
    }

    function actualizarDescripcionModo() {
      if (appCurrentMode === '3d') {
        modeDescriptionBox.innerHTML = I18N[currentLang].modeDesc3D;
      } else {
        modeDescriptionBox.innerHTML = I18N[currentLang].modeDesc2D;
      }
    }

 function actualizarBadgeModo() {
      // 1. Actualiza el badge de la cabecera superior
      if (badgeModeIndicator) {
        if (appCurrentMode === '3d') {
          badgeModeIndicator.innerText = I18N[currentLang].badgeReal;
          badgeModeIndicator.style.borderColor = 'var(--accent)';
          badgeModeIndicator.style.color = 'var(--accent)';
          badgeModeIndicator.style.cursor = 'default';
        } else {
          badgeModeIndicator.innerText = I18N[currentLang].badge2D;
          badgeModeIndicator.style.borderColor = 'var(--accent-2d)';
          badgeModeIndicator.style.color = 'var(--accent-2d)';
          badgeModeIndicator.style.cursor = 'default';
        }
      }

      // 2. Actualiza el nuevo badge en la barra lateral (Configuración General)
      const sidebarBadge = document.getElementById('sidebarModeBadge');
      if (sidebarBadge) {
        sidebarBadge.style.cursor = 'default';
        if (appCurrentMode === '3d') {
          sidebarBadge.innerText = I18N[currentLang].sidebarBadgeReal;
          sidebarBadge.style.borderColor = 'var(--accent)';
          sidebarBadge.style.color = 'var(--accent)';
          sidebarBadge.style.background = 'rgba(59, 130, 246, 0.15)';
        } else {
          sidebarBadge.innerText = I18N[currentLang].sidebarBadge2D;
          sidebarBadge.style.borderColor = 'var(--accent-2d)';
          sidebarBadge.style.color = 'var(--accent-2d)';
          sidebarBadge.style.background = 'rgba(236, 72, 153, 0.15)';
        }
      }
    }
    function setupWelcomeModalEvents() {
      btnAcceptWelcomeMode.addEventListener('click', () => {
        welcomeModalOverlay.style.display = 'none';
        actualizarBadgeModo();
        pobladoDropdownCatalog();
      });
    }

    function reabrirSeleccionModo() {
      welcomeModalOverlay.style.display = 'flex';
      actualizarDescripcionModo();
    }

    function pobladoDropdownCatalog() {
      const catalogActual = (appCurrentMode === '3d') ? CATALOGO_MODULOS_3D : CATALOGO_MODULOS_2D;
      const grupos = {};
      
      catalogActual.forEach(m => {
        const catName = (typeof m.cat === 'object') ? (m.cat[currentLang] || m.cat['es']) : m.cat;
        if (!grupos[catName]) grupos[catName] = [];
        grupos[catName].push(m);
      });

      selectNuevoModulo.innerHTML = '';
      Object.keys(grupos).forEach(cat => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = cat;
        grupos[cat].forEach(m => {
          const opt = document.createElement('option');
          opt.value = m.id;
          opt.innerText = (typeof m.label === 'object') ? (m.label[currentLang] || m.label['es']) : m.label;
          optgroup.appendChild(opt);
        });
        selectNuevoModulo.appendChild(optgroup);
      });
    }

    function toggleControlsCollapse(idInstancia) {
      const panel = panelesActivos.find(p => p.idInstancia === idInstancia);
      if (panel) {
        panel.collapsed = !panel.collapsed;
        generarControlesUI();
      }
    }

    function toggleSourceCopy(idInstancia) {
      const idx = panelesActivos.findIndex(p => p.idInstancia === idInstancia);
      if (idx === -1) return;

      if (sourceCopyPanelIndex === idx) {
        sourceCopyPanelIndex = -1;
      } else {
        sourceCopyPanelIndex = idx;
      }
      generarControlesUI();
      renderAll();
    }

    function generarControlesUI() {
      activeModulesContainer.innerHTML = '';

      if (panelesActivos.length === 0) {
        activeModulesContainer.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:10px;">${I18N[currentLang].noModulesMsg}</p>`;
        return;
      }

      const t = I18N[currentLang];

      panelesActivos.forEach((panel, idx) => {
        const isLoaded = panel.img !== null;
        const isSource = sourceCopyPanelIndex === idx;
        const isSelected = selectedPanelIndex === idx;
        const labelText = (typeof panel.label === 'object') ? (panel.label[currentLang] || panel.label['es']) : panel.label;

        const cardHTML = `
          <div class="upload-card ${isLoaded ? 'loaded' : ''} ${isSource ? 'source-active' : ''}" 
               style="border-color:${isSelected ? 'var(--accent)' : ''}; margin-bottom:8px; cursor:pointer;" 
               onclick="seleccionarModuloDesdeSidebar(${idx})">
            <div class="upload-card-header" style="margin-bottom:0;">
              <span>${idx + 1}. ${labelText}</span>
              <div class="card-actions-top">
                <button class="btn-equal-ratio ${isSource ? 'active' : ''}" onclick="event.stopPropagation(); toggleSourceCopy(${panel.idInstancia})" title="Copiar Ratio y Tamaño">=</button>
                <small style="color:${isLoaded ? '#10b981' : 'var(--text-muted)'}; margin: 0 4px;">${isLoaded ? '✓' : t.emptyBadge}</small>
                <button class="btn-delete-module" onclick="event.stopPropagation(); eliminarModulo(${panel.idInstancia})" title="Eliminar Módulo">🗑️</button>
              </div>
            </div>
          </div>
        `;
        activeModulesContainer.insertAdjacentHTML('beforeend', cardHTML);
      });
    }

    // Permite seleccionar el módulo en el canvas al hacer clic en la lista lateral
    function seleccionarModuloDesdeSidebar(idx) {
      selectedPanelIndex = idx;
      renderAll();
      actualizarPosicionToolbarFlotante();
    }


    function getFormattedPrompt(panel) {
      let prompt = panel.promptTemplate;
      const val = (panel.customValue || '').trim();

      if (panel.modo === '2d') {
        if (val.startsWith('http')) {
          // Si el usuario pega una URL directa
          return prompt.replace(/--cref \[URL_FOTO\] --sref \[URL_FOTO\]/, `--cref ${val} --sref ${val}`);
        } else if (val.startsWith('--cref') || val.startsWith('--sref')) {
          // Si el usuario pega parámetros directos
          return prompt.replace(/--cref \[URL_FOTO\] --sref \[URL_FOTO\]/, val);
        } else if (val) {
          // Si el usuario escribe detalles adicionales (ej: "ojos verdes, bufanda roja")
          return prompt.replace(/--cref \[URL_FOTO\] --sref \[URL_FOTO\]/, `with ${val}, cel shading, flat colors`);
        }
        return prompt;
      }

      // Lógica de reemplazo para modo 3D / Realista
      switch(panel.tipo) {
        case 'busto_frente':
          if (val.startsWith('http') || val.startsWith('--cref')) {
            let crefStr = val.startsWith('--cref') ? val : `--cref ${val} --cw 100`;
            return `${prompt} ${crefStr}`;
          } else if (val) {
            return prompt.replace(/--ar/, `${val}, --ar`);
          }
          return prompt;

        case 'cuerpo_frente':
          let basePromptFrente = panel.promptTemplate;
          if (panel.includeHead) {
            // Si la casilla está activada: Prompt con cabeza incluida
            basePromptFrente = 'Full body front view looking directly forward, exact 1:1 physical clone of the character from reference photo, 100% identical facial features and body build. Neutral relaxed standing pose with both arms resting straight down at sides, tight vertical framing filling frame from top of head down to footwear. Millimetric fabric weave texture, seams, buttons, trousers fold, and footwear matching reference photo. 8K raw photo, neutral studio background --ar 9:16 --style raw --s 0 --no plastic, smooth skin, airbrushed, wax, CGI, 3D render';
          }
          return val ? basePromptFrente.replace(/--ar/, `${val}, --ar`) : basePromptFrente;

        case 'cuerpo_perfil':
        case 'pose_neutra_t':
          let basePose = panel.promptTemplate;
          if (!panel.includeHead && panel.tipo === 'cuerpo_perfil') {
            basePose = basePose.replace(/from the top of the head down to the boots/, 'from the collar seam down to the boots').replace(/--no /, '--no head, face, neck, ');
          }
          return val ? basePose.replace(/--ar/, `${val}, --ar`) : basePose;

        default:
          return val ? prompt.replace(/--ar/, `${val}, --ar`) : prompt;
      }
    }
    function abrirModalPrompt(panel) {
      modalActivePanel = panel;
      const idx = panelesActivos.findIndex(p => p.idInstancia === panel.idInstancia);
      const t = I18N[currentLang];
      const labelText = (typeof panel.label === 'object') ? (panel.label[currentLang] || panel.label['es']) : panel.label;
      const customLblText = (typeof panel.customLabel === 'object') ? (panel.customLabel[currentLang] || panel.customLabel['es']) : panel.customLabel;
      const usageTipText = (typeof panel.usageTip === 'object') ? (panel.usageTip[currentLang] || panel.usageTip['es']) : panel.usageTip;

      modalPromptTitle.innerText = `📷 ${idx + 1}. ${labelText}`;
      modalRatioText.innerText = `--ar ${panel.aspectRatioText}`;
      
      if (panel.modo === '2d') {
        modalQualityText.innerText = t.modalQuality2D;
      } else {
        modalQualityText.innerText = t.modalQuality3D;
      }

      modalCustomLabel.innerText = `${t.customAdjPrefix} ${customLblText}`;

      modalInputContainer.innerHTML = `
        <input type="text" class="input-text" style="margin-top:6px;" placeholder="${panel.customPlaceholder || ''}" value="${panel.customValue || ''}" oninput="actualizarValuePromptInModal(this.value)">
      `;

      modalHeadCheckboxContainer.innerHTML = '';
      if (panel.tipo === 'pose_neutra_t' || panel.tipo === 'cuerpo_perfil' || panel.tipo === 'cuerpo_frente') {
        modalHeadCheckboxContainer.innerHTML = `
          <div style="margin-top:8px; border-top:1px dashed rgba(255,255,255,0.1); padding-top:6px;">
            <label style="display:inline-flex; align-items:center; gap:6px; font-size:0.8rem; font-weight:700; color:var(--text-main); cursor:pointer;">
              <input type="checkbox" ${panel.includeHead ? 'checked' : ''} onchange="togglePoseHeadInModal(this.checked)" style="accent-color:var(--accent);"> ${t.includeHeadLbl}
            </label>
          </div>
        `;
      }

      modalBtnRestore.style.display = panel.customValue ? 'inline-block' : 'none';
      modalPromptText.innerText = getFormattedPrompt(panel);
      modalUsageTip.innerHTML = `💡 <strong>${t.customAdjPrefix.replace(':', '')}:</strong> ${usageTipText}`;

      promptModalOverlay.style.display = 'flex';
    }

    function cerrarModalPrompt() {
      promptModalOverlay.style.display = 'none';
      modalActivePanel = null;
    }

    function actualizarValuePromptInModal(val) {
      if (modalActivePanel) {
        modalActivePanel.customValue = val;
        modalPromptText.innerText = getFormattedPrompt(modalActivePanel);
        modalBtnRestore.style.display = val ? 'inline-block' : 'none';
      }
    }

    function togglePoseHeadInModal(checked) {
      if (modalActivePanel) {
        modalActivePanel.includeHead = checked;
        modalPromptText.innerText = getFormattedPrompt(modalActivePanel);
      }
    }

    function restaurarPromptInModal() {
      if (modalActivePanel) {
        modalActivePanel.customValue = '';
        abrirModalPrompt(modalActivePanel);
      }
    }

    btnAgregarModulo.addEventListener('click', () => {
	 guardarEstadoParaUndo(); //
      const id = selectNuevoModulo.value;
      const catalogActual = (appCurrentMode === '3d') ? CATALOGO_MODULOS_3D : CATALOGO_MODULOS_2D;
      const def = catalogActual.find(m => m.id === id);
      
      if (def) {
        const nuevoPanel = {
          idInstancia: Date.now() + Math.random(),
          tipo: id,
          modo: appCurrentMode,
          label: def.label,
          aspectRatioText: def.aspectRatioText,
          aspectRatioNum: def.aspectRatioNum,
          promptTemplate: def.promptTemplate,
          usageTip: def.usageTip,
          customLabel: def.customLabel,
          customPlaceholder: def.customPlaceholder,
          explanationText: def.explanationText || 'Explicación del módulo en la hoja de personaje.',
          customValue: '',
          includeHead: id === 'cuerpo_perfil' ? true : false,
          img: null,
          zoom: 1.0,
          panX: 0,
          panY: 0,
          collapsed: true,
          geo: { x: 100, y: 100, w: Math.round(800 * def.aspectRatioNum), h: 800 }
        };
        panelesActivos.push(nuevoPanel);

        generarControlesUI();
        renderAll();
      }
    });

    function eliminarModulo(idInstancia) {
     guardarEstadoParaUndo(); // 👈 Añade esta línea
      const idx = panelesActivos.findIndex(p => p.idInstancia === idInstancia);
      if (sourceCopyPanelIndex === idx) sourceCopyPanelIndex = -1;
      else if (sourceCopyPanelIndex > idx) sourceCopyPanelIndex--;

      panelesActivos = panelesActivos.filter(p => p.idInstancia !== idInstancia);
      generarControlesUI();
      renderAll();
    }

    function cargarImagenModulo(e, idInstancia) {
      const file = e.target.files[0];
      if (file) {
        const panel = panelesActivos.find(p => p.idInstancia === idInstancia);
        if (panel) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
              panel.img = img;
              panel.zoom = 1.0;
              panel.panX = 0;
              panel.panY = 0;
              generarControlesUI();
              renderAll();
            };
            img.src = event.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    }

    function actualizarControlModulo(idInstancia, propiedad, valor) {
      const panel = panelesActivos.find(p => p.idInstancia === idInstancia);
      if (panel) {
        panel[propiedad] = parseFloat(valor);

        if (propiedad === 'zoom') {
          const zoomSpan = document.getElementById(`val-zoom-${idInstancia}`);
          if (zoomSpan) zoomSpan.innerText = `${panel.zoom.toFixed(2)}x`;
        } else if (propiedad === 'panX') {
          const panXSpan = document.getElementById(`val-panX-${idInstancia}`);
          if (panXSpan) panXSpan.innerText = Math.round(panel.panX);
        } else if (propiedad === 'panY') {
          const panYSpan = document.getElementById(`val-panY-${idInstancia}`);
          if (panYSpan) panYSpan.innerText = Math.round(panel.panY);
        }

        renderAll();
      }
    }

    function copyPromptText(btn, elementId) {
      const textToCopy = document.getElementById(elementId).innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = I18N[currentLang].btnCopied;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
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
      if (inputManualGap) inputManualGap.value = gap;

      document.getElementById('val-guide-eye').innerText = guideEyeY + "px";
      document.getElementById('val-guide-chin').innerText = guideChinY + "px";

      sliderGuideEye.value = guideEyeY;
      sliderGuideChin.value = guideChinY;
      sliderGuideMove.value = center;
    }

    function aplicarGapManual() {
      const newGap = parseInt(inputManualGap.value);
      if (!isNaN(newGap) && newGap > 10) {
        guideChinY = guideEyeY + newGap;
        updateCaliperUI();
        renderAll();
      }
    }

    function mostrarAyudaModulo(panel, clientX, clientY) {
      const titleText = (typeof panel.label === 'object') ? (panel.label[currentLang] || panel.label['es']) : panel.label;
      const bodyText = (typeof panel.explanationText === 'object') ? (panel.explanationText[currentLang] || panel.explanationText['es']) : panel.explanationText;

      helpTitle.innerText = titleText;
      helpBody.innerText = bodyText || 'Este módulo sirve como referencia fisonómica y técnica para la Hoja del personaje.';
      
      floatingHelpPopup.style.display = 'block';

      let popupW = 340;
      let popupH = 180;
      let x = clientX + 15;
      let y = clientY + 15;

      if (x + popupW > window.innerWidth) x = window.innerWidth - popupW - 20;
      if (y + popupH > window.innerHeight) y = window.innerHeight - popupH - 20;

      floatingHelpPopup.style.left = `${Math.max(10, x)}px`;
      floatingHelpPopup.style.top = `${Math.max(10, y)}px`;
    }

    function cerrarAyudaModulo() {
      floatingHelpPopup.style.display = 'none';
    }

    function renderCanvas(targetCtx, renderW, renderH, isExport = false) {
      const scaleFactor = renderW / MASTER_W;

      targetCtx.fillStyle = bgColorInput.value;
      targetCtx.fillRect(0, 0, renderW, renderH);

      panelesActivos.forEach((panel, idx) => {
        const geo = panel.geo;
        const px = geo.x * scaleFactor;
        const py = geo.y * scaleFactor;
        const pw = geo.w * scaleFactor;
        const ph = geo.h * scaleFactor;
        const labelText = (typeof panel.label === 'object') ? (panel.label[currentLang] || panel.label['es']) : panel.label;

        targetCtx.save();
        targetCtx.beginPath();
        targetCtx.rect(px, py, pw, ph);
        targetCtx.clip();

        if (panel.img) {
          const imgRatio = panel.img.width / panel.img.height;
          const boxRatio = pw / ph;
          let drawW, drawH;

          if (imgRatio > boxRatio) {
            drawH = ph * panel.zoom;
            drawW = drawH * imgRatio;
          } else {
            drawW = pw * panel.zoom;
            drawH = drawW / imgRatio;
          }

          const centerX = px + pw / 2 + (panel.panX * scaleFactor);
          const centerY = py + ph / 2 + (panel.panY * scaleFactor);
          const drawX = centerX - drawW / 2;
          const drawY = centerY - drawH / 2;

          targetCtx.drawImage(panel.img, drawX, drawY, drawW, drawH);
        } else {
          targetCtx.fillStyle = "#1e2026";
          targetCtx.fillRect(px, py, pw, ph);
          if (!isExport) {
            targetCtx.fillStyle = "#6b7280";
            targetCtx.font = `${Math.round(14 * scaleFactor)}px sans-serif`;
            targetCtx.textAlign = "center";
            targetCtx.textBaseline = "middle";
            targetCtx.fillText(labelText, px + pw / 2, py + ph / 2);
          }
        }

        if (sourceCopyPanelIndex === idx && !isExport) {
          targetCtx.fillStyle = "rgba(239, 68, 68, 0.4)";
          targetCtx.fillRect(px, py, pw, ph);
        }

        targetCtx.restore();

        if (!isExport) {
          const isSource = sourceCopyPanelIndex === idx;
          targetCtx.strokeStyle = isSource ? "#ef4444" : ((selectedPanelIndex === idx) ? "#3b82f6" : "rgba(255, 255, 255, 0.3)");
          targetCtx.lineWidth = isSource ? Math.max(3, 5 * scaleFactor) : ((selectedPanelIndex === idx) ? Math.max(2, 4 * scaleFactor) : Math.max(1, 2 * scaleFactor));
          targetCtx.strokeRect(px, py, pw, ph);

          targetCtx.save();
          const dimFontSize = Math.max(10, Math.round(18 * scaleFactor));
          targetCtx.font = `600 ${dimFontSize}px monospace, sans-serif`;
          const dimText = `${Math.round(geo.w)}x${Math.round(geo.h)} px`;
          const textMetrics = targetCtx.measureText(dimText);
          const textWidth = textMetrics.width;
          const padX = 6 * scaleFactor;
          const padY = 4 * scaleFactor;
          const badgeX = px + (6 * scaleFactor);
          const badgeY = py + (6 * scaleFactor);

          targetCtx.fillStyle = "rgba(0, 0, 0, 0.75)";
          targetCtx.fillRect(badgeX, badgeY, textWidth + (padX * 2), dimFontSize + (padY * 2));

          targetCtx.fillStyle = "#ffffff";
          targetCtx.textAlign = "left";
          targetCtx.textBaseline = "top";
          targetCtx.fillText(dimText, badgeX + padX, badgeY + padY);
          targetCtx.restore();

          const btnSize = Math.max(18, 28 * scaleFactor);
          const btnEqualX = px + pw - btnSize - (6 * scaleFactor);
          const btnY = py + (6 * scaleFactor);
          const btnHelpX = btnEqualX - btnSize - (6 * scaleFactor);

          // BOTÓN DE AYUDA (?)
          targetCtx.fillStyle = "rgba(30, 32, 38, 0.9)";
          targetCtx.fillRect(btnHelpX, btnY, btnSize, btnSize);
          targetCtx.strokeStyle = "rgba(59, 130, 246, 0.8)";
          targetCtx.lineWidth = 1.5 * scaleFactor;
          targetCtx.strokeRect(btnHelpX, btnY, btnSize, btnSize);

          targetCtx.fillStyle = "#3b82f6";
          targetCtx.font = `800 ${Math.round(btnSize * 0.65)}px sans-serif`;
          targetCtx.textAlign = "center";
          targetCtx.textBaseline = "middle";
          targetCtx.fillText("?", btnHelpX + btnSize / 2, btnY + btnSize / 2);

          // BOTÓN DE RATIO (=)
          targetCtx.fillStyle = isSource ? "#ef4444" : "rgba(30, 32, 38, 0.85)";
          targetCtx.fillRect(btnEqualX, btnY, btnSize, btnSize);
          targetCtx.strokeStyle = isSource ? "#ffffff" : "rgba(255, 255, 255, 0.5)";
          targetCtx.lineWidth = 1.5 * scaleFactor;
          targetCtx.strokeRect(btnEqualX, btnY, btnSize, btnSize);

          targetCtx.fillStyle = "#ffffff";
          targetCtx.font = `700 ${Math.round(btnSize * 0.65)}px sans-serif`;
          targetCtx.textAlign = "center";
          targetCtx.textBaseline = "middle";
          targetCtx.fillText("=", btnEqualX + btnSize / 2, btnY + btnSize / 2);

          // BOTONES INFERIORES APILADOS VERTICALMENTE (UNO SOBRE OTRO)
          const btnH = Math.max(18, Math.round(22 * scaleFactor));
          const btnW = Math.max(85, Math.min(pw * 0.72, Math.round(120 * scaleFactor)));
          const btnGap = Math.max(3, Math.round(4 * scaleFactor));
          const bottomPad = Math.max(4, Math.round(6 * scaleFactor));

          const btnX = px + (pw / 2) - (btnW / 2); // Centrado horizontal
          const btnPromptY = py + ph - btnH - bottomPad; // Botón inferior (abajo)
          const btnOpcionesY = btnPromptY - btnH - btnGap; // Botón superior (arriba)

          // 1. BOTÓN SUPERIOR: [ ⚙️ OPCIONES ]
          const isModuleActiveInToolbar = (selectedPanelIndex === idx && moduleFloatingToolbar && moduleFloatingToolbar.style.display === 'flex');
          targetCtx.fillStyle = isModuleActiveInToolbar ? "rgba(59, 130, 246, 0.95)" : "rgba(24, 26, 32, 0.92)";
          targetCtx.fillRect(btnX, btnOpcionesY, btnW, btnH);
          targetCtx.strokeStyle = isModuleActiveInToolbar ? "#ffffff" : "rgba(59, 130, 246, 0.85)";
          targetCtx.lineWidth = 1.5 * scaleFactor;
          targetCtx.strokeRect(btnX, btnOpcionesY, btnW, btnH);

          targetCtx.fillStyle = "#ffffff";
          targetCtx.font = `700 ${Math.round(btnH * 0.48)}px sans-serif`;
          targetCtx.textAlign = "center";
          targetCtx.textBaseline = "middle";
          targetCtx.fillText(I18N[currentLang].btnOptionsText || "⚙️ OPCIONES", btnX + btnW / 2, btnOpcionesY + btnH / 2);

          // 2. BOTÓN INFERIOR: [ PROMPT IA ]
          targetCtx.fillStyle = (panel.modo === '2d') ? "rgba(236, 72, 153, 0.92)" : "rgba(24, 26, 32, 0.92)";
          targetCtx.fillRect(btnX, btnPromptY, btnW, btnH);
          targetCtx.strokeStyle = (panel.modo === '2d') ? "#ffffff" : "rgba(59, 130, 246, 0.85)";
          targetCtx.lineWidth = 1.5 * scaleFactor;
          targetCtx.strokeRect(btnX, btnPromptY, btnW, btnH);

          targetCtx.fillStyle = "#ffffff";
          targetCtx.font = `700 ${Math.round(btnH * 0.48)}px sans-serif`;
          targetCtx.textAlign = "center";
          targetCtx.textBaseline = "middle";
          targetCtx.fillText("PROMPT IA", btnX + btnW / 2, btnPromptY + btnH / 2);
        }
      });

      if (!isExport && chkShowGrid && chkShowGrid.checked) {
        targetCtx.save();
        targetCtx.strokeStyle = "rgba(255, 255, 255, 0.18)";
        targetCtx.lineWidth = Math.max(1, 1 * scaleFactor);
        const gridStep = 50 * scaleFactor;

        targetCtx.beginPath();
        for (let x = gridStep; x < renderW; x += gridStep) {
          targetCtx.moveTo(x, 0);
          targetCtx.lineTo(x, renderH);
        }
        for (let y = gridStep; y < renderH; y += gridStep) {
          targetCtx.moveTo(0, y);
          targetCtx.lineTo(renderW, y);
        }
        targetCtx.stroke();
        targetCtx.restore();
      }

      /* CALIBRE CON LÍNEAS MARCADAS Y CÍRCULOS EXTREMOS */
      if (showGuides && !isExport) {
        targetCtx.save();
        const calLineWidth = Math.max(4, 6 * scaleFactor);
        const circleRadius = calLineWidth * 2;

        const eyeY = guideEyeY * scaleFactor;
        targetCtx.strokeStyle = "rgba(239, 68, 68, 1)";
        targetCtx.lineWidth = calLineWidth;
        targetCtx.setLineDash([10 * scaleFactor, 5 * scaleFactor]);
        
        targetCtx.beginPath();
        targetCtx.moveTo(0, eyeY);
        targetCtx.lineTo(renderW, eyeY);
        targetCtx.stroke();
        targetCtx.setLineDash([]);

        targetCtx.fillStyle = "#ef4444";
        targetCtx.beginPath();
        targetCtx.arc(circleRadius, eyeY, circleRadius, 0, Math.PI * 2);
        targetCtx.arc(renderW - circleRadius, eyeY, circleRadius, 0, Math.PI * 2);
        targetCtx.fill();

        const chinY = guideChinY * scaleFactor;
        targetCtx.strokeStyle = "rgba(59, 130, 246, 1)";
        targetCtx.lineWidth = calLineWidth;
        targetCtx.setLineDash([10 * scaleFactor, 5 * scaleFactor]);

        targetCtx.beginPath();
        targetCtx.moveTo(0, chinY);
        targetCtx.lineTo(renderW, chinY);
        targetCtx.stroke();
        targetCtx.setLineDash([]);

        targetCtx.fillStyle = "#3b82f6";
        targetCtx.beginPath();
        targetCtx.arc(circleRadius, chinY, circleRadius, 0, Math.PI * 2);
        targetCtx.arc(renderW - circleRadius, chinY, circleRadius, 0, Math.PI * 2);
        targetCtx.fill();

        targetCtx.restore();
      }

      /* LÍNEAS DE ALINEACIÓN INTELIGENTE NEÓN AMARILLAS */
      if (!isExport && activeSnapLines.length > 0) {
        targetCtx.save();
        targetCtx.strokeStyle = "#ffe600";
        targetCtx.lineWidth = Math.max(1.5, 2.5 * scaleFactor);
        targetCtx.shadowColor = "#ffe600";
        targetCtx.shadowBlur = 10 * scaleFactor;

        activeSnapLines.forEach(line => {
          targetCtx.beginPath();
          if (line.type === 'h') {
            const ly = line.val * scaleFactor;
            targetCtx.moveTo(0, ly);
            targetCtx.lineTo(renderW, ly);
          } else if (line.type === 'v') {
            const lx = line.val * scaleFactor;
            targetCtx.moveTo(lx, 0);
            targetCtx.lineTo(lx, renderH);
          }
          targetCtx.stroke();
        });
        targetCtx.restore();
      }

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
actualizarPosicionToolbarFlotante();
    }
// Función para cambiar rápidamente el color de fondo desde los botones
    function establecerColorLienzo(hexColor) {
      guardarEstadoParaUndo();
      const inputBg = document.getElementById('bgColor');
      if (inputBg) {
        inputBg.value = hexColor;
        renderAll();
      }
    }

    function setupEventListeners() {
      btnCloseHelp.addEventListener('click', cerrarAyudaModulo);
      btnClosePromptModal.addEventListener('click', cerrarModalPrompt);

      promptModalOverlay.addEventListener('click', (e) => {
        if (e.target === promptModalOverlay) {
          cerrarModalPrompt();
        }
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          cerrarAyudaModulo();
          cerrarModalPrompt();
        }
      });

      window.addEventListener('click', (e) => {
        if (floatingHelpPopup.style.display === 'block') {
          const rect = floatingHelpPopup.getBoundingClientRect();
          const inPopup = (e.clientX >= rect.left && e.clientX <= rect.right &&
                           e.clientY >= rect.top && e.clientY <= rect.bottom);
          
          const inCanvas = e.target === previewCanvas;
          if (!inPopup && !inCanvas) {
            cerrarAyudaModulo();
          }
        }
      });

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

      sliderGuideMove.addEventListener('input', (e) => {
        const newCenter = parseInt(e.target.value);
        const currentGap = guideChinY - guideEyeY;
        
        guideEyeY = Math.round(newCenter - (currentGap / 2));
        guideChinY = guideEyeY + currentGap;

        updateCaliperUI();
        renderAll();
      });

      btnSetManualGap.addEventListener('click', aplicarGapManual);
      inputManualGap.addEventListener('change', aplicarGapManual);

      btnToggleGuides.addEventListener('click', () => {
        showGuides = !showGuides;
        guidesPanel.classList.toggle('active', showGuides);
        btnToggleGuides.style.backgroundColor = showGuides ? "rgba(239, 68, 68, 0.25)" : "";
        btnToggleGuides.style.borderColor = showGuides ? "#ef4444" : "";
        renderAll();
      });

      chkShowGrid.addEventListener('change', renderAll);

      [charNameInput, textPosSelect, textOpacityInput, bgColorInput].forEach(el => {
        el.addEventListener('input', renderAll);
      });

      previewCanvas.addEventListener('mousedown', (e) => {
        const rect = previewCanvas.getBoundingClientRect();
        const scaleFactor = previewCanvas.width / MASTER_W;
        const mouseX = (e.clientX - rect.left) / scaleFactor;
        const mouseY = (e.clientY - rect.top) / scaleFactor;

        selectedPanelIndex = -1;
        interactionMode = null;
        activeSnapLines = [];

        for (let i = panelesActivos.length - 1; i >= 0; i--) {
          const g = panelesActivos[i].geo;
          const handleMargin = 35;
          const btnSize = Math.max(18, 28 * scaleFactor) / scaleFactor;

          const btnEqualX = g.x + g.w - btnSize - 6;
          const btnY = g.y + 6;
          const btnHelpX = btnEqualX - btnSize - 6;

// Medidas proporcionales de los 2 botones apilados verticalmente
          const btnH = Math.max(18, Math.round(22 * scaleFactor)) / scaleFactor;
          const btnW = Math.max(85, Math.min(g.w * 0.72 * scaleFactor, Math.round(120 * scaleFactor))) / scaleFactor;
          const btnGap = Math.max(3, Math.round(4 * scaleFactor)) / scaleFactor;
          const bottomPad = Math.max(4, Math.round(6 * scaleFactor)) / scaleFactor;

          const btnX = g.x + (g.w / 2) - (btnW / 2); // Centrado horizontal
          const btnPromptY = g.y + g.h - btnH - bottomPad; // Botón abajo (PROMPT IA)
          const btnOpcionesY = btnPromptY - btnH - btnGap; // Botón arriba (OPCIONES)

          // 1. Clic en botón superior "⚙️ OPCIONES"
          const inOpcionesBtn = (mouseX >= btnX && mouseX <= btnX + btnW &&
                                 mouseY >= btnOpcionesY && mouseY <= btnOpcionesY + btnH);

          if (inOpcionesBtn) {
            selectedPanelIndex = i;
            abrirToolbarFlotanteParaModulo(i);
            renderAll();
            return;
          }

          // 2. Clic en botón inferior "PROMPT IA"
          const inPromptBtn = (mouseX >= btnX && mouseX <= btnX + btnW &&
                               mouseY >= btnPromptY && mouseY <= btnPromptY + btnH);

          if (inPromptBtn) {
            abrirModalPrompt(panelesActivos[i]);
            return;
          }
          const inHelpBtn = (mouseX >= btnHelpX && mouseX <= btnHelpX + btnSize &&
                             mouseY >= btnY && mouseY <= btnY + btnSize);

          if (inHelpBtn) {
            mostrarAyudaModulo(panelesActivos[i], e.clientX, e.clientY);
            return;
          }

          const inEqualsBtn = (mouseX >= btnEqualX && mouseX <= btnEqualX + btnSize &&
                               mouseY >= btnY && mouseY <= btnY + btnSize);

          if (inEqualsBtn) {
            toggleSourceCopy(panelesActivos[i].idInstancia);
            return;
          }

          const inResizeZone = (mouseX >= g.x + g.w - handleMargin && mouseX <= g.x + g.w + 10 &&
                                mouseY >= g.y + g.h - handleMargin && mouseY <= g.y + g.h + 10);

          if (inResizeZone) {
  guardarEstadoParaUndo(); // 📸 Guarda cómo medía antes de que lo estires
            selectedPanelIndex = i;
            interactionMode = 'resize';
            dragStartX = mouseX;
            dragStartY = mouseY;
            initialGeo = { ...g };
            break;
          }

          const inBoxZone = (mouseX >= g.x && mouseX <= g.x + g.w &&
                             mouseY >= g.y && mouseY <= g.y + g.h);

          if (inBoxZone) {
  guardarEstadoParaUndo(); // 📸 Guarda la posición exacta antes de que la muevas
            if (sourceCopyPanelIndex !== -1 && sourceCopyPanelIndex !== i) {
              const src = panelesActivos[sourceCopyPanelIndex];
              const target = panelesActivos[i];

              target.aspectRatioNum = src.aspectRatioNum;
              target.aspectRatioText = src.aspectRatioText;
              target.geo.w = src.geo.w;
              target.geo.h = src.geo.h;

              target.promptTemplate = target.promptTemplate.replace(/--ar\s+[0-9]+:[0-9]+/, `--ar ${src.aspectRatioText}`);

              target.geo.x = Math.max(0, Math.min(MASTER_W - target.geo.w, target.geo.x));
              target.geo.y = Math.max(0, Math.min(MASTER_H - target.geo.h, target.geo.y));

              sourceCopyPanelIndex = -1;
              generarControlesUI();
              renderAll();
              return;
            }

            selectedPanelIndex = i;
            interactionMode = 'drag';
            dragStartX = mouseX;
            dragStartY = mouseY;
            initialGeo = { ...g };
            
            // Si arrastramos otro módulo, cerramos la barra flotante anterior
            if (isToolbarOpen && selectedPanelIndex !== i) {
              cerrarToolbarFlotante();
            }
            break;
          }
        }

        renderAll();
      });

      window.addEventListener('mousemove', (e) => {
        if (selectedPanelIndex !== -1 && interactionMode) {
          const rect = previewCanvas.getBoundingClientRect();
          const scaleFactor = previewCanvas.width / MASTER_W;
          const mouseX = (e.clientX - rect.left) / scaleFactor;
          const mouseY = (e.clientY - rect.top) / scaleFactor;

          const dx = mouseX - dragStartX;
          const dy = mouseY - dragStartY;

          const p = panelesActivos[selectedPanelIndex];
          activeSnapLines = [];

          if (interactionMode === 'drag') {
            let targetX = Math.max(0, Math.min(MASTER_W - p.geo.w, Math.round(initialGeo.x + dx)));
            let targetY = Math.max(0, Math.min(MASTER_H - p.geo.h, Math.round(initialGeo.y + dy)));

            const SNAP_THRESHOLD = 12;
            
            const curLeft = targetX;
            const curCenterX = targetX + p.geo.w / 2;
            const curRight = targetX + p.geo.w;

            const curTop = targetY;
            const curCenterY = targetY + p.geo.h / 2;
            const curBottom = targetY + p.geo.h;

            const canvasCenterX = MASTER_W / 2;
            const canvasCenterY = MASTER_H / 2;

            if (Math.abs(curCenterX - canvasCenterX) < SNAP_THRESHOLD) {
              targetX = canvasCenterX - p.geo.w / 2;
              activeSnapLines.push({ type: 'v', val: canvasCenterX });
            }
            if (Math.abs(curCenterY - canvasCenterY) < SNAP_THRESHOLD) {
              targetY = canvasCenterY - p.geo.h / 2;
              activeSnapLines.push({ type: 'h', val: canvasCenterY });
            }

            panelesActivos.forEach((other, oIdx) => {
              if (oIdx === selectedPanelIndex) return;
              const og = other.geo;
              const oLeft = og.x;
              const oCenterX = og.x + og.w / 2;
              const oRight = og.x + og.w;

              const oTop = og.y;
              const oCenterY = og.y + og.h / 2;
              const oBottom = og.y + og.h;

              if (Math.abs(curTop - oTop) < SNAP_THRESHOLD) {
                targetY = oTop;
                activeSnapLines.push({ type: 'h', val: oTop });
              } else if (Math.abs(curBottom - oBottom) < SNAP_THRESHOLD) {
                targetY = oBottom - p.geo.h;
                activeSnapLines.push({ type: 'h', val: oBottom });
              } else if (Math.abs(curCenterY - oCenterY) < SNAP_THRESHOLD) {
                targetY = oCenterY - p.geo.h / 2;
                activeSnapLines.push({ type: 'h', val: oCenterY });
              } else if (Math.abs(curTop - oBottom) < SNAP_THRESHOLD) {
                targetY = oBottom;
                activeSnapLines.push({ type: 'h', val: oBottom });
              } else if (Math.abs(curBottom - oTop) < SNAP_THRESHOLD) {
                targetY = oTop - p.geo.h;
                activeSnapLines.push({ type: 'h', val: oTop });
              }

              if (Math.abs(curLeft - oLeft) < SNAP_THRESHOLD) {
                targetX = oLeft;
                activeSnapLines.push({ type: 'v', val: oLeft });
              } else if (Math.abs(curRight - oRight) < SNAP_THRESHOLD) {
                targetX = oRight - p.geo.w;
                activeSnapLines.push({ type: 'v', val: oRight });
              } else if (Math.abs(curCenterX - oCenterX) < SNAP_THRESHOLD) {
                targetX = oCenterX - p.geo.w / 2;
                activeSnapLines.push({ type: 'v', val: oCenterX });
              } else if (Math.abs(curLeft - oRight) < SNAP_THRESHOLD) {
                targetX = oRight;
                activeSnapLines.push({ type: 'v', val: oRight });
              } else if (Math.abs(curRight - oLeft) < SNAP_THRESHOLD) {
                targetX = oLeft - p.geo.w;
                activeSnapLines.push({ type: 'v', val: oLeft });
              }
            });

            p.geo.x = targetX;
            p.geo.y = targetY;

          } else if (interactionMode === 'resize') {
            const AR = p.aspectRatioNum || 1;
            let targetW = initialGeo.w + dx;

            let maxW = MASTER_W - p.geo.x;
            targetW = Math.max(100, Math.min(maxW, targetW));

            let targetH = Math.round(targetW / AR);
            let maxH = MASTER_H - p.geo.y;

            if (targetH > maxH) {
              targetH = maxH;
              targetW = Math.round(targetH * AR);
            }

            p.geo.w = targetW;
            p.geo.h = targetH;
          }

          generarControlesUI();
          renderAll();
        }
      });

      window.addEventListener('mouseup', () => {
        interactionMode = null;
        activeSnapLines = [];
        renderAll();
      });

      previewCanvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = previewCanvas.getBoundingClientRect();
        const scaleFactor = previewCanvas.width / MASTER_W;
        const mouseX = (e.clientX - rect.left) / scaleFactor;
        const mouseY = (e.clientY - rect.top) / scaleFactor;

        const index = panelesActivos.findIndex(p => 
          mouseX >= p.geo.x && mouseX <= p.geo.x + p.geo.w &&
          mouseY >= p.geo.y && mouseY <= p.geo.y + p.geo.h
        );

        if (index !== -1 && panelesActivos[index].img) {
          const zoomFactor = e.deltaY < 0 ? 1.05 : 0.95;
          panelesActivos[index].zoom = Math.max(0.5, Math.min(3.0, panelesActivos[index].zoom * zoomFactor));
          generarControlesUI();
          renderAll();
        }
      }, { passive: false });

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

// =======================================================
    // LÓGICA DE LA BARRA FLOTANTE CONTEXTUAL BLINDADA
    // =======================================================
    const moduleFloatingToolbar = document.getElementById('moduleFloatingToolbar');
    const floatingTransformPopover = document.getElementById('floatingTransformPopover');
    const sliderFloatZoom = document.getElementById('sliderFloatZoom');
    const sliderFloatPanX = document.getElementById('sliderFloatPanX');
    const sliderFloatPanY = document.getElementById('sliderFloatPanY');
    const valFloatZoom = document.getElementById('val-float-zoom');
    const valFloatPanX = document.getElementById('val-float-panX');
    const valFloatPanY = document.getElementById('val-float-panY');

    // Variable que asegura que la barra NO se abra sola
    let isToolbarOpen = false;
let isDraggingToolbar = false;
    let toolbarOffset = { x: 0, y: 0 };
    let hasCustomToolbarPos = false; // Indica si el usuario la movió manualmente

    // 1. Abre o cierra la barra flotante al pulsar el botón "⚙️ OPCIONES"
function abrirToolbarFlotanteParaModulo(idx) {
      if (isToolbarOpen && selectedPanelIndex === idx) {
        cerrarToolbarFlotante();
        return;
      }
      selectedPanelIndex = idx;
      isToolbarOpen = true;
      hasCustomToolbarPos = false; // Vuelve a centrarse sobre el módulo
      actualizarPosicionToolbarFlotante();
      renderAll();
    }

    // 2. Cierra la barra flotante al pulsar el botón "✕"
    function cerrarToolbarFlotante() {
      isToolbarOpen = false;
      if (moduleFloatingToolbar) moduleFloatingToolbar.style.display = 'none';
      if (floatingTransformPopover) floatingTransformPopover.classList.remove('active');
      renderAll();
    }

    // 3. Posiciona la barra arriba (o abajo si está muy cerca del borde superior)
    function actualizarPosicionToolbarFlotante() {
      if (!moduleFloatingToolbar) return;

      if (!isToolbarOpen || selectedPanelIndex === -1 || !panelesActivos[selectedPanelIndex]) {
        moduleFloatingToolbar.style.display = 'none';
        floatingTransformPopover.classList.remove('active');
        return;
      }

      const p = panelesActivos[selectedPanelIndex];

      // Si el usuario no la ha movido manualmente, se calcula arriba del módulo
      if (!hasCustomToolbarPos) {
        const scaleFactor = previewCanvas.width / MASTER_W;
        const canvasW = previewCanvas.width;
        const canvasH = previewCanvas.height;
        const toolbarW = 240;
        const toolbarH = 42;

        let targetX = (p.geo.x + p.geo.w / 2) * scaleFactor;
        let targetY = (p.geo.y * scaleFactor) - (toolbarH / 2) - 12;

        if (targetY < 40) {
          targetY = (p.geo.y + p.geo.h) * scaleFactor + (toolbarH / 2) + 12;
        }

        targetX = Math.max(toolbarW / 2 + 10, Math.min(canvasW - (toolbarW / 2) - 10, targetX));
        targetY = Math.max(toolbarH / 2 + 5, Math.min(canvasH - (toolbarH / 2) - 5, targetY));

        moduleFloatingToolbar.style.left = `${Math.round(targetX)}px`;
        moduleFloatingToolbar.style.top = `${Math.round(targetY)}px`;
      }

      moduleFloatingToolbar.style.display = 'flex';

      sliderFloatZoom.value = p.zoom;
      sliderFloatPanX.value = p.panX;
      sliderFloatPanY.value = p.panY;
      valFloatZoom.innerText = `${p.zoom.toFixed(2)}x`;
      valFloatPanX.innerText = Math.round(p.panX);
      valFloatPanY.innerText = Math.round(p.panY);
    }
    // 4. Abre o cierra la tarjetita con los 3 deslizadores al pulsar "🔍 Encuadre"
    function toggleTransformPopover(e) {
      if (e) e.stopPropagation();
      floatingTransformPopover.classList.toggle('active');
    }

    // 5. Modifica el Zoom o Paneo en tiempo real cuando mueves una barra
    function actualizarFloatControl(propiedad, valor) {
      if (selectedPanelIndex === -1 || !panelesActivos[selectedPanelIndex]) return;
      const p = panelesActivos[selectedPanelIndex];
      p[propiedad] = parseFloat(valor);

      if (propiedad === 'zoom') valFloatZoom.innerText = `${p.zoom.toFixed(2)}x`;
      else if (propiedad === 'panX') valFloatPanX.innerText = Math.round(p.panX);
      else if (propiedad === 'panY') valFloatPanY.innerText = Math.round(p.panY);

      renderAll();
      generarControlesUI();
    }

    // 6. Carga o reemplaza la foto del módulo al pulsar "🖼️ Foto"
    function cargarImagenDesdeToolbar(e) {
      const file = e.target.files[0];
      if (file && selectedPanelIndex !== -1 && panelesActivos[selectedPanelIndex]) {
       guardarEstadoParaUndo(); // 👈 Añade esta línea
        const panel = panelesActivos[selectedPanelIndex];
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            panel.img = img;
            panel.zoom = 1.0;
            panel.panX = 0;
            panel.panY = 0;
            renderAll();
            generarControlesUI();
            actualizarPosicionToolbarFlotante();
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
      e.target.value = '';
    }

    // 7. Elimina el módulo al pulsar el botón "🗑️"
    function eliminarModuloSeleccionado() {
      if (selectedPanelIndex === -1 || !panelesActivos[selectedPanelIndex]) return;
      const id = panelesActivos[selectedPanelIndex].idInstancia;
      eliminarModulo(id);
      cerrarToolbarFlotante();
    }

// ==========================================
    // MOTOR DE ARRASTRE LIBRE DE LA BARRA FLOTANTE
    // ==========================================
    const btnFloatDragHandle = document.getElementById('btnFloatDragHandle');

    if (btnFloatDragHandle) {
      btnFloatDragHandle.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        e.preventDefault();
        isDraggingToolbar = true;
        hasCustomToolbarPos = true;
        btnFloatDragHandle.style.cursor = 'grabbing';

        const rect = moduleFloatingToolbar.getBoundingClientRect();
        toolbarOffset.x = e.clientX - rect.left - (rect.width / 2);
        toolbarOffset.y = e.clientY - rect.top - (rect.height / 2);
      });
    }

    window.addEventListener('mousemove', (e) => {
      if (!isDraggingToolbar || !moduleFloatingToolbar) return;

      const wrapper = document.getElementById('canvasWrapper');
      const wrapperRect = wrapper.getBoundingClientRect();

      // Calcula la posición dentro del contenedor del lienzo
      const x = e.clientX - wrapperRect.left - toolbarOffset.x;
      const y = e.clientY - wrapperRect.top - toolbarOffset.y;

      moduleFloatingToolbar.style.left = `${Math.round(x)}px`;
      moduleFloatingToolbar.style.top = `${Math.round(y)}px`;
    });

    window.addEventListener('mouseup', () => {
      if (isDraggingToolbar) {
        isDraggingToolbar = false;
        if (btnFloatDragHandle) btnFloatDragHandle.style.cursor = 'grab';
      }
    });
// =======================================================
    // MOTOR DE EXTRACCIÓN AUTOMÁTICA DE VIDEO A FOTOGRAMAS 4K
    // =======================================================
    let videoCapturas = {
      frente: null,
      tresCuartosD: null,
      perfilD: null,
      espalda: null,
      perfilI: null
    };
    let videoFileCache = null;

    // 1. Abre el archivo de video seleccionado
    function manejarSeleccionVideo(e) {
      const file = e.target.files[0];
      if (file) {
        procesarArchivoVideo(file);
      }
      e.target.value = '';
    }

    // 2. Soporte para arrastrar y soltar el video (Drag & Drop) directamente al lienzo
    const canvasContainerDrop = document.querySelector('.canvas-container');
    if (canvasContainerDrop) {
      canvasContainerDrop.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      canvasContainerDrop.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('video/')) {
          procesarArchivoVideo(file);
        }
      });
    }

    // 3. Extractor asíncrono de fotogramas cuadro por cuadro
    async function procesarArchivoVideo(file) {
      videoFileCache = file;
      const modal = document.getElementById('videoModalOverlay');
      const grid = document.getElementById('videoThumbnailsGrid');
      
      grid.innerHTML = `<div style="grid-column: span 5; text-align:center; padding:20px; color:#60a5fa; font-weight:700;">⏳ Procesando rotación 3D y extrayendo fotogramas...</div>`;
      modal.style.display = 'flex';

      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.src = URL.createObjectURL(file);

      await new Promise((res) => { video.onloadedmetadata = () => res(); });

      const duration = video.duration;
      const dir = document.getElementById('videoRotationDirection').value;

      // Porcentajes de tiempo para cada ángulo orbital
      let tiempos = {
        frente: 0.00,
        tresCuartosD: (dir === 'cw' ? 0.125 : 0.875) * duration,
        perfilD: (dir === 'cw' ? 0.250 : 0.750) * duration,
        espalda: 0.500 * duration,
        perfilI: (dir === 'cw' ? 0.750 : 0.250) * duration
      };

      // Función auxiliar que captura el fotograma en un canvas invisible
      async function capturarSegundo(segundo) {
        return new Promise((resolve) => {
          video.currentTime = Math.min(segundo, duration - 0.01);
          video.onseeked = () => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = video.videoWidth || 1024;
            tempCanvas.height = video.videoHeight || 1024;
            const tCtx = tempCanvas.getContext('2d');
            tCtx.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);
            resolve(tempCanvas.toDataURL('image/png', 1.0));
          };
        });
      }

      // Extrae los 5 ángulos
      videoCapturas.frente = await capturarSegundo(tiempos.frente);
      videoCapturas.tresCuartosD = await capturarSegundo(tiempos.tresCuartosD);
      videoCapturas.perfilD = await capturarSegundo(tiempos.perfilD);
      videoCapturas.espalda = await capturarSegundo(tiempos.espalda);
      videoCapturas.perfilI = await capturarSegundo(tiempos.perfilI);

      // Muestra las miniaturas en la ventana emergente
      mostrarMiniaturasVideo();
    }

    function mostrarMiniaturasVideo() {
      const grid = document.getElementById('videoThumbnailsGrid');
      const ratioVal = document.getElementById('videoModuleRatioSelect') ? document.getElementById('videoModuleRatioSelect').value : '9:16';
      const t = I18N[currentLang]; // 👈 Toma los textos del idioma seleccionado
      
      let aspectStyle = 'aspect-ratio: 9/16;';
      if (ratioVal === '3:4') aspectStyle = 'aspect-ratio: 3/4;';
      else if (ratioVal === '1:1') aspectStyle = 'aspect-ratio: 1/1;';
      else if (ratioVal === '4:3') aspectStyle = 'aspect-ratio: 4/3;';
      else if (ratioVal === '16:9') aspectStyle = 'aspect-ratio: 16/9;';

      grid.innerHTML = `
        <div style="background:rgba(0,0,0,0.5); padding:6px; border-radius:6px; text-align:center;">
          <img src="${videoCapturas.frente}" style="width:100%; border-radius:4px; margin-bottom:4px; ${aspectStyle} object-fit:cover;">
          <small style="font-size:0.75rem; font-weight:700; color:#fff;">${t.vmTh1}</small>
        </div>
        <div style="background:rgba(0,0,0,0.5); padding:6px; border-radius:6px; text-align:center;">
          <img src="${videoCapturas.tresCuartosD}" style="width:100%; border-radius:4px; margin-bottom:4px; ${aspectStyle} object-fit:cover;">
          <small style="font-size:0.75rem; font-weight:700; color:#fff;">${t.vmTh2}</small>
        </div>
        <div style="background:rgba(0,0,0,0.5); padding:6px; border-radius:6px; text-align:center;">
          <img src="${videoCapturas.perfilD}" style="width:100%; border-radius:4px; margin-bottom:4px; ${aspectStyle} object-fit:cover;">
          <small style="font-size:0.75rem; font-weight:700; color:#fff;">${t.vmTh3}</small>
        </div>
        <div style="background:rgba(0,0,0,0.5); padding:6px; border-radius:6px; text-align:center;">
          <img src="${videoCapturas.espalda}" style="width:100%; border-radius:4px; margin-bottom:4px; ${aspectStyle} object-fit:cover;">
          <small style="font-size:0.75rem; font-weight:700; color:#fff;">${t.vmTh4}</small>
        </div>
        <div style="background:rgba(0,0,0,0.5); padding:6px; border-radius:6px; text-align:center;">
          <img src="${videoCapturas.perfilI}" style="width:100%; border-radius:4px; margin-bottom:4px; ${aspectStyle} object-fit:cover;">
          <small style="font-size:0.75rem; font-weight:700; color:#fff;">${t.vmTh5}</small>
        </div>
      `;
    }

    function actualizarAspectoMiniaturas() {
      mostrarMiniaturasVideo();
    }
// Función para copiar el prompt del video
    function copiarPromptTurnaround(btn) {
      const txt = document.getElementById('promptVideoTexto').innerText.trim();
      navigator.clipboard.writeText(txt).then(() => {
        const oldTxt = btn.innerHTML;
        btn.innerHTML = '✔ ¡Copiado!';
        btn.style.backgroundColor = '#10b981';
        setTimeout(() => {
          btn.innerHTML = oldTxt;
          btn.style.backgroundColor = '';
        }, 2000);
      });
    }

    // Algoritmo que analiza los píxeles del personaje ignorando fondos grises, blancos y negros
    // Algoritmo de extracción por frecuencia (Detecta verde, azul, naranja reales del personaje)
    function extraerColoresPersonaje(dataUrl) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const cvs = document.createElement('canvas');
          const size = 100; // Muestreo rápido y preciso de 10.000 píxeles
          cvs.width = size;
          cvs.height = size;
          const sCtx = cvs.getContext('2d');
          sCtx.drawImage(img, 0, 0, size, size);
          const data = sCtx.getImageData(0, 0, size, size).data;

          const colorCounts = {};

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
            if (a < 128) continue; // Ignora transparencias

            // 1. Convertir a HSV para filtrar fondos y sombras sucias
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            const delta = max - min;
            const sat = max === 0 ? 0 : delta / max;
            const val = max / 255;

            // Filtro inteligente anti-fondo:
            // Descarta grises/blancos/negros si no tienen color evidente (baja saturación)
            if (sat < 0.12 && (val < 0.15 || val > 0.88)) continue; // Negros y blancos puros
            if (sat < 0.08 && (val >= 0.25 && val <= 0.75)) continue; // Grises neutros de estudio

            // 2. Cuantización a 5 bits por canal (agrupa tonos similares)
            const qR = (r >> 3) << 3;
            const qG = (g >> 3) << 3;
            const qB = (b >> 3) << 3;
            const key = `${qR},${qG},${qB}`;

            colorCounts[key] = (colorCounts[key] || 0) + 1;
          }

          // 3. Ordenar los colores de mayor a menor presencia en el personaje
          const sortedColors = Object.keys(colorCounts)
            .map(k => {
              const [r, g, b] = k.split(',').map(Number);
              return { rgb: [r, g, b], count: colorCounts[k] };
            })
            .sort((a, b) => b.count - a.count);

          // 4. Seleccionar los 5 colores dominantes más contrastantes entre sí
          const seleccionados = [];
          const minDistance = 45; // Distancia para que no repita el mismo verde dos veces

          for (const item of sortedColors) {
            const col = item.rgb;
            const esDiferente = seleccionados.every(c => {
              const d = Math.sqrt(Math.pow(col[0]-c[0], 2) + Math.pow(col[1]-c[1], 2) + Math.pow(col[2]-c[2], 2));
              return d > minDistance;
            });

            if (esDiferente) {
              seleccionados.push(col);
              if (seleccionados.length >= 5) break;
            }
          }

          // Si faltan colores, completa con los disponibles
          let idx = 0;
          while (seleccionados.length < 5 && idx < sortedColors.length) {
            const col = sortedColors[idx].rgb;
            if (!seleccionados.includes(col)) seleccionados.push(col);
            idx++;
          }

          // Fallback por si la imagen estuviera vacía
          while (seleccionados.length < 5) {
            seleccionados.push([128, 128, 128]);
          }

          resolve(seleccionados.slice(0, 5));
        };
        img.src = dataUrl;
      });
    }
    // Dibuja la tarjeta gráfica de la Paleta con círculos y códigos HEX en 4:3
    // Dibuja la tarjeta gráfica de la Paleta con títulos traducidos
    function dibujarTarjetaPaleta(coloresRGB) {
      const pCvs = document.createElement('canvas');
      pCvs.width = 800;
      pCvs.height = 600; // Ratio 4:3
      const pCtx = pCvs.getContext('2d');
      const t = I18N[currentLang]; // 👈 Toma los textos del idioma seleccionado

      pCtx.fillStyle = '#16181d';
      pCtx.fillRect(0, 0, 800, 600);
      pCtx.strokeStyle = '#3b82f6';
      pCtx.lineWidth = 4;
      pCtx.strokeRect(0, 0, 800, 600);

      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 26px sans-serif';
      pCtx.textAlign = 'center';
      pCtx.fillText(t.vmPalTitle || '🎨 PALETA DE COLOR OFICIAL', 400, 60);

      const circleRadius = 50;
      const startX = 100;
      const stepX = 150;
      const circleY = 240;

      coloresRGB.forEach((c, idx) => {
        const cx = startX + idx * stepX;
        const hex = '#' + ((1 << 24) + (c[0] << 16) + (c[1] << 8) + c[2]).toString(16).slice(1).toUpperCase();

        pCtx.shadowColor = 'rgba(0,0,0,0.6)';
        pCtx.shadowBlur = 12;
        pCtx.fillStyle = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
        pCtx.beginPath();
        pCtx.arc(cx, circleY, circleRadius, 0, Math.PI * 2);
        pCtx.fill();
        pCtx.shadowBlur = 0;

        pCtx.strokeStyle = '#ffffff';
        pCtx.lineWidth = 3;
        pCtx.stroke();

        pCtx.fillStyle = '#facc15';
        pCtx.font = 'bold 19px monospace';
        pCtx.fillText(hex, cx, circleY + circleRadius + 42);

        pCtx.fillStyle = '#9ca3af';
        pCtx.font = '15px sans-serif';
        pCtx.fillText(`${t.vmPalColor || 'Color'} 0${idx+1}`, cx, circleY - circleRadius - 18);
      });

      return pCvs.toDataURL('image/png');
    }
    function reprocesarDireccionGiro() {
      if (videoFileCache) {
        procesarArchivoVideo(videoFileCache);
      }
    }

    function cerrarModalVideo() {
      document.getElementById('videoModalOverlay').style.display = 'none';
    }

    // 4. Vuelca las fotos al Canvas calculando el tamaño y separación perfecta para los 5 módulos
    async function aplicarFotogramasAlCanvas() {
      guardarEstadoParaUndo();

      const ratioSelect = document.getElementById('videoModuleRatioSelect').value;
      const extractPalette = document.getElementById('chkAutoExtractPalette') ? document.getElementById('chkAutoExtractPalette').checked : true;
      
      let modW = 680;
      let modH = 1209;
      let ratioNum = 9 / 16;
      let ratioText = '9:16';

      if (ratioSelect === '3:4') {
        modW = 680;
        modH = Math.round(680 / (3/4));
        ratioNum = 3 / 4;
        ratioText = '3:4';
      } else if (ratioSelect === '1:1') {
        modW = 680;
        modH = 680;
        ratioNum = 1 / 1;
        ratioText = '1:1';
      } else if (ratioSelect === '4:3') {
        modW = 700;
        modH = Math.round(700 / (4/3));
        ratioNum = 4 / 3;
        ratioText = '4:3';
      } else if (ratioSelect === '16:9') {
        modW = 710;
        modH = Math.round(710 / (16/9));
        ratioNum = 16 / 9;
        ratioText = '16:9';
      }

      const cantidadModulos = 5;
      const anchoTotalModulos = cantidadModulos * modW;
      const espacioSobrante = MASTER_W - anchoTotalModulos;
      const gapX = Math.round(espacioSobrante / (cantidadModulos + 1));
      const posY = Math.round((MASTER_H - modH) / 2);

      const imagenesArray = [
        { label: '1. Busto de Frente', src: videoCapturas.frente, tipo: 'busto_frente' },
        { label: '2. Vista 3/4 Derecha', src: videoCapturas.tresCuartosD, tipo: 'vista_tres_cuartos_d' },
        { label: '3. Perfil Derecho', src: videoCapturas.perfilD, tipo: 'perfil_derecho' },
        { label: '4. Vista Espalda', src: videoCapturas.espalda, tipo: 'vista_espalda_busto' },
        { label: '5. Perfil Izquierdo', src: videoCapturas.perfilI, tipo: 'perfil_izquierdo' }
      ];

      // Reiniciamos y montamos los 5 ángulos calculados
      panelesActivos = [];

      imagenesArray.forEach((m, idx) => {
        const posX = gapX + idx * (modW + gapX);
        const img = new Image();
        img.src = m.src;

        panelesActivos.push({
          idInstancia: Date.now() + Math.random() + idx,
          tipo: m.tipo,
          modo: appCurrentMode,
          label: m.label,
          aspectRatioText: ratioText,
          aspectRatioNum: ratioNum,
          promptTemplate: '',
          img: img,
          zoom: 1.0,
          panX: 0,
          panY: 0,
          collapsed: true,
          geo: { x: posX, y: posY, w: modW, h: modH }
        });
      });

      // 🎨 Si la casilla de paleta está activa, analiza la foto frontal y crea el módulo de Paleta
      if (extractPalette && videoCapturas.frente) {
        const coloresDetectados = await extraerColoresPersonaje(videoCapturas.frente);
        const paletaDataUrl = dibujarTarjetaPaleta(coloresDetectados);
        const imgPaleta = new Image();
        imgPaleta.src = paletaDataUrl;

        // La ubicamos centrada abajo o arriba con ratio 4:3
        panelesActivos.push({
          idInstancia: Date.now() + Math.random() + 99,
          tipo: 'paleta_color',
          modo: appCurrentMode,
          label: 'Paleta de Muestras de Color (Swatches)',
          aspectRatioText: '4:3',
          aspectRatioNum: 4/3,
          promptTemplate: '',
          img: imgPaleta,
          zoom: 1.0,
          panX: 0,
          panY: 0,
          collapsed: true,
          geo: { x: Math.round((MASTER_W - 600) / 2), y: Math.min(MASTER_H - 460, posY + modH + 20), w: 600, h: 450 }
        });
      }

      cerrarModalVideo();
      generarControlesUI();
      renderAll();
    }
    init();

    // [PROTECCIÓN DE DOMINIO ELIMINADA PARA USO LOCAL]
