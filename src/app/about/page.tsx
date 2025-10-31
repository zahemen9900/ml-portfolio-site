import type { Metadata } from "next";

import { AboutIntro } from "@/components/site/about-intro";
import { AwardsList } from "@/components/site/awards-list";
import { SkillsGrid } from "@/components/site/skills-grid";
import { TimelineCard } from "@/components/site/timeline-card";
import { Card, CardContent } from "@/components/ui/card";
import { awards } from "@/data/awards";
import { skillCategories } from "@/data/skills";
import { timelineEntries } from "@/data/timeline";

export const metadata: Metadata = {
  title: "About | David Zahemen Yeboah",
  description:
    "Discover David Zahemen Yeboah's journey as an AI & Software Engineer crafting purpose-driven intelligent systems.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <AboutIntro />

      <section className="space-y-12">
        <div className="space-y-3">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Journey in motion
          </h2>
          <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
            A timeline of moments that shaped how I build—blending research, rapid experimentation, and human-centered design.
          </p>
        </div>
  <ol className="relative space-y-16 md:space-y-20 md:pl-6 before:absolute before:left-8 before:top-10 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-border/60 before:to-transparent md:before:left-8">
          {timelineEntries.map((entry, index) => (
            <TimelineCard key={entry.id} entry={entry} index={index} />
          ))}
        </ol>
      </section>

      <SkillsGrid categories={skillCategories} />
      <AwardsList awards={awards} />

      <section>
        <Card className="border-border/50 bg-slate-950/60 backdrop-blur">
          <CardContent className="space-y-4 p-6 text-center text-base leading-7 text-muted-foreground sm:p-10 sm:text-lg">
            <p>
              From campus labs to hackathon floors and international competitions, my journey has been about one thing—using AI to make impact.
            </p>
            <p className="font-display text-2xl text-foreground sm:text-3xl">
              Here&apos;s to building the next generation of intelligent systems that learn, adapt, and inspire. ⚡
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
