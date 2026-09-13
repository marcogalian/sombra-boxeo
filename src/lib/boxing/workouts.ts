import type { Workout } from "./types";

export const WORKOUTS: Workout[] = [
  {
    id: "primer-dia",
    title: "Primer día",
    durationMin: 12,
    level: "inicio",
    focus: "Calentar, guardia y jab",
    image: "/videos/lessons/stance.jpg",
    video: "/videos/lessons/stance.mp4",
    equipment: ["Espacio libre", "Espejo si puedes"],
    afterLesson: "postura",
    blocks: [
      {
        kind: "prep",
        title: "Calentar",
        seconds: 180,
        notes: [
          "Marcha en el sitio o cuerda muy suave",
          "Círculos de hombros y cadera",
          "Estocadas lentas, muñecas, tobillos",
        ],
      },
      {
        kind: "drill",
        title: "Montar la guardia",
        seconds: 90,
        notes: [
          "Pie de delante: izquierdo si eres ortodoxo, derecho si eres zurdo",
          "Manos a las mejillas, mentón bajo",
          "Micro-salto sin mover las manos",
        ],
      },
      {
        kind: "drill",
        title: "Paso y arrastre",
        seconds: 90,
        notes: [
          "Adelante, atrás, izquierda, derecha",
          "El pie cercano a la dirección pisa primero",
          "No cruzar los pies",
        ],
      },
      {
        kind: "round",
        title: "Jab consciente",
        work: 120,
        rest: 40,
        rounds: 2,
        script: [
          "Solo jabs. Vuelta a la mejilla cada vez.",
          "La mano de atrás no se cae.",
          "Cada 4 jabs, un paso atrás y respiras.",
        ],
      },
      {
        kind: "prep",
        title: "Bajar vueltas",
        seconds: 90,
        notes: [
          "Anda. Brazos sueltos.",
          "Estira suave el pecho y los gemelos.",
          "Agua. No te sientes de golpe.",
        ],
      },
    ],
  },
  {
    id: "diario",
    title: "Diario de base",
    durationMin: 18,
    level: "base",
    focus: "Pies, 1-2 y guardia alta",
    image: "/videos/lessons/shadow.jpg",
    video: "/videos/lessons/shadow.mp4",
    equipment: ["Espacio libre"],
    afterLesson: "uno-dos",
    blocks: [
      {
        kind: "prep",
        title: "Calentar",
        seconds: 180,
        notes: ["2 min de micro-salto o cuerda", "1 min de movilidad de hombros y cadera"],
      },
      {
        kind: "drill",
        title: "Cuadrado de pies",
        seconds: 120,
        notes: [
          "Cuadrado: adelante, lado, atrás, lado",
          "Manos pegadas a la cara",
          "Pasos de un palmo",
        ],
      },
      {
        kind: "round",
        title: "Sombra 1-2",
        work: 180,
        rest: 60,
        rounds: 3,
        script: [
          "Minuto 1: jab y pies.",
          "Minuto 2: 1-2 entrando y saliendo.",
          "Minuto 3: 1-2 y un paso lateral después.",
        ],
      },
      {
        kind: "prep",
        title: "Cerrar",
        seconds: 90,
        notes: ["Anda un minuto", "Estira hombros, cadera y gemelos"],
      },
    ],
  },
  {
    id: "pies-jab",
    title: "Piernas y jab",
    durationMin: 18,
    level: "base",
    focus: "Desplazamiento + mano de delante",
    image: "/videos/lessons/jab.jpg",
    video: "/videos/lessons/jab.mp4",
    equipment: ["Espacio libre"],
    afterLesson: "jab",
    blocks: [
      {
        kind: "prep",
        title: "Calentar",
        seconds: 150,
        notes: ["Cuerda o marcha", "Cadera y tobillos"],
      },
      {
        kind: "drill",
        title: "Cruz en el suelo",
        seconds: 120,
        notes: [
          "5 pasos a cada dirección",
          "Recupera el ancho cada vez",
          "Cabeza quieta, ojos al frente",
        ],
      },
      {
        kind: "round",
        title: "Jab en movimiento",
        work: 150,
        rest: 50,
        rounds: 4,
        script: [
          "Jab al entrar, paso atrás.",
          "Jab lateral a tu izquierda.",
          "Doble jab (1-1) y sales.",
          "Si se cae la mano de atrás, paras y la pegas.",
        ],
      },
      {
        kind: "prep",
        title: "Cerrar",
        seconds: 60,
        notes: ["Anda y suelta brazos"],
      },
    ],
  },
  {
    id: "combinaciones",
    title: "Combinaciones",
    durationMin: 21,
    level: "intermedio",
    focus: "1-2, 1-2-3 y salida",
    image: "/videos/lessons/lead-hook.jpg",
    video: "/videos/lessons/lead-hook.mp4",
    equipment: ["Espacio libre", "Espejo"],
    afterLesson: "tres-golpes",
    blocks: [
      {
        kind: "prep",
        title: "Calentar",
        seconds: 180,
        notes: ["Cuerda suave", "Rotaciones de cadera", "10 jabs lentos"],
      },
      {
        kind: "drill",
        title: "1-2 a cámara lenta",
        seconds: 90,
        notes: [
          "Cada golpe en 2 tiempos",
          "Comprueba la vuelta a la cara",
          "Paso atrás al terminar",
        ],
      },
      {
        kind: "round",
        title: "Asaltos de combo",
        work: 180,
        rest: 60,
        rounds: 4,
        script: [
          "Asalto 1: solo 1-2.",
          "Asalto 2: 1-1-2.",
          "Asalto 3: 1-2-3 corto.",
          "Asalto 4: eliges, pero cada combo termina en guardia y un paso.",
        ],
      },
      {
        kind: "prep",
        title: "Cerrar",
        seconds: 90,
        notes: ["Anda", "Estira pectoral y dorsal"],
      },
    ],
  },
  {
    id: "defensa-mov",
    title: "Defensa y salir",
    durationMin: 18,
    level: "intermedio",
    focus: "Cubrir, escurrir, desviar, pies",
    image: "/videos/lessons/slip.jpg",
    video: "/videos/lessons/slip.mp4",
    equipment: ["Espacio libre"],
    afterLesson: "slip",
    blocks: [
      {
        kind: "prep",
        title: "Calentar",
        seconds: 150,
        notes: ["Bounce suave", "Cuello y cadera, sin tirones"],
      },
      {
        kind: "drill",
        title: "Metrónomo de slip",
        seconds: 80,
        notes: ["Izquierda, centro, derecha, centro", "Manos pegadas", "Centímetros, no palmos"],
      },
      {
        kind: "round",
        title: "Defiende y contesta",
        work: 150,
        rest: 50,
        rounds: 4,
        script: [
          "Imagina un jab cada 2 segundos.",
          "Elige: escurrir, desviar o paso atrás.",
          "Contesta con un 1 o un 1-2.",
          "Nunca contestes con las manos bajas.",
        ],
      },
      {
        kind: "drill",
        title: "Cuatro U",
        seconds: 60,
        notes: ["Pasar por debajo, lento", "Si mareas, paras", "Ojos abiertos"],
      },
      {
        kind: "prep",
        title: "Cerrar",
        seconds: 60,
        notes: ["Anda", "Respira por la nariz"],
      },
    ],
  },
  {
    id: "seis-rounds",
    title: "Seis rounds",
    durationMin: 28,
    level: "intermedio",
    focus: "Sombra continua, ritmo de gym",
    image: "/videos/lessons/shadow.jpg",
    video: "/videos/lessons/shadow.mp4",
    equipment: ["Espacio libre", "Agua cerca"],
    afterLesson: "sombra-rounds",
    blocks: [
      {
        kind: "prep",
        title: "Calentar",
        seconds: 180,
        notes: ["Cuerda o micro-salto", "10 1-2 lentos", "Guardia 20 segundos"],
      },
      {
        kind: "round",
        title: "Sombra",
        work: 180,
        rest: 60,
        rounds: 6,
        script: [
          "Asalto 1: pies y jab.",
          "Asalto 2: 1-2 entrar y salir.",
          "Asalto 3: laterales y 1-1-2.",
          "Asalto 4: escurrir + 1-2.",
          "Asalto 5: 1-2-3 y pivote al terminar.",
          "Asalto 6: libre, guardia innegociable. Si picas, vuelve al jab.",
        ],
      },
      {
        kind: "prep",
        title: "Cerrar",
        seconds: 120,
        notes: ["Anda dos minutos", "Estira suave", "Anota la sesión"],
      },
    ],
  },
  {
    id: "rapidez-tecnica",
    title: "Rapidez con técnica",
    durationMin: 12,
    level: "base",
    focus: "Pies ligeros, ráfagas y vuelta a guardia",
    image: "/videos/lessons/shadow.jpg",
    video: "/videos/lessons/shadow.mp4",
    equipment: ["Espacio libre"],
    afterLesson: "uno-dos",
    blocks: [
      {
        kind: "prep",
        title: "Activar",
        seconds: 60,
        notes: ["Marcha rápida y hombros sueltos", "No busques velocidad en frío"],
      },
      {
        kind: "drill",
        title: "Pies rápidos",
        seconds: 90,
        notes: [
          "Dos pasos cortos adelante y dos atrás",
          "Los pies no se cruzan",
          "La cabeza mantiene la misma altura",
        ],
      },
      { kind: "rest", title: "Soltar", seconds: 30 },
      {
        kind: "round",
        title: "Ráfagas limpias",
        work: 45,
        rest: 30,
        rounds: 4,
        script: [
          "Cinco segundos rápidos, cinco segundos suaves",
          "Solo jab o 1-2: primero limpio, luego rápido",
          "Cada mano vuelve a la mejilla",
        ],
      },
      { kind: "rest", title: "Respirar", seconds: 30 },
      {
        kind: "drill",
        title: "Ver y responder",
        seconds: 90,
        notes: [
          "Imagina una señal: slip, jab y salida",
          "Cambia de dirección cada tres acciones",
          "Los ojos siempre al frente",
        ],
      },
      {
        kind: "drill",
        title: "Final con control",
        seconds: 90,
        notes: ["Veinte segundos vivo, diez suave", "Si se cae la guardia, reduce la velocidad"],
      },
      {
        kind: "prep",
        title: "Cerrar",
        seconds: 60,
        notes: ["Anda, suelta brazos y respira por la nariz"],
      },
    ],
  },
  {
    id: "condicion",
    title: "Condición de boxeador",
    durationMin: 13,
    level: "base",
    focus: "Cuerda, piernas, hombros, core",
    image: "/videos/lessons/warmup.jpg",
    video: "/videos/lessons/warmup.mp4",
    equipment: ["Cuerda si tienes", "Si no, saltos en el sitio"],
    blocks: [
      {
        kind: "drill",
        title: "Cuerda o saltos",
        seconds: 180,
        notes: [
          "Ritmo de conversación",
          "Muñecas, no hombros",
          "Si fallas, sigues: no pares a maldecir",
        ],
      },
      {
        kind: "rest",
        title: "Respiro",
        seconds: 40,
      },
      {
        kind: "drill",
        title: "Sentadilla a guardia",
        seconds: 60,
        notes: [
          "Bajas a sentadilla, subes a guardia",
          "Manos a la cara al llegar arriba",
          "Rodillas alineadas con los pies",
        ],
      },
      {
        kind: "drill",
        title: "Estocadas alternas",
        seconds: 60,
        notes: ["Paso largo, rodilla de atrás baja", "Tronco alto"],
      },
      {
        kind: "rest",
        title: "Respiro",
        seconds: 40,
      },
      {
        kind: "drill",
        title: "Flexiones o plancha",
        seconds: 45,
        notes: ["Flexiones con codos cerca, o plancha si hace falta", "No dejes caer la cadera"],
      },
      {
        kind: "drill",
        title: "Guardia isométrica",
        seconds: 45,
        notes: [
          "Manos altas, hombros vivos",
          "Micro-salto",
          "Este es el que más transfiere al round",
        ],
      },
      {
        kind: "rest",
        title: "Respiro",
        seconds: 40,
      },
      {
        kind: "drill",
        title: "Cuerda final",
        seconds: 120,
        notes: ["Más ligero que al principio", "Respira"],
      },
      {
        kind: "drill",
        title: "Core",
        seconds: 60,
        notes: ["Plancha o dead bug lento", "El abdomen cierra, no el cuello"],
      },
      {
        kind: "prep",
        title: "Cerrar",
        seconds: 90,
        notes: ["Anda", "Estira psoas, pecho, gemelos"],
      },
    ],
  },
  {
    id: "sombra-libre",
    title: "Sombra libre",
    durationMin: 14,
    level: "base",
    focus: "Tres rounds a tu aire, con estructura",
    image: "/videos/lessons/shadow.jpg",
    video: "/videos/lessons/shadow.mp4",
    equipment: ["Espacio libre"],
    afterLesson: "uno-dos",
    blocks: [
      {
        kind: "prep",
        title: "Calentar corto",
        seconds: 90,
        notes: ["Bounce y círculos de brazos"],
      },
      {
        kind: "round",
        title: "Sombra",
        work: 180,
        rest: 60,
        rounds: 3,
        script: [
          "Si no sabes qué tirar: jab y paso.",
          "Termina cada combo en guardia.",
          "El último minuto, menos ego y más pies.",
        ],
      },
      {
        kind: "prep",
        title: "Cerrar",
        seconds: 60,
        notes: ["Anda y suelta"],
      },
    ],
  },
];

export const WORKOUT_BY_ID = Object.fromEntries(WORKOUTS.map((w) => [w.id, w])) as Record<
  string,
  Workout
>;

export function recommendedWorkoutId(completed: string[]) {
  const has = (id: string) => completed.includes(id);
  if (!has("jab")) return "primer-dia";
  if (!has("uno-dos")) return "pies-jab";
  if (!has("tres-golpes")) return "diario";
  if (!has("slip")) return "combinaciones";
  if (!has("sombra-rounds")) return "defensa-mov";
  return "sombra-libre";
}
