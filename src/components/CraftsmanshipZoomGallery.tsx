"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useStudio } from "@/context/StudioContext";

export default function CraftsmanshipZoomGallery() {
  const { locale } = useStudio();

  return (
    <section className="py-24 lg:py-36 bg-travertine/60 border-y border-espresso/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16 lg:space-y-24">
        {/* Header Section with Classical Architectural Proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-espresso/15 pb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-bronze block">
              {locale === "en" ? "Atelier Provenance · Est. 1996" : "Origem do Atelier · Fundado em 1996"}
            </span>
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
          {/* Left Column: Aunt Márcia Archival Drafting Showcase (Monumental) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-travertine/40 border border-espresso/15">
              <Image
                src="/images/studio_craftsmanship_1.jpg"
                alt="Aunt Márcia Ribeiro drafting full-scale architectural joinery blueprints by hand in Salvador"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center editorial-grade"
              />
              <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-sm text-limestone px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-limestone/20">
                {locale === "en" ? "ARCHIVE · SALVADOR ATELIER" : "ACERVO · ATELIER SALVADOR"}
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

            <div className="border-l-2 border-oxblood pl-5 py-2">
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

          {/* Right Column: Tactile Macro Detail + Completed Salon Proof */}
          <div className="lg:col-span-5 space-y-10 lg:space-y-12">
            {/* Macro Detail: Fluted Timber meeting Calacatta Viola */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-travertine/40 border border-espresso/15">
                <Image
                  src="/images/04_bespoke_joinery_atelier_detail.jpg"
                  alt="Macro detail of hand-fluted Brazilian walnut, brushed brass, and Calacatta Viola marble"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                  {locale === "en" ? "MATERIALITY SPECIFICATION" : "ESPECIFICAÇÃO DE MATERIAIS"}
                </span>
                <h4 className="font-serif text-xl text-espresso">
                  {locale === "en" ? "Where Walnut, Stone & Brass Meet" : "O Encontro da Nogueira, Rocha e Latão"}
                </h4>
                <p className="text-xs sm:text-sm text-umber leading-relaxed">
                  {locale === "en"
                    ? "Millimetric shadow gaps and unlacquered living brass reveals that age gracefully across decades."
                    : "Perfis negativos milimétricos e latão fosco natural que ganha pátina com o passar dos anos."}
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
                  {locale === "en" ? "DELIVERY GOVERNANCE" : "GOVERNANÇA DE ENTREGA"}
                </span>
                <h4 className="font-serif text-xl text-espresso">
                  {locale === "en" ? "Turnkey Execution & Peace of Mind" : "Execução Turnkey com Tranquilidade"}
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
