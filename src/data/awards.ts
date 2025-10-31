export type Award = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export const awards: Award[] = [
  {
    title: "Galactic Impact Award",
    issuer: "NASA Space Apps Challenge · Kumasi",
    year: "2025",
    description:
      "Recognized for BioQuery, an AI-powered knowledge engine that bridges space bioscience research with intuitive discovery.",
  },
  {
    title: "INNGEN Hackathon · Top 5 Team",
    issuer: "KNUST TWEEK",
    year: "2024",
    description:
      "Delivered a LayoutLMv2-based document intelligence pipeline in under 48 hours, earning a national Top 5 finish.",
  },
  {
    title: "BCG Summer Internship",
    issuer: "Boston Consulting Group",
    year: "2024",
    description:
      "Collaborated on data-backed strategic initiatives, weaving ML insights into decision-making playbooks.",
  },
];
