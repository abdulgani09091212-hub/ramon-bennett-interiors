"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
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
  const { locale, openConcierge } = useStudio();
  // Default to 75% resolved so user immediately admires the transformation
  const [sliderPos, setSliderPos] = useState(75);
  const [isDragging, setIsDragging] = useState(false);
  const [activePinIndex, setActivePinIndex] = useState(0);
  const [showPins, setShowPins] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePin = curePins && curePins.length > 0 ? curePins[activePinIndex] || curePins[0] : null;

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
      // ignore synthetic
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
      setSliderPos((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP ARCHITECTURAL CONTROL BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-espresso/15 pb-4">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-umber tabular-nums">
          <span className="text-espresso font-medium">{projectTitle}</span>
          <span className="text-bronze">·</span>
          <span>{location}</span>
          <span className="hidden sm:inline text-bronze">·</span>
          <span className="hidden sm:inline text-sandstone/90">{coordinates}</span>
        </div>

        {/* Preset States & Pin Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center border border-espresso/20 bg-travertine/60 p-0.5 shadow-sm">
            <button
              type="button"
              onClick={() => setSliderPos(98)}
              className={`px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] transition-colors ${
                sliderPos > 85
                  ? "bg-espresso text-limestone font-medium shadow-sm"
                  : "text-espresso/70 hover:text-espresso"
              }`}
            >
              {locale === "en" ? "Raw State" : "Estado Bruto"}
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(50)}
              className={`px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] transition-colors ${
                sliderPos >= 30 && sliderPos <= 85
                  ? "bg-espresso text-limestone font-medium shadow-sm"
                  : "text-espresso/70 hover:text-espresso"
              }`}
            >
              50 / 50
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(2)}
              className={`px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] transition-colors ${
                sliderPos < 30
                  ? "bg-espresso text-limestone font-medium shadow-sm"
                  : "text-espresso/70 hover:text-espresso"
              }`}
            >
              {locale === "en" ? "Resolved" : "Concluído"}
            </button>
          </div>

          {curePins.length > 0 && (
            <button
              type="button"
              onClick={() => setShowPins(!showPins)}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] border border-espresso/20 bg-travertine/60 hover:border-bronze text-espresso transition-colors shadow-sm"
            >
              {showPins ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-bronze" />
                  <span>{locale === "en" ? "Hide Pins" : "Ocultar Pinos"}</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-bronze" />
                  <span>
                    {locale === "en"
                      ? `Show Pins (${curePins.length})`
                      : `Ver Pinos (${curePins.length})`}
                  </span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* 2. UNOBSTRUCTED HIGH-RESOLUTION COMPARISON STAGE */}
      <div className="relative w-full">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={() => setIsDragging(false)}
          onKeyDown={handleKeyDown}
          role="slider"
          aria-label={`Spatial transformation comparison for ${projectTitle}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPos)}
          tabIndex={0}
          className="relative aspect-[16/10] sm:aspect-[21/10] w-full overflow-hidden bg-travertine select-none touch-pan-y cursor-ew-resize border border-espresso/20 shadow-xl group"
        >
          {/* Base Layer: AFTER Image (Completed Sanctuary) */}
          <Image
            src={afterImage}
            alt={afterLabel[locale]}
            fill
            sizes="100vw"
            priority
            loading="eager"
            className="object-cover object-center editorial-grade pointer-events-none"
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
              sizes="100vw"
              priority
              loading="eager"
              className="object-cover object-center pointer-events-none"
            />
            {/* Corner Badge: Raw State */}
            <div className="absolute top-4 left-4 bg-obsidian/90 backdrop-blur-md text-limestone px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-limestone/20 shadow-lg">
              {beforeLabel[locale]}
            </div>
          </div>

          {/* Corner Badge: Resolved State */}
          <div className="absolute top-4 right-4 bg-limestone/95 backdrop-blur-md text-espresso px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-espresso/20 pointer-events-none shadow-lg">
            {afterLabel[locale]}
          </div>

          {/* 2026 Milled Bronze Precision Hairline & Minimalist Handle */}
          <div
            className="absolute top-0 bottom-0 w-[1.5px] bg-limestone shadow-[0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Elegant Vertical Knurled Pill Handle */}
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-14 rounded-full bg-espresso/95 text-limestone border border-bronze/80 flex items-center justify-center gap-0.5 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform">
              <span className="w-[1.5px] h-5 bg-limestone/70 rounded-full" />
              <span className="w-[1.5px] h-5 bg-bronze rounded-full" />
            </div>

            {/* Subtle percentage indicator on divider */}
            <div className="absolute bottom-4 -translate-x-1/2 bg-obsidian/90 backdrop-blur-md text-limestone px-2 py-0.5 text-[9px] font-mono tracking-wider border border-limestone/20 tabular-nums pointer-events-none shadow-md">
              {Math.round(sliderPos)}%
            </div>
          </div>

          {/* Interactive Architectural Cure Pins on Stage */}
          {showPins &&
            curePins.map((pin, idx) => {
              const isSelected = activePinIndex === idx;
              return (
                <button
                  key={pin.id}
                  type="button"
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setActivePinIndex(idx);
                  }}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  aria-label={pin.title[locale]}
                  aria-pressed={isSelected}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] transition-all duration-300 shadow-xl cursor-pointer ${
                    isSelected
                      ? "bg-oxblood text-limestone scale-110 ring-4 ring-limestone/90 shadow-[0_0_24px_rgba(74,30,27,0.8)]"
                      : "bg-obsidian/85 backdrop-blur-md text-limestone hover:scale-110 hover:bg-espresso border border-limestone/50"
                  }`}
                >
                  <span className="tabular-nums font-semibold">{idx + 1}</span>
                </button>
              );
            })}
        </div>
      </div>

      {/* 3. GROUNDED ARCHITECTURAL DIAGNOSTIC DOSSIER (BELOW THE STAGE - ZERO OBSTRUCTION) */}
      {curePins.length > 0 && activePin && (
        <div className="bg-travertine/70 border border-espresso/15 p-6 md:p-8 space-y-6 shadow-sm">
          {/* Header Strip: Active Pin Navigation Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-espresso/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bronze font-semibold">
                {locale === "en" ? "ARCHITECTURAL INTERVENTION" : "INTERVENÇÃO ARQUITETÔNICA"}
              </span>
              <span className="text-espresso/30">|</span>
              <span className="font-mono text-xs text-espresso font-medium tabular-nums">
                {`0${activePinIndex + 1} / 0${curePins.length}`}
              </span>
            </div>

            {/* Pin Switcher Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {curePins.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePinIndex(idx)}
                  className={`px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] border transition-colors ${
                    activePinIndex === idx
                      ? "bg-oxblood text-limestone border-oxblood font-medium shadow-sm"
                      : "bg-limestone/80 text-espresso border-espresso/20 hover:border-bronze"
                  }`}
                >
                  <span className="mr-1.5 font-bold">0{idx + 1}</span>
                  <span className="hidden md:inline">{p.title[locale].split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Diagnostic Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePin.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-light leading-snug">
                  {activePin.title[locale]}
                </h3>
              </div>

              {/* Two-Column Diagnostic Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Before: Spatial Bottleneck */}
                <div className="p-5 bg-limestone/80 border border-espresso/10 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-umber font-medium">
                    <span className="text-oxblood font-serif italic text-sm">I.</span>
                    <span>{locale === "en" ? "The Spatial Bottleneck (Original Condition)" : "O Gargalo Estrutural (Condição Original)"}</span>
                  </div>
                  <p className="text-umber text-sm leading-relaxed font-light">
                    {activePin.beforeProblem[locale]}
                  </p>
                </div>

                {/* After: Architectural Resolution */}
                <div className="p-5 bg-limestone/80 border border-bronze/40 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bronze font-semibold">
                    <span className="text-bronze font-serif italic text-sm">II.</span>
                    <span>{locale === "en" ? "The Architectural Cure (Studio Intervention)" : "A Resolução Construtiva (Intervenção)"}</span>
                  </div>
                  <p className="text-espresso text-sm leading-relaxed font-light">
                    {activePin.afterCure[locale]}
                  </p>
                </div>
              </div>

              {/* Specification Footer */}
              <div className="pt-4 border-t border-espresso/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-sandstone/90 uppercase tracking-widest text-[10px]">
                    {locale === "en" ? "MATERIAL SPECIFICATION:" : "ESPECIFICAÇÃO DE MATERIAIS:"}
                  </span>
                  <span className="text-espresso font-medium">
                    {activePin.materialSpec}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => openConcierge()}
                  className="inline-flex items-center gap-1.5 text-oxblood hover:text-espresso uppercase tracking-[0.15em] font-medium transition-colors"
                >
                  <span>{locale === "en" ? "Inquire for Similar Scope" : "Consultar Escopo Semelhante"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* 4. GROUNDED FOOTER STRIP */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-umber">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
          <span className="text-bronze">●</span>
          <span>
            {locale === "en"
              ? "Drag divider horizontally or select pin tabs to inspect structural intervention"
              : "Arraste o divisor ou selecione os pinos para inspecionar a intervenção"}
          </span>
        </div>

        {showCaseStudyLink && (
          <Link
            href={`/projects/${projectSlug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-oxblood hover:text-espresso font-medium transition-colors"
          >
            <span>
              {locale === "en"
                ? `Open ${projectTitle} Case Study`
                : `Ver Dossiê ${projectTitle}`}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}