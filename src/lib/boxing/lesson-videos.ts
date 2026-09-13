export type LessonClip = {
  id: string;
  title: string;
  video: string;
  image: string;
  creator: string;
  url: string;
  language: string;
  watchFor: string;
  orientation: "landscape";
};
export const LESSON_CLIPS: Record<string, LessonClip[]> = {
  "para-que": [
    {
      id: "intro",
      title: "Qué vas a aprender",
      watchFor: "Guardia, golpes, desplazamientos y defensa: aprende cada pieza antes de unirlas.",
      video: "/videos/lessons/intro.mp4",
      image: "/videos/lessons/intro.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=5s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  espacio: [
    {
      id: "warmup",
      title: "Activa el cuerpo antes de golpear",
      watchFor:
        "Empieza suave y aumenta el ritmo poco a poco. Completa después la rutina de calentamiento de la lección.",
      video: "/videos/lessons/warmup.mp4",
      image: "/videos/lessons/warmup.jpg",
      creator: "Tony Jeffries y Kev",
      url: "https://www.youtube.com/watch?v=DiMG-7FuZ0Q&t=410s",
      language: "Audio en inglés · claves en español",
      orientation: "landscape",
    },
  ],
  postura: [
    {
      id: "stance",
      title: "Coloca los pies y relaja las rodillas",
      watchFor:
        "Un pie a cada lado de la línea imaginaria. Observa la guardia ortodoxa y la zurda.",
      video: "/videos/lessons/stance.mp4",
      image: "/videos/lessons/stance.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=100s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  manos: [
    {
      id: "guard",
      title: "Puños, codos y mentón",
      watchFor:
        "El puño trasero protege la cara y los codos quedan cerca del cuerpo. Mira el ángulo del torso.",
      video: "/videos/lessons/guard.mp4",
      image: "/videos/lessons/guard.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=162s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  equilibrio: [
    {
      id: "balance",
      title: "Mantén la base al moverte",
      watchFor:
        "Observa los ejemplos incorrectos: juntar los pies o separarlos demasiado. Ambos pies recorren distancias similares.",
      video: "/videos/lessons/balance.mp4",
      image: "/videos/lessons/balance.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=421s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  "paso-arrastre": [
    {
      id: "step-drag",
      title: "Paso y recuperación de la guardia",
      watchFor:
        "Mueve primero el pie de la dirección hacia la que vas y recupera la separación con el otro.",
      video: "/videos/lessons/step-drag.mp4",
      image: "/videos/lessons/step-drag.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=406s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  "adelante-atras": [
    {
      id: "forward-back",
      title: "Entrar con el jab",
      watchFor: "El pie delantero y el jab llegan coordinados. Empieza despacio.",
      video: "/videos/lessons/forward-back.mp4",
      image: "/videos/lessons/forward-back.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=633s",
      language: "Audio en español",
      orientation: "landscape",
    },
    {
      id: "step-back",
      title: "Salir de alcance con los pies",
      watchFor: "Practica el paso atrás al aire y recupera tu guardia.",
      video: "/videos/lessons/step-back.mp4",
      image: "/videos/lessons/step-back.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=2414s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  laterales: [
    {
      id: "lateral",
      title: "Desplazarte sin cruzar los pies",
      watchFor:
        "A la izquierda empieza el pie izquierdo; a la derecha, el derecho. Mira el cruce que debes evitar.",
      video: "/videos/lessons/lateral.mp4",
      image: "/videos/lessons/lateral.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=445s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  pivote: [
    {
      id: "pivot",
      title: "Gira para cambiar de ángulo",
      watchFor:
        "El pie delantero gira sobre su apoyo; el trasero describe el arco. Mantén las manos en guardia.",
      video: "/videos/lessons/pivot.mp4",
      image: "/videos/lessons/pivot.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=2477s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  jab: [
    {
      id: "jab",
      title: "Jab: sale recto y vuelve a la cara",
      watchFor:
        "El puño delantero va hacia el objetivo y regresa por la misma línea. Observa el pequeño giro, la exhalación y la demostración en el saco.",
      video: "/videos/lessons/jab.mp4",
      image: "/videos/lessons/jab.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=574s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  cross: [
    {
      id: "cross",
      title: "Recto: pie, cadera y puño",
      watchFor:
        "Gira la cadera y el talón trasero; la mano delantera sigue protegiendo. Mira la posición final desde otro ángulo.",
      video: "/videos/lessons/cross.mp4",
      image: "/videos/lessons/cross.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=750s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  ganchos: [
    {
      id: "lead-hook",
      title: "Gancho delantero después del 1-2",
      watchFor:
        "El peso vuelve hacia la pierna trasera mientras gira el cuerpo. El brazo acompaña el giro.",
      video: "/videos/lessons/lead-hook.mp4",
      image: "/videos/lessons/lead-hook.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=834s",
      language: "Audio en español",
      orientation: "landscape",
    },
    {
      id: "rear-hook",
      title: "Gancho trasero y posición final",
      watchFor: "La rotación lleva el peso hacia delante; termina equilibrado sin girar de más.",
      video: "/videos/lessons/rear-hook.mp4",
      image: "/videos/lessons/rear-hook.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=1085s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  uppercut: [
    {
      id: "rear-uppercut",
      title: "Uppercut trasero",
      watchFor:
        "El puño sube delante de la cara con el codo flexionado. El entrenador también exagera los errores que debes evitar.",
      video: "/videos/lessons/rear-uppercut.mp4",
      image: "/videos/lessons/rear-uppercut.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=946s",
      language: "Audio en español",
      orientation: "landscape",
    },
    {
      id: "lead-uppercut",
      title: "Uppercut delantero en distancia corta",
      watchFor:
        "Observa el golpe ascendente corto y cómo lo enlaza. Repite sin saco antes de añadir fuerza.",
      video: "/videos/lessons/lead-uppercut.mp4",
      image: "/videos/lessons/lead-uppercut.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=1006s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  "uno-dos": [
    {
      id: "one-two",
      title: "Jab y recto con rotación",
      watchFor:
        "Observa la cadera al encadenar el jab y el recto. Conserva la base y devuelve las manos a la guardia.",
      video: "/videos/lessons/one-two.mp4",
      image: "/videos/lessons/one-two.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=vyTaKpylOcU&t=199s",
      language: "Audio en inglés · claves en español",
      orientation: "landscape",
    },
  ],
  "tres-golpes": [
    {
      id: "one-two-three",
      title: "Jab, recto y gancho delantero",
      watchFor:
        "El recto coloca el peso para el gancho siguiente. Une los tres golpes con suavidad.",
      video: "/videos/lessons/one-two-three.mp4",
      image: "/videos/lessons/one-two-three.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=834s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  bloqueo: [
    {
      id: "block",
      title: "Cubrir la cabeza y recuperar la guardia",
      watchFor:
        "Observa cómo coloca los guantes. En casa reproduce solo el gesto, sin recibir golpes.",
      video: "/videos/lessons/block.mp4",
      image: "/videos/lessons/block.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=2097s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  slip: [
    {
      id: "slip",
      title: "Sacar la cabeza de la línea",
      watchFor:
        "El movimiento es pequeño y equilibrado. Mira ambos lados y el error de inclinarse demasiado.",
      video: "/videos/lessons/slip.mp4",
      image: "/videos/lessons/slip.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=2320s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  parry: [
    {
      id: "parry",
      title: "Desvío corto con la mano trasera",
      watchFor:
        "La palma intercepta el jab con un gesto corto; no persigas el puño con todo el brazo.",
      video: "/videos/lessons/parry.mp4",
      image: "/videos/lessons/parry.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=2001s",
      language: "Audio en español",
      orientation: "landscape",
    },
    {
      id: "step-back",
      title: "Paso atrás para salir de alcance",
      watchFor: "La distancia cambia al mover los pies. Ensaya la salida y recupera tu guardia.",
      video: "/videos/lessons/step-back.mp4",
      image: "/videos/lessons/step-back.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=2414s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  roll: [
    {
      id: "roll",
      title: "Pasar por debajo y salir al otro lado",
      watchFor:
        "Mira la trayectoria bajo el gancho y el cambio de apoyo. Practica despacio y sin compañero.",
      video: "/videos/lessons/roll.mp4",
      image: "/videos/lessons/roll.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=2249s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
  "sombra-rounds": [
    {
      id: "shadow",
      title: "Sombra con respiración y relajación",
      watchFor:
        "Empieza suelto, coloca la guardia y exhala con cada golpe. Usa Ring para el round completo.",
      video: "/videos/lessons/shadow.mp4",
      image: "/videos/lessons/shadow.jpg",
      creator: "Tony Jeffries",
      url: "https://www.youtube.com/watch?v=YYeqmwthegc&t=2686s",
      language: "Audio en español",
      orientation: "landscape",
    },
  ],
};
export function clipsForLesson(id: string) {
  return LESSON_CLIPS[id] ?? [];
}
