import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-limestone text-espresso px-5 py-24">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="relative w-16 h-12 mx-auto">
          <Image
            src="/images/logo_seahorse.png"
            alt="Ramon Bennett Interiors"
            fill
            sizes="64px"
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-bronze tabular-nums">
            404 · SPATIAL REDIRECTION
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-espresso leading-tight">
            The Space You Seek Has Evolved
          </h1>
          <p className="text-umber text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto">
            The monograph, architectural plate, or room coordinate you requested is no longer at this threshold. Return to our curated archive or explore our active commissions.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-oxblood hover:bg-espresso text-limestone px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            <span>Return to Atelier</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-espresso/25 hover:border-bronze text-espresso px-6 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-bronze" />
            <span>Explore Commissions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
