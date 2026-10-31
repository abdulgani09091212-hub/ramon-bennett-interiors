"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  X,
  LayoutGrid,
  Rows3,
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
  const [portfolioCategory, setPortfolioCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "stack">("grid");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const activeTransformation =
    projects[selectedTransformationIndex] || projects[0];

  const categories = [
    "All",
    "Residential",
    "Hospitality",
    "Bespoke Joinery",
  ];

  const filteredProjects =
    portfolioCategory === "All"
      ? projects
      : projects.filter((p) => p.category === portfolioCategory);

  return (
    <div className="bg-limestone text-espresso">
      {/* 1. FIRST VIEWPORT: EDITORIAL ARCHITECTURAL HERO + MICRO-LIFE SHOWCASE */}
      <section className="relative max-w-[1440px] mx-auto px-5 md:px-10 pt-4 pb-20 lg:pb-28 border-b border-espresso/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-8">
          <div className="lg:col-span-8">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-5xl sm:text-6xl lg:text-[76px] font-light tracking-tight leading-[1.01] text-espresso"
              >
                {locale === "en" ? (
                  <>
                    The Art of Understanding.{" "}
                    <span className="italic font-normal text-oxblood">
                      Crafted Across Two Continents.
                    </span>
                  </>
                ) : (
                  <>
                    A Arte de Compreender.{" "}
                    <span className="italic font-normal text-oxblood">
                      Esculpida Entre Dois Continentes.
                    </span>
                  </>
                )}
              </motion.h1>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <p className="text-umber text-base sm:text-lg leading-relaxed">
              {locale === "en"
                ? "Every space tells a story. Ours begins by listening. Uniting London spatial psychology with 30 years of bespoke Brazilian joinery in Salvador."
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

        {/* Full-Bleed Architectural Frame with Micro-Life Loop & Cinema Modal Trigger */}
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

          {/* Subtle Bottom Architectural Metadata Bar (MOUTHWASH Studio / 1508 London inspired) */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent p-5 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-limestone">
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sandstone/80 tabular-nums">
                FEATURED COMMISSION · LONDON SW7 & SALVADOR BAHIA
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
                className="inline-flex items-center gap-2.5 bg-limestone/95 hover:bg-oxblood text-espresso hover:text-limestone px-5 py-3 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
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

      {/* 2. INTERACTIVE BEFORE & AFTER SPATIAL TRANSFORMATION LAB */}
      <section
        id="transformations"
        className="max-w-[1440px] mx-auto px-5 md:px-10 py-24 lg:py-32 border-b border-espresso/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.04]">
              {locale === "en"
                ? "Spatial Transformations: Before & After the Cure"
                : "Transformações Espaciais: Antes e Depois da Intervenção"}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-umber text-base leading-relaxed">
              {locale === "en"
                ? "Anyone can photograph a styled room. True architectural authority is proven by how we resolve structural bottlenecks, harsh acoustics, and fragmented layouts. Drag the divider or switch commissions below."
                : "A verdadeira autoridade arquitetônica se prova na forma como resolvemos gargalos estruturais, iluminação fria e plantas compartimentadas. Arraste o divisor ou alterne entre as obras abaixo."}
            </p>
            {/* Commission Switcher */}
            <div className="flex flex-wrap gap-2 pt-1">
              {projects.slice(0, 3).map((proj, idx) => (
                <button
                  key={proj.slug}
                  type="button"
                  onClick={() => setSelectedTransformationIndex(idx)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] border transition-colors ${
                    selectedTransformationIndex === idx
                      ? "bg-oxblood text-limestone border-oxblood"
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

      {/* 3. CURATED PORTFOLIO CASE STUDIES (Instrument Stack/Grid Switcher + Sophie Paterson Editorial Scale) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-espresso/15 pb-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.04]">
              {locale === "en"
                ? "Selected Architectural Commissions"
                : "Obras e Comissões Selecionadas"}
            </h2>
            <p className="text-umber text-base">
              {locale === "en"
                ? "Each commission is approached as an enduring portrait of the individuals who inhabit it—combining emotional intelligence with technical precision."
                : "Cada projeto é concebido como um retrato duradouro de quem o habita — unindo inteligência emocional e precisão construtiva."}
            </p>
          </div>

          {/* Filter Pills & View Switcher (Mobbin Instrument Pattern) */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setPortfolioCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-[0.14em] border transition-colors ${
                    portfolioCategory === cat
                      ? "bg-espresso text-limestone border-espresso"
                      : "bg-transparent text-espresso border-espresso/20 hover:border-bronze"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center border border-espresso/20">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={`p-2.5 ${
                  viewMode === "grid"
                    ? "bg-espresso text-limestone"
                    : "text-espresso hover:bg-travertine"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("stack")}
                aria-label="Editorial Stack View"
                className={`p-2.5 ${
                  viewMode === "stack"
                    ? "bg-espresso text-limestone"
                    : "text-espresso hover:bg-travertine"
                }`}
              >
                <Rows3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
              : "space-y-16"
          }
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.slug}
              className={`group border border-espresso/15 bg-travertine/40 flex flex-col justify-between ${
                viewMode === "stack"
                  ? "lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center p-6 sm:p-8"
                  : "p-5 sm:p-7"
              }`}
            >
              <div
                className={
                  viewMode === "stack" ? "lg:col-span-7" : "w-full mb-6"
                }
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-obsidian"
                >
                  <Image
                    src={project.afterImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center editorial-grade editorial-grade-zoom"
                  />
                  <div className="absolute top-4 left-4 bg-obsidian/80 backdrop-blur-sm text-limestone px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em]">
                    0{index + 1} · {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-limestone/95 text-espresso px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] flex items-center gap-1.5 opacity-95 group-hover:bg-oxblood group-hover:text-limestone transition-colors">
                    <span>
                      {locale === "en" ? "Explore Case Study" : "Ver Projeto"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>

              <div
                className={`space-y-4 ${
                  viewMode === "stack" ? "lg:col-span-5 mt-6 lg:mt-0" : ""
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.16em] text-umber tabular-nums border-b border-espresso/10 pb-2.5">
                  <span>{project.location}</span>
                  <span>
                    {project.areaSqm} · {project.year}
                  </span>
                </div>

                <Link href={`/projects/${project.slug}`} className="block">
                  <h3 className="font-serif text-3xl sm:text-4xl text-espresso group-hover:text-oxblood transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-umber text-sm sm:text-base leading-relaxed">
                  {project.subtitle[locale]}
                </p>

                {/* Material Swatch Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  {project.materials.slice(0, 3).map((mat) => (
                    <span
                      key={mat.name}
                      className="inline-flex items-center gap-2 px-2.5 py-1 bg-limestone border border-espresso/15 text-[11px] font-mono text-espresso"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-espresso/30"
                        style={{ backgroundColor: mat.swatchHex }}
                      />
                      {mat.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. THREE PERSPECTIVES & 30-YEAR BESPOKE JOINERY PARALLAX GALLERY */}
      <CraftsmanshipZoomGallery />

      {/* 5. SPATIAL PSYCHOLOGY & NEURODESIGN INTERACTIVE EXPLORER */}
      <NeurodesignExplorer />

      {/* 6. UNIFIED FOUNDER IDENTITY: RAMON BENNETT (@ramonbennettofficial + @ramonbennettinteriors) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-24 lg:py-32 border-b border-espresso/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden border border-espresso/20 bg-obsidian">
              <Image
                src="/images/people_ramon.png"
                alt="Ramon Bennett — Founder, Interior Architect, Writer & Speaker"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top editorial-grade"
              />
              <div className="absolute bottom-0 inset-x-0 bg-obsidian/90 backdrop-blur-sm p-5 text-limestone border-t border-limestone/15">
                <p className="font-serif text-2xl">Ramon Bennett</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze mt-0.5">
                  FOUNDER · INTERIOR ARCHITECT · AUTHOR & SPEAKER
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-espresso tracking-tight leading-[1.05]">
              {locale === "en"
                ? "One Unified Philosophy: Interior Architecture, Human Relationships & The Art of Living."
                : "Uma Filosofia Única: Arquitetura de Interiores, Relações Humanas e a Arte de Viver."}
            </h2>

            <p className="text-umber text-base sm:text-lg leading-relaxed">
              {locale === "en"
                ? "Having lived and worked in London for 17 years across Human & Medical Sciences, Law, and Psychotherapy before returning to unite his family's 30-year bespoke joinery heritage in Salvador, Ramon Bennett approaches interior design not as surface decoration, but as an extension of human psychology."
                : "Após viver por 17 anos em Londres dedicando-se às Ciências Humanas, Direito e Psicoterapia antes de unir o legado de 30 anos de alta marcenaria de sua família em Salvador, Ramon Bennett concebe o design de interiores como uma extensão direta da psicologia humana."}
            </p>

            <p className="text-umber text-base leading-relaxed">
              {locale === "en"
                ? "Through his writing, international speaking (@ramonbennettofficial), and architectural commissions (@ramonbennettinteriors), his work explores a single enduring question: how do the spaces we inhabit shape the way we think, rest, and connect with those we love?"
                : "Por meio de seus livros, palestras (@ramonbennettofficial) e projetos arquitetônicos (@ramonbennettinteriors), seu trabalho responde a uma pergunta essencial: como os espaços que habitamos moldam nossa mente, nosso descanso e nossas relações?"}
            </p>

            {/* Dual Brand Ecosystem Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={STUDIO_CONFIG.instagramStudio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-travertine border border-espresso/15 hover:border-oxblood transition-colors group"
              >
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.16em] text-oxblood mb-2">
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    @ramonbennettinteriors
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="font-serif text-xl text-espresso">
                  {locale === "en"
                    ? "The Architectural Portfolio"
                    : "O Portfólio Arquitetônico"}
                </p>
                <p className="text-xs text-umber mt-1">
                  {locale === "en"
                    ? "Curated residential, hospitality & bespoke joinery commissions in London and Salvador."
                    : "Projetos residenciais, hospitalidade e alta marcenaria sob medida em Londres e Salvador."}
                </p>
              </a>

              <a
                href={STUDIO_CONFIG.instagramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-travertine border border-espresso/15 hover:border-oxblood transition-colors group"
              >
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.16em] text-oxblood mb-2">
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    @ramonbennettofficial
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="font-serif text-xl text-espresso">
                  {locale === "en"
                    ? "Personal Brand, Writing & Speaking"
                    : "Marca Pessoal, Escrita & Palestras"}
                </p>
                <p className="text-xs text-umber mt-1">
                  {locale === "en"
                    ? "Editorial essays, keynotes, human relationships, and the psychology of luxury living."
                    : "Ensaios editoriais, palestras, relações humanas e a psicologia do viver com propósito."}
                </p>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/founder"
                className="inline-flex items-center gap-2 bg-espresso hover:bg-oxblood text-limestone px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
              >
                <span>
                  {locale === "en"
                    ? "Explore Founder & Speaking Profile"
                    : "Ver Perfil do Fundador & Palestras"}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EDITORIAL JOURNAL & ESSAYS */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-24 lg:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 border-b border-espresso/15 pb-8">
          <div className="space-y-2">
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-espresso tracking-tight">
              {locale === "en"
                ? "The Journal: Essays on Space, Craft & Human Connection"
                : "Journal: Ensaios sobre Espaço, Ofício e Relações Humanas"}
            </h2>
          </div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-oxblood hover:text-espresso font-medium"
          >
            <span>
              {locale === "en" ? "Read All Essays" : "Ler Todos os Ensaios"}
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {essays.slice(0, 3).map((essay) => (
            <Link
              key={essay.slug}
              href={`/journal/${essay.slug}`}
              className="group border border-espresso/15 bg-travertine/35 p-5 flex flex-col justify-between hover:border-bronze transition-colors"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian">
                  <Image
                    src={essay.coverImage}
                    alt={essay.title[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center editorial-grade editorial-grade-zoom"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em] text-bronze">
                  <span>{essay.category[locale]}</span>
                  <span>{essay.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl text-espresso group-hover:text-oxblood transition-colors leading-snug">
                  {essay.title[locale]}
                </h3>
                <p className="text-sm text-umber leading-relaxed line-clamp-3">
                  {essay.excerpt[locale]}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-espresso/10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.16em] text-espresso">
                <span>{locale === "en" ? "Read Essay" : "Ler Ensaio"}</span>
                <ArrowUpRight className="w-4 h-4 text-oxblood" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FULLSCREEN ATELIER FILM & PHILOSOPHY MODAL */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-md flex items-center justify-center p-5 md:p-12"
          >
            <div className="max-w-5xl w-full bg-obsidian border border-limestone/20 p-6 sm:p-8 space-y-6 text-limestone">
              <div className="flex items-center justify-between border-b border-limestone/15 pb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
                    RAMON BENNETT INTERIORS · ATELIER SHOWREEL
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl mt-1">
                    {locale === "en"
                      ? "The Art of Understanding — London & Salvador"
                      : "A Arte de Compreender — Londres & Salvador"}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="p-2 border border-limestone/25 hover:border-limestone"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {heroVideoUrl ? (
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
                  <div className="absolute inset-0 bg-obsidian/55 flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <p className="font-serif text-3xl sm:text-4xl max-w-2xl">
                      {locale === "en"
                        ? "“Every space tells a story. Ours begins by listening.”"
                        : "“Cada espaço conta uma história. A nossa começa pela escuta.”"}
                    </p>
                    <p className="text-sm text-sandstone/85 max-w-xl">
                      {locale === "en"
                        ? "Ramon can paste or upload his custom Homepage MP4 Showreel at any time via the Studio Visual CMS (/admin) and it will automatically play here and in the homepage background."
                        : "Você pode adicionar ou atualizar o vídeo principal MP4 a qualquer momento através do Painel Visual (/admin)."}
                    </p>
                    <Link
                      href="/admin"
                      onClick={() => setVideoModalOpen(false)}
                      className="inline-flex items-center gap-2 bg-oxblood text-limestone px-6 py-3 text-xs font-mono uppercase tracking-[0.18em]"
                    >
                      <span>
                        {locale === "en"
                          ? "Open Studio Video Manager (/admin)"
                          : "Abrir Gerenciador de Vídeo (/admin)"}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
