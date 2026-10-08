import { notFound } from "next/navigation";
import { CasePage } from "@/components/project/CasePage";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <CasePage project={project} />;
}
