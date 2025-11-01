"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { cn } from "@/lib/utils";

const VIDEO_PLAYBACK_RATE = 4;

const HERO_BUTTONS = [
  {
    label: "View Model on Hugging Face",
    href: "https://huggingface.co/zahemen9900/finsight-ai",
    icon: ArrowUpRight,
    variant: "default" as const,
  },
  {
    label: "Try Colab Demo",
    href: "https://colab.research.google.com/drive/1vpgADgpnlZ4wIAxOL79HDzAuQHG9RB-X?usp=sharing",
    icon: ExternalLink,
    variant: "secondary" as const,
  },
];

const HERO_METRICS = [
  { label: "BLEU improvement", value: "+135%" },
  { label: "ROUGE-2 lift", value: "+79%" },
  { label: "Training time", value: "16 hrs" },
];

const RESULT_CHARTS = [
  {
    src: "/projects/finsight/radar_chart_20250306_121621.webp",
    alt: "Radar chart comparing FinSightAI evaluation metrics",
    caption: "Balanced gains across every evaluation metric."
  },
  {
    src: "/projects/finsight/rouge1_comparison_20250306_121621.webp",
    alt: "ROUGE-1 comparison chart for FinSightAI",
    caption: "ROUGE-1: +10.37% unigram precision for cleaner explanations."
  },
  {
    src: "/projects/finsight/rouge2_comparison_20250306_121621.webp",
    alt: "ROUGE-2 comparison chart for FinSightAI",
    caption: "ROUGE-2: +79% phrase accuracy in domain vocabulary."
  },
  {
    src: "/projects/finsight/rougeL_comparison_20250306_121621.webp",
    alt: "ROUGE-L comparison chart for FinSightAI",
    caption: "ROUGE-L: +24% cohesion in longer financial narratives."
  },
  {
    src: "/projects/finsight/bleu_comparison_20250306_121621.webp",
    alt: "BLEU comparison chart for FinSightAI",
    caption: "BLEU: +135% precision over base SmolLM2 responses."
  },
  {
    src: "/projects/finsight/response_distributions_20250306_121621.webp",
    alt: "Distribution chart of FinSightAI responses",
    caption: "Consistent response control across conversation styles."
  },
  {
    src: "/projects/finsight/overall_improvements_20250306_121621.webp",
    alt: "Overall improvement heatmap for FinSightAI",
    caption: "Heatmap of metric shifts across the evaluation suite."
  },
];

const INSIGHT_CARDS = [
  {
    title: "Efficient fine-tuning",
    description:
      "Completed on an RTX 3050 (6GB VRAM) in under eight hours using QLoRA + Unsloth accelerations.",
  },
  {
    title: "Precision without bloat",
    description:
      "Adapter weights add just 280MB, keeping deployment lightweight for production chat agents.",
  },
  {
    title: "Latency preserved",
    description:
      "Inference speed matches the base SmolLM2 model, making FinSightAI viable for live advisory flows.",
  },
  {
    title: "Metrics that matter",
    description:
      "Real financial benchmarks show gains across sentiment, definitions, and long-form advisory guidance.",
  },
];

const ARCHITECTURE_TABLE = [
  { heading: "Base Model", items: ["SmolLM2-1.7B-Instruct"] },
  { heading: "Fine-tuning Stack", items: ["QLoRA", "PEFT", "Unsloth"] },
  { heading: "Quantization", items: ["4-bit NF4", "Double quantization"] },
  { heading: "Training Hardware", items: ["NVIDIA RTX 3050", "6GB VRAM"] },
  { heading: "Training Window", items: ["~16 hours", "46.5M tokens"] },
  { heading: "Dataset", items: ["10.9K financial conversations", "Reddit + curated advisory dialogs"] },
];

const COMPARISON_EXAMPLES = [
  {
    prompt: "Explain price-to-earnings ratio to a new investor.",
    base:
      "The price-to-earnings ratio compares a company's share price to its earnings per share. It's used to determine valuation.",
    finsight:
      "The price-to-earnings (P/E) ratio compares a company's share price to the earnings it generates per share. A higher P/E often signals stronger growth expectations, while a lower P/E can indicate undervaluation or rising risk. Always compare P/E within the same sector and alongside metrics like earnings quality and debt load to understand the full picture.",
  },
  {
    prompt: "Summarize Tesla's latest 10-K highlights in two points.",
    base:
      "Tesla reported revenue growth and mentioned expansion plans. The company continues investing in products.",
    finsight:
      "• Revenue climbed 19% year-over-year, led by Model Y deliveries and energy storage deployments.\n• Operating margin compressed 180 bps due to price cuts, but cash reserves of $26B sustain R&D and new Gigafactory build-outs.",
  },
];

const PAPER_SNIPPETS = [
  "FinSightAI demonstrates that small models, when fine-tuned with precision adapters, can match larger systems in specialized reasoning tasks.",
  "The QLoRA pipeline, paired with double quantization and NF4, kept memory usage low enough to iterate rapidly on commodity hardware.",
];

const DEPLOYMENT_CARDS = [
  {
    title: "Hosted on Hugging Face",
    description: "Public inference endpoint for quick experimentation and side-by-side comparisons.",
  },
  {
    title: "Adapter-first delivery",
    description: "PEFT adapters ship separately so teams can bring their own base model weights securely.",
  },
  {
    title: "Telemetry ready",
    description: "Integrates with analytics hooks for tracking prompt drift, compliance, and response quality.",
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

function TypingText({
  text,
  prefersReducedMotion,
}: {
  text: string;
  prefersReducedMotion: boolean;
}) {
  const [display, setDisplay] = useState(prefersReducedMotion ? text : "");
  const textRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });
  const shouldAnimate = !prefersReducedMotion;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!shouldAnimate) {
      const frameId = window.requestAnimationFrame(() => setDisplay(text));
      return () => window.cancelAnimationFrame(frameId);
    }

    if (!isInView) {
      return;
    }

    let intervalId: number | null = null;
    const frameId = window.requestAnimationFrame(() => {
      setDisplay("");
      let index = 0;
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplay(text.slice(0, index));

        if (index >= text.length && intervalId !== null) {
          window.clearInterval(intervalId);
          intervalId = null;
        }
      }, 18);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [isInView, shouldAnimate, text]);

  const content = shouldAnimate ? display : text;
  const showCursor = shouldAnimate && content.length < text.length;

  return (
    <div ref={textRef} className="whitespace-pre-line text-sm leading-6">
      {content}
      <span
        className={cn(
          "ml-1",
          showCursor ? "animate-pulse text-cyan-200/80" : "text-transparent"
        )}
      >
        ▌
      </span>
    </div>
  );
}

export function FinSightPage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  usePlaybackRate(heroVideoRef);

  return (
    <div className="space-y-24 pb-24">
      <motion.section
        className="relative overflow-hidden rounded-[3rem] border border-cyan-300/30 bg-[radial-gradient(circle_at_top,rgba(30,64,175,0.3),transparent_60%)] p-8 shadow-[0_0_90px_-20px_rgba(56,189,248,0.55)] sm:p-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(15,118,110,0.18),transparent_35%,rgba(56,189,248,0.24)_80%)]" />
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <div className="flex justify-start">
            <Button
              asChild
              variant="secondary"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white hover:border-cyan-200/60 hover:bg-white/20"
            >
              <Link href="/projects">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
          </div>
          <motion.span
            layoutId="project-badge-finsight"
            className="text-xs uppercase tracking-[0.4em] text-white/70"
          >
            Small models. Big financial insight.
          </motion.span>
          <motion.h1
            layoutId="project-title-finsight"
            className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
          >
            FinSightAI: Precision-grade financial reasoning for compact models
          </motion.h1>
          <motion.p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
            Fine-tuned with QLoRA so finance teams get advisory-quality insight without heavyweight infrastructure.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {HERO_BUTTONS.map((button) => {
              const Icon = button.icon;
              const isDefault = button.variant === "default";
              return (
                <Button
                  key={button.label}
                  asChild
                  variant={isDefault ? "default" : "outline"}
                  className={cn(
                    "group flex items-center gap-2 rounded-full px-7 py-3 text-sm uppercase tracking-[0.3em]",
                    isDefault
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
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="space-y-1 text-white">
                <p className="text-3xl font-semibold">{metric.value}</p>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative mt-8 min-h-[480px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-slate-950/50 shadow-[0_0_70px_-18px_rgba(56,189,248,0.5)] sm:min-h-[560px]"
          layoutId="project-image-finsight"
        >
          <video
            ref={heroVideoRef}
            src="/projects/finsight/demo-video.mp4"
            className="h-full w-full object-cover"
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            controls={!!prefersReducedMotion}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950/90 to-transparent" />
        </motion.div>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="grid gap-12 rounded-[2.75rem] border border-white/15 bg-slate-950/70 p-12 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-6 text-white/80">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Built to democratize enterprise-grade financial intelligence
          </h2>
          <p className="text-base leading-7">
            FinSightAI packages deep financial reasoning into a model that deploys anywhere. It listens to company filings, retail chatter, and advisory prompts—responding with analyst-level clarity while respecting latency budgets.
          </p>
          <p className="text-sm leading-7 text-white/65">
            The project started as a research sprint to validate that small models could rival heavyweight stacks when paired with targeted data and precision adapters. The result is a resilient financial copilot ready for live workflows.
          </p>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/5">
          <Image
            src="/projects/finsight/radar_chart_20250306_121621.webp"
            alt="FinSightAI evaluation radar chart"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/30" />
        </div>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="grid gap-12 rounded-[2.75rem] border border-white/15 bg-slate-950/75 p-12 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="space-y-6 text-white/80">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            QLoRA architecture engineered for focus
          </h2>
          <p className="text-base leading-7">
            SmolLM2 stays frozen and quantized, while low-rank adapters learn the language of finance—earnings nuance, balance sheet signals, and conversational tone. NF4 quantization keeps memory lean so iteration stays fast.
          </p>
          <p className="text-sm leading-7 text-white/65">
            Each adapter block is profiled with activation logging, ensuring gradients emphasize compliance, clarity, and practical recommendation tone.
          </p>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/5">
          <Image
            src="/projects/finsight/overall_improvements_20250306_121621.webp"
            alt="FinSightAI overall improvement heatmap"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
          <div className="absolute inset-0 bg-slate-950/30" />
        </div>
      </motion.section>

      <motion.section
        variants={staggerChildren(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="space-y-3 text-white">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Performance snapshots
          </h2>
          <p className="max-w-2xl text-sm text-white/70">
            Drag through FinSightAI&rsquo;s evaluation gallery—each chart maps a different dimension of improvement after QLoRA fine-tuning.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="-mx-4 overflow-x-auto px-4 pb-4"
        >
          <div className="flex snap-x snap-mandatory gap-6">
            {RESULT_CHARTS.map((chart) => (
              <div
                key={chart.src}
                className="snap-center shrink-0 rounded-[2.5rem] border border-white/15 bg-slate-950/70 p-4"
              >
                <div className="relative h-[260px] w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-80 sm:w-[460px]">
                  <Image
                    src={chart.src}
                    alt={chart.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 80vw"
                  />
                </div>
                <p className="mt-4 max-w-xs text-sm text-white/70">
                  {chart.caption}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[2.75rem] border border-white/15 bg-slate-950/70 p-12"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSIGHT_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/75 transition hover:border-cyan-200/40 hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[2.75rem] border border-white/15 bg-slate-950/75 p-12"
      >
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Technical architecture snapshot
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ARCHITECTURE_TABLE.map((row) => (
            <div
              key={row.heading}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white/75"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {row.heading}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {row.items.map((item) => (
                  <li key={item}>{item}</li>
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
        className="rounded-[2.75rem] border border-white/15 bg-slate-950/80 p-12"
      >
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Before vs. after comparisons
        </h2>
        <div className="mt-8 space-y-6">
          {COMPARISON_EXAMPLES.map((example) => (
            <div
              key={example.prompt}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/75"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Prompt
              </p>
              <p className="mt-2 text-sm text-white/80">{example.prompt}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Base SmolLM2
                  </p>
                  <p className="mt-2 text-sm leading-6">{example.base}</p>
                </div>
                <div className="rounded-2xl border border-cyan-200/50 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                    FinSightAI response
                  </p>
                  <div className="mt-2">
                    <TypingText
                      text={example.finsight}
                      prefersReducedMotion={!!prefersReducedMotion}
                    />
                  </div>
                </div>
              </div>
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
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Research notes
        </h2>
        <div className="mt-6 space-y-4 text-white/75">
          {PAPER_SNIPPETS.map((snippet, index) => (
            <p key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6">
              {snippet}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            asChild
            variant="secondary"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white hover:border-white/40 hover:bg-white/20"
          >
            <Link href="https://huggingface.co/zahemen9900/finsight-ai" target="_blank" rel="noreferrer">
              Explore the model
            </Link>
          </Button>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-sm uppercase tracking-[0.3em]"
          >
            <Link href="https://github.com/zahemen9900" target="_blank" rel="noreferrer">
              Read full paper
            </Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[2.75rem] border border-white/15 bg-slate-950/75 p-12"
      >
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Deployment pathways
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {DEPLOYMENT_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/75"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-6">{card.description}</p>
            </div>
          ))}
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
          “FinSightAI proved the thesis: you can ship enterprise-ready financial reasoning on a compact model—if you respect data, adapters, and measurement.”
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
