import { type Project } from "../../data/projects";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  small?: boolean;
}

export function ProjectCard({ project, small }: ProjectCardProps) {
  const { title, description, tags, github, demo, image } = project;

  return (
    <div className={`project-card ${small ? "project-card--small" : ""}`}>
      {!small && (
        <div className="project-card__image">
          {image ? (
            <img src={image} alt={title} loading="lazy" />
          ) : (
            <div className="project-card__placeholder">
              <span>{title[0]}</span>
            </div>
          )}
        </div>
      )}
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        {!small && <p className="project-card__desc">{description}</p>}
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
            >
              GitHub
            </a>
          )}
          {project.githubApi && (
            <a
              href={project.githubApi}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
            >
              GitHub API
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="project-card__link project-card__link--accent"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
