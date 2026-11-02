"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";
import { useStudio } from "@/context/StudioContext";

export default function CraftsmanshipZoomGallery() {
  const { locale } = useStudio();
  const [craftSplit, setCraftSplit] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = Math.max(8, Math.min(92, (x / rect.width) * 100));
    setCraftSplit(pct);
  }, []);

  return (
    <section className="py-24 lg:py-36 bg-travertine/60 border-y border-espresso/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16 lg:space-y-24">
        {/* Header Section with Classical Architectural Proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-espresso/15 pb-10">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-espresso tracking-tight leading-[1.04]">
              {locale === "en"
                ? "Three Decades of Master Joinery. One Family Roof."
                : "Três Décadas de Alta Marcenaria. Uma Única Governança Familiar."}
            </h2>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <p className="text-umber text-base leading-relaxed">
              {locale === "en"
                ? "Long before inspiration lived on digital screens, every commission began at Aunt Márcia Ribeiro's drafting board in Salvador. Today, sister Mariana Figueiredo brings ten years of legal rigor to every turnkey delivery."
                : "Muito antes das telas digitais, cada projeto nascia na prancheta de desenho de Márcia Ribeiro em Salvador. Hoje, Mariana Figueiredo soma dez anos de precisão jurídica à entrega executiva."}
            </p>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-oxblood hover:text-espresso font-medium transition-colors"
            >
              <span>
                {locale === "en"
                  ? "Explore the 30-Year Heritage"
                  : "Conhecer a História da Família"}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Editorial Exhibition Layout (Museum Monograph Standard) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Interactive Blueprint-to-Joinery Craft Slider (Slider C) */}
          <div className="lg:col-span-7 space-y-6">
            <div
              ref={sliderRef}
              onPointerDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onPointerMove={(e) => {
                if (isDragging) handleMove(e.clientX);
              }}
              onPointerUp={() => setIsDragging(false)}
              onPointerLeave={() => setIsDragging(false)}
              className="relative aspect-[16/11] w-full overflow-hidden bg-obsidian border border-espresso/20 select-none cursor-ew-resize touch-none group"
            >
              {/* RIGHT BASE LAYER: Completed Fluted Walnut, Brushed Brass & Calacatta Viola Marble */}
              <div className="absolute inset-0">
                <Image
                  src="/images/04_bespoke_joinery_atelier_detail.jpg"
                  alt="Completed bespoke fluted Brazilian walnut joinery meeting Calacatta Viola marble"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center editorial-grade pointer-events-none"
                />
              </div>

              {/* LEFT CLIPPED LAYER: Aunt Márcia Ribeiro Hand-Drafting Blueprint in Salvador */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - craftSplit}% 0 0)` }}
              >
                <Image
                  src="/images/studio_craftsmanship_1.jpg"
                  alt="Aunt Márcia Ribeiro drafting full-scale architectural joinery blueprints by hand in Salvador"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center editorial-grade pointer-events-none"
                />
              </div>

              {/* Top Badges */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="inline-block bg-obsidian/85 backdrop-blur-sm text-limestone px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-limestone/20">
                  {locale === "en"
                    ? "01 · HAND-DRAFTED BLUEPRINT (1996)"
                    : "01 · PRANCHETA DE DESENHO (1996)"}
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="inline-block bg-oxblood/95 backdrop-blur-sm text-limestone px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-bronze/30">
                  {locale === "en"
                    ? "02 · MILLED WALNUT & CALACATTA"
                    : "02 · NOGUEIRA & MÁRMORE CALACATTA"}
                </span>
              </div>

              {/* Vertical Milled Bronze Divider Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-bronze pointer-events-none"
                style={{ left: `${craftSplit}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-obsidian/90 border border-bronze text-limestone flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <MoveHorizontal className="w-4 h-4 text-bronze" />
                </div>
              </div>

              {/* Bottom Caption Strip */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-obsidian/90 via-obsidian/45 to-transparent px-4 py-3 flex items-center justify-between text-[11px] font-mono text-limestone/90 pointer-events-none">
                <span>
                  {locale === "en"
                    ? "DRAG TO COMPARE: DRAFTING BOARD ↔ FINISHED JOINERY"
                    : "ARRASTE PARA COMPARAR: TRAÇO À MÃO ↔ ALTA MARCENARIA"}
                </span>
                <span className="text-bronze">SALVADOR ATELIER</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-light">
                {locale === "en"
                  ? "Hand-Drawn Line by Hand-Drawn Line"
                  : "Traço por Traço, Esculpido à Mão"}
              </h3>
              <p className="text-umber text-sm sm:text-base leading-relaxed max-w-2xl">
                {locale === "en"
                  ? "In our Salvador atelier, joinery is not assembled from flat-pack catalogue parts. Márcia Ribeiro selects South American hardwoods by ring density and grain warmth—ensuring every panel, rebate, and dovetail joint breathes in harmony with coastal humidity."
                  : "Em nosso atelier de Salvador, a marcenaria não nasce de catálogos industriais. Márcia Ribeiro seleciona madeiras nobres pela densidade de veios e tonalidade, garantindo que cada encaixe respire com a umidade do litoral."}
              </p>
            </div>

            <div className="pt-4 border-t border-espresso/15">
              <blockquote className="font-serif text-xl sm:text-2xl text-espresso italic font-light leading-snug">
                {locale === "en"
                  ? "“An object may be beautiful, but its soul belongs to the hands that carved it and the family who inhabits it.”"
                  : "“Um móvel pode ser belo, mas sua alma pertence às mãos que o esculpiram e à família que o acolhe.”"}
              </blockquote>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze mt-2">
                — MÁRCIA RIBEIRO, MASTER JOINER (30+ YEARS)
              </p>
            </div>
          </div>

          {/* Right Column: Heritage Carved Settee + Completed Salon Proof */}
          <div className="lg:col-span-5 space-y-10 lg:space-y-12">
            {/* Archival Carved Timber Settee (Ramon's Authentic Family Piece) */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-travertine/40 border border-espresso/15">
                <Image
                  src="/images/studio_craftsmanship_2.jpeg"
                  alt="Bespoke hand-carved Brazilian hardwood settee with Botanical upholstery from the family atelier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                  {locale === "en"
                    ? "HEIRLOOM FURNITURE ARCHITECTURE"
                    : "MOBILIÁRIO DE HERANÇA"}
                </span>
                <h4 className="font-serif text-xl text-espresso">
                  {locale === "en"
                    ? "Where Walnut, Stone & Brass Meet"
                    : "O Encontro da Nogueira, Rocha e Latão"}
                </h4>
                <p className="text-xs sm:text-sm text-umber leading-relaxed">
                  {locale === "en"
                    ? "Millimetric shadow gaps, hand-carved solid timber frames, and unlacquered living brass reveals that age gracefully across decades."
                    : "Perfis negativos milimétricos, estruturas em madeira maciça entalhada e latão fosco natural que ganha pátina com o passar dos anos."}
                </p>
              </div>
            </div>

            {/* Completed Spatial Salon: Alphaville Conversation Salon */}
            <div className="space-y-4 pt-4 border-t border-espresso/15">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-travertine/40 border border-espresso/15">
                <Image
                  src="/images/residential_alphaville_2.png"
                  alt="Completed Alphaville conversation salon with bespoke curved terracotta daybed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                  {locale === "en"
                    ? "DELIVERY GOVERNANCE"
                    : "GOVERNANÇA DE ENTREGA"}
                </span>
                <h4 className="font-serif text-xl text-espresso">
                  {locale === "en"
                    ? "Turnkey Execution & Peace of Mind"
                    : "Execução Turnkey com Tranquilidade"}
                </h4>
                <p className="text-xs sm:text-sm text-umber leading-relaxed">
                  {locale === "en"
                    ? "Mariana Figueiredo governs all contractor schedules, material procurement, and legal protection."
                    : "Mariana Figueiredo assegura a gestão de prazos, suprimentos e blindagem contratual da obra."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
