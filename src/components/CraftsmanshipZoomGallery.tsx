"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useStudio } from "@/context/StudioContext";

export default function CraftsmanshipZoomGallery() {
  const { locale } = useStudio();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yColumnLeft = useTransform(scrollYProgress, [0, 1], ["6%", "-8%"]);
  const yColumnCenter = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const yColumnRight = useTransform(scrollYProgress, [0, 1], ["8%", "-10%"]);

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 bg-travertine border-y border-espresso/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16">
        {/* Editorial Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-espresso tracking-tight leading-[1.05]">
              {locale === "en"
                ? "Three Perspectives. Thirty Years of Master Bespoke Joinery."
                : "Três Perspectivas. Trinta Anos de Alta Marcenaria Sob Medida."}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-umber text-base leading-relaxed">
              {locale === "en"
                ? "Before Ramon Bennett Interiors became an international studio between London and Salvador, its foundations were laid at Aunt Márcia Ribeiro's wooden drafting board in Bahia—where timber was shaped by hand and Sister Mariana Figueiredo brought ten years of legal precision to every delivery."
                : "Antes de a Ramon Bennett Interiors atuar entre Londres e Salvador, seus alicerces nasceram na prancheta de desenho de Márcia Ribeiro na Bahia — onde a madeira maciça é esculpida à mão e Mariana Figueiredo aporta dez anos de precisão jurídica a cada entrega."}
            </p>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-oxblood hover:text-espresso font-medium transition-colors"
            >
              <span>
                {locale === "en"
                  ? "Read the Full Family Heritage Story"
                  : "Ler a História Completa da Família"}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3-Column Scroll-Driven Parallax Atelier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Column 1: Archival Provenance (Aunt Márcia at Drafting Board) */}
          <motion.div style={{ y: yColumnLeft }} className="md:col-span-4 space-y-6">
            <div className="bg-limestone border border-espresso/15 p-4 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/studio_craftsmanship_1.jpg"
                  alt="Márcia Ribeiro hand-drafting bespoke joinery blueprints in Salvador"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <div className="space-y-1.5 pt-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bronze">
                  {locale === "en"
                    ? "ARCHIVE · SALVADOR ATELIER (1990s)"
                    : "ACERVO · ATELIER SALVADOR (ANOS 1990)"}
                </p>
                <h3 className="font-serif text-2xl text-espresso">
                  {locale === "en"
                    ? "Márcia Ribeiro at the Drafting Table"
                    : "Márcia Ribeiro na Prancheta de Desenho"}
                </h3>
                <p className="text-sm text-umber leading-relaxed">
                  {locale === "en"
                    ? "Long before inspiration could be summoned onto a screen, every commission was sketched, studied, and engineered by hand."
                    : "Muito antes das telas digitais, cada peça sob medida era desenhada, estudada e detalhada à mão com rigor construtivo."}
                </p>
              </div>
            </div>

            <div className="bg-limestone border border-espresso/15 p-4 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/studio_craftsmanship_2.jpeg"
                  alt="Bespoke hand-carved Brazilian timber settee"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <p className="font-mono text-[11px] text-umber leading-relaxed">
                {locale === "en"
                  ? "Heirloom hand-carved jacaranda settee upholstered in bespoke houndstooth and botanical tapestry."
                  : "Canapé tradicional entalhado à mão em madeira nobre com estofaria exclusiva em pied-de-poule."}
              </p>
            </div>
          </motion.div>

          {/* Column 2 (Center Monumental Anchor): Macro Joinery & Calacatta Viola */}
          <motion.div style={{ y: yColumnCenter }} className="md:col-span-4 space-y-6">
            <div className="bg-obsidian text-limestone border border-espresso/20 p-5 space-y-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/04_bespoke_joinery_atelier_detail.jpg"
                  alt="Macro detail of fluted Brazilian walnut, brushed brass, and Calacatta Viola marble"
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">
                  {locale === "en"
                    ? "MILLIMETRE TOLERANCE · BESPOKE JOINERY"
                    : "PRECISÃO MILIMÉTRICA · ALTA MARCENARIA"}
                </p>
                <h3 className="font-serif text-2xl text-limestone">
                  {locale === "en"
                    ? "Where Timber, Brass & Stone Meet"
                    : "Onde a Madeira, o Latão e o Mármore se Encontram"}
                </h3>
                <p className="text-sm text-sandstone/80 leading-relaxed">
                  {locale === "en"
                    ? "Hand-fluted South American walnut doors meeting brushed aged brass rebates and honed Calacatta Viola marble—separating what is merely well-designed from what is exceptionally well-made."
                    : "Portas caneladas à mão em nogueira sul-americana encontrando frisos em latão envelhecido e mármore Calacatta Viola levigado."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Completed Spatial Integration & Founder Philosophy */}
          <motion.div style={{ y: yColumnRight }} className="md:col-span-4 space-y-6">
            <div className="bg-limestone border border-espresso/15 p-4 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/residential_alphaville_2.png"
                  alt="Alphaville Residence bespoke salon with terracotta daybed"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <div className="space-y-1.5 pt-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bronze">
                  {locale === "en"
                    ? "COMPLETED SALON · ALPHAVILLE, BAHIA"
                    : "SALÃO CONCLUÍDO · ALPHAVILLE, BAHIA"}
                </p>
                <h3 className="font-serif text-2xl text-espresso">
                  {locale === "en"
                    ? "Mariana Figueiredo's Delivery Governance"
                    : "Governança Executiva de Mariana Figueiredo"}
                </h3>
                <p className="text-sm text-umber leading-relaxed">
                  {locale === "en"
                    ? "Ten years of legal practice translated into ironclad contracts, supplier governance, and turnkey project delivery."
                    : "Dez anos de prática jurídica traduzidos em contratos seguros, gestão de fornecedores e entrega pontual."}
                </p>
              </div>
            </div>

            <div className="bg-oxblood text-limestone p-7 space-y-4 border border-oxblood">
              <blockquote className="font-serif text-2xl italic font-light leading-snug">
                {locale === "en"
                  ? "“An object may be beautiful, but its meaning belongs to the person who treasures it. A room is measured by the life that unfolds within it.”"
                  : "“Um objeto pode ser belo, mas seu significado pertence a quem o estima. O sucesso de uma sala é medido pela vida que nela acontece.”"}
              </blockquote>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-sandstone/80">
                — RAMON BENNETT, FOUNDER
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
