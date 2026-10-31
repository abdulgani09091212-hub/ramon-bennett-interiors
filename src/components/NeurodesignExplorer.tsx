"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NEURODESIGN_ARCHETYPES } from "@/data/studioData";
import { useStudio } from "@/context/StudioContext";

export default function NeurodesignExplorer() {
  const { locale, openConcierge } = useStudio();
  const [selectedId, setSelectedId] = useState(NEURODESIGN_ARCHETYPES[0].id);

  const current =
    NEURODESIGN_ARCHETYPES.find((a) => a.id === selectedId) ||
    NEURODESIGN_ARCHETYPES[0];

  return (
    <section className="py-24 lg:py-36 bg-[#181412] text-limestone border-y border-limestone/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16">
        {/* Editorial Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-limestone/15 pb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-sandstone/70 block">
              {locale === "en" ? "Spatial Psychology & The Nervous System" : "Psicologia Espacial & O Sistema Nervoso"}
            </span>
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
                <p className={`text-xs sm:text-sm leading-relaxed ${active ? "text-umber" : "text-sandstone/70"}`}>
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
            {/* Visual Atmospheric Preview */}
            <div className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden border border-limestone/20 bg-obsidian">
              <Image
                src={current.previewImage}
                alt={current.title[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center editorial-grade"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent p-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="text-sandstone tracking-wider">
                  LIGHTING: <strong className="text-limestone font-normal">{current.kelvinTemp}</strong>
                </span>
                <span className="text-bronze">|</span>
                <span className="text-sandstone tracking-wider">
                  ACOUSTIC DAMPENING: <strong className="text-limestone font-normal">{current.acousticRating}</strong>
                </span>
              </div>
            </div>

            {/* Prescribed Materiality & Narrative */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone/70 block">
                  {locale === "en" ? "ARCHITECTURAL PRESCRIPTION" : "PRESCRIÇÃO ARQUITETÔNICA"}
                </span>
                <h3 className="font-serif text-3xl text-limestone font-light leading-snug">
                  {locale === "en" ? "Atmospheric Grounding" : "Acolhimento Sensorial"}
                </h3>
                <p className="text-sandstone/85 text-sm sm:text-base leading-relaxed">
                  {current.prescription[locale]}
                </p>
              </div>

              {/* Material Palette Tags */}
              <div className="space-y-3 pt-2 border-t border-limestone/15">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                  {locale === "en" ? "AUTHENTIC MATERIALITY" : "MATERIALIDADE AUTÊNTICA"}
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
                    {locale === "en" ? "Inspect Full Case Study" : "Ver Estudo de Caso"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openConcierge(current.recommendedProjectSlug)}
                  className="inline-flex items-center gap-2 border border-limestone/30 hover:border-bronze text-limestone px-6 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
                >
                  <span>
                    {locale === "en" ? "Commission This Atmosphere" : "Solicitar Consultoria"}
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
