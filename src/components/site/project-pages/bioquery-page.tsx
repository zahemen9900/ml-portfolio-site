"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const VIDEO_PLAYBACK_RATE = 3;

const HERO_BUTTONS = [
  {
    label: "Visit BioQuery",
    href: "https://bioquery.vercel.app",
    icon: ArrowUpRight,
    variant: "default" as const,
  },
  {
    label: "View NASA Challenge",
    href: "https://www.spaceappschallenge.org/2025/find-a-team/astro-voyagers1/?tab=project",
    icon: ExternalLink,
    variant: "secondary" as const,
  },
];

const FEATURES = [
  {
    id: "natural-language",
    title: "Natural-language research engine",
    description:
      "Ask BioQuery anything about microgravity, genomics, or bioscience missions and receive grounded answers sourced from NASA's corpus.",
    bullets: [
      "Retrieval-Augmented Generation pipeline tuned for bioscience questions.",
      "Scientist-friendly prompt templates that surface citations on every answer.",
      "Instant query suggestions that adapt as researchers explore.",
    ],
    media: "/projects/bioquery/search-engine-feature1.mp4",
    align: "left" as const,
  },
  {
    id: "knowledge-graphs",
    title: "Cohere embeddings meet knowledge graphs",
    description:
      "BioQuery connects related publications with an interactive knowledge graph so teams can see how mission findings relate across disciplines.",
    bullets: [
      "Topic clusters bloom as you pan across connected research.",
      "Edge weights reveal the strength of shared concepts and experiments.",
      "Adaptive graph filtering keeps exploratory flow smooth on any device.",
    ],
    media: "/projects/bioquery/knowledge-graphs-feature2.mp4",
    align: "right" as const,
  },
  {
    id: "interfaces",
    title: "Agentic interface built for rapid insight",
    description:
      "Onboarding to insight happens in seconds with a minimalist interface powered by Next.js, streaming generation, and thoughtful agent UX.",
    bullets: [
      "Inline research timelines, summarization panes, and export-ready briefs.",
      "Responsive layout optimized for mission control tablets and desktops.",
      "Supercharged by Vercel edge functions and Cohere embeddings for speed.",
    ],
    media: "/projects/bioquery/summary-feature3.mp4",
    align: "left" as const,
  },
];

const METRICS = [
  { label: "NASA bioscience papers indexed", value: "600+" },
  { label: "Prototype build time", value: "48 hrs" },
  { label: "Core AI systems", value: "RAG + Knowledge Graph" },
];

const TECH_STACK = [
  {
    heading: "Modeling",
    items: ["Cohere Embeddings", "Retrieval-Augmented Generation", "Knowledge Graphs"],
  },
  {
    heading: "Frontend",
    items: ["Next.js 15", "TailwindCSS", "Framer Motion"],
  },
  {
    heading: "Deployment",
    items: ["Vercel", "Edge Functions", "Content Caching"],
  },
];

function usePlaybackRate(ref: React.RefObject<HTMLVideoElement>) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const applyRate = () => {
      node.playbackRate = VIDEO_PLAYBACK_RATE;
    };

    if (node.readyState >= 2) {
      applyRate();
    }

    node.addEventListener("loadedmetadata", applyRate);
    node.addEventListener("loadeddata", applyRate);

    return () => {
      node.removeEventListener("loadedmetadata", applyRate);
      node.removeEventListener("loadeddata", applyRate);
    };
  }, [ref]);
}

function AutoPlayVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  usePlaybackRate(ref);

  return (
    <video
      ref={ref}
      src={src}
      className={cn(
        "h-full w-full rounded-[2.25rem] border border-border/70 bg-black/40 object-cover",
        className
      )}
      autoPlay={!prefersReducedMotion}
      muted
      loop
      playsInline
      controls={!!prefersReducedMotion}
    />
  );
}

export function BioQueryPage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  usePlaybackRate(heroVideoRef);

  return (
    <div className="space-y-24 pb-24">
      <motion.section
        className="relative overflow-hidden rounded-[3rem] border border-primary/30 bg-slate-950/80 p-12 shadow-[0_0_80px_-12px_rgba(56,189,248,0.4)]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_60%)]" />
        <div className="mx-auto max-w-4xl space-y-10 text-center">
          <div className="flex justify-start">
            <Button
              asChild
              variant="secondary"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary hover:border-primary/50 hover:bg-primary/20"
            >
              <Link href="/projects">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
          </div>
          <div className="space-y-6">
            <motion.h1
              layoutId="project-title-bioquery"
              className="font-display text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl"
            >
              BioQuery
            </motion.h1>
            <motion.p className="text-lg text-primary/80 sm:text-xl">
              AI-powered space biology knowledge engine for natural language discovery beyond Earth.
            </motion.p>
          </div>
          <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Built during NASA Space Apps 2025 by the Astro-Voyagers team, BioQuery transforms hundreds of NASA bioscience publications into a conversational research assistant so mission planners and scientists can ask better questions, faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {HERO_BUTTONS.map((button) => {
              const Icon = button.icon;
              const variant = button.variant === "default" ? "default" : "secondary";
              return (
                <Button
                  key={button.label}
                  asChild
                  variant={variant === "default" ? "default" : "outline"}
                  className={cn(
                    "group flex items-center gap-2 rounded-full px-7 py-3 text-sm uppercase tracking-[0.3em]",
                    variant === "default"
                      ? "bg-primary text-slate-950 hover:bg-primary/90"
                      : "border border-primary/40 bg-transparent text-primary hover:border-primary/60 hover:bg-primary/10"
                  )}
                >
                  <Link href={button.href} target="_blank" rel="noreferrer">
                    {button.label}
                    <Icon className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            {METRICS.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative mt-12 min-h-[500px] overflow-hidden rounded-[2.5rem] border border-primary/40 bg-slate-950/60 shadow-[0_0_60px_-12px_rgba(56,189,248,0.3)] sm:min-h-[600px]"
          layoutId="project-image-bioquery"
        >
          <video
            ref={heroVideoRef}
            src="/projects/bioquery/main-demo.mp4"
            className="h-full w-full object-cover"
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            controls={!!prefersReducedMotion}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-slate-950/90 to-transparent" />
        </motion.div>
      </motion.section>

      <motion.section
        className="grid gap-10 rounded-[2.5rem] border border-border/60 bg-slate-950/70 p-10 lg:grid-cols-[1.15fr_0.85fr]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Built to accelerate bioscience breakthroughs
          </h2>
          <p className="text-base leading-7 text-muted-foreground">
            BioQuery was designed for scientists who need to synthesize findings across mission logs, laboratory notes, and flight experiments. By grounding AI responses in verified NASA research, the experience keeps curiosity and scientific rigor in the same loop.
          </p>
          <p className="text-sm leading-7 text-muted-foreground/90">
            The Astro-Voyagers team blended AI, data visualization, and storytelling to ship a prototype that feels equal parts lab notebook and mission console. Every interaction is engineered to surface signal in complex data—within seconds.
          </p>
        </div>
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-4xl border border-border/50 bg-slate-900/60">
          <Image
            src="/projects/card-images/bioquery.webp"
            alt="BioQuery interface collage"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-slate-950/60 via-transparent to-slate-950/40" />
        </div>
      </motion.section>

      <div className="space-y-20">
        {FEATURES.map((feature, idx) => {
          const isTextLeft = idx % 2 === 0;
          return (
            <motion.section
              key={feature.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={cn(
                "grid gap-10 rounded-[3rem] border border-primary/30 bg-slate-950/80 p-12 shadow-[0_0_60px_-12px_rgba(100,116,139,0.3)]",
                isTextLeft
                  ? "lg:grid-cols-[0.9fr_1.35fr]"
                  : "lg:grid-cols-[1.35fr_0.9fr]"
              )}
            >
              <div
                className={cn("space-y-7", isTextLeft ? "lg:order-1" : "lg:order-2")}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
                  Feature {idx + 1}
                </p>
                <h3 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  {feature.title}
                </h3>
                <p className="text-base leading-7 text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <ArrowDownRight className="mt-1 size-4 text-primary/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "order-2 min-h-[480px] overflow-hidden rounded-[2.25rem] border border-primary/40 bg-slate-950/60 shadow-[0_0_40px_-8px_rgba(56,189,248,0.25)] sm:min-h-[560px]",
                  isTextLeft ? "lg:order-2" : "lg:order-1"
                )}
              >
                <AutoPlayVideo src={feature.media} className="object-right" />
              </div>
            </motion.section>
          );
        })}
      </div>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[2.5rem] border border-border/60 bg-slate-950/75 p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5">
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Recognized for galactic impact
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              BioQuery earned the Galactic Impact Award at NASA Space Apps Kumasi 2025. The judges highlighted its potential to scale scientific discovery workflows and its blend of rigorous engineering with immersive UX storytelling.
            </p>
            <div className="grid gap-4 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-primary/80">600+</span> bioscience publications processed into retrieval-ready knowledge.
              </p>
              <p>
                <span className="font-semibold text-primary/80">48-hour sprint</span> from concept to production-ready demo.
              </p>
              <p>
                <span className="font-semibold text-primary/80">Awarded</span> for human-centered AI that advances exploration beyond Earth.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {TECH_STACK.map((stack) => (
              <div
                key={stack.heading}
                className="rounded-3xl border border-border/60 bg-slate-900/60 p-6"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
                  {stack.heading}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {stack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[2.5rem] border border-border/60 bg-slate-950/70 p-10"
      >
        <div className="space-y-6 text-center">
          <blockquote className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            “BioQuery reminded me how far you can go in a weekend when passion meets purpose. It’s more than a hackathon project — it’s a vision of how AI can accelerate discovery beyond Earth.”
          </blockquote>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              className="rounded-full border border-primary/40 bg-primary/10 px-6 py-2 text-sm uppercase tracking-[0.3em] text-primary hover:border-primary/60 hover:bg-primary/20"
            >
              <Link href="mailto:davidzahemenyeboah@gmail.com">Start a Conversation</Link>
            </Button>
            <Button asChild className="rounded-full px-6 py-2 text-sm uppercase tracking-[0.3em]">
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
