import { Carousel } from "../../components/Carousel/Carousel";
import "./Stack.css";
import { useInView } from "../../hooks/useInView";

export function Stack() {
  const { ref, inView } = useInView();
  return (
    <section
      id="stack"
      ref={ref}
      className={`stack reveal ${inView ? "reveal--visible" : ""}`}
    >
      <div className="stack__header">
        <p className="stack__tag">{"// tecnologías"}</p>
        <h2 className="stack__title">Con qué trabajo</h2>
        <p className="stack__subtitle">
          Las herramientas que uso en el día a día para construir proyectos
          completos.
        </p>
      </div>
      <Carousel />
    </section>
  );
}
