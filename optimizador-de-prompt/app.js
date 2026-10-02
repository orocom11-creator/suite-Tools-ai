// ESTADO DE LA APLICACIÓN
    let currentLang = 'es';
    let currentMode = 'video';

    // DICCIONARIOS DE INTERFAZ
    const i18n = {
      es: {
        subtitle: "Gemini Omni Flash & AI Studio",
        btn_reset: "Restablecer",
        target_label: "¿Qué deseas crear?",
        target_badge: "Adapta automáticamente las categorías",
        mode_video: "Video (Omni Flash)",
        mode_image: "Imagen Estática",
        action_label: "Acción principal / ¿Qué sucede en la escena?",
        required: "Obligatorio",
        action_placeholder: "Describe qué pasa en tu video o imagen (ej: Un samurái camina bajo la lluvia de neón frente a un templo futurista)...",
        action_hint: "Escribe en tu idioma habitual. El optimizador ensamblará el prompt cinematográfico en inglés para máxima calidad del motor de IA.",
        categories_title: "Categorías Cinemáticas (Guía 99)",
        categories_subtitle: "Activa lo que desees incluir",
        audio_title: "🎧 Capa de Audio Nativo Sincronizado",
        audio_desc: "Genera directivas de sonido ambiente y foley sincronizado para Omni Flash",
        btn_generate: "⚡ Generar Prompt Optimizado",
        output_title: "Prompt Resultante (Inglés IA)",
        copy_label: "Copiar",
        copy_success: "¡Copiado!",
        output_placeholder: "Describe la escena a la izquierda, selecciona tus parámetros y presiona 'Generar Prompt'.",
        engine_note: "🎯 Motor de salida:",
        engine_desc: "Optimizado con sintaxis en inglés para máxima obediencia y coherencia en Gemini Omni Flash, Veo e Imagen 3.",
        warning_empty: "⚠️ Por favor escribe al menos la acción principal antes de generar.",
        cat_titles: {
          cat1: "🎬 Encuadre y Tipo de Plano",
          cat2: "📹 Movimiento de Cámara",
          cat3: "🔘 Lente y Óptica",
          cat4: "☀️ Iluminación y Atmósfera",
          cat5: "⊞ Composición y Encuadre",
          cat6: "🏔️ Ubicación y Entorno",
          cat7: "👥 Sujetos y Acción",
          cat8: "🎨 Estilo Visual y Género",
          cat9: "🪄 Efectos Avanzados"
        },
        manual_title: "Manual Completo de Instrucciones y Arquitectura",
        manual_subtitle: "Guía exhaustiva para dominar la dirección cinematográfica con inteligencia artificial multimodal."
      },
      pt: {
        subtitle: "Gemini Omni Flash & AI Studio",
        btn_reset: "Redefinir",
        target_label: "O que você deseja criar?",
        target_badge: "Adapta automaticamente as categorias",
        mode_video: "Vídeo (Omni Flash)",
        mode_image: "Imagem Estática",
        action_label: "Ação principal / O que acontece na cena?",
        required: "Obrigatório",
        action_placeholder: "Descreva o que acontece no seu vídeo ou imagem (ex: Um samurai caminha sob a chuva de neon em frente a um templo futurista)...",
        action_hint: "Escreva no seu idioma habitual. O otimizador criará o prompt cinematográfico em inglês para obter a máxima fidelidade da IA.",
        categories_title: "Categorias Cinemáticas (Guia 99)",
        categories_subtitle: "Marque o que deseja incluir",
        audio_title: "🎧 Camada de Áudio Nativo Sincronizado",
        audio_desc: "Gera diretivas de áudio foley e ambiente sincronizado para Omni Flash",
        btn_generate: "⚡ Gerar Prompt Otimizado",
        output_title: "Prompt Resultante (Inglês IA)",
        copy_label: "Copiar",
        copy_success: "Copiado!",
        output_placeholder: "Descreva a cena à esquerda, selecione os parâmetros e clique em 'Gerar Prompt'.",
        engine_note: "🎯 Motor de geração:",
        engine_desc: "Otimizado com sintaxe em inglês para máxima precisão no Gemini Omni Flash, Veo e Imagen 3.",
        warning_empty: "⚠️ Por favor, escreva a ação principal antes de gerar.",
        cat_titles: {
          cat1: "🎬 Enquadramento e Plano",
          cat2: "📹 Movimento de Câmera",
          cat3: "🔘 Lente e Visual Óptico",
          cat4: "☀️ Iluminação e Atmosfera",
          cat5: "⊞ Composição e Enquadramento",
          cat6: "🏔️ Localização e Cenário",
          cat7: "👥 Pessoas e Ação",
          cat8: "🎨 Estilo Visual e Gênero",
          cat9: "🪄 Efeitos Avançados"
        },
        manual_title: "Manual Completo de Instruções e Arquitetura",
        manual_subtitle: "Guia exaustivo para dominar a direção cinematográfica com inteligência artificial multimodal."
      },
      en: {
        subtitle: "Gemini Omni Flash & AI Studio",
        btn_reset: "Reset",
        target_label: "What do you want to create?",
        target_badge: "Automatically adapts categories",
        mode_video: "Video (Omni Flash)",
        mode_image: "Static Image",
        action_label: "Main Action / What happens in the scene?",
        required: "Required",
        action_placeholder: "Describe what happens in your video or image (e.g., A cyber samurai walks in the neon rain towards a futuristic temple)...",
        action_hint: "Type naturally. The prompt builder compiles optimized cinematic instructions in English for Gemini and Omni models.",
        categories_title: "Cinematic Categories (99 Guide)",
        categories_subtitle: "Toggle items you wish to apply",
        audio_title: "🎧 Synchronized Native Audio Layer",
        audio_desc: "Generates realistic environmental foley & ambient sound for Omni Flash",
        btn_generate: "⚡ Generate Optimized Prompt",
        output_title: "Final Output Prompt (AI English)",
        copy_label: "Copy",
        copy_success: "Copied!",
        output_placeholder: "Describe the scene on the left, check your categories, and click 'Generate Prompt'.",
        engine_note: "🎯 Target engine:",
        engine_desc: "Optimized in natural English descriptive prose for Gemini Omni Flash, Veo, and Imagen 3.",
        warning_empty: "⚠️ Please enter the main action description first.",
        cat_titles: {
          cat1: "🎬 Scene & Shots",
          cat2: "📹 Camera Movement",
          cat3: "🔘 Lens & Visual Look",
          cat4: "☀️ Lighting & Mood",
          cat5: "⊞ Composition & Framing",
          cat6: "🏔️ Location & Environment",
          cat7: "👥 People & Action",
          cat8: "🎨 Visual Style & Genre",
          cat9: "🪄 Advanced Effects"
        },
        manual_title: "Complete Instruction Manual & Architecture",
        manual_subtitle: "Exhaustive guide to mastering AI cinematography with multimodal foundation models."
      }
    };

    // 99 ELEMENTOS DE LA GUÍA CON VALORES EN INGLÉS
    const guideItems = {
      cat1: [
        { id: "1", en: "Establishing Shot", es: "Plano general de establecimiento", pt: "Plano de estabelecimento" },
        { id: "2", en: "Wide Shot", es: "Plano general amplio (Wide Shot)", pt: "Plano aberto / geral" },
        { id: "3", en: "Medium Shot", es: "Plano medio (Medium Shot)", pt: "Plano médio" },
        { id: "4", en: "Close-up", es: "Primer plano (Close-up)", pt: "Primeiro plano (Close-up)" },
        { id: "5", en: "Extreme Close-up", es: "Primerísimo primer plano / Detalle", pt: "Super close-up / Detalhe" },
        { id: "6", en: "Over-the-shoulder", es: "Plano sobre el hombro", pt: "Sobre o ombro" },
        { id: "7", en: "POV Shot", es: "Plano subjetivo en primera persona (POV)", pt: "Ponto de vista (POV)" },
        { id: "8", en: "Tracking Shot", es: "Plano de seguimiento (Tracking Shot)", pt: "Plano de acompanhamento" },
        { id: "9", en: "Drone Shot", es: "Toma con dron", pt: "Tomada com drone" },
        { id: "10", en: "Aerial View", es: "Vista aérea cenital", pt: "Vista aérea do topo" },
        { id: "11", en: "Dutch Angle", es: "Plano aberrante / holandés", pt: "Ângulo holandês / inclinado" }
      ],
      cat2: [
        { id: "12", en: "Static Shot", es: "Toma estática / fija", pt: "Tomada estática / fixa" },
        { id: "13", en: "Pan Left / Right", es: "Paneo horizontal (Izq / Der)", pt: "Panorâmica (Esq / Dir)" },
        { id: "14", en: "Tilt Up / Down", es: "Inclinación vertical (Tilt arriba/abajo)", pt: "Inclinação vertical (Tilt)" },
        { id: "15", en: "Push In (Zoom In)", es: "Empuje suave hacia adentro (Push In)", pt: "Aproximação suave (Push In)" },
        { id: "16", en: "Pull Out (Zoom Out)", es: "Alejamiento suave (Pull Out)", pt: "Afastamento suave (Pull Out)" },
        { id: "17", en: "Tracking Forward", es: "Seguimiento hacia adelante", pt: "Rastreamento para frente" },
        { id: "18", en: "Tracking Backward", es: "Seguimiento hacia atrás", pt: "Rastreamento para trás" },
        { id: "19", en: "Orbit / Circular", es: "Movimiento orbital circular 360°", pt: "Movimento orbital circular 360°" },
        { id: "20", en: "Handheld / Realistic", es: "Cámara en mano realista y orgánica", pt: "Câmera na mão realista" },
        { id: "21", en: "Gimbal Smooth", es: "Movimiento ultra fluido con gimbal", pt: "Movimento suave com gimbal" },
        { id: "22", en: "Time-lapse Movement", es: "Movimiento continuo en timelapse", pt: "Movimento contínuo em timelapse" }
      ],
      cat3: [
        { id: "23", en: "16mm Wide Angle", es: "Gran angular 16mm", pt: "Grande angular 16mm" },
        { id: "24", en: "24mm Cinematic", es: "Cinemático 24mm", pt: "Cinematográfico 24mm" },
        { id: "25", en: "35mm Natural", es: "Lente natural 35mm", pt: "Lente natural 35mm" },
        { id: "26", en: "50mm Standard", es: "Estándar 50mm ojo humano", pt: "Padrão 50mm olho humano" },
        { id: "27", en: "85mm Portrait", es: "Retrato 85mm con bokeh suave", pt: "Retrato 85mm com bokeh" },
        { id: "28", en: "Macro Lens", es: "Lente Macro de ultra precisión", pt: "Lente Macro de ultra precisão" },
        { id: "29", en: "Telephoto", es: "Teleobjetivo de largo alcance", pt: "Teleobjetiva de longo alcance" },
        { id: "30", en: "Shallow Depth of Field", es: "Poca profundidad de campo (Bokeh)", pt: "Pouca profundidade de campo" },
        { id: "31", en: "Deep Focus", es: "Enfoque profundo (todo nítido)", pt: "Foco profundo em toda a cena" },
        { id: "32", en: "Fisheye Lens", es: "Lente ojo de pez", pt: "Lente olho de peixe" },
        { id: "33", en: "Anamorphic Look", es: "Estilo anamórfico con destellos", pt: "Visual anamórfico cinematográfico" }
      ],
      cat4: [
        { id: "34", en: "Natural Daylight", es: "Luz natural de día", pt: "Luz natural do dia" },
        { id: "35", en: "Golden Hour", es: "Hora dorada cálida (Golden Hour)", pt: "Golden Hour / Hora de ouro" },
        { id: "36", en: "Blue Hour", es: "Hora azul crepuscular", pt: "Hora azul crepuscular" },
        { id: "37", en: "Night Lighting", es: "Iluminación nocturna", pt: "Iluminação noturna" },
        { id: "38", en: "Low Light", es: "Luz baja y sombras profundas", pt: "Luz baixa e sombras profundas" },
        { id: "39", en: "Backlight", es: "Contraluz marcado", pt: "Luz de fundo / Contraluz" },
        { id: "40", en: "Silhouette", es: "Silueta dramática", pt: "Silhueta dramática" },
        { id: "41", en: "Neon Lighting", es: "Luces de neón vibrantes", pt: "Luzes de neon vibrantes" },
        { id: "42", en: "Soft Lighting", es: "Iluminación difusa y suave", pt: "Iluminação difusa e suave" },
        { id: "43", en: "Dramatic Lighting", es: "Iluminación dramática claroscuro", pt: "Iluminação dramática chiaroscuro" },
        { id: "44", en: "Candlelight / Warm", es: "Luz cálida de velas", pt: "Luz de velas intimista" }
      ],
      cat5: [
        { id: "45", en: "Rule of Thirds", es: "Regla de los tercios", pt: "Regra dos terços" },
        { id: "46", en: "Centered Composition", es: "Composición centrada", pt: "Composição centralizada" },
        { id: "47", en: "Leading Lines", es: "Líneas guía visuales", pt: "Linhas guia visuais" },
        { id: "48", en: "Frame within a Frame", es: "Marco dentro de un marco", pt: "Quadro dentro do quadro" },
        { id: "49", en: "Symmetrical", es: "Composición simétrica", pt: "Composição simétrica" },
        { id: "50", en: "Negative Space", es: "Espacio negativo minimalista", pt: "Espaço negativo minimalista" },
        { id: "51", en: "Foreground Framing", es: "Enmarcado con primer plano", pt: "Enquadramento com primeiro plano" },
        { id: "52", en: "Layered Composition", es: "Composición por capas de profundidad", pt: "Composição em camadas" },
        { id: "53", en: "Minimalist Composition", es: "Composición minimalista", pt: "Composição minimalista" },
        { id: "54", en: "Dynamic Composition", es: "Composición diagonal y dinámica", pt: "Composição diagonal e dinâmica" },
        { id: "55", en: "Hero Shot", es: "Plano heroico (Hero Shot)", pt: "Tomada heroica imponente" }
      ],
      cat6: [
        { id: "56", en: "Modern City", es: "Metrópolis / Ciudad moderna", pt: "Metrópole / Cidade moderna" },
        { id: "57", en: "Traditional Village", es: "Pueblo rural tradicional", pt: "Vila tradicional / histórica" },
        { id: "58", en: "Office / Workspace", es: "Oficina / Espacio de trabajo", pt: "Escritório / Espaço de trabalho" },
        { id: "59", en: "Café / Restaurant", es: "Cafetería o restaurante", pt: "Café ou restaurante" },
        { id: "60", en: "Nature / Forest", es: "Bosque / Naturaleza exuberante", pt: "Floresta / Natureza exuberante" },
        { id: "61", en: "Mountain Landscape", es: "Paisaje montañoso", pt: "Paisagem de montanha" },
        { id: "62", en: "Beach / Ocean", es: "Playa y horizonte oceánico", pt: "Praia e horizonte do oceano" },
        { id: "63", en: "Urban Street", es: "Calle urbana transitada", pt: "Rua urbana movimentada" },
        { id: "64", en: "Indoor Home", es: "Interior de hogar acogedor", pt: "Interior de casa aconchegante" },
        { id: "65", en: "Futuristic City", es: "Ciudad futurista ciberpunk", pt: "Cidade futurista cyberpunk" },
        { id: "66", en: "Space / Sci-fi World", es: "Espacio exterior / Mundo sci-fi", pt: "Espaço sideral / Mundo sci-fi" }
      ],
      cat7: [
        { id: "67", en: "Talking to Camera", es: "Hablando a la cámara", pt: "Falando para a câmera" },
        { id: "68", en: "Walking", es: "Caminando con paso natural", pt: "Caminhando com postura natural" },
        { id: "69", en: "Running", es: "Corriendo con dinamismo", pt: "Correndo com dinamismo" },
        { id: "70", en: "Working / Studying", es: "Trabajando o estudiando enfocado", pt: "Trabalhando ou estudando focado" },
        { id: "71", en: "Cooking", es: "Cocinando y manipulando ingredientes", pt: "Cozinhando com ingredientes" },
        { id: "72", en: "Praying / Worship", es: "Orando o en actitud ceremonial", pt: "Orando ou em ato cerimonial" },
        { id: "73", en: "Group Interaction", es: "Interacción viva de grupo", pt: "Interação de grupo empolgada" },
        { id: "74", en: "Emotional Expression", es: "Expresión emocional intensa", pt: "Expressão emocional profunda" },
        { id: "75", en: "Slow Motion", es: "Movimiento ralentizado fluido", pt: "Movimento em câmera lenta" },
        { id: "76", en: "Daily Life Activity", es: "Actividad cotidiana natural", pt: "Atividade rotineira do cotidiano" },
        { id: "77", en: "Before & After", es: "Secuencia de transformación antes/después", pt: "Transformação antes e depois" }
      ],
      cat8: [
        { id: "78", en: "Cinematic Film Look", es: "Look de cine 35mm (Color Grade)", pt: "Visual cinematográfico 35mm" },
        { id: "79", en: "Documentary Style", es: "Estilo documental hiperrealista", pt: "Estilo documentário realista" },
        { id: "80", en: "Anime Style", es: "Estilo anime cinematográfico", pt: "Estilo anime detalhado" },
        { id: "81", en: "3D Animation", es: "Animación 3D estilo Pixar/Render", pt: "Animação 3D de alta qualidade" },
        { id: "82", en: "Claymation / Toy Style", es: "Estilo Claymation / Stop-motion juguete", pt: "Estilo Claymation / Massinha" },
        { id: "83", en: "Watercolor Style", es: "Estilo acuarela artística", pt: "Estilo aquarela artística" },
        { id: "84", en: "Comic / Illustration", es: "Cómic e ilustración gráfica", pt: "Quadrinhos e ilustração" },
        { id: "85", en: "Vintage Film", es: "Película retro / Grano vintage", pt: "Filme vintage / Retrô" },
        { id: "86", en: "Black & White", es: "Blanco y negro dramático contrastado", pt: "Preto e branco de alto contraste" },
        { id: "87", en: "Fantasy / Magical", es: "Fantasía mágica luminosa", pt: "Fantasia mágica luminosa" },
        { id: "88", en: "Sci-fi / Cyberpunk", es: "Ciencia ficción ciberpunk", pt: "Ficção científica cyberpunk" }
      ],
      cat9: [
        { id: "89", en: "Slow Motion", es: "Cámara lenta cinematográfica", pt: "Câmera lenta cinemática", videoOnly: true },
        { id: "90", en: "Time-lapse", es: "Paso acelerado del tiempo (Timelapse)", pt: "Timelapse do tempo passando", videoOnly: true },
        { id: "91", en: "Hyperlapse", es: "Hyperlapse en movimiento rápido", pt: "Hyperlapse em movimento", videoOnly: true },
        { id: "92", en: "Transition Effects", es: "Efectos de transición dinámicos", pt: "Efeitos de transição dinâmicos", videoOnly: true },
        { id: "93", en: "Text to Video", es: "Concepto visual Text-to-Media", pt: "Conceito visual Text-to-Media" },
        { id: "94", en: "Image to Video", es: "Animación fluida desde imagen", pt: "Animação fluida de imagem", videoOnly: true },
        { id: "95", en: "Multi-shot Story", es: "Narrativa multi-toma secuencial", pt: "Narrativa sequencial de várias tomadas", videoOnly: true },
        { id: "96", en: "Product Reveal", es: "Revelación comercial de producto", pt: "Revelação de producto estilo comercial" },
        { id: "97", en: "Special Effects (VFX)", es: "Efectos especiales y partículas VFX", pt: "Efeitos especiais e partículas VFX" },
        { id: "98", en: "AI Character / Avatar", es: "Personaje hiperrealista / Avatar IA", pt: "Personagem hiper-realista / Avatar IA" },
        { id: "99", en: "Dreamlike / Surreal", es: "Atmósfera onírica y surrealista", pt: "Atmosfera onírica e surrealista" }
      ]
    };

    // =========================================================================
    // TEXTO COMPLETO DEL MANUAL (MÁS DE 1500 PALABRAS EN SUS 3 TRADUCCIONES)
    // =========================================================================
    const manualData = {
      es: `
        <div class="space-y-10 text-slate-300">
          
          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">1. ¿Qué es "EL OPTIMIZADOR DE PROMPTs"?</h3>
            <p class="leading-relaxed">
              <strong>EL OPTIMIZADOR DE PROMPTs</strong> es una suite de dirección artística y cinematográfica asistida por computadora, concebida para cerrar la brecha entre la imaginación humana y la lógica interna de los modelos fundacionales multimodales de última generación, especialmente <strong>Gemini Omni Flash</strong>, <strong>Google Veo</strong> e <strong>Imagen 3</strong>.
            </p>
            <p class="leading-relaxed mt-3">
              Tradicionalmente, los usuarios intentaban comunicarse con los generadores visuales acumulando palabras clave inconexas separadas por comas (como <em>"8k, ultra-realista, cinematográfico, obra maestra"</em>). Este paradigma está obsoleto. Los modelos contemporáneos no leen listas de etiquetas como motores de búsqueda; procesan <strong>sintaxis narrativa continua, coherencia geométrica y relaciones causa-efecto en el espacio y en el tiempo</strong>. Esta aplicación actúa como un Director de Fotografía digital automatizado, traduciendo tus ideas en instrucciones de dirección técnica estandarizadas.
            </p>
          </div>

          <!-- BLOQUE DE ANUNCIO ADSENSE (ANTES DEL PUNTO 2) -->
          <div class="my-8 py-4 border-y border-slate-800/80 text-center">
            <p class="text-[11px] font-semibold tracking-widest text-slate-500 uppercase block mb-3">Anuncio</p>
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-3953039147695660"
                 data-ad-slot="5899202624"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">2. Selector Inteligente: Modo Video (Omni Flash) vs. Modo Imagen Estática</h3>
            <p class="leading-relaxed">
              Un fotograma estático no responde a las mismas leyes que una secuencia audiovisual en movimiento. Por ello, la aplicación integra un conmutador inteligente de formato:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div class="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2"><span>🎬</span> Modo Video (Omni Flash)</h4>
                <p class="text-xs leading-relaxed text-slate-400">
                  Desbloquea el control de <strong>movimiento de cámara</strong> (dolly, grúa, paneo, órbita), variables temporales (timelapse, cámara lenta) y, de forma crucial, la <strong>capa de Audio Nativo</strong>. Gemini Omni Flash genera audio ambiental y foley sincronizado con la física de la toma; el optimizador redacta directivas de sonido diegético puro sin música artificial añadida.
                </p>
              </div>
              <div class="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2"><span>📸</span> Modo Imagen Estática</h4>
                <p class="text-xs leading-relaxed text-slate-400">
                  Al seleccionar fotografía, la app oculta instantáneamente la categoría de movimiento de cámara, el audio y los efectos de tiempo. El algoritmo reformula la estructura hacia la óptica fotográfica fija: distancia focal milimétrica, bokeh, nitidez textural microscópica y balance lumínico estático.
                </p>
              </div>
            </div>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">3. Arquitectura de los 9 Pilares Cinemáticos (Guía 99)</h3>
            <p class="leading-relaxed mb-4">
              La aplicación sistematiza las 99 técnicas fundamentales de la dirección cinematográfica en 9 categorías modulares que puedes encender o apagar a voluntad:
            </p>
            <div class="space-y-3 text-xs sm:text-sm">
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">1. Scene & Shots (Encuadre y Tipo de Plano):</strong> Determina la relación de escala entre el sujeto y el mundo (Establishing Shot, Wide, Medium, Close-up, POV, Dron, Dutch Angle).
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">2. Camera Movement (Movimiento de Cámara):</strong> Solo en Video. Dicta cómo se desplaza el visor óptico: tomas estáticas en trípode, seguimiento fluido con gimbal, empujes dramáticos (Push In) o cámara en mano orgánica.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">3. Lens & Visual Look (Lente y Óptica):</strong> Simula la distancia focal de lentes físicas reales: gran angular de 16mm, visión natural de 35mm, retrato comprimido de 85mm con bokeh, lentes macro o estética anamórfica con destellos horizontales.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">4. Lighting & Mood (Iluminación y Atmósfera):</strong> Define la emoción y el contraste lumínico: luz natural de día, la calidez de la hora dorada, claroscuros teatrales con sombras pronunciadas, o luces de neón ciberpunk.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">5. Composition & Framing (Composición Visual):</strong> Rigor geométrico del encuadre: regla de los tercios, líneas de fuga hacia el horizonte, simetría axial o encuadres naturales dentro de la escena.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">6. Location & Environment (Ubicación y Entorno):</strong> El escenario tangible de la narrativa: urbes futuristas, bosques brumosos, cafeterías íntimas o páramos espaciales.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">7. People & Action (Sujetos y Actividad):</strong> La cinética de los personajes: oratoria mirando a lente, caminatas reflexivas, interacción grupal o expresiones emocionales sutiles.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">8. Visual Style & Genre (Estilo y Grano):</strong> Tratamiento estético de la imagen: celuloide cinematográfico de 35mm con grano sutil, hiperrealismo documental, animación 3D, acuarelas o estética cómic.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">9. Advanced Effects (Efectos Avanzados):</strong> Magia de posproducción: partículas volumétricas VFX, revelaciones de producto, transiciones fluidas o atmósfera onírica y surrealista.
              </div>
            </div>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">4. ¿Por qué la interfaz es multilingüe pero el prompt sale en inglés?</h3>
            <p class="leading-relaxed">
              Puedes interactuar, leer y configurar toda la aplicación en <strong>Español, Português o English</strong>. Sin embargo, cuando presionas "Generar", el prompt final siempre se ensambla en <strong>inglés técnico de cinematografía</strong>.
            </p>
            <p class="leading-relaxed mt-2 text-slate-400">
              Esto responde a un fundamento de ingeniería de inteligencia artificial: los modelos de frontera de Google y Gemini fueron entrenados fundamentalmente con material técnico cinematográfico en lengua inglesa. Al entregar las instrucciones en inglés formal, se eliminan las ambigüedades de traducción y se garantiza la máxima fidelidad fotográfica y de movimiento.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-extrabold text-white mb-3">5. Guía de Uso Rápida para el Director</h3>
            <ol class="list-decimal list-inside space-y-2 text-slate-300">
              <li><strong>Elige el idioma:</strong> Usa el selector superior (Español / Português / English).</li>
              <li><strong>Selecciona el formato:</strong> Haz clic en Video o Imagen Estática.</li>
              <li><strong>Redacta la idea central:</strong> En la caja de texto, escribe qué sucede de manera natural y sin tecnicismos innecesarios.</li>
              <li><strong>Activa las categorías deseadas:</strong> Marca únicamente los parámetros clave para tu escena (recuerda que en dirección de arte, <em>menos es más</em>).</li>
              <li><strong>Presiona "Generar":</strong> Copia el resultado y pégalo directamente en Gemini Omni Flash, Veo o Imagen 3.</li>
            </ol>
          </div>

        </div>
      `,
      pt: `
        <div class="space-y-10 text-slate-300">
          
          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">1. O que é "EL OPTIMIZADOR DE PROMPTs"?</h3>
            <p class="leading-relaxed">
              <strong>EL OPTIMIZADOR DE PROMPTs</strong> é uma suíte de direção cinematográfica e artística assistida por inteligência artificial, desenvolvida para eliminar o abismo entre a imaginação do criador e a lógica dos modelos generativos de última geração, especialmente <strong>Gemini Omni Flash</strong>, <strong>Google Veo</strong> e <strong>Imagen 3</strong>.
            </p>
            <p class="leading-relaxed mt-3">
              Historicamente, os criadores tentavam dialogar com redes neurais amontoando palavras-chave soltas separadas por vírgula (como <em>"8k, realista, obra-prima, hiper-detalhado"</em>). Essa abordagem está ultrapassada. Modelos multimodais modernos compreendem o mundo por meio de <strong>prosa descritiva, coerência geométrica e relações cronológicas de causa e efeito</strong>. Esta ferramenta funciona como um Diretor de Fotografia automatizado, transformando conceitos brutos em instruções técnicas universais.
            </p>
          </div>

          <!-- BLOQUE DE ANUNCIO ADSENSE (ANTES DEL PUNTO 2) -->
          <div class="my-8 py-4 border-y border-slate-800/80 text-center">
            <p class="text-[11px] font-semibold tracking-widest text-slate-500 uppercase block mb-3">Anuncio</p>
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-3953039147695660"
                 data-ad-slot="5899202624"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">2. Seletor Inteligente: Modo Vídeo (Omni Flash) vs. Modo Imagem Estática</h3>
            <p class="leading-relaxed">
              Uma fotografia estática possui princípios físicos e visuais completamente distintos de uma cena audiovisual animada:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div class="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2"><span>🎬</span> Modo Vídeo (Omni Flash)</h4>
                <p class="text-xs leading-relaxed text-slate-400">
                  Desbloqueia movimentos dinâmicos de câmera (dolly, grua, panorâmicas, órbita), efeitos temporais (timelapse, câmera lenta) e a essencial <strong>camada de Áudio Nativo</strong>. O Gemini Omni Flash sintetiza sonoroplastia ambiente e foley realista sincronizado aos movimentos físicos da tomada sem trilhas sintéticas artificiais.
                </p>
              </div>
              <div class="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2"><span>📸</span> Modo Imagem Estática</h4>
                <p class="text-xs leading-relaxed text-slate-400">
                  Ao escolher foto estática, o sistema oculta instantaneamente movimento de câmera, áudio e efeitos cronológicos. A fórmula de saída foca estritamente em milimetragem óptica, profundidade de campo (bokeh), enquadramento geométrico e riqueza microscópica de textura.
                </p>
              </div>
            </div>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">3. A Arquitetura dos 9 Pilares Cinemáticos (Guia 99)</h3>
            <p class="leading-relaxed mb-4">
              O painel reúne as 99 variáveis consagradas do cinema em 9 módulos independentes e configuráveis:
            </p>
            <div class="space-y-3 text-xs sm:text-sm">
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">1. Scene & Shots (Enquadramento e Plano):</strong> Define a escala visual entre ator e ambiente (Plano Geral, Plano Médio, Close-up, POV, Drone, Ângulo Holandês).
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">2. Camera Movement (Movimento de Câmera):</strong> Exclusivo para Vídeo. Define o comportamento da lente: câmera estática, tracking suave em gimbal, aproximações dinâmicas (Push In) ou câmera na mão realista.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">3. Lens & Visual Look (Lente e Óptica):</strong> Simula ótica física: grande angular 16mm, lente natural de 35mm, retrato comprimido 85mm com bokeh, lentes macro ou estética anamórfica de cinema.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">4. Lighting & Mood (Iluminação e Atmosfera):</strong> Modula o clima visual: luz natural do dia, a calidez da Golden Hour, contrastes fortes de chiaroscuro ou luzes neon vibrantes.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">5. Composition & Framing (Composição Visual):</strong> Organização geométrica: regra dos terços, linhas de fuga direcionais, simetria central ou molduras naturais.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">6. Location & Environment (Cenário e Locação):</strong> Criação do universo cênico: cidades ciberpunk, florestas místicas, interiores aconchegantes ou ambientes cósmicos.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">7. People & Action (Personagens e Movimento):</strong> Dinâmica dos atores: postura corporal, caminhada fluida, oratória para a câmera ou expressões comoventes.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">8. Visual Style & Genre (Estilo e Textura):</strong> Texturas visuais: película 35mm com grão analógico, estilo documentário hiper-realista, anime japonês, animação 3D ou pintura aquarela.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">9. Advanced Effects (Efeitos Especiais):</strong> Pós-produção avançada: partículas volumétricas VFX, revelação comercial de produto, timelapse temporal ou clima onírico surrealista.
              </div>
            </div>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">4. Por que a interface é trilíngue e a saída é sempre em inglês?</h3>
            <p class="leading-relaxed">
              Você pode trabalhar confortavelmente em <strong>Português, Espanhol ou Inglês</strong>. No entanto, o motor sintetiza o prompt resultante invariavelmente em <strong>inglês técnico cinematográfico</strong>.
            </p>
            <p class="leading-relaxed mt-2 text-slate-400">
              Isso garante consistência absoluta. Como os modelos de ponta do Google foram treinados primariamente com o vocabulário cinematográfico internacional em inglês, essa padronização assegura máxima obediência às suas escolhas artísticas.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-extrabold text-white mb-3">5. Passo a Passo para Criar</h3>
            <ol class="list-decimal list-inside space-y-2 text-slate-300">
              <li><strong>Defina o idioma:</strong> Selecione Português no topo direito.</li>
              <li><strong>Escolha o meio:</strong> Selecione Vídeo ou Imagem Estática.</li>
              <li><strong>Descreva a ideia:</strong> Na caixa principal, escreva a ação naturalmente.</li>
              <li><strong>Ative os parâmetros essenciais:</strong> Escolha apenas as categorias que fortalecem a sua cena.</li>
              <li><strong>Gere e copie:</strong> Clique no botão de gerar e cole no Gemini Omni Flash ou Google Veo.</li>
            </ol>
          </div>

        </div>
      `,
      en: `
        <div class="space-y-10 text-slate-300">
          
          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">1. What is "EL OPTIMIZADOR DE PROMPTs"?</h3>
            <p class="leading-relaxed">
              <strong>EL OPTIMIZADOR DE PROMPTs</strong> is an AI cinematography workbench designed to bridge human imagination with the deep neural representations of state-of-the-art multimodal foundation models, specifically <strong>Gemini Omni Flash</strong>, <strong>Google Veo</strong>, and <strong>Imagen 3</strong>.
            </p>
            <p class="leading-relaxed mt-3">
              Early prompt engineering relied on stacking isolated comma-separated buzzwords (such as <em>"8k, ultra-realistic, masterpiece, cinematic"</em>). This method is obsolete. Frontier multimodal models parse <strong>continuous narrative prose, physical geometry, lighting dynamics, and cause-and-effect timeline continuity</strong>. This app acts as an automated digital Director of Photography (DP), compiling your vision into standardized professional directives.
            </p>
          </div>

          <!-- BLOQUE DE ANUNCIO ADSENSE (ANTES DEL PUNTO 2) -->
          <div class="my-8 py-4 border-y border-slate-800/80 text-center">
            <p class="text-[11px] font-semibold tracking-widest text-slate-500 uppercase block mb-3">Anuncio</p>
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-3953039147695660"
                 data-ad-slot="5899202624"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">2. Intelligent Mode Switching: Video (Omni Flash) vs. Static Image</h3>
            <p class="leading-relaxed">
              A static photograph operates under fundamentally different optical laws than an animated audiovisual sequence:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div class="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2"><span>🎬</span> Video Mode (Omni Flash)</h4>
                <p class="text-xs leading-relaxed text-slate-400">
                  Unlocks camera mechanics (tracking, orbit, dolly, pan), temporal motion pacing (slow motion, timelapse), and the critical <strong>Native Synchronized Audio Layer</strong>. Omni Flash synthesizes diegetic environmental ambience and realistic foley sound matching scene physics with zero synthetic music clutter.
                </p>
              </div>
              <div class="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2"><span>📸</span> Static Image Mode</h4>
                <p class="text-xs leading-relaxed text-slate-400">
                  When creating still imagery, camera motion, audio, and timeline effects are hidden automatically. The generation engine recalculates the prompt structure around focal length compression, depth of field (bokeh), geometrical balance, and textural render clarity.
                </p>
              </div>
            </div>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">3. The 9 Cinematic Pillars Architecture (99 Guide)</h3>
            <p class="leading-relaxed mb-4">
              The application standardizes 99 filmmaking techniques across 9 modular, toggleable categories:
            </p>
            <div class="space-y-3 text-xs sm:text-sm">
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">1. Scene & Shots:</strong> Dictates subject-to-environment scale (Establishing Shot, Wide, Medium, Close-up, POV, Drone, Dutch Angle).
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">2. Camera Movement:</strong> Video only. Commands the physical camera rig: locked tripod shots, smooth gimbal tracking, push-ins, or organic handheld motion.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">3. Lens & Visual Look:</strong> Emulates physical optics: 16mm wide-angle distortion, 35mm natural perspective, 85mm portrait compression, macro lenses, or anamorphic flare characteristics.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">4. Lighting & Mood:</strong> Establishes emotional tone and contrast: daylight, warm Golden Hour, high-contrast chiaroscuro shadows, or saturated neon glows.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">5. Composition & Framing:</strong> Spatial geometry: Rule of Thirds, horizon leading lines, axial symmetry, or foreground frames-within-frames.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">6. Location & Environment:</strong> World-building foundations: futuristic megalopolises, misty woodlands, cozy coffee shops, or alien landscapes.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">7. People & Action:</strong> Human kinetics: speaking directly to camera, contemplative walks, dynamic running, or subtle emotional nuance.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">8. Visual Style & Genre:</strong> Visual mediums: authentic 35mm film grain, 8K documentary realism, 3D render animation, watercolor, or graphic comic styling.
              </div>
              <div class="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong class="text-white">9. Advanced Effects:</strong> Production magic: volumetric VFX particles, product reveal staging, hyperlapse compression, or dreamlike surrealism.
              </div>
            </div>
          </div>

          <div class="border-b border-slate-800 pb-6">
            <h3 class="text-xl font-extrabold text-white mb-3">4. Why is the UI Multilingual while the Output Prompt is in English?</h3>
            <p class="leading-relaxed">
              You can navigate, read, and create in <strong>English, Spanish, or Portuguese</strong>. However, the resulting prompt is always compiled into <strong>industry-standard English cinematography directives</strong>.
            </p>
            <p class="leading-relaxed mt-2 text-slate-400">
              This guarantees optimal adherence. Google's frontier models were primarily trained on professional cinematography datasets annotated in English. Compiling prompts in technical English prevents translation drift and ensures high-fidelity results.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-extrabold text-white mb-3">5. Quick Director Workflow</h3>
            <ol class="list-decimal list-inside space-y-2 text-slate-300">
              <li><strong>Select your UI language:</strong> Use the language dropdown at the top.</li>
              <li><strong>Set creation medium:</strong> Toggle between Video (Omni Flash) or Static Image.</li>
              <li><strong>State the narrative action:</strong> Write the core action clearly in plain language.</li>
              <li><strong>Curate parameters:</strong> Enable only the categories that elevate your artistic intent.</li>
              <li><strong>Generate & Deploy:</strong> Copy the prompt directly into Gemini Omni Flash or Google Veo.</li>
            </ol>
          </div>

        </div>
      `
    };

    // =========================================================================
    // INICIALIZACIÓN Y CONTROLADORES DE EVENTOS
    // =========================================================================
    window.addEventListener('DOMContentLoaded', () => {
      populateCategories();
      applyLanguage(currentLang);
      setMediaType('video');
    });

    // Poblar los menús desplegables
    function populateCategories() {
      for (let catKey in guideItems) {
        const select = document.getElementById(`val_${catKey}`);
        if (!select) continue;

        const currentVal = select.value;
        select.innerHTML = '';

        const items = guideItems[catKey];
        items.forEach(item => {
          if (currentMode === 'image' && item.videoOnly) {
            return;
          }

          const opt = document.createElement('option');
          opt.value = item.en;
          const label = item[currentLang] || item.es;
          opt.textContent = `${item.id}. ${label}`;

          if (currentVal && currentVal === item.en) {
            opt.selected = true;
          }
          select.appendChild(opt);
        });
      }
    }

    // Cambiar Idioma Global (App + Manual Inferior)
    function changeLanguage(lang) {
      currentLang = lang;
      applyLanguage(lang);
      populateCategories();
    }

    function applyLanguage(lang) {
      const texts = i18n[lang];
      document.getElementById('ui_subtitle').textContent = texts.subtitle;
      document.getElementById('ui_btn_reset').textContent = texts.btn_reset;
      document.getElementById('ui_target_label').textContent = texts.target_label;
      document.getElementById('ui_target_badge').textContent = texts.target_badge;
      document.getElementById('ui_mode_video').textContent = texts.mode_video;
      document.getElementById('ui_mode_image').textContent = texts.mode_image;
      document.getElementById('ui_action_label').childNodes[2].textContent = " " + texts.action_label;
      document.getElementById('ui_required').textContent = texts.required;
      document.getElementById('mainAction').placeholder = texts.action_placeholder;
      document.getElementById('ui_action_hint').textContent = texts.action_hint;
      document.getElementById('ui_categories_title').textContent = texts.categories_title;
      document.getElementById('ui_categories_subtitle').textContent = texts.categories_subtitle;
      document.getElementById('ui_audio_title').textContent = texts.audio_title;
      document.getElementById('ui_audio_desc').textContent = texts.audio_desc;
      document.getElementById('ui_btn_generate').textContent = texts.btn_generate;
      document.getElementById('ui_output_title').textContent = texts.output_title;
      document.getElementById('copyLabel').textContent = texts.copy_label;
      document.getElementById('ui_engine_note').textContent = texts.engine_note;
      document.getElementById('ui_engine_desc').textContent = texts.engine_desc;

      // Traducir títulos de las cajas
      for (let i = 1; i <= 9; i++) {
        const lbl = document.getElementById(`label_cat${i}`);
        if (lbl) lbl.textContent = texts.cat_titles[`cat${i}`];
      }

      // Traducir cabecera del manual inferior
      document.getElementById('manual_header_title').textContent = texts.manual_title;
      document.getElementById('manual_header_subtitle').textContent = texts.manual_subtitle;

      // Inyectar el manual completo en el idioma seleccionado
      document.getElementById('manualDynamicContent').innerHTML = manualData[lang];
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }

    // Cambiar Modo: Video vs Imagen
    function setMediaType(mode) {
      currentMode = mode;
      const btnVideo = document.getElementById('btn_mode_video');
      const btnImage = document.getElementById('btn_mode_image');
      const cardCat2 = document.getElementById('card_cat2');
      const audioWrap = document.getElementById('audioWrapper');

      if (mode === 'video') {
        btnVideo.className = "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-150 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30";
        btnImage.className = "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-150 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white";
        cardCat2.classList.remove('hidden');
        audioWrap.classList.remove('hidden');
      } else {
        btnImage.className = "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-150 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30";
        btnVideo.className = "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-150 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white";
        cardCat2.classList.add('hidden');
        document.getElementById('check_cat2').checked = false;
        toggleBox('cat2');
        audioWrap.classList.add('hidden');
      }

      populateCategories();
    }

    // Mostrar / Ocultar Combobox
    function toggleBox(catKey) {
      const isChecked = document.getElementById(`check_${catKey}`).checked;
      const body = document.getElementById(`body_${catKey}`);
      if (isChecked) {
        body.classList.remove('hidden');
      } else {
        body.classList.add('hidden');
      }
    }

    // Generar el Prompt en Inglés Cinematográfico
    function generatePrompt() {
      const action = document.getElementById('mainAction').value.trim();
      const output = document.getElementById('outputBox');
      const texts = i18n[currentLang];

      if (!action) {
        output.innerHTML = `<span class="text-rose-400 font-sans font-medium">${texts.warning_empty}</span>`;
        return;
      }

      const getVal = (catKey) => {
        const chk = document.getElementById(`check_${catKey}`);
        return (chk && chk.checked) ? document.getElementById(`val_${catKey}`).value : null;
      };

      const shot = getVal('cat1');
      const camera = (currentMode === 'video') ? getVal('cat2') : null;
      const lens = getVal('cat3');
      const lighting = getVal('cat4');
      const composition = getVal('cat5');
      const location = getVal('cat6');
      const subjects = getVal('cat7');
      const style = getVal('cat8');
      const effects = getVal('cat9');
      const hasAudio = (currentMode === 'video') && document.getElementById('check_audio').checked;

      let promptParts = [];

      if (currentMode === 'video') {
        let core = action.endsWith('.') ? action : action + '.';
        promptParts.push(`Cinematic video sequence: ${core}`);

        let staging = [];
        if (location) staging.push(`situated in a ${location.toLowerCase()}`);
        if (subjects) staging.push(`depicting dynamic ${subjects.toLowerCase()}`);
        if (composition) staging.push(`composed utilizing ${composition.toLowerCase()}`);
        if (staging.length > 0) promptParts.push(`Scene framing: The environment is ${staging.join(', ')}.`);

        let camDirectives = [];
        if (shot) camDirectives.push(`${shot.toLowerCase()}`);
        if (camera) camDirectives.push(`executed with a ${camera.toLowerCase()}`);
        if (lens) camDirectives.push(`shot through a ${lens.toLowerCase()} with authentic optical characteristics`);
        if (camDirectives.length > 0) promptParts.push(`Cinematography: Captured as a ${camDirectives.join(', ')}.`);

        let aesthetic = [];
        if (lighting) aesthetic.push(`${lighting.toLowerCase()}`);
        if (style) aesthetic.push(`graded in a ${style.toLowerCase()}`);
        if (effects) aesthetic.push(`featuring ${effects.toLowerCase()}`);
        if (aesthetic.length > 0) promptParts.push(`Visual aesthetic: Illuminated with ${aesthetic.join(', ')}.`);

        if (hasAudio) {
          promptParts.push(`Audio: High-fidelity diegetic ambient audio and synchronized foley sound matching every physical interaction in the scene, studio-grade soundscape, no background music.`);
        }

      } else {
        let core = action.endsWith('.') ? action : action + '.';
        promptParts.push(`A high-end professional still photograph capturing ${core}`);

        let visualElements = [];
        if (shot) visualElements.push(`${shot.toLowerCase()}`);
        if (composition) visualElements.push(`framed with ${composition.toLowerCase()}`);
        if (lens) visualElements.push(`photographed with a ${lens.toLowerCase()} delivering sharp subject isolation`);
        if (visualElements.length > 0) promptParts.push(`Composition & Optics: ${visualElements.join(', ')}.`);

        let environmentElements = [];
        if (location) environmentElements.push(`set in a realistic ${location.toLowerCase()}`);
        if (lighting) environmentElements.push(`bathed in ${lighting.toLowerCase()}`);
        if (subjects) environmentElements.push(`showcasing ${subjects.toLowerCase()}`);
        if (environmentElements.length > 0) promptParts.push(`Environment & Lighting: ${environmentElements.join(', ')}.`);

        let renderStyle = [];
        if (style) renderStyle.push(`${style.toLowerCase()}`);
        if (effects) renderStyle.push(`${effects.toLowerCase()}`);
        renderStyle.push("ultra-detailed textures, 8k resolution, authentic film color grade");
        promptParts.push(`Aesthetic: ${renderStyle.join(', ')}.`);
      }

      output.innerText = promptParts.join(' ');
    }

    // Copiar Prompt
    function copyPrompt() {
      const output = document.getElementById('outputBox').innerText;
      const texts = i18n[currentLang];
      if (!output || output.includes(texts.output_placeholder) || output.includes('⚠️')) return;

      navigator.clipboard.writeText(output).then(() => {
        const label = document.getElementById('copyLabel');
        const icon = document.getElementById('copyIcon');
        label.textContent = texts.copy_success;
        icon.textContent = '✅';
        setTimeout(() => {
          label.textContent = texts.copy_label;
          icon.textContent = '📋';
        }, 2000);
      });
    }

    // Restablecer
    function resetAll() {
      document.getElementById('mainAction').value = '';
      for (let i = 1; i <= 9; i++) {
        const chk = document.getElementById(`check_cat${i}`);
        if (chk) {
          chk.checked = false;
          toggleBox(`cat${i}`);
        }
      }
      document.getElementById('check_audio').checked = true;
      document.getElementById('outputBox').innerHTML = `<span class="text-slate-500 italic font-sans">${i18n[currentLang].output_placeholder}</span>`;
    }