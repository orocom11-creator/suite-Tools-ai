// ============================================================
// AI DAN SOLUTIONS — Configuración de Supabase y Accesos
// ============================================================

const AIDANS_CONFIG = Object.freeze({
    // ---- Supabase (obtener de: Dashboard > Settings > API) ----
    SUPABASE_URL:      'https://jxmnikjpvzybdqwjvens.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4bW5pa2pwdnp5YmRxd2p2ZW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5MTMxNDAsImV4cCI6MjEwNjQ4OTE0MH0.5Wldmy-bpq8tCMJ5uQG17adxBy0E07I1Zvo7y3eCDLY',

    // ---- WhatsApp de contacto ----
    WHATSAPP_NUMBER: '51985332135',   // Perú +51

    // Mensaje dinámico de upgrade por WhatsApp
    DEFAULT_UPGRADE_MESSAGE: (toolName) =>
        `Hola AI DAN SOLUTIONS, actualmente cuento con acceso SuperVIP en la plataforma y deseo realizar el upgrade para desbloquear la herramienta Premium: *${toolName}*. ¿Me podrían brindar los métodos de pago y el procedimiento?`,

    // Mensaje dinámico de activación para usuarios no registrados o suspendidos
    DEFAULT_ACTIVATION_MESSAGE: (email) =>
        `Hola AI DAN SOLUTIONS, deseo adquirir una membresía para mi correo: *${email}*. ¿Me comparten los precios de SuperVIP y Premium y métodos de pago?`,

    // ---- Herramientas PREMIUM (25 Herramientas - requieren premium === true) ----
    PREMIUM_TOOLS: [
        // Nivel 5: Coleccionables Exclusivos & Decoración de Autor (5)
        'figuritas-basuritas-ia',
        'calendarios-ia',
        'tu-maqueta-con-ia',
        'deportes-con-animales',
        'halloween-ia',

        // Nivel 6: Galería de Arte & Retratos Cinematográficos High-Ticket (6)
        'caricaturas-grotescas-con-ia',
        'retrato-de-caricatura-ia',
        'oleo-escultorico-3d-extremo-ia',
        'gemelo-3d-ia',
        'gigantes-en-monumentos-ia',
        'se-el-protagonista',

        // Nivel 7: Branding Corporativo, Moda & Grandes Marcas (6)
        'crear-posteres-de-cine-con-ia',
        'cambia-materia',
        'ropa-identica-ia',
        'tableros-infograficos',
        'resumen-de-partido-2026',
        'correrias-animales-y-objetos',

        // Nivel 8: Productora Cinematográfica 4K & Dirección Audiovisual (8)
        'hrp-4k-suite',
        'hoja-de-referencia-de-personaje-app-web-gratis-4k',
        'metodo-zuppelli-4k1',
        'de-idea-a-comic-ia',
        'XPrompt-Camera',
        'video-infografia-3d',
        'voz',
        'optimizador-de-prompt'
    ],

    // ---- Herramientas SUPERVIP (34 Herramientas) ----
    SUPERVIP_TOOLS: [
        // Nivel 1: Regalos Personalizados Express (Ventas el Mismo Día) (8)
        'tazas-con-frase-ia',
        'stikers-con-ia',
        'tarjetas-de-feliz-cumpleanos-con-ia',
        'muneco-funko-fifa',
        'caricaturas-ia',
        'boceto-de-personas-ia',
        'selfie-animal-ia',
        'perros-mundialistas-2026',

        // Nivel 2: Estudio de Fotos Digital (Retratos & Branding Personal) (10)
        'caricatuas-sutiles-ia',
        'caricaturas-multiples-ia',
        'fotos-historicas-con-ia',
        'foto-epica-del-mundial-2026',
        'prompt-mundial',
        'tu-erse-el-crack-2026',
        'post-rompe-cuarta-pared-ia',
        'salgo-de-las-paginas-ia',
        'selfie-aventura-ia',
        'selfie-con-animales',

        // Nivel 3: Publicidad para Negocios (Servicios Comerciales B2B) (8)
        'transformador-ia-de-fotografia-de-producto-publicitarios',
        'hoja-de-producto-ia',
        'flyers-con-ia-gratis',
        'figuritas-coleccionables-ia',
        'tipografico-3d-definitiva-ia',
        'rompiendo-la-realidad',
        'posters-cinematograficos-cartoon-ia',
        'posters-de-viaje-vintage-3d-efecto-papercraft',

        // Nivel 4: Videos y Comerciales para Redes (Preproducción Rápida) (8)
        'storyboard-30s',
        'storyboard-ia-10s',
        'storyboard-omni-flash',
        'de-comic-a-video-con-ia',
        'consistencia-personajes-ia',
        'hoja-de-personajes-ia',
        'mi-yo-controla-mi-vehiculo',
        'cinematica-de-jinete-de-animales-con-ia'
    ],

    // ---- Redirect después de login OAuth (automático en Netlify o Localhost) ----
    get REDIRECT_URL() {
        if (typeof window !== 'undefined' && window.location && window.location.origin && window.location.protocol.startsWith('http')) {
            return window.location.origin;
        }
        return 'http://localhost:8000';
    },
});
