"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fadeInUp } from "@/lib/motion";
import type { TimelineEntry } from "@/data/timeline";

const ACCENT_RING: Record<TimelineEntry["accent"], string> = {
  cyan: "from-cyan-400/60",
  purple: "from-purple-400/60",
  emerald: "from-emerald-400/60",
  amber: "from-amber-400/60",
};

type TimelineCardProps = {
  entry: TimelineEntry;
  index: number;
};

export function TimelineCard({ entry, index }: TimelineCardProps) {
  const previewImages = useMemo(
    () => entry.gallery.slice(0, 3),
    [entry.gallery]
  );

  return (
    <Dialog>
      <motion.li
        variants={fadeInUp}
        className="group relative flex w-full flex-col gap-6 md:flex-row md:gap-12"
      >
        <div className="md:w-32">
          <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-6">
            <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-900/80">
              <span
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${ACCENT_RING[entry.accent]} blur-2xl`}
                aria-hidden
              />
              <span className="relative text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                {index + 1}
              </span>
            </span>
            <span className="hidden h-full w-px grow rounded bg-gradient-to-b from-transparent via-border/60 to-transparent md:block" />
          </div>
        </div>
        <DialogTrigger asChild>
          <button
            type="button"
            className="flex-1 text-left outline-none"
            aria-label={`Open story for ${entry.title}`}
          >
            <Card className="relative overflow-hidden border-border/50 bg-slate-950/60 backdrop-blur transition duration-300 before:pointer-events-none before:absolute before:inset-[-1px] before:rounded-[calc(theme(borderRadius.3xl)+1rem)] before:bg-gradient-to-br before:from-transparent before:via-primary/10 before:to-transparent before:opacity-0 before:blur-2xl before:transition-opacity group-hover:border-primary/50 group-hover:before:opacity-100 focus-visible:border-primary focus-visible:before:opacity-100">
              <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  <span>{entry.period}</span>
                  {entry.location && <span>• {entry.location}</span>}
                  <Badge variant="secondary" className="bg-transparent font-semibold">
                    {entry.badge}
                  </Badge>
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {entry.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {entry.summary}
                  </p>
                </div>
                <p className="text-sm leading-7 text-muted-foreground/90">
                  {entry.description}
                </p>
                <ul className="grid gap-2 text-sm text-foreground/90">
                  {entry.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="mt-1 size-1.5 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center -space-x-4">
                    {previewImages.map((src, idx) => (
                      <div
                        key={src}
                        className="relative size-14 overflow-hidden rounded-2xl border border-border/40 bg-slate-900/60 shadow-lg shadow-slate-950/30"
                        style={{ zIndex: previewImages.length - idx }}
                      >
                        <Image
                          src={src}
                          alt={`${entry.title} preview ${idx + 1}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                    View story
                  </span>
                </div>
              </CardContent>
            </Card>
          </button>
        </DialogTrigger>
        <TimelineDialog entry={entry} />
      </motion.li>
    </Dialog>
  );
}

function TimelineDialog({ entry }: { entry: TimelineEntry }) {
  const [current, setCurrent] = useState(0);

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + entry.gallery.length) % entry.gallery.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % entry.gallery.length);
  };

  const handleSelect = (index: number) => {
    setCurrent(index);
  };

  return (
    <DialogContent
      className="max-h-[90vh] w-full max-w-[min(98vw,1600px)] gap-0 overflow-hidden border-border/60 bg-slate-950 p-0 text-foreground sm:max-w-[min(94vw,1400px)] md:w-[min(92vw,1400px)] lg:max-w-[min(92vw,1200px)]"
      showCloseButton={false}
    >
      <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        {/* Left Panel: Text Content */}
        <div className="flex max-h-[90vh] flex-col overflow-y-auto p-8 md:p-10">
          <DialogHeader className="mb-6 space-y-3 text-left">
            <DialogTitle className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              {entry.title}
            </DialogTitle>
            <DialogDescription className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              {entry.period}
              {entry.location ? ` • ${entry.location}` : ""}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-base leading-7 text-muted-foreground">
              {entry.description}
            </p>
            <ul className="space-y-3 text-sm text-foreground/90">
              {entry.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Panel: Full-height Image with Overlaid Controls */}
        <div className="relative min-h-[50vh] bg-slate-900 md:min-h-[90vh]">
          <motion.div
            key={entry.gallery[current]}
            initial={{ opacity: 0.4, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={entry.gallery[current]}
              alt={`${entry.title} gallery ${current + 1}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Prominent Close Button (Top Right) */}
          <DialogClose className="absolute right-4 top-4 z-20 flex size-12 items-center justify-center rounded-full border-2 border-white/80 bg-slate-950/90 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-110 hover:border-red-400 hover:bg-red-500/20 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            <X className="size-7" strokeWidth={2.5} />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Bottom Controls Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-6 pb-8 pt-20">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevious}
                className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white backdrop-blur-sm transition hover:border-primary/50 hover:bg-slate-900/90 hover:text-primary"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>
              <div className="flex items-center gap-2.5">
                {entry.gallery.map((_, idx) => (
                  <button
                    key={`${entry.id}-dot-${idx}`}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    aria-label={`View image ${idx + 1}`}
                    className={`size-2.5 rounded-full transition ${
                      current === idx
                        ? "bg-primary scale-125"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white backdrop-blur-sm transition hover:border-primary/50 hover:bg-slate-900/90 hover:text-primary"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
