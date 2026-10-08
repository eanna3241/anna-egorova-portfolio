import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link
      className="project-card"
      href={`/projects/${project.slug}`}
      aria-label={`Open ${project.shortTitle} project`}
    >
      <img
        className="project-card-cover"
        src={project.preview}
        alt={`${project.shortTitle} project cover`}
        draggable="false"
      />

      <div className="project-card-overlay">
        <h2>{project.shortTitle}</h2>

        <div
          className="project-card-tags"
          aria-label="Project skills"
        >
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}