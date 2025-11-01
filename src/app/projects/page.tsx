import type { Metadata } from "next";

import { ProjectsIntro } from "@/components/site/projects-intro";
import { ProjectsShowcase } from "@/components/site/projects-showcase";
import { ProjectsOutro } from "@/components/site/projects-outro";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AI and software projects by David Zahemen, spanning RAG systems, finance-tuned LLMs, adaptive learning, and creative tooling.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pb-24 pt-16 sm:space-y-20 sm:pb-32">
      <ProjectsIntro />
      <ProjectsShowcase />
      <ProjectsOutro />
    </div>
  );
}
