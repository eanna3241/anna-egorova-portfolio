import Link from "next/link";

import type { Project } from "@/types/project";
import { projects } from "@/data/projects";
import { CloseButton } from "@/components/shared/CloseButton";

import { CaseSection } from "./CaseSection";
import { PresentationGallery } from "./PresentationGallery";
import { ScrollableLanding } from "./ScrollableLanding";

const setkaScreens = [
  "/assets/images/projects/setka/screen-01.png",
  "/assets/images/projects/setka/screen-02.png",
  "/assets/images/projects/setka/screen-03.png",
  "/assets/images/projects/setka/screen-04.png",
  "/assets/images/projects/setka/screen-05.png",
  "/assets/images/projects/setka/screen-06.png",
  "/assets/images/projects/setka/screen-07.png",
  "/assets/images/projects/setka/screen-08.png",
];

const capsuleScreens = [
  "/assets/images/projects/capsule/screen-01.png",
  "/assets/images/projects/capsule/screen-02.png",
  "/assets/images/projects/capsule/screen-03.png",
  "/assets/images/projects/capsule/screen-04.png",
  "/assets/images/projects/capsule/screen-05.png",
  "/assets/images/projects/capsule/screen-06.png",
  "/assets/images/projects/capsule/screen-07.png",
  "/assets/images/projects/capsule/screen-08.png",
  "/assets/images/projects/capsule/screen-09.png",
  "/assets/images/projects/capsule/screen-10.png",
  "/assets/images/projects/capsule/screen-11.png",
  "/assets/images/projects/capsule/screen-12.png",
  "/assets/images/projects/capsule/screen-13.png",
];

const plataScreens = [
  "/assets/images/projects/plata/screen-01.png",
  "/assets/images/projects/plata/screen-02.png",
  "/assets/images/projects/plata/screen-03.png",
  "/assets/images/projects/plata/screen-04.png",
  "/assets/images/projects/plata/screen-05.png",
  "/assets/images/projects/plata/screen-06.png",
  "/assets/images/projects/plata/screen-07.png",
  "/assets/images/projects/plata/screen-08.png",
  "/assets/images/projects/plata/screen-10.png",
  "/assets/images/projects/plata/screen-11.png",
  "/assets/images/projects/plata/screen-12.png",
  "/assets/images/projects/plata/screen-13.png",
  "/assets/images/projects/plata/screen-14.png",
  "/assets/images/projects/plata/screen-15.png",
  "/assets/images/projects/plata/screen-16.png",
  "/assets/images/projects/plata/screen-17.png",
  "/assets/images/projects/plata/screen-18.png",
];

const projectGalleryCounts: Record<string, number> = {
  "report-presentations": 6,
  "talk-presentations": 6,
  "case-presentations": 16,

  vk: 9,
  "avito-open-event": 4,
  biocad: 5,
  "rzd-medicine": 4,
  "alfa-bank": 5,
  "samolet-partners-day": 4,

  decades: 4,
};

const projectNdaSlides: Record<string, number[]> = {
  "report-presentations": [1, 2, 3, 4, 5, 6],
  "talk-presentations": [2, 4, 6],
  "case-presentations": [],

  vk: [],
  "avito-open-event": [],
  biocad: [],
  "rzd-medicine": [],
  "alfa-bank": [],
  "samolet-partners-day": [],

  decades: [],
};

function createGalleryImages(
  slug: string,
  count: number
) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return `/assets/images/projects/${slug}/slide-${number}.png`;
  });
}

export function CasePage({
  project,
}: {
  project: Project;
}) {
  const isSetka = project.slug === "setka";
  const isCapsule = project.slug === "capsule";
  const isPlata = project.slug === "plata";
  const isDecades = project.slug === "decades";
  const isAntispam = project.slug === "antispam";

  const mobileScreens = isSetka
    ? setkaScreens
    : isCapsule
      ? capsuleScreens
      : isPlata
        ? plataScreens
        : [];

  const gallerySlidesCount =
    projectGalleryCounts[project.slug] ?? 0;

  const galleryImages = createGalleryImages(
    project.slug,
    gallerySlidesCount
  );

  const ndaSlides =
    projectNdaSlides[project.slug] ?? [];

  const hasHeroGallery = galleryImages.length > 0;

  const categoryProjects = projects.filter(
    (item) => item.category === project.category
  );

  const currentProjectIndex = categoryProjects.findIndex(
    (item) => item.slug === project.slug
  );

  const nextProject =
    categoryProjects.length > 1
      ? categoryProjects[
          (currentProjectIndex + 1) %
            categoryProjects.length
        ]
      : null;

  const caseClassName = [
    "case",
    isDecades ? "case--decades" : "",
    isAntispam ? "case--long-screen" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className="project-page">
      <CloseButton
        href={`/?category=${project.category}`}
      />

      <article className={caseClassName}>
        {hasHeroGallery ? (
          <PresentationGallery
            title={project.shortTitle}
            images={galleryImages}
            ndaSlides={ndaSlides}
          />
        ) : isAntispam ? (
          <ScrollableLanding
            src={project.cover}
            alt={`${project.shortTitle} landing page`}
          />
        ) : (
          <img
            className="case-cover"
            src={project.cover}
            alt={`${project.shortTitle} case study cover`}
          />
        )}

        <header className="case-intro">
          <h1>{project.title}</h1>

          <p className="case-description">
            {project.description}
          </p>
        </header>

        {project.sections.map((section, index) => (
          <div
            className="case-section-wrapper"
            key={section.title}
          >
            <CaseSection section={section} />

            {mobileScreens.length > 0 &&
              index === 1 && (
                <div
                  className="screens-gallery"
                  aria-label={`${project.shortTitle} application screens`}
                >
                  {mobileScreens.map(
                    (screen, screenIndex) => (
                      <img
                        key={screen}
                        src={screen}
                        alt={`${project.shortTitle} application screen ${
                          screenIndex + 1
                        }`}
                        draggable="false"
                      />
                    )
                  )}
                </div>
              )}
          </div>
        ))}

        {nextProject && (
          <footer className="case-footer">
            <Link
              href={`/projects/${nextProject.slug}`}
            >
              Next project
            </Link>
          </footer>
        )}
      </article>
    </main>
  );
}