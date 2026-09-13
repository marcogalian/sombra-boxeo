# Estado de SOMBRA

Última actualización: 13 de septiembre de 2026.

## Estado actual

La aplicación está lista para probar. Está orientada a móvil y permite aprender técnica de boxeo, seguir entrenamientos por rounds cronometrados y consultar un plan progresivo de seis semanas. El progreso se guarda en el dispositivo.

## Mejoras realizadas

- Escuela ordenada de 20 lecciones, desde postura y guardia hasta combinaciones, defensa y rounds de sombra.
- Videoteca filtrable por Guardia, Piernas, Golpes, Esquivas, Rapidez y En forma.
- Siete clips descargados en `public/videos/coaches/`, servidos por la app y con crédito visible al autor. Sin reproductores ni conexiones a Instagram para verlos.
- Controles de pausa, avance, reinicio, repetición automática y velocidades 0,5× / 0,75× / 1×.
- Portadas extraídas de los vídeos originales y acceso **“20 lecciones · vídeos nuevos”** en Inicio.
- Renovación de las 20 lecciones con 23 archivos de vídeo de entrenadores reales. Se eliminan los ocho MP4 antiguos y el reproductor de YouTube.
- Jab, recto, ganchos, ambos uppercuts, pasos, pivote, bloqueo, slip, parry, roll, calentamiento y sombra con fragmentos propios de cada técnica.
- Vídeos y portadas reales también en las tarjetas de las lecciones y entrenamientos.
- Escuela muestra primero las lecciones; la videoteca conserva un acceso directo.
- Fuentes, cortes y criterios de revisión documentados en `REVISION_VIDEOS.md`.
- Ejercicios relacionados para pasar directamente de aprender a practicar.
- Entrenamiento específico de rapidez técnica.
- Plan progresivo de seis semanas con objetivos y sesiones semanales.
- Navegación y tarjetas adaptadas a pantallas móviles.

## Reels de Instagram seleccionados

Los siete MP4 completos (720×1280, H.264/AAC) y sus portadas están incluidos en el proyecto. Se reproducen con controles nativos, sin entrar en Instagram. La atribución conserva el autor y un enlace opcional a su publicación. Cada tarjeta indica el nivel, qué observar y cómo practicarlo.

1. Jab y regreso a la guardia — @franksnobleart  
   https://www.instagram.com/franksnobleart/reel/Daxl27sNiEZ/
2. Recto usando pies y cadera — @franksnobleart  
   https://www.instagram.com/franksnobleart/reel/DZDkCHlufdN/
3. Cuatro movimientos para crear ángulos — @mustyyboxing  
   https://www.instagram.com/reel/DaWxNqiIRb0/
4. Salidas defensivas después de golpear — @ryanhennesseyboxing  
   https://www.instagram.com/reel/Dc6ut8SMFOE/
5. Cómo practicar fintas creíbles — @tony_jeffries  
   https://www.instagram.com/reel/DBWhUwYKUFf/
6. Rapidez manteniendo los hombros relajados — @tony_jeffries  
   https://www.instagram.com/reel/DBZJIXxM3-I/
7. Saco para cardio, equilibrio y coordinación — @franksnobleart  
   https://www.instagram.com/franksnobleart/reel/Da49dT7Nje4/

## Comprobaciones realizadas

- Compilación final correcta.
- Comprobación de TypeScript correcta.
- Renderizado revisado en móvil y ordenador.
- Sin desbordamiento horizontal en móvil.
- Filtros de la videoteca comprobados.
- Autores, descripciones, reproductores integrados y enlaces originales de los Reels comprobados.
- Prueba automática de los siete clips a 390 y 1280 píxeles: reproducción real, reinicio, cámara lenta, repetición al final y cero peticiones a Instagram. Se usa Playwright porque `agent-browser` no está disponible en este equipo.
- Tarjeta para compartir e icono de la aplicación presentes.

La comprobación con acceso de red muestra la app sin errores de consola ni de ejecución en móvil y ordenador.

Las 20 lecciones se prueban con `scripts/check-lesson-videos.mjs`: reproducción de los 23 archivos, velocidad, bucle, atribución, navegación entre lecciones y cero peticiones a reproductores externos.

## Prueba recomendada para mañana

1. Abrir **Escuela → Videoteca** y cambiar entre las seis categorías.
2. Reproducir un clip de cada categoría; probar cámara lenta, repetición y reinicio sin salir de la app.
3. Abrir Jab — el 1 y comprobar el nuevo entrenador. Entrar también en Ganchos y Uppercut: cada una tiene dos demostraciones.
4. Iniciar el entrenamiento de rapidez, pausar y continuar el cronómetro.
5. Revisar el plan de seis semanas.
6. Marcar una lección como terminada, recargar la aplicación y confirmar que el progreso permanece.
