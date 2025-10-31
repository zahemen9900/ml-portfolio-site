export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "ML & AI",
    skills: [
      "Transformers",
      "Retrieval-Augmented Generation",
      "QLoRA & PEFT",
      "Cohere Platform",
      "Hugging Face",
      "Prompt Engineering",
    ],
  },
  {
    name: "Software Engineering",
    skills: [
      "React & Next.js",
      "Flutter",
      "Supabase",
      "Firebase",
      "Node.js",
      "WebContainers",
    ],
  },
  {
    name: "MLOps & Cloud",
    skills: [
      "Docker",
      "AWS & SageMaker",
      "GCP",
      "Azure",
      "Weights & Biases",
      "CI/CD Automation",
    ],
  },
  {
    name: "Data & Analytics",
    skills: [
      "SQL",
      "Pandas",
      "Apache Spark",
      "dbt",
      "Data Visualization",
      "Experiment Tracking",
    ],
  },
];
