import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiHtml5,
  SiTailwindcss,
  SiSqlite,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiSqlalchemy,
  SiInsomnia,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { type ComponentType } from "react";

export interface Technology {
  name: string;
  icon: ComponentType<{ size?: number; color?: string }>;
  color: string;
}

export const technologies: Technology[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "SQLite", icon: SiSqlite, color: "#07405E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Insomnia", icon: SiInsomnia, color: "#5f4dd1" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Prisma", icon: SiPrisma, color: "#1D4ED8" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#009688" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];
