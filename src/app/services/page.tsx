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
import StudioCommissionProtocol from "@/components/StudioCommissionProtocol";

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

      {/* The 4-Stage Zero-Homework Commission Protocol */}
      <StudioCommissionProtocol />

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
