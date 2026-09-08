import type { Lesson, ModuleInfo } from "./types";

export const MODULES: ModuleInfo[] = [
  {
    id: "inicio",
    number: "00",
    title: "Antes de empezar",
    blurb: "Para qué sirve esto, cuánto espacio necesitas y cómo calentar.",
  },
  {
    id: "guardia",
    number: "01",
    title: "La guardia",
    blurb: "La postura desde la que sale cada paso y cada golpe.",
  },
  {
    id: "piernas",
    number: "02",
    title: "Las piernas",
    blurb: "Moverte sin cruzar los pies y sin perder el equilibrio.",
  },
  {
    id: "golpes",
    number: "03",
    title: "Los golpes",
    blurb: "Jab, recto, gancho y uppercut. Uno a uno, bien hechos.",
  },
  {
    id: "combos",
    number: "04",
    title: "Combinaciones",
    blurb: "Encadenar golpes sin bajar las manos ni quedarte plantado.",
  },
  {
    id: "defensa",
    number: "05",
    title: "Defensa",
    blurb: "Cubrir, desviar, escurrirte y salir. Sin rival delante.",
  },
  {
    id: "sombra",
    number: "06",
    title: "Sombra",
    blurb: "Entrenar rounds de tres minutos, que es como se trabaja el boxeo.",
  },
];

export const LESSONS: Lesson[] = [
  {
    id: "para-que",
    module: "inicio",
    order: 1,
    title: "Esto no es una pelea",
    kicker: "El marco",
    minutes: 4,
    level: "base",
    image: "/images/hero.jpg",
    diagram: "none",
    summary:
      "Vas a aprender a moverte, a golpear con orden y a defenderte. No a pelear con otra persona.",
    why: "El boxeo de gimnasio es un oficio de pies, guardia y repetición. Si empiezas queriendo 'ganar un intercambio', copias malos hábitos y te lesionas. Aquí el rival eres tú, el espejo y el reloj.",
    steps: [
      {
        title: "Qué sí vas a entrenar",
        body: "Postura, desplazamiento, los seis golpes básicos, cubrirse, escurrir la cabeza y rounds de sombra. El objetivo es coordinarte y estar cómodo en la guardia tres minutos seguidos.",
      },
      {
        title: "Qué no entra",
        body: "Sparring, clinch, pelear contra un saco que 'devuelve' o técnicas para dañar a alguien. Si algún día quieres combatir, eso se hace con entrenador, protecciones y consentimiento. No con una app.",
      },
      {
        title: "Cómo se progresa",
        body: "Una lección al día basta. Primero la lees, luego haces el ejercicio corto, y cuando tengas tres o cuatro lecciones, entras a un entreno de la pestaña Ring. La prisa estropea la guardia.",
      },
    ],
    cues: [
      "Si te falta el aire, paras. El ego no entrena.",
      "Todo se hace con las manos altas, incluso los descansos entre golpes.",
      "Duele una articulación: paras. Arde el músculo: puedes seguir un poco.",
      "Los vídeos de entrenador están en español. Si un clip y los pasos no coinciden, mandan los pasos y el dibujo.",
    ],
    mistakes: [
      {
        bad: "Saltar lecciones para 'tirar combos'.",
        fix: "Sin pies y sin guardia, el combo es teatro. Sigue el orden.",
      },
      {
        bad: "Entrenar contra un compañero 'un poquito'.",
        fix: "Aquí no hay contacto. Sombra, cuerda, suelo. Nada de manos a otra persona.",
      },
    ],
    drill: {
      title: "Un minuto quieto",
      body: "Ponte en guardia delante de un espejo. Un minuto sin golpear. Solo respirar por la nariz, mentón bajo, manos en las mejillas. Si te tiemblan los hombros, esa es tu primera verdad: hay que construir esa posición.",
    },
  },
  {
    id: "espacio",
    module: "inicio",
    order: 2,
    title: "Espacio, suelo y calentar",
    kicker: "Casa o gym",
    minutes: 8,
    level: "base",
    image: "/images/warmup.jpg",
    video: "/videos/jumprope.mp4",
    diagram: "none",
    summary:
      "Dos metros libres a cada lado, suelo que no resbale, y diez minutos de calor antes de cualquier golpe.",
    why: "La mayoría de los sustos de un principiante no vienen de un puñetazo: vienen de girar sobre un calcetín, de pegar al marco de una puerta o de lanzar el hombro en frío.",
    steps: [
      {
        title: "El rectángulo",
        body: "Aparta sillas. Mide con los brazos en cruz y da un paso extra en cada dirección. Si al girar 360 grados no tocas nada, vale. Zapatillas de deporte o pies descalzos en suelo no resbaladizo. Nunca calcetines en baldosa.",
      },
      {
        title: "Calentar de verdad",
        body: "3 minutos de saltos suaves o marcha en el sitio. 10 círculos de hombros adelante y atrás. 10 círculos de cadera. 8 estocadas lentas. Muñecas y tobillos. Luego 20 segundos de guardia quieta.",
      },
      {
        title: "Manos",
        body: "Si solo haces sombra, las vendas no son obligatorias, pero acostumbran la muñeca a quedar recta. Si algún día pegas a un saco, vendas sí o sí. No se pega a pared, colchón ni puerta.",
      },
    ],
    cues: [
      "El suelo manda: si resbala, no hay sesión.",
      "Calientas hasta notar calor, no hasta sudar a mares.",
      "El espejo es el mejor saco del principiante.",
    ],
    mistakes: [
      {
        bad: "Empezar con ganchos en frío.",
        fix: "Hombro y codo se cargan en rotación. Primero calor, luego jab, luego el resto.",
      },
      {
        bad: "Entrenar pegado al sofá.",
        fix: "Un gancho largo te lo come. Deja un margen de un brazo más un paso.",
      },
    ],
    drill: {
      title: "Rutina de calor de 6 minutos",
      body: "2 min marcha o cuerda suave. 1 min círculos de brazos. 1 min cadera y estocadas. 1 min muñecas, tobillos, cuello suave. 1 min guardia con respiración. Luego ya puedes entrar a una lección técnica.",
    },
  },
  {
    id: "postura",
    module: "guardia",
    order: 3,
    title: "La postura ortodoxa",
    kicker: "Guardia",
    minutes: 8,
    level: "base",
    image: "/images/stance.jpg",
    video: "/videos/stance.mp4",
    youtubeId: "wmJ3lgtlNnw",
    youtubeTitle: "La guardia, paso a paso — Alfonso Durán, campeón de España",
    diagram: "stance-feet",
    summary:
      "Pie de delante adelantado (izquierdo en ortodoxa, derecho en zurda), el de atrás abierto unos 45°, pies al ancho de hombros, rodillas vivas.",
    why: "Toda la escuela se construye sobre dos huellas. Si las huellas están mal, el jab se cae, el gancho te tuerce la rodilla y la defensa te deja el mentón al aire.",
    steps: [
      {
        title: "Las huellas",
        body: "Imagina un raíl estrecho, no dos pies en la misma línea ni los dos mirando al frente como un portero. El pie de atrás se abre unos 45 grados. Entre los talones, más o menos el ancho de tus hombros. El de delante apunta casi al frente, un poco cerrado.",
      },
      {
        title: "Las rodillas",
        body: "Flexión suave, como si fueras a sentarte un centímetro. El peso vive en la parte delantera de los pies, no en los talones. El talón de atrás puede estar ligeramente despegado, listo para empujar.",
      },
      {
        title: "El torso",
        body: "El hombro adelantado (izquierdo en ortodoxa) mira más al frente que el pecho abierto. No te pongas de lado como un esgrimista ni de frente como un halterófilo. Un tercio de lado. Cadera sobre los pies, no adelantada.",
      },
    ],
    cues: [
      "Raíl, no cuerda floja: si los pies están en una sola línea, te empujan y caes.",
      "El espejo tiene que verte el hombro de delante y un poco el de atrás.",
      "Zurda: pie derecho delante, izquierdo atrás. Actívalo en Progreso.",
    ],
    mistakes: [
      {
        bad: "Pies demasiado juntos.",
        fix: "Abre hasta el ancho de hombros. Tienes que poder empujar sin tropezarte.",
      },
      {
        bad: "Pie de atrás paralelo al de delante.",
        fix: "Ábrelo. Esa rotación es la que va a meter el recto y el gancho.",
      },
      {
        bad: "Rodillas bloqueadas.",
        fix: "Sin flexión no hay resorte. Ni para golpear ni para escurrirte.",
      },
    ],
    drill: {
      title: "Congelar la foto",
      body: "Colócate. Cuenta 20 segundos. Mira: ¿se ven los dos pies? ¿el de atrás está abierto? ¿las rodillas blandas? Rompe, anda, vuelve a montar. 8 repeticiones. Es aburrido y es el trabajo.",
    },
  },
  {
    id: "manos",
    module: "guardia",
    order: 4,
    title: "Manos, codos y mentón",
    kicker: "Guardia",
    minutes: 7,
    level: "base",
    image: "/images/block.jpg",
    video: "/videos/block.mp4",
    diagram: "guard-labels",
    summary:
      "Puños a la altura de los pómulos, codos pegados a las costillas, mentón escondido, ojos arriba.",
    why: "La guardia no es un adorno: es el techo y las paredes de tu casa. Cada vez que baja una mano, se abre una ventana. El principiante baja la mano de atrás al tirar el jab. Eso se corrige ahora.",
    steps: [
      {
        title: "Las manos",
        body: "Los nudillos de delante rozan el pómulo izquierdo. Los de detrás, la mejilla derecha o el borde de la mandíbula. No las dejes a la altura del pecho 'para estar relajado'. Relajado es el hombro, no la altura.",
      },
      {
        title: "Los codos",
        body: "Pegados al costado, como si sujetaras dos folios bajo los sobacos. Protegen el hígado y las costillas. Si se abren, el gancho al cuerpo entra solo —aunque aquí no te lo vayan a tirar, el hábito se instala igual.",
      },
      {
        title: "La cabeza",
        body: "Mentón bajo, como si sujetaras una pelota de tenis contra el pecho con la mandíbula. Ojos al frente, no al suelo. Los hombros pueden subir un poco hacia las orejas en el momento del golpe; en guardia, no te encojas del todo.",
      },
    ],
    cues: [
      "La mano que no golpea no pasea.",
      "Si ves tu propia muñeca en el espejo a la altura del ombligo, está baja.",
      "Cierra la boca. Lengua atrás. Un golpe imaginario no debe pillarte con la mandíbula suelta.",
    ],
    mistakes: [
      {
        bad: "Guardia de karate, palmas abiertas lejos de la cara.",
        fix: "Puños cerrados sin apretar, cerca de la carne. El aire no para nada.",
      },
      {
        bad: "Mirar los pies para 'controlarlos'.",
        fix: "Los pies se sienten. Los ojos se quedan al frente, a la altura de un mentón imaginario.",
      },
    ],
    drill: {
      title: "El folio",
      body: "Imagina un folio bajo cada brazo. 40 segundos de guardia. Si se 'cae' un folio, el codo se abrió. Añade un ligero bounce de rodillas sin mover las manos. 3 series.",
    },
  },
  {
    id: "equilibrio",
    module: "guardia",
    order: 5,
    title: "Peso y equilibrio",
    kicker: "Guardia",
    minutes: 6,
    level: "base",
    image: "/images/stance.jpg",
    video: "/videos/stance.mp4",
    diagram: "stance-feet",
    summary:
      "50/50 o un pelo más atrás. Nunca todo el peso en un pie. El centro vive entre las dos huellas.",
    why: "El jab necesita un suelo del que empujar. El retroceso necesita el pie de atrás ocupado. Si te cuelgas del pie de delante, cualquier paso atrás es un tropiezo.",
    steps: [
      {
        title: "Reparto",
        body: "Nota la planta de los dos pies. 50 y 50. Algunos entrenadores ponen un 40 delante y 60 detrás para tener resorte. Los dos valen. Lo que no vale es 80/20.",
      },
      {
        title: "La prueba del empujón",
        body: "Sin que nadie te empuje: inclínate un centímetro adelante y vuelve, un centímetro atrás y vuelve. El cuerpo se corrige desde los tobillos, no desde la cintura como una caña.",
      },
      {
        title: "El bounce",
        body: "Un micro-salto que casi no despega. Rodillas vivas, talones ligeros. No es baile ni comba. Es estar listo para mover la primera huella.",
      },
    ],
    cues: [
      "Si el espejo te muestra el talón de delante clavado, estás pesado.",
      "El ombligo cae entre los dos pies, no sobre el de delante.",
      "Respiración por la nariz en guardia; la boca se abre al golpear, un soplo corto.",
    ],
    mistakes: [
      {
        bad: "Balancearte como un boxeador de película.",
        fix: "El bounce es pequeño. Si tu cabeza sube y baja un palmo, eres un blanco fácil y te cansas.",
      },
      {
        bad: "Bloquear las rodillas para 'estar firme'.",
        fix: "Firme es el abdomen. Las rodillas siguen blandas.",
      },
    ],
    drill: {
      title: "Treinta bounces",
      body: "Guardia. 30 micro-bounces sin que las manos se muevan. Para 5 segundos. Otros 30. Si te vas hacia delante, acorta el bounce y siente el pie de atrás.",
    },
  },
  {
    id: "paso-arrastre",
    module: "piernas",
    order: 6,
    title: "Paso y arrastre",
    kicker: "Pies",
    minutes: 8,
    level: "base",
    image: "/images/feet.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 403,
    youtubeTitle: "Juego de piernas básico — Tony Jeffries (medalla olímpica, en español)",
    diagram: "step-drag",
    summary:
      "El pie más cercano a donde vas pisa primero. El otro arrastra y recupera la distancia. Nunca se cruzan.",
    why: "Cruzar los pies es el error que tumba a los principiantes. El paso-arrastre mantiene el raíl de la guardia mientras te desplazas. Es feo, es básico, y es el 80% de tu movimiento.",
    steps: [
      {
        title: "La regla",
        body: "¿Vas adelante? Pasa el pie de delante, luego arrastra el de atrás hasta recuperar el ancho original. ¿Vas atrás? Primero el de atrás, luego recoge el de delante. ¿A tu izquierda? Primero el izquierdo. Siempre abre antes de cerrar.",
      },
      {
        title: "El tamaño",
        body: "Pasos de un palmo, no zancadas. Si al llegar los pies se juntan, el paso fue largo o el arrastre no llegó. La distancia entre talones debe parecerse al principio y al final.",
      },
      {
        title: "Arriba, nada cambia",
        body: "Mientras los pies trabajan, las manos no bajan y el mentón no se levanta. El movimiento nace de las rodillas, no de inclinarte con el pecho.",
      },
    ],
    cues: [
      "Abre, luego cierra. Nunca al revés.",
      "Si oyes un arrastre ruidoso, estás pesado de talón. Aligera.",
      "Mira un punto fijo al frente: la cabeza no debe bambolear.",
    ],
    mistakes: [
      {
        bad: "Caminar normal, un pie delante del otro.",
        fix: "Eso es pasear. En boxeo los pies no se adelantan cruzando el raíl.",
      },
      {
        bad: "Saltar con los dos pies a la vez para desplazarte.",
        fix: "El bounce es para estar vivo. El desplazamiento es un pie y después el otro.",
      },
    ],
    drill: {
      title: "La cruz en el suelo",
      body: "Marca una cruz imaginaria. 5 pasos adelante, 5 atrás, 5 a la izquierda, 5 a la derecha. Manos pegadas a la cara. 3 vueltas. Si en algún momento los pies se cruzan, paras, montas la guardia y sigues.",
    },
  },
  {
    id: "adelante-atras",
    module: "piernas",
    order: 7,
    title: "Entrar y salir",
    kicker: "Pies",
    minutes: 7,
    level: "base",
    image: "/images/shadow.jpg",
    youtubeId: "4EtMgTJIbV4",
    youtubeTitle: "Golpes con desplazamientos — Alfonso Durán",
    diagram: "step-drag",
    summary:
      "Se entra con el pie de delante. Se sale con el de atrás. La distancia se toma y se devuelve, no se habita.",
    why: "El principiante se queda dentro después de golpear. En sombra también se nota: das dos pasos adelante y te quedas ahí, 'en el saco'. El oficio es entrar, tocar y volver a tu sitio.",
    steps: [
      {
        title: "Entrar",
        body: "Paso corto del pie adelantado. El de atrás sigue. El torso no se vuelca. Piensa que tu ombligo viaja entre los pies, no que tu cabeza caza algo delante.",
      },
      {
        title: "Salir",
        body: "El pie de atrás pisa atrás primero. El de delante se recoge. Sales más fácil de lo que entras: el cuerpo ya quiere volver. Aprovéchalo. Dos pasos atrás dejan más aire que uno largo.",
      },
      {
        title: "El ritmo",
        body: "Entra en un tiempo. Quédate medio tiempo. Sal en un tiempo. Luego lo unirás al jab. Ahora, solo pies.",
      },
    ],
    cues: [
      "Entras para trabajar, no para quedarte a vivir.",
      "Si al entrar se junta el pie de atrás, no empujaste: te caíste hacia delante.",
      "Sale en línea. No des un paso diagonal todavía.",
    ],
    mistakes: [
      {
        bad: "Inclinar el pecho para 'llegar'.",
        fix: "Si no llegas, da un paso. El pecho no es un telescopio.",
      },
      {
        bad: "Saltar hacia atrás con los dos pies.",
        fix: "Sirve a veces, más adelante. Ahora: pie de atrás, luego el de delante.",
      },
    ],
    drill: {
      title: "Tres y tres",
      body: "3 entradas cortas + 3 salidas. Respira. Repite 8 series. Las manos no se usan. Si te mareas, es que estás conteniendo el aire: suéltalo al moverte.",
    },
  },
  {
    id: "laterales",
    module: "piernas",
    order: 8,
    title: "Pasos laterales",
    kicker: "Pies",
    minutes: 7,
    level: "base",
    image: "/images/feet.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 403,
    youtubeTitle: "Pasos laterales dentro del juego de piernas — Tony Jeffries (en español)",
    diagram: "lateral",
    summary:
      "El boxeo no se vive en un pasillo. Sales del eje con el pie del lado hacia donde vas.",
    why: "Quedarte en la línea central es cómodo y predecible. Un paso a tu izquierda o derecha te saca de esa línea. Aunque no haya nadie delante, el hábito de no ser un poste se entrena ahora.",
    steps: [
      {
        title: "Hacia tu izquierda (ortodoxa)",
        body: "El pie izquierdo pisa a la izquierda. El derecho arrastra y recupera el ancho. El torso no se gira todavía: te desplazas de lado, como sobre raíles paralelos.",
      },
      {
        title: "Hacia tu derecha",
        body: "Primero el derecho, luego el izquierdo. Cuesta más porque el pie de atrás tiene que abrir. Pasos más cortos. No dejes que el izquierdo cruce por delante del derecho.",
      },
      {
        title: "La cabeza",
        body: "Viaja con el cuerpo. No inclines el cuello hacia el lado del paso. El mentón sigue bajo.",
      },
    ],
    cues: [
      "Lado izquierdo: izquierdo primero. Lado derecho: derecho primero.",
      "El ancho de la guardia se conserva. Si se cierra, el siguiente golpe te desequilibra.",
      "Cuenta en voz baja: 'abre, cierra'.",
    ],
    mistakes: [
      {
        bad: "Girar el cuerpo 90 grados y acabar de lado total.",
        fix: "Eso es un pivote, viene después. El lateral mantiene la misma orientación.",
      },
      {
        bad: "Arrastrar los dos pies a la vez como un esquí.",
        fix: "Un pie, el otro. Siempre hay un apoyo sólido.",
      },
    ],
    drill: {
      title: "Cuadrado",
      body: "Dibuja un cuadrado de dos pasos de lado. Recórrelo en el sentido de las agujas y al revés. 4 vueltas cada sentido. Guardia intacta. Si te mareas, paras en una esquina, respiras, sigues.",
    },
  },
  {
    id: "pivote",
    module: "piernas",
    order: 9,
    title: "El pivote",
    kicker: "Pies",
    minutes: 8,
    level: "intermedio",
    image: "/images/shadow.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 2458,
    youtubeTitle: "El pivote — Tony Jeffries (en español)",
    diagram: "pivot",
    summary:
      "Giras sobre el pie de delante. El de atrás dibuja un arco. Cambia el ángulo sin perder la guardia.",
    why: "El pivote es el primer movimiento 'de boxeador' de verdad. No te aleja: te pone a un lado. En sombra, te enseña a no trabajar siempre de frente al mismo punto de la habitación.",
    steps: [
      {
        title: "El eje",
        body: "El pie adelantado es el clavo. No se levanta. La bola del pie gira. Las rodillas siguen flexionadas: si las bloqueas, la rodilla de delante protesta.",
      },
      {
        title: "El arco",
        body: "Empuja con el pie de atrás y déjalo recorrer un cuarto de círculo, 45 a 90 grados. El torso gira con la cadera, no con los hombros sueltos. Las manos giran con el cuerpo, pegadas a la cara.",
      },
      {
        title: "El final",
        body: "Al terminar, vuelves a tener el mismo raíl: pie de delante, pie de atrás abierto, ancho de hombros. Si acabas con los pies en paralelo, el arco fue vago.",
      },
    ],
    cues: [
      "El clavo no salta.",
      "Gira la cadera y los pies; los hombros van de pasajeros.",
      "Empieza en 45 grados. Los 90 se ganan después.",
    ],
    mistakes: [
      {
        bad: "Levantar el pie de delante y recolocar los dos.",
        fix: "Eso es un paso, no un pivote. El de delante se queda.",
      },
      {
        bad: "Girar solo de cintura con los pies clavados.",
        fix: "La rodilla de delante lo paga. El pie de atrás tiene que viajar.",
      },
    ],
    drill: {
      title: "La lámpara",
      body: "Elige un punto en la habitación (lámpara, rincón). Pivota 45 grados a tu izquierda, vuelve, 45 a la derecha, vuelve. 10 por lado. Luego, después de cada pivote, quédate 2 segundos y comprueba la guardia.",
    },
  },
  {
    id: "jab",
    module: "golpes",
    order: 10,
    title: "Jab — el 1",
    kicker: "Golpes",
    minutes: 10,
    level: "base",
    image: "/images/jab.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 561,
    youtubeTitle: "El jab, dentro de los golpes — Tony Jeffries (en español)",
    diagram: "jab-path",
    summary:
      "El golpe de delante. Rápido, recto, se va y se vuelve. Mide, molesta y abre el resto.",
    why: "Si el boxeo tuviera un pan de cada día, sería el jab. No busca ser el más fuerte. Busca llegar primero, mantener distancia y no dejar que te acomodes. Un jab flojo y bien vuelto vale más que un cruzado bonito.",
    steps: [
      {
        title: "La ida",
        body: "Desde la mejilla, el puño de delante viaja en línea recta a la altura de tu propia nariz. El codo no se abre. A mitad de camino el puño rota: al llegar, los nudillos miran al techo y la palma al suelo. Golpeas con los dos nudillos grandes (índice y corazón), muñeca recta como una tabla. El hombro de delante sube un poco y cubre el mentón.",
      },
      {
        title: "El pie",
        body: "Un pasito del pie de delante, del tamaño de un sobre. El de atrás se queda vivo. No hace falta clavar un clavo en el suelo: el jab también se tira sin paso, solo con un toque de cadera.",
      },
      {
        title: "La vuelta",
        body: "El puño vuelve más rápido de lo que salió, por el mismo camino, a la mejilla. La mano de atrás no se ha movido. Si al terminar el jab tu mano derecha está en el pecho, el jab ha fallado aunque haya 'llegado'.",
      },
    ],
    cues: [
      "Se dispara y se recoge, no se empuja.",
      "El hombro de delante es un visor: sube y cubre.",
      "Exhala un soplo corto al extender. No aguantes el aire.",
    ],
    mistakes: [
      {
        bad: "Dejar el jab extendido posando.",
        fix: "El espejo no se inmuta. Vuelve ya.",
      },
      {
        bad: "Bajar la mano de atrás.",
        fix: "Pégala a la mejilla con cinta imaginaria. El jab no pide esa mano.",
      },
      {
        bad: "Tirarlo desde la cadera, como un uppercut horizontal.",
        fix: "Sale de la cara, no del ombligo. Camino recto.",
      },
      {
        bad: "Muñeca quebrada o golpear con el meñique.",
        fix: "Muñeca alineada con el antebrazo. Los dos nudillos de índice y corazón miran al objetivo.",
      },
    ],
    drill: {
      title: "Diez jabs limpios",
      body: "10 jabs lentos, 2 segundos entre cada uno, comprobando la vuelta. 10 jabs a ritmo de conversación. 10 jabs con el pasito de entrada y salida. Descansa 30 segundos entre bloques. 2 vueltas.",
    },
  },
  {
    id: "cross",
    module: "golpes",
    order: 11,
    title: "Recto — el 2",
    kicker: "Golpes",
    minutes: 10,
    level: "base",
    image: "/images/cross.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 561,
    youtubeTitle: "Los golpes: jab, recto, gancho y uppercut — Tony Jeffries (en español)",
    diagram: "cross-path",
    summary:
      "El de atrás. Sale de la rotación de cadera y del pie trasero, no del brazo.",
    why: "El recto es el primer golpe que 'pesa'. Si lo tiras con el brazo, se carga el hombro y se abre el costado. Si lo tiras con el suelo —pie, cadera, hombro, puño—, llega más lejos y vuelves más entero.",
    steps: [
      {
        title: "El suelo",
        body: "El talón de atrás se levanta y el pie pivota hacia dentro, como si apagaras una colilla. Esa rotación empuja la cadera de atrás hacia delante.",
      },
      {
        title: "La cadena",
        body: "Cadera, tronco, hombro de atrás, brazo. El puño viaja recto, cerrado, a la altura del mentón imaginario. Muñeca recta, mismos dos nudillos que el jab. El hombro de atrás cubre tu propio mentón al final. El brazo no se hiperextiende: hay un milímetro de codo vivo.",
      },
      {
        title: "La otra mano",
        body: "La izquierda se queda en la mejilla o, como mucho, se pega un poco más a la cara. No cae al muslo 'para dar impulso'. El impulso está en la cadera.",
      },
    ],
    cues: [
      "Colilla, cadera, puño.",
      "El pecho no se vuelca sobre el pie de delante.",
      "Vuelves a la guardia como si el puño llevara goma.",
    ],
    mistakes: [
      {
        bad: "Armar el golpe atrás, como un lanzador de béisbol.",
        fix: "No se carga atrás. Sale de la mejilla. El 'cargar' te retrasa y te destapa.",
      },
      {
        bad: "Cruzar el puño en diagonal hacia el hombro contrario.",
        fix: "Recto significa recto. Imagina un tubo desde tu hombro de atrás hasta el objetivo.",
      },
      {
        bad: "Clavar el talón de atrás.",
        fix: "Sin pivote no hay cadera. El talón se levanta.",
      },
    ],
    drill: {
      title: "Recto a cámara lenta",
      body: "8 rectos en 4 tiempos: pie, cadera, puño, vuelta. Luego 8 a velocidad media. Termina con 8 jabs + 1 recto (ya el 1-2, todavía grosero). 2 series. El hombro de atrás no debe picar: si pica, estás empujando con el brazo.",
    },
  },
  {
    id: "ganchos",
    module: "golpes",
    order: 12,
    title: "Ganchos — el 3 y el 4",
    kicker: "Golpes",
    minutes: 10,
    level: "intermedio",
    image: "/images/hook.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 561,
    youtubeTitle: "Gancho dentro de la clase de golpes — Tony Jeffries (en español)",
    diagram: "hook-path",
    summary:
      "Golpe corto, codo a 90 grados, gira el cuerpo. El 3 es el de delante; el 4, el de atrás.",
    why: "El gancho no es un abrazo ni un molino. Es un giro de cadera con el brazo hecho escuadra. Mal tirado, duele el codo y el hombro. Bien tirado, es compacto y vuelve a casa solo.",
    steps: [
      {
        title: "La escuadra",
        body: "Codo a noventa grados, puño a la altura de tu propia mandíbula. El antebrazo queda paralelo al suelo. El puño puede mirarte a ti (palma hacia ti) o mirar al suelo: las dos escuelas valen. Elige una y no la mezcles en el mismo asalto.",
      },
      {
        title: "El 3 (gancho de delante)",
        body: "El pie de delante pivota, la cadera gira hacia dentro, el puño recorre un arco corto. No se arma atrás de la oreja. El otro puño se queda en la mejilla. Al terminar, el codo vuelve al costado.",
      },
      {
        title: "El 4 (gancho de atrás)",
        body: "Misma escuadra, más cadera de atrás. Es más fácil pasarse de largo y dar un molino. Acórtalo. Si en el espejo ves el brazo casi recto, ya no es un gancho.",
      },
    ],
    cues: [
      "El gancho cabe en un ascensor. Si necesita el salón, está largo.",
      "Pivota el pie del mismo lado que el gancho.",
      "El codo no se eleva por encima del puño. Si el codo mira al techo, ya no es un gancho.",
    ],
    mistakes: [
      {
        bad: "Barrido amplio con el brazo suelto.",
        fix: "Cierra el codo. El giro lo da el tronco.",
      },
      {
        bad: "Inclinar el tronco hacia el lado contrario para 'cargar'.",
        fix: "Te destapas el hígado y te desequilibras. Gira sobre el eje.",
      },
    ],
    drill: {
      title: "Tres ganchos cortos",
      body: "Frente al espejo, 10 ganchos de delante lentos. 10 de atrás lentos. Luego 1-2-3 muy despacio, parando a comprobar que el 3 es corto. 3 series. Si el hombro queja, paras: acorta el arco.",
    },
  },
  {
    id: "uppercut",
    module: "golpes",
    order: 13,
    title: "Uppercut — el 5 y el 6",
    kicker: "Golpes",
    minutes: 8,
    level: "intermedio",
    image: "/images/uppercut.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 561,
    youtubeTitle: "Uppercut dentro de la clase de golpes — Tony Jeffries (en español)",
    diagram: "uppercut-path",
    summary:
      "De abajo a arriba, corto, con las piernas. No es un gancho vertical ni un izado de maleta.",
    why: "El uppercut se reserva para cerca. En sombra, sirve para aprender a doblar rodillas y a no descubrirte al subir. Es el golpe que más se caricaturiza: si lo tiras desde las rodillas hasta el techo, te quedas mirando las nubes.",
    steps: [
      {
        title: "Bajar para subir",
        body: "Las rodillas flexionan un poco más. El puño parte de la altura del plexo o un pelo más abajo, no desde la rodilla. La palma se mira a ti. El trayecto es un raíl vertical, pegado a tu propio cuerpo.",
      },
      {
        title: "El 5 y el 6",
        body: "El 5 es el de delante; el 6, el de atrás. El de atrás lleva más cadera. El hombro del golpe cubre; el otro puño se queda en la mejilla. Al llegar a la altura de tu mentón imaginario, ya está. No sigas hacia el techo.",
      },
      {
        title: "La vuelta",
        body: "El puño cae otra vez a la guardia, no se queda arriba. Las rodillas vuelven a la flexión de siempre.",
      },
    ],
    cues: [
      "Corto como un tirón de cremallera, no como sacar agua de un pozo.",
      "El codo no se abre hacia fuera.",
      "Ojos al frente. El mentón no viaja con el puño.",
    ],
    mistakes: [
      {
        bad: "Bajar el puño hasta la rodilla para 'coger impulso'.",
        fix: "Ese viaje te destapa y te retrasa. Parte de cerca del cuerpo.",
      },
      {
        bad: "Mirar al suelo al bajar las rodillas.",
        fix: "Doblas las piernas, no la nuca.",
      },
    ],
    drill: {
      title: "Cinco cortos",
      body: "10 uppercuts de delante a un ritmo de uno por segundo, parando la mano a la altura de tu mentón. 10 de atrás. Luego 1-2-5 muy lento. 2 series. El techo no es el objetivo.",
    },
  },
  {
    id: "uno-dos",
    module: "combos",
    order: 14,
    title: "El 1-2",
    kicker: "Combinaciones",
    minutes: 8,
    level: "base",
    image: "/images/shadow.jpg",
    youtubeId: "4EtMgTJIbV4",
    youtubeTitle: "Jab y recto con desplazamiento — Alfonso Durán",
    diagram: "combo-12",
    summary:
      "Jab y recto seguidos. El clásico. El 1 abre, el 2 llega. Las manos vuelven entre medio.",
    why: "Casi todas las combinaciones del boxeo se apoyan en el 1-2. Si este está sucio —manos bajas, pies clavados, aire contenido— el resto de la escuela se ensucia con él.",
    steps: [
      {
        title: "El 1",
        body: "Jab completo, con su vuelta. No dejes el izquierdo tirado para que 'espere' al derecho. Vuelve a la mejilla, aunque sea un toque, y el 2 sale.",
      },
      {
        title: "El 2",
        body: "El recto aprovecha el hueco. Cadera de atrás, talón que pivota. Al terminar, las dos manos están en la cara. Eso es no negociable.",
      },
      {
        title: "Los pies",
        body: "Un pasito con el jab. El recto rota. Un pasito atrás al terminar. Entrar-tocar-salir, ahora con dos golpes.",
      },
    ],
    cues: [
      "Ta-tá. El segundo un pelo más pesado, no más lento.",
      "Entre el 1 y el 2 no hay vacaciones para la mano derecha.",
      "Si te quedas largo después del 2, da el paso atrás. Siempre.",
    ],
    mistakes: [
      {
        bad: "Dos brazos a la vez, como un abrazo.",
        fix: "Es una secuencia, no un acordeón. Uno, después el otro.",
      },
      {
        bad: "El 2 se convierte en un empujón con el pecho.",
        fix: "Acorta. Gira. Vuelve.",
      },
    ],
    drill: {
      title: "Diez 1-2 con salida",
      body: "10 combinaciones 1-2. Después de cada una, un paso atrás y dos segundos de guardia. Si en esos dos segundos alguna mano está baja, esa repetición no cuenta. 3 series de 10.",
    },
  },
  {
    id: "tres-golpes",
    module: "combos",
    order: 15,
    title: "El 1-2-3 y el 1-1-2",
    kicker: "Combinaciones",
    minutes: 9,
    level: "intermedio",
    image: "/images/hook.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 1576,
    youtubeTitle: "Combinaciones — Tony Jeffries (en español)",
    diagram: "combo-123",
    summary:
      "Tres golpes sin perder el raíl. El 3 es un gancho corto, no un adorno al final.",
    why: "El tercer golpe es donde el principiante se abre. Se enamora del combo y olvida la vuelta. Aquí se enseña a terminar cerrado.",
    steps: [
      {
        title: "1-2-3",
        body: "Jab, recto, gancho de delante. Después del 2, la cadera ya está girada: el 3 aprovecha el retorno de esa cadera. Corto. Las tres vueltas a la cara, luego un paso lateral o atrás.",
      },
      {
        title: "1-1-2",
        body: "Doble jab y recto. El primer jab mide, el segundo insiste o entra, el recto llega. Muy útil porque no te obliga a armar el gancho todavía. Los pies pueden dar dos pasitos cortos con los jabs.",
      },
      {
        title: "Respirar el combo",
        body: "Soplo en cada golpe. Tres golpes, tres soplos. Si te pones morado, estás conteniendo. El combo se acaba cuando se acaba el aire, no cuando se acaba la ocurrencia.",
      },
    ],
    cues: [
      "El 3 cabe en un cajón de mesilla.",
      "Terminas donde empezaste: dos manos, dos pies, mentón bajo.",
      "Si el 1-2-3 te marea, vuelve al 1-1-2.",
    ],
    mistakes: [
      {
        bad: "El 3 se lanza con el cuerpo caído hacia un lado.",
        fix: "El eje se mantiene. El gancho gira alrededor, no te tira al suelo.",
      },
      {
        bad: "Acelerar el tercer golpe hasta que salga sucio.",
        fix: "Misma velocidad en los tres, un poco más de peso en el último.",
      },
    ],
    drill: {
      title: "Bloques de tres",
      body: "1 minuto solo 1-1-2. 20 segundos quieto. 1 minuto 1-2-3. 20 segundos. 1 minuto mezclando, eligiendo uno u otro cada vez. Manos a la cara entre combos. 2 vueltas.",
    },
  },
  {
    id: "bloqueo",
    module: "defensa",
    order: 16,
    title: "Cubrir y bloquear",
    kicker: "Defensa",
    minutes: 8,
    level: "base",
    image: "/images/block.jpg",
    video: "/videos/block.mp4",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 1976,
    youtubeTitle: "Defensas: cubrir y bloquear — Tony Jeffries (en español)",
    diagram: "block-cover",
    summary:
      "Los antebrazos y los puños son el techo. No se ve, no se espera con la cara.",
    why: "Antes de escurrirte como un profesional, aprendes a no dejarte la cabeza en el aire. Cubrir no es esconderse para siempre: es un paraguas de un segundo mientras sales o contestas en sombra.",
    steps: [
      {
        title: "Alta",
        body: "Los dos puños suben a las sienes, los antebrazos cierran el frente, los codos se pegan. El mentón baja del todo. Los ojos siguen abiertos, por encima de los puños, no cerrados contra el suelo.",
      },
      {
        title: "Al cuerpo",
        body: "Los codos se pegan más, los puños bajan un palmo a la altura de las mejillas todavía, no al ombligo. Cubrirse el cuerpo no significa descubrir la cabeza.",
      },
      {
        title: "Tiempo",
        body: "Cuentas 'uno' cubierto y vuelves a la guardia viva. No te quedas en caparazón. En sombra, imagina un 2 que llega, cubres, y sales un paso.",
      },
    ],
    cues: [
      "Los ojos no se cierran.",
      "Los codos valen más que los bíceps.",
      "Cubrir es un instante, no una casa.",
    ],
    mistakes: [
      {
        bad: "Cubrirse y quedarse plantado tres segundos.",
        fix: "Cubres y te mueves. El paraguas camina.",
      },
      {
        bad: "Abrir un hueco entre los puños para 'ver mejor'.",
        fix: "Se ve por encima, no por el medio.",
      },
    ],
    drill: {
      title: "Cubrir y salir",
      body: "En guardia, cuenta 8 ciclos: cubres un segundo, paso atrás, guardia. Luego 8 ciclos: cubres, paso a la izquierda. 8 a la derecha. Sin golpes. Respira dentro de la cobertura, no aguantes.",
    },
  },
  {
    id: "slip",
    module: "defensa",
    order: 17,
    title: "Slip — escurrir",
    kicker: "Defensa",
    minutes: 9,
    level: "intermedio",
    image: "/images/slip.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 2808,
    youtubeTitle: "Movimiento de cabeza (slip) — Tony Jeffries (en español)",
    diagram: "slip-path",
    summary:
      "La cabeza se sale del raíl unos centímetros. Las manos se quedan. Las rodillas ayudan.",
    why: "Escurrir es más eficiente que cubrirse siempre, y más peligroso si se hace con el cuello. El slip bueno es pequeño: la nariz se sale de la línea central y vuelve. No es un baile de boxeo de película.",
    steps: [
      {
        title: "La línea",
        body: "Imagina un hilo desde tu nariz hacia el espejo. El jab imaginario viaja por ese hilo. Tú quitas la nariz del hilo, a tu derecha o a tu izquierda, y el hilo sigue vacío.",
      },
      {
        title: "Cómo",
        body: "Rodillas un poco más flexionadas, torso gira unos grados, la cabeza viaja con el tronco —no sola. Las manos no se caen para 'equilibrarte'. Vuelves al centro en cuanto pasa el tiempo de un jab.",
      },
      {
        title: "A qué lado",
        body: "Fuera y dentro dependen del rival, no de tu guardia. Contra un ortodoxo (su jab es su izquierda): escurrir hacia TU derecha te saca al lado de fuera, más lejos de su recto. Hacia tu izquierda es el lado de dentro, más cerca de su mano de atrás. Empieza por el de fuera. Los dos se practican.",
      },
    ],
    cues: [
      "Centímetros, no palmos.",
      "Las manos no se enteran. Siguen en la cara.",
      "Vuelves al centro. Quedarte ladeado es otra falta.",
      "Fuera = lejos de la mano de atrás del rival. Contra ortodoxo, fuera es tu derecha.",
    ],
    mistakes: [
      {
        bad: "Inclinar solo el cuello.",
        fix: "Eso es un latigazo. Dobla rodillas y gira el tronco un grado.",
      },
      {
        bad: "Slip enorme que te saca del equilibrio.",
        fix: "Si al volver tienes que dar un paso de más, era demasiado.",
      },
    ],
    drill: {
      title: "El metrónomo",
      body: "Cuenta 1-2-3-4. En el 1, slip a tu derecha (fuera contra un ortodoxo). 2, centro. 3, slip a tu izquierda (dentro). 4, centro. 40 segundos. Descansa 20. 4 series. Manos pegadas. Si al volver das un paso de más, acorta.",
    },
  },
  {
    id: "parry",
    module: "defensa",
    order: 18,
    title: "Desviar y paso atrás",
    kicker: "Defensa",
    minutes: 8,
    level: "intermedio",
    image: "/images/block.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 1976,
    youtubeTitle: "Defensas: desviar y paso atrás — Tony Jeffries (en español)",
    diagram: "parry",
    summary:
      "Desvías un jab imaginario con la mano de atrás, o simplemente no estás: un paso y se acaba.",
    why: "No todo se cubre ni se escurre. A veces la mano de atrás toca el golpe y lo saca de tu nariz. A veces el mejor desvío es no estar. Las dos cosas se entrenan en sombra.",
    steps: [
      {
        title: "El toque",
        body: "La mano de atrás (derecha en ortodoxa) sale unos centímetros, palma o nudillos hacia dentro, y desvía el hilo del jab hacia tu izquierda. Inmediatamente vuelve a la mejilla. No persigue el golpe. Un toque.",
      },
      {
        title: "El paso atrás",
        body: "Pie de atrás primero, el de delante se recoge. El torso no se inclina hacia atrás como Matrix: si te inclinas, el mentón sube y el equilibrio se va. Retrocede con los pies, no con la columna.",
      },
      {
        title: "Juntarlos",
        body: "Desvías y das un paso, o solo el paso. En sombra, imagina un jab cada dos segundos y eliges: toque, o fuera, o escurrir. Decidir es parte del ejercicio.",
      },
    ],
    cues: [
      "El desvío es un toque de timbre, no un empujón.",
      "La mano de delante no se va de paseo mientras la de atrás desvía.",
      "Inclinar la espalda no es defender: es caer con estilo.",
    ],
    mistakes: [
      {
        bad: "Abanicar el aire con el brazo entero.",
        fix: "Muñeca y antebrazo, recorrido de un puño. Nada más.",
      },
      {
        bad: "Paso atrás con el pecho primero.",
        fix: "Pies primero. El pecho viaja encima de ellos.",
      },
    ],
    drill: {
      title: "Jab imaginario cada dos segundos",
      body: "Un minuto: solo desvío. Un minuto: solo paso atrás. Un minuto: eliges. Entre cada defensa, guardia viva. 2 vueltas. Si la mano de atrás se queda fuera, esa repetición no vale.",
    },
  },
  {
    id: "roll",
    module: "defensa",
    order: 19,
    title: "Pasar por debajo",
    kicker: "Defensa",
    minutes: 9,
    level: "intermedio",
    image: "/images/slip.jpg",
    youtubeId: "vVg0BSTy9Ew",
    youtubeTitle: "Cómo hacer el roll — Tony Jeffries (en español)",
    diagram: "roll-path",
    summary:
      "Te agachas y dibujas una U. Pasas por debajo de un gancho imaginario y sales al otro lado.",
    why: "El roll es la defensa del gancho. Si solo escurres de lado, un gancho te encuentra. Si te sientas un poco y viajas en U, el gancho pasa por encima. Es intermedio: las rodillas trabajan y el mareo aparece si lo haces mal.",
    steps: [
      {
        title: "La U, no la sentadilla",
        body: "Desde guardia, flexionas y tu cabeza dibuja una U poco profunda: baja, cruza, sube al otro lado. No esconderse a la altura de las rodillas. Una U de un palmo de profundidad basta.",
      },
      {
        title: "Las manos",
        body: "Viajan con la cabeza, pegadas. El error clásico es dejarlas arriba como un perchero mientras el cuerpo se va. Manos y cara son un bloque.",
      },
      {
        title: "Salir",
        body: "Al otro lado de la U vuelves a la altura normal, ya un poco desplazado. Desde ahí un 3 o un 2 en sombra, o simplemente guardia. No encadenes cinco rolls: mareas y se ensucia.",
      },
    ],
    cues: [
      "U pequeña. El suelo no es el objetivo.",
      "Ojos abiertos en todo el viaje.",
      "Si te mareas, paras. El cuello no es un molino.",
    ],
    mistakes: [
      {
        bad: "Agacharse recto y subir recto, sin cruzar.",
      fix: "Eso es un duck. El weave cruza. Sin el cruce no sales del gancho.",
      },
      {
        bad: "Poner las manos en las rodillas.",
        fix: "Las manos no se apoyan. El trabajo es de piernas.",
      },
    ],
    drill: {
      title: "Cuatro U y paramos",
      body: "4 rolls lentos. 10 segundos de guardia quieta. 4 rolls. 6 series. Luego, 4 rolls y un 1-2 al salir. Si el cuello pica, se acabó el drill: vuelve otro día.",
    },
  },
  {
    id: "sombra-rounds",
    module: "sombra",
    order: 20,
    title: "El round de tres minutos",
    kicker: "Sombra",
    minutes: 10,
    level: "intermedio",
    image: "/images/shadow.jpg",
    youtubeId: "YYeqmwthegc",
    youtubeStart: 2647,
    youtubeTitle: "Cómo respirar y aguantar el asalto — Tony Jeffries (en español)",
    diagram: "punch-clock",
    summary:
      "El boxeo se mide en rounds. Tres minutos de trabajo, uno de descanso. La sombra es el entreno de verdad.",
    why: "Las lecciones te dan piezas. El round te obliga a decidir, respirar y volver a la guardia cuando estás cansado. Ahí se ve si el jab sigue limpio o se convierte en un abanico.",
    steps: [
      {
        title: "La estructura",
        body: "Minuto 1: solo pies y jab. Minuto 2: 1-2 y algún 1-2-3, entrando y saliendo. Minuto 3: mezcla defensa (slip, cubrir, paso atrás) con un combo corto. No improvises un ballet. Menos es más.",
      },
      {
        title: "El descanso",
        body: "Un minuto. Andas, no te sientas. Manos en la cadera o en la guardia floja. Nariz in, boca out. El siguiente round empieza en guardia, no 'cuando te apetezca'.",
      },
      {
        title: "Cuántos",
        body: "Principiante: 2 rounds. Cuando no se te caigan las manos: 4. Intermedio cómodo: 6. Más de eso, en casa, suele ser ego. La calidad del último minuto es la nota.",
      },
    ],
    cues: [
      "El último minuto no se negocia la guardia.",
      "Si no sabes qué hacer, jab y paso. Siempre es una respuesta válida.",
      "El reloj manda. No el combo que tenías en la cabeza.",
    ],
    mistakes: [
      {
        bad: "Tres minutos de combos sin parar, sin pies.",
        fix: "La sombra es movimiento. Si estás clavado, estás haciendo flexiones de brazos disfrazadas.",
      },
      {
        bad: "Sentarte en el descanso y arrancar en frío.",
        fix: "Anda. El cuerpo no se apaga.",
      },
    ],
    drill: {
      title: "Tu primer round guiado",
      body: "Ve a Ring y lanza el entreno «Primer día». Si aún no, hazlo aquí: 60 s jab y pies, 60 s 1-2, 60 s slip + 1-2. Un minuto andando. Otro asalto si las manos siguen altas. Anótalo en Progreso al terminar.",
    },
  },
];

export const LESSON_BY_ID = Object.fromEntries(
  LESSONS.map((l) => [l.id, l]),
) as Record<string, Lesson>;

export function lessonsFor(moduleId: ModuleInfo["id"]) {
  return LESSONS.filter((l) => l.module === moduleId);
}

export function nextLesson(id: string) {
  const i = LESSONS.findIndex((l) => l.id === id);
  if (i < 0 || i === LESSONS.length - 1) return null;
  return LESSONS[i + 1] ?? null;
}

export function prevLesson(id: string) {
  const i = LESSONS.findIndex((l) => l.id === id);
  if (i <= 0) return null;
  return LESSONS[i - 1] ?? null;
}

export function firstUnseen(completed: string[]) {
  return LESSONS.find((l) => !completed.includes(l.id)) ?? null;
}
