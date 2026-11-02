"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";
import { NEURODESIGN_ARCHETYPES } from "@/data/studioData";
import { useStudio } from "@/context/StudioContext";

export default function NeurodesignExplorer() {
  const { locale, openConcierge } = useStudio();
  const [selectedId, setSelectedId] = useState(NEURODESIGN_ARCHETYPES[0].id);
  const [circadianSplit, setCircadianSplit] = useState(64);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current =
    NEURODESIGN_ARCHETYPES.find((a) => a.id === selectedId) ||
    NEURODESIGN_ARCHETYPES[0];

  const handlePointerMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const pct = Math.max(6, Math.min(94, (x / rect.width) * 100));
      setCircadianSplit(pct);
    },
    []
  );

  return (
    <section className="py-24 lg:py-36 bg-[#181412] text-limestone border-y border-limestone/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16">
        {/* Editorial Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-limestone/15 pb-10">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-limestone tracking-tight leading-[1.04]">
              {locale === "en"
                ? "Rooms That Lower Your Cortisol. By Architectural Design."
                : "Ambientes Que Desaceleram a Mente. Pelo Desenho Arquitetônico."}
            </h2>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <p className="text-sandstone/80 text-base leading-relaxed">
              {locale === "en"
                ? "Informed by Ramon Bennett's 17 years in London studying human sciences, law, and psychotherapy, our practice treats acoustic leaks, harsh glare, and compartmentalised layouts as psychological stressors to be cured."
                : "Com base em 17 anos em Londres dedicados às ciências humanas, direito e psicoterapia, nosso trabalho trata o ruído acústico, a iluminação fria e a dispersão visual como fatores de estresse a serem curados."}
            </p>
          </div>
        </div>

        {/* Sensory Archetype Tabs (Editorial Minimalist List) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-limestone/15 pb-8">
          {NEURODESIGN_ARCHETYPES.map((arch, idx) => {
            const active = arch.id === selectedId;
            return (
              <button
                key={arch.id}
                type="button"
                onClick={() => setSelectedId(arch.id)}
                className={`text-left p-6 transition-all duration-300 border ${
                  active
                    ? "bg-limestone text-espresso border-limestone shadow-xl"
                    : "bg-transparent text-limestone border-limestone/20 hover:border-bronze"
                }`}
              >
                <span className="font-mono text-[10px] tracking-widest uppercase block mb-3 opacity-60">
                  {`[ 0${idx + 1} / ATMOSPHERE ]`}
                </span>
                <p className="font-serif text-2xl mb-2 leading-tight">
                  {arch.title[locale]}
                </p>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    active ? "text-umber" : "text-sandstone/70"
                  }`}
                >
                  {arch.psychologicalGoal[locale]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Atmospheric Prescription Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Interactive Circadian Lighting Scrub Slider (5500K Daylight vs 2200K Restorative Sanctuary) */}
            <div className="lg:col-span-7 space-y-3">
              <div
                ref={containerRef}
                onPointerDown={(e) => {
                  setIsDragging(true);
                  handlePointerMove(e.clientX);
                }}
                onPointerMove={(e) => {
                  if (isDragging) handlePointerMove(e.clientX);
                }}
                onPointerUp={() => setIsDragging(false)}
                onPointerLeave={() => setIsDragging(false)}
                className="relative aspect-[16/10] w-full overflow-hidden border border-limestone/20 bg-obsidian select-none cursor-ew-resize touch-none group"
              >
                {/* RIGHT BASE LAYER: 2200K-2400K Warm Circadian Evening Sanctuary */}
                <div className="absolute inset-0">
                  <Image
                    src={current.previewImage}
                    alt={`${current.title[locale]} — 2200K Circadian Sanctuary`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center pointer-events-none"
                    style={{
                      filter:
                        "sepia(0.24) saturate(1.18) contrast(1.06) brightness(0.92)",
                    }}
                  />
                </div>

                {/* LEFT CLIPPED LAYER: 5500K High-Alert Overcast Daylight Baseline */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - circadianSplit}% 0 0)`,
                  }}
                >
                  <Image
                    src={current.previewImage}
                    alt={`${current.title[locale]} — 5500K Daylight Glare`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center pointer-events-none"
                    style={{
                      filter:
                        "saturate(0.68) brightness(1.14) contrast(0.96) hue-rotate(-10deg)",
                    }}
                  />
                </div>

                {/* Top Corner Spectrum Badges */}
                <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                  <span className="inline-block bg-obsidian/85 backdrop-blur-md text-sandstone border border-limestone/20 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em]">
                    {locale === "en"
                      ? "5500K · HIGH-GLARE DAYLIGHT"
                      : "5500K · LUZ FRIA DIURNA"}
                  </span>
                </div>
                <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
                  <span className="inline-block bg-oxblood/95 backdrop-blur-md text-limestone border border-bronze/40 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em]">
                    {`${current.kelvinTemp.split(" ")[0]} · CIRCADIAN SANCTUARY`}
                  </span>
                </div>

                {/* Vertical Milled Bronze Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-[2px] bg-bronze pointer-events-none"
                  style={{ left: `${circadianSplit}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-obsidian/90 border border-bronze text-limestone flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <MoveHorizontal className="w-4 h-4 text-bronze" />
                  </div>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-obsidian/95 via-obsidian/60 to-transparent p-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono pointer-events-none">
                  <span className="text-sandstone tracking-wider">
                    SPECTRUM:{" "}
                    <strong className="text-limestone font-normal">
                      {current.kelvinTemp}
                    </strong>
                  </span>
                  <span className="text-bronze">|</span>
                  <span className="text-sandstone tracking-wider">
                    ACOUSTIC DAMPENING:{" "}
                    <strong className="text-limestone font-normal">
                      {current.acousticRating}
                    </strong>
                  </span>
                </div>
              </div>

              {/* Quick Circadian Preset Controls */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-sandstone/75 pt-1">
                <span>
                  {locale === "en"
                    ? "DRAG HANDLE TO SCRUB CIRCADIAN SPECTRUM"
                    : "ARRASTE O DIVISOR PARA TESTAR A TRANSIÇÃO CIRCADIANA"}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCircadianSplit(85)}
                    className="px-2.5 py-1 border border-limestone/15 hover:border-bronze text-sandstone transition-colors"
                  >
                    5500K DAY
                  </button>
                  <button
                    type="button"
                    onClick={() => setCircadianSplit(50)}
                    className="px-2.5 py-1 border border-limestone/15 hover:border-bronze text-sandstone transition-colors"
                  >
                    50 / 50
                  </button>
                  <button
                    type="button"
                    onClick={() => setCircadianSplit(15)}
                    className="px-2.5 py-1 border border-bronze/50 bg-oxblood/40 text-limestone transition-colors"
                  >
                    2200K DUSK
                  </button>
                </div>
              </div>
            </div>

            {/* Prescribed Materiality & Narrative */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone/70 block">
                  {locale === "en"
                    ? "ARCHITECTURAL PRESCRIPTION"
                    : "PRESCRIÇÃO ARQUITETÔNICA"}
                </span>
                <h3 className="font-serif text-3xl text-limestone font-light leading-snug">
                  {locale === "en"
                    ? "Atmospheric Grounding"
                    : "Acolhimento Sensorial"}
                </h3>
                <p className="text-sandstone/85 text-sm sm:text-base leading-relaxed">
                  {current.prescription[locale]}
                </p>
              </div>

              {/* Material Palette Tags */}
              <div className="space-y-3 pt-2 border-t border-limestone/15">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                  {locale === "en"
                    ? "AUTHENTIC MATERIALITY"
                    : "MATERIALIDADE AUTÊNTICA"}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {current.palette.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-limestone/15 bg-limestone/5 text-xs text-limestone"
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-limestone/30 flex-shrink-0"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span>{swatch.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${current.recommendedProjectSlug}`}
                  className="inline-flex items-center gap-2 bg-oxblood hover:bg-espresso text-limestone px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
                >
                  <span>
                    {locale === "en"
                      ? "Inspect Full Case Study"
                      : "Ver Estudo de Caso"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openConcierge(current.recommendedProjectSlug)}
                  className="inline-flex items-center gap-2 border border-limestone/30 hover:border-bronze text-limestone px-6 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
                >
                  <span>
                    {locale === "en"
                      ? "Commission This Atmosphere"
                      : "Solicitar Consultoria"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
