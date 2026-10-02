// ============================================================
// AI DAN SOLUTIONS — Configuración de Supabase y Accesos (Ejemplo)
// ============================================================

const AIDANS_CONFIG = Object.freeze({
    // ---- Supabase (obtener de: Dashboard > Settings > API) ----
    SUPABASE_URL:      'https://YOUR_PROJECT_REF.supabase.co',
    SUPABASE_ANON_KEY: 'YOUR_ANON_KEY_HERE',

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
        'hrp-4k-suite',
        'hoja-de-referencia-de-personaje-app-web-gratis-4k',
        'XPrompt-Camera',
        'cambia-materia',
        'voz',
        'optimizador-de-prompt',
        'metodo-zuppelli-4k1',
        'storyboard-30s',
        'storyboard-ia-10s',
        'storyboard-omni-flash',
        'de-comic-a-video-con-ia',
        'video-infografia-3d',
        'consistencia-personajes-ia',
        'hoja-de-personajes-ia',
        'ropa-identica-ia',
        'hoja-de-producto-ia',
        'transformador-ia-de-fotografia-de-producto-publicitarios',
        'tableros-infograficos',
        'oleo-escultorico-3d-extremo-ia',
        'post-rompe-cuarta-pared-ia',
        'tipografico-3d-definitiva-ia',
        'de-idea-a-comic-ia',
        'tu-maqueta-con-ia',
        'flyers-con-ia-gratis',
        'posters-cinematograficos-cartoon-ia'
    ],

    // ---- Herramientas SUPERVIP (34 Herramientas) ----
    SUPERVIP_TOOLS: [
        'posters-de-viaje-vintage-3d-efecto-papercraft',
        'salgo-de-las-paginas-ia',
        'crear-posteres-de-cine-con-ia',
        'rompiendo-la-realidad',
        'fotos-historicas-con-ia',
        'tazas-con-frase-ia',
        'caricaturas-ia',
        'caricatuas-sutiles-ia',
        'caricaturas-grotescas-con-ia',
        'caricaturas-multiples-ia',
        'retrato-de-caricatura-ia',
        'boceto-de-personas-ia',
        'foto-epica-del-mundial-2026',
        'perros-mundialistas-2026',
        'prompt-mundial',
        'resumen-de-partido-2026',
        'tu-erse-el-crack-2026',
        'figuritas-basuritas-ia',
        'figuritas-coleccionables-ia',
        'muneco-funko-fifa',
        'stikers-con-ia',
        'halloween-ia',
        'calendarios-ia',
        'tarjetas-de-feliz-cumpleanos-con-ia',
        'gemelo-3d-ia',
        'gigantes-en-monumentos-ia',
        'mi-yo-controla-mi-vehiculo',
        'se-el-protagonista',
        'selfie-animal-ia',
        'selfie-aventura-ia',
        'selfie-con-animales',
        'deportes-con-animales',
        'correrias-animales-y-objetos',
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
