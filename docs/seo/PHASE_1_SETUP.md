# MANUAL_SETUP_FASE_1 — CORAMYR (SEO Técnico)

> Documento de pasos manuales a ejecutar **una sola vez** después de mergear el branch `feature/seo-fase-1` a `main`.  
> Tiempo estimado total: **40-60 minutos**.  
> No requiere código, solo clicks en paneles web.

---

## 0. Pre-requisitos

- Tener mergeado el branch `feature/seo-fase-1` en `main`.
- Cloudflare Pages ya hosteando el proyecto (confirmado por vos).
- Acceso a una cuenta Google (para Search Console, GA opcional).
- Acceso a la cuenta del dominio en Cloudflare (para DNS).

---

## 1. Cloudflare Pages — Configurar deploy y performance

### 1.1 Configurar build (si no lo está)

1. Ir a [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → tu proyecto.
2. **Settings** → **Builds**:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (vacío)
   - **Node version**: `20` (o `18` si 20 no disponible).
3. **Environment variables** (opcional, recomendado):
   - `NODE_VERSION` = `20`
4. **Save**.

> **⚠️ Importante:** si Cloudflare detectó tu proyecto como **Workers (Assets)** en vez de **Pages**, el SPA fallback lo maneja internamente `wrangler.jsonc` con `"not_found_handling": "single-page-application"`. En ese caso **NO usar `public/_redirects`** — entra en loop infinito y rompe el deploy. Ya está corregido en `feature/cf-deploy-fix`.

### 1.2 Conectar dominio custom (cuando lo tengas)

1. **Workers & Pages** → tu proyecto → **Custom domains** → **Set up a custom domain**.
2. Ingresar `coramyr.mx` (o el que vayas a usar).
3. Cloudflare agregará automáticamente los registros DNS `CNAME` y `A/AAAA` (si el dominio ya está en CF).
4. SSL/TLS: debe quedar en **Full (Strict)** (no Flexible).

### 1.3 Activar optimizaciones de performance

1. **Speed** → **Optimization**:
   - ✅ **Auto Minify**: HTML, CSS, JS
   - ✅ **Brotli**
   - ✅ **Early Hints** (beta)
   - ✅ **HTTP/3 (QUIC)**
2. **Caching** → **Configuration**:
   - **Caching level**: Standard
   - **Browser cache TTL**: Respect Existing Headers
3. **Speed** → **Content Optimization** → **Image Resizing** (opcional, plan free no disponible).
4. **Rules** → **Page Rules** (plan free permite 3): no crear reglas innecesarias, las `_headers` ya en el repo hacen el trabajo.

### 1.4 HSTS (HTTP Strict Transport Security)

1. **SSL/TLS** → **Edge Certificates**:
   - ✅ **HSTS** → Enable
   - Max Age: `12` months (luego podés subir a `24` y eventualmente `preload`)
   - ✅ Apply to subdomains
   - ✅ No-sniff header
2. **Opcional pero recomendado**: enviar a [hstspreload.org](https://hstspreload.org/) después de 1 mes de uso estable.

### 1.5 Verificar headers

1. Una vez deployado, ir a [securityheaders.com](https://securityheaders.com/).
2. Ingresar `https://coramyr.pages.dev` (o tu dominio).
3. Debe mostrar A o A+ en HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
4. Si algo falta, verificar que `public/_headers` esté en el repo y se haya copiado a `dist/`.

---

## 2. Cloudflare Web Analytics (sin cookies, recomendado)

> Cumple LFPDPPP/GDPR sin banner.

1. Ir a [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Analytics & Logs** → **Web Analytics**.
2. Click **Add a site**.
3. Ingresar `coramyr.mx` (o el dominio/subdominio que uses).
4. Cloudflare genera un **snippet JS**:

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "XXXXX"}'></script>
```

5. **Cómo inyectarlo** (2 opciones):

   **Opción A — Manual en `index.html`** (recomendado para React):
   - Pegar el snippet justo antes de `</body>` en `index.html`.
   - Reemplazar `XXXXX` por tu token real.

   **Opción B — Cloudflare injecta automático**:
   - Activar la palanca "Auto-inject" en el panel (sólo funciona si el dominio está en CF, no en Pages directo).
6. Deploy y verificar: en 5-10 min aparecerán pageviews en el panel.

> Si el panel no muestra datos, abrí DevTools → Network → buscar `cloudflareinsights` y confirmar que el script se carga.

---

## 3. Google Search Console (CRÍTICO para SEO)

### 3.1 Verificar el dominio

1. Ir a [Google Search Console](https://search.google.com/search-console/).
2. **Add property** → **Domain** (no URL prefix).
3. Ingresar `coramyr.mx`.
4. Google te dará un registro **TXT** tipo:
   ```
   google-site-verification=xxxxxxxxxxxxx
   ```
5. **Cloudflare** → tu dominio → **DNS** → **Records** → **Add record**:
   - Type: `TXT`
   - Name: `@`
   - Content: pegar el valor de Google
   - TTL: Auto
6. Volver a GSC → **Verify**. Tarda hasta 5 min.

### 3.2 Enviar sitemap

1. En GSC, ir a **Sitemaps** (menú izquierdo).
2. Agregar sitemap: `https://coramyr.mx/sitemap.xml`.
3. Click **Submit**.
4. Verificar que diga "Success" y no "Couldn't fetch".

### 3.3 Solicitar indexación

1. En GSC, ir a **URL Inspection** (arriba).
2. Pegar `https://coramyr.mx/`.
3. Click **Request Indexing**.
4. Google crawler visita en 1-3 días.

### 3.4 Configurar país y segmentación

1. **Settings** → **International Targeting**:
   - **Country**: México (con target a USA hispano si vas bilingüe).
2. **Settings** → **Crawl rate**: dejar en default.

---

## 4. Bing Webmaster Tools (10-15% tráfico USA hispano)

### 4.1 Importar desde GSC (atajo)

1. Ir a [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. **Sign in with Google** → usar la misma cuenta.
3. **Settings** → **Add a site** → seleccionar el sitio ya verificado en GSC.
4. Importar en 1 click.

### 4.2 Enviar sitemap

1. **Sitemaps** → **Submit sitemap**: `https://coramyr.mx/sitemap.xml`.

> Si no usás el atajo, podés verificar el dominio vía DNS CNAME (`bing-site-verification`).

---

## 5. Validar Schema.org (JSON-LD)

> Esto confirma que Google puede leer el marcado y mostrará rich results.

1. Deploy del branch ya mergeado.
2. Ir a [Google Rich Results Test](https://search.google.com/test/rich-results).
3. Ingresar `https://coramyr.pages.dev/` (o tu dominio).
4. Debe detectar:
   - ✅ **Physician** (con AggregateRating)
   - ✅ **FAQPage** (5 preguntas)
   - ✅ **MedicalBusiness**
5. Si algo falla, abrir DevTools → View Source → buscar `application/ld+json` y verificar JSON válido en [JSONLint](https://jsonlint.com/).

---

## 6. Reemplazar og-image.svg por PNG/JPG definitivo (opcional)

El placeholder SVG actual es funcional pero **las redes sociales (Facebook, LinkedIn, WhatsApp) a veces no rasterizan SVG** correctamente. Para mejor preview social:

1. Diseñar el OG image en **Canva** (template 1200×630) o **Figma**:
   - Foto de la doctora (si la autorizás)
   - Headline: "Radiestesia Médica · Sanación Cuántica"
   - Sub: "+22 años · Consulta presencial o a distancia"
   - Logo CORAMYR
   - Color de fondo: sky-900 (`#0c4a6e`)
2. Exportar como `og-image.png` (o `.jpg` calidad 85).
3. Reemplazar en `public/og-image.png`.
4. Actualizar 3 lugares:
   - `index.html` línea 27: `og:image` → `.png`
   - `index.html` línea 28: `og:image:secure_url` → `.png`
   - `index.html` línea 41: `twitter:image` → `.png`
   - `index.html` línea 30: `og:image:type` → `image/png`
   - `src/data/constants.js`: `ogImage` → `.png`
   - `public/sitemap.xml`: image loc
5. Commit + push.
6. Testear con [opengraph.xyz](https://www.opengraph.xyz/) o [metatags.io](https://metatags.io/).

---

## 7. Smoke test final (10 min)

Después de todo lo anterior, hacer este checklist:

| Check | Cómo verificar | Esperado |
|-------|----------------|----------|
| HTML en español | DevTools → `<html lang="es-MX">` | ✅ |
| Title SEO | View Source | "Dra. Miriam Cabañas · Radiestesia Médica..." |
| Description | Meta description visible | 155-160 chars |
| OG preview | https://www.opengraph.xyz/ | Imagen + texto |
| Schema válido | Google Rich Results Test | 0 errores |
| Robots.txt | `https://coramyr.mx/robots.txt` | Texto visible |
| Sitemap | `https://coramyr.mx/sitemap.xml` | XML bien formado |
| HSTS | securityheaders.com | A o A+ |
| Web Analytics | Panel Cloudflare → Web Analytics | Pageviews subiendo |
| WhatsApp link | Click en "Agendar Cita" en mobile | Abre chat +52 56 2215 1939 |
| Lighthouse | DevTools → Lighthouse → Mobile | Performance > 80 |

---

## 8. Próximos pasos (Fase 2 — siguiente iteración)

- Optimizar imagen `doctor-profile.png` (621 KB → WebP/AVIF + srcset).
- Code splitting con `React.lazy` (Testimonials).
- Implementar `tel:+525622151939` además de WhatsApp.
- Sticky WhatsApp button para mobile.
- Crear cuenta Google Business Profile.
- Traducción al inglés (`/en`) con `react-i18next` si el mercado USA crece.

---

## 9. Resumen ejecutivo (1 minuto)

| Acción | Prioridad | Tiempo |
|--------|-----------|--------|
| Verificar Cloudflare Pages build | 🟢 Hecho por código | 5 min |
| Activar optimizaciones CF | 🔴 Alta | 5 min |
| Cloudflare Web Analytics | 🟡 Media | 10 min |
| Google Search Console | 🔴 Alta | 15 min |
| Bing Webmaster Tools | 🟢 Baja | 5 min |
| Validar Schema | 🟡 Media | 5 min |
| OG image PNG | 🟢 Opcional | 30 min |

**Total mínimo viable**: 40 min. Con OG image: 70 min.

---

*Documento generado al cierre de Fase 1 — branch `feature/seo-fase-1`.*
