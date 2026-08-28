# Coramyr Demo - Landing Page Médica

Sitio web profesional para la **Dra. Miriam Cabañas Alvistegui**, especialista en medicina alternativa, radiestesia médica y sanación cuántica con +22 años de experiencia.

🌐 **Demo en vivo:** [coramyr.mx](https://coramyr.mx) · [coramyr.pages.dev](https://coramyr.pages.dev)

---

## Stack Tecnológico

| Categoría | Tecnología | Versión |
|-----------|------------|---------|
| Framework | React | 19.2 |
| Build Tool | Vite | 8.0 |
| CSS Framework | Tailwind CSS | 4.2 |
| Carousel | embla-carousel-react | 8.6 |
| Icons | lucide-react | 1.8 |
| Linting | ESLint | 9.39 |
| Deploy | Cloudflare Pages | — |
| Image optimization | sharp | 0.35 |

---

## Características

- **Diseño Responsivo:** Adaptado a móviles, tablets y escritorio.
- **Single Page Application** con secciones modulares:
  - Hero / Sobre Mí
  - Especialidad y Servicios
  - Metodología (4 fases)
  - Testimonios (carrusel)
  - FAQ (acordeón)
  - Footer con redes sociales
- **SEO Técnico** (ver [`docs/seo/`](./docs/seo/)):
  - Meta tags Open Graph y Twitter Cards
  - Schema.org JSON-LD (Physician, MedicalBusiness, FAQPage)
  - `sitemap.xml` y `robots.txt`
  - Headers de seguridad (`_headers`)
- **Accesibilidad:** atributos `alt`, `aria-*`, semántica HTML5.
- **Internacionalización:** estructura preparada para i18n (`lang="es-MX"`).
- **Performance:** auto-minify, Brotli, HTTP/3 en Cloudflare.

---

## Instalación y Ejecución Local

```bash
# Clonar el repositorio
git clone https://github.com/NVergil/coramyr-demo.git
cd coramyr-demo

# Instalar dependencias
npm install

# Servidor de desarrollo (con --host habilitado para mobile testing)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

Por defecto Vite sirve en `http://localhost:5173`. El script `dev` ya incluye `--host`, por lo que en la misma red Wi-Fi puedes acceder desde tu móvil usando la IP que muestra la terminal (ej. `http://192.168.1.X:5173`).

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── carrousel/              # Subcomponentes Embla Carousel
│   ├── Header.jsx              # Hero / Sobre Mí
│   ├── Speciality.jsx          # Especialidad y Servicios
│   ├── Methodology.jsx         # Metodología en 4 fases
│   ├── Testimonials.jsx        # Carrusel de testimonios
│   ├── FAQ.jsx                 # Preguntas frecuentes (acordeón)
│   ├── Footer.jsx              # Footer + redes sociales
│   ├── SocialsIcons.jsx        # Iconos de redes sociales
│   └── StructuredData.jsx      # Schema.org JSON-LD
├── data/
│   ├── constants.js            # ⭐ Fuente única de verdad (DOCTOR, SOCIALS, etc.)
│   ├── faqs.json
│   ├── methodology.json
│   ├── specialties.json
│   └── testimonials.json
├── assets/                     # Imágenes, SVGs
├── App.jsx                     # Composición de secciones
├── main.jsx                    # Entry point
├── base.css                    # Variables CSS (reservadas para dark mode)
└── index.css                   # Tailwind + estilos globales
```

---

## Configuración Global

Toda la información configurable vive en [`src/data/constants.js`](./src/data/constants.js):

- `DOCTOR_CONFIG` — nombre, título, teléfonos, email, WhatsApp
- `SOCIAL_LINKS` — Instagram, TikTok, Facebook, YouTube
- `CONSULTATION_PRICE` — precios USD / MXN
- `APP_CONFIG` — título del sitio, dominio, idioma, OG image

Para cambiar el número de WhatsApp, nombre de la doctora o redes sociales, **solo editar `constants.js`**. El resto del código se actualiza automáticamente.

---

## Documentación Adicional

| Doc | Descripción |
|-----|-------------|
| [`TODO.md`](./TODO.md) | Tareas pendientes y completadas |
| [`IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md) | Historial de refactorización y fases previas |
| [`docs/seo/PHASE_1_SETUP.md`](./docs/seo/PHASE_1_SETUP.md) | Manual operativo SEO Fase 1 (Cloudflare, GSC, Schema) |
| [`docs/seo/PHASE_2_NEXT.md`](./docs/seo/PHASE_2_NEXT.md) | Próximos pasos SEO (performance, i18n, accesibilidad) |

---

## Workflow de Deploy

El sitio se deploya automáticamente en **Cloudflare Pages** al hacer push a `main`:

1. Build command: `npm run build`
2. Build output: `dist/`
3. Node version: `20`
4. SPA fallback: manejado por Cloudflare (`not_found_handling: single-page-application`)

---

## Licencia y Uso

Proyecto privado y propietario. Creado como paso inicial antes de pasar a un entorno completo de producción.

---

*Sitio desarrollado para CORAMYR © 2026 — Dra. Miriam Cabañas Alvistegui.*