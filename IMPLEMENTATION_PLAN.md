# Plan de Implementación - coramyr-demo

## Resumen del Proyecto

**coramyr-demo** es una landing page profesional para la Dra. Miriam Cabañas Alvistegui, especialista en medicina alternativa, radiestesia médica y sanación cuántica.

## Tecnologías Utilizadas

| Categoría | Tecnología | Versión |
|-----------|------------|---------|
| Framework | React | 19.2.4 |
| Build Tool | Vite | 8.0.4 |
| CSS Framework | Tailwind CSS | 4.2.2 |
| Carousel | embla-carousel-react | 8.6.0 |
| Icons | lucide-react | 1.8.0 |
| Linting | ESLint | 9.39.4 |

---

## Estructura del Proyecto (Antes)

```
src/
├── components/
│   ├── carrousel/
│   │   ├── EmblaCarousel.jsx
│   │   ├── EmblaCarouselArrowButtons.jsx
│   │   └── EmblaCarouselSelectedSnapDisplay.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Speciality.jsx
│   ├── Methodology.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   └── SocialsIcons.jsx
├── data/
│   └── testimonials.json
├── App.jsx
├── main.jsx
├── index.css
├── embla.css
└── base.css
```

---

## Estructura del Proyecto (Después)

```
src/
├── components/
│   ├── carrousel/
│   │   ├── EmblaCarousel.jsx
│   │   ├── EmblaCarouselArrowButtons.jsx
│   │   └── EmblaCarouselSelectedSnapDisplay.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Speciality.jsx
│   ├── Methodology.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   └── SocialsIcons.jsx
├── data/
│   ├── testimonials.json
│   ├── constants.js          # NUEVO: Configuración global
│   ├── faqs.json             # NUEVO: FAQs externalizadas
│   ├── specialties.json      # NUEVO: Especialidades externalizadas
│   └── methodology.json      # NUEVO: Metodología externalizada
├── App.jsx
├── main.jsx
├── index.css
├── embla.css
└── base.css

TODO.md                         # NUEVO: Tracking de tareas
IMPLEMENTATION_PLAN.md           # NUEVO: Este archivo
```

---

## Problemas Detectados y Corregidos

### Bugs de Consistencia

| # | Archivo | Línea | Problema | Estado |
|---|---------|-------|----------|--------|
| 1 | Header.jsx | 56 | alt="Dra. Elena Valdés" debería ser "Dra. Miriam Cabañas Alvistegui" | ✅ Corregido |
| 2 | Speciality.jsx | 2 | Comentario JSX mal cerrado: `{/* Specialty / Profession */}` | ✅ Corregido |

### Datos Hardcodeados → Externalizados

| # | Archivo | Datos original | Archivo nuevo | Estado |
|---|---------|-----------------|----------------|--------|
| 1 | FAQ.jsx | 5 preguntas frecuentes inline | faqs.json | ✅ Corregido |
| 2 | Speciality.jsx | 7 items de especialidades inline | specialties.json | ✅ Corregido |
| 3 | Methodology.jsx | 4 pasos de metodología inline | methodology.json | ✅ Corregido |
| 4 | App.jsx, Header.jsx, Footer.jsx | Teléfono y nombre hardcodeado | constants.js | ✅ Corregido |

---

## Orden de Implementación

### Fase 1: Correcciones Urgentes (Bug Fixes)

- [x] 1.1 Corregir alt de imagen en Header.jsx
- [x] 1.2 Eliminar comentario inválido en Speciality.jsx

### Fase 2: Extracción de Datos

- [x] 2.1 Crear `src/data/constants.js`
- [x] 2.2 Crear `src/data/faqs.json`
- [x] 2.3 Crear `src/data/specialties.json`
- [x] 2.4 Crear `src/data/methodology.json`

### Fase 3: Refactorización de Componentes

- [x] 3.1 Refactorizar FAQ.jsx para usar faqs.json
- [x] 3.2 Refactorizar Speciality.jsx para usar specialties.json
- [x] 3.3 Refactorizar Methodology.jsx para usar methodology.json
- [x] 3.4 Refactorizar App.jsx para usar constants.js
- [x] 3.5 Refactorizar Header.jsx para usar constants.js
- [x] 3.6 Refactorizar Footer.jsx para usar constants.js

### Fase 4: Limpieza

- [x] 4.1 Mover comentarios de App.jsx a TODO.md
- [ ] 4.2 Limpiar base.css (variables no usadas) - **Cancelado: las variables pueden ser útiles para futuro dark mode**

---

## Detalle de Archivos Creados

### 1. constants.js

```javascript
export const DOCTOR_CONFIG = {
  name: "Miriam Cabañas Alvistegui",
  title: "Dra.",
  experience: 22,
  phone: "5622151939",
  whatsappUrl: "https://wa.me/5622151939"
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/coramyr/",
  instagram: "https://www.instagram.com/dr.miriam_cabanas_alvistegui/",
  tiktok: "https://vm.tiktok.com/ZS9YbQkWGP3b8-XOGU6/"
};

export const CONSULTATION_PRICE = {
  usd: 20,
  mxn: 350,
  currency: "USD / MXN"
};

export const APP_CONFIG = {
  title: "coramyr-demo",
  lang: "es"
};
```

### 2. faqs.json

```json
[
  { "q": "¿Cuál es el costo de la consulta?", "a": "$20 dólares americanos o $350 pesos mexicanos." },
  { "q": "¿Qué método de pago aceptan?", "a": "Efectivo, Paypal, Western Union o transferencia a cuenta en BBVA." },
  { "q": "¿Qué es la Radiestesia Médica?", "a": "Una ciencia que nos ayuda a determinar la causa raíz de la enfermedad del paciente." },
  { "q": "¿Qué es un análisis de Radiestesia Médica?", "a": "Método en el cual, con la muestra de sangre del paciente se realiza un estudio minucioso de la energía electromagnética de las células del mismo." },
  { "q": "¿En qué consiste el tratamiento?", "a": "Después de tener los resultados del análisis, se procede a realizar una limpieza, desintoxicación, desparasitación y sanación cuántica a distancia. Así como se le proporciona al paciente homeopatía, flores de Bach, Factor de transferencia o células madre (según las necesidades del paciente) y se da seguimiento cada 15 días para verificar síntomas y en casos crónicos se da apoyo emocional al paciente." }
]
```

### 3. specialties.json

```json
{
  "sectionTitle": "Especialidad y Servicios",
  "sectionDescription": "Estudié en The Open International University for Complementary Medicines...",
  "mainServices": [...],
  "asideServices": [...]
}
```

### 4. methodology.json

```json
[
  { "phase": "Diagnóstico Inicial", "action": "...", "tool": "..." },
  { "phase": "Intervención", ... },
  { "phase": "Soporte Químico Natural", ... },
  { "phase": "Seguimiento", ... }
]
```

---

## Cambios Realizados en Componentes

### App.jsx
- Removido `useState` import (no utilizado)
- Removido objeto `Doctor` hardcodeado
- Importado `DOCTOR_CONFIG` y `SOCIAL_LINKS` desde `constants.js`
- Footer ahora recibe `socials` y `socialLinks` como props separados

### Header.jsx
- WhatsApp URL ahora usa `doctor.whatsappUrl` en lugar de hardcode
- Alt de imagen ahora usa `doctor.name` dinámicamente
- Experiencia ahora usa `doctor.experience` dinámicamente

### Footer.jsx
- Recibido `socialLinks` como prop separado de `socials`
- WhatsApp URL ahora usa `doctor.whatsappUrl`
- Título de doctora ahora usa `doctor.title` dinámicamente

### Speciality.jsx
- Removido comentario JSX inválido
- Datos de especialidades ahora vienen de `specialties.json`
- Iconos ahora se crean dinámicamente con `React.createElement`

### Methodology.jsx
- Pasos de metodología ahora vienen de `methodology.json`

### FAQ.jsx
- Preguntas ahora vienen de `faqs.json`

---

## Recomendaciones de Seguridad

| Área | Estado Actual | Recomendación |
|------|---------------|---------------|
| WhatsApp Links | ✅ `rel="noopener noreferrer"` | Correcto |
| Social Links | ✅ `rel="noopener noreferrer"` | Correcto |
| XSS Prevention | N/A | No hay inputs de usuario |
| External Links | ✅ `target="_blank"` | Correcto |

---

## Mejoras de Legibilidad Implementadas

1. ✅ Datos centralizados en archivos JSON
2. ✅ Constantes con nombres descriptivos
3. ✅ Separación de concerns (datos vs componentes)
4. ✅ Documentación completa del proyecto

---

## Comandos de Verificación

```bash
# Verificar que no hay errores de lint
npm run lint

# Verificar build
npm run build

# Verificar en desarrollo
npm run dev
```

---

## Historial de Cambios

| Fecha | Descripción |
|-------|-------------|
| 2026-05-29 | Creación del branch feature/refactoring |
| 2026-05-29 | Implementación completa del plan de refactorización |

---

## Estado de la Implementación

### Fase 1: Correcciones Urgentes
- [x] 1.1 Corregir alt de imagen en Header.jsx
- [x] 1.2 Eliminar comentario inválido en Speciality.jsx

### Fase 2: Extracción de Datos
- [x] 2.1 Crear `src/data/constants.js`
- [x] 2.2 Crear `src/data/faqs.json`
- [x] 2.3 Crear `src/data/specialties.json`
- [x] 2.4 Crear `src/data/methodology.json`

### Fase 3: Refactorización de Componentes
- [x] 3.1 Refactorizar FAQ.jsx
- [x] 3.2 Refactorizar Speciality.jsx
- [x] 3.3 Refactorizar Methodology.jsx
- [x] 3.4 Refactorizar App.jsx
- [x] 3.5 Refactorizar Header.jsx
- [x] 3.6 Refactorizar Footer.jsx

### Fase 4: Limpieza
- [x] 4.1 Crear TODO.md
- [ ] 4.2 Limpiar base.css (cancelado)

---

## Notas para Merge

### ESLint Warnings (No bloqueantes)
Los siguientes warnings existen pero no afectan la funcionalidad:
- `no-unused-vars` en componentes que reciben icons por props (patrón establecido)
- `react-refresh/only-export-components` en archivos de carrusel (lógica de hooks separada)
- `react-hooks/set-state-in-effect` en callbacks de Embla Carousel (comportamiento esperado)

### Builds Verificados
- ✅ `npm run build` pasa exitosamente
- ✅ `npm run dev` inicia correctamente

### Para Hacer Merge
```bash
git add .
git commit -m "refactor: externalize data and fix bugs"
git checkout main
git merge feature/refactoring
```