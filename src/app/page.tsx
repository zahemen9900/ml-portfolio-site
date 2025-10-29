import { motion } from "framer-motion";

import { CallToAction } from "@/components/site/call-to-action";
import { fadeInUp, staggerChildren } from "@/lib/motion";

export default function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren(0.12)}
      className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"
    >
      <motion.span
        variants={fadeInUp}
        className="rounded-full border border-accent/40 px-4 py-1 text-xs uppercase tracking-[0.45em] text-accent-foreground/80"
      >
        Sprint 2 — Layout Shell
      </motion.span>
      <motion.h1
        variants={fadeInUp}
        className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
      >
        Building intelligent systems that learn, adapt, and inspire.
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
      >
        Global layout scaffolding is ready. Navigation, typography, and motion primitives are in place so the upcoming pages can plug into a cohesive experience.
      </motion.p>
      <motion.div variants={fadeInUp} className="mt-4">
        <CallToAction />
      </motion.div>
    </motion.section>
  );
}
