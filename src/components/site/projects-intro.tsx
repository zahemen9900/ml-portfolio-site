"use client";

import { useCallback } from "react";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ProjectsIntro() {
  const handleScroll = useCallback(() => {
    const target = document.getElementById("projects-grid");
    if (!target) return;
    const OFFSET = 72;
    const y = target.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-slate-950/80 p-10 sm:p-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/70">
          Portfolio Showcase
        </p>
        <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
          Every project starts with curiosity, evolves through rigor, and ends with impact.
        </h1>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          These are the intelligent systems I have crafted—bridging data, design, and deployment to help teams move faster and uncover deeper insight.
        </p>
        <div className="pt-6">
          <motion.button
            type="button"
            onClick={handleScroll}
            className="mx-auto flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary transition hover:border-primary/60 hover:bg-primary/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
            aria-label="Scroll to projects"
          >
            See Projects
            <ArrowDown className="size-5" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
