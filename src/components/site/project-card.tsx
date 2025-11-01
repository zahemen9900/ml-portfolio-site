"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProjectShowcase } from "@/data/projects";

const imageTransition: Transition = { duration: 0.5 };

type ProjectCardProps = {
  project: ProjectShowcase;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 1;
  const isLocked = project.status === "coming-soon";

  return (
    <motion.article
      layoutId={`project-card-${project.id}`}
      variants={fadeInUp}
      className={cn(
        "group relative grid items-stretch gap-8 overflow-hidden rounded-[2.5rem] border border-border/60 bg-slate-950/80 p-6 backdrop-blur-xl transition md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[2.5rem] before:bg-gradient-to-br before:opacity-70 before:transition-opacity before:duration-500",
        "hover:border-primary/40 hover:before:opacity-90",
        isLocked && "opacity-80 hover:border-border/60 hover:before:opacity-70"
      )}
    >
      <div
        className={cn(
          "relative flex flex-col justify-between gap-8 overflow-hidden rounded-[2rem] p-6 sm:p-10",
          "before:absolute before:inset-0 before:-z-10 before:bg-slate-950/65 before:transition before:duration-500 before:content-[''] before:rounded-[inherit]",
          "after:pointer-events-none after:absolute after:inset-0 after:-z-20 after:bg-gradient-to-br after:opacity-90 after:transition-colors after:duration-500 after:rounded-[inherit]",
          isEven
            ? "md:order-1 md:rounded-l-[2rem] md:rounded-r-none"
            : "md:order-2 md:rounded-l-none md:rounded-r-[2rem]",
          isLocked
            ? "after:from-slate-700/80 after:via-slate-900/70 after:to-slate-950/80"
            : cn("after:from-foreground/10", project.gradient)
        )}
      >
        <div className="space-y-5">
          <motion.span
            layoutId={`project-badge-${project.id}`}
            className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
          >
            Featured Project
          </motion.span>
          <div className="space-y-3">
            <motion.h3
              layoutId={`project-title-${project.id}`}
              className="font-display text-3xl font-semibold text-foreground sm:text-4xl"
            >
              {project.title}
            </motion.h3>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70">
              {project.tagline}
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 px-4 py-1.5 text-[0.7rem]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          {isLocked ? (
            <Button
              variant="outline"
              disabled
              className="flex items-center gap-2 rounded-full border-white/40 bg-transparent px-6 py-2 text-sm uppercase tracking-[0.3em] text-white/70"
            >
              <Lock className="size-4" />
              {project.ctaLabel}
            </Button>
          ) : (
            <Button
              asChild
              variant="secondary"
              className="rounded-full bg-white/10 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white hover:bg-primary/20 hover:text-primary"
            >
              <Link href={project.href}>
                <span className="flex items-center gap-2">
                  {project.ctaLabel}
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </Button>
          )}
        </div>
      </div>
      <motion.div
        layoutId={`project-image-${project.id}`}
        transition={imageTransition}
        className={cn(
          "relative min-h-[320px] overflow-hidden rounded-[2rem] border border-border/60",
          "bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80",
          isEven ? "md:order-2" : "md:order-1"
        )}
      >
        {project.image ? (
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05, opacity: 0.65 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={imageTransition}
          >
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
            <span className="text-sm uppercase tracking-[0.3em] text-white/60">
              Preview Coming Soon
            </span>
          </div>
        )}
        {isLocked && (
          <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm" />
        )}
      </motion.div>
    </motion.article>
  );
}
