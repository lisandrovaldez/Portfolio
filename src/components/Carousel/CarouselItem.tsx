import { type Technology } from "../../data/technologies";

interface CarouselItemProps {
  technology: Technology;
}

export function CarouselItem({ technology }: CarouselItemProps) {
  const { name, icon: Icon, color } = technology;

  return (
    <div className="carousel_item">
      <Icon size={40} color={color} />
      <span>{name}</span>
    </div>
  );
}
