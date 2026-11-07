"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NEURODESIGN_ARCHETYPES } from "@/data/studioData";
import { useStudio } from "@/context/StudioContext";

type KelvinScene = "2400k" | "3200k" | "5500k";

const KELVIN_SCENES: {
  id: KelvinScene;
  temp: string;
  label: { en: string; pt: string };
  nervousSystemState: { en: string; pt: string };
  filterCss: string;
}[] = [
  {
    id: "2400k",
    temp: "2400K",
    label: { en: "Candlelight Sanctuary", pt: "Santuário Noturno" },
    nervousSystemState: {
      en: "Parasympathetic Recovery · Zero Specular Glare",
      pt: "Recuperação Parassimpática · Zero Ofuscamento",
    },
    filterCss: "sepia(0.14) saturate(1.12) contrast(1.04) brightness(0.95)",
  },
  {
    id: "3200k",
    temp: "3200K",
    label: { en: "Golden Hour Salon", pt: "Luz Dourada de Entardecer" },
    nervousSystemState: {
      en: "Relational Warmth · Social Ease & Presence",
      pt: "Acolhimento Relacional · Presença e Diálogo",
    },
    filterCss: "sepia(0.04) saturate(1.04) contrast(1.01) brightness(1.0)",
  },
  {
    id: "5500k",
    temp: "5500K",
    label: { en: "Unfiltered Daylight Baseline", pt: "Luz Diurna Sem Filtro" },
    nervousSystemState: {
      en: "High Cortisol Alertness · Typical Uncalibrated Room",
      pt: "Estado de Alerta Elevado · Iluminação Convencional",
    },
    filterCss: "saturate(0.72) brightness(1.12) contrast(0.95) hue-rotate(-8deg)",
  },
];

export default function NeurodesignExplorer() {
  const { locale, openConcierge } = useStudio();
  const [selectedId, setSelectedId] = useState(NEURODESIGN_ARCHETYPES[0].id);
  const [kelvinScene, setKelvinScene] = useState<KelvinScene>("2400k");

  const current =
    NEURODESIGN_ARCHETYPES.find((a) => a.id === selectedId) ||
    NEURODESIGN_ARCHETYPES[0];

  const activeKelvin =
    KELVIN_SCENES.find((k) => k.id === kelvinScene) || KELVIN_SCENES[0];

  return (
    <section className="py-24 lg:py-36 bg-[#181412] text-limestone border-y border-limestone/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16">
        {/* Asymmetric Editorial Manifesto Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-limestone/15 pb-10">
          <div className="lg:col-span-7 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bronze block">
              {locale === "en"
                ? "NEURODESIGN & SPATIAL PSYCHOLOGY · LONDON SW7"
                : "NEURODESIGN & PSICOLOGIA ESPACIAL · LONDRES SW7"}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-limestone tracking-tight leading-[1.04]">
              {locale === "en"
                ? "Rooms That Lower Your Cortisol. By Architectural Design."
                : "Ambientes Que Desaceleram a Mente. Pelo Desenho Arquitetônico."}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sandstone/85 text-base leading-relaxed font-light">
              {locale === "en"
                ? "Informed by Ramon Bennett's 17 years in London studying human sciences, law, and psychotherapy, our studio treats acoustic reverberation, harsh 5500K glare, and fragmented corridors as neurological stressors to be resolved."
                : "Com base em 17 anos em Londres dedicados às ciências humanas, direito e psicoterapia, nosso estúdio trata a reverberação acústica, a luz fria e plantas fragmentadas como fatores de estresse a serem resolvidos."}
            </p>
          </div>
        </div>

        {/* 3 Sensory Archetype Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEURODESIGN_ARCHETYPES.map((arch, idx) => {
            const active = arch.id === selectedId;
            return (
              <button
                key={arch.id}
                type="button"
                onClick={() => setSelectedId(arch.id)}
                className={`text-left p-6 sm:p-7 transition-all duration-300 border ${
                  active
                    ? "bg-limestone text-espresso border-limestone shadow-2xl"
                    : "bg-limestone/[0.03] text-limestone border-limestone/15 hover:border-bronze"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-70">
                    {`ATMOSPHERE 0${idx + 1}`}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                      active
                        ? "border-espresso/20 text-oxblood"
                        : "border-limestone/15 text-bronze"
                    }`}
                  >
                    {arch.kelvinTemp.split(" ")[0]}
                  </span>
                </div>
                <p className="font-serif text-2xl mb-2 leading-tight font-light">
                  {arch.title[locale].replace(/^0\d\.\s*/, "")}
                </p>
                <p
                  className={`text-xs sm:text-sm leading-relaxed font-light ${
                    active ? "text-umber" : "text-sandstone/75"
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
          >
            {/* Left Full-Frame Unobstructed Room + Lutron-Style Kelvin Scene Switcher */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-limestone/20 bg-[#221D1A]">
                <Image
                  src={current.previewImage}
                  alt={`${current.title[locale]} — ${activeKelvin.temp}`}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-all duration-700"
                  style={{
                    filter: activeKelvin.filterCss,
                  }}
                />

                {/* Subtle Top Corner Telemetry */}
                <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-md border border-limestone/20 px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-limestone">
                  {`${activeKelvin.temp} · ${activeKelvin.label[locale]}`}
                </div>

                {/* Bottom Acoustic & Nervous System Status Bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/95 via-obsidian/65 to-transparent p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-sandstone">
                    NEUROBIOLOGY:{" "}
                    <strong className="text-limestone font-normal">
                      {activeKelvin.nervousSystemState[locale]}
                    </strong>
                  </span>
                  <span className="text-bronze">{current.acousticRating}</span>
                </div>
              </div>

              {/* Tactile Architectural Lighting Scene Controller (Replaces repetitive split slider) */}
              <div className="bg-limestone/[0.04] border border-limestone/15 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                    {locale === "en"
                      ? "INTERACTIVE CIRCADIAN SCENE CALIBRATION"
                      : "CALIBRAÇÃO DE CENA CIRCADIANA"}
                  </span>
                  <p className="text-xs text-sandstone/80 font-light">
                    {locale === "en"
                      ? "Test how colour temperature transforms cortical alertness into restorative calm:"
                      : "Teste como a temperatura de cor transforma o estado de alerta em calma restauradora:"}
                  </p>
                </div>

                <div className="inline-flex items-center border border-limestone/20 bg-obsidian p-0.5">
                  {KELVIN_SCENES.map((scene) => (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => setKelvinScene(scene.id)}
                      className={`px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] transition-all ${
                        kelvinScene === scene.id
                          ? "bg-oxblood text-limestone font-medium shadow-md"
                          : "text-sandstone/75 hover:text-limestone"
                      }`}
                    >
                      {scene.temp}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Prescribed Materiality & Clinical Rationale */}
            <div className="lg:col-span-5 space-y-8 pt-2">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bronze block">
                  {locale === "en"
                    ? "SPATIAL PSYCHOLOGY PRESCRIPTION"
                    : "PRESCRIÇÃO DE PSICOLOGIA ESPACIAL"}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-limestone font-light leading-snug">
                  {current.title[locale].replace(/^0\d\.\s*/, "")}
                </h3>
                <p className="text-sandstone/85 text-sm sm:text-base leading-relaxed font-light">
                  {current.prescription[locale]}
                </p>
              </div>

              {/* Tactile Material Swatches */}
              <div className="space-y-3 pt-4 border-t border-limestone/15">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone/70 block">
                  {locale === "en"
                    ? "SPECIFIED TACTILE PALETTE"
                    : "PALETA TÁTIL ESPECIFICADA"}
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {current.palette.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="flex items-center gap-3 p-2.5 border border-limestone/15 bg-limestone/[0.03] text-xs text-limestone"
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-limestone/30 flex-shrink-0"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span className="truncate font-light">{swatch.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Triggers */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openConcierge(current.recommendedProjectSlug)}
                  className="inline-flex items-center gap-2 bg-oxblood hover:bg-limestone hover:text-espresso text-limestone px-6 py-3.5 text-xs font-mono uppercase tracking-[0.18em] font-medium transition-colors"
                >
                  <span>
                    {locale === "en"
                      ? "Commission This Atmosphere"
                      : "Solicitar Esta Atmosfera"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <Link
                  href={`/projects/${current.recommendedProjectSlug}`}
                  className="inline-flex items-center gap-2 border border-limestone/25 hover:border-bronze text-limestone px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
                >
                  <span>
                    {locale === "en" ? "Explore Case Study" : "Ver Estudo de Caso"}
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
