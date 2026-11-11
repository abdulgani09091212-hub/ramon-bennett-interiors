"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Instagram,
  X,
  Play,
  SlidersHorizontal,
  Compass,
  Sparkles,
  Layers,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

interface StoryHighlight {
  id: string;
  title: { en: string; pt: string };
  location: string;
  image: string;
  tag: { en: string; pt: string };
  account: "@ramonbennettinteriors" | "@ramonbennettofficial";
  storyNote: { en: string; pt: string };
}

interface DispatchItem {
  id: string;
  image: string;
  objectPosition?: string;
  account: "@ramonbennettinteriors" | "@ramonbennettofficial";
  category: "architecture" | "founder" | "atelier";
  profileUrl: string;
  city: string;
  coordinates: string;
  tag: { en: string; pt: string };
  title: { en: string; pt: string };
  caption: { en: string; pt: string };
  materiality: { en: string; pt: string };
}

const STORY_HIGHLIGHTS: StoryHighlight[] = [
  {
    id: "story-alphaville",
    title: { en: "Alphaville I", pt: "Alphaville I" },
    location: "SALVADOR · BR",
    image: "/images/03_after_alphaville_transformed.jpg",
    tag: { en: "PAVILION METAMORPHOSIS", pt: "METAMORFOSE DO PAVILHÃO" },
    account: "@ramonbennettinteriors",
    storyNote: {
      en: "Replacing 1990s closed drywall with a 9-metre bronze glass threshold and acoustic fluted Freijó panelling.",
      pt: "Substituindo paredes cegas dos anos 90 por vão envidraçado de 9 metros e marcenaria ripada em Freijó.",
    },
  },
  {
    id: "story-kensington",
    title: { en: "Kensington SW7", pt: "Kensington SW7" },
    location: "LONDON · UK",
    image: "/images/08_after_kensington_london_sanctuary.jpg",
    tag: { en: "TOWNHOUSE SANCTUARY", pt: "SANTUÁRIO EM TOWNHOUSE" },
    account: "@ramonbennettinteriors",
    storyNote: {
      en: "Restorative living room engineered with herringbone European oak, unlacquered bronze reading lights, and 2400K dusk scenes.",
      pt: "Living restaurador com carvalho europeu em espinha de peixe, luminárias em bronze e iluminação noturna a 2400K.",
    },
  },
  {
    id: "story-atelier",
    title: { en: "Salvador Atelier", pt: "Atelier Salvador" },
    location: "SALVADOR · ATELIER",
    image: "/images/12_salvador_atelier_woodworking.jpg",
    tag: { en: "30-YEAR HANDCRAFT", pt: "30 ANOS DE ALTA MARCENARIA" },
    account: "@ramonbennettinteriors",
    storyNote: {
      en: "Inside Márcia Ribeiro's workshop: hand-shaping certified solid South American hardwoods with zero commercial shortcuts.",
      pt: "Na oficina de Márcia Ribeiro: usinagem artesanal de madeiras nobres certificadas sem atalhos industriais.",
    },
  },
  {
    id: "story-neurodesign",
    title: { en: "Spatial Mind", pt: "Mente Espacial" },
    location: "LONDON · SW7",
    image: "/images/10_neurodesign_master_suite_2400k.jpg",
    tag: { en: "NEURODESIGN & CALM", pt: "NEURODESIGN & CALMA" },
    account: "@ramonbennettofficial",
    storyNote: {
      en: "Why bedrooms must eliminate visible clutter and blue light to protect the nervous system of executives and creative thinkers.",
      pt: "Por que suítes devem eliminar ruído visual e luz azul para proteger o sistema nervoso de mentes aceleradas.",
    },
  },
  {
    id: "story-heritage",
    title: { en: "Márcia 1994", pt: "Márcia 1994" },
    location: "ARCHIVE · BAHIA",
    image: "/images/studio_craftsmanship_1.jpg",
    tag: { en: "ATELIER PROVENANCE", pt: "PROVENIÊNCIA FAMILIAR" },
    account: "@ramonbennettinteriors",
    storyNote: {
      en: "Aunt Márcia Ribeiro at her wooden drafting board in Salvador. Decades of drafting by hand before 3D software existed.",
      pt: "Tia Márcia Ribeiro em sua prancheta em Salvador. Décadas de desenho à mão livre antes dos softwares digitais.",
    },
  },
];

const DISPATCHES: DispatchItem[] = [
  {
    id: "dispatch-alphaville-pavilion",
    image: "/images/03_after_alphaville_transformed.jpg",
    account: "@ramonbennettinteriors",
    category: "architecture",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "SALVADOR · BAHIA",
    coordinates: "12°56'42\"S 38°24'18\"W",
    tag: {
      en: "FLAGSHIP RESIDENTIAL PAVILION",
      pt: "PAVILHÃO RESIDENCIAL PRINCIPAL",
    },
    title: {
      en: "Circadian Garden Pavilion & Acoustic Freijó Joinery",
      pt: "Pavilhão Integrado ao Jardim & Marcenaria em Freijó",
    },
    caption: {
      en: "Curved seating arcs (115°) eliminating conversational tension, flanked by custom fluted timber concealing pivot doors to the culinary suite.",
      pt: "Geometria curva a 115° para diálogo fluido, ladeada por painel ripado sob medida que camufla portas de acesso à cozinha.",
    },
    materiality: {
      en: "FSC Freijó Timber · Honed Navona Travertine · Aged Bahian Bronze",
      pt: "Freijó Certificado · Travertino Navona Levigado · Bronze Baiano",
    },
  },
  {
    id: "dispatch-kensington-sanctuary",
    image: "/images/08_after_kensington_london_sanctuary.jpg",
    account: "@ramonbennettinteriors",
    category: "architecture",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "LONDON · SW7",
    coordinates: "51°29'52\"N 0°10'33\"W",
    tag: {
      en: "KENSINGTON PRIVATE RESIDENCE",
      pt: "RESIDÊNCIA PRIVADA EM KENSINGTON",
    },
    title: {
      en: "Restorative Townhouse Living Room in French Oak & Linen",
      pt: "Living Restaurador em Carvalho Francês e Linho Belga",
    },
    caption: {
      en: "Designed for decompression after high-intensity city days. Monolithic limestone hearth, integrated warm back-illumination, and sound-absorbing heavy bouclé.",
      pt: "Projetado para descompressão pós-rotina intensa. Lareira monolítica em calcário, retroiluminação quente e bouclé acústico.",
    },
    materiality: {
      en: "European White Oak · Portuguese Moleanos Stone · Belgian Linen",
      pt: "Carvalho Europeu · Pedra Moleanos · Linho Belga Puxado",
    },
  },
  {
    id: "dispatch-neurodesign-circadian",
    image: "/images/10_neurodesign_master_suite_2400k.jpg",
    account: "@ramonbennettofficial",
    category: "founder",
    profileUrl: STUDIO_CONFIG.instagramPersonal,
    city: "LONDON · SW7",
    coordinates: "51°29'50\"N 0°10'40\"W",
    tag: {
      en: "NEURODESIGN & CIRCADIAN SLEEP",
      pt: "NEURODESIGN & CICLO CIRCADIANO",
    },
    title: {
      en: "The Biology of Sleep: Low-Kelvin Master Sanctuary",
      pt: "A Biologia do Sono: Suíte Master em Baixo Kelvin",
    },
    caption: {
      en: "“A room either charges or drains your neurology. By lowering evening scenes to 2200K, melatonin production begins naturally 90 minutes before sleep.” — Ramon Bennett",
      pt: "“Um quarto recarrega ou esgota sua mente. Ao programar luz indireta a 2200K, a melatonina é produzida naturalmente antes de dormir.” — Ramon Bennett",
    },
    materiality: {
      en: "Solid Walnut Joinery · Raw Bouclé · Lutron 2200K Circadian Dimmers",
      pt: "Nogueira Maciça · Bouclé Orgânico · Dimmers Lutron 2200K",
    },
  },
  {
    id: "dispatch-atelier-woodworking",
    image: "/images/12_salvador_atelier_woodworking.jpg",
    account: "@ramonbennettinteriors",
    category: "atelier",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "SALVADOR · ATELIER",
    coordinates: "12°58'15\"S 38°29'44\"W",
    tag: {
      en: "30-YEAR ATELIER TRADITION",
      pt: "TRADIÇÃO ARTESANAL DE 30 ANOS",
    },
    title: {
      en: "Hand-Milled Brass Grooves on Solid Freijó Credenza",
      pt: "Frisos em Latão Fresados à Mão em Aparador de Freijó",
    },
    caption: {
      en: "No veneer shortcuts. Inside our Salvador workshop, master craftsmen fit solid unlacquered brass rods into sustainably harvested Brazilian hardwoods with sub-millimetre precision.",
      pt: "Sem atalhos em MDF folheado. Na nossa fábrica em Salvador, mestres marceneiros encaixam latão maciço em madeira nobre com precisão milimétrica.",
    },
    materiality: {
      en: "Solid Freijó Hardwood · Unlacquered Brushed Brass · Natural Beeswax",
      pt: "Madeira Maciça de Freijó · Latão Escovado · Cera de Abelha",
    },
  },
  {
    id: "dispatch-hospitality-pelourinho",
    image: "/images/05_rua_do_palacio_hospitality_lounge.jpg",
    account: "@ramonbennettinteriors",
    category: "architecture",
    profileUrl: STUDIO_CONFIG.instagramStudio,
    city: "SALVADOR · HISTORIC",
    coordinates: "12°58'22\"S 38°30'40\"W",
    tag: {
      en: "HOSPITALITY & HERITAGE",
      pt: "HOSPITALIDADE & PATRIMÔNIO",
    },
    title: {
      en: "Rua do Palácio: Classical Proportions in Historic Salvador",
      pt: "Rua do Palácio: Proporção Clássica no Centro Histórico",
    },
    caption: {
      en: "Honouring colonial architectural volume while introducing contemporary Italian lighting and bespoke seating sculpted for deep conversational intimacy.",
      pt: "Respeitando o pé-direito colonial histórico com iluminação contemporânea e sofás desenhados para proximidade e acolhimento.",
    },
    materiality: {
      en: "Colonial Lime Plaster · Nero Marquina Plinths · Ochre Velveteen",
      pt: "Massa de Cal Histórica · Plintos em Nero Marquina · Veludo Ocre",
    },
  },
  {
    id: "dispatch-speaking-spatial-psychology",
    image: "/images/home_golden_living_room.png",
    objectPosition: "object-right",
    account: "@ramonbennettofficial",
    category: "founder",
    profileUrl: STUDIO_CONFIG.instagramPersonal,
    city: "LONDON · SW7",
    coordinates: "51°29'45\"N 0°10'30\"W",
    tag: {
      en: "FOUNDER ESSAY & RELATIONSHIPS",
      pt: "ENSAIO DO AUTOR & RELAÇÕES",
    },
    title: {
      en: "The Spatial Architecture of Human Intimacy",
      pt: "A Arquitetura Espacial da Intimidade Humana",
    },
    caption: {
      en: "“Every relationship unfolds inside a room. If the room isolates, people drift. If the room choreographs gentle proximity, conversation endures.” — Ramon Bennett",
      pt: "“Toda relação acontece dentro de uma sala. Se o espaço isola, as pessoas se afastam. Se o espaço aproxima, o afeto permanece.” — Ramon Bennett",
    },
    materiality: {
      en: "Bookmatched Calacatta · Limewashed Walls · Custom Curved Banquette",
      pt: "Calacatta Paglietto · Paredes em Cal · Sofá Curvo Sob Medida",
    },
  },
];

export default function StudioDispatches() {
  const { locale, openConcierge } = useStudio();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "architecture" | "founder" | "atelier"
  >("all");
  const [selectedDispatch, setSelectedDispatch] = useState<DispatchItem | null>(
    null
  );
  const [activeStory, setActiveStory] = useState<StoryHighlight | null>(null);

  const filteredDispatches =
    activeFilter === "all"
      ? DISPATCHES
      : DISPATCHES.filter((d) => d.category === activeFilter);

  return (
    <section
      id="dispatches"
      className="py-24 lg:py-32 bg-limestone text-espresso border-b border-espresso/15 relative"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-14">
        {/* Editorial Header + Dual Social Channel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-espresso/15 pb-10">
          <div className="lg:col-span-6 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bronze block">
              {locale === "en"
                ? "UNIFIED SOCIAL ATELIER · ARCHITECTURAL CHRONICLES"
                : "ATELIER SOCIAL UNIFICADO · CRÔNICAS ARQUITETÔNICAS"}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-espresso tracking-tight leading-[1.05]">
              {locale === "en"
                ? "The Living Studio: Work, Thought & Provenance"
                : "O Estúdio Vivo: Obras, Neurodesign & Herança"}
            </h2>
            <p className="text-umber text-sm sm:text-base font-light leading-relaxed max-w-xl">
              {locale === "en"
                ? "Live transatlantic dispatches from our London design studio (@ramonbennettofficial) and our Salvador bespoke joinery atelier (@ramonbennettinteriors)."
                : "Crônicas em tempo real conectando a direção criativa em Londres (@ramonbennettofficial) à fábrica de marcenaria em Salvador (@ramonbennettinteriors)."}
            </p>
          </div>

          {/* High-Status Verified Dual Instagram Portals */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={STUDIO_CONFIG.instagramStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-travertine/65 border border-espresso/15 hover:border-bronze hover:bg-travertine transition-all flex items-center justify-between shadow-sm"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-espresso font-medium">
                  <Instagram className="w-3.5 h-3.5 text-bronze" />
                  <span>@ramonbennettinteriors</span>
                </div>
                <p className="text-[11px] text-umber font-light">
                  {locale === "en"
                    ? "Commissions, Joinery & Finished Sanctuaries"
                    : "Projetos Executados & Marcenaria Autoral"}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={STUDIO_CONFIG.instagramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-travertine/65 border border-espresso/15 hover:border-bronze hover:bg-travertine transition-all flex items-center justify-between shadow-sm"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-espresso font-medium">
                  <Instagram className="w-3.5 h-3.5 text-bronze" />
                  <span>@ramonbennettofficial</span>
                </div>
                <p className="text-[11px] text-umber font-light">
                  {locale === "en"
                    ? "Spatial Psychology, Neurodesign & Lectures"
                    : "Psicologia Espacial, Neurodesign & Palestras"}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 2026 Interactive Atelier Stories & Highlights Tray */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-umber">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-bronze" />
              <span>
                {locale === "en"
                  ? "Atelier Highlights · Tap to Inspect Curation"
                  : "Destaques do Atelier · Toque para Ver"}
              </span>
            </span>
            <span className="text-[11px] text-umber/70 hidden sm:inline">
              {locale === "en"
                ? "5 Interactive Chapters"
                : "5 Capítulos Interativos"}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth">
            {STORY_HIGHLIGHTS.map((story) => (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveStory(story)}
                className="group flex flex-col items-center gap-2.5 flex-shrink-0 focus:outline-none"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-[2.5px] rounded-full bg-gradient-to-tr from-bronze via-oxblood to-sandstone group-hover:scale-105 transition-transform shadow-md">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-limestone bg-obsidian">
                    <Image
                      src={story.image}
                      alt={story.title[locale]}
                      fill
                      sizes="96px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-obsidian text-limestone p-1 rounded-full border border-limestone/30">
                    <Play className="w-2.5 h-2.5 fill-current text-sandstone" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-serif text-sm font-medium text-espresso group-hover:text-oxblood transition-colors">
                    {story.title[locale]}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-umber">
                    {story.location}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-espresso/15 pb-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em]">
            <span className="text-umber mr-2 hidden sm:inline">
              <SlidersHorizontal className="w-3.5 h-3.5 inline mr-1 text-bronze" />
              {locale === "en" ? "Filter Dispatches:" : "Filtrar Crônicas:"}
            </span>

            {[
              { id: "all", label: { en: "All Works (06)", pt: "Todos (06)" } },
              {
                id: "architecture",
                label: {
                  en: "Architecture (@ramonbennettinteriors)",
                  pt: "Arquitetura (@ramonbennettinteriors)",
                },
              },
              {
                id: "founder",
                label: {
                  en: "Spatial Psychology (@ramonbennettofficial)",
                  pt: "Psicologia (@ramonbennettofficial)",
                },
              },
              {
                id: "atelier",
                label: {
                  en: "Atelier Joinery (30 Years)",
                  pt: "Marcenaria Artesanal (30 Anos)",
                },
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveFilter(
                    tab.id as "all" | "architecture" | "founder" | "atelier"
                  )
                }
                className={`px-3 py-1.5 transition-all ${
                  activeFilter === tab.id
                    ? "bg-espresso text-limestone shadow-sm"
                    : "bg-travertine/60 text-umber hover:text-espresso hover:bg-travertine"
                }`}
              >
                {tab.label[locale]}
              </button>
            ))}
          </div>

          <p className="font-mono text-[11px] text-umber">
            {locale === "en"
              ? `Displaying ${filteredDispatches.length} Curated Records`
              : `Exibindo ${filteredDispatches.length} Registros`}
          </p>
        </div>

        {/* High-Resolution Architectural Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDispatches.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedDispatch(item)}
              className="group cursor-pointer border border-espresso/15 bg-travertine/35 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-bronze hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian">
                <Image
                  src={item.image}
                  alt={item.caption[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover ${
                    item.objectPosition || "object-center"
                  } editorial-grade transition-transform duration-700 ease-editorial group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-3 left-3 bg-obsidian/85 backdrop-blur-md text-limestone px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em]">
                  {item.city}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-limestone text-[10px] font-mono uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5">
                    <Compass className="w-3 h-3 text-bronze" />
                    <span>{item.coordinates}</span>
                  </span>
                  <span className="bg-oxblood/90 text-limestone px-2 py-0.5 font-medium">
                    {locale === "en" ? "Inspect" : "Inspecionar"}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze block">
                      {item.tag[locale]}
                    </span>
                    <span className="font-mono text-[10px] text-umber">
                      {item.account}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-espresso font-light leading-snug group-hover:text-oxblood transition-colors">
                    {item.title[locale]}
                  </h3>
                  <p className="text-umber text-sm leading-relaxed font-light line-clamp-3">
                    {item.caption[locale]}
                  </p>
                </div>

                <div className="pt-4 border-t border-espresso/10 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-umber/90">
                    <Layers className="w-3 h-3 text-bronze flex-shrink-0" />
                    <span className="truncate">{item.materiality[locale]}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-1">
                    <span className="text-oxblood font-medium uppercase tracking-[0.14em] flex items-center gap-1">
                      <span>{locale === "en" ? "Explore Dossier" : "Ver Dossiê"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>

                    <span className="text-[11px] text-umber group-hover:text-espresso transition-colors">
                      {item.account}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Bottom High-Ticket Conversion Bar */}
        <div className="bg-travertine/70 border border-espresso/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-serif text-xl sm:text-2xl text-espresso font-light">
              {locale === "en"
                ? "Commission a Private Space Inspired by These Works"
                : "Comissione um Espaço Inspirado Nestas Obras"}
            </p>
            <p className="text-xs sm:text-sm text-umber font-light">
              {locale === "en"
                ? "Direct discovery session with Ramon Bennett in London (SW7), Salvador, or via confidential video consultation."
                : "Atendimento direto com Ramon Bennett em Londres (SW7), Salvador ou via videoconferência privada."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openConcierge()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-limestone hover:bg-oxblood transition-colors font-mono text-xs uppercase tracking-[0.18em]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {locale === "en"
                  ? "Schedule Consultation"
                  : "Agendar Consulta"}
              </span>
            </button>
            <a
              href={STUDIO_CONFIG.instagramStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-espresso/20 hover:border-bronze text-espresso hover:text-bronze transition-colors font-mono text-xs uppercase tracking-[0.16em]"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@ramonbennettinteriors</span>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Cinematic Lightbox Modal for Full Curation */}
      {selectedDispatch && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-obsidian/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedDispatch(null)}
        >
          <div
            className="bg-limestone border border-espresso/20 max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDispatch(null)}
              className="absolute top-4 right-4 z-10 bg-obsidian text-limestone p-2 hover:bg-oxblood transition-colors rounded-full"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto md:min-h-[460px] bg-obsidian">
                <Image
                  src={selectedDispatch.image}
                  alt={selectedDispatch.title[locale]}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-obsidian/85 text-limestone px-3 py-1 font-mono text-[10px] tracking-wider uppercase">
                  {selectedDispatch.city} · {selectedDispatch.coordinates}
                </div>
              </div>

              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-espresso/15 pb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">
                      {selectedDispatch.tag[locale]}
                    </span>
                    <a
                      href={selectedDispatch.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-oxblood hover:underline flex items-center gap-1"
                    >
                      <span>{selectedDispatch.account}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-light leading-snug">
                    {selectedDispatch.title[locale]}
                  </h3>

                  <p className="text-umber text-sm leading-relaxed font-light">
                    {selectedDispatch.caption[locale]}
                  </p>

                  <div className="p-3 bg-travertine/70 border border-espresso/10 space-y-1">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-umber">
                      {locale === "en" ? "MATERIALITY SPECIFICATION" : "ESPECIFICAÇÃO DE MATERIAIS"}
                    </p>
                    <p className="text-xs font-mono text-espresso">
                      {selectedDispatch.materiality[locale]}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-espresso/15">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDispatch(null);
                      openConcierge();
                    }}
                    className="w-full py-3 bg-espresso text-limestone hover:bg-oxblood transition-colors font-mono text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {locale === "en"
                        ? "Inquire About This Space"
                        : "Consultar Sobre Este Espaço"}
                    </span>
                  </button>

                  <a
                    href={selectedDispatch.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 border border-espresso/20 text-espresso hover:border-bronze hover:text-bronze transition-colors font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>
                      {locale === "en"
                        ? `View on ${selectedDispatch.account}`
                        : `Ver no ${selectedDispatch.account}`}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Story Highlight Modal */}
      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="bg-obsidian border border-limestone/20 max-w-md w-full overflow-hidden shadow-2xl relative text-limestone animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 text-limestone p-2 hover:bg-oxblood transition-colors rounded-full"
              aria-label="Close Story"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[9/13] w-full bg-obsidian">
              <Image
                src={activeStory.image}
                alt={activeStory.title[locale]}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-black/40" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-limestone bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                  {activeStory.location}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone">
                    {activeStory.tag[locale]}
                  </span>
                  <h4 className="font-serif text-2xl text-limestone font-light">
                    {activeStory.title[locale]}
                  </h4>
                </div>

                <p className="text-sandstone/90 text-sm leading-relaxed font-light">
                  {activeStory.storyNote[locale]}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveStory(null);
                      openConcierge();
                    }}
                    className="flex-1 py-3 bg-limestone text-espresso hover:bg-oxblood hover:text-limestone transition-colors font-mono text-xs uppercase tracking-[0.16em] font-medium"
                  >
                    {locale === "en" ? "Schedule Brief" : "Agendar Consulta"}
                  </button>

                  <a
                    href={
                      activeStory.account === "@ramonbennettofficial"
                        ? STUDIO_CONFIG.instagramPersonal
                        : STUDIO_CONFIG.instagramStudio
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-limestone/10 border border-limestone/20 hover:border-bronze text-limestone hover:text-bronze transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
