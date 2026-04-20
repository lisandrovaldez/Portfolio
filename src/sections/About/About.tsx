import "./About.css";
import { useInView } from "../../hooks/useInView";

const STATS = [
  { value: "24", label: "Años" },
  { value: "3", label: "Años estudiando" },
  { value: "4+", label: "Tecnologías aprendiendo" },
];

export function About() {
  const { ref, inView } = useInView();
  return (
    <section
      id="about"
      ref={ref}
      className={`about reveal ${inView ? "reveal--visible" : ""}`}
    >
      <div className="about__left">
        <p className="about__tag">{"// sobre mí"}</p>
        <h2 className="about__title">Un poco sobre quién soy</h2>
        <p className="about__text">
          Soy Lisandro, tengo 24 años y soy de Buenos Aires, Argentina. Estudié
          la Tecnicatura Universitaria en Programación en la Universidad
          Nacional Almirante Brown, donde asenté las bases que hoy me permiten
          construir aplicaciones completas de principio a fin.
        </p>
        <p className="about__text">
          Actualmente sigo creciendo por mi cuenta, profundizando en tecnologías
          como <span className="about__highlight">Zustand</span>,{" "}
          <span className="about__highlight">React Query</span>,{" "}
          <span className="about__highlight">NestJS</span> y{" "}
          <span className="about__highlight">Prisma</span>. Me gusta entender
          cómo funcionan las cosas por dentro, no solo usarlas.
        </p>
        <p className="about__text">
          Estoy en búsqueda de mi primer empleo como desarrollador, idealmente
          remoto. Si estás buscando a alguien con ganas de aprender, aportar y
          crecer dentro de un equipo, hablemos.
        </p>
      </div>

      <div className="about__right">
        {STATS.map((stat) => (
          <div key={stat.label} className="about__stat">
            <span className="about__stat-value">{stat.value}</span>
            <span className="about__stat-label">{stat.label}</span>
          </div>
        ))}
        <div className="about__location">
          <span className="about__location-dot"></span>
          Buenos Aires, Argentina
        </div>
        <div className="about__open">
          <span className="about__open-dot"></span>
          Disponible para trabajar
        </div>
      </div>
    </section>
  );
}
