import type { Project } from "@/types/project";
import { projects } from "@/data/projects";
import { CloseButton } from "@/components/shared/CloseButton";

import { CaseNavigation } from "./CaseNavigation";
import { CaseSection } from "./CaseSection";
import { CaseSummary } from "./CaseSummary";
import { NextProjectButton } from "./NextProjectButton";
import { PresentationGallery } from "./PresentationGallery";
import { ScrollableLanding } from "./ScrollableLanding";

/* MOBILE PRODUCT SCREENS */

const mobileScreenCounts: Record<string, number> = {
  setka: 8,
  capsule: 13,
  plata: 18,
};

/*
 * У Plata отсутствует screen-09.png,
 * поэтому исключаем его из списка.
 */

const missingMobileScreens: Record<string, number[]> = {
  plata: [9],
};

/* PRESENTATION AND GRAPHIC GALLERIES */

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

/* NDA SLIDES */

const projectNdaSlides: Record<string, number[]> = {
  "report-presentations": [1, 2, 3, 4, 5, 6],
  "talk-presentations": [2, 4, 6],
};

/* NAVIGATION TITLES */

const categoryNavigationTitles: Record<
  Project["category"],
  string
> = {
  mobile: "Mobile",
  web: "Web",
  presentation: "Presentation",
  graphic: "Graphic",
  concept: "Concept",
};

/* IMAGE LIST GENERATOR */

function createNumberedImages(
  slug: string,
  prefix: "screen" | "slide",
  count: number,
  missing: number[] = []
) {
  return Array.from(
    { length: count },
    (_, index) => index + 1
  )
    .filter((number) => !missing.includes(number))
    .map((number) => {
      const fileNumber = String(number).padStart(
        2,
        "0"
      );

      return `/assets/images/projects/${slug}/${prefix}-${fileNumber}.png`;
    });
}

/* CASE PAGE */

export function CasePage({
  project,
}: {
  project: Project;
}) {
  const isSetka = project.slug === "setka";
  const isDecades = project.slug === "decades";
  const isAntispam = project.slug === "antispam";

  const isMobileProject =
    project.category === "mobile";

  /*
   * В немобильных кейсах About уже находится
   * в верхнем блоке Intro, поэтому ниже
   * повторно его не показываем.
   */

  const nonMobileSections =
  project.sections.filter((section) => {
    const sectionTitle =
      section.title.toLowerCase();

    return (
      sectionTitle !== "about" &&
      sectionTitle !== "concept"
    );
  });

  /* MOBILE SCREENS */

  const mobileScreens = createNumberedImages(
    project.slug,
    "screen",
    mobileScreenCounts[project.slug] ?? 0,
    missingMobileScreens[project.slug] ?? []
  );

  /* PRESENTATION OR GRAPHIC SLIDES */

  const galleryImages = createNumberedImages(
    project.slug,
    "slide",
    projectGalleryCounts[project.slug] ?? 0
  );

  const ndaSlides =
    projectNdaSlides[project.slug] ?? [];

  /* NEXT PROJECT */

  const categoryProjects = projects.filter(
    (item) =>
      item.category === project.category
  );

  const currentProjectIndex =
    categoryProjects.findIndex(
      (item) => item.slug === project.slug
    );

  const nextProject =
    categoryProjects.length > 1
      ? categoryProjects[
          (currentProjectIndex + 1) %
            categoryProjects.length
        ]
      : null;

  /* SIDE NAVIGATION */

  const navigationItems = [
    {
      id: "overview",
      label: "Overview",
      show: true,
    },
    {
      id: "process",
      label: "Process",
      show:
        isMobileProject &&
        project.sections.length > 0,
    },
    {
      id: "final-work",
      label: "Final work",
      show: mobileScreens.length > 0,
    },
    {
      id: "reflection",
      label: "Reflection",
      show: Boolean(project.learning),
    },
    {
      id: "next-project",
      label: "Next project",
      show: Boolean(nextProject),
    },
  ]
    .filter((item) => item.show)
    .map(({ id, label }) => ({
      id,
      label,
    }));

  /* CASE MODIFIERS */

  const caseClassName = [
    "case",
    isDecades ? "case--decades" : "",
    isAntispam
      ? "case--long-screen"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className="project-page">
      <CloseButton
        href={`/?category=${project.category}`}
      />

      <CaseNavigation
        items={navigationItems}
        title={
          categoryNavigationTitles[
            project.category
          ]
        }
      />

      <article className={caseClassName}>
        {/* HERO MEDIA */}

        {isSetka ? (
          <div className="case-showreel">
            <video
              src="/assets/videos/setka-showreel.mp4"
              poster="/assets/images/projects/setka/hero-setka.png"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Setka project showreel"
            >
              Your browser does not support video
              playback.
            </video>
          </div>
        ) : galleryImages.length > 0 ? (
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
            alt={`${project.shortTitle} project cover`}
          />
        )}

        {/* TITLE */}

        <header className="case-intro">
          <p className="case-intro-eyebrow">
            {project.shortTitle}
            {" · "}
            {
              categoryNavigationTitles[
                project.category
              ]
            }
          </p>

          <h1>{project.title}</h1>
        </header>

        {/* OVERVIEW AND INTRO */}

        <div id="overview">
          <CaseSummary project={project} />
        </div>

        {/* MOBILE PROCESS */}

        {isMobileProject &&
        project.sections.length > 0 ? (
          <section
            id="process"
            className="case-process"
          >
            <header className="case-block-heading">
              <p>Process</p>

              <h2>
                How the project developed
              </h2>
            </header>

            {project.sections.map(
              (section) => (
                <div
                  className="case-section-wrapper"
                  key={section.title}
                >
                  <CaseSection
                    section={section}
                  />
                </div>
              )
            )}
          </section>
        ) : null}

        {/* NON-MOBILE DETAILS */}

        {!isMobileProject &&
        nonMobileSections.length > 0 ? (
          <div className="case-details">
            {nonMobileSections.map(
              (section) => (
                <div
                  className="case-section-wrapper"
                  key={section.title}
                >
                  <CaseSection
                    section={section}
                  />
                </div>
              )
            )}
          </div>
        ) : null}

        {/* FINAL PRODUCT SCREENS */}

        {mobileScreens.length > 0 ? (
          <section
            id="final-work"
            className="case-final-work"
          >
            <header className="case-block-heading">
              <p>Final work</p>

              <h2>
                Key product screens
              </h2>
            </header>

            <div
              className="screens-gallery"
              aria-label={`${project.shortTitle} application screens`}
            >
              {mobileScreens.map(
                (screen, index) => (
                  <img
                    key={screen}
                    src={screen}
                    alt={`${project.shortTitle} application screen ${
                      index + 1
                    }`}
                    draggable="false"
                    loading="lazy"
                  />
                )
              )}
            </div>
          </section>
        ) : null}

        {/* REFLECTION */}

        {project.learning ? (
          <section
            id="reflection"
            className="case-learning"
          >
            <header className="case-block-heading">
              <p>Reflection</p>

              <h2>What I learned</h2>
            </header>

            <p className="case-learning-text">
              {project.learning}
            </p>
          </section>
        ) : null}

        {/* NEXT PROJECT */}

        {nextProject ? (
          <footer
            id="next-project"
            className="case-footer"
          >
            <NextProjectButton
              project={nextProject}
            />
          </footer>
        ) : null}
      </article>
    </main>
  );
}