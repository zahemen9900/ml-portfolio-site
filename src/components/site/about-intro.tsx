"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerChildren } from "@/lib/motion";

export function AboutIntro() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren(0.08)}
      className="space-y-6"
    >
      <motion.span
        variants={fadeInUp}
        className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-accent-foreground/90"
      >
        About David Zahemen Yeboah
      </motion.span>
      <motion.h1
        variants={fadeInUp}
        className="max-w-4xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
      >
        Crafting AI systems that feel thoughtful, inclusive, and incredibly useful.
      </motion.h1>
      <motion.div variants={fadeInUp}>
        <Card className="border-border/50 bg-slate-950/60 backdrop-blur">
          <CardContent className="space-y-4 p-6 text-base leading-7 text-muted-foreground sm:p-8 sm:text-lg">
            <p>
              During my time at <strong>KNUST</strong>, I majored in software engineering, artificial intelligence, and cybersecurity—disciplines that challenged me to ship reliable systems as often as I explore new research.
            </p>
            <p>
              That curiosity has taken me from transformer experiments in campus labs to hackathons, internships, and community projects. Along the way, I&apos;ve learned that the most meaningful AI experiences are both technically rigorous and deeply human.
            </p>
            <p>
              Today, I focus on building products that bridge intelligence and usability: copilots that make financial insights clearer, knowledge engines that help researchers ask better questions, and learning tools that adapt to each person.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
