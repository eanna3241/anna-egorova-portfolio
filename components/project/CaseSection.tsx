import type {
  CaseSection as CaseSectionType,
} from "@/types/project";

export function CaseSection({
  section,
}: {
  section: CaseSectionType;
}) {
  const hasContent = Boolean(
    section.paragraphs?.length ||
      section.bullets?.length ||
      section.quote
  );

  return (
    <section className="case-section">
      <header className="case-section-header">
        {section.eyebrow ? (
          <p className="case-section-eyebrow">
            {section.eyebrow}
          </p>
        ) : null}

        <h2>{section.title}</h2>
      </header>

      {hasContent ? (
        <div className="case-section-content">
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {section.bullets?.length ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          {section.quote ? (
            <blockquote>{section.quote}</blockquote>
          ) : null}
        </div>
      ) : null}

      {section.images?.length ? (
        <div
          className={`case-section-images ${
            section.images.length === 1
              ? "is-single"
              : ""
          }`}
        >
          {section.images.map((image, index) => (
            <figure
              className="case-section-image"
              key={image}
            >
              <img
                src={image}
                alt={`${section.title} visual ${
                  index + 1
                }`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      ) : null}
    </section>
  );
}