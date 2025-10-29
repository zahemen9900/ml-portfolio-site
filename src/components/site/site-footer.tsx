import Link from "next/link";

import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  { href: "https://github.com/zahemen9900", label: "GitHub" },
  { href: "https://www.linkedin.com/in/david-zahemen", label: "LinkedIn" },
  { href: "https://huggingface.co/zahemen9900", label: "Hugging Face" },
];

export function SiteFooter({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-border/40 bg-background/80 backdrop-blur",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-base text-foreground">
            David Zahemen — AI & Software Engineer
          </p>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            Crafting intelligent systems that bridge curiosity and impact.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/80">
          © {year} Built with Next.js, Tailwind, and ShadCN/UI.
        </p>
      </div>
    </footer>
  );
}
