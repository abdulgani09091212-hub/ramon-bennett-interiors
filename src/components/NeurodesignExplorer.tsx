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
    <section className="py-24 lg:py-32 bg-obsidian text-limestone border-y border-limestone/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-14">
        {/* Top Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-limestone/15 pb-10">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              {locale === "en"
                ? "Spatial Psychology & Neurodesign Diagnostic"
                : "Diagnóstico de Psicologia Espacial & Neurodesign"}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sandstone/80 text-base leading-relaxed">
              {locale === "en"
                ? "Informed by Ramon Bennett's 17 years in London studying Human Sciences, Law, and Psychotherapy, every project begins by diagnosing how you want a room to make your nervous system feel—then prescribing the exact timber acoustics, lighting Kelvin spectrum, and tactile stone."
                : "Baseado nos 17 anos de Ramon Bennett em Londres dedicados às Ciências Humanas e à Psicoterapia, cada projeto começa diagnosticando como o ambiente deve acolher seu sistema nervoso — prescrevendo acústica em madeira nobre, espectro de iluminação e pedras naturais."}
            </p>
          </div>
        </div>

        {/* Archetype Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {NEURODESIGN_ARCHETYPES.map((arch) => {
            const active = arch.id === selectedId;
            return (
              <button
                key={arch.id}
                type="button"
                onClick={() => setSelectedId(arch.id)}
                className={`text-left p-6 border transition-all duration-500 ease-architectural ${
                  active
                    ? "bg-limestone text-espresso border-limestone"
                    : "bg-obsidian/60 text-limestone border-limestone/20 hover:border-bronze"
                }`}
              >
                <p className="font-serif text-2xl mb-2">{arch.title[locale]}</p>
                <p
                  className={`text-sm leading-relaxed ${
                    active ? "text-umber" : "text-sandstone/70"
                  }`}
                >
                  {arch.psychologicalGoal[locale]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Prescription Output */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Visual Room Preview */}
            <div className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden border border-limestone/20">
              <Image
                src={current.previewImage}
                alt={current.title[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center editorial-grade"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 bg-obsidian/85 backdrop-blur-md p-4 border border-limestone/15 text-xs font-mono">
                <span>LIGHTING: {current.kelvinTemp}</span>
                <span className="text-bronze">|</span>
                <span>ACOUSTICS: {current.acousticRating}</span>
              </div>
            </div>

            {/* Material Swatches & Architectural Prescription */}
            <div className="lg:col-span-5 space-y-7">
              <div className="space-y-3">
                <h3 className="font-serif text-3xl text-limestone">
                  {locale === "en"
                    ? "The Architectural Prescription"
                    : "A Prescrição Arquitetônica"}
                </h3>
                <p className="text-sandstone/85 leading-relaxed text-base">
                  {current.prescription[locale]}
                </p>
              </div>

              {/* Tactile Material Swatches */}
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
                  {locale === "en"
                    ? "PRESCRIBED MATERIAL PALETTE"
                    : "PALETA DE MATERIAIS PRESCRITA"}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {current.palette.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="flex items-center gap-3 p-3 border border-limestone/15 bg-limestone/5"
                    >
                      <span
                        className="w-8 h-8 flex-shrink-0 border border-limestone/30"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div>
                        <p className="text-xs font-medium text-limestone">
                          {swatch.name}
                        </p>
                        <p className="font-mono text-[10px] text-sandstone/60 uppercase tabular-nums">
                          {swatch.hex}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${current.recommendedProjectSlug}`}
                  className="inline-flex items-center gap-2 bg-oxblood hover:bg-bronze text-limestone px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
                >
                  <span>
                    {locale === "en"
                      ? "Inspect Case Study"
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
                      : "Encomendar Esta Atmosfera"}
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
