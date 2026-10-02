// ============================================================
// AI DAN SOLUTIONS — Módulo de Autenticación y Gatekeeper
// Archivo: _shared/auth.js
//
// SEGURIDAD: Toda la autorización se valida server-side via RLS.
// El JWT de Supabase (firmado con clave secreta del servidor) contiene
// el claim email verificado por Google OAuth. El cliente NO puede
// forjar, modificar ni falsificar este token.
// ============================================================

(function () {
    'use strict';

    // ---- Guardia anti-manipulación: todo vive dentro de un closure ----
    // Las variables de sesión NO son accesibles desde window/console.

    let _supabase = null;
    let _session  = null;
    let _perfil   = null;   // { email, super_vip, premium, estado }

    // ================================================================
    // 1. INICIALIZACIÓN DEL CLIENTE SUPABASE
    // ================================================================
    function initSupabase() {
        if (typeof AIDANS_CONFIG === 'undefined') {
            console.error('[AUTH] AIDANS_CONFIG no encontrado. ¿Cargaste config.js?');
            return null;
        }
        if (typeof supabase === 'undefined' || !supabase.createClient) {
            console.error('[AUTH] SDK de Supabase no cargado.');
            return null;
        }
        _supabase = supabase.createClient(
            AIDANS_CONFIG.SUPABASE_URL,
            AIDANS_CONFIG.SUPABASE_ANON_KEY,
            {
                auth: {
                    autoRefreshToken: true,
                    persistSession: true,
                    detectSessionInUrl: true,   // Captura el token de retorno OAuth
                }
            }
        );
        return _supabase;
    }

    // ================================================================
    // 2. GOOGLE OAUTH — LOGIN
    // ================================================================
    async function loginConGoogle() {
        if (!_supabase) return;
        const { error } = await _supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: AIDANS_CONFIG.REDIRECT_URL,
                queryParams: {
                    prompt: 'select_account',        // Fuerza selector de cuenta
                    access_type: 'offline',
                }
            }
        });
        if (error) {
            console.error('[AUTH] Error OAuth:', error.message);
            renderError('Error al iniciar sesión con Google. Intenta nuevamente.');
        }
    }

    // ================================================================
    // 3. LOGOUT — destruye tokens
    // ================================================================
    async function logout() {
        if (!_supabase) return;
        await _supabase.auth.signOut();
        _session = null;
        _perfil = null;
        window.location.reload();
    }

    // ================================================================
    // 4. GATEKEEPER — Consulta DB con token validado server-side
    // ================================================================
    async function verificarAutorizacion(session) {
        const email = session.user.email;
        const emailVerified = session.user.email_confirmed_at ||
                              session.user.user_metadata?.email_verified;

        // 4a. Verificar que Google confirmó el email
        if (!emailVerified) {
            return { autorizado: false, motivo: 'email_no_verificado', email };
        }

        // 4b. Consultar tabla clientes (RLS fuerza email = jwt.email server-side)
        const { data, error } = await _supabase
            .from('clientes')
            .select('email, super_vip, premium, estado')
            .eq('email', email.toLowerCase().trim())
            .maybeSingle();

        if (error) {
            console.error('[GATEKEEPER] Error DB:', error.message);
            return { autorizado: false, motivo: 'error_db', email };
        }

        if (!data) {
            return { autorizado: false, motivo: 'no_registrado', email };
        }

        if (data.estado !== 'activo') {
            return { autorizado: false, motivo: 'inactivo', email };
        }

        if (!data.super_vip) {
            return { autorizado: false, motivo: 'sin_acceso', email };
        }

        // 4c. Autorizado — guardar perfil en closure (no en window)
        _perfil = Object.freeze({
            email: data.email,
            super_vip: data.super_vip,
            premium: data.premium,
            estado: data.estado,
        });

        return { autorizado: true, perfil: _perfil, email };
    }

    // ================================================================
    // 5. RENDER — Pantallas de UI
    // ================================================================

    // 5a. Pantalla de LOGIN
    function renderLogin(container) {
        container.innerHTML = `
        <div class="auth-screen">
            <div class="auth-card">
                <div class="auth-logo-wrap">
                    <img src="${getBasePath()}_shared/logo.jpg" alt="AI DAN SOLUTIONS" class="auth-logo">
                </div>
                <h1 class="auth-title">AI DAN SOLUTIONS</h1>
                <p class="auth-subtitle">Accede a tu suite de herramientas de IA</p>
                <button id="btnGoogleLogin" class="google-btn" type="button">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Continuar con Google
                </button>
                <p class="auth-footer-text">Autenticación segura mediante Google OAuth 2.0</p>
            </div>
        </div>`;
        document.getElementById('btnGoogleLogin').addEventListener('click', loginConGoogle);
    }

    // 5b. Pantalla de BLOQUEO (no autorizado)
    function renderBloqueado(container, email, motivo) {
        const wa = AIDANS_CONFIG.WHATSAPP_NUMBER;
        const mensajes = {
            no_registrado: `El correo <strong>${email}</strong> no tiene una suscripción activa.`,
            inactivo:      `La suscripción del correo <strong>${email}</strong> se encuentra suspendida.`,
            sin_acceso:    `El correo <strong>${email}</strong> no tiene permisos de acceso.`,
            email_no_verificado: `El correo <strong>${email}</strong> no está verificado por Google.`,
            error_db:      `Error al verificar la suscripción. Intenta nuevamente.`,
        };
        const msgFn = AIDANS_CONFIG.DEFAULT_ACTIVATION_MESSAGE ||
            ((e) => `Hola AI DAN SOLUTIONS, deseo adquirir una membresía para mi correo: *${e}*. ¿Me comparten los precios de SuperVIP y Premium y métodos de pago?`);
        const waText = encodeURIComponent(msgFn(email));

        container.innerHTML = `
        <div class="auth-screen">
            <div class="auth-card auth-card--blocked">
                <div class="auth-blocked-icon">🚫</div>
                <h1 class="auth-title auth-title--blocked">Acceso No Autorizado</h1>
                <p class="auth-blocked-msg">${mensajes[motivo] || mensajes.no_registrado}</p>
                <a href="https://wa.me/${wa}?text=${waText}" target="_blank" class="auth-wa-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.624-1.467A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.115 0-4.1-.655-5.74-1.878l-.412-.308-2.742.87.837-2.674-.338-.432A9.71 9.71 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12s-4.374 9.75-9.75 9.75z"/></svg>
                    Solicitar Activación por WhatsApp
                </a>
                <button class="auth-logout-btn" id="btnLogoutBlocked" type="button">
                    Cerrar sesión e intentar con otro correo
                </button>
            </div>
        </div>`;
        document.getElementById('btnLogoutBlocked').addEventListener('click', logout);
    }

    // 5c. Header del usuario autenticado (píldora con avatar)
    function renderUserPill(user) {
        const avatar = user.user_metadata?.avatar_url || user.user_metadata?.picture || '';
        const email  = user.email;
        const pill = document.createElement('div');
        pill.className = 'auth-user-pill';
        pill.innerHTML = `
            ${avatar ? `<img src="${avatar}" alt="" class="auth-avatar">` : '<div class="auth-avatar-placeholder">👤</div>'}
            <span class="auth-email">${email}</span>
            ${_perfil?.premium ? '<span class="auth-badge-premium">PREMIUM</span>' : ''}
            ${_perfil?.super_vip && !_perfil?.premium ? '<span class="auth-badge-svip">SUPER VIP</span>' : ''}
            <button class="auth-logout-pill" id="btnLogoutPill" title="Cerrar sesión">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </button>`;

        // Insertar en el header existente o crear uno nuevo
        let header = document.querySelector('header') || document.querySelector('.hero');
        if (header) {
            // Insertar como primer hijo del header
            const existing = header.querySelector('.auth-user-pill');
            if (existing) existing.remove();
            header.style.position = 'relative';
            header.insertBefore(pill, header.firstChild);
        } else {
            document.body.prepend(pill);
        }

        document.getElementById('btnLogoutPill').addEventListener('click', logout);
    }

    // 5d. Error genérico
    function renderError(msg) {
        const el = document.createElement('div');
        el.className = 'auth-toast-error';
        el.textContent = msg;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 5000);
    }

    // ================================================================
    // 6. SISTEMA DE CANDADOS — PREMIUM vs SUPER VIP
    // ================================================================

    function slugToToolName(slug) {
        if (!slug) return 'Herramienta Premium';
        return slug.replace(/-/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase())
            .replace(/\bIa\b/g, 'IA')
            .replace(/\b3d\b/gi, '3D')
            .replace(/\b4k\b/gi, '4K');
    }

    function aplicarCandados() {
        if (!_perfil) return;

        const premiumSlugs = new Set(AIDANS_CONFIG.PREMIUM_TOOLS || []);

        // Buscar todas las cards de herramientas
        document.querySelectorAll('.card, [data-tool-slug]').forEach(card => {
            const href = card.getAttribute('href') || '';
            const slug = card.dataset.toolSlug ||
                         href.replace(/\/index\.html$/, '').replace(/\/$/, '').split('/').pop();

            const titleEl = card.querySelector('.card-title');
            const toolName = titleEl ? titleEl.textContent.trim() : slugToToolName(slug);

            // Si está disponible window.applyAccessControl, delegamos o aplicamos directamente
            if (typeof window.applyAccessControl === 'function') {
                window.applyAccessControl(card, slug, toolName, {
                    supervip: _perfil.super_vip,
                    super_vip: _perfil.super_vip,
                    premium: _perfil.premium
                });
                return;
            }

            if (!premiumSlugs.has(slug)) return;     // No es premium, no tocar
            if (_perfil.premium) return;               // Es premium, acceso total

            // ---- BLOQUEAR herramienta premium para usuario super_vip ----
            card.classList.add('tool-locked');
            card.classList.add('card--locked');
            card.removeAttribute('href');
            card.style.cursor = 'pointer';

            // Añadir overlay de candado si no existe
            if (!card.querySelector('.lock-overlay') && !card.querySelector('.card-lock-overlay')) {
                const lockOverlay = document.createElement('div');
                lockOverlay.className = 'lock-overlay';
                lockOverlay.innerHTML = `
                    <div class="lock-content">
                        <span class="lock-icon">🔒</span>
                        <span class="lock-title">Exclusivo Premium</span>
                        <span class="lock-subtitle">Clic para solicitar upgrade</span>
                    </div>`;
                card.style.position = 'relative';
                card.appendChild(lockOverlay);
            }

            // Click → Redirigir a WhatsApp o modal
            card.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const waPhone = AIDANS_CONFIG.WHATSAPP_NUMBER || '51985332135';
                const msgFn = AIDANS_CONFIG.DEFAULT_UPGRADE_MESSAGE ||
                    ((t) => `Hola AI DAN SOLUTIONS, actualmente cuento con acceso SuperVIP en la plataforma y deseo realizar el upgrade para desbloquear la herramienta Premium: *${t}*. ¿Me podrían brindar los métodos de pago y el procedimiento?`);
                const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(msgFn(toolName))}`;
                window.open(url, '_blank');
            };
        });
    }

    function mostrarModalUpgrade(slug, customToolName) {
        // Remover modal previo si existe
        const prev = document.getElementById('premiumModal');
        if (prev) prev.remove();

        const wa = AIDANS_CONFIG.WHATSAPP_NUMBER || '51985332135';
        const toolName = customToolName || slugToToolName(slug);
        const msgFn = AIDANS_CONFIG.DEFAULT_UPGRADE_MESSAGE ||
            ((t) => `Hola AI DAN SOLUTIONS, actualmente cuento con acceso SuperVIP en la plataforma y deseo realizar el upgrade para desbloquear la herramienta Premium: *${t}*. ¿Me podrían brindar los métodos de pago y el procedimiento?`);
        const waText = encodeURIComponent(msgFn(toolName));

        const modal = document.createElement('div');
        modal.id = 'premiumModal';
        modal.className = 'premium-modal-backdrop';
        modal.innerHTML = `
        <div class="premium-modal">
            <button class="premium-modal-close" id="closePremiumModal" type="button">&times;</button>
            <div class="premium-modal-icon">💎</div>
            <h2 class="premium-modal-title">Herramienta Exclusiva Premium</h2>
            <p class="premium-modal-desc">
                Desbloquea <strong>${toolName}</strong> y toda la suite de herramientas avanzadas de generación de imágenes, video y flujos comerciales con IA.
            </p>
            <div class="premium-modal-features">
                <div class="premium-feature">✨ Pipelines de Storyboard y Video IA</div>
                <div class="premium-feature">🎨 Webapps interactivas y consistencia de marca</div>
                <div class="premium-feature">💼 Comerciales y diseño de alto impacto</div>
                <div class="premium-feature">♾️ Acceso ilimitado a actualizaciones y soporte</div>
            </div>
            <a href="https://wa.me/${wa}?text=${waText}" target="_blank" class="premium-modal-cta">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.624-1.467A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.115 0-4.1-.655-5.74-1.878l-.412-.308-2.742.87.837-2.674-.338-.432A9.71 9.71 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12s-4.374 9.75-9.75 9.75z"/></svg>
                Solicitar Upgrade por WhatsApp
            </a>
        </div>`;

        document.body.appendChild(modal);
        document.getElementById('closePremiumModal').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
        document.addEventListener('keydown', function esc(e) {
            if (e.key === 'Escape') { modal.remove(); document.removeEventListener('keydown', esc); }
        });
    }

    // ================================================================
    // 7. GUARD PARA PÁGINAS INDIVIDUALES DE HERRAMIENTA
    // ================================================================

    function verificarAccesoHerramienta() {
        // Detectar slug de la herramienta actual desde la URL
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        const slug = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1] || '';

        if (!slug || slug === 'index.html') return; // Es el índice, no una herramienta

        const premiumSlugs = new Set(AIDANS_CONFIG.PREMIUM_TOOLS || []);

        if (premiumSlugs.has(slug) && _perfil && !_perfil.premium) {
            // Destruir el contenido de la herramienta
            const body = document.body;
            body.innerHTML = '';
            body.style.cssText = 'background:#0a0a0f;margin:0;font-family:Inter,system-ui,sans-serif;';

            const wa = AIDANS_CONFIG.WHATSAPP_NUMBER || '51985332135';
            const toolName = slugToToolName(slug);
            const msgFn = AIDANS_CONFIG.DEFAULT_UPGRADE_MESSAGE ||
                ((t) => `Hola AI DAN SOLUTIONS, actualmente cuento con acceso SuperVIP en la plataforma y deseo realizar el upgrade para desbloquear la herramienta Premium: *${t}*. ¿Me podrían brindar los métodos de pago y el procedimiento?`);
            const waText = encodeURIComponent(msgFn(toolName));

            body.innerHTML = `
            <div class="auth-screen">
                <div class="auth-card" style="max-width:500px">
                    <div style="font-size:3rem;margin-bottom:1rem">🔒</div>
                    <h1 class="auth-title" style="font-size:1.5rem">Herramienta Exclusiva Premium</h1>
                    <p class="auth-subtitle" style="margin-bottom:1.5rem">
                        La herramienta <strong>${toolName}</strong> requiere una suscripción <strong>Premium</strong>.<br>
                        Tu cuenta <strong>${_perfil.email}</strong> cuenta actualmente con acceso <strong>SuperVIP</strong>.
                    </p>
                    <a href="https://wa.me/${wa}?text=${waText}" target="_blank" class="auth-wa-btn" style="margin-bottom:1rem">
                        Solicitar Upgrade por WhatsApp
                    </a>
                    <a href="../index.html" style="color:#6366f1;text-decoration:none;font-size:0.85rem;font-weight:600">← Volver al inicio</a>
                </div>
            </div>`;

            // Inyectar CSS de auth
            injectAuthCSS();
        }
    }

    // ================================================================
    // 8. UTILIDADES
    // ================================================================

    function getBasePath() {
        // Detecta si estamos en el root (index.html) o dentro de una subcarpeta
        const path = window.location.pathname;
        if (path.endsWith('/index.html') || path.endsWith('/')) {
            const depth = path.split('/').filter(Boolean).length;
            if (depth <= 1) return './';          // Root: /index.html o /
            return '../';                          // Subfolder: /tool/index.html
        }
        return './';
    }

    function injectAuthCSS() {
        if (document.getElementById('authCSS')) return;
        const link = document.createElement('link');
        link.id = 'authCSS';
        link.rel = 'stylesheet';
        link.href = getBasePath() + '_shared/auth.css';
        document.head.appendChild(link);
    }

    // ================================================================
    // 9. FLUJO PRINCIPAL — BOOT
    // ================================================================

    async function boot() {
        // 9a. Inyectar CSS de autenticación
        injectAuthCSS();

        // 9b. Inicializar Supabase
        const client = initSupabase();
        if (!client) {
            renderError('Error de configuración. Revisa config.js y los SDKs.');
            return;
        }

        // 9c. Verificar si ya hay sesión (incluye retorno de OAuth redirect)
        const { data: { session }, error } = await _supabase.auth.getSession();

        if (error) {
            console.error('[AUTH] Error obteniendo sesión:', error.message);
        }

        // 9d. Obtener el contenedor principal (el body o un wrapper)
        const mainContent = document.getElementById('appContent') ||
                           document.querySelector('.grid-container') ||
                           document.querySelector('.container') ||
                           document.querySelector('article');

        if (!session) {
            // ---- SIN SESIÓN → Mostrar Login ----
            const loginTarget = document.getElementById('authTarget') || document.body;

            // Ocultar contenido real
            if (mainContent && mainContent !== document.body) {
                mainContent.style.display = 'none';
            }
            // Ocultar hero, search, footer
            document.querySelectorAll('.hero, .search-container, .grid-container, .index-footer, header, footer, .community-btn-container')
                .forEach(el => el.style.display = 'none');

            renderLogin(loginTarget.id ? loginTarget : document.body);
            return;
        }

        // ---- CON SESIÓN → Verificar autorización ----
        _session = session;

        const resultado = await verificarAutorizacion(session);

        if (!resultado.autorizado) {
            // ---- NO AUTORIZADO → Pantalla de bloqueo ----
            if (mainContent && mainContent !== document.body) {
                mainContent.style.display = 'none';
            }
            document.querySelectorAll('.hero, .search-container, .grid-container, .index-footer, header, footer, .community-btn-container')
                .forEach(el => el.style.display = 'none');

            const blockTarget = document.getElementById('authTarget') || document.body;
            renderBloqueado(blockTarget.id ? blockTarget : document.body, resultado.email, resultado.motivo);
            return;
        }

        // ---- AUTORIZADO → Mostrar suite ----
        renderUserPill(session.user);
        aplicarCandados();
        verificarAccesoHerramienta();

        // 9e. Listener para cambios de sesión (logout, expiración, refresh)
        _supabase.auth.onAuthStateChange((event, newSession) => {
            if (event === 'SIGNED_OUT' || !newSession) {
                _session = null;
                _perfil = null;
                window.location.reload();
            }
            if (event === 'TOKEN_REFRESHED') {
                _session = newSession;
            }
        });
    }

    // ================================================================
    // 10. API PÚBLICA (mínima, solo lo necesario)
    // ================================================================

    // Exponer solo funciones de verificación (no datos de perfil directos)
    window.AIDANS_AUTH = Object.freeze({
        // Verifica si el usuario tiene acceso a un tier específico
        // Retorna una PROMESA que re-verifica contra el servidor
        async verificarTier(tier) {
            if (!_session || !_supabase) return false;
            // Re-consultar DB (evita manipulación de variables en memoria)
            const { data } = await _supabase
                .from('clientes')
                .select('super_vip, premium, estado')
                .eq('email', _session.user.email.toLowerCase().trim())
                .maybeSingle();
            if (!data || data.estado !== 'activo') return false;
            if (tier === 'premium') return data.premium === true;
            if (tier === 'super_vip') return data.super_vip === true;
            return false;
        },
        aplicarCandados,
        getProfile() {
            return _perfil ? { ..._perfil } : null;
        },
        logout,
    });

    // ================================================================
    // 11. ARRANQUE — Esperar a que el DOM esté listo
    // ================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

})();
