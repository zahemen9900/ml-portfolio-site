"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const VIDEO_PLAYBACK_RATE = 2;

const HERO_BUTTONS = [
  {
    label: "Explore Platform",
    href: "https://www.adapt-iq.app",
    icon: ArrowUpRight,
    variant: "default" as const,
  },
  {
    label: "View GitHub Repo",
    href: "https://github.com/zahemen9900",
    icon: ExternalLink,
    variant: "secondary" as const,
  },
];

const METRICS = [
  { label: "Learners supported", value: "500+" },
  { label: "Adaptive lessons served", value: "18k" },
  { label: "AI tutor satisfaction", value: "94%" },
];

const FEATURES = [
  {
    id: "personalized-paths",
    title: "Personalized learning paths",
    description:
      "Curricula adapt in real-time using progress data, confidence signals, and study preferences—so every learner gets the right challenge at the right moment.",
    bullets: [
      "Dynamic pacing that reshapes lesson order using difficulty heuristics.",
      "Goal-aware planning keeps deadlines and revisions in sync.",
      "Progress snapshots celebrate wins with delightful micro-interactions.",
    ],
    media: "/projects/adaptiq/curriculum-feature1.mp4",
  },
  {
    id: "aiden-assistant",
    title: "Aiden, your Gemini-powered tutor",
    description:
      "Context-aware coaching helps learners push through blockers, with Aiden referencing notes, resources, and prior attempts in every explanation.",
    bullets: [
      "Conversational hints tuned to your tone and learning style.",
      "Inline clarifications and rapid follow-ups powered by Gemini 2.5 Flash.",
      "Thread memory means Aiden remembers what you tried previously.",
    ],
    media: "/projects/adaptiq/aiden-feature2.mp4",
  },
  {
    id: "assignments-quizzes",
    title: "Assignments & quizzes that adapt",
    description:
      "Assessment moments feel custom-built: AdaptIQ calibrates question depth, feedback tone, and follow-up practice using performance signals.",
    bullets: [
      "Auto-generated assessments that mix recall, application, and reflection.",
      "Instant walkthroughs pinpoint exactly where understanding drifted.",
      "Challenge cards unlock when mastery signals say you’re ready to level up.",
    ],
    media: "/projects/adaptiq/schedule-quizzes-feature3.mp4",
  },
];

const ARCHITECTURE = [
  { layer: "Frontend", tech: ["React (Vite)", "TailwindCSS", "React Query"] },
  { layer: "Backend", tech: ["Firebase Auth", "Firestore", "Cloud Functions"] },
  { layer: "AI Layer", tech: ["Gemini 2.5 Flash Preview", "Vector Memory"] },
  { layer: "Analytics", tech: ["Firebase Analytics", "Custom Learning Signals"] },
  { layer: "Deployment", tech: ["Vercel", "Firebase Hosting"] },
];

const ROADMAP = [
  {
    title: "AI-powered resource curation",
    description: "Auto-build reading lists and practice sets from trusted sources tailored to current objectives.",
  },
  {
    title: "AdaptIQ Insights dashboard",
    description: "Single-pane analytics for mentors, surfacing engagement, pacing, and mastery at a glance.",
  },
  {
    title: "Mobile companion app",
    description: "Continue learning on the go with offline streaks, bite-sized prompts, and push reminders.",
  },
];

function usePlaybackRate(ref: React.RefObject<HTMLVideoElement | null>) {
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
        "h-full w-full rounded-[2.5rem] border border-white/10 bg-slate-950/40 object-cover",
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

export function AdaptIQPage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  usePlaybackRate(heroVideoRef);

  return (
    <div className="space-y-24 pb-24">
      <motion.section
        className="relative overflow-hidden rounded-[3rem] border border-violet-300/40 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.28),transparent_55%)] p-10 shadow-[0_0_90px_-20px_rgba(129,140,248,0.6)] sm:p-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(59,130,246,0.12),transparent_40%,rgba(168,85,247,0.2)_80%)]" />
        <div className="mx-auto max-w-5xl space-y-8 text-center">
          <div className="flex justify-start">
            <Button
              asChild
              variant="secondary"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white hover:border-violet-200/60 hover:bg-white/20"
            >
              <Link href="/projects">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            <motion.span
              layoutId="project-badge-adaptiq"
              className="text-xs uppercase tracking-[0.4em] text-white/70"
            >
              Personalized learning reinvented
            </motion.span>
            <motion.h1
              layoutId="project-title-adaptiq"
              className="font-display text-5xl font-semibold text-white sm:text-6xl lg:text-7xl"
            >
              AdaptIQ: The AI-powered learning companion
            </motion.h1>
            <motion.p className="text-lg text-white/70 sm:text-xl">
              Harnessing data, intelligence, and heart to craft learning journeys that feel human, responsive, and joyful.
            </motion.p>
          </div>
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
                      ? "bg-white text-slate-950 hover:bg-white/90"
                      : "border border-white/40 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
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
          <div className="flex flex-wrap justify-center gap-5 pt-1">
            {METRICS.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-3xl font-semibold text-white">{metric.value}</p>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative mt-8 min-h-[520px] overflow-hidden rounded-[2.75rem] border border-white/20 bg-slate-950/40 shadow-[0_0_70px_-18px_rgba(129,140,248,0.55)] sm:min-h-[620px]"
          layoutId="project-image-adaptiq"
        >
          <video
            ref={heroVideoRef}
            src="/projects/adaptiq/main-demo.mp4"
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
        className="grid gap-12 rounded-[2.75rem] border border-white/15 bg-slate-950/70 p-12 lg:grid-cols-[1.05fr_0.95fr]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Learning that feels custom-built for you
          </h2>
          <p className="text-base leading-7 text-white/70">
            AdaptIQ is crafted for students and mentors who believe learning should flex to each person. It listens for stress, celebrates consistency, and pairs delightful UI with Gemini-powered intelligence to craft a learning loop that sticks.
          </p>
          <p className="text-sm leading-7 text-white/60">
            The platform fuses real-time analytics, adaptive sequencing, and conversational tutoring into a single canvas. When a learner opens AdaptIQ, it already knows what comes next—and why it matters.
          </p>
        </div>
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[2.25rem] border border-white/15 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.35),transparent_60%)]">
          <Image
            src="/projects/adaptiq/inspiration.webp"
            alt="AdaptIQ inspiration moodboard"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
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
                "grid gap-10 rounded-[3rem] border border-white/15 bg-slate-950/80 p-12 shadow-[0_0_60px_-18px_rgba(129,140,248,0.4)]",
                isTextLeft
                  ? "lg:grid-cols-[0.85fr_1.4fr]"
                  : "lg:grid-cols-[1.4fr_0.85fr]"
              )}
            >
              <div
                className={cn(
                  "space-y-7",
                  isTextLeft ? "lg:order-1" : "lg:order-2"
                )}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Feature {idx + 1}
                </p>
                <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {feature.title}
                </h3>
                <p className="text-base leading-7 text-white/70">
                  {feature.description}
                </p>
                <ul className="space-y-4 text-sm leading-6 text-white/65">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <ArrowDownRight className="mt-1 size-4 text-violet-300/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "order-2 min-h-[480px] overflow-hidden rounded-[2.25rem] border border-white/20 bg-slate-950/60 shadow-[0_0_45px_-12px_rgba(147,197,253,0.35)] sm:min-h-[560px]",
                  isTextLeft ? "lg:order-2" : "lg:order-1"
                )}
              >
                <AutoPlayVideo src={feature.media} />
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
        className="rounded-[2.75rem] border border-white/15 bg-slate-950/75 p-12"
      >
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          System architecture snapshot
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ARCHITECTURE.map((item) => (
            <div
              key={item.layer}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                {item.layer}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {item.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[2.75rem] border border-white/15 bg-slate-950/70 p-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Roadmap in motion
            </h2>
            <p className="text-base leading-7 text-white/65">
              AdaptIQ keeps growing with educators in the loop. These upcoming milestones push access, insight, and delight even further.
            </p>
          </div>
          <div className="space-y-4">
            {ROADMAP.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/15 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.description}
                </p>
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
        className="rounded-[2.75rem] border border-white/15 bg-slate-950/80 p-12 text-center"
      >
        <blockquote className="mx-auto max-w-3xl text-lg leading-8 text-white/75">
          “AdaptIQ was built on the belief that AI can democratize education—giving every learner a personalized, intelligent companion to guide them through knowledge.”
        </blockquote>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            asChild
            variant="secondary"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white hover:border-white/40 hover:bg-white/20"
          >
            <Link href="mailto:davidzahemenyeboah@gmail.com">Start a Conversation</Link>
          </Button>
          <Button asChild className="rounded-full px-6 py-2 text-sm uppercase tracking-[0.3em]">
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
