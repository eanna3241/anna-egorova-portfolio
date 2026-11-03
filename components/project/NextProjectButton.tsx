import Link from "next/link";
import type { Project } from "@/types/project";

export function NextProjectButton({
  project,
}: {
  project: Project;
}) {
  return (
    <footer className="case-footer">
      <Link
        className="next-project-button"
        href={`/projects/${project.slug}`}
        aria-label={`Open next project: ${project.shortTitle}`}
      >
        <span
          className="next-project-preview"
          aria-hidden="true"
        >
          <img
            src={
              project.preview || project.cover
            }
            alt=""
            draggable="false"
          />

          <span className="next-project-preview-copy">
            <small>Next project</small>

            <strong>
              {project.shortTitle}
            </strong>
          </span>
        </span>

        <span className="next-project-button-label">
          Next project
        </span>

        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M4 10h11M11 6l4 4-4 4" />
        </svg>
      </Link>
    </footer>
  );
}