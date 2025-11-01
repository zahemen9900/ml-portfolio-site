"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function ProjectsOutro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-slate-950/80 p-10 text-center sm:p-14"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),_transparent_55%)]" />
      <div className="mx-auto max-w-3xl space-y-6">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          These projects are experiments in building intelligent, human-centered systems.
        </h2>
        <p className="text-base leading-7 text-muted-foreground">
          Curious about collaborating on intelligent tools or want a deeper walkthrough? Let’s explore what we can create together.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            variant="secondary"
            className="rounded-full bg-primary/20 px-6 py-2 text-sm uppercase tracking-[0.3em] text-primary hover:bg-primary/30"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
