// ---- script 1 ----

    // =========================================================================
    // BASE DE DATOS COMPLETA DE 65 ESTILOS CINEMATOGRÁFICOS SÓLIDOS Y DETALLADOS
    // (CON TRADUCCIÓN COMPLETA AL ESPAÑOL EN DETALLE VISUAL Y PROMPT PBR EN INGLÉS)
    // =========================================================================
    const styles = [
      // -----------------------------------------------------------------------
      // 1. FRUTAS, POSTRES Y CONFITERÍA GOURMET (15 Estilos Sólidos e Íntegros)
      // -----------------------------------------------------------------------
      {
        id: 101,
        category: "postres",
        name: "🍫 Chocolate Negro Templado Sólido (Gourmet Solid Chocolate)",
        promptMaterial: "sculpted entirely from solid glossy 70% dark tempered chocolate: perfectly smooth polished chocolate surface, seamless monolithic solid form, crisp clean sculpted bevel contours, rich mahogany undertones, micro-fine satin conched finish catching high-specular rim reflections, completely solid and intact, no melting, no cracks, no dripping",
        descEs: "Esculpido enteramente en chocolate negro 70% templado, brillante y sólido: superficie perfectamente pulida y suave, forma monolítica uniforme, contornos biselados limpios, tonos caoba profundos, acabado satinado conchado que captura reflejos de alta especularidad, completamente sólido e intacto, sin derretimiento, sin grietas y sin goteo."
      },
      {
        id: 102,
        category: "postres",
        name: "🍦 Helado Soft-Serve Esculpido y Firme (Sculpted Frozen Soft-Serve)",
        promptMaterial: "sculpted dense frozen soft-serve ice cream sculpture: rigid firm spiral churn swirls, micro-ice crystalline sparkle, dense rich creamy texture with smooth velvet finish, crisp defined aesthetic ridges, glistening frozen vanilla and ruby strawberry fruit glaze, pristine solid form, no melting, no drips",
        descEs: "Escultura de helado soft-serve congelado y denso: espirales firmes y rígidas, destellos de microcristales de hielo, textura cremosa densa con acabado aterciopelado suave, crestas estéticas nítidas, glaseado frutal congelado de vainilla y fresa rubí, forma sólida impecable, sin derretir ni gotear."
      },
      {
        id: 103,
        category: "postres",
        name: "🍊 Pulpa de Cítricos Sólida y Tensa (Solid Citrus Vesicles)",
        promptMaterial: "solid sculpted citrus fruit sculpture carved from dense translucent ruby-red grapefruit and blood-orange flesh: firm tightly packed cellular juice vesicles under pristine surface tension, luminous subsurface scattering, polished citrus zest rind with micro-oil pores, fresh glistening dew sheen, firm intact organic geometry, no bursting, no dripping",
        descEs: "Escultura tallada en pulpa densa y translúcida de pomelo rubí y naranja sanguina: vesículas de jugo celulares firmes y compactas bajo tensión superficial impecable, dispersión subsuperficial luminosa, corteza pulida con microporos de aceite esencial, brillo fresco de rocío, geometría orgánica firme e intacta."
      },
      {
        id: 104,
        category: "postres",
        name: "🍓 Fresa Silvestre Firme con Aquenios (Pristine Wild Strawberry)",
        promptMaterial: "solid pristine wild strawberry sculpture: firm vibrant crimson fruit flesh with multi-layered internal subsurface scattering, hundreds of tiny golden seed achenes neatly embedded in uniform organic micro-dimples, glossy lacquer-like fresh surface sheen, perfectly firm and intact geometry, no bruising",
        descEs: "Escultura de fresa silvestre firme e impecable: pulpa de fruto carmesí vibrante con dispersión subsuperficial multicapa, cientos de diminutos aquenios dorados incrustados con precisión en micro-hoyuelos uniformes, brillo lacado fresco, geometría perfectamente firme e intacta."
      },
      {
        id: 105,
        category: "postres",
        name: "🍩 Donut Glaseado Estructurado (Structured Glazed Donut)",
        promptMaterial: "solid sculpted golden-fried brioche donut: firm structured pastry volume with microscopic airy texture, coated in a pristine smooth semi-translucent vanilla enamel glaze, topped with crisp vibrant rainbow sugar sprinkles, high-specular appetizing highlights, perfectly intact solid form",
        descEs: "Donut de masa brioche frita dorada y sólida: volumen de pastelería estructurado y firme con microtextura aireada, recubierto con glaseado esmaltado de vainilla semitranslúcido y liso, coronado con chispas de azúcar arcoíris nítidas, reflejos apetitosos de alta especularidad, forma sólida intacta."
      },
      {
        id: 106,
        category: "postres",
        name: "🍮 Crème Brûlée Pulida y Caramelo Cristalino (Polished Crème Brûlée)",
        promptMaterial: "solid sculpted French crème brûlée dessert sculpture: smooth polished golden-amber torched caramel glass top with flawless glassy reflections, layered over firm dense vanilla bean custard with microscopic specks of Madagascar vanilla, crisp beveled edges, pristine monolithic structure, no cracks, no burning",
        descEs: "Escultura de crème brûlée francesa sólida: cubierta de caramelo dorado sopleteado liso y pulido con reflejos vítreos perfectos, sobre una base de crema densa de vainilla con micro-puntos de vainilla de Madagascar, bordes biselados nítidos, estructura monolítica limpia, sin grietas ni quemaduras."
      },
      {
        id: 107,
        category: "postres",
        name: "🍬 Caramelo Butterscotch Sólido (Solid Carved Butterscotch)",
        promptMaterial: "solid carved golden salted caramel candy: firm dense butterscotch structure with warm honey-amber translucency, silky smooth polished exterior catching golden studio rim highlights, micro-encrusted with geometric cubic sea-salt crystals, firm pristine solid block geometry, no melting, no liquid flow",
        descEs: "Caramelo de mantequilla y toffee dorado tallado en bloque sólido: estructura densa y firme con calidez translúcida ámbar-miel, exterior suave y pulido que atrapa luces doradas de estudio, micro-incrustado con cristales cúbicos de sal marina, bloque sólido e intacto, sin flujo líquido."
      },
      {
        id: 108,
        category: "postres",
        name: "🍭 Caramelo de Isomalt / Tanghulu Intacto (Flawless Hard Sugar Glass)",
        promptMaterial: "solid clear candied isomalt hard sugar shell: flawless optical glass transparency with zero inclusions, ultra-glossy mirror-reflective syrup glaze sealing the vibrant fruit underneath, sharp pristine refractive light caustics, perfectly solid and unbroken, no cracks, no shattering",
        descEs: "Cáscara de caramelo duro de isomalt transparente y sólido: transparencia óptica vítrea impecable sin impurezas, glaseado reflectante como espejo que sella la fruta viva debajo, cáusticas de refracción nítidas, perfectamente sólido, sin roturas ni fisuras."
      },
      {
        id: 109,
        category: "postres",
        name: "☁️ Algodón de Azúcar Escultural (Sculpted Spun Sugar Cloud)",
        promptMaterial: "solid sculpted spun-sugar cloud sculpture: dense architectural lattice of microscopic pastel-pink sugar filaments, soft fibrous micro-depth, warm glowing translucent backlight illuminating internal volume, structured aesthetic cloud shape, completely intact and dry, no collapse, no stickiness",
        descEs: "Escultura de nube de azúcar hilada sólida: entramado arquitectónico denso de filamentos microscópicos de azúcar rosa pastel, micro-profundidad fibrosa suave, luz de fondo cálida que ilumina el volumen interno, forma estructurada impecable, completamente seca e intacta."
      },
      {
        id: 110,
        category: "postres",
        name: "🥐 Croissant Hojaldrado Laminado Firme (Laminated Butter Pastry)",
        promptMaterial: "solid sculpted golden-brown French puff pastry: hundreds of crisp micro-laminated buttery layers cleanly sculpted into a crescent form, deep caramelized golden-ochre sheen, firm structured honeycomb texture, pristine clean crust finish, no flaking, no crumbling",
        descEs: "Hojaldre francés dorado y esculpido: cientos de capas micro-laminadas de mantequilla esculpidas limpiamente en forma de media luna, brillo ocre dorado caramelizado, textura alveolar firme y estructurada, corteza limpia e intacta, sin desmoronarse."
      },
      {
        id: 111,
        category: "postres",
        name: "🧇 Waffle Belga Dorado y Glaseado Sólido (Crisp Belgian Waffle Sculpture)",
        promptMaterial: "solid golden Belgian waffle sculpture: crisp architectural deep square pockets, toasted honeycomb grid geometry, topped with a polished solid amber maple glaze, pristine powdered sugar dusting, clean sculpted edges, solid and intact, no dripping, no sogginess",
        descEs: "Escultura de waffle belga dorado: bolsillos cuadrados profundos y geométricos, cuadrícula tostada perfecta, recubierto con glaseado pulido y sólido de arce ámbar, espolvoreado con azúcar glas impecable, bordes definidos y sólidos, sin goteos."
      },
      {
        id: 112,
        category: "postres",
        name: "🧋 Perlas Boba de Azúcar Moreno Esculpidas (Solid Tapioca Pearls)",
        promptMaterial: "sculpted solid brown-sugar tapioca boba sphere sculpture: glossy solid obsidian-amber spheres with smooth reflective gel coat, set in a dense sculpted marble of sweet cream with satin fluid curvature, high-contrast optical depth, clean solid form",
        descEs: "Escultura de esferas de tapioca boba de azúcar moreno sólidas: esferas ámbar-obsidiana brillantes con capa de gel reflectante pulida, integradas en un mármol denso de crema dulce con curvas satinadas, profundidad óptica de alto contraste, forma sólida y limpia."
      },
      {
        id: 113,
        category: "postres",
        name: "🫐 Pitaya Exótica y Kiwi Tallados (Sculpted Exotic Dragonfruit)",
        promptMaterial: "solid carved exotic dragonfruit and kiwi flesh: vibrant magenta-white or neon-emerald firm fruit pulp, symmetrically embedded with crisp tiny black seeds, polished smooth exterior with glistening micro-refractive sheen, solid intact structure",
        descEs: "Pulpa firme tallada de pitaya exótica y kiwi: carne frutal firme magenta o esmeralda neón, incrustada simétricamente con diminutas semillas negras nítidas, exterior suave y pulido con brillo micro-refractivo, estructura sólida e intacta."
      },
      {
        id: 114,
        category: "postres",
        name: "🧁 Macaron Francés Pulido (Parisian Macaron Sculpture)",
        promptMaterial: "sculpted Parisian almond macaron: satin-smooth porcelain-like eggshell crust, crisp uniform ruffled feet along the base, filled with a firm dense velvety ganache layer, clean geometric profile, fine almond flour texture, perfectly intact, no crumbling",
        descEs: "Macaron parisino de almendra esculpido: corteza lisa de acabado porcelana satinada, base ondulada uniforme y nítida, relleno de ganache aterciopelado firme y denso, perfil geométrico limpio, textura de harina de almendra fina, completamente íntegro."
      },
      {
        id: 115,
        category: "postres",
        name: "🔥 Malvavisco Gourmet Tostado Sólido (Toasted Solid Marshmallow)",
        promptMaterial: "solid sculpted gourmet marshmallow cube: firm velvety powdery exterior in toasted ivory and warm amber gradient, dense aerated foam structure, soft matte light absorption, clean sharp beveled edges, perfectly solid and intact, no melting, no sticky threads",
        descEs: "Cubo de malvavisco gourmet tostado sólido: exterior aterciopelado y empolvado en gradiente marfil y ámbar tostado, estructura de espuma densa aireada, absorción de luz mate suave, bordes biselados limpios, completamente sólido e intacto, sin derretir."
      },

      // -----------------------------------------------------------------------
      // 2. ARTESANÍAS, ESCULTURA Y MADERAS (6 Estilos)
      // -----------------------------------------------------------------------
      {
        id: 1,
        category: "artesanias",
        name: "🪵 Madera Tallada a Mano (Hand-Carved Hardwood)",
        promptMaterial: "hand-carved from solid natural hardwood: visible deliberate flat chisel facets and gouge cuts across contoured surfaces, continuous flowing honey-toned sapwood and dark amber heartwood grain, fine filled wood pores, softly burnished edges, matte tung-oil finish catching low anisotropic specular sheen, solid monolithic block",
        descEs: "Tallado en madera noble natural maciza: facetas planas de cincel y cortes de gubia intencionados y visibles, vetas continuas en tonos miel y ámbar oscuro, poros finos sellados, bordes suavemente bruñidos, acabado mate al aceite de tung con brillo anisotrópico suave, bloque monolítico sólido."
      },
      {
        id: 2,
        category: "artesanias",
        name: "🧸 Plastilina Stop-Motion Firme (Plasticine Claymation)",
        promptMaterial: "handcrafted stop-motion plasticine clay sculpture: dense pliable clay modeling with delicate clean thumbprint textures and deliberate sculpting tool marks, smooth continuous surface joints, rich tactile matte sheen, crisp studio key-lighting with soft ambient occlusion, completely intact solid modeling",
        descEs: "Escultura artesanal en plastilina stop-motion: modelado denso con huellas dactilares sutiles y marcas de espátula limpias, uniones continuas sin fisuras, brillo mate táctil, iluminación de estudio con oclusión ambiental suave, modelado sólido completamente íntegro."
      },
      {
        id: 3,
        category: "artesanias",
        name: "🏺 Porcelana Imperial con Oro Kintsugi (Bonded Kintsugi Porcelain)",
        promptMaterial: "solid imperial porcelain ceramic with pristine Kintsugi gold inlay: flawless eggshell-white glossy glazed ceramic surface, inlaid with smooth raised flush lines of pure polished 24k gold lacquer, mirror-smooth enamel reflections, delicate porcelain subsurface translucency, completely bonded, solid, sturdy and intact",
        descEs: "Cerámica de porcelana imperial sólida con incrustación Kintsugi de oro: superficie esmaltada brillante blanco cáscara de huevo, con líneas en relieve enrasadas de laca de oro 24k pulido, reflejos de esmalte espejo, translucidez subsuperficial delicada, sólidamente unida, robusta e intacta."
      },
      {
        id: 4,
        category: "artesanias",
        name: "🪡 Fieltro Agujado Artesanal Denso (Dense Needle-Felted Wool)",
        promptMaterial: "dense needle-felted wool craft sculpture: tightly compacted wool fibers forming a firm sculptural volume, subtle halo of fine barbed micro-fibers catching soft rim light, tactile hand-punched surface density, rustic matte stop-motion warmth, sturdy solid fiber construction",
        descEs: "Escultura de lana afieltrada densa: fibras compactadas firmemente formando un volumen escultórico robusto, halo sutil de microfibras que atrapa luz de contorno suave, densidad táctil perforada a mano, calidez rústica mate de animación stop-motion, construcción sólida y firme."
      },
      {
        id: 5,
        category: "artesanias",
        name: "🧱 Cerámica Terracota Bruñida (Burnished Terracotta Clay)",
        promptMaterial: "solid unglazed terracotta ceramic: fine granular sand-tempered dense clay body, subtle concentric throwing ridges from a master potter's wheel, natural chalky matte finish in warm earthy orange-ochre tones, smooth stone-burnished exterior with dry tactile warmth, robust solid structure",
        descEs: "Cerámica de terracota sin esmaltar sólida: cuerpo denso de arcilla fina con arena, sutiles estrías concéntricas del torno de alfarero, acabado mate natural en tonos ocre-naranja tierra, exterior bruñido con piedra suave y cálido al tacto, estructura sólida y robusta."
      },
      {
        id: 6,
        category: "artesanias",
        name: "🏛️ Mosaico Veneciano Terrazzo Pulido (Polished Terrazzo Composite)",
        promptMaterial: "solid polished Italian terrazzo composite: ultra-dense seamless cement matrix embedded with flush polished flecks of Carrara marble, quartz crystals, and golden mica flakes, mirror-honed satin stone luster with internal mineral depth, solid unyielding slab",
        descEs: "Compuesto de terrazo italiano pulido sólido: matriz de cemento ultra densa y continua con incrustaciones pulidas de mármol de Carrara, cristales de cuarzo y escamas de mica dorada, brillo satinado pulido espejo con profundidad mineral, losa maciza indeformable."
      },

      // -----------------------------------------------------------------------
      // 3. VIDRIO, CRISTAL Y MINERALES (10 Estilos)
      // -----------------------------------------------------------------------
      {
        id: 7,
        category: "minerales",
        name: "⛪ Vitral Catedral Gótico Estructural (Stained Glass Mosaic)",
        promptMaterial: "architectural stained glass window panel: vibrant solid jewel-toned translucent glass segments (deep cobalt, ruby, amber) tightly set into solid polished oxidized black lead came framing, pristine glass ripples, glowing volumetric light transmission, robust intact gothic mosaic",
        descEs: "Panel de vitral arquitectónico de catedral: segmentos de vidrio translúcido en tonos joya (cobalto profundo, rubí, ámbar) sólidamente encajados en marcos de plomo negro oxidado y pulido, ondulaciones vítreas impecables, transmisión de luz volumétrica brillante, mosaico gótico robusto e intacto."
      },
      {
        id: 8,
        category: "minerales",
        name: "🔥 Vidrio Soplado Térmico Sólido (Solid Blown Borosilicate Glass)",
        promptMaterial: "sculpted solid blown borosilicate art glass: smooth fluid monolithic curves with internal glowing gradient from fiery amber to deep crimson, sharp optical caustic refractions, ultra-glossy mirror reflection curves, microscopic spherical cooling bubbles suspended in thick transparent solid crystal volume",
        descEs: "Vidrio de borosilicato artístico soplado macizo: curvas fluidas monolíticas con gradiente interno luminoso de ámbar ardiente a carmesí profundo, refracciones cáusticas ópticas nítidas, curvas de reflexión espejo ultra brillantes, microburbujas esféricas suspendidas en cristal macizo transparente."
      },
      {
        id: 9,
        category: "minerales",
        name: "❄️ Escultura de Hielo Glacial Monolítica (Solid Carved Glacial Ice)",
        promptMaterial: "sculpted solid optical glacial ice: pristine monolithic clear ice with deep cyan-blue subsurface light diffusion, razor-sharp geometric carved facets, crisp refractive light caustics, fine frosted satin rim finish, solid frozen structure, no cracks, no melting, no water dripping",
        descEs: "Hielo glacial óptico esculpido macizo: hielo transparente monolítico con difusión subsuperficial azul cian profundo, facetas geométricas talladas de extrema nitidez, cáusticas de luz cristalina, borde satinado escarchado, estructura congelada sólida, sin grietas, sin derretir y sin goteo."
      },
      {
        id: 10,
        category: "minerales",
        name: "🌋 Obsidiana Volcánica y Minerales de Fuego (Solid Obsidian & Fire Minerals)",
        promptMaterial: "solid monolithic volcanic black obsidian stone: razor-sharp conchoidal glass facets with jet-black mirror reflections, embedded with sealed solid crystalline veins of glowing volcanic amber and orange minerals, crisp sculpted contours, dense solid igneous rock, no crumbling, no liquid magma leakage",
        descEs: "Piedra de obsidiana negra volcánica monolítica: facetas de fractura concoidea afiladas con reflejos espejo negro azabache, con vetas cristalinas sólidas y selladas de minerales ámbar y naranja brillante, contornos limpios, roca ígnea densa y sólida, sin fisuras ni desprendimientos."
      },
      {
        id: 11,
        category: "minerales",
        name: "🗿 Mármol Blanco de Carrara Puro (Polished Carrara Marble)",
        promptMaterial: "classical Carrara marble sculpture: pure milky-white solid polished metamorphic stone with delicate smoky-gray mineral veins running through the volume, soft stone subsurface light scattering, hand-chiseled satin-honed finish with razor-clean beveled contours",
        descEs: "Escultura en mármol blanco clásico de Carrara: piedra metamórfica pulida blanco lechoso puro con finas vetas gris humo a través del volumen, dispersión de luz subsuperficial suave, acabado satinado apomazado a mano con biseles impecables."
      },
      {
        id: 12,
        category: "minerales",
        name: "🌊 Vidrio Marino Esmerilado Sólido (Satin Frosted Sea Glass)",
        promptMaterial: "solid weathered sea-glass sculpture: frosted satin-matte surface texture, smooth water-tumbled pebble contours, soft diffused seafoam-green and pale turquoise inner glow under ambient lighting, solid monolithic glass body",
        descEs: "Escultura en vidrio marino pulido por el oleaje: textura superficial esmerilada satinada mate, contornos redondeados suaves, resplandor interno difuso verde espuma marina y turquesa pálido bajo luz ambiental, cuerpo de vidrio macizo."
      },
      {
        id: 13,
        category: "minerales",
        name: "🌈 Cristal de Bismuto Escalonado (Hopper Bismuth Crystals)",
        promptMaterial: "solid stepped hopper bismuth crystal: architectural 90-degree concentric geometric staircases, vibrant rainbow iridescent oxide interference film shifting through electric purple, teal, and gold, high metallic crystalline luster with sharp mirror facets, rigid geometric structure",
        descEs: "Cristal de bismuto escalonado sólido: escaleras geométricas concéntricas en ángulo de 90 grados, película de óxido iridiscente arcoíris que cambia entre púrpura eléctrico, verde azulado y oro, brillo metálico cristalino con facetas espejo, estructura rígida."
      },
      {
        id: 14,
        category: "minerales",
        name: "🪲 Ámbar Báltico Pulido (Solid Polished Amber Gem)",
        promptMaterial: "solid polished Baltic amber gem: deep warm honey-gold optical clarity, internal crystalline spangles catching golden backlit caustics, polished cabochon surface with rich resinous luster, completely solid and intact",
        descEs: "Gema de ámbar báltico pulida maciza: claridad óptica profunda en tono miel dorada, destellos cristalinos internos que atrapan cáusticas a contraluz, superficie en cabujón pulido con brillo resinoso, completamente sólida e intacta."
      },
      {
        id: 15,
        category: "minerales",
        name: "🔮 Geoda de Amatista y Cuarzo Intacta (Amethyst Crystal Geode)",
        promptMaterial: "solid mineral geoda sculpture: clustered array of sharp intact royal purple amethyst crystal points and sparkling quartz druzy, anchored to a solid polished basalt rock base, intense gemological facet dispersion, pristine crystalline geometry",
        descEs: "Geoda mineral sólida intacta: racimo de puntas de cristal de amatista púrpura real afiladas y drusa de cuarzo brillante, ancladas a una base de roca basáltica pulida, dispersión gemológica intensa, geometría cristalina perfecta."
      },
      {
        id: 16,
        category: "minerales",
        name: "🦪 Nácar / Madreperla Estructural (Solid Mother of Pearl)",
        promptMaterial: "solid carved mother-of-pearl nacre: smooth continuous sea-shell aragonite layers, soft pastel rainbow iridescence (pink, mint, lavender) shifting across angles, silky lustrous pearlescent sheen, rigid solid marine substrate",
        descEs: "Nácar / madreperla tallado macizo: capas continuas de aragonito marino, iridiscencia arcoíris en tonos pastel (rosa, menta, lavanda) según el ángulo de visión, brillo nacarado sedoso, sustrato marino rígido y sólido."
      },

      // -----------------------------------------------------------------------
      // 4. TEXTILES, PAPEL Y CUERO (8 Estilos)
      // -----------------------------------------------------------------------
      {
        id: 17,
        category: "textiles",
        name: "📜 Origami y Papel Washi Estructurado (Architectural Origami Washi)",
        promptMaterial: "solid hand-folded origami craft: razor-crisp geometric mountain and valley folds, dense textured Mulberry washi and heavy kraft paper fibers, pristine multi-layered relief shadows, warm translucent paper backlight transmission, firm sturdy origami construction",
        descEs: "Artesanía en origami de papel plegado a mano: pliegues geométricos en valle y montaña de máxima nitidez, papel washi de morera denso y fibras de papel kraft pesado, sombras en relieve multicapa, transmisión de luz cálida a contraluz, construcción firme."
      },
      {
        id: 18,
        category: "textiles",
        name: "🧶 Lana Tejida a Mano Gruesa (Heavy Cable Knit Wool)",
        promptMaterial: "dense hand-knitted heavy wool: thick interlocking cable and purl stitches, soft fine halo of micro-fibers, structured dimensional knit volume in warm heathered tones, directional studio softbox lighting accentuating stitch geometry, clean sturdy weave",
        descEs: "Lana gruesa tejida a mano densa: puntadas gruesas entrelazadas en ochos y punto del revés, halo suave de microfibras, volumen tridimensional estructurado en tonos jaspeados cálidos, iluminación de estudio suave que resalta la geometría del tejido, trama firme."
      },
      {
        id: 19,
        category: "textiles",
        name: "🤠 Cuero Repujado y Cosido a Mano (Hand-Stitched Saddle Leather)",
        promptMaterial: "solid full-grain saddlery leather: thick heavy waxed-linen saddle stitching along clean seams, hand-burnished edges, rich oily pull-up patina in deep cognac tones, supple pebble grain with satin finish, firm structured leathercraft",
        descEs: "Cuero de talabartería plena flor sólido: costuras gruesas con hilo de lino encerado a lo largo de uniones limpias, bordes bruñidos a mano, pátina aceitosa rica en tonos coñac, grano granulado con acabado satinado, marroquinería firme y estructurada."
      },
      {
        id: 20,
        category: "textiles",
        name: "🍂 Herbario Botánico Prensado Archival (Archival Herbarium)",
        promptMaterial: "framed botanical herbarium art: pristine dried pressed botanical specimen, intact leaf skeletons with delicate micro-capillary veining, mounted cleanly onto heavy fibrous cotton rag parchment, museum archival presentation",
        descEs: "Herbario botánico prensado de archivo: espécimen botánico seco e intacto, esqueletos de hojas con venas micro-capilares delicadas, montado limpiamente sobre pergamino de algodón pesado, presentación de conservación de museo."
      },
      {
        id: 21,
        category: "textiles",
        name: "👑 Terciopelo Azul y Brocado Dorado (Royal Gold Brocade Velvet)",
        promptMaterial: "solid structured midnight-blue plush velvet: dense directional pile with deep light absorption, heavily embroidered with raised solid metallic gold thread floral damask patterns, regal shimmering specular highlights, pristine royal tailoring",
        descEs: "Terciopelo azul medianoche estructurado: pelo denso con profunda absorción lumínica, bordado en relieve con hilo de oro metálico en patrones florales damasquinados, reflejos especulares majestuosos, confección de sastrería real impecable."
      },
      {
        id: 22,
        category: "textiles",
        name: "🏺 Papiro Egipcio y Pan de Oro (Gilded Egyptian Papyrus)",
        promptMaterial: "ancient woven papyrus reed panel: crisp woven cross-hatch fiber texture, painted with vibrant Egyptian lapis and ochre mineral pigments, decorated with flush gilded 24k gold leaf foil, archival museum condition, flat and solid",
        descEs: "Panel de papiro egipcio trenzado: textura de fibras entrecruzadas nítida, pintado con pigmentos minerales de lapislázuli y ocre, decorado con pan de oro de 24k enrasado, estado de conservación de museo, plano y sólido."
      },
      {
        id: 23,
        category: "textiles",
        name: "🔮 Manuscrito Alquímico en Pergamino (Archival Vellum Parchment)",
        promptMaterial: "archival calfskin vellum manuscript: smooth taut parchment surface, crisp iron-gall ink alchemical diagrams and celestial geometry, delicate illuminated gold leaf accents, flat pristine historic document presentation",
        descEs: "Manuscrito en vitela de piel de becerro: superficie de pergamino suave y tensa, diagramas alquímicos y geometría celeste en tinta ferrogálica nítida, acentos dorados iluminados con pan de oro, presentación de documento histórico impecable."
      },
      {
        id: 24,
        category: "textiles",
        name: "👗 Seda Duquesa Esmeralda (Tailored Duchess Silk)",
        promptMaterial: "heavy structured emerald duchess silk: architectural tailored fabric folds, intense anisotropic satin sheen shifting between deep jade and lustrous mint highlights, luxurious dense woven texture, crisp elegant silhouettes",
        descEs: "Seda duquesa esmeralda pesada y estructurada: pliegues de sastrería arquitectónicos, brillo satinado anisotrópico intenso que oscila entre jade profundo y menta luminosa, tejido denso y lujoso, siluetas elegantes y definidas."
      },

      // -----------------------------------------------------------------------
      // 5. METALES, JOYERÍA Y FORJA (8 Estilos)
      // -----------------------------------------------------------------------
      {
        id: 25,
        category: "metales",
        name: "🪞 Cromo Pulido Espejo e Iridiscencia (Oil-Slick Polished Chrome)",
        promptMaterial: "mirror-polished solid liquid-metal chrome sculpture: coated in a clean iridescent thin-film petrol sheen, intense rainbow spectral highlights, ultra-sharp distortion-free environment reflections, smooth aerodynamic monolithic metal body",
        descEs: "Escultura de cromo metal líquido pulido a espejo: recubierta con una fina película iridiscente tipo película de gasolina, destellos espectrales arcoíris intensos, reflejos de entorno de máxima nitidez sin distorsión, cuerpo metálico aerodinámico y monolítico."
      },
      {
        id: 26,
        category: "metales",
        name: "⚙️ Latón Maquinado Steampunk (Machined Clockwork Brass)",
        promptMaterial: "machined solid steampunk brass: heavy brushed metal plates fastened with clean flush domed rivets, intricate interlocking polished bronze gear trains, subtle antique verdigris patina in recesses, warm golden specular highlights, rigid industrial assembly",
        descEs: "Latón steampunk mecanizado macizo: placas de metal cepillado aseguradas con remaches abovedados limpios, trenes de engranajes de bronce pulido entrelazados, pátina de cardenillo sutil en hendiduras, reflejos dorados cálidos, ensamblaje industrial rígido."
      },
      {
        id: 27,
        category: "metales",
        name: "🛡️ Bronce Patinado de Museo (Museum Patinated Bronze Casting)",
        promptMaterial: "solid cast museum bronze sculpture: rich even malachite-green and turquoise verdigris patina, polished burnished raw bronze highlights on raised contours, smooth antique finish, sturdy monolithic bronze casting",
        descEs: "Escultura en bronce fundido macizo de museo: pátina homogénea verde malaquita y cardenillo turquesa, relieves bruñidos que muestran el bronce dorado pulido en los puntos altos, acabado antiguo suave, fundición robusta y monolítica."
      },
      {
        id: 28,
        category: "metales",
        name: "⚔️ Acero Forjado de Damasco (Pattern-Welded Damascus Steel)",
        promptMaterial: "forged high-carbon Damascus steel: flowing woodgrain banding patterns etched cleanly into the surface, alternating matte graphite and polished silver layers, oiled gunmetal sheen with crisp specular glints, razor-sharp solid blade craftsmanship",
        descEs: "Acero de Damasco forjado de alto carbono: patrones de vetas onduladas grabadas al ácido con precisión, alternando capas gris grafito mate y plata pulida, brillo aceitado con destellos metálicos nítidos, forja sólida y afilada."
      },
      {
        id: 29,
        category: "metales",
        name: "🧲 Ferrofluido Magnético Escultural (Solid Spiked Ferrofluid)",
        promptMaterial: "solid sculpted magnetic ferrofluid monument: array of sharp geometric fluid-spikes frozen along symmetrical magnetic vector lines, jet-black mirror chrome finish, high-contrast studio reflections, clean monolithic form",
        descEs: "Monumento escultórico de ferrofluido magnético sólido: matriz de picos cónicos nítidos alineados simétricamente a lo largo de líneas de campo magnético, acabado cromo negro azabache reflectante, reflejos de estudio de alto contraste, forma limpia."
      },
      {
        id: 30,
        category: "metales",
        name: "⛓️ Hierro Forjado Arquitectónico (Hand-Forged Wrought Iron)",
        promptMaterial: "hand-forged solid black wrought iron: subtle anvil hammer textures and twisted architectural bar details, satin gunmetal oil-blackened finish, crisp structural ironwork, robust monolithic forge construction",
        descEs: "Hierro forjado negro arquitectónico forjado a mano: texturas sutiles de martilleo sobre yunque y barras torsionadas, acabado pavonado negro satinado, herrería estructural nítida, construcción de forja robusta y monolítica."
      },
      {
        id: 31,
        category: "metales",
        name: "✨ Yeso Barroco con Pan de Oro (Baroque Gilded Gesso Relief)",
        promptMaterial: "ornate baroque gilded sculpture: lavish relief-carved acanthus leaf scrolls, coated in polished 24k gold leaf over traditional smooth red bole clay base, regal lustrous royal palace finish, solid architectural gesso",
        descEs: "Escultura dorada barroca ornamentada: relieves de hojas de acanto esculpidos con maestría, recubiertos con pan de oro de 24k pulido sobre base tradicional de bol rojo, acabado suntuoso de palacio real, yeso arquitectónico sólido."
      },
      {
        id: 32,
        category: "metales",
        name: "🦚 Esmalte Cloisonné y Filigrana de Latón (Vitrified Cloisonné Enamel)",
        promptMaterial: "fine Chinese cloisonné metalwork: intricate flush brass filigree wire outlines filled with vitrified gem-colored glass enamel (lapis blue, turquoise, carnelian), mirror-buffed flat surface with lustrous metallic reflections, seamless solid artifact",
        descEs: "Orfebrería cloisonné fina: filigrana de alambre de latón enrasada rellena de esmalte vítreo en tonos joya (lapislázuli, turquesa, cornalina), superficie plana pulida a espejo con reflejos metálicos, pieza sólida y continua."
      },

      // -----------------------------------------------------------------------
      // 6. PINTURA Y BELLAS ARTES (6 Estilos)
      // -----------------------------------------------------------------------
      {
        id: 33,
        category: "pintura",
        name: "🎨 Óleo Renacentista con Empaste Escultórico (Impasto Oil Masterpiece)",
        promptMaterial: "classical Renaissance oil painting on solid linen canvas: thick rich sculptural impasto brushwork and palette knife reliefs, deep chiaroscuro lighting with luminous burnt umber and gold glazes, fine protective gloss varnish, solid masterpiece canvas",
        descEs: "Pintura al óleo renacentista clásica sobre lienzo de lino: pinceladas escultóricas gruesas en empaste y relieves de espátula, iluminación en claroscuro con veladuras luminosas de tierra de sombra tostada y oro, barniz brillante protector, obra maestra sólida."
      },
      {
        id: 34,
        category: "pintura",
        name: "✏️ Boceto al Carboncillo y Grafito Fino (Fine Charcoal on Cotton Rag)",
        promptMaterial: "fine art charcoal and graphite drawing: rich velvety cross-hatching and smooth blended tones, set cleanly on heavy textured 300gsm cold-press cotton paper, crisp erased highlights, deep black contrasts, archival presentation",
        descEs: "Dibujo de bellas artes al carboncillo y grafito: tramas cruzadas aterciopeladas y gradientes difuminados suaves sobre papel de algodón grano fino de 300 g/m², luces borradas con precisión, contrastes negros profundos, presentación de archivo."
      },
      {
        id: 35,
        category: "pintura",
        name: "🖌️ Tinta Zen Sumi-e Tradicional (Japanese Sumi-e Wash on Rice Paper)",
        promptMaterial: "traditional Japanese sumi-e wash painting: bold decisive black pine-soot ink strokes on fibrous mulberry paper, expressive dry-brush and saturated wash gradations, balanced negative space, crisp mounted scroll finish",
        descEs: "Pintura tradicional japonesa sumi-e: trazos decididos en tinta negra de hollín de pino sobre papel de arroz de morera, gradientes expresivos de pincel seco y aguada saturada, espacio negativo equilibrado, acabado de pergamino montado limpio."
      },
      {
        id: 36,
        category: "pintura",
        name: "📐 Pizarra de Tiza y Caligrafía Precisa (Fine Slate Chalk Art)",
        promptMaterial: "clean vintage slate blackboard: precise hand-drawn white chalk calligraphy and scientific diagram linework, velvety matte dark slate stone texture, crisp micro-chalk details, high-contrast studio presentation",
        descEs: "Pizarra de piedra pizarra limpia: caligrafía y diagramas científicos dibujados a mano con tiza blanca de máxima precisión, textura de piedra pizarra oscura mate aterciopelada, microdetalles de tiza nítidos, presentación de estudio en alto contraste."
      },
      {
        id: 37,
        category: "pintura",
        name: "🌊 Grabado en Madera Ukiyo-e (Traditional Ukiyo-e Woodblock)",
        promptMaterial: "traditional Japanese Ukiyo-e woodblock print: bold crisp black keyblock line art, flat solid bokashi color gradations in Prussian blue and vermillion, visible fine woodgrain texture pressed into heavy fibrous paper, pristine print",
        descEs: "Grabado en madera japonés tradicional Ukiyo-e: líneas maestras negras definidas, gradientes de color planos bokashi en azul de Prusia y bermellón, textura sutil de la veta de madera prensada sobre papel fibroso grueso, estampa impecable."
      },
      {
        id: 38,
        category: "pintura",
        name: "💧 Acuarela Húmeda con Granulación Mineral (Granulating Fine Watercolor)",
        promptMaterial: "fine art watercolor painting: controlled translucent color blooms and fine mineral granulation on heavy rough 300gsm cotton rag paper, vibrant pure pigment washes with glowing paper white highlights, crisp painted edges",
        descEs: "Pintura a la acuarela de bellas artes: veladuras translúcidas controladas y granulación mineral fina sobre papel de algodón rugoso de 300 g/m², lavados de pigmento puro y brillante con luces reservadas del blanco del papel, bordes limpios."
      },

      // -----------------------------------------------------------------------
      // 7. ORGÁNICOS Y ELEMENTALES (6 Estilos)
      // -----------------------------------------------------------------------
      {
        id: 39,
        category: "organicos",
        name: "🕯️ Cera de Vela Esculpida Sólida (Solid Carved Beeswax Sculpture)",
        promptMaterial: "solid sculpted luxury paraffin and beeswax sculpture: rich warm amber subsurface light transmission, smooth satin-burnished contours, delicate translucent outer layer, warm internal studio illumination, perfectly solid and intact, no melting, no dripping, no deformities",
        descEs: "Escultura en cera de abeja y parafina sólida de lujo: transmisión de luz subsuperficial en tono ámbar cálido, contornos suaves bruñidos en acabado satinado, capa translúcida uniforme, iluminación interior cálida, sólida e intacta, sin derretimientos ni deformidades."
      },
      {
        id: 40,
        category: "organicos",
        name: "🍬 Gominola Elástica Translúcida Sólida (Translucent Gummy Sculpture)",
        promptMaterial: "solid sculpted translucent gummy gelatin candy: vibrant saturated ruby and citrus fruit hues, firm dense elastic gelatin structure, fine uniform dusting of micro-sugar crystals, clean specular highlights with internal light diffusion, solid pristine candy form",
        descEs: "Gominola de gelatina translúcida sólida y esculpida: tonos rubí y cítricos saturados, estructura elástica firme y densa, fino espolvoreado homogéneo de micro-cristales de azúcar, reflejos especulares limpios con difusión lumínica interna, forma intacta."
      },
      {
        id: 41,
        category: "organicos",
        name: "🐝 Panal de Abejas y Miel Cristalizada Sólida (Structured Honeycomb & Amber Honey)",
        promptMaterial: "solid sculpted beeswax honeycomb: crisp geometric hexagonal cell grid, filled with solid polished translucent golden amber-honey resin, warm glowing subsurface light transmission, pristine symmetrical comb geometry, solid and intact, no dripping, no liquid spill",
        descEs: "Panal de cera de abejas esculpido sólido: cuadrícula hexagonal geométrica definida, rellena de resina de miel ámbar dorada sólida y pulida, transmisión de luz cálida brillante, geometría simétrica pura, completamente sólido y sin derrames."
      },
      {
        id: 42,
        category: "organicos",
        name: "🪸 Arrecife de Coral Calcificado (Calcified Coral Sculpture)",
        promptMaterial: "solid calcified marine coral sculpture: intricate dense porous polyp textures and delicate fan structures in pastel peach and seafoam teal, fine calcium carbonate crystalline micro-grain, dappled underwater caustic illumination, solid intact marine fossil",
        descEs: "Escultura de coral marino calcificado macizo: texturas densas de pólipos porosos y estructuras de abanico en tonos melocotón pastel y verde azulado marino, micro-grano cristalino de carbonato de calcio, iluminación de cáusticas submarinas, fósil sólido e intacto."
      },
      {
        id: 43,
        category: "organicos",
        name: "🦚 Plumaje Iridiscente Exótico (Iridescent Feathers Layering)",
        promptMaterial: "solid layered exotic bird plumage: pristine overlapping aerodynamic feather barbules shifting between emerald-green, royal sapphire, and violet sheen, silky organic luster, razor-clean plumage silhouette, solid natural texture",
        descEs: "Plumaje exótico en capas sólidas: bárbulas de plumas aerodinámicas superpuestas con iridiscencia que oscila entre verde esmeralda, zafiro real y violeta, brillo orgánico sedoso, silueta de plumaje limpia, textura natural firme."
      },
      {
        id: 44,
        category: "organicos",
        name: "🐙 Bioluminiscencia Abisal Translúcida (Sculpted Bioluminescent Organism)",
        promptMaterial: "sculpted deep-sea organism: translucent crystal-gel membrane with high subsurface light transmission, internal glowing neon-cyan and electric-violet phosphorescent filaments, smooth water-repellent gloss finish, monolithic solid aquatic form",
        descEs: "Organismo abisal bioluminiscente esculpido: membrana de gel cristalino translúcido con alta transmisión de luz subsuperficial, filamentos fosforescentes internos en cian neón y violeta eléctrico, acabado brillante suave, forma acuática sólida."
      },

      // -----------------------------------------------------------------------
      // 8. SCI-FI, HOLOGRAMAS Y FUTURISMO (6 Estilos)
      // -----------------------------------------------------------------------
      {
        id: 45,
        category: "scifi",
        name: "📺 Holograma Retro 80s Volumétrico (Volumetric Laser Scanlines)",
        promptMaterial: "solid volumetric 1980s retro hologram: structured neon-cyan and magenta horizontal raster scanline grid, crisp wireframe vector lines, clean chromatic aberration accents, stable digital laser luminescence with crisp geometric projection",
        descEs: "Holograma retro de los años 80 volumétrico y estructurado: cuadrícula horizontal de líneas de escaneo en cian neón y magenta, líneas vectoriales de malla de alambre nítidas, acentos de aberración cromática limpios, proyección geométrica estable."
      },
      {
        id: 46,
        category: "scifi",
        name: "👾 Voxel Art 3D Modular (Modular Solid Voxels)",
        promptMaterial: "modular 3D voxel art sculpture: constructed entirely from solid color-coded cubic voxels, sharp modular pixel grid edges, vibrant color palette, clean ambient occlusion shadows between blocks, solid geometric assembly",
        descEs: "Escultura en arte voxel 3D modular: construida enteramente a partir de vóxeles cúbicos sólidos con código de color, bordes de cuadrícula de píxeles nítidos, paleta de colores vibrante, sombras de oclusión ambiental limpias entre bloques, ensamblaje geométrico sólido."
      },
      {
        id: 47,
        category: "scifi",
        name: "🌃 Vidrio Ahumado y Neón Synthwave (Synthwave Obsidian Glass & Neon)",
        promptMaterial: "sculpted dark tinted obsidian glass: outlined by solid glowing electric-pink and cyan neon gas tubes, sharp internal mirror reflections, sleek synthwave aesthetic with razor-clean luminous contours, solid futuristic composite",
        descEs: "Vidrio oscuro ahumado esculpido estilo synthwave: contorneado por tubos de gas neón sólidos y brillantes en rosa eléctrico y cian, reflejos espejo internos nítidos, estética futurista con contornos luminosos limpios, compuesto sólido."
      },
      {
        id: 48,
        category: "scifi",
        name: "🏎️ Fibra de Carbono 3K y Titanio Aeroespacial (Carbon Twill & Titanium)",
        promptMaterial: "solid precision-molded 3K twill carbon fiber: deep high-gloss clear-coat lacquer with woven holographic depth, paired with solid matte aerospace brushed titanium plates and recessed fastener lines, flawless industrial engineering",
        descEs: "Fibra de carbono sarga 3K moldeada con precisión: laca transparente de alto brillo con profundidad holográfica del tejido, combinada con placas de titanio cepillado aeroespacial mate, ingeniería industrial impecable y sólida."
      },
      {
        id: 49,
        category: "scifi",
        name: "🌌 Resina Cósmica de Nebulosa (Solid Cosmic Nebula Resin Block)",
        promptMaterial: "solid optical cast resin block: encasing dense swirling celestial nebula clouds of deep space indigo and magenta cosmic dust, suspended sparkling micro-glitter star clusters, mirror-polished crystal clear resin block",
        descEs: "Bloque de resina óptica fundida sólido: contiene nubes densas de nebulosas celestes en tonos índigo profundo y polvo cósmico magenta, cúmulos de micro-estrellas brillantes suspendidos, bloque de resina cristalina pulido a espejo."
      },
      {
        id: 50,
        category: "scifi",
        name: "🕺 Estética de Lámpara de Lava Retro 70s Sólida (Sculpted Acrylic Lava Art)",
        promptMaterial: "solid sculpted 1970s retro lava aesthetic: solid smooth rounded blobs of neon-orange and hot-pink resin sealed inside a crystal-clear polished acrylic capsule, warm interior ambient illumination, smooth fluid-inspired solid geometry, completely solid and intact, no melting, no movement",
        descEs: "Estética de lámpara de lava retro de los años 70 esculpida y sólida: gotas redondeadas de resina naranja neón y rosa intenso selladas dentro de una cápsula acrílica pulida transparente, iluminación cálida interior, geometría sólida inspirada en fluidos, completamente sólida e inmóvil."
      }
    ];

    let currentMode = "preset";
    let currentFilteredStyles = [...styles];
    let selectedStyleId = 101;
    let currentViewMode = "list";

    // Elementos DOM
    const modePresetBtn = document.getElementById("modePresetBtn");
    const modeCustomBtn = document.getElementById("modeCustomBtn");
    const presetSection = document.getElementById("presetSection");
    const customSection = document.getElementById("customSection");
    const styleSelect = document.getElementById("styleSelect");
    const stylesGrid = document.getElementById("stylesGrid");
    const viewListBtn = document.getElementById("viewListBtn");
    const viewGridBtn = document.getElementById("viewGridBtn");
    const styleDescription = document.getElementById("styleDescription");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const aiEngineSelect = document.getElementById("aiEngineSelect");
    const intensitySlider = document.getElementById("intensitySlider");
    const intensityValueDisplay = document.getElementById("intensityValueDisplay");
    const intensityDescriptor = document.getElementById("intensityDescriptor");
    const scopeAll = document.getElementById("scopeAll");
    const scopeSpecific = document.getElementById("scopeSpecific");
    const targetInputContainer = document.getElementById("targetInputContainer");
    const targetSubject = document.getElementById("targetSubject");
    const keepMotion = document.getElementById("keepMotion");
    const outputPrompt = document.getElementById("outputPrompt");
    const negativePrompt = document.getElementById("negativePrompt");
    const promptCounters = document.getElementById("promptCounters");
    const negativeCounters = document.getElementById("negativeCounters");
    const copyBtn = document.getElementById("copyBtn");
    const copyNegBtn = document.getElementById("copyNegBtn");

    // Inputs Modo Personalizado
    const customMat = document.getElementById("customMat");
    const customTex = document.getElementById("customTex");
    const customLight = document.getElementById("customLight");
    const customWear = document.getElementById("customWear");

    // Mobile Sheet Elements
    const mobileSheetBackdrop = document.getElementById("mobileSheetBackdrop");
    const mobileSheet = document.getElementById("mobileSheet");
    const sheetTitle = document.getElementById("sheetTitle");
    const sheetContent = document.getElementById("sheetContent");
    const sheetCloseBtn = document.getElementById("sheetCloseBtn");

    // Control de Pestañas
    modePresetBtn.addEventListener("click", () => {
      currentMode = "preset";
      modePresetBtn.classList.add("active");
      modeCustomBtn.classList.remove("active");
      presetSection.style.display = "grid";
      customSection.style.display = "none";
      styleDescription.classList.remove("custom");
      generatePrompt();
    });

    modeCustomBtn.addEventListener("click", () => {
      currentMode = "custom";
      modeCustomBtn.classList.add("active");
      modePresetBtn.classList.remove("active");
      presetSection.style.display = "none";
      customSection.style.display = "grid";
      styleDescription.classList.add("custom");
      generatePrompt();
    });

    // Control de Vista
    viewListBtn.addEventListener("click", () => {
      currentViewMode = "list";
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      styleSelect.style.display = "block";
      stylesGrid.style.display = "none";
    });

    viewGridBtn.addEventListener("click", () => {
      currentViewMode = "grid";
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
      styleSelect.style.display = "none";
      stylesGrid.style.display = "grid";
      renderGridView();
    });

    function renderStyleOptions() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const selectedCategory = categoryFilter.value;

      currentFilteredStyles = styles.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm) || s.promptMaterial.toLowerCase().includes(searchTerm) || s.descEs.toLowerCase().includes(searchTerm);
        const matchesCategory = (selectedCategory === "all" || s.category === selectedCategory);
        return matchesSearch && matchesCategory;
      });

      styleSelect.innerHTML = "";
      
      if (currentFilteredStyles.length === 0) {
        const opt = document.createElement("option");
        opt.textContent = "No se encontraron estilos para esta búsqueda...";
        opt.disabled = true;
        styleSelect.appendChild(opt);
        styleDescription.innerHTML = "<strong>Shader / Textura Seleccionada:</strong> Sin coincidencias.";
        outputPrompt.value = "";
        renderGridView();
        return;
      }

      if (!currentFilteredStyles.some(s => s.id === selectedStyleId)) {
        selectedStyleId = currentFilteredStyles[0].id;
      }

      currentFilteredStyles.forEach((style) => {
        const opt = document.createElement("option");
        opt.value = style.id;
        opt.textContent = style.name;
        if (style.id === selectedStyleId) opt.selected = true;
        styleSelect.appendChild(opt);
      });

      renderGridView();
      generatePrompt();
    }

    function renderGridView() {
      stylesGrid.innerHTML = "";
      if (currentFilteredStyles.length === 0) {
        stylesGrid.innerHTML = `<div style="grid-column: 1/-1; color: var(--text-muted); font-size: 0.88rem; padding: 1rem; text-align: center;">No hay estilos que coincidan.</div>`;
        return;
      }

      currentFilteredStyles.forEach(style => {
        const card = document.createElement("div");
        card.className = `style-card ${style.id === selectedStyleId ? 'selected' : ''}`;
        card.innerHTML = `
          <div>
            <div class="card-cat">${style.category}</div>
            <div class="card-title">${style.name}</div>
          </div>
        `;
        card.addEventListener("click", () => {
          selectedStyleId = style.id;
          styleSelect.value = style.id;
          document.querySelectorAll(".style-card").forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          generatePrompt();
        });
        stylesGrid.appendChild(card);
      });
    }

    function getIntensityPhrase(intensity) {
      const val = parseInt(intensity);
      if (val >= 95) {
        return {
          prefix: "total, hyper-dense, uncompromising physical conversion into",
          desc: "Nivel Máximo (100%): Conversión física y matérica radical completa de todos los elementos seleccionados.",
          label: `${val}% (Transformación Total)`
        };
      } else if (val >= 75) {
        return {
          prefix: "distinct aesthetic overhaul and prominent transformation into",
          desc: "Nivel Alto (75%-90%): Fuerte presencia matérica, conservando siluetas principales.",
          label: `${val}% (Estilización Intensa)`
        };
      } else if (val >= 45) {
        return {
          prefix: "balanced textural overlay and moderate physical elements of",
          desc: "Nivel Medio (45%-70%): Fusión equilibrada entre el video base y el nuevo material.",
          label: `${val}% (Fusión Equilibrada)`
        };
      } else {
        return {
          prefix: "subtle hints, delicate surface sheen and gentle traces of",
          desc: "Nivel Suave (10%-40%): Toque estético ligero sin alterar la estructura original.",
          label: `${val}% (Toque Sutil)`
        };
      }
    }

    function generatePrompt() {
      let materialPromptText = "";

      if (currentMode === "preset") {
        selectedStyleId = parseInt(styleSelect.value) || selectedStyleId;
        const currentStyle = styles.find(s => s.id === selectedStyleId) || currentFilteredStyles[0];
        if (currentStyle) {
          materialPromptText = currentStyle.promptMaterial;
          styleDescription.innerHTML = `<strong>Shader / Textura Seleccionada:</strong> ${currentStyle.descEs}`;
        }
      } else {
        const mat = customMat.value.trim() || "solid handcrafted monolithic material";
        const tex = customTex.value.trim() ? `, ${customTex.value.trim()}` : "";
        const light = customLight.value.trim() ? `, ${customLight.value.trim()}` : "";
        const wear = customWear.value.trim() ? `, ${customWear.value.trim()}` : "";

        materialPromptText = `${mat}${tex}${light}${wear}`;
        styleDescription.innerHTML = `<strong>Shader Personalizado Construido:</strong> ${mat}${tex}${light}${wear}`;
      }

      const intensityInfo = getIntensityPhrase(intensitySlider.value);
      intensityValueDisplay.textContent = intensityInfo.label;
      intensityDescriptor.textContent = intensityInfo.desc;

      const isAll = scopeAll.checked;
      const targetText = targetSubject.value.trim() || "the main subject";
      const engine = aiEngineSelect.value;
      const motionLocked = keepMotion.checked;

      let prompt = "";
      let negPrompt = "";

      if (engine === "runway") {
        const scopeStr = isAll ? "everything in the scene" : `only ${targetText}`;
        prompt = `Cinematic video transformation: ${intensityInfo.prefix} ${materialPromptText} applied to ${scopeStr}.`;
        if (motionLocked) {
          prompt += " Maintain exact 1:1 motion tracking, camera vector path, lens distortion, and temporal frame pacing.";
        }
        negPrompt = "flickering, morphing artifacts, frame blending glitches, low resolution, plastic flat shading, temporal instability, cartoon, extra limbs, jitter, melting, cracks, broken pieces, dripping";

      } else if (engine === "google-flow") {
        const scopeStr = isAll ? "full scene transformation" : `${targetText} transformation`;
        prompt = `${scopeStr}, ${intensityInfo.prefix} ${materialPromptText}, hyper-detailed PBR shaders, raytraced caustics, octane render, 8k resolution, cinematic lighting, master craftsmanship, solid intact form`;
        if (motionLocked) {
          prompt += ", locked camera perspective, consistent temporal geometry locked camera perspective, consistent temporal geometry";
        }
        negPrompt = "blurry, low quality, flat texture, oversaturated, deformed geometry, stuttering, flickering, ugly, noise, melted, dripping, cracked, broken";

      } else if (engine === "luma") {
        const scopeStr = isAll ? "everything seamlessly transformed into" : `transform only ${targetText} into`;
        prompt = `Restyle dynamic video: ${scopeStr} ${intensityInfo.prefix} ${materialPromptText}. Solid physical presence and pristine material structure.`;
        if (motionLocked) {
          prompt += " Seamless camera movement, preserve original scene geometry and temporal timing.";
        }
        negPrompt = "camera wobble, sudden cuts, glitch, melt artifacts, low poly, bad reflections, overexposed, dripping, cracks";

      } else {
        const scopeStr = isAll 
          ? `Restyle this video with ${intensityInfo.prefix} ${materialPromptText}.`
          : `Restyle this video turning only ${targetText} into ${intensityInfo.prefix} ${materialPromptText}.`;

        prompt = scopeStr;
        if (motionLocked) {
          prompt += " Keep everything else exactly the same — same shots, same camera moves, same motion, same frame pacing.";
        }
        negPrompt = "flicker, jitter, low quality, morphing artifacts, flat lighting, distorted anatomy, visual noise, melting, dripping, cracks";
      }

      outputPrompt.value = prompt;
      negativePrompt.value = negPrompt;

      const charCount = prompt.length;
      const tokenEst = Math.ceil(prompt.trim().split(/\s+/).length * 1.3);
      promptCounters.textContent = `${charCount} caracteres | ~${tokenEst} tokens`;

      negativeCounters.textContent = `${negPrompt.length} caracteres`;
    }

    // Listeners
    styleSelect.addEventListener("change", () => {
      selectedStyleId = parseInt(styleSelect.value);
      renderGridView();
      generatePrompt();
    });

    searchInput.addEventListener("input", renderStyleOptions);
    categoryFilter.addEventListener("change", renderStyleOptions);
    aiEngineSelect.addEventListener("change", generatePrompt);
    intensitySlider.addEventListener("input", generatePrompt);

    [customMat, customTex, customLight, customWear, targetSubject].forEach(el => {
      el.addEventListener("input", generatePrompt);
    });

    scopeAll.addEventListener("change", () => {
      targetInputContainer.style.display = "none";
      generatePrompt();
    });

    scopeSpecific.addEventListener("change", () => {
      targetInputContainer.style.display = "block";
      targetSubject.focus();
      generatePrompt();
    });

    keepMotion.addEventListener("change", generatePrompt);

    copyBtn.addEventListener("click", () => {
      if (!outputPrompt.value) return;
      outputPrompt.select();
      navigator.clipboard.writeText(outputPrompt.value).then(() => {
        const orig = copyBtn.innerHTML;
        copyBtn.classList.add("copied");
        copyBtn.innerHTML = "<span>✓ ¡Prompt Copiado!</span>";
        setTimeout(() => { copyBtn.classList.remove("copied"); copyBtn.innerHTML = orig; }, 2000);
      });
    });

    copyNegBtn.addEventListener("click", () => {
      if (!negativePrompt.value) return;
      negativePrompt.select();
      navigator.clipboard.writeText(negativePrompt.value).then(() => {
        const orig = copyNegBtn.innerHTML;
        copyNegBtn.classList.add("copied");
        copyNegBtn.innerHTML = "<span>✓ ¡Negativo Copiado!</span>";
        setTimeout(() => { copyNegBtn.classList.remove("copied"); copyNegBtn.innerHTML = orig; }, 2000);
      });
    });

    document.querySelectorAll(".info-icon").forEach(icon => {
      icon.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          e.stopPropagation();
          const title = icon.getAttribute("data-title") || "Guía de Parámetro";
          const content = icon.getAttribute("data-content") || "";
          sheetTitle.textContent = title;
          sheetContent.textContent = content;
          mobileSheetBackdrop.classList.add("active");
          mobileSheet.classList.add("active");
        }
      });
    });

    function closeSheet() {
      mobileSheetBackdrop.classList.remove("active");
      mobileSheet.classList.remove("active");
    }

    sheetCloseBtn.addEventListener("click", closeSheet);
    mobileSheetBackdrop.addEventListener("click", (e) => {
      if (e.target === mobileSheetBackdrop) closeSheet();
    });

    // Iniciar con la primera carga
    renderStyleOptions();
  