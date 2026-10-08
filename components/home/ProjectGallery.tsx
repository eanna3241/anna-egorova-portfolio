"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import {
  projectCategories,
  type ProjectCategory,
} from "@/types/project";
import { ProjectCard } from "./ProjectCard";

const labels: Record<ProjectCategory, string> = {
  mobile: "Mobile",
  web: "Web",
  presentation: "Presentation",
  graphic: "Graphic",
  concept: "Concept",
};

function isProjectCategory(
  value: string | null
): value is ProjectCategory {
  if (!value) {
    return false;
  }

  return projectCategories.includes(
    value as ProjectCategory
  );
}

export function ProjectGallery() {
  const searchParams = useSearchParams();
  const categoryFromUrl =
    searchParams.get("category");

  const [active, setActive] =
    useState<ProjectCategory>(() => {
      if (isProjectCategory(categoryFromUrl)) {
        return categoryFromUrl;
      }

      return "mobile";
    });

  const visible = projects.filter(
    (project) => project.category === active
  );

  return (
    <section
      className="portfolio"
      aria-label="Portfolio projects"
    >
      <div
        className="filters"
        role="tablist"
        aria-label="Project categories"
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            className={
              active === category ? "active" : ""
            }
            type="button"
            onClick={() => setActive(category)}
            role="tab"
            aria-selected={active === category}
          >
            {labels[category]}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="empty-projects">
          Projects in this category are coming soon.
        </div>
      )}
    </section>
  );
}