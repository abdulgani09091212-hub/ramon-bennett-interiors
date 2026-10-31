"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const { locale, projects, openConcierge } = useStudio();

  const project =
    projects.find((p) => p.slug === slug) || projects[0];

  const relatedProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <article className="bg-limestone text-espresso min-h-screen">
      {/* Top Breadcrumb & Metadata Header (1508 London Case Study Standard) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 pt-6 pb-12 border-b border-espresso/15">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-umber hover:text-espresso transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {locale === "en" ? "All Commissions" : "Todos os Projetos"}
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-[0.16em] text-umber tabular-nums">
            <span>{project.location}</span>
            <span className="text-bronze">·</span>
            <span>{project.coordinates}</span>
            <span className="text-bronze">·</span>
            <span>{project.areaSqm}</span>
            <span className="text-bronze">·</span>
            <span>{project.durationMonths}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.02]">
              {project.title}
            </h1>
            <p className="font-serif text-2xl sm:text-3xl italic text-oxblood font-light">
              {project.subtitle[locale]}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              type="button"
              onClick={() => openConcierge(project.slug)}
              className="inline-flex items-center gap-2.5 bg-oxblood hover:bg-espresso text-limestone px-7 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              <span>
                {locale === "en"
                  ? "Commission Similar Scope"
                  : "Encomendar Escopo Similar"}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Full-Bleed Hero Photograph */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-espresso/20 bg-obsidian">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center editorial-grade"
          />
        </div>
      </section>

      {/* The 3-Chapter Case Study Narrative: Psychological Brief, Architectural Cure & Bespoke Joinery */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 lg:py-24 border-b border-espresso/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-3 border-t-2 border-oxblood pt-6">
            <h2 className="font-serif text-3xl text-espresso">
              {locale === "en"
                ? "I. The Psychological Brief"
                : "I. O Diagnóstico Psicológico"}
            </h2>
            <p className="text-umber text-base leading-relaxed">
              {project.psychologicalBrief[locale]}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3 border-t-2 border-bronze pt-6">
            <h2 className="font-serif text-3xl text-espresso">
              {locale === "en"
                ? "II. The Architectural Cure"
                : "II. A Intervenção Arquitetônica"}
            </h2>
            <p className="text-umber text-base leading-relaxed">
              {project.architecturalCure[locale]}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3 border-t-2 border-espresso pt-6">
            <h2 className="font-serif text-3xl text-espresso">
              {locale === "en"
                ? "III. Bespoke Joinery & Governance"
                : "III. Alta Marcenaria & Entrega"}
            </h2>
            <p className="text-umber text-base leading-relaxed">
              {project.joineryStory[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Spatial Transformation Slider (Rendered only when matched pair exists) */}
      {project.beforeImage && project.beforeImage !== project.afterImage && (
        <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-20 lg:py-28 border-b border-espresso/15">
          <div className="mb-10 max-w-2xl space-y-2">
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-espresso">
              {locale === "en"
                ? "Interactive Before & After Site Comparison"
                : "Comparativo Interativo: Antes e Depois da Obra"}
            </h2>
            <p className="text-umber text-base">
              {locale === "en"
                ? "Drag the vertical handle or click any numbered diagnostic pin to inspect how the raw structure was transformed."
                : "Arraste o controle vertical ou clique nos pinos numerados para inspecionar cada detalhe da transformação."}
            </p>
          </div>

          <BeforeAfterSlider
            projectSlug={project.slug}
            projectTitle={project.title}
            location={project.location}
            coordinates={project.coordinates}
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
            beforeLabel={project.beforeLabel}
            afterLabel={project.afterLabel}
            curePins={project.curePins}
            showCaseStudyLink={false}
          />
        </section>
      )}

      {/* Materiality & Specification Board */}
      <section className="bg-travertine border-b border-espresso/15 py-20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-espresso">
              {locale === "en"
                ? "Materiality & Joinery Schedule"
                : "Caderno de Especificações e Materiais"}
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-umber">
              CURATED BETWEEN LONDON & SALVADOR ATELIER
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.materials.map((mat) => (
              <div
                key={mat.name}
                className="bg-limestone border border-espresso/15 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div
                    className="w-full h-20 border border-espresso/20"
                    style={{ backgroundColor: mat.swatchHex }}
                  />
                  <h3 className="font-serif text-2xl text-espresso">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-umber leading-relaxed">
                    {mat.role[locale]}
                  </p>
                </div>
                <div className="pt-3 border-t border-espresso/10 font-mono text-[11px] text-umber space-y-1">
                  <p>ORIGIN: {mat.origin}</p>
                  <p>FINISH: {mat.finish}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Photography Plates & Pull Quote */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-20 lg:py-28 space-y-16 border-b border-espresso/15">
        <blockquote className="max-w-4xl mx-auto text-center font-serif text-3xl sm:text-4xl lg:text-5xl italic font-light text-espresso leading-snug">
          “{project.pullQuote[locale]}”
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {project.galleryImages.map((img, i) => (
            <figure
              key={i}
              className={`space-y-3 ${
                i === 0 ? "md:col-span-12" : "md:col-span-6"
              }`}
            >
              <div
                className={`relative w-full overflow-hidden border border-espresso/15 bg-obsidian ${
                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.caption[locale]}
                  fill
                  sizes={i === 0 ? "100vw" : "50vw"}
                  className="object-cover object-center editorial-grade"
                />
              </div>
              <figcaption className="font-mono text-xs text-umber leading-relaxed">
                PLATE 0{i + 1} — {img.caption[locale]}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Related Commissions (1508 London Pattern) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso">
            {locale === "en" ? "Related Commissions" : "Outras Obras do Estúdio"}
          </h2>
          <Link
            href="/projects"
            className="text-xs font-mono uppercase tracking-[0.18em] text-oxblood hover:underline"
          >
            {locale === "en" ? "View All Works" : "Ver Portfólio Completo"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.slice(0, 3).map((rel) => (
            <Link
              key={rel.slug}
              href={`/projects/${rel.slug}`}
              className="group border border-espresso/15 bg-travertine/40 p-5 space-y-4"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian">
                <Image
                  src={rel.afterImage}
                  alt={rel.title}
                  fill
                  sizes="33vw"
                  className="object-cover object-center editorial-grade editorial-grade-zoom"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em] text-umber">
                <span>{rel.location}</span>
                <span>{rel.category}</span>
              </div>
              <h3 className="font-serif text-2xl text-espresso group-hover:text-oxblood transition-colors">
                {rel.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
