// ---- script 1 ----

    const CATALOGO_MODULOS = [
      {
        id: 'busto_frente',
        cat: '📐 Turnarounds y Vistas',
        label: '1. Busto de Frente (Ancla Principal)',
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Exact 1:1 physical clone of the character from reference photo, 100% identical facial features, master ultra-high resolution 8K photograph. Front bust portrait looking directly forward, subsurface scattering, millimetric skin pores, micro-wrinkles, fine skin texture, eyes with realistic iris reflections, exact hair texture and glasses frame. Captured at 85mm, wide open aperture f/1.8, razor-sharp focus, raw unedited photo, wearing exact same clothing from reference photo, neutral light gray studio background --ar 3:4 --style raw --s 0 --no plastic, smooth skin, airbrushed, wax, CGI, 3D render, glossy',
        usageTip: 'Vista ancla maestra del personaje. Sube tu foto base con --cref [URL_FOTO] --cw 100.',
        customLabel: 'URL de Foto Base / Parámetro Reference (--cref)',
        customPlaceholder: 'https://ejemplo.com/mifoto.jpg',
        explanationText: 'Este módulo representa la vista frontal maestra del personaje, sirviendo como la ancla fisonómica principal. Define las proporciones exactas de los ojos, nariz, boca y textura dermatológica que la IA o el artista usará como referencia central. Es indispensable en cualquier Model Sheet para fijar la identidad 1:1 del personaje.'
      },
      {
        id: 'perfil_derecho',
        cat: '📐 Turnarounds y Vistas',
        label: '2. Perfil Derecho (90°)',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Right profile portrait, facing towards the right side of the screen, right side profile 90 degrees, showing right cheek, right jawline, right ear and right side of nose. Exact 1:1 physical clone of character from reference photo. Master ultra-high resolution 8K raw photograph, millimetric skin pores, micro-wrinkles, natural skin texture, subsurface scattering, shot on 85mm prime lens, sharp focus, neutral studio background --ar 1:1 --style raw --s 0 --no plastic, airbrushed, wax, CGI',
        usageTip: 'Enfocado en la profundidad lateral derecha, mandíbula y alineación del mentón.',
        customLabel: 'Detalles de Mandíbula / Mentón (Perfil Derecho)',
        customPlaceholder: 'ej: mandíbula marcada y barbilla partida',
        explanationText: 'Muestra la proyección exacta del rostro en un ángulo estricto de 90 grados hacia la derecha. Permite documentar la silueta de la nariz, la profundidad del mentón, la línea mandibular y la forma de la oreja. Es crucial para modeladores 3D que requieren alineación precisa en las vistas orotgráficas.'
      },
      {
        id: 'perfil_izquierdo',
        cat: '📐 Turnarounds y Vistas',
        label: '3. Perfil Izquierdo (90°)',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Left profile portrait, facing towards the left side of the screen, left side profile 90 degrees, showing skull structure, hair crown, left jawline, left ear anatomy. Exact 1:1 physical clone of character from reference photo. Master ultra-high resolution 8K raw photograph, millimetric skin pores, micro-wrinkles, natural skin texture, subsurface scattering, shot on 85mm prime lens, sharp focus, neutral studio background --ar 1:1 --style raw --s 0 --no plastic, airbrushed, wax, CGI',
        usageTip: 'Enfocado en la estructura craneal del lado izquierdo y coronilla.',
        customLabel: 'Estilo de Cabello / Coronilla (Perfil Izquierdo)',
        customPlaceholder: 'ej: rapado a los lados con degradado limpio',
        explanationText: 'Ofrece la contraparte simétrica o asimétrica del perfil derecho del rostro a 90 grados. Documenta la caida del cabello, peinados asimétricos, cicatrices laterales y el contorno craneal. Resulta vital para garantizar la tridimensionalidad completa de la cabeza del personaje.'
      },
      {
        id: 'vista_tres_cuartos_d',
        cat: '📐 Turnarounds y Vistas',
        label: 'Vista 3/4 Ángulo Derecho',
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Exact 1:1 physical clone of the character from reference photo. Three-quarter front right portrait turned 45 degrees, showing volume of cheekbones, nose bridge, jaw depth, and ear. Master ultra-high resolution 8K raw photo, subsurface scattering, millimetric skin pores, fine texture, sharp focus, neutral light gray studio background --ar 3:4 --style raw --s 0 --no plastic, CGI, 3D render',
        usageTip: 'Esencial para entender la transición de volumen 3D del lado derecho.',
        customLabel: 'Estructura de Pómulos / Mejilla (3/4 Derecho)',
        customPlaceholder: 'ej: pómulos altos y prominentes',
        explanationText: 'La vista a 45 grados es el ángulo más natural y dinámico en ilustración y cine. Permite apreciar el volumen de las mejillas, el caballete nasal y la sombra del pómulo derecho. Ayuda a visualizar cómo se comporta la luz sobre la volumetría facial intermedia.'
      },
      {
        id: 'vista_tres_cuartos_i',
        cat: '📐 Turnarounds y Vistas',
        label: 'Vista 3/4 Ángulo Izquierdo',
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Exact 1:1 physical clone of the character from reference photo. Three-quarter front left portrait turned 45 degrees, showing volumetric depth of facial features, cheekbones, nose profile, and ear. Master ultra-high resolution 8K raw photo, subsurface scattering, millimetric skin pores, fine texture, sharp focus, neutral light gray studio background --ar 3:4 --style raw --s 0 --no plastic, CGI, 3D render',
        usageTip: 'Esencial para entender la transición de volumen 3D del lado izquierdo.',
        customLabel: 'Estilo de Iluminación / Sombras (3/4 Izquierdo)',
        customPlaceholder: 'ej: sombras marcadas estilo claroscuro',
        explanationText: 'Presenta el giro de 45 grados hacia la izquierda, complementando la perspectiva de 3/4. Revela la tridimensionalidad facial del lado izquierdo y el comportamiento del cabello o accesorios. Es fundamental para concept art y retratos promocionales del personaje.'
      },
      {
        id: 'vista_espalda_busto',
        cat: '📐 Turnarounds y Vistas',
        label: 'Vista Posterior / Espalda Busto',
        aspectRatioText: '3:4',
        aspectRatioNum: 3/4,
        promptTemplate: 'Exact 1:1 physical clone of the character from reference photo. Back view bust portrait seen from behind, showing exact hair crown texture, neck collar, and upper back clothing details. Master ultra-high resolution 8K raw photo, razor-sharp focus, neutral studio background --ar 3:4 --style raw --s 0 --no face, front features',
        usageTip: 'Documenta la coronilla del cabello y el cuello de la vestimenta por detrás.',
        customLabel: 'Detalles de Nuca o Cuello de Ropa',
        customPlaceholder: 'ej: cuello alto de cuero con bordado dorado',
        explanationText: 'Captura la cabeza y hombros desde una perspectiva totalmente trasera (180°). Permite registrar el peinado en la nuca, la coronilla, remolinos de cabello y detalles posteriores de cuellos o capuchas. Elimina las dudas sobre cómo luce el personaje cuando se le observa por detrás.'
      },
      {
        id: 'giro_cabeza',
        cat: '📐 Turnarounds y Vistas',
        label: 'Giro de Cabeza Completo (Head Turnaround)',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Master character model sheet sequence displaying 4 head angles of the exact same character from reference photo: front view, 45-degree angle, side profile, and back of the head. 100% identical facial identity, skin texture, micro-pores, and hair structure across all angles. 8K resolution raw studio photography, neutral gray background --ar 16:9 --style raw --s 0 --no inconsistent features, plastic skin, CGI',
        usageTip: 'Rotación coordinada exclusiva de la cabeza para documentar el peinado y rasgos.',
        customLabel: 'Número de Ángulos en Secuencia',
        inputType: 'select',
        selectOptions: ['4 Ángulos (Frente, 45°, Perfil, Espalda)', '8 Ángulos (Rotación 360°)'],
        explanationText: 'Muestra una secuencia coordinada de rotación de la cabeza en un solo panel panorámico. Integra en línea los ángulos frontal, 3/4, perfil y posterior para verificar la coherencia. Es la prueba definitiva de consistencia fisonómica para producción de animación e IA.'
      },
      {
        id: 'vista_superior_inferior',
        cat: '📐 Turnarounds y Vistas',
        label: 'Vista Superior (Top) e Inferior (Bottom)',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'High resolution technical reference sheet showing top-down (birds eye view) and bottom-up angles of the character head and shoulders from reference photo. Precise anatomical perspective, showing crown of head, hair parting, shoulder breadth, and jawline from high and low angles. Raw photograph, studio lighting --ar 16:9 --style raw --s 0 --no distorted perspective',
        usageTip: 'Perspectiva aérea y cenital para cascos, hombreras y mandíbula.',
        customLabel: 'Accesorio Cenital / Casco / Capucha',
        customPlaceholder: 'ej: casco táctico con visera transparente',
        explanationText: 'Ofrece ángulos picados (vista aére/top) y contrapicados (inferior/bottom) de la cabeza y hombros. Permite observar la forma de la coronilla, la anchura de hombros desde arriba y la parte inferior de la mandíbula o barbilla. Esencial para maquetar prendas con volumen superior como hombreras o gorros.'
      },

      {
        id: 'expresiones_clave',
        cat: '😀 Rostro y Expresividad',
        label: 'Panel de Expresiones Clave (6 Emociones)',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Master character expression sheet displaying 6 distinct close-up emotions of the exact same person from reference photo: neutral, joyful laugh, deep sadness, furious anger, extreme surprise, and disgust. 100% identical facial identity, skin micro-pores, muscle tension wrinkles, eyes, and hair across all emotions. 8K raw studio photo --ar 16:9 --style raw --s 0 --no inconsistent face, distorted features',
        usageTip: 'Define la personalidad del personaje mediante las 6 emociones universales.',
        customLabel: 'Personalizar 6 Emociones Clave',
        customPlaceholder: 'ej: neutro, risa malvada, guiño, ira, miedo, sorpresa',
        explanationText: 'Reúne en un solo panel las 6 reacciones emocionales fundamentales del personaje. Muestra cómo cambian las arrugas de expresión, cejas, boca y ojos bajo distintas intensidades dramáticas. Sirve como guía de actuación para animadores 3D e ilustradores.'
      },
      {
        id: 'visemas',
        cat: '😀 Rostro y Expresividad',
        label: 'Sincronización Labial y Visemas',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Viseme lip-sync character reference sheet showing 6 close-up mouth phoneme configurations (A, E, I, O, U, F/V) of the person from reference photo. Highly detailed mouth anatomy, lip creases, teeth alignment, skin micro-texture, and jaw movement. 8K raw photography, neutral background --ar 16:9 --style raw --s 0 --no extra teeth, distorted lips',
        usageTip: 'Documenta la configuración bucal para animación y sincronización labial.',
        customLabel: 'Configuración de Vocales / Fonemas',
        customPlaceholder: 'ej: A, E, I, O, U, F/V, M/B/P',
        explanationText: 'Muestra las posturas anatómicas de los labios y dentadura para los fonemas principales (visemas de voz). Es la herramienta técnica indispensable para el departamento de Lip-Sync y animación facial. Asegura que la vocalización mantenga la forma característica de la boca del personaje.'
      },
      {
        id: 'macro_ojos',
        cat: '😀 Rostro y Expresividad',
        label: 'Macro Detalle: Ojos e Iris',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro 100mm lens photograph focusing on the eye and iris texture of the character from reference photo. Ultra-high resolution millimetric skin texture, individual eyelashes, wet iris reflections, sclera blood vessels, skin pores, and fine eye wrinkles. Subsurface scattering, raw unedited photo --ar 1:1 --style raw --s 0 --no smooth skin, digital painting, CGI',
        usageTip: 'Captura el iris, pestaña y reflejos oculares a nivel hiperrealista.',
        customLabel: 'Color y Patrón del Iris / Heterocromía',
        customPlaceholder: 'ej: iris verde esmeralda con motas doradas',
        explanationText: 'Un primerísimo plano macro enfocado exclusivamente en la estructura del iris, párpados y pestañas. Captura los pigmentos cromáticos, reflejos de luz y venas de la esclerótica en calidad fotográfica. Permite a los artistas de texturizado 3D replicar la mirada exacta del personaje.'
      },
      {
        id: 'macro_piel_poros',
        cat: '😀 Rostro y Expresividad',
        label: 'Macro Detalle: Piel y Poros Dermatológicos',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro dermatological photograph focusing on the cheek and jaw skin texture of the character from reference photo. Millimetric skin pores, micro-wrinkles, natural skin oils, fine vellus facial hair, subsurface scattering, 8K ultra-detailed raw photograph, studio rim light --ar 1:1 --style raw --s 0 --no smooth skin, airbrushed, plastic, wax',
        usageTip: 'Referencia dermatológica milimétrica para mapeo de textura facial.',
        customLabel: 'Tipo de Piel / Condición Dermatológica',
        customPlaceholder: 'ej: piel curtida por el sol con pecas densas',
        explanationText: 'Un acercamiento dermatológico milimétrico a la piel de las mejillas y barbilla. Expone el grano, los poros, microarrugas, vello facial y la respuesta de dispersión subsuperficial (SSS). Es el estándar de calidad hiperrealista 8K para evitar acabados plásticos o acartonados.'
      },
      {
        id: 'macro_boca_dientes',
        cat: '😀 Rostro y Expresividad',
        label: 'Macro Detalle: Boca, Labios y Dientes',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro close-up photograph focusing on the lips, mouth, and teeth structure of the character from reference photo. Millimetric lip texture creases, moisture gloss, skin pores around mouth, natural teeth enamel texture. High resolution raw photo, sharp focus --ar 1:1 --style raw --s 0 --no distorted teeth, plastic skin',
        usageTip: 'Alineación de dentadura, textura de labios y arrugas peribucales.',
        customLabel: 'Rasgos Dentales / Piercings',
        customPlaceholder: 'ej: caninos ligeramente afilados y piercing en labio',
        explanationText: 'Plano macro detallado del área peribucal, bordes de los labios y la alineación dental. Registra las grietas naturales de la mucosa labial, el brillo de humedad y la tonalidad del esmalte de los dientes. Evita inconsistencias al generar sonrisas o gestos con la boca abierta.'
      },
      {
        id: 'macro_nariz',
        cat: '😀 Rostro y Expresividad',
        label: 'Macro Detalle: Nariz y Puente Nasal',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro close-up photograph focusing on the nose structure, nostril contour, and nose bridge of the character from reference photo. Millimetric skin pores, natural skin texture, freckles, micro-wrinkles, subsurface scattering, 8K raw photography --ar 1:1 --style raw --s 0 --no smooth skin, airbrushed',
        usageTip: 'Detalle de fosas nasales, pecas y puente óseo del caballete nasal.',
        customLabel: 'Forma de Nariz / Puente Nasal',
        customPlaceholder: 'ej: nariz aguileña con pequeña cicatriz en puente',
        explanationText: 'Focus macro directo sobre el caballete nasal, alas nasales y fosas. Muestra con precisión si el puente es aguileño, recto o respingado, además de pecas o poros grasos en la zona T. Define la personalidad central de la estructura media del rostro.'
      },
      {
        id: 'macro_oreja',
        cat: '😀 Rostro y Expresividad',
        label: 'Macro Detalle: Oreja y Cartílago',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro close-up photograph focusing on the ear anatomy, cartilage folds, lobe, and surrounding skin texture of the character from reference photo. Subsurface scattering light passing through ear cartilage, millimetric skin pores, fine hair, 8K raw photo --ar 1:1 --style raw --s 0 --no distorted ear, smooth plastic',
        usageTip: 'Estructura anatómica del cartílago auricular y lóbulo.',
        customLabel: 'Modificación Auricular / Aretes',
        customPlaceholder: 'ej: oreja tipo elfo con arete de aro de plata',
        explanationText: 'Fotografía detallada de los pliegues del hélix, lóbulo y cartílago auricular. Permite observar cómo atraviesa la luz a través del cartílago (translucidez) y documentar aretes o piercings. Es vital para no descuidar una de las partes anatómicas más complejas de modelar.'
      },
      {
        id: 'macro_cicatrices',
        cat: '😀 Rostro y Expresividad',
        label: 'Macro Detalle: Cicatrices, Lunares y Marcas',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Extreme macro close-up photograph focusing on unique facial scars, moles, birthmarks, and skin imperfections of the character from reference photo. Millimetric scar tissue texture, skin pores, natural skin tone variation, 8K raw photo, sharp focus --ar 1:1 --style raw --s 0 --no airbrushed skin, CGI',
        usageTip: 'Documentación milimétrica de marcas de nacimiento, lunares o cicatrices.',
        customLabel: 'Descripción de Marcas / Cicatrices',
        customPlaceholder: 'ej: cicatriz vertical sobre la ceja derecha',
        explanationText: 'Módulo de inspección en zoom para rasgos característicos únicos como cicatrices, queloides o lunares. Detalla el relieve del tejido cicatrizal y la variación del tono cutáneo alrededor de la marca. Otorga historia visual y narrativa propia al rostro del personaje.'
      },

      {
        id: 'cuerpo_frente',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: '4. Cuerpo Entero Frente (Sin Cabeza)',
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: 'NO HEAD, NO NECK, headless full body front view of the person from reference photo. Clean horizontal crop right at the shirt collar seam line with zero neck skin or head visible. Neutral relaxed standing pose with both arms resting straight down at sides. Millimetric fabric weave texture, seams, buttons, trousers fold, and footwear matching reference photo. 8K raw photo, neutral studio background --ar 9:16 --style raw --s 0 --no head, neck, face, skin above collar',
        usageTip: 'Evita deformaciones faciales aislando 100% el vestuario y calzado frontal.',
        customLabel: 'Descripción del Atuendo Frontal Completo',
        customPlaceholder: 'ej: chaqueta de cuero negra, jeans oscuros y botas tácticas',
        explanationText: 'Aísla el cuerpo entero en vista frontal eliminando la cabeza desde el cuello de la prenda. Esto previene que los motores de IA distorsionen el rostro al abarcar tanta altura vertical. Se utiliza para mapear el vestuario, caídas de tela, botones y calzado con máxima resolución.'
      },
      {
        id: 'cuerpo_espalda',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: '5. Cuerpo Entero Espalda (Sin Mochila)',
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: 'Full body back view of the person from reference photo, standing straight seen directly from behind, with NO backpack. Tight vertical framing filling entire height. Back of exact same outfit, shirt fabric weave, trousers folds, and footwear matching reference image. 8K raw photograph, neutral light gray studio background --ar 9:16 --style raw --s 0 --no backpack, bags',
        usageTip: 'Muestra la caída limpia del vestuario trasero sin mochilas ni bolsas.',
        customLabel: 'Detalles o Emblemas en la Espalda',
        customPlaceholder: 'ej: emblema de calavera bordado en hilo blanco',
        explanationText: 'Vista posterior completa de cuerpo entero tomada exactamente a 180 grados desde atrás. Permite documentar las costuras traseras, pliegues de pantalones, cinturones y talones de botas. Es fundamental para tener la referencia completa de vestuario en modelos 3D transitables.'
      },
      {
        id: 'cuerpo_perfil',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: '6. Cuerpo Entero de Perfil (Lado)',
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: '90-degree full body side profile view of the person from the reference photo. Neutral relaxed standing pose looking directly to the side, both arms resting straight down at the sides. Tight vertical framing filling the entire height of the frame from the top of the head down to the boots at the bottom edge. Showing complete side view of the exact same outfit, shirt, pants, and footwear strictly matching the reference image. Master ultra-high resolution 8K photograph, subsurface scattering, millimetric skin pores on visible skin, sharp focus, raw unedited photograph, neutral light gray studio background --ar 9:16 --style raw --s 0 --no plastic, smooth skin, airbrushed, wax, CGI, 3D render, glossy',
        usageTip: 'Enfoque en silueta lateral y caída de la vestimenta. Sube tu foto base con --cref [URL_FOTO] --cw 100.',
        customLabel: 'Detalles de Ropa / Perfil Lateral',
        customPlaceholder: 'ej: pliegues de chaqueta y costuras laterales',
        explanationText: 'Muestra la silueta de perfil entero a 90 grados de pie. Registra la postura corporal, el grosor del torso, bolsillos laterales y el vuelo de abrigos o capas. Incluye una casilla para elegir opcionalmente si se incluye o descarta la cabeza para mayor nitidez del traje.'
      },

      {
        id: 'pose_neutra_t',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: 'Pose Neutra en T (T-Pose / A-Pose)',
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: 'Full body front view standing in neutral A-pose with arms extended outwards at 45 degrees, hands open showing fingers, feet flat on ground. Exact 1:1 physical clone of character from reference photo. Master 8K full height standing raw photograph, neutral studio lighting --ar 9:16 --style raw --s 0 --no bent limbs, distorted hands',
        usageTip: 'Pose técnica rígida necesaria para modelado 3D, escultura y rigging.',
        customLabel: 'Pose Técnica Deseada',
        inputType: 'select',
        selectOptions: ['A-Pose (Brazos a 45°)', 'T-Pose (Brazos Horizontales a 90°)'],
        explanationText: 'Pose ortográfica técnica con extremidades separadas en ángulo neutro (A-Pose o T-Pose). Facilita el proceso de escultura digital, modelado orgánico y colocación de huesos de animación (Rigging). Es el requisito primordial en los pipelines de VFX y videojuegos.'
      },
      {
        id: 'lectura_silueta',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: 'Lectura de Silueta Vectorial',
        aspectRatioText: '9:16',
        aspectRatioNum: 9/16,
        promptTemplate: 'Solid black vector silhouette cutout of the character in signature standing pose, high contrast pure black shape isolated on clean light gray background, crisp outer edge contour, graphic design presentation --ar 9:16 --style raw --s 0 --no interior details, colors',
        usageTip: 'Permite evaluar si la forma exterior es icónica y reconocible.',
        customLabel: 'Color de Fondo de la Silueta',
        customPlaceholder: 'ej: blanco puro / gris claro',
        explanationText: 'Representación vectorial recortada en negro sólido sobre fondo neutro. Ayuda a evaluar el diseño conceptual comprobando si el personaje es reconocible únicamente por su contorno exterior. Es un principio básico del Character Design para probar la fuerza icónica de la forma.'
      },
      {
        id: 'guia_proporciones',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: 'Guía de Proporciones en Cabezas (1:8)',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Technical character proportions reference sheet displaying full body front pose next to an 8-heads height grid diagram. Exact 1:1 physical clone of character from reference photo, demonstrating anatomical scale and body ratio. Clean studio photography --ar 16:9 --style raw --s 0 --no distorted grid, warped anatomy',
        usageTip: 'Documenta la altura oficial del personaje medida en número de cabezas.',
        customLabel: 'Proporción en Número de Cabezas',
        inputType: 'select',
        selectOptions: ['8 Cabezas (Escala Heroica Standard)', '7 Cabezas (Escala Realista)', '9 Cabezas (Escala Estilizada)'],
        explanationText: 'Esquema métrico que subdivide la altura total del personaje usando como unidad de medida el tamaño de su propia cabeza (ej. 8 cabezas). Establece si la figura es realista, heroica o estilizada. Mantiene las proporciones corporales unificadas en todo el equipo de producción.'
      },
      {
        id: 'macro_manos_unas',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: 'Detalle Anatómico: Manos y Uñas',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Anatomy detail photograph focusing on character hands, palm creases, knuckles, fingernails, skin pores, and hand posture matching reference photo. Ultra-high resolution 8K raw photo, millimetric skin texture, sharp focus --ar 16:9 --style raw --s 0 --no extra fingers, deformed hands',
        usageTip: 'Referencia de manos en palma, dorso, uñas y textura de nudillos.',
        customLabel: 'Estado de Manos y Nudillos / Guantes',
        customPlaceholder: 'ej: nudillos desgastados por combate, guantes sin dedos',
        explanationText: 'Estudio de detalle centrado en las manos, arrugas palmares, nudillos y uñas. Corrige una de las principales fallas anatómicas al documentar exactamente la anatomía de los dedos y articulaciones. Muestra si las manos poseen cicatrices, guantes o anillos.'
      },
      {
        id: 'macro_pies_calzado',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: 'Detalle Anatómico: Pies, Suelas y Calzado',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Detail reference photograph focusing on the character footwear, boots texture, leather/fabric seams, sole tread pattern, and feet alignment matching reference photo. High resolution 8K raw photography, sharp studio light --ar 16:9 --style raw --s 0 --no distorted shoes',
        usageTip: 'Detalle de costuras de botas, grabado de suela y postura de calzado.',
        customLabel: 'Tipo de Calzado y Grabado de Suela',
        customPlaceholder: 'ej: botas militares de cuero con suela antiderrapante',
        explanationText: 'Enfoque técnico en las botas, zapatos o pies descalzos del personaje. Ilustra el relieve de las suelas, materiales del calzado, agujetas e inclinación de los tobillos. Fundamental para los artistas de utilería que necesitan modelar el calzado con precisión.'
      },
      {
        id: 'poses_accion',
        cat: '🧍 Cuerpo, Proporciones y Estructura',
        label: 'Hoja de Poses Dinámicas y de Acción',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Character action pose sheet showing 3 dynamic, athletic postures typical of the character role. Exact 1:1 physical clone of person from reference photo, maintaining face identity and outfit consistency in motion. 8K raw photo --ar 16:9 --style raw --s 0 --no distorted face, broken limbs',
        usageTip: 'Muestra el lenguaje corporal y comportamiento en movimiento.',
        customLabel: 'Describir 3 Acciones Dinámicas',
        customPlaceholder: 'ej: corriendo a máxima velocidad, esquivando disparo, salto en el aire',
        explanationText: 'Presenta al personaje en 3 posturas atléticas y de acción activa. Evalúa cómo interactúa la vestimenta durante movimientos extremos y giros corporales. Aporta dinamismo a la ficha, mostrando la actitud, agilidad y peso dramático en movimiento.'
      },

      {
        id: 'ficha_props',
        cat: '👗 Vestuario y Props',
        label: 'Ficha de Accesorios y Armas (Props)',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Isolated object reference sheet displaying character individual equipment, weapons, bags, belts, and tools. Clean orthographic views with realistic material textures (leather grain, brushed metal, fabric weave), matching reference photo, neutral studio background --ar 16:9 --style raw --s 0 --no character body',
        usageTip: 'Aísla las herramientas, objetos y armas con sus materiales exactos.',
        customLabel: 'Lista de Objetos / Armas Aisladas',
        customPlaceholder: 'ej: katana de acero, reloj táctico, radio portátil',
        explanationText: 'Desglose ortográfico de todos los elementos portátiles, armas, mochilas y herramientas. Muestra los objetos aislados sin el cuerpo del personaje para estudiar su mecánica y acabados de material. Es la hoja de utilería primaria para modeladores de props.'
      },
      {
        id: 'variacion_outfits',
        cat: '👗 Vestuario y Props',
        label: 'Variaciones de Atuendo y Ropa',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Character outfit variation sheet showing the same person in 3 distinct clothing configurations (casual, tactical/armor, formal). Exact 1:1 identical facial features and body build across all three full-body views. 8K raw studio photography --ar 16:9 --style raw --s 0 --no inconsistent face',
        usageTip: 'Muestra al personaje vistiendo diferentes prendas sin alterar el rostro.',
        customLabel: '3 Tipos de Ropa / Atuendos',
        customPlaceholder: 'ej: casual urbano, traje de combate táctico, traje de gala',
        explanationText: 'Exhibe al mismo personaje usando distintas mudas de ropa o trajes (ej: versión civil, armadura, formal). Demuestra la consistencia del rostro a través de múltiples atuendos. Ayuda a planificar el vestuario para distintas escenas de una producción narrativa.'
      },
      {
        id: 'piezas_desmontables',
        cat: '👗 Vestuario y Props',
        label: 'Piezas Desmontables (Capas, Máscaras, Cascos)',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Character reference sheet showing removable outfit pieces (cape, mask, helmet, jacket) isolated on side, and character wearing vs not wearing them. Exact identity match to reference photo, raw photography --ar 16:9 --style raw --s 0',
        usageTip: 'Aísla elementos removibles mostrando qué prendas hay debajo.',
        customLabel: 'Pieza Desmontable Específica',
        customPlaceholder: 'ej: máscara de gas táctica y capucha removible',
        explanationText: 'Demuestra cómo luce el personaje con y sin prendas de vestir superpuestas como capas, abrigos o cascos. Enseña las capas ocultas del traje que no se ven a primera vista. Esencial para comprender la modularidad de la vestimenta.'
      },
      {
        id: 'modo_sujecion',
        cat: '👗 Vestuario y Props',
        label: 'Modo de Sujeción (Hebillas, Correas, Broches)',
        aspectRatioText: '1:1',
        aspectRatioNum: 1/1,
        promptTemplate: 'Macro close-up detail shot focusing on clothing fasteners, buckles, straps, zippers, buttons, and attachment mechanisms of character outfit from reference photo. Millimetric material texture, raw photo --ar 1:1 --style raw --s 0',
        usageTip: 'Detalle de enganches, correas, hebillas y broches de vestuario.',
        customLabel: 'Mecanismo de Cierre / Hebillas',
        customPlaceholder: 'ej: hebillas de liberación rápida de polímero negro',
        explanationText: 'Un macro enfocado en los sistemas de cierre, correaje, cierres metálicos y hebillas. Explica la lógica funcional de cómo se abrocha o ajusta el traje al cuerpo. Aporta verosimilitud física y credibilidad de diseño industrial a la vestimenta.'
      },

      {
        id: 'paleta_color',
        cat: '🎨 Color, Materiales y Producción',
        label: 'Paleta de Muestras de Color (Swatches)',
        aspectRatioText: '4:3',
        aspectRatioNum: 4/3,
        promptTemplate: 'Clean graphic design color palette reference sheet with circular swatches representing primary color codes for skin tone, eye iris, hair, shirt, pants, and footwear of character from reference photo. Minimalist presentation --ar 4:3 --style raw --s 0',
        usageTip: 'Códigos cromáticos puros para piel, ojos, cabello y ropa.',
        customLabel: 'Colores Clave (Piel, Cabello, Ropa)',
        customPlaceholder: 'ej: piel clara, cabello negro azabache, ropa verde oliva',
        explanationText: 'Ficha gráfica minimalista con muestras circulares de color (Swatches) para piel, ojos, cabello y ropa. Proporciona los valores cromáticos de referencia para el equipo de iluminación y texturizado. Garantiza la fidelidad del color en diferentes motores de render.'
      },
      {
        id: 'guia_materiales',
        cat: '🎨 Color, Materiales y Producción',
        label: 'Guía de Materiales y Texturas',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Close-up material reference sheet highlighting textures of leather grain, metal shine, cloth weave, and skin surface from character reference photo. High detail studio lighting --ar 16:9 --style raw --s 0',
        usageTip: 'Especifica la respuesta lumínica y tacto de metal, cuero y tela.',
        customLabel: 'Materiales y Texturas Predominantes',
        customPlaceholder: 'ej: cuero envejecido, fibra de carbono, algodón pesado',
        explanationText: 'Muestra planos cerrados sobre las materias primas del personaje (metales, cueros, fibras de carbono, telas). Define la rugosidad, especularidad y reflexión lumínica de las prendas. Es la pauta principal para los mapas de sombreadores PBR (Physically Based Rendering).'
      },
      {
        id: 'escala_comparativa',
        cat: '🎨 Color, Materiales y Producción',
        label: 'Escala Comparativa de Altura',
        aspectRatioText: '16:9',
        aspectRatioNum: 16/9,
        promptTemplate: 'Height scale comparison reference sheet showing character standing next to a standard metric height measuring chart (in meters and feet). Straight posture, clear grid lines on wall background --ar 16:9 --style raw --s 0',
        usageTip: 'Ajusta la estatura real del personaje respecto al mundo.',
        customLabel: 'Estatura Exacta del Personaje',
        customPlaceholder: 'ej: 185 cm / 6\'1"',
        explanationText: 'Ubica al personaje junto a una tabla graduada en metros y pies. Establece la altura real exacta del personaje en relación con el entorno u otros personajes de la obra. Evita errores de escala durante el ensamblaje de escenas cinematográficas.'
      }
    ];

    const MASTER_W = 3840;
    const MASTER_H = 2160;
    const GAP = 20;

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

    /* REGLAS NEÓN AMARILLAS DE ALINEACIÓN INTELIGENTE (SNAPPING) */
    let activeSnapLines = [];

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
    const dynamicPromptsContainer = document.getElementById('dynamicPromptsContainer');

    /* POPUP DE AYUDA FISONÓMICA (?) */
    const floatingHelpPopup = document.getElementById('floatingHelpPopup');
    const helpTitle = document.getElementById('helpTitle');
    const helpBody = document.getElementById('helpBody');
    const btnCloseHelp = document.getElementById('btnCloseHelp');

    function init() {
      pobladoDropdownCatalog();
      cargarModulosIniciales();
      generarControlesUI();
      actualizarSeccionPrompts();
      resizePreviewCanvas();
      window.addEventListener('resize', resizePreviewCanvas);
      setupEventListeners();
      updateCaliperUI();
      renderAll();
    }

    function pobladoDropdownCatalog() {
      const grupos = {};
      CATALOGO_MODULOS.forEach(m => {
        if (!grupos[m.cat]) grupos[m.cat] = [];
        grupos[m.cat].push(m);
      });

      selectNuevoModulo.innerHTML = '';
      Object.keys(grupos).forEach(cat => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = cat;
        grupos[cat].forEach(m => {
          const opt = document.createElement('option');
          opt.value = m.id;
          opt.innerText = m.label;
          optgroup.appendChild(opt);
        });
        selectNuevoModulo.appendChild(optgroup);
      });
    }

    function cargarModulosIniciales() {
      panelesActivos = [];
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
        activeModulesContainer.innerHTML = '<p style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:10px;">No hay módulos activos. Añade uno con el selector de arriba.</p>';
        return;
      }

      panelesActivos.forEach((panel, idx) => {
        const isLoaded = panel.img !== null;
        const isCollapsed = panel.collapsed !== false;
        const isSource = sourceCopyPanelIndex === idx;

        const cardHTML = `
          <div class="upload-card ${isLoaded ? 'loaded' : ''} ${isSource ? 'source-active' : ''}" id="card-${panel.idInstancia}">
            <div class="upload-card-header">
              <span>${idx + 1}. ${panel.label}</span>
              <div class="card-actions-top">
                <button class="btn-equal-ratio ${isSource ? 'active' : ''}" onclick="toggleSourceCopy(${panel.idInstancia})" title="Copiar Ratio y Tamaño para aplicar a otro módulo (Filtro Rojo)">=</button>
                <small style="color:${isLoaded ? '#10b981' : 'var(--text-muted)'}; margin-right:4px;">${isLoaded ? '✓' : 'Vacío'}</small>
                <button class="btn-delete-module" onclick="eliminarModulo(${panel.idInstancia})" title="Eliminar Módulo">🗑️</button>
              </div>
            </div>
            
            <label class="upload-btn">
              📂 Seleccionar Foto
              <input type="file" class="file-input" accept="image/*" onchange="cargarImagenModulo(event, ${panel.idInstancia})">
            </label>

            <div class="panel-section-toggle" onclick="toggleControlsCollapse(${panel.idInstancia})" title="Desplegar/Plegar Controles">
              <span>🖼️ ENCUADRE DE FOTO (Ratio ${panel.aspectRatioText})</span>
              <span style="font-size:0.85rem;">${isCollapsed ? '▼' : '▲'}</span>
            </div>

            <div class="panel-controls ${isCollapsed ? '' : 'active'}" id="controls-${panel.idInstancia}">
              ${isLoaded ? `
                <div class="control-row">
                  <label>🔍 Zoom <span id="val-zoom-${panel.idInstancia}">${panel.zoom.toFixed(2)}x</span></label>
                  <input type="range" class="input-range" min="0.5" max="3" step="0.05" value="${panel.zoom}" oninput="actualizarControlModulo(${panel.idInstancia}, 'zoom', this.value)">
                </div>
                <div class="control-row">
                  <label>↔️ Pan Foto X <span id="val-panX-${panel.idInstancia}">${Math.round(panel.panX)}</span></label>
                  <input type="range" class="input-range" min="-800" max="800" step="2" value="${panel.panX}" oninput="actualizarControlModulo(${panel.idInstancia}, 'panX', this.value)">
                </div>
                <div class="control-row">
                  <label>↕️ Pan Foto Y <span id="val-panY-${panel.idInstancia}">${Math.round(panel.panY)}</span></label>
                  <input type="range" class="input-range" min="-800" max="800" step="2" value="${panel.panY}" oninput="actualizarControlModulo(${panel.idInstancia}, 'panY', this.value)">
                </div>
              ` : `
                <p style="font-size:0.75rem; color:var(--text-muted); text-align:center; padding:6px 0;">Sube una foto para activar los controles de Zoom y Panorámica.</p>
              `}
            </div>
          </div>
        `;
        activeModulesContainer.insertAdjacentHTML('beforeend', cardHTML);
      });
    }

    function getFormattedPrompt(panel) {
      let prompt = panel.promptTemplate;
      const val = (panel.customValue || '').trim();

      switch(panel.tipo) {
        case 'busto_frente':
          if (val.startsWith('http') || val.startsWith('--cref')) {
            let crefStr = val.startsWith('--cref') ? val : `--cref ${val} --cw 100`;
            return `${prompt} ${crefStr}`;
          } else if (val) {
            return prompt.replace(/--ar/, `${val}, --ar`);
          }
          return prompt;
        case 'perfil_derecho':
          return val ? prompt.replace(/--ar/, `with ${val}, --ar`) : prompt;
        case 'perfil_izquierdo':
          return val ? prompt.replace(/--ar/, `with ${val}, --ar`) : prompt;
        case 'vista_tres_cuartos_d':
          return val ? prompt.replace(/--ar/, `featuring ${val}, --ar`) : prompt;
        case 'vista_tres_cuartos_i':
          return val ? prompt.replace(/--ar/, `with ${val}, --ar`) : prompt;
        case 'vista_espalda_busto':
          return val ? prompt.replace(/--ar/, `featuring ${val}, --ar`) : prompt;
        case 'giro_cabeza':
          if (val.includes('8')) {
            return prompt.replace('4 head angles', '8 head angles');
          }
          return val ? prompt.replace(/--ar/, `displaying ${val}, --ar`) : prompt;
        case 'vista_superior_inferior':
          return val ? prompt.replace(/--ar/, `featuring ${val}, --ar`) : prompt;
        case 'expresiones_clave':
          return val ? prompt.replace(/neutral, joyful laugh, deep sadness, furious anger, extreme surprise, and disgust/, val) : prompt;
        case 'visemas':
          return val ? prompt.replace(/phoneme configurations \(A, E, I, O, U, F\/V\)/, `phoneme configurations (${val})`) : prompt;
        case 'macro_ojos':
          return val ? prompt.replace(/--ar/, `featuring ${val}, --ar`) : prompt;
        case 'macro_piel_poros':
          return val ? prompt.replace(/--ar/, `showing ${val}, --ar`) : prompt;
        case 'macro_boca_dientes':
          return val ? prompt.replace(/--ar/, `featuring ${val}, --ar`) : prompt;
        case 'macro_nariz':
          return val ? prompt.replace(/--ar/, `showing ${val}, --ar`) : prompt;
        case 'macro_oreja':
          return val ? prompt.replace(/--ar/, `featuring ${val}, --ar`) : prompt;
        case 'macro_cicatrices':
          return val ? prompt.replace(/--ar/, `focusing on ${val}, --ar`) : prompt;
        case 'cuerpo_frente':
          return val ? prompt.replace(/--ar/, `wearing ${val}, --ar`) : prompt;
        case 'cuerpo_espalda':
          return val ? prompt.replace(/--ar/, `featuring ${val}, --ar`) : prompt;

        case 'cuerpo_perfil':
          let sidePrompt = prompt;
          if (val.startsWith('http') || val.startsWith('--cref')) {
            let crefStr = val.startsWith('--cref') ? val : `--cref ${val} --cw 100`;
            sidePrompt = `${sidePrompt} ${crefStr}`;
          } else if (val) {
            sidePrompt = sidePrompt.replace(/--ar/, `showing ${val}, --ar`);
          }

          if (panel.includeHead) {
            return sidePrompt.replace(/90-degree full body side profile view/, 'FULL BODY WITH HEAD AND NECK VISIBLE, 90-degree full body side profile view');
          } else {
            return sidePrompt.replace(/90-degree full body side profile view/, 'NO HEAD, NO NECK, headless 90-degree full body side profile view');
          }

        case 'pose_neutra_t':
          let basePose = prompt;
          if (val.toLowerCase().includes('t-pose') || val.includes('90')) {
            basePose = basePose.replace('A-pose with arms extended outwards at 45 degrees', 'T-pose with horizontal arms extended at 90 degrees');
          }
          if (panel.includeHead) {
            return basePose.replace(/Full body front view/, 'FULL BODY WITH HEAD AND NECK VISIBLE, 100% identical facial features, front view');
          } else {
            return basePose.replace(/Full body front view/, 'NO HEAD, NO NECK, headless full body front view');
          }

        case 'lectura_silueta':
          return val ? prompt.replace(/clean light gray background/, `clean ${val} background`) : prompt;
        case 'guia_proporciones':
          if (val.includes('7')) return prompt.replace('8-heads', '7-heads');
          if (val.includes('9')) return prompt.replace('8-heads', '9-heads');
          return prompt;
        case 'macro_manos_unas':
          return val ? prompt.replace(/--ar/, `showing ${val}, --ar`) : prompt;
        case 'macro_pies_calzado':
          return val ? prompt.replace(/--ar/, `featuring ${val}, --ar`) : prompt;
        case 'poses_accion':
          return val ? prompt.replace(/3 dynamic, athletic postures/, `3 action postures: ${val}`) : prompt;
        case 'ficha_props':
          return val ? prompt.replace(/--ar/, `displaying ${val}, --ar`) : prompt;
        case 'variacion_outfits':
          return val ? prompt.replace(/3 distinct clothing configurations \(casual, tactical\/armor, formal\)/, `3 distinct clothing configurations (${val})`) : prompt;
        case 'piezas_desmontables':
          return val ? prompt.replace(/--ar/, `showing removable ${val}, --ar`) : prompt;
        case 'modo_sujecion':
          return val ? prompt.replace(/--ar/, `focusing on ${val}, --ar`) : prompt;
        case 'paleta_color':
          return val ? prompt.replace(/--ar/, `swatches for ${val}, --ar`) : prompt;
        case 'guia_materiales':
          return val ? prompt.replace(/--ar/, `textures of ${val}, --ar`) : prompt;
        case 'escala_comparativa':
          return val ? prompt.replace(/--ar/, `marked at exactly ${val} on height chart, --ar`) : prompt;
        default:
          return val ? prompt.replace(/--ar/, `${val}, --ar`) : prompt;
      }
    }

    function actualizarCustomValuePrompt(idInstancia, value) {
      const panel = panelesActivos.find(p => p.idInstancia === idInstancia);
      if (panel) {
        panel.customValue = value;
        const txtElement = document.getElementById(`prompt-txt-${panel.idInstancia}`);
        if (txtElement) {
          txtElement.innerText = getFormattedPrompt(panel);
        }
        const restoreBtn = document.getElementById(`btn-restore-${panel.idInstancia}`);
        if (restoreBtn) {
          restoreBtn.style.display = value ? 'inline-block' : 'none';
        }
      }
    }

    function togglePoseHead(idInstancia, checked) {
      const panel = panelesActivos.find(p => p.idInstancia === idInstancia);
      if (panel) {
        panel.includeHead = checked;
        const txtElement = document.getElementById(`prompt-txt-${panel.idInstancia}`);
        if (txtElement) {
          txtElement.innerText = getFormattedPrompt(panel);
        }
      }
    }

    function restaurarCustomValuePrompt(idInstancia) {
      const panel = panelesActivos.find(p => p.idInstancia === idInstancia);
      if (panel) {
        panel.customValue = '';
        actualizarSeccionPrompts();
      }
    }

    function actualizarSeccionPrompts() {
      dynamicPromptsContainer.innerHTML = '';

      if (panelesActivos.length === 0) {
        dynamicPromptsContainer.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:20px;">Añade módulos a tu hoja para ver sus prompts correspondientes aquí debajo.</p>';
        return;
      }

      panelesActivos.forEach((panel, idx) => {
        const formattedPrompt = getFormattedPrompt(panel);

        let inputControlHTML = '';
        if (panel.inputType === 'select') {
          const opts = panel.selectOptions.map(opt => `<option value="${opt}" ${panel.customValue === opt ? 'selected' : ''}>${opt}</option>`).join('');
          inputControlHTML = `
            <select class="input-text" style="margin-top:6px;" onchange="actualizarCustomValuePrompt(${panel.idInstancia}, this.value)">
              <option value="">-- Seleccionar Opción (Predeterminado) --</option>
              ${opts}
            </select>
          `;
        } else {
          inputControlHTML = `
            <input type="text" class="input-text" style="margin-top:6px;" placeholder="${panel.customPlaceholder || ''}" value="${panel.customValue || ''}" oninput="actualizarCustomValuePrompt(${panel.idInstancia}, this.value)">
          `;
        }

        let headCheckboxHTML = '';
        if (panel.tipo === 'pose_neutra_t' || panel.tipo === 'cuerpo_perfil') {
          headCheckboxHTML = `
            <div style="margin-top:8px; border-top:1px dashed rgba(255,255,255,0.1); padding-top:6px;">
              <label style="display:inline-flex; align-items:center; gap:6px; font-size:0.8rem; font-weight:700; color:var(--text-main); cursor:pointer;">
                <input type="checkbox" id="chk-head-${panel.idInstancia}" ${panel.includeHead ? 'checked' : ''} onchange="togglePoseHead(${panel.idInstancia}, this.checked)" style="accent-color:var(--accent);"> ¿Incluye cabeza y cuello?
              </label>
            </div>
          `;
        }

        const cardHTML = `
          <div class="prompt-card">
            <div class="prompt-card-header">
              <div class="prompt-title">📷 Pieza ${idx + 1}: ${panel.label}</div>
            </div>
            <ul class="prompt-specs">
              <li>• <strong>Ratio Requerido:</strong> <code>--ar ${panel.aspectRatioText}</code></li>
              <li>• <strong>Enfoque de Calidad:</strong> Hiperrealismo milimétrico 8K, poros, micro-textura y referencia fisonómica 1:1.</li>
            </ul>

            <div style="background:rgba(59, 130, 246, 0.08); border:1px solid rgba(59, 130, 246, 0.25); padding:10px 12px; border-radius:6px; margin:10px 0;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <label style="font-size:0.8rem; font-weight:700; color:var(--accent);">💡 Ajuste Personalizado (Uso Recomendado): ${panel.customLabel}</label>
                <button id="btn-restore-${panel.idInstancia}" onclick="restaurarCustomValuePrompt(${panel.idInstancia})" style="background:none; border:none; color:#ef4444; font-size:0.75rem; cursor:pointer; font-weight:700; display:${panel.customValue ? 'inline-block' : 'none'};">🔄 Restaurar Base</button>
              </div>
              ${inputControlHTML}
              ${headCheckboxHTML}
            </div>

            <div class="prompt-box-wrapper">
              <div class="prompt-text" id="prompt-txt-${panel.idInstancia}">${formattedPrompt}</div>
              <button class="btn-copy" onclick="copyPromptText(this, 'prompt-txt-${panel.idInstancia}')">📋 Copiar Prompt</button>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:10px;">💡 <strong>Uso Recomendado:</strong> ${panel.usageTip}</p>
          </div>
        `;
        dynamicPromptsContainer.insertAdjacentHTML('beforeend', cardHTML);
      });
    }

    btnAgregarModulo.addEventListener('click', () => {
      const id = selectNuevoModulo.value;
      const def = CATALOGO_MODULOS.find(m => m.id === id);
      if (def) {
        const nuevoPanel = {
          idInstancia: Date.now() + Math.random(),
          tipo: id,
          label: def.label,
          aspectRatioText: def.aspectRatioText,
          aspectRatioNum: def.aspectRatioNum,
          promptTemplate: def.promptTemplate,
          usageTip: def.usageTip,
          customLabel: def.customLabel,
          customPlaceholder: def.customPlaceholder,
          explanationText: def.explanationText || 'Explicación del módulo en la hoja de personaje.',
          inputType: def.inputType || 'text',
          selectOptions: def.selectOptions || [],
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
        actualizarSeccionPrompts();
        renderAll();
      }
    });

    function eliminarModulo(idInstancia) {
      const idx = panelesActivos.findIndex(p => p.idInstancia === idInstancia);
      if (sourceCopyPanelIndex === idx) sourceCopyPanelIndex = -1;
      else if (sourceCopyPanelIndex > idx) sourceCopyPanelIndex--;

      panelesActivos = panelesActivos.filter(p => p.idInstancia !== idInstancia);
      generarControlesUI();
      actualizarSeccionPrompts();
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
      helpTitle.innerText = panel.label;
      helpBody.innerText = panel.explanationText || 'Este módulo sirve como referencia fisonómica para el Model Sheet del personaje.';
      
      floatingHelpPopup.style.display = 'block';

      // Posicionamiento inteligente cerca del clic
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
            targetCtx.fillText(panel.label, px + pw / 2, py + ph / 2);
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

          // DIBUJAR BOTONES CONSOLA DEL MÓDULO (= y ?)
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

          const handleSize = Math.max(12, 20 * scaleFactor);
          targetCtx.fillStyle = (selectedPanelIndex === idx) ? "#3b82f6" : "rgba(255, 255, 255, 0.7)";
          targetCtx.fillRect(px + pw - handleSize, py + ph - handleSize, handleSize, handleSize);
          
          targetCtx.fillStyle = "#000000";
          targetCtx.font = `${Math.round(handleSize * 0.7)}px sans-serif`;
          targetCtx.textAlign = "center";
          targetCtx.textBaseline = "middle";
          targetCtx.fillText("↘", px + pw - handleSize / 2, py + ph - handleSize / 2);
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

      /* 1) CALIBRE CON LÍNEAS MÁS MARCADAS Y CÍRCULOS EXTREMOS (4X ANCHO) */
      if (showGuides && !isExport) {
        targetCtx.save();
        const calLineWidth = Math.max(4, 6 * scaleFactor);
        const circleRadius = calLineWidth * 2; // Círculo con diámetro = 4 * ancho de línea

        // LÍNEA DE OJOS (ROJA)
        const eyeY = guideEyeY * scaleFactor;
        targetCtx.strokeStyle = "rgba(239, 68, 68, 1)";
        targetCtx.lineWidth = calLineWidth;
        targetCtx.setLineDash([10 * scaleFactor, 5 * scaleFactor]);
        
        targetCtx.beginPath();
        targetCtx.moveTo(0, eyeY);
        targetCtx.lineTo(renderW, eyeY);
        targetCtx.stroke();
        targetCtx.setLineDash([]);

        // CÍRCULOS EXTREMOS ROJOS
        targetCtx.fillStyle = "#ef4444";
        targetCtx.beginPath();
        targetCtx.arc(circleRadius, eyeY, circleRadius, 0, Math.PI * 2);
        targetCtx.arc(renderW - circleRadius, eyeY, circleRadius, 0, Math.PI * 2);
        targetCtx.fill();

        // LÍNEA DE MENTÓN (AZUL)
        const chinY = guideChinY * scaleFactor;
        targetCtx.strokeStyle = "rgba(59, 130, 246, 1)";
        targetCtx.lineWidth = calLineWidth;
        targetCtx.setLineDash([10 * scaleFactor, 5 * scaleFactor]);

        targetCtx.beginPath();
        targetCtx.moveTo(0, chinY);
        targetCtx.lineTo(renderW, chinY);
        targetCtx.stroke();
        targetCtx.setLineDash([]);

        // CÍRCULOS EXTREMOS AZULES
        targetCtx.fillStyle = "#3b82f6";
        targetCtx.beginPath();
        targetCtx.arc(circleRadius, chinY, circleRadius, 0, Math.PI * 2);
        targetCtx.arc(renderW - circleRadius, chinY, circleRadius, 0, Math.PI * 2);
        targetCtx.fill();

        targetCtx.restore();
      }

      /* 3) DIBUJO DE LÍNEAS DE ALINEACIÓN INTELIGENTE NEÓN AMARILLAS (CANVAS SNAPPING) */
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
    }

    function setupEventListeners() {
      // EVENTOS CERRAR POPUP AYUDA (?)
      btnCloseHelp.addEventListener('click', cerrarAyudaModulo);
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

          // CLICK EN BOTÓN AYUDA (?)
          const inHelpBtn = (mouseX >= btnHelpX && mouseX <= btnHelpX + btnSize &&
                             mouseY >= btnY && mouseY <= btnY + btnSize);

          if (inHelpBtn) {
            mostrarAyudaModulo(panelesActivos[i], e.clientX, e.clientY);
            return;
          }

          // CLICK EN BOTÓN IGUALAR RATIO (=)
          const inEqualsBtn = (mouseX >= btnEqualX && mouseX <= btnEqualX + btnSize &&
                               mouseY >= btnY && mouseY <= btnY + btnSize);

          if (inEqualsBtn) {
            toggleSourceCopy(panelesActivos[i].idInstancia);
            return;
          }

          const inResizeZone = (mouseX >= g.x + g.w - handleMargin && mouseX <= g.x + g.w + 10 &&
                                mouseY >= g.y + g.h - handleMargin && mouseY <= g.y + g.h + 10);

          if (inResizeZone) {
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
              actualizarSeccionPrompts();
              renderAll();
              return;
            }

            selectedPanelIndex = i;
            interactionMode = 'drag';
            dragStartX = mouseX;
            dragStartY = mouseY;
            initialGeo = { ...g };
            break;
          }
        }

        renderAll();
      });

      /* 3) ALINEACIÓN INTELIGENTE A MANO ALZADA CON SNAPPING Y LÍNEAS NEÓN AMARILLAS */
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

            const SNAP_THRESHOLD = 12; // Tolerancia en píxeles
            
            // Puntos clave del módulo arrastrado
            const curLeft = targetX;
            const curCenterX = targetX + p.geo.w / 2;
            const curRight = targetX + p.geo.w;

            const curTop = targetY;
            const curCenterY = targetY + p.geo.h / 2;
            const curBottom = targetY + p.geo.h;

            // Centros del Lienzo Maestro
            const canvasCenterX = MASTER_W / 2;
            const canvasCenterY = MASTER_H / 2;

            // 1. Alineación con Centro de Lienzo
            if (Math.abs(curCenterX - canvasCenterX) < SNAP_THRESHOLD) {
              targetX = canvasCenterX - p.geo.w / 2;
              activeSnapLines.push({ type: 'v', val: canvasCenterX });
            }
            if (Math.abs(curCenterY - canvasCenterY) < SNAP_THRESHOLD) {
              targetY = canvasCenterY - p.geo.h / 2;
              activeSnapLines.push({ type: 'h', val: canvasCenterY });
            }

            // 2. Alineación con otros módulos
            panelesActivos.forEach((other, oIdx) => {
              if (oIdx === selectedPanelIndex) return;
              const og = other.geo;
              const oLeft = og.x;
              const oCenterX = og.x + og.w / 2;
              const oRight = og.x + og.w;

              const oTop = og.y;
              const oCenterY = og.y + og.h / 2;
              const oBottom = og.y + og.h;

              // Alineaciones Horizontales (eje Y)
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

              // Alineaciones Verticales (eje X)
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

    init();
  
;
// [PROTECCIÓN DE DOMINIO ELIMINADA PARA USO LOCAL]
