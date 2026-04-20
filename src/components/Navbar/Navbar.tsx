import { useActiveSection } from "../../hooks/useActiveSection";
import "./Navbar.css";

const SECTIONS = ["hero", "about", "stack", "projects", "contact"];
const LABELS: Record<string, string> = {
  hero: "inicio",
  about: "sobre mí",
  stack: "stack",
  projects: "proyectos",
  contact: "contacto",
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const active = useActiveSection(SECTIONS);

  return (
    <>
      <nav className="navbar">
        <span className="navbar__logo" onClick={() => scrollTo("hero")}>
          LV<span className="navbar__logo-dot">.</span>
        </span>
        <div className="navbar__links">
          {SECTIONS.map((s) => (
            <button
              key={s}
              className={`navbar__link ${active === s ? "navbar__link--active" : ""}`}
              onClick={() => scrollTo(s)}
            >
              {LABELS[s]}
            </button>
          ))}
        </div>
      </nav>

      <div className="sidebar">
        {SECTIONS.map((s) => (
          <button
            key={s}
            className={`sidebar__dot ${active === s ? "sidebar__dot--active" : ""}`}
            onClick={() => scrollTo(s)}
            title={LABELS[s]}
          />
        ))}
      </div>
    </>
  );
}
