export type ProjectShowcase = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  href: string;
  status: "live" | "coming-soon";
  image?: string;
  gradient: string;
};

export const projectsShowcase: ProjectShowcase[] = [
  {
    id: "bioquery",
    title: "BioQuery",
    tagline: "Space bioscience knowledge engine",
    description:
      "Retrieval-augmented explorer that turns 600+ NASA bioscience papers into a conversational research assistant with Cohere embeddings and knowledge graphs.",
    tags: ["RAG", "Knowledge Graphs", "Cohere"],
    ctaLabel: "View Project",
    href: "/projects/bioquery",
    status: "live",
    image: "/projects/card-images/bioquery.webp",
    gradient: "after:from-sky-500/70 after:via-indigo-500/40 after:to-transparent",
  },
  {
    id: "finsight",
    title: "FinSight AI",
    tagline: "Finance-tuned language intelligence",
    description:
      "LLM fine-tuned with QLoRA + PEFT for finance teams, delivering 45% better accuracy and 60% faster inference across reporting and risk cases.",
    tags: ["LLM", "Finance", "QLoRA"],
    ctaLabel: "View Project",
    href: "/projects/finsight",
    status: "live",
    image: "/projects/card-images/finsight.webp",
    gradient: "after:from-teal-400/70 after:via-cyan-500/40 after:to-transparent",
  },
  {
    id: "adaptiq",
    title: "AdaptIQ",
    tagline: "Adaptive AI learning platform",
    description:
      "Personalized study companion with Gemini-powered tutors, adaptive schedules, and learning analytics used by 500+ learners.",
    tags: ["AI Learning", "Gemini", "Firebase"],
    ctaLabel: "View Project",
    href: "/projects/adaptiq",
    status: "live",
    image: "/projects/card-images/adaptiq.webp",
    gradient: "after:from-violet-400/70 after:via-purple-500/40 after:to-transparent",
  },
  {
    id: "robin",
    title: "Robin AI",
    tagline: "Agent-augmented web IDE",
    description:
      "Flutter + Supabase environment that pairs Ask→Apply agents with WebContainers for lightning-fast prototype loops and inline previews.",
    tags: ["AI IDE", "Supabase", "WebContainers"],
    ctaLabel: "View Project",
    href: "/projects/robin",
    status: "live",
    image: "/projects/card-images/robin.webp",
    gradient: "after:from-blue-400/70 after:via-slate-500/40 after:to-transparent",
  },
  {
    id: "asaphic",
    title: "Asaphic",
    tagline: "AI-powered Music lab",
    description:
      "Developing AI models that revolutionize music production — from intelligent stem separation to adaptive fine-tuning, shaping the future of sound creation.",
    tags: ["Creative AI", "Realtime", "In Progress"],
    ctaLabel: "Preview Locked",
    href: "#",
    status: "coming-soon",
    image: "/projects/card-images/asaphic.webp",
    gradient: "after:from-slate-500/60 after:via-slate-700/50 after:to-transparent",
  },
];
