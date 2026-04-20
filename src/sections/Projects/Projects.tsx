import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import { useInView } from "../../hooks/useInView";

const featured = projects.filter((p) => p.featured);
const main = projects.filter(
  (p) => !p.featured && p.title !== "Tateti" && p.title !== "4 en Raya",
);
const small = projects.filter(
  (p) => p.title === "Tateti" || p.title === "4 en Raya",
);

export function Projects() {
  const { ref, inView } = useInView();
  return (
    <section
      id="projects"
      ref={ref}
      className={`projects reveal ${inView ? "reveal--visible" : ""}`}
    >
      <div className="projects__header">
        <p className="projects__tag">{"// proyectos"}</p>
        <h2 className="projects__title">Lo que construí</h2>
        <p className="projects__subtitle">
          Una selección de proyectos personales donde apliqué y seguí
          aprendiendo.
        </p>
      </div>

      <div className="projects__featured">
        {featured.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="projects__grid">
        {main.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="projects__small-grid">
        <p className="projects__small-label">Proyectos de práctica</p>
        <div className="projects__small-row">
          {small.map((p) => (
            <ProjectCard key={p.title} project={p} small />
          ))}
        </div>
      </div>
    </section>
  );
}
