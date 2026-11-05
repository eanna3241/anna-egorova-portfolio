export const projectCategories = [
  "mobile",
  "web",
  "presentation",
  "graphic",
  "concept",
] as const;

export type ProjectCategory =
  (typeof projectCategories)[number];

export type CaseSection = {
  title: string;
  eyebrow?: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
  images?: string[];
};

export type ProjectMeta = {
  role?: string;
  status?: string;
  year?: string;
  type?: string | string[];
  scope?: string | string[];
  team?: string | string[];
  tools?: string[];
};

export type ProjectOverview = {
  problem?: string;
  solution?: string;
  result?: string;
};

export type ProjectImpact = {
  value: string;
  label: string;
  description?: string;
};

export type Project = {
  slug: string;
  category: ProjectCategory;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
  preview: string;
  cover: string;
  tags: string[];
  role: string;

  meta?: ProjectMeta;
  overview?: ProjectOverview;
  impact?: ProjectImpact[];
  learning?: string;

  sections: CaseSection[];
};