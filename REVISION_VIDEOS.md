# Revisión de vídeos de las lecciones — 13/09/2026

Se sustituyen todas las demostraciones antiguas de las 20 lecciones. Los ocho MP4 antiguos se retiran del proyecto. Los siete clips de Instagram de la videoteca se conservan, con su autor y reproducción local.

## Selección y correspondencia

El catálogo `src/lib/boxing/lesson-videos.ts` asigna cada vídeo a su lección, con título, autor, idioma, enlace al instante original y una indicación de qué observar. Ganchos y uppercuts tienen demostraciones distintas para la mano delantera y trasera. La lección de tres golpes se centra en el 1-2-3 que aparece en su vídeo.

23 archivos de vídeo, 24 ubicaciones en 20 lecciones. El paso atrás aparece en desplazamientos y defensa. El fragmento de gancho delantero también ilustra el 1-2-3; esa reutilización es deliberada. Los fragmentos duran entre 13 y 76 segundos. El vídeo introductorio presenta el programa; el de sombra ilustra respiración, y el round completo se realiza en Ring.

## Fuentes y cortes

Tony Jeffries Español, “TUTORIAL 101: LA GUIA DEFINITIVA DE BOXEO!”:
https://www.youtube.com/watch?v=YYeqmwthegc

| Archivo en `public/videos/lessons/` | Instantes en el original | Duración |
| --- | --- | --- |
| `intro.mp4` | 5–40 s | 35 s |
| `stance.mp4` | 100–162 s | 62 s |
| `guard.mp4` | 162–196 s | 34 s |
| `balance.mp4` | 421–445 s | 24 s |
| `step-drag.mp4` | 406–445 s | 39 s |
| `forward-back.mp4` | 633–646 s | 13 s |
| `lateral.mp4` | 445–511 s | 66 s |
| `pivot.mp4` | 2477–2530 s | 53 s |
| `jab.mp4` | 574–633 s | 59 s |
| `cross.mp4` | 750–815 s | 65 s |
| `lead-hook.mp4` | 834–860 s | 26 s |
| `rear-hook.mp4` | 1085–1124 s | 39 s |
| `rear-uppercut.mp4` | 946–996 s | 50 s |
| `lead-uppercut.mp4` | 1006–1046 s | 40 s |
| `one-two-three.mp4` | 834–860 s | 26 s |
| `block.mp4` | 2097–2144 s | 47 s |
| `slip.mp4` | 2320–2396 s | 76 s |
| `parry.mp4` | 2001–2026 s | 25 s |
| `step-back.mp4` | 2414–2454 s | 40 s |
| `roll.mp4` | 2249–2307 s | 58 s |
| `shadow.mp4` | 2686–2719 s | 33 s |

Otras dos fuentes de Tony Jeffries, con audio en inglés indicado en pantalla y claves escritas en español:

- `warmup.mp4`: 410–478 s (68 s), “The Best Boxing Warm Up for Training”, https://www.youtube.com/watch?v=DiMG-7FuZ0Q — Tony Jeffries y Kev.
- `one-two.mp4`: 199–238 s (39 s), “How to Throw a 1 2 Jab Cross in Boxing”, https://www.youtube.com/watch?v=vyTaKpylOcU.

## Revisión

Se contrastaron los cortes con la transcripción y con secuencias de fotogramas de cada archivo. El jab nuevo muestra extensión frontal y regreso, en lugar del barrido lateral del antiguo. Las secuencias incluyen explicaciones y ejemplos de errores: las indicaciones bajo el vídeo aclaran qué observar, especialmente en equilibrio, uppercut y slip.

El reproductor mantiene las proporciones completas, controles nativos, reinicio, repetición y velocidades 0,5×, 0,75× y 1×. Las fuentes son enlaces opcionales; no se cargan reproductores de Instagram o YouTube.

## Verificación reproducible

- `npm run typecheck` y `npm run build`.
- `node --experimental-strip-types scripts/check-lesson-videos.mjs [URL]`: descubre las 20 lecciones desde Escuela y comprueba reproducción de los 23 archivos, portadas, atribución, bucle real al final, cámara lenta, navegación jab→cross con reinicio de ajustes, ausencia de iframes/peticiones a reproductores externos y desbordamiento horizontal, a 390 y 1280 píxeles.
- `node scripts/check-coach-videos.mjs [URL]`: regresión de los siete clips de Instagram y sus seis categorías.
- `node scripts/browser-smoke.mjs URL RUTA_SCREENSHOT`: renderizado móvil/ordenador y consola; comparar la compilación con `--baseline`.

Se usa Playwright porque agent-browser no está disponible en este equipo. Las capturas y originales de trabajo permanecen en carpetas ignoradas; el despliegue incluye únicamente los clips finales y sus portadas.
