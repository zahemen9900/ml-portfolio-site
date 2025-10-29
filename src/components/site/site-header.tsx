"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MainNav, MainNavMobile } from "./main-nav";

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-lg transition-colors",
        "border-b border-border/40 bg-background/75",
        className
      )}
    >
      <motion.div
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-wide text-foreground"
        >
          David Zahemen
        </Link>
        <MainNav />
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" variant="ghost">
            <Link href="/projects">View Work</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <MainNavMobile />
          <Button asChild size="sm" className="shrink-0">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
