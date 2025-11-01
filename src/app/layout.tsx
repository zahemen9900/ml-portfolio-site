import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { MotionProvider } from "@/components/site/motion-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Zahemen | AI & Software Engineer",
  description:
    "Building intelligent systems that learn, adapt, and inspire with AI-first software craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <MotionProvider>
              <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
                {children}
              </div>
            </MotionProvider>
          </main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
