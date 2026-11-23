# Kevin Bryan Austria Galvan · Portafolio cinematográfico (nocturno premium)

## 0. Brief

Landing de una sola página (más rutas de case study) para **Kevin Bryan Austria Galvan**, desarrollador Full-Stack orientado a contratación freelance y remota.

Estética: **nocturno, sobrio, eléctrico** (inspiración cromática Spider-Man + base Batman, sin IP).

Idea firma: **headline con revelado palabra a palabra** (blur → nítido) sobre **orbe rojo/azul** animado lento; métricas CI/CD en panel de cristal a la derecha (desktop).

Fidelidad: implementar solo lo listado; sin grillas “hacker”, sin plantilla genérica, sin personajes ni logos de franquicias.

## 1. Stack y archivos

React 19 + TypeScript + Vite 8 + Tailwind 4 + Framer Motion 14; iconos Lucide.

Rutas: `/` portafolio scroll; `/os` Kevin OS; `/projects/bastion`, `/projects/abyssan`.

## 2. Tipografía

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| Display | Instrument Sans | 600, 700 | H1, métricas grandes |
| Cuerpo / UI | Instrument Sans | 400, 500, 600 | párrafos, nav, botones |
| Meta | IBM Plex Mono | 400, 500 | rol, pipeline, etiquetas |

Carga: Google Fonts (existente en `index.html`).

## 3. Tokens de color

```css
--color-surface: #0B0B10;
--color-surface-elevated: #12121A;
--color-surface-glass: color-mix(in srgb, #18182A 72%, transparent);
--color-border: #2A2A3A;
--color-border-subtle: #1A1A26;
--color-text: #ECECF1;        /* 100% */
--color-text-muted: #9494A8;  /* ~60% */
--color-accent: #E23636;      /* primario — CTAs, métricas, acento hero */
--color-accent-soft: #B91C1C;
--color-secondary: #2B59C3;  /* secundario — gradientes, enlaces hover */
--color-secondary-deep: #1E3A8A;
--color-violet-spark: #7C3AED; /* acento puntual ≤1% superficie */
```

`html, body { background: var(--color-surface); }` — sin flash blanco.

Modo claro: desaturar acentos; mantener legibilidad (ThemeContext existente ajustado).

## 4. Utilidades globales

- `.glass-panel`: blur 16px, borde `border-subtle`.
- `.cinematic-grain`: SVG noise opacity 0.04, `pointer-events: none`, z-index 5.
- `.hero-orb`: gradientes radiales rojo (18% opacidad) + azul (14%), blur 80px, drift 20s ease-in-out.
- `@media (prefers-reduced-motion: reduce)`: orbes estáticos; sin stagger en headline.

## 5. Activos

Sin video externo (rendimiento Lighthouse móvil). Fallback: orbes CSS + panel pipeline.

## 6. Capas (home)

z-ladder: fondo 0 → grain 5 → contenido 10 → header sticky 50.

Hero: `min-h-[100dvh]` menos header; grid 1col móvil, 2col ≥1024px (55% / 45%).

## 7. Navbar

Sticky, `bg: color-mix(surface 85%, transparent)`, `backdrop-blur: 20px`, borde inferior 1px.

Logo mono “K. Austria”. Links ancla `#about` … `#contact`. CTA implícito en hero.

Móvil: menú acordeón; EN/ES + tema.

## 8. Hero

| Elemento | ES copy (referencia) | Estilo | Motion |
|---|---|---|---|
| Pill | Disponible para freelance y remoto | mono 11px, tracking 0.18em | fade 0.4s |
| Rol | Full-Stack Developer | mono xs muted | delay 0.1s |
| H1 palabras | headline ES (12–14 palabras) | clamp(2.25rem, 5vw, 3.75rem), wt 600, tracking -0.03em | stagger i×0.07s, blur 12px→0, y 12→0, 0.55s |
| Focus | Ingeniería de Software · DevOps · Datos | mono sm, color accent | delay 0.5s |
| Idiomas | Español nativo · Inglés básico | text-sm muted | — |
| Tagline EN fijo | Building real-world software from idea to production. | text-lg accent-secondary 80% | fade |
| CTAs | Ver proyectos, casos, GitHub, GitLab | botón primario rojo; secundarios borde | hover lift 2px |

Pipeline visual: sombra `0 24px 80px -24px rgba(226,54,54,0.22)`.

## 9. Secciones

Todas envueltas en `Reveal` (`whileInView`, once, margin -60px): opacity 0→1, y 24→0, 0.55s, easing `cubic-bezier(0.22, 1, 0.36, 1)`.

Padding sección: `py-20 sm:py-28`. Títulos: `text-2xl sm:text-3xl`, tracking tight.

Cards proyecto: hover `border-accent/40`, transición 0.25s.

## 10. Tabla de motion

| Elemento | Trigger | Delay | Duración | De → A |
|---|---|---|---|---|
| Hero palabras | mount | 0.2+i×0.07 | 0.55s | blur 12px, y 12 → 0 |
| Orbes | mount | 0 | 20s loop | translate ±24px |
| Secciones | inView | 0 | 0.55s | opacity 0, y 24 → visible |
| Pipeline stages | mount interval | 0.5s steps | 3.2s ciclo | stage highlight |

Reduced motion: estados finales inmediatos.

## 11. Responsive

| | <640 | ≥768 | ≥1024 |
|---|---|---|---|
| Hero H1 | 2.25rem | 2.75rem | 3.75rem |
| Nav links | drawer | hidden → flex | flex |
| Pipeline cards | 1 col | 3 col | 1 col en sidebar lg |

Sin scroll horizontal a 390px.

## 12. Contenido (no negociable)

Mismos proyectos, métricas may–sep 2026, repos build, experiencia anonimizada, CV a solicitud, mailto, LinkedIn, sin teléfono ni PDF CV.

Rol: Full-Stack Developer (Software Engineering · DevOps · Data).

**Calidad de copy:** español latinoamericano natural, mismo nivel de pulido que inglés en todas las secciones.

## 13. Aceptación

Primer viewport: fondo grafito, orbe rojo superior-izquierda, nombre en headline stagger, tagline inglés en azul, pill roja de disponibilidad, panel pipeline con 307/105/repos a la derecha (desktop).