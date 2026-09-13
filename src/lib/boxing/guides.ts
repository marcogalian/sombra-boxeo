import { clipsForLesson } from "./lesson-videos";
import type { ModuleId } from "./types";

export type VideoSectionId = ModuleId | "rapidez" | "forma";

export const VIDEO_SECTIONS: {
  id: VideoSectionId;
  label: string;
  description: string;
}[] = [
  { id: "guardia", label: "Guardia", description: "Base y equilibrio" },
  { id: "piernas", label: "Piernas", description: "Entrar, salir y pivotar" },
  { id: "golpes", label: "Golpes", description: "Del jab al uppercut" },
  { id: "defensa", label: "Esquivas", description: "Ver, defender y salir" },
  { id: "rapidez", label: "Rapidez", description: "Ritmo y coordinación" },
  { id: "forma", label: "En forma", description: "Resistencia de boxeador" },
];

const GUIDE_CONTENT: {
  id: string;
  section: VideoSectionId;
  title: string;
  detail: string;
  image: string;
  lessonId?: string;
  workoutId?: string;
}[] = [
  {
    id: "guardia-base",
    section: "guardia",
    title: "Montar la guardia",
    detail: "Pies, manos y mentón",
    image: "/images/stance.jpg",
    lessonId: "postura",
  },
  {
    id: "paso-arrastre",
    section: "piernas",
    title: "Paso y arrastre",
    detail: "Muévete sin cruzar los pies",
    image: "/images/feet.jpg",
    lessonId: "paso-arrastre",
  },
  {
    id: "pivote",
    section: "piernas",
    title: "Pivote y salida",
    detail: "Cambia el ángulo sin perder base",
    image: "/images/feet.jpg",
    lessonId: "pivote",
  },
  {
    id: "jab",
    section: "golpes",
    title: "Jab limpio",
    detail: "Sale y vuelve a la guardia",
    image: "/images/jab.jpg",
    lessonId: "jab",
  },
  {
    id: "recto",
    section: "golpes",
    title: "Recto con cadera",
    detail: "Pie, cadera y mano conectados",
    image: "/images/cross.jpg",
    lessonId: "cross",
  },
  {
    id: "ganchos",
    section: "golpes",
    title: "Gancho compacto",
    detail: "Gira sin abrir el brazo",
    image: "/images/hook.jpg",
    lessonId: "ganchos",
  },
  {
    id: "slip",
    section: "defensa",
    title: "Esquiva lateral",
    detail: "Saca la cabeza de la línea",
    image: "/images/slip.jpg",
    lessonId: "slip",
  },
  {
    id: "roll",
    section: "defensa",
    title: "Pasar por debajo",
    detail: "Piernas, guardia y salida",
    image: "/images/slip.jpg",
    lessonId: "roll",
  },
  {
    id: "bloqueo",
    section: "defensa",
    title: "Bloqueo compacto",
    detail: "Cubre sin cerrar los ojos",
    image: "/images/block.jpg",
    lessonId: "bloqueo",
  },
  {
    id: "velocidad",
    section: "rapidez",
    title: "Manos rápidas, guardia alta",
    detail: "Ráfagas cortas sin perder forma",
    image: "/images/shadow.jpg",
    workoutId: "rapidez-tecnica",
  },
  {
    id: "pies-rapidos",
    section: "rapidez",
    title: "Pies rápidos",
    detail: "Cambios de ritmo y dirección",
    image: "/images/feet.jpg",
    workoutId: "pies-jab",
  },
  {
    id: "condicion",
    section: "forma",
    title: "Condición de boxeador",
    detail: "Cuerda, piernas, hombros y core",
    image: "/images/jumprope.jpg",
    workoutId: "condicion",
  },
  {
    id: "sombra",
    section: "forma",
    title: "Rounds de sombra",
    detail: "Resistencia mientras boxeas",
    image: "/images/shadow.jpg",
    workoutId: "sombra-libre",
  },
];

export const FEATURED_GUIDES = GUIDE_CONTENT.map((guide) => ({
  ...guide,
  image: guide.lessonId ? (clipsForLesson(guide.lessonId)[0]?.image ?? guide.image) : guide.image,
}));

export type InstagramReel = {
  video: string;
  id: string;
  sections: VideoSectionId[];
  title: string;
  summary: string;
  watchFor: string;
  practice: string;
  creator: string;
  level: "Base" | "Intermedio";
  url: string;
  image: string;
};

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: "frank-jab",
    video: "/videos/coaches/frank-jab.mp4",
    sections: ["guardia", "golpes"],
    title: "Un jab recto que vuelve a casa",
    summary: "El hombro acompaña el golpe y la mano regresa enseguida al mentón.",
    watchFor: "Hombro detrás del puño, brazo relajado y vuelta por la misma línea.",
    practice: "3 series de 10 jabs lentos delante de un espejo.",
    creator: "@franksnobleart",
    level: "Base",
    url: "https://www.instagram.com/franksnobleart/reel/Daxl27sNiEZ/",
    image: "/videos/coaches/frank-jab.jpg",
  },
  {
    id: "frank-cross",
    video: "/videos/coaches/frank-cross.mp4",
    sections: ["golpes"],
    title: "El recto nace en el suelo",
    summary: "Una demostración clara de cómo unir pie, cadera, cuerpo y hombro.",
    watchFor: "El pie trasero gira antes de que el hombro termine de cruzar.",
    practice: "2 minutos de rectos al 50 %, frenando en equilibrio.",
    creator: "@franksnobleart",
    level: "Base",
    url: "https://www.instagram.com/franksnobleart/reel/DZDkCHlufdN/",
    image: "/videos/coaches/frank-cross.jpg",
  },
  {
    id: "mustyy-footwork",
    video: "/videos/coaches/mustyy-footwork.mp4",
    sections: ["piernas", "rapidez"],
    title: "Cuatro formas de crear ángulos",
    summary: "V-step, Z-step, paso diamante y cambio de guardia para moverte con intención.",
    watchFor: "Base estable y pasos cortos; domina primero el paso y arrastre.",
    practice: "Escoge un solo patrón y repítelo 60 segundos por lado.",
    creator: "@mustyyboxing",
    level: "Intermedio",
    url: "https://www.instagram.com/reel/DaWxNqiIRb0/",
    image: "/videos/coaches/mustyy-footwork.jpg",
  },
  {
    id: "ryan-defensive-exits",
    video: "/videos/coaches/ryan-defensive-exits.mp4",
    sections: ["defensa", "piernas"],
    title: "Salir después de golpear",
    summary: "Cuatro salidas para no quedarse quieto esperando el contraataque.",
    watchFor: "La defensa empieza al terminar la combinación, sin perder la base.",
    practice: "Jab, slip y paso lateral: 5 repeticiones muy lentas por lado.",
    creator: "@ryanhennesseyboxing",
    level: "Intermedio",
    url: "https://www.instagram.com/reel/Dc6ut8SMFOE/",
    image: "/videos/coaches/ryan-defensive-exits.jpg",
  },
  {
    id: "tony-feints",
    video: "/videos/coaches/tony-feints.mp4",
    sections: ["defensa", "guardia"],
    title: "Una finta que parezca real",
    summary: "Tony Jeffries muestra por qué la finta debe empezar igual que un golpe auténtico.",
    watchFor: "Ojos, hombros y pies venden la intención antes de cortar el movimiento.",
    practice: "Alterna jab real y finta durante un round de sombra suave.",
    creator: "@tony_jeffries",
    level: "Intermedio",
    url: "https://www.instagram.com/reel/DBWhUwYKUFf/",
    image: "/videos/coaches/tony-feints.jpg",
  },
  {
    id: "tony-fast-hands",
    video: "/videos/coaches/tony-fast-hands.mp4",
    sections: ["rapidez"],
    title: "Velocidad desde la relajación",
    summary: "Una prueba visual de cómo la tensión innecesaria frena las combinaciones.",
    watchFor: "Hombros sueltos entre golpes y aceleración solo al final.",
    practice: "5 ráfagas de 10 segundos al aire, descansando 20 segundos.",
    creator: "@tony_jeffries",
    level: "Base",
    url: "https://www.instagram.com/reel/DBZJIXxM3-I/",
    image: "/videos/coaches/tony-fast-hands.jpg",
  },
  {
    id: "frank-heavy-bag",
    video: "/videos/coaches/frank-heavy-bag.mp4",
    sections: ["forma"],
    title: "Ponerse en forma con el saco",
    summary: "Un boxeador veterano explica cómo el saco une cardio, equilibrio y coordinación.",
    watchFor: "Mantén técnica y movimiento de pies cuando empiece a faltar el aire.",
    practice: "3 rounds de 2 minutos, suaves y continuos, con 1 minuto de pausa.",
    creator: "@franksnobleart",
    level: "Base",
    url: "https://www.instagram.com/franksnobleart/reel/Da49dT7Nje4/",
    image: "/videos/coaches/frank-heavy-bag.jpg",
  },
];

export const PRACTICE_BY_LESSON: Record<string, string> = {
  "para-que": "primer-dia",
  espacio: "primer-dia",
  postura: "primer-dia",
  manos: "primer-dia",
  equilibrio: "diario",
  "paso-arrastre": "pies-jab",
  "adelante-atras": "pies-jab",
  laterales: "pies-jab",
  pivote: "pies-jab",
  jab: "pies-jab",
  cross: "diario",
  ganchos: "combinaciones",
  uppercut: "combinaciones",
  "uno-dos": "diario",
  "tres-golpes": "combinaciones",
  bloqueo: "defensa-mov",
  slip: "defensa-mov",
  parry: "defensa-mov",
  roll: "defensa-mov",
  "sombra-rounds": "sombra-libre",
};
