"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MoveHorizontal, Plus, X, ArrowUpRight } from "lucide-react";
import { CurePin } from "@/data/studioData";
import { useStudio } from "@/context/StudioContext";

interface BeforeAfterSliderProps {
  projectSlug: string;
  projectTitle: string;
  location: string;
  coordinates: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: { en: string; pt: string };
  afterLabel: { en: string; pt: string };
  curePins: CurePin[];
  showCaseStudyLink?: boolean;
}

export default function BeforeAfterSlider({
  projectSlug,
  projectTitle,
  location,
  coordinates,
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  curePins,
  showCaseStudyLink = true,
}: BeforeAfterSliderProps) {
  const { locale } = useStudio();
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activePin, setActivePin] = useState<CurePin | null>(curePins[0] || null);
  const [showPins, setShowPins] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(Math.round(percent * 10) / 10);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore if synthetic event
    }
    updateSliderFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSliderFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((p) => Math.max(0, p - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((p) => Math.min(100, p + 4));
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Bar: Project Coordinates & Quick View Presets */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-espresso/15 pb-4">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-umber tabular-nums">
          <span className="text-espresso font-semibold">{projectTitle}</span>
          <span className="text-bronze">·</span>
          <span>{location}</span>
          <span className="hidden sm:inline text-bronze">·</span>
          <span className="hidden sm:inline">{coordinates}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSliderPos(92)}
            className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] border transition-colors ${
              sliderPos > 75
                ? "bg-espresso text-limestone border-espresso"
                : "border-espresso/20 text-espresso hover:border-bronze"
            }`}
          >
            {locale === "en" ? "1. Site Before" : "1. Estado Bruto"}
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(50)}
            className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] border transition-colors ${
              sliderPos >= 25 && sliderPos <= 75
                ? "bg-espresso text-limestone border-espresso"
                : "border-espresso/20 text-espresso hover:border-bronze"
            }`}
          >
            {locale === "en" ? "50 / 50 Split" : "50 / 50 Comparar"}
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(8)}
            className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] border transition-colors ${
              sliderPos < 25
                ? "bg-espresso text-limestone border-espresso"
                : "border-espresso/20 text-espresso hover:border-bronze"
            }`}
          >
            {locale === "en" ? "2. Completed Sanctuary" : "2. Obra Concluída"}
          </button>
          <button
            type="button"
            onClick={() => setShowPins(!showPins)}
            className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] border border-bronze/50 text-oxblood bg-travertine/70 hover:bg-travertine transition-colors"
          >
            {showPins
              ? locale === "en"
                ? "Hide Diagnostic Pins"
                : "Ocultar Pinos"
              : locale === "en"
              ? "Show Diagnostic Pins"
              : "Ver Pinos Técnicos"}
          </button>
        </div>
      </div>

      {/* Main Comparison Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={() => setIsDragging(false)}
          onKeyDown={handleKeyDown}
          role="slider"
          aria-label={`Before and After spatial transformation slider for ${projectTitle}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPos)}
          tabIndex={0}
          className="lg:col-span-8 relative aspect-[16/10] w-full overflow-hidden bg-obsidian select-none touch-pan-y cursor-ew-resize border border-espresso/15"
        >
          {/* Base Layer: AFTER Image (Completed Sanctuary) */}
          <Image
            src={afterImage}
            alt={afterLabel[locale]}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover object-center editorial-grade pointer-events-none"
            priority
          />

          {/* Clipped Top Layer: BEFORE Image (Raw Site Survey) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            }}
          >
            <Image
              src={beforeImage}
              alt={beforeLabel[locale]}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center pointer-events-none"
              priority
            />
            {/* Subtle Documentary Corner Stamp on Before Layer */}
            <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-sm text-limestone px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] border border-limestone/20">
              {beforeLabel[locale]}
            </div>
          </div>

          {/* After Corner Stamp */}
          <div className="absolute top-4 right-4 bg-limestone/90 backdrop-blur-sm text-espresso px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] border border-espresso/20 pointer-events-none">
            {afterLabel[locale]}
          </div>

          {/* Vertical Magnetic Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-limestone shadow-[0_0_20px_rgba(0,0,0,0.6)] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-oxblood text-limestone border border-limestone/60 flex items-center justify-center shadow-lg">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* Interactive Architectural Cure Pins */}
          {showPins &&
            curePins.map((pin, idx) => {
              const isSelected = activePin?.id === pin.id;
              return (
                <button
                  key={pin.id}
                  type="button"
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setActivePin(pin);
                  }}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  aria-label={pin.title[locale]}
                  aria-pressed={isSelected}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center font-mono text-xs transition-transform duration-300 ${
                    isSelected
                      ? "bg-oxblood text-limestone scale-110 ring-4 ring-limestone/80"
                      : "bg-limestone/95 text-espresso hover:scale-110 border border-espresso"
                  }`}
                >
                  <span className="tabular-nums">{idx + 1}</span>
                </button>
              );
            })}
        </div>

        {/* Right Column: Architectural Diagnostic & Cure Panel */}
        <div className="lg:col-span-4 bg-travertine border border-espresso/15 p-6 sm:p-7 flex flex-col justify-between min-h-[380px]">
          <AnimatePresence mode="wait">
            {activePin ? (
              <motion.div
                key={activePin.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between border-b border-espresso/15 pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood font-semibold">
                    {locale === "en"
                      ? "ARCHITECTURAL CURE DIAGNOSTIC"
                      : "DIAGNÓSTICO & SOLUÇÃO TÉCNICA"}
                  </span>
                  <div className="flex items-center gap-2">
                    {curePins.map((p, i) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActivePin(p)}
                        aria-label={`Inspect Cure Pin ${i + 1}: ${p.title[locale]}`}
                        aria-pressed={activePin.id === p.id}
                        className={`min-w-[44px] min-h-[44px] px-3 font-mono text-xs tabular-nums border transition-colors ${
                          activePin.id === p.id
                            ? "bg-oxblood text-limestone border-oxblood"
                            : "bg-limestone text-espresso border-espresso/20 hover:border-bronze"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-espresso leading-snug">
                  {activePin.title[locale]}
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="p-3.5 bg-limestone/70 border border-espresso/10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-umber mb-1">
                      {locale === "en" ? "BEFORE (THE BOTTLENECK)" : "ANTES (O PROBLEMA ESPACIAL)"}
                    </p>
                    <p className="text-umber leading-relaxed">
                      {activePin.beforeProblem[locale]}
                    </p>
                  </div>

                  <div className="p-3.5 bg-limestone border border-bronze/40">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-oxblood font-semibold mb-1">
                      {locale === "en"
                        ? "AFTER (THE ARCHITECTURAL CURE)"
                        : "DEPOIS (A INTERVENÇÃO DO ESTÚDIO)"}
                    </p>
                    <p className="text-espresso leading-relaxed">
                      {activePin.afterCure[locale]}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-espresso/10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-umber">
                    {locale === "en" ? "SPECIFICATION:" : "ESPECIFICAÇÃO TÉCNICA:"}
                  </p>
                  <p className="font-mono text-xs text-espresso mt-0.5">
                    {activePin.materialSpec}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-3">
                <p className="font-serif text-xl text-espresso">
                  {locale === "en"
                    ? "Select a numbered pin on the photograph to inspect our structural and bespoke joinery intervention."
                    : "Selecione um pino numerado na imagem para inspecionar nossa intervenção arquitetônica e de marcenaria."}
                </p>
              </div>
            )}
          </AnimatePresence>

          {showCaseStudyLink && (
            <div className="pt-6 mt-6 border-t border-espresso/15 flex items-center justify-between">
              <Link
                href={`/projects/${projectSlug}`}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-oxblood hover:text-espresso font-medium transition-colors"
              >
                <span>
                  {locale === "en"
                    ? `Open Full ${projectTitle} Dossier`
                    : `Abrir Dossiê Completo (${projectTitle})`}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="font-mono text-[11px] text-umber tabular-nums">
                {Math.round(100 - sliderPos)}% {locale === "en" ? "Transformed" : "Transformado"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
