import type { CaseSection as CaseSectionType } from "@/types/project";

export function CaseSection({ section }: { section: CaseSectionType }) {
  return <section className="case-section"><h2>{section.title}</h2><div>{section.paragraphs?.map((p) => <p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}{section.quote && <blockquote>{section.quote}</blockquote>}</div></section>;
}
