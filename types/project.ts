export const projectCategories = ["mobile", "web", "presentation", "graphic", "concept"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type CaseSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
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
  sections: CaseSection[];
};
