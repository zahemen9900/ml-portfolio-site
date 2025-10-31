"use client";

import Image from "next/image";

type ProjectLogoProps = {
  name: string;
  src: string;
};

export function ProjectLogo({ name, src }: ProjectLogoProps) {
  return (
    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-border/40 bg-slate-900/60 shadow-inner shadow-slate-900/40">
      <Image
        src={src}
        alt={`${name} logo`}
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  );
}
