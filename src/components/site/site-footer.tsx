import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/zahemen9900",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/david-yeboah-498245246/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://huggingface.co/zahemen9900",
    label: "Hugging Face",
    icon: SiHuggingface,
  },
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
            David Zahemen Yeboah — AI & Software Engineer
          </p>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            Crafting intelligent systems that bridge curiosity and impact.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 rounded-full border border-border/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              <Icon aria-hidden className="text-lg" />
              <span>{label}</span>
              <span className="sr-only">{`Open ${label} profile`}</span>
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/80">
          © {year} David Zahemen Yeboah. Built with Next.js, Tailwind, and ShadCN/UI.
        </p>
      </div>
    </footer>
  );
}
