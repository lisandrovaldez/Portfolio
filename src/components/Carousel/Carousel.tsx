import "./Carousel.css";
import { technologies } from "../../data/technologies";
import { CarouselItem } from "./CarouselItem";

export function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel_group">
        {technologies.map((tech) => (
          <CarouselItem key={tech.name} technology={tech} />
        ))}
      </div>
      <div aria-hidden className="carousel_group">
        {technologies.map((tech) => (
          <CarouselItem key={tech.name} technology={tech} />
        ))}
      </div>
    </div>
  );
}
