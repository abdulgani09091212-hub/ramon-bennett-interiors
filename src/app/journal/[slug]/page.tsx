"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { JOURNAL_ESSAYS } from "@/data/studioData";

export default function JournalArticlePage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const { locale, essays, openConcierge } = useStudio();

  const essay =
    essays.find((item) => item.slug === slug) ||
    JOURNAL_ESSAYS.find((item) => item.slug === slug) ||
    essays[0];

  const relatedEssays = essays.filter((item) => item.slug !== essay.slug);

  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#181412] pt-28 md:pt-36">
      {/* Top Breadcrumb */}
      <div className="max-w-[1040px] mx-auto px-6 md:px-12 pb-8">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239] hover:text-[#181412] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {locale === "en" ? "Back to Journal" : "Voltar ao Caderno Editorial"}
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-[1040px] mx-auto px-6 md:px-12 pb-24">
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-[#8C6239] mb-6">
          <span>{essay.category[locale]}</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {essay.date}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {essay.readTime}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#181412]">
          {essay.title[locale]}
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-[#524942] font-light leading-relaxed">
          {essay.subtitle[locale]}
        </p>

        {/* Author Byline */}
        <div className="mt-8 pt-8 border-t border-[#181412]/10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#8C6239]">
              <Image
                src="/images/people_ramon.png"
                alt="Ramon Bennett"
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="font-serif text-lg text-[#181412]">Ramon Bennett</div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#8C6239]">
                {locale === "en"
                  ? "Founder & Spatial Psychologist • London & Salvador"
                  : "Fundador & Estrategista em Psicologia Espacial • Londres & Salvador"}
              </div>
            </div>
          </div>

          <Link
            href="/founder"
            className="font-mono text-xs uppercase tracking-[0.18em] text-[#8C6239] hover:text-[#181412] inline-flex items-center gap-1"
          >
            {locale === "en" ? "Author Profile" : "Perfil do Autor"}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cover Visual */}
        <div className="my-12 relative aspect-[16/9] w-full overflow-hidden bg-[#EDE6D8] border border-[#181412]/10 shadow-xl">
          <Image
            src={essay.coverImage}
            alt={essay.title[locale]}
            fill
            priority
            sizes="(max-width: 1040px) 100vw, 1040px"
            className="object-cover"
          />
        </div>

        {/* Body Content */}
        <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-[#181412]/90 leading-[1.8] font-light">
          <p className="font-serif text-2xl md:text-3xl text-[#4A1E1B] leading-relaxed italic">
            {essay.excerpt[locale]}
          </p>

          {essay.bodyParagraphs[locale].map((para, index) => (
            <p key={index}>{para}</p>
          ))}

          {/* Pull Quote Box */}
          <div className="my-12 p-8 md:p-10 bg-[#EDE6D8] border border-[#181412]/15">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239] mb-2">
              {locale === "en" ? "Architectural Principle" : "Princípio Arquitetônico"}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-[#181412] leading-snug">
              “{essay.keyTakeaway[locale]}”
            </blockquote>
          </div>
        </div>

        {/* Consultation Footer Box */}
        <div className="mt-16 p-8 md:p-12 bg-[#161311] text-[#F6F3EC] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#C59B6D]">
              {locale === "en" ? "Private Discovery" : "Diagnóstico Privado"}
            </div>
            <h3 className="font-serif text-2xl md:text-3xl">
              {locale === "en"
                ? "Experience Spatial Psychology in Your Residence"
                : "Aplique a Psicologia Espacial em Sua Residência"}
            </h3>
            <p className="text-sm text-[#D8CEBE]/80">
              {locale === "en"
                ? "Schedule a private consultation with Ramon Bennett in London, Salvador, or via video."
                : "Agende uma conversa privada com Ramon Bennett em Londres, Salvador ou online."}
            </p>
          </div>
          <button
            onClick={() => openConcierge()}
            className="px-7 py-4 bg-[#8C6239] text-[#F6F3EC] hover:bg-[#F6F3EC] hover:text-[#181412] transition-colors font-mono text-xs uppercase tracking-[0.2em] shrink-0"
          >
            {locale === "en" ? "Book Consultation" : "Agendar Consulta"}
          </button>
        </div>
      </article>

      {/* Related Essays */}
      <section className="bg-[#EDE6D8] py-20 border-t border-[#181412]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl text-[#181412] mb-10">
            {locale === "en" ? "Further Reading" : "Continue Lendo"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedEssays.map((rel) => (
              <Link
                key={rel.slug}
                href={`/journal/${rel.slug}`}
                className="group p-8 bg-[#F6F3EC] border border-[#181412]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#8C6239]">
                    {rel.category[locale]} • {rel.readTime}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-[#181412] group-hover:text-[#8C6239] transition-colors">
                    {rel.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm text-[#524942] line-clamp-2">
                    {rel.excerpt[locale]}
                  </p>
                </div>
                <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[#181412] inline-flex items-center gap-1.5">
                  {locale === "en" ? "Read Essay" : "Ler Ensaio"}
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
