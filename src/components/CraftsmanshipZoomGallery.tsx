"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useStudio } from "@/context/StudioContext";

interface AtelierPlate {
  id: string;
  index: string;
  label: { en: string; pt: string };
  title: { en: string; pt: string };
  subtitle: { en: string; pt: string };
  narrative: { en: string; pt: string };
  image: string;
  alt: string;
  metrics: { label: { en: string; pt: string }; value: string }[];
}

const ATELIER_PLATES: AtelierPlate[] = [
  {
    id: "marcia-drafting",
    index: "I",
    label: { en: "THE DRAFTING BOARD · EST. 1996", pt: "A PRANCHETA TÉCNICA · DESDE 1996" },
    title: {
      en: "Márcia Ribeiro & Three Decades of Hand-Drafted Joinery",
      pt: "Márcia Ribeiro e Três Décadas de Alta Marcenaria Desenhada à Mão",
    },
    subtitle: {
      en: "Head of Technical Development & Master Bespoke Joinery — Salvador Atelier",
      pt: "Diretora de Desenvolvimento Técnico e Mestra em Marcenaria Sob Medida — Salvador",
    },
    narrative: {
      en: "Long before digital renders existed, every commission began at Márcia Ribeiro's wooden drafting table in Salvador. Over thirty years, she mastered not only bespoke furniture design, but the millimetric engineering, hardwood selection, and site installation that separate something merely well-drawn from something extraordinarily well-built.",
      pt: "Muito antes das telas digitais, cada projeto nascia na prancheta de Márcia Ribeiro em Salvador. Ao longo de três décadas, ela consolidou um domínio raro sobre o desenho técnico, a seleção de madeiras nobres e a instalação milimétrica.",
    },
    image: "/images/studio_craftsmanship_1.jpg",
    alt: "Archival photograph of Aunt Márcia Ribeiro drafting full-scale bespoke joinery blueprints by hand in Salvador",
    metrics: [
      { label: { en: "Atelier Tenure", pt: "Trajetória" }, value: "30+ Years" },
      { label: { en: "Joinery Tolerance", pt: "Precisão" }, value: "±0.5 mm" },
      { label: { en: "Hardwood Provenance", pt: "Matéria-Prima" }, value: "FSC Brazilian Timber" },
    ],
  },
  {
    id: "material-detail",
    index: "II",
    label: { en: "MATERIAL CONVERGENCE · SALVADOR", pt: "CONVERGÊNCIA MATERIAL · SALVADOR" },
    title: {
      en: "Where Fluted Brazilian Walnut Meets Brushed Brass & Stone",
      pt: "Onde a Nogueira Canelada Encontra o Latão Escovado e o Mármore",
    },
    subtitle: {
      en: "Custom Architectural Boiserie, Concealed Pivot Doors & Acoustic Baffling",
      pt: "Boiseries Contemporâneas, Portas Pivotantes Ocultas e Painéis Acústicos",
    },
    narrative: {
      en: "In our Salvador workshop, cabinetry is never assembled from industrial catalog modules. Every fluted Freijó and smoked walnut stave is hand-matched for grain continuity, paired with unlacquered aged brass reveals and honed Calacatta Viola marble slabs calibrated to coastal humidity.",
      pt: "Em nossa oficina própria em Salvador, nenhum elemento vem de catálogos seriados. Cada ripa de Freijó ou Nogueira é selecionada continuamente pelos veios naturais, combinada ao latão envelhecido e pedras naturais.",
    },
    image: "/images/12_salvador_atelier_woodworking.jpg",
    alt: "Master craftsman in the Salvador joinery workshop fitting brushed brass inlay into fluted Brazilian Freijó hardwood",
    metrics: [
      { label: { en: "Acoustic Rating", pt: "Absorção Acústica" }, value: "NRC 0.75" },
      { label: { en: "Surface Finish", pt: "Acabamento" }, value: "Hand-Rubbed Beeswax" },
      { label: { en: "Metalwork", pt: "Metais" }, value: "Unlacquered Brass" },
    ],
  },
  {
    id: "heirloom-carving",
    index: "III",
    label: { en: "HEIRLOOM FURNITURE & GOVERNANCE", pt: "MOBILIÁRIO DE HERANÇA & GOVERNANÇA" },
    title: {
      en: "Collectible Hardwood Pieces & Legal Turnkey Governance",
      pt: "Peças Esculpidas à Mão e Governança Executiva Turnkey",
    },
    subtitle: {
      en: "Mariana Figueiredo — 10 Years of Legal Rigor Applied to Architectural Delivery",
      pt: "Mariana Figueiredo — 10 Anos de Rigor Jurídico Aplicados à Entrega da Obra",
    },
    narrative: {
      en: "Where Márcia perfected the art of making, Ramon's sister Mariana Figueiredo stepped away from a ten-year career in law to govern contracts, procurement schedules, and turnkey execution—ensuring every hand-carved heirloom piece and full-residence renovation is delivered on schedule and on budget.",
      pt: "Onde Márcia aperfeiçoou a arte do fazer, Mariana Figueiredo trouxe dez anos de advocacia para comandar contratos, cronogramas e fornecedores — garantindo que cada obra seja entregue com segurança jurídica e pontualidade.",
    },
    image: "/images/studio_craftsmanship_2.jpeg",
    alt: "Authentic hand-carved solid Brazilian hardwood settee with botanical upholstery crafted by the family atelier",
    metrics: [
      { label: { en: "Contract Governance", pt: "Governança" }, value: "10 Yrs Legal Rigor" },
      { label: { en: "Delivery Model", pt: "Modelo" }, value: "Turnkey Fixed-Scope" },
      { label: { en: "Dual Hubs", pt: "Sedes" }, value: "London & Salvador" },
    ],
  },
];

export default function CraftsmanshipZoomGallery() {
  const { locale, openConcierge } = useStudio();
  const [activeIndex, setActiveIndex] = useState(0);
  const current = ATELIER_PLATES[activeIndex] || ATELIER_PLATES[0];

  return (
    <section className="py-24 lg:py-36 bg-travertine/55 border-y border-espresso/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16">
        {/* Centered Editorial Monograph Header (Breaking Left-Right Split Monotony) */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bronze block">
            {locale === "en"
              ? "FAMILY HERITAGE · SALVADOR ATELIER & LONDON PRACTICE"
              : "LEGADO FAMILIAR · ATELIER DE SALVADOR & ESTÚDIO EM LONDRES"}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-espresso tracking-tight leading-[1.05]">
            {locale === "en"
              ? "Three Decades of Master Joinery. Under One Family Roof."
              : "Três Décadas de Alta Marcenaria. Sob o Mesmo Teto Familiar."}
          </h2>
          <p className="text-umber text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto pt-1">
            {locale === "en"
              ? "Unlike design practices that outsource fabrication to third-party contractors, our studio owns its 30-year bespoke woodworking lineage—uniting Aunt Márcia Ribeiro's drafting board, Mariana Figueiredo's legal governance, and Ramon Bennett's spatial psychology."
              : "Diferente de escritórios que terceirizam toda a execução, nosso estúdio possui três décadas de tradição própria em alta marcenaria — unindo o traço de Márcia Ribeiro, a governança jurídica de Mariana Figueiredo e a visão criativa de Ramon Bennett."}
          </p>
        </div>

        {/* Interactive Chapter Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-espresso/15 bg-limestone/70 divide-y md:divide-y-0 md:divide-x divide-espresso/15">
          {ATELIER_PLATES.map((plate, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={plate.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-6 sm:p-7 transition-all duration-300 ${
                  isActive
                    ? "bg-espresso text-limestone"
                    : "hover:bg-travertine/70 text-espresso"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                      isActive ? "text-bronze" : "text-umber"
                    }`}
                  >
                    {plate.label[locale]}
                  </span>
                  <span
                    className={`font-serif italic text-lg ${
                      isActive ? "text-limestone" : "text-bronze"
                    }`}
                  >
                    {plate.index}
                  </span>
                </div>
                <p className="font-serif text-xl sm:text-2xl font-light leading-snug">
                  {plate.title[locale]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Archival Plate & Secondary Material Proof */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Left Unobstructed Museum Plate (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-travertine border border-espresso/15 shadow-sm">
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <div className="grid grid-cols-3 divide-x divide-espresso/15 border-x border-b border-espresso/15 bg-limestone/80">
                {current.metrics.map((m) => (
                  <div key={m.value} className="p-3.5 sm:p-4">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-umber block">
                      {m.label[locale]}
                    </span>
                    <span className="font-serif text-lg sm:text-xl text-espresso font-normal mt-0.5 block tabular-nums">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Editorial Narrative & Macro Materiality Proof (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-bronze block">
                  {current.subtitle[locale]}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-espresso font-light leading-tight">
                  {current.title[locale]}
                </h3>
                <p className="text-umber text-base leading-relaxed font-light">
                  {current.narrative[locale]}
                </p>
              </div>

              {/* Complementary Macro Joinery Swatch Card */}
              <div className="grid grid-cols-12 gap-4 items-center p-4 bg-limestone border border-espresso/15">
                <div className="col-span-4 relative aspect-square overflow-hidden bg-travertine border border-espresso/10">
                  <Image
                    src="/images/04_bespoke_joinery_atelier_detail.jpg"
                    alt="Macro detail of fluted Brazilian walnut meeting brushed brass and Calacatta Viola marble"
                    fill
                    loading="eager"
                    sizes="180px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="col-span-8 space-y-1.5">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-bronze block">
                    {locale === "en" ? "ATELIER FINISH STANDARD" : "PADRÃO DE ACABAMENTO"}
                  </span>
                  <p className="font-serif text-lg text-espresso leading-snug">
                    {locale === "en"
                      ? "Hand-Fluted Walnut, Aged Brass & Honed Calacatta Viola"
                      : "Nogueira Canelada à Mão, Latão e Calacatta Viola"}
                  </p>
                  <p className="text-xs text-umber font-light leading-relaxed">
                    {locale === "en"
                      ? "Every joint is test-fitted in our Salvador workshop prior to white-glove installation."
                      : "Cada encaixe é pré-montado em nossa oficina antes da instalação final."}
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2 bg-espresso hover:bg-oxblood text-limestone px-6 py-3.5 text-xs font-mono uppercase tracking-[0.18em] transition-colors"
                >
                  <span>
                    {locale === "en"
                      ? "Read the Full Family Story"
                      : "Ler a História da Família"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openConcierge()}
                  className="inline-flex items-center gap-2 border border-espresso/25 hover:border-bronze text-espresso px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
                >
                  <span>
                    {locale === "en" ? "Commission Bespoke Joinery" : "Solicitar Marcenaria"}
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
