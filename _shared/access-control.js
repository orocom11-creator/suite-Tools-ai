/**
 * CONFIGURACIÓN DE ACCESO Y CLASIFICACIÓN DE HERRAMIENTAS
 * AI DAN SOLUTIONS — Suite de Herramientas IA
 * Total: 59 herramientas (25 Premium / 34 SuperVIP)
 */

// ==========================================
// 1. CONFIGURACIÓN DE CONTACTO Y UPGRADE
// ==========================================
const ACCESS_CONFIG = {
  // Número internacional Perú (+51) sin espacios ni símbolos
  WHATSAPP_PHONE: '51985332135',

  // Mensaje estructurado de upgrade para clientes SuperVIP hacia Premium
  DEFAULT_UPGRADE_MESSAGE: (toolName) =>
    `Hola AI DAN SOLUTIONS, actualmente cuento con acceso SuperVIP en la plataforma y deseo realizar el upgrade para desbloquear la herramienta Premium: *${toolName}*. ¿Me podrían brindar los métodos de pago y el procedimiento?`,

  // Mensaje estructurado de activación para nuevos clientes / sin membresía
  DEFAULT_ACTIVATION_MESSAGE: (email) =>
    `Hola AI DAN SOLUTIONS, deseo adquirir una membresía para mi correo: *${email}*. ¿Me comparten los precios de SuperVIP y Premium y métodos de pago?`
};

// ==========================================
// 2. HERRAMIENTAS PREMIUM (25 Herramientas)
// ==========================================
const PREMIUM_TOOLS = [
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
];

// ==========================================
// 3. HERRAMIENTAS SUPERVIP (34 Herramientas)
// ==========================================
const SUPERVIP_TOOLS = [
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
];

// Sets en memoria para búsquedas instantáneas
const PREMIUM_SET = new Set(PREMIUM_TOOLS);
const SUPERVIP_SET = new Set(SUPERVIP_TOOLS);

// ==========================================
// 4. FUNCIONES DE VALIDACIÓN Y CONTROL UI
// ==========================================

/**
 * Determina el tier de la herramienta según su slug
 * @param {string} slug
 * @returns {'premium' | 'supervip' | 'unknown'}
 */
function getToolTier(slug) {
  if (PREMIUM_SET.has(slug)) return 'premium';
  if (SUPERVIP_SET.has(slug)) return 'supervip';
  return 'unknown';
}

/**
 * Valida si el cliente tiene permiso para acceder a la herramienta
 * @param {Object} userProfile - Datos del cliente desde Supabase
 * @param {boolean} userProfile.supervip
 * @param {boolean} userProfile.premium
 * @param {string} toolSlug
 * @returns {boolean}
 */
function canAccessTool(userProfile, toolSlug) {
  if (!userProfile) return false;

  const tier = getToolTier(toolSlug);

  if (tier === 'premium') {
    return Boolean(userProfile.premium);
  }

  if (tier === 'supervip') {
    return Boolean(userProfile.supervip || userProfile.super_vip);
  }

  return false;
}

/**
 * Genera el enlace directo a WhatsApp con el mensaje predeterminado
 * @param {string} toolName - Nombre visible de la herramienta
 * @returns {string} URL formateada de WhatsApp
 */
function getUpgradeUrl(toolName) {
  const message = ACCESS_CONFIG.DEFAULT_UPGRADE_MESSAGE(toolName);
  return `https://wa.me/${ACCESS_CONFIG.WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Genera el enlace directo a WhatsApp para nuevos clientes o activación
 * @param {string} email - Correo con el que intentó registrarse/iniciar sesión
 * @returns {string} URL formateada de WhatsApp
 */
function getActivationUrl(email) {
  const message = ACCESS_CONFIG.DEFAULT_ACTIVATION_MESSAGE(email);
  return `https://wa.me/${ACCESS_CONFIG.WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Renderiza el estado de acceso (desbloqueado o candado/upgrade) en la card del DOM
 * @param {HTMLElement} cardElement - Contenedor DOM de la tarjeta
 * @param {string} toolSlug - Slug identificador de la herramienta
 * @param {string} toolName - Nombre visible de la herramienta
 * @param {Object} userProfile - { supervip: boolean, premium: boolean }
 */
function applyAccessControl(cardElement, toolSlug, toolName, userProfile) {
  const hasAccess = canAccessTool(userProfile, toolSlug);
  const tier = getToolTier(toolSlug);

  // Insignia visual (badge)
  const badgeElement = cardElement.querySelector('.badge-tier');
  if (badgeElement) {
    if (tier === 'premium') {
      badgeElement.textContent = '💎 Premium';
      badgeElement.className = 'badge-tier badge-premium';
    } else {
      badgeElement.textContent = '⚡ SuperVIP';
      badgeElement.className = 'badge-tier badge-supervip';
    }
  }

  if (!hasAccess) {
    // Si no tiene acceso: activa estilos de bloqueo (sin oscurecer la tarjeta)
    cardElement.classList.add('tool-locked');

    // Inserta barra inferior con candado si no existe
    if (!cardElement.querySelector('.lock-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'lock-overlay';
      overlay.innerHTML = `
        <div class="lock-content">
          <span class="lock-icon">🔒</span>
          <span class="lock-title">Exclusivo Premium</span>
          <span class="lock-subtitle">Clic para solicitar upgrade</span>
        </div>
      `;
      cardElement.appendChild(overlay);
    }

    // Intercepta el clic y redirige a WhatsApp
    cardElement.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(getUpgradeUrl(toolName), '_blank');
    };
  } else {
    // Si tiene acceso: navegación limpia
    cardElement.classList.remove('tool-locked');
    const existingOverlay = cardElement.querySelector('.lock-overlay');
    if (existingOverlay) existingOverlay.remove();
    cardElement.onclick = () => {
      window.location.href = `${toolSlug}/index.html`;
    };
  }
}

// Exposición global para navegadores (Vanilla JS)
if (typeof window !== 'undefined') {
  window.ACCESS_CONFIG = ACCESS_CONFIG;
  window.PREMIUM_TOOLS = PREMIUM_TOOLS;
  window.SUPERVIP_TOOLS = SUPERVIP_TOOLS;
  window.getToolTier = getToolTier;
  window.canAccessTool = canAccessTool;
  window.getUpgradeUrl = getUpgradeUrl;
  window.getActivationUrl = getActivationUrl;
  window.applyAccessControl = applyAccessControl;
}

// Exposición para Node / Bundlers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ACCESS_CONFIG,
    PREMIUM_TOOLS,
    SUPERVIP_TOOLS,
    getToolTier,
    canAccessTool,
    getUpgradeUrl,
    getActivationUrl,
    applyAccessControl
  };
}
