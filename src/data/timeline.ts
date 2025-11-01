export type TimelineEntry = {
  id: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  description: string;
  highlights: string[];
  gallery: string[];
  badge: string;
  accent: "cyan" | "purple" | "emerald" | "amber";
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: "ghananlp",
    title: "Community Research at GhanaNLP",
    period: "2024 – Present",
    location: "Kumasi · Remote",
    summary:
      "Collaborating with the GhanaNLP collective to democratize NLP tools for African languages and inclusive AI deployments.",
    description:
      "From dataset curation to model deployment, I help build production-grade NLP systems for African languages. We focus on inclusive model fine-tuning, evaluation tooling, and shipping APIs that make local dialect support a reality.",
    highlights: [
      "Curated and cleaned multilingual corpora for under-resourced dialects.",
      "Fine-tuned transformer models and deployed inference-ready APIs.",
      "Led developer workshops on responsible, community-centered AI practices.",
    ],
    gallery: [
      "/media/ghananlp/1.webp",
      "/media/ghananlp/2.webp",
      "/media/ghananlp/3.webp",
      "/media/ghananlp/4.webp",
      "/media/ghananlp/5.webp",
    ],
    badge: "Responsible AI",
    accent: "cyan",
  },
  {
    id: "inngen",
    title: "INNGEN Hackathon (TWEEK 2024)",
    period: "2024",
    location: "KNUST, Kumasi",
    summary:
      "Built a universal document understanding pipeline with LayoutLMv2, earning Top 5 honors among nationwide teams.",
    description:
      "Our team engineered a multimodal transformer workflow to understand complex business documents. We combined preprocessing, LayoutLMv2 embeddings, and structured post-processing to deliver structured insight across invoices, legal documents, and more.",
    highlights: [
      "Implemented LayoutLMv2 for end-to-end document intelligence.",
      "Automated entity extraction on the FUNSD dataset with high accuracy.",
      "Delivered a working prototype in record time with polished UX demos.",
    ],
    gallery: [
      "/media/inggen/1.webp",
      "/media/inggen/2.webp",
      "/media/inggen/3.webp",
      "/media/inggen/4.webp",
    ],
    badge: "Top 5 Finish",
    accent: "purple",
  },
  {
    id: "nasa",
    title: "NASA Space Apps Challenge · BioQuery",
    period: "October 2025",
    location: "Kumasi, Ghana",
    summary:
      "Won the Galactic Impact Award with BioQuery, a RAG-powered knowledge engine for 600+ NASA bioscience publications.",
    description:
      "BioQuery turned raw space bioscience research into an intelligent search assistant. We paired Cohere embeddings with domain-specific knowledge graphs and a RAG pipeline so scientists can ask natural language questions and uncover new insights instantly.",
    highlights: [
      "Designed retrieval pipelines that surface relevant research statements on-demand.",
      "Built a polished interface that blends storytelling with scientific rigor.",
      "Collaborated with multidisciplinary teammates across a 48-hour sprint.",
    ],
    gallery: [
      "/media/nasa/1.webp",
      "/media/nasa/2.webp",
      "/media/nasa/3.webp",
      "/media/nasa/4.webp",
      "/media/nasa/5.webp",
      "/media/nasa/6.webp",
    ],
    badge: "Galactic Impact Award",
    accent: "emerald",
  },
];
