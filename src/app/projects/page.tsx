"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, LayoutGrid, Rows3 } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

function PortfolioContent() {
  const { locale, projects, openConcierge } = useStudio();
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "All";

  const [category, setCategory] = useState<string>(initialCat);
  const [viewMode, setViewMode] = useState<"grid" | "stack">("stack");

  const categories = [
    "All",
    "Residential",
    "Hospitality",
    "Bespoke Joinery",
  ];

  const filtered =
    category === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );

  return (
    <div className="bg-limestone text-espresso min-h-screen">
      {/* Portfolio Header */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 pt-8 pb-16 border-b border-espresso/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.02]">
              {locale === "en"
                ? "Beyond the Space. The Individual."
                : "Além do Espaço. O Indivíduo."}
            </h1>
            <p className="text-umber text-base sm:text-lg max-w-2xl leading-relaxed">
              {locale === "en"
                ? "We create spaces that reflect who people are, honour who they have been, and embrace who they aspire to become. Inspect our residential, hospitality, and bespoke joinery commissions across London and Salvador."
                : "Criamos espaços que refletem quem as pessoas são, honram sua história e abraçam quem desejam se tornar. Explore nossas obras em Londres e Salvador."}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap items-center justify-between lg:justify-end gap-3">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-[0.15em] border transition-colors ${
                    category.toLowerCase() === cat.toLowerCase()
                      ? "bg-espresso text-limestone border-espresso"
                      : "border-espresso/20 text-espresso hover:border-bronze"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center border border-espresso/20">
              <button
                type="button"
                onClick={() => setViewMode("stack")}
                aria-label="Stack View"
                className={`p-2.5 ${
                  viewMode === "stack"
                    ? "bg-espresso text-limestone"
                    : "text-espresso"
                }`}
              >
                <Rows3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={`p-2.5 ${
                  viewMode === "grid"
                    ? "bg-espresso text-limestone"
                    : "text-espresso"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio List */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 lg:py-24">
        {filtered.length === 0 ? (
          <div className="p-12 bg-travertine/50 border border-espresso/15 text-center space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
              {locale === "en" ? "ACTIVE FILTER: " : "FILTRO ATIVO: "}
              {category}
            </p>
            <h2 className="font-serif text-3xl text-espresso">
              {locale === "en"
                ? `No commissions currently filed under "${category}"`
                : `Nenhum projeto listado na categoria "${category}"`}
            </h2>
            <p className="text-sm text-umber max-w-md mx-auto">
              {locale === "en"
                ? "Clear the active category filter to inspect our complete London and Salvador architectural portfolio."
                : "Limpe o filtro ativo para visualizar todas as obras em Londres e Salvador."}
            </p>
            <button
              type="button"
              onClick={() => setCategory("All")}
              className="px-6 py-3 bg-espresso text-limestone font-mono text-xs uppercase tracking-[0.18em]"
            >
              {locale === "en" ? "Show All Commissions" : "Mostrar Todas as Obras"}
            </button>
          </div>
        ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 gap-10"
              : "space-y-24"
          }
        >
          {filtered.map((project, idx) => (
            <article
              key={project.slug}
              className="border border-espresso/15 bg-travertine/35 p-6 sm:p-10 space-y-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-espresso/15 pb-6">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
                    COMMISSION 0{idx + 1} · {project.category} · {project.location}
                  </p>
                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="font-serif text-4xl sm:text-5xl text-espresso hover:text-oxblood transition-colors">
                      {project.title}
                    </h2>
                  </Link>
                  <p className="text-umber text-base max-w-2xl">
                    {project.subtitle[locale]}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 bg-oxblood hover:bg-espresso text-limestone px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
                  >
                    <span>
                      {locale === "en"
                        ? "Open Full Case Study"
                        : "Ver Dossiê Completo"}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => openConcierge(project.slug)}
                    className="inline-flex items-center gap-2 border border-espresso/25 hover:border-bronze px-5 py-3.5 text-xs font-mono uppercase tracking-[0.15em]"
                  >
                    <span>
                      {locale === "en"
                        ? "Inquire Similar Scope"
                        : "Solicitar Projeto Similar"}
                    </span>
                  </button>
                </div>
              </div>

              {viewMode === "stack" ? (
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
              ) : (
                <Link
                  href={`/projects/${project.slug}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-obsidian"
                >
                  <Image
                    src={project.afterImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center editorial-grade"
                  />
                </Link>
              )}
            </article>
          ))}
        </div>
        )}
      </section>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-limestone" />}>
      <PortfolioContent />
    </Suspense>
  );
}
