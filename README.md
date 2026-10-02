# AI DAN SOLUTIONS — Suite de Herramientas IA

> Suite profesional de **59 herramientas de Inteligencia Artificial** optimizadas para creativos, marketers y profesionales digitales.

---

## 💎 Clasificación de Herramientas

La plataforma integra un sistema de control de acceso de dos niveles gestionado a través de **Google OAuth 2.0** y **Supabase**:

- **💎 Premium (25 herramientas)**: Webapps interactivas, pipelines avanzados de Storyboard/Video IA, consistencia de marca y diseño comercial de alto impacto.
- **⚡ SuperVIP (34 herramientas)**: Técnicas POD y visuales, retratos, caricaturas, festividades y coleccionables.

---

## 🚀 Estructura del Proyecto

```text
├── index.html               # Portal principal con catálogo, buscador y filtros
├── netlify.toml             # Configuración de despliegue en Netlify
├── supabase_schema.sql      # Definición de tabla 'clientes' y políticas RLS
├── _shared/
│   ├── config.js            # Configuración de Supabase, WhatsApp y catálogo
│   ├── access-control.js    # Lógica de validación de tiers y upgrades
│   ├── auth.js              # Gatekeeper y autenticación Google OAuth
│   ├── auth.css             # Estilos de autenticación, candados e insignias
│   └── ai-dan-theme.css     # Sistema de diseño y tokens visuales
└── [59 carpetas de herramientas]/
    └── [herramienta]/index.html
```

---

## 🔒 Seguridad y Control de Acceso

- Autenticación segura mediante **Google OAuth 2.0**.
- Autorización validada por **Row Level Security (RLS)** en Supabase.
- Gatekeeper en portal principal y en páginas individuales de cada herramienta.
- Integración directa con WhatsApp (+51 985 332 135) para solicitud de upgrades y nuevas membresías.

---

© 2025 AI DAN SOLUTIONS. Todos los derechos reservados.
