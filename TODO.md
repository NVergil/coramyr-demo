# TODO - coramyr-demo

Última actualización: 2026-08-21

---

## En Progreso

### SEO Fase 2 (Performance, Accesibilidad, i18n)
Ver [`docs/seo/PHASE_2_NEXT.md`](./docs/seo/PHASE_2_NEXT.md) para detalle.

- [ ] Optimizar `doctor-profile.png` (621 KB → WebP/AVIF + srcset)
- [ ] Code splitting con `React.lazy` (al menos en Testimonials)
- [ ] Implementar `tel:+525622151939` además del CTA WhatsApp
- [ ] Sticky WhatsApp button flotante en mobile
- [ ] Crear cuenta Google Business Profile
- [ ] Auditar accesibilidad WCAG 2.1 AA (contraste, focus, navegación por teclado)
- [ ] Reemplazar `og-image.svg` por `og-image.png` definitivo
- [ ] Lighthouse Mobile: Performance > 90

---

## Pendientes — Producto

- [ ] Implementar tema dark mode (variables ya reservadas en `base.css`)
- [ ] Implementar formulario de contacto (además de WhatsApp)
- [ ] Optimizar SVGs del directorio `assets/`

---

## Pendientes — Infraestructura

- [ ] Agregar `CHANGELOG.md` centralizado
- [ ] Configurar `markdownlint` en CI
- [ ] Crear `.github/PULL_REQUEST_TEMPLATE.md`
- [ ] Definir convención de commits (Conventional Commits)

---

## Completados Recientes

### Refactorización de código (2026-05-29)
- [x] Mover iconos fuera de `App.jsx`
- [x] Modularizar componentes por sección
- [x] Externalizar datos hardcodeados a archivos JSON
- [x] Crear `constants.js` como fuente única de verdad
- [x] Corregir `alt` de imagen y comentario JSX inválido
- [x] Mover tareas de `App.jsx` a este archivo

### SEO Fase 1 (2026-06-14)
- [x] Schema.org JSON-LD (`StructuredData.jsx`)
- [x] Meta tags Open Graph + Twitter Cards en `index.html`
- [x] `sitemap.xml` y `robots.txt`
- [x] Headers de seguridad en `public/_headers`
- [x] Web manifest (`site.webmanifest`)
- [x] Arreglar WhatsApp con código de país (`+52 56 2215 1939`)

### Producto (2026-08-21)
- [x] Integrar imagen real de la doctora (reemplazo del placeholder)

---

## Notas

- **Fuente única de verdad:** cualquier cambio de datos va en [`src/data/constants.js`](./src/data/constants.js)
- **Deploy:** automático en Cloudflare Pages al pushear a `main`
- **Manual SEO operativo:** [`docs/seo/PHASE_1_SETUP.md`](./docs/seo/PHASE_1_SETUP.md)
- **Animaciones:** descartadas — la mayoría de pacientes son gente mayor y se prioriza una experiencia sin movimientos innecesarios
- **i18n (inglés):** descartado por ahora — queda como feature futura si el mercado USA crece