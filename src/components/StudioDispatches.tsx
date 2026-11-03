"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Instagram, MessageSquare, CheckCircle2 } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

interface DispatchItem {
  id: string;
  image: string;
  account: "@ramonbennettofficial" | "@ramonbennettinteriors";
  profileUrl: string;
  city: string;
  tag: { en: string; pt: string };
  caption: { en: string; pt: string };
  aspect: "portrait" | "landscape" | "square";
}

const DISPATCHES: DispatchItem[] = [
  {
    id: "post-ramon-london",
    image: "/images/people_ramon.png",
    account: "@ramonbennettofficial",
    profileUrl: STUDIO_CONFIG.instagramPersonal,
    city: "LONDON SW7",
    tag: {
      en: "PRINCIPAL PROFILE · SPATIAL PSYCHOLOGY",
      pt: "PERFIL DO FUNDADOR · PSICOLOGIA ESPACIAL",
    },
    caption: {
      en: "“A room is not a static picture. It is the emotional vessel of your daily life.” Reflecting on seventeen years in London examining the architecture of human relationships.",
      pt: "“Uma sala não é uma imagem estática. É o refúgio emocional da sua vida diária.” Reflexões sobre dezessete anos em Londres investigando a psicologia das relações humanas.",
    },
    aspect: "portrait",
  },
  {
    id: "post-marcia-drafting",
    image: "/images/studio_craftsmanship_1.jpg",
    account: "@ramonbennettinteriors",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "SALVADOR BAHIA",
    tag: {
      en: "ATELIER HERITAGE · EST. 1996",
      pt: "ACERVO DO ATELIER · FUNDADO EM 1996",
    },
    caption: {
      en: "Aunt Márcia Ribeiro drafting full-scale joinery blueprints by hand at our Salvador atelier. Thirty years of South American hardwood selection and millimetric joinery.",
      pt: "Tia Márcia Ribeiro desenhando pranchas executivas à mão em nosso atelier de Salvador. Três décadas de seleção de madeiras nobres e encaixes milimétricos.",
    },
    aspect: "landscape",
  },
  {
    id: "post-carved-settee",
    image: "/images/studio_craftsmanship_2.jpeg",
    account: "@ramonbennettinteriors",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "SALVADOR BAHIA",
    tag: {
      en: "HEIRLOOM FURNITURE · BESPOKE JOINERY",
      pt: "MOBILIÁRIO DE HERANÇA · ALTA MARCENARIA",
    },
    caption: {
      en: "Hand-carved solid Brazilian hardwood settee with botanical archival upholstery. Proof of an enduring family tradition sculpted to outlast decades.",
      pt: "Recamier em madeira maciça entalhada à mão com estofamento botânico exclusivo. A prova de uma tradição familiar feita para atravessar gerações.",
    },
    aspect: "square",
  },
  {
    id: "post-golden-salon",
    image: "/images/home_golden_living_room.png",
    account: "@ramonbennettinteriors",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "FLAGSHIP SALON",
    tag: {
      en: "CIRCADIAN LIGHTING · 2400K SANCTUARY",
      pt: "ILUMINAÇÃO CIRCADIANA · 2400K",
    },
    caption: {
      en: "Golden hour balance across fluted Freijó cabinetry and Roman travertine. Every light source calibrated to lower cortisol and induce restorative evening presence.",
      pt: "Equilíbrio de luz natural e marcenaria canelada em Freijó. Cada ponto de luz é calibrado para desacelerar a mente no entardecer.",
    },
    aspect: "landscape",
  },
  {
    id: "post-alphaville-salon",
    image: "/images/residential_alphaville_2.png",
    account: "@ramonbennettinteriors",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "ALPHAVILLE I",
    tag: {
      en: "RESIDENTIAL ARCHITECTURE · TURNKEY",
      pt: "ARQUITETURA RESIDENCIAL · TURNKEY",
    },
    caption: {
      en: "Choreographing proximity: curved terracotta daybed inviting unhurried conversation, governed end-to-end by Mariana Figueiredo.",
      pt: "Coreografando encontros: sofá curvo em terracota que convida ao diálogo, com governança executiva de Mariana Figueiredo.",
    },
    aspect: "square",
  },
  {
    id: "post-courtyard-pool",
    image: "/images/home_courtyard_pool.jpg",
    account: "@ramonbennettinteriors",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "SALVADOR BAHIA",
    tag: {
      en: "BIOPHILIC RETREAT · ARCHITECTURE",
      pt: "REFÚGIO BIOFÍLICO · ARQUITETURA",
    },
    caption: {
      en: "Private courtyard pool sanctuary bridging tropical coastal vegetation with monolithic natural stone terraces.",
      pt: "Pátio privativo com piscina integrada à vegetação litorânea e terraços em rocha natural monolítica.",
    },
    aspect: "landscape",
  },
];

export default function StudioDispatches() {
  const { locale, openConcierge } = useStudio();
  const [activeAccount, setActiveAccount] = useState<"all" | "@ramonbennettofficial" | "@ramonbennettinteriors">("all");

  const filtered =
    activeAccount === "all"
      ? DISPATCHES
      : DISPATCHES.filter((d) => d.account === activeAccount);

  return (
    <section className="py-24 lg:py-36 bg-limestone text-espresso border-b border-espresso/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16">
        {/* Header Strip with Dual-Brand Proof */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-espresso/15 pb-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-espresso tracking-tight leading-[1.04]">
              {locale === "en"
                ? "Studio Dispatches: London & Salvador in Practice"
                : "Diário do Atelier: Londres e Salvador em Ação"}
            </h2>
            <p className="text-umber text-base sm:text-lg leading-relaxed font-light">
              {locale === "en"
                ? "Authentic records from our London spatial psychology practice and Salvador joinery atelier. Follow our principal and studio across live commissions, keynote addresses, and material fabrication."
                : "Registros autênticos da nossa prática de psicologia espacial em Londres e do atelier de marcenaria em Salvador. Acompanhe o fundador e o estúdio em obras reais, palestras e execução."}
            </p>
          </div>

          {/* Account Filter Pills & Direct Follow Links */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveAccount("all")}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] border transition-colors ${
                activeAccount === "all"
                  ? "bg-espresso text-limestone border-espresso font-medium"
                  : "bg-travertine/60 text-espresso border-espresso/20 hover:border-bronze"
              }`}
            >
              {locale === "en" ? "All Dispatches (06)" : "Todos os Registros (06)"}
            </button>

            <a
              href={STUDIO_CONFIG.instagramStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-oxblood hover:bg-espresso text-limestone px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@ramonbennettinteriors</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={STUDIO_CONFIG.instagramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-espresso/25 hover:border-bronze text-espresso px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-bronze" />
              <span>@ramonbennettofficial</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 6-Plate Curated Visual Grid (Asymmetric Editorial Exhibition) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group border border-espresso/15 bg-travertine/40 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-bronze hover:shadow-xl"
            >
              {/* Image Frame */}
              <a
                href={item.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian block"
              >
                <Image
                  src={item.image}
                  alt={item.caption[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center editorial-grade transition-transform duration-700 ease-editorial group-hover:scale-105"
                />

                {/* Account & Location Pill */}
                <div className="absolute top-3.5 left-3.5 bg-obsidian/85 backdrop-blur-md text-limestone px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] border border-limestone/15 flex items-center gap-1.5">
                  <Instagram className="w-3 h-3 text-bronze" />
                  <span>{item.account}</span>
                </div>

                <div className="absolute top-3.5 right-3.5 bg-limestone/90 backdrop-blur-md text-espresso px-2.5 py-1 text-[9.5px] font-mono uppercase tracking-widest border border-espresso/15 tabular-nums">
                  {item.city}
                </div>
              </a>

              {/* Caption & Metadata Body */}
              <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                    {item.tag[locale]}
                  </span>
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
                    <span>{locale === "en" ? "View on Instagram" : "Ver no Instagram"}</span>
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

        {/* Global Social Trust Bar */}
        <div className="bg-travertine/80 border border-espresso/15 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-serif text-2xl text-espresso font-light">
              {locale === "en"
                ? "Direct Dialogue with Ramon Bennett & The Studio"
                : "Diálogo Direto com Ramon Bennett e o Estúdio"}
            </p>
            <p className="text-umber text-sm font-light">
              {locale === "en"
                ? "Connect directly for confidential commissions, architectural lectures, and joinery fabrication."
                : "Entre em contato para projetos confidenciais, palestras de arquitetura e encomendas de marcenaria."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openConcierge()}
              className="inline-flex items-center gap-2 bg-oxblood hover:bg-espresso text-limestone px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
            >
              <span>{locale === "en" ? "Initiate Brief" : "Iniciar Briefing"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${
                locale === "en"
                  ? STUDIO_CONFIG.whatsappLondon.replace(/\D/g, "")
                  : STUDIO_CONFIG.whatsappSalvador.replace(/\D/g, "")
              }?text=${encodeURIComponent(
                locale === "en"
                  ? "Hello Ramon Bennett Studio, I am inquiring regarding a private architectural commission."
                  : "Olá estúdio Ramon Bennett, gostaria de consultar a disponibilidade para um projeto privado."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-espresso/25 hover:border-bronze text-espresso px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-bronze" />
              <span>{locale === "en" ? "London / Bahia WhatsApp" : "WhatsApp Direto"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
