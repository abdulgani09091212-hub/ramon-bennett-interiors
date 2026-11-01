"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MoveHorizontal, X, ArrowUpRight, SlidersHorizontal, Eye, EyeOff } from "lucide-react";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
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

  const activePinIndex = activePin
    ? curePins.findIndex((p) => p.id === activePin.id)
    : -1;

  return (
    <div className="space-y-4">
      {/* 1. TOP CONTROL BAR: ARCHITECTURAL COORDINATES & VIEW MODES */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-espresso/15 pb-4">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-umber tabular-nums">
          <span className="text-espresso font-medium">{projectTitle}</span>
          <span className="text-bronze">·</span>
          <span>{location}</span>
          <span className="hidden sm:inline text-bronze">·</span>
          <span className="hidden sm:inline text-sandstone/90">{coordinates}</span>
        </div>

        {/* Preset Triggers & Pin Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center border border-espresso/20 bg-travertine/40 p-0.5">
            <button
              type="button"
              onClick={() => setSliderPos(95)}
              className={`px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] transition-colors ${
                sliderPos > 75
                  ? "bg-espresso text-limestone"
                  : "text-espresso/70 hover:text-espresso"
              }`}
            >
              {locale === "en" ? "Raw Site" : "Estado Bruto"}
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(50)}
              className={`px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] transition-colors ${
                sliderPos >= 25 && sliderPos <= 75
                  ? "bg-espresso text-limestone"
                  : "text-espresso/70 hover:text-espresso"
              }`}
            >
              50 / 50
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(5)}
              className={`px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] transition-colors ${
                sliderPos < 25
                  ? "bg-espresso text-limestone"
                  : "text-espresso/70 hover:text-espresso"
              }`}
            >
              {locale === "en" ? "Resolved" : "Concluído"}
            </button>
          </div>

          {curePins.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setShowPins(!showPins);
                if (!showPins) setIsDrawerOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] border border-espresso/20 bg-travertine/40 hover:border-bronze text-espresso transition-colors"
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

      {/* 2. FULL-WIDTH HEROIC COMPARISON STAGE */}
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
          className="relative aspect-[16/10] sm:aspect-[21/10] w-full overflow-hidden bg-obsidian select-none touch-pan-y cursor-ew-resize border border-espresso/20 shadow-md group"
        >
          {/* Base Layer: AFTER Image (Completed Sanctuary) */}
          <Image
            src={afterImage}
            alt={afterLabel[locale]}
            fill
            sizes="100vw"
            priority
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
              className="object-cover object-center pointer-events-none"
            />
            {/* Corner Badge: Raw State */}
            <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-md text-limestone px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-limestone/20 shadow-md">
              {beforeLabel[locale]}
            </div>
          </div>

          {/* Corner Badge: Resolved State */}
          <div className="absolute top-4 right-4 bg-limestone/90 backdrop-blur-md text-espresso px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-espresso/20 pointer-events-none shadow-md">
            {afterLabel[locale]}
          </div>

          {/* Vertical Divider Track & Milled Bronze Handle */}
          <div
            className="absolute top-0 bottom-0 w-[1.5px] bg-limestone shadow-[0_0_24px_rgba(0,0,0,0.7)] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-espresso text-limestone border border-bronze flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform">
              <MoveHorizontal className="w-4 h-4 text-limestone" />
            </div>

            {/* Subtle percentage indicator on divider */}
            <div className="absolute bottom-4 -translate-x-1/2 bg-obsidian/85 backdrop-blur-md text-limestone px-2 py-0.5 text-[9px] font-mono tracking-wider border border-limestone/15 tabular-nums pointer-events-none">
              {Math.round(sliderPos)}%
            </div>
          </div>

          {/* Interactive Architectural Cure Pins */}
          {showPins &&
            curePins.map((pin, idx) => {
              const isSelected = activePin?.id === pin.id && isDrawerOpen;
              return (
                <button
                  key={pin.id}
                  type="button"
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setActivePin(pin);
                    setIsDrawerOpen(true);
                  }}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  aria-label={pin.title[locale]}
                  aria-pressed={isSelected}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] transition-all duration-300 shadow-xl ${
                    isSelected
                      ? "bg-oxblood text-limestone scale-110 ring-4 ring-limestone/90 shadow-[0_0_20px_rgba(74,30,27,0.7)]"
                      : "bg-obsidian/85 backdrop-blur-md text-limestone hover:scale-110 border border-limestone/50"
                  }`}
                >
                  <span className="tabular-nums font-semibold">{idx + 1}</span>
                </button>
              );
            })}

          {/* 3. DOCKED ARCHITECTURAL DIAGNOSTIC CARD (FLOATING OVER STAGE) */}
          <AnimatePresence>
            {activePin && isDrawerOpen && (
              <motion.div
                key={activePin.id}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-5 right-5 left-5 sm:left-auto sm:max-w-md bg-obsidian/92 backdrop-blur-md text-limestone border border-limestone/25 p-5 shadow-2xl z-30 space-y-4"
              >
                {/* Header Strip with Pin Switcher & Close */}
                <div className="flex items-center justify-between border-b border-limestone/15 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bronze font-medium">
                      {locale === "en"
                        ? `CURE PIN 0${activePinIndex + 1}`
                        : `PINO TÉCNICO 0${activePinIndex + 1}`}
                    </span>
                    <span className="text-limestone/30">|</span>
                    <div className="flex items-center gap-1.5">
                      {curePins.map((p, i) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setActivePin(p)}
                          className={`w-5 h-5 rounded-full font-mono text-[10px] flex items-center justify-center border transition-colors ${
                            activePin.id === p.id
                              ? "bg-oxblood text-limestone border-oxblood"
                              : "border-limestone/30 text-limestone/70 hover:border-limestone"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Close Diagnostic Overlay"
                    className="p-1 text-sandstone/70 hover:text-limestone transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-limestone font-light leading-snug">
                  {activePin.title[locale]}
                </h3>

                {/* Before Problem vs After Cure */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-limestone/5 border border-limestone/10">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-sandstone/70 block mb-1">
                      {locale === "en" ? "THE SPATIAL BOTTLENECK" : "O GARGALO ESTRUTURAL"}
                    </span>
                    <p className="text-sandstone/85 leading-relaxed">
                      {activePin.beforeProblem[locale]}
                    </p>
                  </div>

                  <div className="p-3 bg-oxblood/20 border border-oxblood/40">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bronze font-semibold block mb-1">
                      {locale === "en"
                        ? "THE ARCHITECTURAL RESOLUTION"
                        : "A RESOLUÇÃO DO ESTÚDIO"}
                    </span>
                    <p className="text-limestone leading-relaxed">
                      {activePin.afterCure[locale]}
                    </p>
                  </div>
                </div>

                {/* Material Specification */}
                <div className="pt-2 border-t border-limestone/15 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-sandstone/70 uppercase tracking-widest text-[9px]">
                    SPECIFICATION:
                  </span>
                  <span className="text-bronze truncate ml-2">
                    {activePin.materialSpec}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 4. GROUNDED FOOTER STRIP */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-umber">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
          <span className="text-bronze">●</span>
          <span>
            {locale === "en"
              ? "Drag divider horizontally or click pins to inspect resolution"
              : "Arraste o divisor ou clique nos pinos para inspecionar a intervenção"}
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
