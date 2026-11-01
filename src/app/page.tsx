"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  X,
  Instagram,
  SlidersHorizontal,
} from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CraftsmanshipZoomGallery from "@/components/CraftsmanshipZoomGallery";
import NeurodesignExplorer from "@/components/NeurodesignExplorer";
import { STUDIO_CONFIG } from "@/data/studioData";

export default function HomePage() {
  const { locale, openConcierge, projects, essays, heroVideoUrl } = useStudio();
  const [selectedTransformationIndex, setSelectedTransformationIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const activeTransformation =
    projects[selectedTransformationIndex] || projects[0];

  return (
    <div className="bg-limestone text-espresso selection:bg-oxblood selection:text-limestone">
      {/* 1. FIRST VIEWPORT: EDITORIAL ARCHITECTURAL HERO + MONUMENTAL PRESENCE */}
      <section className="relative max-w-[1440px] mx-auto px-5 md:px-10 pt-6 pb-20 lg:pb-28 border-b border-espresso/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
          <div className="lg:col-span-8">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-5xl sm:text-6xl lg:text-[80px] font-light tracking-tight leading-[1.01] text-espresso"
              >
                {locale === "en" ? (
                  <>
                    The Art of Understanding.{" "}
                    <span className="italic font-normal text-oxblood block sm:inline">
                      Crafted Across Two Continents.
                    </span>
                  </>
                ) : (
                  <>
                    A Arte de Compreender.{" "}
                    <span className="italic font-normal text-oxblood block sm:inline">
                      Esculpida Entre Dois Continentes.
                    </span>
                  </>
                )}
              </motion.h1>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <p className="text-umber text-base sm:text-lg leading-relaxed font-light">
              {locale === "en"
                ? "Every space tells a story. Ours begins by listening. Uniting London spatial psychology with 30 years of master bespoke joinery in Salvador."
                : "Cada espaço conta uma história. A nossa começa pela escuta. Unindo a psicologia espacial de Londres a 30 anos de alta marcenaria artesanal em Salvador."}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openConcierge()}
                className="inline-flex items-center gap-2.5 bg-oxblood hover:bg-espresso text-limestone px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
              >
                <span>
                  {locale === "en"
                    ? "Commission a Project"
                    : "Iniciar um Projeto"}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#transformations"
                className="inline-flex items-center gap-2 border border-espresso/25 hover:border-bronze text-espresso px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-bronze" />
                <span>
                  {locale === "en" ? "Before & After" : "Antes & Depois"}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Full-Bleed Architectural Frame with Ramon's Real Flagship Golden Living Room */}
        <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden border border-espresso/20 bg-obsidian group">
          {heroVideoUrl && !videoFailed ? (
            <video
              src={heroVideoUrl}
              poster="/images/home_golden_living_room.png"
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
              className="w-full h-full object-cover editorial-grade"
            />
          ) : (
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/home_golden_living_room.png"
                alt="Ramon Bennett Interiors — Golden Hour Brazilian Walnut Joinery & Restorative Spatial Architecture"
                fill
                sizes="100vw"
                priority
                className="object-cover object-center editorial-grade animate-micro-life"
              />
            </div>
          )}

          {/* Integrated Architectural Colophon Bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/95 via-obsidian/60 to-transparent p-5 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-limestone">
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-sandstone/80 tabular-nums">
                FLAGSHIP SALON · LONDON SW7 & SALVADOR BAHIA
              </p>
              <p className="font-serif text-2xl sm:text-3xl font-light">
                {locale === "en"
                  ? "An International Perspective. A Family Tradition. A Deeply Personal Approach."
                  : "Uma Perspectiva Internacional. Uma Tradição Familiar. Uma Abordagem Pessoal."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 bg-limestone text-espresso hover:bg-oxblood hover:text-limestone px-5 py-3 text-xs font-mono uppercase tracking-[0.18em] transition-colors font-medium"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>
                  {locale === "en"
                    ? "Atelier Film & Philosophy"
                    : "Filme & Filosofia do Estúdio"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPATIAL METAMORPHOSIS LAB: BEFORE & AFTER ARCHITECTURAL CURE */}
      <section
        id="transformations"
        className="max-w-[1440px] mx-auto px-5 md:px-10 py-24 lg:py-36 border-b border-espresso/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7 space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-bronze block">
              {locale === "en" ? "Diagnostic Metamorphosis" : "Metamorfose Diagnóstica"}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.04]">
              {locale === "en"
                ? "Spatial Transformations: Before & After the Cure"
                : "Transformações Espaciais: Antes e Depois da Intervenção"}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-umber text-base leading-relaxed font-light">
              {locale === "en"
                ? "Anyone can photograph a styled room. True architectural authority is proven by how we resolve structural bottlenecks, harsh acoustics, and fragmented layouts. Drag the divider to reveal the architectural resolution."
                : "A verdadeira autoridade arquitetônica se prova na forma como resolvemos gargalos estruturais, iluminação fria e plantas compartimentadas. Arraste o divisor para inspecionar a resolução construtiva."}
            </p>
            {/* Commission Switcher Tabs */}
            <div className="flex flex-wrap gap-2 pt-1">
              {projects.slice(0, 3).map((proj, idx) => (
                <button
                  key={proj.slug}
                  type="button"
                  onClick={() => setSelectedTransformationIndex(idx)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] border transition-colors ${
                    selectedTransformationIndex === idx
                      ? "bg-oxblood text-limestone border-oxblood font-medium"
                      : "bg-travertine/60 text-espresso border-espresso/20 hover:border-bronze"
                  }`}
                >
                  {proj.title} ({proj.location.split(",")[0]})
                </button>
              ))}
            </div>
          </div>
        </div>

        <BeforeAfterSlider
          projectSlug={activeTransformation.slug}
          projectTitle={activeTransformation.title}
          location={activeTransformation.location}
          coordinates={activeTransformation.coordinates}
          beforeImage={activeTransformation.beforeImage}
          afterImage={activeTransformation.afterImage}
          beforeLabel={activeTransformation.beforeLabel}
          afterLabel={activeTransformation.afterLabel}
          curePins={activeTransformation.curePins}
          showCaseStudyLink={true}
        />
      </section>

      {/* 3. ASYMMETRIC CURATED COMMISSIONS SHOWCASE (1508 London / Sophie Paterson Standard) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-24 lg:py-36 border-b border-espresso/15">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-espresso/15 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-bronze block">
              {locale === "en" ? "Curated Portfolio" : "Portfólio Autoral"}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.04]">
              {locale === "en"
                ? "Selected Architectural Commissions"
                : "Obras e Comissões Selecionadas"}
            </h2>
            <p className="text-umber text-base leading-relaxed font-light">
              {locale === "en"
                ? "Each commission is approached as an enduring portrait of the individuals who inhabit it—combining spatial psychology with technical precision."
                : "Cada projeto é concebido como um retrato duradouro de quem o habita — unindo inteligência emocional e rigor construtivo."}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-oxblood hover:text-espresso font-medium transition-colors"
          >
            <span>{locale === "en" ? "View Full Archive" : "Ver Acervo Completo"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Exhibition Flow (No 2x2 Identical Cards) */}
        <div className="space-y-20 lg:space-y-28">
          {/* COMMISSION 01: Alphaville I — Panoramic Monumental Feature */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-8">
              <Link
                href={`/projects/${projects[0].slug}`}
                className="block relative aspect-[16/10] w-full overflow-hidden bg-obsidian border border-espresso/15 group"
              >
                <Image
                  src={projects[0].afterImage}
                  alt={projects[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center editorial-grade transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-sm text-limestone px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
                  COMMISSION 01 · {projects[0].category}
                </div>
                <div className="absolute bottom-4 right-4 bg-limestone text-espresso px-4 py-2 text-xs font-mono uppercase tracking-[0.16em] flex items-center gap-2 opacity-95 group-hover:bg-oxblood group-hover:text-limestone transition-colors">
                  <span>{locale === "en" ? "Explore Case Study" : "Ver Projeto"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            <div className="lg:col-span-4 space-y-5">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-umber border-b border-espresso/10 pb-3 flex items-center justify-between">
                <span>{projects[0].location}</span>
                <span>{projects[0].areaSqm} · {projects[0].year}</span>
              </div>
              <Link href={`/projects/${projects[0].slug}`} className="block">
                <h3 className="font-serif text-3xl sm:text-4xl text-espresso hover:text-oxblood transition-colors leading-tight font-light">
                  {projects[0].title}
                </h3>
              </Link>
              <p className="text-umber text-sm sm:text-base leading-relaxed font-light">
                {projects[0].subtitle[locale]}
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-bronze pt-2">
                Honed Roman Travertine · Fluted Freijó Joinery · Aged Bronze
              </p>
            </div>
          </article>

          {/* COMMISSIONS 02 & 03: Asymmetric Pairing (Portrait Kensington + Architectural Arches) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Project 2: Kensington Sanctuary (Portrait Focus on Victorian Fireplace & Library) */}
            <article className="lg:col-span-6 space-y-5">
              <Link
                href={`/projects/${projects[1].slug}`}
                className="block relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-obsidian border border-espresso/15 group"
              >
                <Image
                  src={projects[1].afterImage}
                  alt={projects[1].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center editorial-grade transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-sm text-limestone px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
                  COMMISSION 02 · LONDON RESIDENCE
                </div>
                <div className="absolute bottom-4 right-4 bg-limestone text-espresso px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.16em] flex items-center gap-1.5 opacity-95 group-hover:bg-oxblood group-hover:text-limestone transition-colors">
                  <span>{locale === "en" ? "Explore Case Study" : "Ver Projeto"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-umber flex items-center justify-between border-b border-espresso/10 pb-2.5">
                  <span>{projects[1].location}</span>
                  <span>{projects[1].areaSqm} · {projects[1].year}</span>
                </div>
                <Link href={`/projects/${projects[1].slug}`}>
                  <h3 className="font-serif text-2xl sm:text-3xl text-espresso hover:text-oxblood transition-colors font-light">
                    {projects[1].title}
                  </h3>
                </Link>
                <p className="text-umber text-sm leading-relaxed font-light">
                  {projects[1].subtitle[locale]}
                </p>
                <p className="text-[11px] font-mono uppercase tracking-widest text-bronze pt-1">
                  Smoked Crown-Cut Walnut · Portland Limestone · Cognac Leather
                </p>
              </div>
            </article>

            {/* Project 3: Rua do Palácio (Hospitality Stone Arches) */}
            <article className="lg:col-span-6 space-y-5">
              <Link
                href={`/projects/${projects[2].slug}`}
                className="block relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-obsidian border border-espresso/15 group"
              >
                <Image
                  src={projects[2].afterImage}
                  alt={projects[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center editorial-grade transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-sm text-limestone px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
                  COMMISSION 03 · HOSPITALITY LOUNGE
                </div>
                <div className="absolute bottom-4 right-4 bg-limestone text-espresso px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.16em] flex items-center gap-1.5 opacity-95 group-hover:bg-oxblood group-hover:text-limestone transition-colors">
                  <span>{locale === "en" ? "Explore Case Study" : "Ver Projeto"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-umber flex items-center justify-between border-b border-espresso/10 pb-2.5">
                  <span>{projects[2].location}</span>
                  <span>{projects[2].areaSqm} · {projects[2].year}</span>
                </div>
                <Link href={`/projects/${projects[2].slug}`}>
                  <h3 className="font-serif text-2xl sm:text-3xl text-espresso hover:text-oxblood transition-colors font-light">
                    {projects[2].title}
                  </h3>
                </Link>
                <p className="text-umber text-sm leading-relaxed font-light">
                  {projects[2].subtitle[locale]}
                </p>
                <p className="text-[11px] font-mono uppercase tracking-widest text-bronze pt-1">
                  19th-Century Stone Masonry · Terracotta Velvet · Aged Brass
                </p>
              </div>
            </article>
          </div>

          {/* COMMISSION 04: Alphaville II — The Collector's Salon (Ramon's Authentic Completed Masterpiece) */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-8 border-t border-espresso/15">
            <div className="lg:col-span-5 space-y-5 lg:order-1 order-2">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-umber border-b border-espresso/10 pb-3 flex items-center justify-between">
                <span>{projects[3].location}</span>
                <span>{projects[3].areaSqm} · {projects[3].year}</span>
              </div>
              <Link href={`/projects/${projects[3].slug}`} className="block">
                <h3 className="font-serif text-3xl sm:text-4xl text-espresso hover:text-oxblood transition-colors leading-tight font-light">
                  {projects[3].title}
                </h3>
              </Link>
              <p className="text-umber text-sm sm:text-base leading-relaxed font-light">
                {projects[3].subtitle[locale]}
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-bronze pt-2">
                Custom Boiserie · Solid Sucupira Hardwood · Classical Plinths
              </p>
              <div className="pt-2">
                <Link
                  href={`/projects/${projects[3].slug}`}
                  className="inline-flex items-center gap-2 bg-espresso hover:bg-oxblood text-limestone px-6 py-3 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
                >
                  <span>{locale === "en" ? "Inspect Masterpiece Dossier" : "Ver Dossiê da Obra"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-2 order-1">
              <Link
                href={`/projects/${projects[3].slug}`}
                className="block relative aspect-[16/10] w-full overflow-hidden bg-obsidian border border-espresso/15 group"
              >
                <Image
                  src="/images/residential_alphaville_1.png"
                  alt="Alphaville II Collector's Salon with custom boiserie and classical bust"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center editorial-grade transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-sm text-limestone px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
                  COMMISSION 04 · BESPOKE JOINERY ATELIER
                </div>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 4. THREE DECADES OF MASTER JOINERY (Museum-Grade Provenance Monograph) */}
      <CraftsmanshipZoomGallery />

      {/* 5. SPATIAL PSYCHOLOGY & NEURODESIGN (Atmospheric Grounding) */}
      <NeurodesignExplorer />

      {/* 6. THE PRINCIPAL: RAMON BENNETT (Editorial Salon Byline & Spatial Philosophy) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-24 lg:py-36 border-b border-espresso/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden border border-espresso/20 bg-travertine/40">
              <Image
                src="/images/people_ramon.png"
                alt="Ramon Bennett — Principal, Interior Architect, Author & Spatial Psychologist"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top editorial-grade"
              />
              <div className="absolute bottom-0 inset-x-0 bg-obsidian/90 backdrop-blur-sm p-5 text-limestone border-t border-limestone/15">
                <p className="font-serif text-2xl font-light">Ramon Bennett</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sandstone/80 mt-0.5">
                  PRINCIPAL · SPATIAL PSYCHOLOGY & INTERIOR ARCHITECTURE
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-bronze block">
              {locale === "en" ? "Founder & Philosophy" : "Fundador & Filosofia"}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-espresso tracking-tight leading-[1.04]">
              {locale === "en"
                ? "“A room is not a static picture. It is the emotional vessel of your daily life.”"
                : "“Uma sala não é uma imagem estática. É o refúgio emocional da sua vida diária.”"}
            </h2>

            <p className="text-umber text-base sm:text-lg leading-relaxed font-light">
              {locale === "en"
                ? "Having lived and practiced in London for 17 years across Human & Medical Sciences, Law, and Psychotherapy before uniting his family's 30-year bespoke joinery heritage in Salvador, Ramon Bennett approaches interior design not as surface decoration, but as an architectural extension of human intimacy."
                : "Após 17 anos em Londres dedicando-se às Ciências Humanas, Direito e Psicoterapia antes de unir o legado de 30 anos de alta marcenaria de sua família em Salvador, Ramon Bennett concebe a arquitetura de interiores não como decoração superficial, mas como uma extensão direta da intimidade humana."}
            </p>

            <div className="pt-2 pb-4 space-y-3 font-mono text-xs uppercase tracking-[0.16em] text-espresso border-y border-espresso/10 py-4">
              <div className="flex items-center justify-between">
                <span className="text-umber">London SW7 Practice</span>
                <span className="text-bronze">Spatial Psychology & Private Commissions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-umber">Salvador Bahia Atelier</span>
                <span className="text-bronze">Master Joinery Fabrication (Aunt Márcia)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/founder"
                className="inline-flex items-center gap-2 bg-espresso hover:bg-oxblood text-limestone px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
              >
                <span>
                  {locale === "en"
                    ? "Read Founder Monograph & Speaking Profile"
                    : "Ver Perfil Completo do Fundador & Palestras"}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={STUDIO_CONFIG.instagramStudio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-espresso/25 hover:border-bronze text-espresso px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-bronze" />
                <span>@ramonbennettinteriors</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE EDITORIAL JOURNAL (Lead Feature Monograph + Curated Reading Index) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-24 lg:py-36">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-espresso/15 pb-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-bronze block">
              {locale === "en" ? "Architectural Monographs" : "Monografias Arquitetônicas"}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-espresso tracking-tight">
              {locale === "en"
                ? "The Journal: Essays on Space, Craft & Neurodesign"
                : "Journal: Ensaios sobre Espaço, Ofício e Neurodesign"}
            </h2>
          </div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-oxblood hover:text-espresso font-medium transition-colors"
          >
            <span>{locale === "en" ? "View All Essays" : "Ver Todos os Ensaios"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gazette Layout: Lead Feature (7 cols) + Reading List (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Lead Monograph */}
          <article className="lg:col-span-7 space-y-6">
            <Link
              href={`/journal/${essays[0].slug}`}
              className="block relative aspect-[16/10] w-full overflow-hidden bg-obsidian border border-espresso/15 group"
            >
              <Image
                src={essays[0].coverImage}
                alt={essays[0].title[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center editorial-grade transition-transform duration-700 ease-editorial group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-sm text-limestone px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
                LEAD MONOGRAPH · {essays[0].category[locale]}
              </div>
            </Link>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-bronze">
                <span>{essays[0].date}</span>
                <span>·</span>
                <span>{essays[0].readTime}</span>
              </div>
              <Link href={`/journal/${essays[0].slug}`}>
                <h3 className="font-serif text-3xl sm:text-4xl text-espresso hover:text-oxblood transition-colors font-light leading-tight">
                  {essays[0].title[locale]}
                </h3>
              </Link>
              <p className="text-umber text-sm sm:text-base leading-relaxed font-light line-clamp-3">
                {essays[0].excerpt[locale]}
              </p>
              <div className="pt-2">
                <Link
                  href={`/journal/${essays[0].slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.16em] text-oxblood hover:text-espresso font-medium"
                >
                  <span>{locale === "en" ? "Read Full Essay" : "Ler Ensaio Completo"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Curated Monograph List */}
          <div className="lg:col-span-5 space-y-8 divide-y divide-espresso/15">
            {essays.slice(1, 3).map((essay) => (
              <article key={essay.slug} className="pt-8 first:pt-0 space-y-3 group">
                <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-bronze">
                  <span>{essay.category[locale]}</span>
                  <span>·</span>
                  <span>{essay.readTime}</span>
                </div>
                <Link href={`/journal/${essay.slug}`} className="block">
                  <h4 className="font-serif text-2xl text-espresso group-hover:text-oxblood transition-colors leading-snug font-light">
                    {essay.title[locale]}
                  </h4>
                </Link>
                <p className="text-xs sm:text-sm text-umber leading-relaxed font-light line-clamp-2">
                  {essay.excerpt[locale]}
                </p>
                <Link
                  href={`/journal/${essay.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-oxblood font-medium pt-1"
                >
                  <span>{locale === "en" ? "Open Monograph" : "Abrir Monografia"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN CINEMA MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-obsidian text-limestone border border-limestone/20 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-limestone/15 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-sandstone/70 block">
                  ATELIER CINEMA · LONDON & SALVADOR
                </span>
                <p className="font-serif text-2xl text-limestone font-light">
                  {locale === "en" ? "The Art of Understanding" : "A Arte de Compreender"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-2 border border-limestone/25 hover:border-limestone text-limestone transition-colors"
                aria-label="Close Cinema"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {heroVideoUrl && !videoFailed ? (
              <div className="aspect-video w-full bg-black overflow-hidden">
                <video
                  src={heroVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full overflow-hidden border border-limestone/15">
                <Image
                  src="/images/home_golden_living_room.png"
                  alt="Atelier Film Preview"
                  fill
                  sizes="100vw"
                  className="object-cover object-center animate-micro-life"
                />
                <div className="absolute inset-0 bg-obsidian/65 flex flex-col items-center justify-center text-center p-6 sm:p-10 space-y-5">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-bronze">
                    {locale === "en" ? "ATELIER PHILOSOPHY FILM" : "FILME & FILOSOFIA DO ESTÚDIO"}
                  </span>
                  <p className="font-serif text-3xl sm:text-5xl max-w-2xl font-light leading-snug">
                    {locale === "en"
                      ? "“Every space tells a story. Ours begins by listening.”"
                      : "“Cada espaço conta uma história. A nossa começa pela escuta.”"}
                  </p>
                  <p className="text-sm sm:text-base text-sandstone/85 max-w-xl font-light leading-relaxed">
                    {locale === "en"
                      ? "Ramon Bennett Interiors bridges 17 years of London spatial psychology with three decades of master bespoke joinery in Salvador. Every interior is sculpted as an enduring sanctuary for human connection."
                      : "Ramon Bennett Interiors une 17 anos de psicologia espacial em Londres a três décadas de alta marcenaria sob medida em Salvador. Cada espaço é esculpido como um refúgio atemporal para a conexão humana."}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setVideoModalOpen(false);
                        openConcierge();
                      }}
                      className="px-6 py-3.5 bg-oxblood text-limestone hover:bg-espresso font-mono text-xs uppercase tracking-[0.18em] transition-colors font-medium inline-flex items-center gap-2"
                    >
                      <span>{locale === "en" ? "Commission an Atmosphere" : "Solicitar Consultoria"}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <Link
                      href="/studio"
                      onClick={() => setVideoModalOpen(false)}
                      className="px-6 py-3.5 border border-limestone/30 hover:border-limestone text-limestone font-mono text-xs uppercase tracking-[0.18em] transition-colors font-medium inline-flex items-center gap-2"
                    >
                      <span>{locale === "en" ? "Explore Family Heritage" : "Conhecer o Atelier"}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
