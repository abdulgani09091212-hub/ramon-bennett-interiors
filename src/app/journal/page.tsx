"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen, Instagram } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

export default function JournalPage() {
  const { locale, essays, openConcierge } = useStudio();
  const leadEssay = essays[0];
  const remainingEssays = essays.slice(1);

  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#181412] pt-28 md:pt-36">
      {/* Editorial Header */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24 border-b border-[#181412]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-[#181412]"
            >
              {locale === "en"
                ? "The Journal of Spatial Psychology & Craft"
                : "Caderno de Psicologia Espacial & Alta Marcenaria"}
            </motion.h1>
            <p className="mt-6 text-lg md:text-2xl text-[#524942] font-light leading-relaxed max-w-3xl">
              {locale === "en"
                ? "Essays by Ramon Bennett on Neurodesign, human relationships, adaptive luxury sanctuaries, and three decades of bespoke Bahian joinery."
                : "Ensaios de Ramon Bennett sobre Neurodesign, relações humanas, refúgios contemporâneos e três décadas de alta marcenaria artesanal."}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-3">
            <a
              href={STUDIO_CONFIG.instagramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239] hover:text-[#181412]"
            >
              <Instagram className="w-4 h-4" />
              @ramonbennettofficial
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <p className="text-xs text-[#524942] lg:text-right max-w-xs">
              {locale === "en"
                ? "Follow Ramon’s daily reflections on architecture, human connection, and quiet luxury."
                : "Acompanhe as reflexões de Ramon sobre arquitetura, conexões humanas e estética atemporal."}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Lead Monograph */}
      {leadEssay && (
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#181412]/10">
          <Link
            href={`/journal/${leadEssay.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE6D8] border border-[#181412]/10">
                <Image
                  src={leadEssay.coverImage}
                  alt={leadEssay.title[locale]}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#161311]/90 text-[#F6F3EC] px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest">
                  {locale === "en" ? "Featured Monograph" : "Ensaio em Destaque"}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-[#8C6239]">
                <span>{leadEssay.category[locale]}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {leadEssay.readTime}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181412] group-hover:text-[#8C6239] transition-colors leading-[1.1]">
                {leadEssay.title[locale]}
              </h2>

              <p className="text-base md:text-lg text-[#524942] leading-relaxed">
                {leadEssay.excerpt[locale]}
              </p>

              <blockquote className="border-l-2 border-[#8C6239] pl-4 py-1 font-serif italic text-lg text-[#4A1E1B]">
                “{leadEssay.keyTakeaway[locale]}”
              </blockquote>

              <div className="pt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#181412] group-hover:text-[#8C6239]">
                <BookOpen className="w-4 h-4" />
                {locale === "en" ? "Read Complete Essay" : "Ler Ensaio Completo"}
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Editorial Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {remainingEssays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/journal/${essay.slug}`}
              className="group flex flex-col justify-between bg-[#EDE6D8] border border-[#181412]/10 overflow-hidden"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#161311]">
                  <Image
                    src={essay.coverImage}
                    alt={essay.title[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-[#8C6239]">
                    <span>{essay.category[locale]}</span>
                    <span>{essay.date} • {essay.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#181412] group-hover:text-[#8C6239] transition-colors leading-snug">
                    {essay.title[locale]}
                  </h3>
                  <p className="text-sm md:text-base text-[#524942] leading-relaxed">
                    {essay.excerpt[locale]}
                  </p>
                </div>
              </div>
              <div className="px-8 md:px-10 pb-8 pt-4 border-t border-[#181412]/10 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-[#181412]">
                <span>{locale === "en" ? "Read Essay" : "Ler Ensaio"}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Speaking & Editorial Commission CTA */}
        <div className="mt-24 bg-[#161311] text-[#F6F3EC] p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#C59B6D]">
              {locale === "en" ? "Editorial & Speaking Inquiries" : "Imprensa, Artigos & Palestras"}
            </div>
            <h3 className="font-serif text-3xl md:text-4xl">
              {locale === "en"
                ? "Commission Ramon Bennett for a Keynote, Podcast, or Architectural Monograph"
                : "Convide Ramon Bennett para Palestras, Painéis ou Publicações Editoriais"}
            </h3>
            <p className="text-sm md:text-base text-[#D8CEBE]/80">
              {locale === "en"
                ? "Available in London, São Paulo, Salvador, and internationally in English and Portuguese."
                : "Disponível em Londres, São Paulo, Salvador e internacionalmente em português e inglês."}
            </p>
          </div>
          <button
            onClick={() => openConcierge()}
            className="px-8 py-4 bg-[#8C6239] text-[#F6F3EC] hover:bg-[#F6F3EC] hover:text-[#181412] transition-colors font-mono text-xs uppercase tracking-[0.2em] shrink-0"
          >
            {locale === "en" ? "Connect With Studio" : "Falar com o Estúdio"}
          </button>
        </div>
      </section>
    </main>
  );
}
