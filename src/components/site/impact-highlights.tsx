"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";

import { ProjectLogo } from "@/components/site/icons/project-logo";
import { fadeInUp, staggerChildren } from "@/lib/motion";

type Highlight = {
  title: string;
  description: string;
  metric: string;
  logo?: string;
  icon?: typeof ArrowUpRight;
  glow?: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "FinSightAI",
    description:
      "Fine-tuned financial copilots with QLoRA + PEFT delivering faster, more trustworthy insight loops for analysts.",
    metric: "45% performance lift · 60% faster inference",
    logo: "/logos/finsight.jpg",
    glow: "bg-cyan-400/20",
  },
  {
    title: "BioQuery",
    description:
      "Cohere-powered knowledge engine turning 600+ NASA bioscience papers into an intuitive RAG interface.",
    metric: "Galactic Impact Award · NASA Space Apps 2025",
    logo: "/logos/bioquery.jpg",
    glow: "bg-purple-400/20",
  },
  {
    title: "AdaptIQ",
    description:
      "Adaptive learning platform pairing Gemini tutors with personalized scheduling to help 500+ learners progress.",
    metric: "Improved retention for every cohort",
    logo: "/logos/adaptiq.jpg",
    glow: "bg-emerald-400/20",
  },
  {
    title: "Recognition",
    description:
      "From hackathon podiums to industry internships, I love collaborating on ideas that shape how we learn and build.",
    metric: "+ Awards & internships",
    icon: Trophy,
    glow: "bg-primary/20",
  },
];

export function ImpactHighlights() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerChildren(0.1)}
      className="mt-16 space-y-8"
    >
      <motion.div variants={fadeInUp} className="max-w-2xl space-y-3">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Impact that stays with people
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg">
          Every project blends rigorous engineering with thoughtful, human-centered UX—so teams can ship reliable AI that feels approachable.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="grid gap-5 md:grid-cols-2"
      >
        {HIGHLIGHTS.map((highlight) => {
          const Icon = highlight.icon ?? ArrowUpRight;

          return (
            <motion.article
              key={highlight.title}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-slate-900/40 p-6 shadow-[0_30px_80px_-60px_rgba(56,189,248,0.7)] transition-transform hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className={`absolute right-[-4rem] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full ${highlight.glow ?? "bg-primary/20"} blur-3xl`}
                />
              </div>
              <div className="relative flex flex-col gap-4">
                {highlight.logo ? (
                  <ProjectLogo name={highlight.title} src={highlight.logo} />
                ) : (
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                )}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
                <p className="text-sm font-medium text-primary/90">
                  {highlight.metric}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
