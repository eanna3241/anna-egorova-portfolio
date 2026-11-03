import type { Project } from "@/types/project";

type OverviewKind =
  | "problem"
  | "solution"
  | "result";

function OverviewIcon({
  kind,
}: {
  kind: OverviewKind;
}) {
  if (kind === "problem") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 3.5 21 20H3L12 3.5Z" />
        <path d="M12 9v5" />
        <path d="M12 17.2h.01" />
      </svg>
    );
  }

  if (kind === "solution") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="6" r="2" />
        <circle cx="19" cy="15" r="2" />

        <path d="M6.6 16.8 10.7 7.7" />
        <path d="m13.7 7.2 4 6.1" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 4-4 3 2 5-6" />
      <path d="M15.5 7H19v3.5" />
    </svg>
  );
}

export function CaseSummary({
  project,
}: {
  project: Project;
}) {
  const facts = [
    {
      label: "Role",
      value:
        project.meta?.role ?? project.role,
    },
    {
      label: "Status",
      value: project.meta?.status,
    },
  ].filter((item) => item.value);

  /*
   * Находим раздел Concept и переносим
   * его абзацы в верхний Intro.
   */

  const conceptSection =
    project.sections.find(
      (section) =>
        section.title.toLowerCase() ===
        "concept"
    );

  const conceptParagraphs =
    conceptSection?.paragraphs ?? [];

  const overview = [
    {
      kind: "problem" as const,
      label: "Problem",
      text: project.overview?.problem,
    },
    {
      kind: "solution" as const,
      label: "Solution",
      text: project.overview?.solution,
    },
    {
      kind: "result" as const,
      label: "Result",
      text: project.overview?.result,
    },
  ].filter((item) => item.text);

  return (
    <>
      <section
        className="case-summary"
        aria-label="Project summary"
      >
        <div>
          <p className="case-summary-label">
            Intro
          </p>

          <div className="case-summary-copy">
            <p>{project.description}</p>

            {conceptParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>

        <aside
          className="case-facts"
          aria-label="Project facts"
        >
          {facts.map((item) => (
            <div
              className="case-fact"
              key={item.label}
            >
              <p className="case-fact-label">
                {item.label}
              </p>

              <span className="case-fact-value">
                {item.value}
              </span>
            </div>
          ))}

          {project.meta?.tools?.length ? (
            <div className="case-fact">
              <p className="case-fact-label">
                Tools
              </p>

              <div className="case-tools">
                {project.meta.tools.map(
                  (tool) => (
                    <span
                      className="case-tool"
                      key={tool}
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          ) : null}
        </aside>
      </section>

      {overview.length ? (
        <section
          className="case-overview case-overview--graphic"
          aria-label="Project overview"
        >
          {overview.map((item) => (
            <article
              className={`case-overview-item case-overview-item--${item.kind}`}
              key={item.kind}
            >
              <div className="case-overview-icon">
                <OverviewIcon
                  kind={item.kind}
                />
              </div>

              <h2 className="case-overview-label">
                {item.label}
              </h2>

              <p>{item.text}</p>
            </article>
          ))}
        </section>
      ) : null}
    </>
  );
}