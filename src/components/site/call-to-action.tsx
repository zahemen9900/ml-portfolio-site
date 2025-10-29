import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild size="lg">
        <Link href="/projects">View My Work</Link>
      </Button>
      <Button asChild size="lg" variant="outline">
        <Link href="/contact">Get In Touch</Link>
      </Button>
    </div>
  );
}
