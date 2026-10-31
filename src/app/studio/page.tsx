"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_HERITAGE_STORY, PROJECTS_DATA } from "@/data/studioData";
import CraftsmanshipZoomGallery from "@/components/CraftsmanshipZoomGallery";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function StudioPage() {
  const { locale, openConcierge } = useStudio();
  const featuredTransformation = PROJECTS_DATA[0];

  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#181412] pt-28 md:pt-36">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 border-b border-[#181412]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-[#181412]"
            >
              {STUDIO_HERITAGE_STORY.headline[locale]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-lg md:text-2xl text-[#524942] font-light leading-relaxed max-w-3xl"
            >
              {STUDIO_HERITAGE_STORY.subheadline[locale]}
            </motion.p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end border-l border-[#181412]/15 pl-6 space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239]">
              LONDON SW7 • SALVADOR BAHIA
            </div>
            <p className="text-sm text-[#524942] leading-relaxed">
              {locale === "en"
                ? "Three decades of master Brazilian bespoke joinery united with London spatial psychology, legal precision, and turnkey architectural execution."
                : "Três décadas de alta marcenaria artesanal em Salvador unidas à psicologia espacial de Londres, governança jurídica e execução arquitetônica."}
            </p>
            <div className="pt-2 flex flex-wrap gap-6 font-mono text-xs text-[#181412]">
              <div>
                <span className="block text-2xl font-serif text-[#8C6239]">30+</span>
                {locale === "en" ? "Years Joinery Lineage" : "Anos de Alta Marcenaria"}
              </div>
              <div>
                <span className="block text-2xl font-serif text-[#8C6239]">17</span>
                {locale === "en" ? "Years in London" : "Anos em Londres"}
              </div>
              <div>
                <span className="block text-2xl font-serif text-[#8C6239]">100%</span>
                {locale === "en" ? "Bespoke Fabrication" : "Fabricação Própria"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three-Chapter Heritage Narrative */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 space-y-28 md:space-y-36">
        {STUDIO_HERITAGE_STORY.chapters.map((chapter, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={chapter.title.en}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE6D8] border border-[#181412]/10 shadow-xl">
                  <Image
                    src={chapter.image}
                    alt={chapter.title[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-mono text-xs text-[#524942] leading-relaxed border-l-2 border-[#8C6239] pl-3">
                  {chapter.imageCaption[locale]}
                </p>
              </div>

              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181412] leading-[1.12]">
                  {chapter.title[locale]}
                </h2>
                <div className="space-y-5 text-base md:text-lg text-[#524942] leading-relaxed">
                  {chapter.paragraphs[locale].map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3-Column Parallax Craftsmanship Zoom Gallery */}
      <CraftsmanshipZoomGallery />

      {/* The Leadership Triad (Ramon, Márcia, Mariana) */}
      <section className="bg-[#161311] text-[#F6F3EC] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-[#F6F3EC]/15 pb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.08]">
                {locale === "en"
                  ? "Three Vocation Pillars. One Family Standard."
                  : "Três Pilares de Vocação. Um Único Padrão Familiar."}
              </h2>
              <p className="mt-4 text-[#D8CEBE] max-w-2xl text-base md:text-lg font-light">
                {locale === "en"
                  ? "Every commission at Ramon Bennett Interiors is governed simultaneously by psychological insight, master workshop fabrication, and legal-grade project management."
                  : "Cada projeto na Ramon Bennett Interiors é regido simultaneamente por psicologia espacial, fabricação artesanal própria e governança contratual rigorosa."}
              </p>
            </div>
            <Link
              href="/founder"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#8C6239] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
            >
              {locale === "en" ? "Explore Founder Philosophy" : "Ver Filosofia do Fundador"}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STUDIO_HERITAGE_STORY.pillars.map((person, idx) => (
              <div
                key={person.name}
                className="group bg-[#1F1B18] border border-[#F6F3EC]/10 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#161311]">
                    <Image
                      src={person.portrait}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#161311]/85 backdrop-blur-md px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#D8CEBE] border border-[#F6F3EC]/15">
                      0{idx + 1} • {person.location}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F3EC]">
                      {person.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-[#C59B6D]">
                      {person.role[locale]}
                    </p>
                    <p className="mt-5 text-sm text-[#D8CEBE]/90 leading-relaxed">
                      {person.bio[locale]}
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4 border-t border-[#F6F3EC]/10 flex items-center justify-between font-mono text-xs text-[#C59B6D]">
                  <span>
                    {idx === 0 && (locale === "en" ? "Spatial Psychology & Vision" : "Psicologia Espacial & Visão")}
                    {idx === 1 && (locale === "en" ? "30+ Yrs Bespoke Joinery" : "30+ Anos de Alta Marcenaria")}
                    {idx === 2 && (locale === "en" ? "10 Yrs Legal & Turnkey Governance" : "10 Anos de Rigor Jurídico")}
                  </span>
                  <span className="text-[10px] tracking-widest text-[#8C6239] uppercase">
                    {idx === 0 ? "01 · PRINCIPAL" : idx === 1 ? "02 · MASTER ATELIER" : "03 · GOVERNANCE"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Transformation Proof */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#181412] leading-tight">
            {locale === "en"
              ? "How Our Lineage Transforms Raw Space Into Living Architecture"
              : "Como Nossa Tradição Transforma Estruturas Brutas em Arquitetura Viva"}
          </h2>
          <p className="mt-4 text-[#524942] text-base md:text-lg leading-relaxed">
            {locale === "en"
              ? "Drag the architectural divider or click the numbered pins to inspect how Ramon's spatial psychology, Márcia's custom Freijó joinery, and Mariana's engineering governance converged in Alphaville I."
              : "Arraste o divisor ou clique nos pinos técnicos para inspecionar como a psicologia espacial de Ramon, a marcenaria em Freijó de Márcia e a gestão de Mariana convergiram no projeto Alphaville I."}
          </p>
        </div>

        <BeforeAfterSlider
          projectSlug={featuredTransformation.slug}
          projectTitle={featuredTransformation.title}
          location={featuredTransformation.location}
          coordinates={featuredTransformation.coordinates}
          beforeImage={featuredTransformation.beforeImage}
          afterImage={featuredTransformation.afterImage}
          beforeLabel={featuredTransformation.beforeLabel}
          afterLabel={featuredTransformation.afterLabel}
          curePins={featuredTransformation.curePins}
        />

        <div className="mt-16 bg-[#EDE6D8] border border-[#181412]/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6239]" />
              {locale === "en" ? "Begin Your Commission" : "Inicie Seu Projeto"}
            </div>
            <h3 className="font-serif text-2xl md:text-4xl text-[#181412]">
              {locale === "en"
                ? "Ready to discuss a residence or hospitality space in London or Brazil?"
                : "Pronto para conversar sobre sua residência ou espaço em Londres ou no Brasil?"}
            </h3>
          </div>
          <button
            onClick={() => openConcierge()}
            className="px-8 py-4 bg-[#181412] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.2em] shrink-0"
          >
            {locale === "en" ? "Book Private Consultation" : "Agendar Consulta Privada"}
          </button>
        </div>
      </section>
    </main>
  );
}
