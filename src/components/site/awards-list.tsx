"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import type { Award } from "@/data/awards";

type AwardsListProps = {
  awards: Award[];
};

export function AwardsList({ awards }: AwardsListProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerChildren(0.08)}
      className="mt-20"
    >
      <motion.div variants={fadeInUp} className="max-w-2xl space-y-3">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Recognition & milestones
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg">
          Collaborating with brilliant teams has opened doors to awards, internships, and challenges that push my craft forward.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-10 grid gap-6 sm:grid-cols-2"
      >
        {awards.map((award) => (
          <Card
            key={`${award.title}-${award.year}`}
            className="border-border/50 bg-slate-950/60 backdrop-blur"
          >
            <CardContent className="flex h-full flex-col gap-4 p-6">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-muted-foreground">
                <Trophy className="size-5 text-primary" />
                <span>{award.year}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl text-foreground">
                  {award.title}
                </h3>
                <p className="text-sm font-medium text-primary/80">
                  {award.issuer}
                </p>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                {award.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
}
