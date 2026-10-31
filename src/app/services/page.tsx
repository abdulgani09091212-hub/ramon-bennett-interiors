"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { SERVICES_DATA, PROJECTS_DATA } from "@/data/studioData";
import NeurodesignExplorer from "@/components/NeurodesignExplorer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const COMMISSION_STAGES = [
  {
    phase: "STAGE 01",
    duration: { en: "Weeks 1–3", pt: "Semanas 1–3" },
    title: {
      en: "Psychological & Spatial Discovery",
      pt: "Diagnóstico Psicológico & Espacial",
    },
    desc: {
      en: "Led personally by Ramon Bennett in London, Salvador, or via private video consultation. We audit how you live, work, host, and decompress—identifying acoustic leaks, lighting fatigue, and relational bottlenecks before drawing a single line.",
      pt: "Conduzido pessoalmente por Ramon Bennett em Londres, Salvador ou por videoconferência privada. Mapeamos sua rotina, estímulos sensoriais, acústica e dinâmica familiar antes do primeiro traço.",
    },
  },
  {
    phase: "STAGE 02",
    duration: { en: "Weeks 4–8", pt: "Semanas 4–8" },
    title: {
      en: "Architectural Cure, Materiality & 1:1 Joinery Engineering",
      pt: "Cura Arquitetônica, Materialidade & Engenharia de Marcenaria 1:1",
    },
    desc: {
      en: "We present full architectural spatial plans, circadian lighting schedules (2200K–2700K), tactile stone/timber sample boxes, and Márcia Ribeiro's 1:1 technical joinery blueprints for complete sign-off.",
      pt: "Apresentamos o projeto arquitetônico completo, luminotécnica circadiana, caixa de amostras físicas (pedras, madeiras e linhos) e os desenhos executivos 1:1 de marcenaria sob supervisão de Márcia Ribeiro.",
    },
  },
  {
    phase: "STAGE 03",
    duration: { en: "Months 3–9+", pt: "Meses 3–9+" },
    title: {
      en: "Atelier Fabrication & Legal-Grade Turnkey Delivery",
      pt: "Fabricação no Atelier & Entrega Turnkey com Governança",
    },
    desc: {
      en: "While our Salvador workshop crafts your custom cabinetry and furniture, Mariana Figueiredo governs all contractor contracts, procurement schedules, and white-glove installation to the final styled artwork.",
      pt: "Enquanto nossa oficina em Salvador fabrica a marcenaria autoral, Mariana Figueiredo governa contratos, fornecedores, cronograma executivo e instalação final até a produção completa.",
    },
  },
];

export default function ServicesPage() {
  const { locale, openConcierge } = useStudio();
  const kensingtonProject = PROJECTS_DATA[1];

  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#181412] pt-28 md:pt-36">
      {/* Header Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 border-b border-[#181412]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-[#181412]"
            >
              {locale === "en"
                ? "Architectural Disciplines & Bespoke Atelier Services"
                : "Disciplinas Arquitetônicas & Serviços de Alta Marcenaria"}
            </motion.h1>
            <p className="mt-6 text-lg md:text-2xl text-[#524942] font-light leading-relaxed max-w-3xl">
              {locale === "en"
                ? "From single-room Neurodesign transformations in Kensington to turnkey residences and custom hardwood joinery in Salvador, every commission is executed under one unified family roof."
                : "De transformações residenciais em Kensington a residências turnkey e marcenaria sob medida em Salvador, cada projeto é executado sob uma única governança familiar."}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => openConcierge()}
              className="px-8 py-4 bg-[#181412] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
            >
              {locale === "en" ? "Request Scope & Fee Proposal" : "Solicitar Proposta de Projeto"}
            </button>
          </div>
        </div>
      </section>

      {/* The 3 Core Services Breakdown */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 space-y-16">
        {SERVICES_DATA.map((service, idx) => {
          const images = [
            "/images/01_hero_salvador_london_penthouse.jpg",
            "/images/04_bespoke_joinery_atelier_detail.jpg",
            "/images/08_after_kensington_london_sanctuary.jpg",
          ];
          return (
            <div
              key={service.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 p-8 md:p-12 bg-[#EDE6D8] border border-[#181412]/10 items-center"
            >
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#161311]">
                  <Image
                    src={images[idx] || images[0]}
                    alt={service.title[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#161311]/90 text-[#F6F3EC] px-3.5 py-1.5 font-mono text-xs tracking-widest">
                    DISCIPLINE {service.number}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#181412]/10 pb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239]">
                    {service.scope[locale]}
                  </span>
                  <span className="font-mono text-xs text-[#524942]">
                    LONDON • SALVADOR • INTERNATIONAL
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181412]">
                  {service.title[locale]}
                </h2>

                <p className="text-base md:text-lg text-[#524942] leading-relaxed">
                  {service.description[locale]}
                </p>

                <div className="pt-2">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#181412] mb-4">
                    {locale === "en" ? "Key Architectural Deliverables" : "Entregáveis Técnicos Inclusos"}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#181412] bg-[#F6F3EC] p-3.5 border border-[#181412]/10"
                      >
                        <Check className="w-4 h-4 text-[#8C6239] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <button
                    onClick={() => openConcierge(service.title.en)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#181412] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
                  >
                    {locale === "en" ? "Commission This Discipline" : "Consultar Esta Modalidade"}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/projects"
                    className="font-mono text-xs uppercase tracking-[0.18em] text-[#8C6239] hover:text-[#181412]"
                  >
                    {locale === "en" ? "See Completed Case Studies →" : "Ver Estudos de Caso →"}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* The 3-Stage Zero-Homework Process */}
      <section className="bg-[#161311] text-[#F6F3EC] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight">
              {locale === "en"
                ? "The Three-Stage Commission Architecture"
                : "A Arquitetura de Entrega em Três Etapas"}
            </h2>
            <p className="mt-4 text-[#D8CEBE] text-base md:text-lg font-light leading-relaxed">
              {locale === "en"
                ? "Designed for time-poor executives, international families, and hospitality founders who require absolute creative authority and zero contractor friction."
                : "Desenhado para clientes exigentes que buscam excelência estética absoluta e tranquilidade contratual do primeiro estudo à entrega das chaves."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMISSION_STAGES.map((stage, idx) => (
              <div
                key={stage.phase}
                className="p-8 md:p-10 bg-[#1F1B18] border border-[#F6F3EC]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#C59B6D] mb-6">
                    <span>{stage.phase}</span>
                    <span className="px-2.5 py-1 bg-[#161311] border border-[#F6F3EC]/10">
                      {stage.duration[locale]}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F3EC] leading-snug">
                    {stage.title[locale]}
                  </h3>
                  <p className="mt-4 text-sm text-[#D8CEBE]/85 leading-relaxed">
                    {stage.desc[locale]}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#F6F3EC]/10 flex items-center justify-between font-mono text-xs text-[#C59B6D]">
                  <span>
                    {idx === 0 && "Ramon Bennett (London / Zoom)"}
                    {idx === 1 && "Ramon Bennett & Márcia Ribeiro"}
                    {idx === 2 && "Márcia Ribeiro & Mariana Figueiredo"}
                  </span>
                  <span className="text-[10px] tracking-widest text-[#8C6239] uppercase">
                    {idx === 0 ? "01 · AUDIT" : idx === 1 ? "02 · FABRICATION" : "03 · DELIVERY"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive London Transformation Proof */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#181412] leading-tight">
            {locale === "en"
              ? "Case Study Proof: Kensington Townhouse Drawing Room"
              : "Prova Real: Sala Vitoriana em Kensington, Londres"}
          </h2>
          <p className="mt-4 text-[#524942] text-base md:text-lg leading-relaxed">
            {locale === "en"
              ? "Slide to compare the unrestored Kensington drawing room with our completed smoked walnut library and honed Portland limestone hearth."
              : "Arraste para comparar a sala original em Londres com a biblioteca em nogueira defumada e lareira em calcário Portland executadas pelo estúdio."}
          </p>
        </div>

        <BeforeAfterSlider
          projectSlug={kensingtonProject.slug}
          projectTitle={kensingtonProject.title}
          location={kensingtonProject.location}
          coordinates={kensingtonProject.coordinates}
          beforeImage={kensingtonProject.beforeImage}
          afterImage={kensingtonProject.afterImage}
          beforeLabel={kensingtonProject.beforeLabel}
          afterLabel={kensingtonProject.afterLabel}
          curePins={kensingtonProject.curePins}
        />
      </section>

      {/* Interactive Neurodesign Tool */}
      <NeurodesignExplorer />
    </main>
  );
}
