import { useEffect, useState } from "react";
import "./Hero.css";
import { useInView } from "../../hooks/useInView";

const TITLES = [
  "Full-Stack Developer",
  "React Developer",
  "Problem Solver",
  "TypeScript Lover",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    const current = TITLES[titleIndex];

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40,
      );
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [displayed, deleting, titleIndex]);

  return (
    <section
      id="hero"
      ref={ref}
      className={`hero reveal ${inView ? "reveal--visible" : ""}`}
    >
      <div className="hero__left">
        <p className="hero__greeting">Hola, soy</p>
        <h1 className="hero__name">Lisandro Valdez</h1>
        <h2 className="hero__title">
          <span>{displayed}</span>
          <span className="hero__cursor">|</span>
        </h2>
        <p className="hero__description">
          Construyo aplicaciones web modernas, rápidas y con buena experiencia
          de usuario. Apasionado por el código limpio y los buenos diseños.
        </p>
        <div className="hero__buttons">
          <a
            href="https://github.com/lisandrovaldez"
            target="_blank"
            rel="noreferrer"
            className="hero__btn hero__btn--outline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lisandrovaldez/"
            target="_blank"
            rel="noreferrer"
            className="hero__btn hero__btn--outline"
          >
            LinkedIn
          </a>
          <a
            className="hero__btn hero__btn--outline"
            href="CV Lisandro Valdez.pdf"
            download="CV Lisandro Valdez.pdf"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="hero__terminal">
        <div className="hero__terminal-bar">
          <span className="hero__terminal-dot hero__terminal-dot--red"></span>
          <span className="hero__terminal-dot hero__terminal-dot--yellow"></span>
          <span className="hero__terminal-dot hero__terminal-dot--green"></span>
          <span className="hero__terminal-title">lisandro.ts</span>
        </div>
        <div className="hero__terminal-body">
          <p>
            <span className="hero__t-keyword">const</span>{" "}
            <span className="hero__t-var">dev</span>{" "}
            <span className="hero__t-op">=</span> {"{"}
          </p>
          <p>
            &nbsp;&nbsp;<span className="hero__t-key">name</span>:{" "}
            <span className="hero__t-string">"Lisandro Valdez"</span>,
          </p>
          <p>
            &nbsp;&nbsp;<span className="hero__t-key">role</span>:{" "}
            <span className="hero__t-string">"Full-stack Developer"</span>,
          </p>
          <p>
            &nbsp;&nbsp;<span className="hero__t-key">stack</span>: [
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="hero__t-string">"React"</span>,{" "}
            <span className="hero__t-string">"TypeScript"</span>,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="hero__t-string">"NestJS"</span>,{" "}
            <span className="hero__t-string">"Prisma"</span>,{" "}
          </p>
          <p>&nbsp;&nbsp;],</p>
          <p>
            &nbsp;&nbsp;<span className="hero__t-key">open_to_work</span>:{" "}
            <span className="hero__t-bool">true</span>
          </p>
          <p>{"}"}</p>
        </div>
      </div>
    </section>
  );
}
