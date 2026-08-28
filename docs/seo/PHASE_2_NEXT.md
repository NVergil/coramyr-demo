# SEO & Performance — Fase 2

> Documento de planificación para la **segunda iteración de SEO técnico y performance**.
> Hereda todo lo completado en [`PHASE_1_SETUP.md`](./PHASE_1_SETUP.md).
> Última actualización: 2026-08-21

---

## 0. Contexto

La **Fase 1** dejó el sitio con fundamentos sólidos: meta tags, Schema.org JSON-LD, sitemap, robots.txt, headers de seguridad y verificación en Google Search Console + Bing. Ahora la **Fase 2** se enfoca en:

1. **Performance** — mejorar Lighthouse Mobile a > 90
2. **Accesibilidad** — auditar y cumplir WCAG 2.1 AA

> **Nota:** la internacionalización (i18n al inglés) y animaciones de entrada **no son prioridad** — el público objetivo principal es México, predominantemente personas mayores, por lo que se prioriza una experiencia sobria, rápida y sin distracciones. Quedan como features futuras si el mercado cambia.

---

## 1. Performance

### 1.1 Optimización de imágenes

**Problema actual:** `public/doctor-profile.png` pesa ~621 KB.

**Acciones:**
- [ ] Convertir a **WebP** (calidad 80) y **AVIF** (calidad 60) con `sharp`
- [ ] Generar versiones responsivas (`srcset`) en 3 tamaños: 400w, 800w, 1200w
- [ ] Usar `<picture>` con fallback PNG para compatibilidad
- [ ] Optimizar SVGs en `assets/` con SVGO

**Criterio de éxito:** imagen principal < 100 KB en formato WebP.

### 1.2 Code Splitting

**Acciones:**
- [ ] Lazy load de `Testimonials.jsx` con `React.lazy` + `Suspense`
- [ ] Evaluar lazy load de `StructuredData.jsx` (no crítico para render)
- [ ] Preload de fuentes si se agregan custom fonts

**Beneficio esperado:** First Contentful Paint < 1.5s en 3G.

### 1.3 CSS y JS

- [ ] Auditar con `vite build --mode analyze` (rollup-plugin-visualizer)
- [ ] Tree-shaking de íconos `lucide-react` (importar solo los usados)
- [ ] Verificar que Tailwind purge está eliminando clases no usadas

---

## 2. Accesibilidad (WCAG 2.1 AA)

### 2.1 Auditoría inicial

- [ ] Correr [axe DevTools](https://www.deque.com/axe/devtools/) en cada sección
- [ ] Validar con [WAVE](https://wave.webaim.org/)
- [ ] Navegación completa por teclado (Tab, Enter, Esc)

### 2.2 Issues conocidos a verificar

- [ ] **Contraste de colores** — especialmente texto en `sky-900` sobre blanco
- [ ] **Focus visible** — todos los elementos interactivos deben tener outline claro
- [ ] **ARIA labels** — íconos de redes sociales y botones de WhatsApp
- [ ] **Acordeón FAQ** — `aria-expanded`, `aria-controls`, `aria-labelledby`
- [ ] **Carrusel** — pausable, sin auto-play, navegable por teclado
- [ ] **Skip link** — agregar `<a href="#main" class="sr-only focus:not-sr-only">Saltar al contenido</a>`
- [ ] **Reduced motion** — respetar `prefers-reduced-motion`

### 2.3 Semántica

- [ ] Verificar jerarquía de headings (un solo `<h1>`, sin saltos de nivel)
- [ ] Landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)

---

## 3. Internacionalización (i18n) — DESCARTADO

La traducción al inglés **no es prioritaria** en esta fase. El público objetivo principal es México y la audiencia actual no la demanda. Esta sección queda como referencia futura.

### 3.1 Si se reactiva en el futuro

**Stack recomendado:** `react-i18next` + `react-i18next/browser-languagedetector`

```
src/
├── i18n/
│   ├── locales/
│   │   ├── es-MX.json
│   │   └── en-US.json
│   └── index.js              # Config i18next
```

### 3.2 Checklist si se implementa

- [ ] Setup de `react-i18next`
- [ ] Extracción de strings hardcoded a `es-MX.json`
- [ ] Switcher de idioma en `Header`
- [ ] URLs: `coramyr.mx/en/...` (configurar en Cloudflare Pages redirects)
- [ ] Traducción de JSONs de contenido
- [ ] Considerar traductor profesional si el mercado USA crece

---

## 4. Mejoras Adicionales

### 4.1 Sticky WhatsApp Button (Mobile)

Botón flotante fijo en esquina inferior derecha en mobile, con animación de pulso sutil.

```jsx
<a
  href={DOCTOR_CONFIG.whatsappUrl}
  className="fixed bottom-4 right-4 md:hidden bg-green-500 text-white p-4 rounded-full shadow-lg"
  aria-label="Contactar por WhatsApp"
>
  <MessageCircle />
</a>
```

### 4.2 `tel:` además de WhatsApp

Algunos usuarios mayores prefieren llamar. Agregar opción "Llamar" junto al CTA "Agendar Cita".

### 4.3 Google Business Profile

- [ ] Crear perfil en [business.google.com](https://business.google.com/)
- [ ] Vincular con sitio web
- [ ] Agregar fotos de la doctora y consultorio
- [ ] Incentivar reseñas de pacientes

### 4.4 OG Image definitivo

Ver [`PHASE_1_SETUP.md` §6](./PHASE_1_SETUP.md#6-reemplazar-og-imagesvg-por-pngjpg-definitivo-opcional) — pendiente al cierre de Fase 1.

---

## 5. Orden de Implementación Sugerido

| # | Tarea | Esfuerzo | Impacto |
|---|-------|----------|---------|
| 1 | Optimizar `doctor-profile.png` (WebP + srcset) | 2h | 🔴 Alto |
| 2 | Code splitting Testimonials | 1h | 🟡 Medio |
| 3 | Auditoría accesibilidad completa | 4h | 🔴 Alto |
| 4 | Skip link + focus visible | 1h | 🟡 Medio |
| 5 | Sticky WhatsApp mobile | 2h | 🟡 Medio |
| 6 | `tel:` link | 0.5h | 🟢 Bajo |
| 7 | Setup `react-i18next` | 3h | 🟡 Medio |
| 8 | Traducción EN | 6h | 🟡 Medio |
| 9 | Google Business Profile | 1h | 🔴 Alto |
| 10 | OG image PNG | 2h | 🟢 Bajo |

**Total estimado:** ~22 horas de desarrollo + tiempo de verificación.

---

## 6. Criterios de Éxito

| Métrica | Actual (estimado) | Objetivo Fase 2 |
|---------|--------------------|------------------|
| Lighthouse Performance (Mobile) | ~75 | **> 90** |
| Lighthouse Accessibility | ? | **> 95** |
| Lighthouse SEO | ~95 | **100** |
| LCP (Largest Contentful Paint) | ? | **< 2.5s** |
| CLS (Cumulative Layout Shift) | ? | **< 0.1** |
| TBT (Total Blocking Time) | ? | **< 200ms** |
| Tamaño bundle JS | ? | **< 200 KB gzipped** |
| Idiomas soportados | 1 (es-MX) | **2 (es-MX + en-US)** |

---

## 7. Testing

Antes de cerrar la Fase 2, correr:

```bash
# Build
npm run build

# Preview local
npm run preview

# Lighthouse (Chrome DevTools o CLI)
npx lighthouse https://coramyr.mx --view

# Accesibilidad
npx pa11y https://coramyr.mx

# Schema.org
# → https://search.google.com/test/rich-results
```

---

## 8. Tracking

Una vez iniciado el trabajo, mover tareas a [`TODO.md`](../../TODO.md) en la sección **"En Progreso"** con checkbox individuales.

---

*Fase 2 — pendiente de inicio. Branch sugerido: `feature/seo-fase-2`*