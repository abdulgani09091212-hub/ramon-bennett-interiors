"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

interface DispatchItem {
  id: string;
  image: string;
  objectPosition?: string;
  account: "@ramonbennettofficial" | "@ramonbennettinteriors";
  profileUrl: string;
  city: string;
  tag: { en: string; pt: string };
  title: { en: string; pt: string };
  caption: { en: string; pt: string };
}

const DISPATCHES: DispatchItem[] = [
  {
    id: "post-courtyard-pool",
    image: "/images/home_courtyard_pool.jpg",
    account: "@ramonbennettinteriors",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "SALVADOR · BAHIA",
    tag: {
      en: "BIOPHILIC COURTYARD ARCHITECTURE",
      pt: "ARQUITETURA BIOFÍLICA DE PÁTIO",
    },
    title: {
      en: "Hand-Laid Regional Stone & Still Water",
      pt: "Alvenaria em Pedra Natural e Água Contemplativa",
    },
    caption: {
      en: "Private courtyard plunge pool bridging tropical coastal foliage with monolithic dry-stacked stone masonry and limewashed walls.",
      pt: "Pátio privativo integrando vegetação costeira a muros em pedra natural esculpida à mão e paredes em cal.",
    },
  },
  {
    id: "post-classical-archway",
    image: "/images/home_golden_living_room.png",
    objectPosition: "object-right",
    account: "@ramonbennettofficial",
    profileUrl: STUDIO_CONFIG.instagramPersonal,
    city: "LONDON · SW7",
    tag: {
      en: "CIRCADIAN LIGHT & PROPORTION",
      pt: "LUZ CIRCADIANA & PROPORÇÃO",
    },
    title: {
      en: "Morning Raking Light Across Herringbone Oak",
      pt: "Luz Natural Matinal Sobre Parquet em Espinha de Peixe",
    },
    caption: {
      en: "Classical sightlines framed through limestone thresholds—where antique oil paintings, Nero Marquina plinths, and tactile bouclé coexist.",
      pt: "Eixos visuais clássicos emoldurados por portais em pedra — onde telas históricas, pedestais em mármore e bouclé dialogam.",
    },
  },
  {
    id: "post-joinery-macro",
    image: "/images/12_salvador_atelier_woodworking.jpg",
    account: "@ramonbennettinteriors",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "SALVADOR · ATELIER",
    tag: {
      en: "30-YEAR BESPOKE JOINERY WORKSHOP",
      pt: "OFICINA PRÓPRIA DE ALTA MARCENARIA",
    },
    title: {
      en: "Hand-Fitted Brass Inlays & Fluted Freijó",
      pt: "Frisos em Latão Ajustados à Mão no Freijó",
    },
    caption: {
      en: "Inside our Salvador workshop: master joiners fitting unlacquered brushed brass into solid South American hardwood cabinetry.",
      pt: "Dentro da nossa oficina em Salvador: mestres marceneiros ajustando latão escovado em painéis de madeira maciça.",
    },
  },
];

export default function StudioDispatches() {
  const { locale, openConcierge } = useStudio();

  return (
    <section className="py-24 lg:py-32 bg-limestone text-espresso border-b border-espresso/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-14">
        {/* Editorial Header + Dual Verified Social Channel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-espresso/15 pb-10">
          <div className="lg:col-span-6 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bronze block">
              {locale === "en"
                ? "UNIFIED IDENTITY · STUDIO & PRINCIPAL DISPATCHES"
                : "IDENTIDADE UNIFICADA · ATELIER & FUNDADOR"}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-espresso tracking-tight leading-[1.05]">
              {locale === "en"
                ? "Live From London & Salvador"
                : "Crônicas Visuais: Londres & Salvador"}
            </h2>
          </div>

          {/* High-Status Tactile Dual Instagram Channel Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={STUDIO_CONFIG.instagramStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-travertine/65 border border-espresso/15 hover:border-bronze transition-all flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-espresso font-medium">
                  <Instagram className="w-3.5 h-3.5 text-bronze" />
                  <span>@ramonbennettinteriors</span>
                </div>
                <p className="text-[11px] text-umber font-light">
                  {locale === "en"
                    ? "Architectural Portfolio & Joinery Atelier"
                    : "Portfólio de Obras & Marcenaria"}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={STUDIO_CONFIG.instagramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-travertine/65 border border-espresso/15 hover:border-bronze transition-all flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-espresso font-medium">
                  <Instagram className="w-3.5 h-3.5 text-bronze" />
                  <span>@ramonbennettofficial</span>
                </div>
                <p className="text-[11px] text-umber font-light">
                  {locale === "en"
                    ? "Founder, Spatial Psychology & Keynotes"
                    : "Fundador, Psicologia Espacial & Palestras"}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3-Plate Curated Visual Triptych (Zero Duplication with Above Sections) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DISPATCHES.map((item) => (
            <article
              key={item.id}
              className="group border border-espresso/15 bg-travertine/35 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-bronze"
            >
              <a
                href={item.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[4/3] w-full overflow-hidden bg-travertine block"
              >
                <Image
                  src={item.image}
                  alt={item.caption[locale]}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${
                    item.objectPosition || "object-center"
                  } editorial-grade transition-transform duration-700 ease-editorial group-hover:scale-105`}
                />
                <div className="absolute bottom-3 left-3 bg-obsidian/85 backdrop-blur-md text-limestone px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em]">
                  {item.city}
                </div>
              </a>

              <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                    {item.tag[locale]}
                  </span>
                  <h3 className="font-serif text-2xl text-espresso font-light leading-snug">
                    {item.title[locale]}
                  </h3>
                  <p className="text-umber text-sm leading-relaxed font-light">
                    {item.caption[locale]}
                  </p>
                </div>

                <div className="pt-3 border-t border-espresso/10 flex items-center justify-between text-xs font-mono">
                  <a
                    href={item.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-oxblood hover:text-espresso font-medium uppercase tracking-[0.15em] transition-colors"
                  >
                    <span>{item.account}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => openConcierge()}
                    className="text-umber hover:text-espresso uppercase tracking-wider text-[11px] transition-colors"
                  >
                    {locale === "en" ? "Inquire" : "Consultar"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
