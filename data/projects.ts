import type { Project } from "@/types/project";
import { mobileProjects } from "./project-data/mobile";
import { webProjects } from "./project-data/web";
import { presentationProjects } from "./project-data/presentations";
import { graphicProjects } from "./project-data/graphic";
import { conceptProjects } from "./project-data/concepts";

export const projects: Project[] = [
  ...mobileProjects,
  ...webProjects,
  ...presentationProjects,
  ...graphicProjects,
  ...conceptProjects,
];

export function getProject(slug: string) {
  return projects.find(
    (project) => project.slug === slug
  );
}