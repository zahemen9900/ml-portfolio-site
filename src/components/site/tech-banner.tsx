"use client";

import { motion } from "framer-motion";
import {
  SiDocker,
  SiFirebase,
  SiHuggingface,
  SiNextdotjs,
  SiPytorch,
  SiPython,
  SiReact,
  SiSupabase,
  SiTensorflow,
  SiAwsamplify,
} from "react-icons/si";

const TECHNOLOGIES = [
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PyTorch", icon: SiPytorch },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Supabase", icon: SiSupabase },
  { name: "Firebase", icon: SiFirebase },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAwsamplify },
  { name: "Hugging Face", icon: SiHuggingface },
];

export function TechBanner() {
  const repeated = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/40 bg-slate-900/50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      />
      <div className="relative flex items-center gap-6 overflow-hidden py-6">
        <motion.div
          className="flex shrink-0 items-center gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {repeated.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="flex min-w-[150px] items-center justify-center gap-3 rounded-2xl border border-border/30 bg-slate-950/50 px-6 py-3 text-sm text-muted-foreground shadow-lg shadow-slate-950/40"
              >
                <Icon className="text-xl text-cyan-300" aria-hidden />
                <span className="font-medium text-foreground/90">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
