"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import type { SkillCategory } from "@/data/skills";

type SkillsGridProps = {
  categories: SkillCategory[];
};

export function SkillsGrid({ categories }: SkillsGridProps) {
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
          Skills that bridge research and production
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg">
          From prototyping new model ideas to deploying reliable systems, I love connecting the dots between experimentation and real-world value.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        {categories.map((category) => (
          <Card
            key={category.name}
            className="border-border/50 bg-slate-950/60 backdrop-blur"
          >
            <CardContent className="flex h-full flex-col gap-4 p-6">
              <div>
                <h3 className="font-display text-xl text-foreground">
                  {category.name}
                </h3>
                <Separator className="mt-3 w-16 bg-primary/60" />
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 leading-6">
                    <span aria-hidden className="mt-2 size-2 rounded-full bg-primary/70" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
}
