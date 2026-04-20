import zawt from "../assets/images/zawt.webp";
import readinglist from "../assets/images/readinglist.webp";
import quiz from "../assets/images/quiz.webp";
import tienda from "../assets/images/tienda.webp";
import stockeate from "../assets/images/stockeate.webp";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  githubApi?: string;
  demo: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Expense Tracker",
    description:
      "Aplicación full-stack para gestión de gastos personales con autenticación JWT y login con Google. Incluye API REST propia con base de datos PostgreSQL en Neon.",
    tags: [
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "React Query",
      "MUI",
    ],
    github: "https://github.com/lisandrovaldez/Zawt",
    githubApi: "https://github.com/lisandrovaldez/Zawt-API",
    demo: "https://zawt.vercel.app/",
    image: zawt,
    featured: true,
  },
  {
    title: "Reading List",
    description:
      "App para explorar un catálogo editorial y armar una lista de lectura personalizada. Incluye filtrado por género, persistencia en localStorage y sincronización entre pestañas.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/lisandrovaldez/reading-list",
    demo: "https://reading-list-orcin.vercel.app/",
    image: readinglist,
  },
  {
    title: "JavaScript Quiz",
    description:
      "Quiz interactivo de preguntas sobre JavaScript con manejo de estado global y seguimiento de puntaje.",
    tags: ["React", "TypeScript", "Zustand"],
    github: "https://github.com/lisandrovaldez/JavaScript-Quiz",
    demo: "https://java-script-quiz-two.vercel.app/",
    image: quiz,
  },
  {
    title: "Carrito con Zustand",
    description:
      "Listado de productos con carrito de compras para practicar manejo de estado global con Zustand.",
    tags: ["React", "TypeScript", "Zustand", "Tailwind"],
    github: "https://github.com/lisandrovaldez/Zustand-cart",
    demo: "https://zustand-cart-ten.vercel.app/",
    image: tienda,
  },
  {
    title: "Dashboard Web",
    description:
      "Dashboard web desarrollado para la app de gestión de stock y remitos como proyecto final de carrera.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/lisandrovaldez/stockeate-dashboard",
    demo: "",
    image: stockeate,
  },
  {
    title: "Tateti",
    description: "Clásico juego del tres en raya hecho con React.",
    tags: ["React", "TypeScript"],
    github: "https://github.com/lisandrovaldez/TaTeTi-React",
    demo: "https://ta-te-ti-react-theta.vercel.app/",
    image: "",
  },
  {
    title: "4 en Raya",
    description: "Juego de 4 en raya con lógica de victoria y turnos.",
    tags: ["React", "TypeScript"],
    github: "https://github.com/lisandrovaldez/4EnRaya-React",
    demo: "https://4-en-raya-react.vercel.app/",
    image: "",
  },
];
