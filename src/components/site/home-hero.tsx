"use client";

import { motion } from "framer-motion";

import { CallToAction } from "@/components/site/call-to-action";
import { fadeInUp, staggerChildren } from "@/lib/motion";

const impactStats = [
  { label: "LLM performance uplift", value: "45%+" },
  { label: "Users impacted", value: "500+" },
  { label: "Awards & recognitions", value: "2" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-800/40 p-8 shadow-[0_30px_120px_-50px_rgba(56,189,248,0.45)] sm:p-12">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 right-[-6rem] h-72 w-72 rounded-full bg-purple-500/25 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.12)}
        className="relative flex flex-col gap-8 text-center sm:text-left"
      >
        <motion.span
          variants={fadeInUp}
          className="w-fit self-center rounded-full border border-accent/50 bg-accent/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-accent-foreground/90 sm:self-start"
        >
          David Zahemen Yeboah
        </motion.span>

        <div className="mx-auto max-w-3xl space-y-6 sm:mx-0">
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl"
          >
            Building intelligent systems that learn, adapt, and inspire.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Friendly by nature, professional by craft. I design AI-first experiences—from fine-tuned financial copilots to immersive learning platforms—that feel helpful, human, and trustworthy.
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-6 sm:flex-row sm:items-center"
        >
          <CallToAction />
          <div className="flex items-center gap-3 text-left text-sm text-muted-foreground">
            <span className="h-8 w-8 rounded-full bg-primary/20" />
            <div>
              <p className="font-medium text-foreground">Open to collaborations</p>
              <p>LLM systems · ML research · developer tooling</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid gap-4 sm:grid-cols-3"
        >
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/40 bg-slate-900/40 px-5 py-4 text-left shadow-inner shadow-slate-900/20"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
