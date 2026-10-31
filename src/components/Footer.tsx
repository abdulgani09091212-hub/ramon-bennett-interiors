"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

export default function Footer() {
  const { locale, openConcierge } = useStudio();

  return (
    <footer className="bg-obsidian text-limestone border-t border-limestone/15">
      {/* Upper Monumental Call-to-Action */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-20 lg:py-28 border-b border-limestone/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.06] text-limestone">
              {locale === "en"
                ? "Every space tells a story. Ours begins by listening to yours."
                : "Cada espaço conta uma história. A nossa começa ao escutar a sua."}
            </h2>
            <p className="text-sandstone/80 max-w-2xl text-base sm:text-lg leading-relaxed">
              {locale === "en"
                ? "Available for private residential commissions, boutique hospitality architecture, bespoke Brazilian joinery, and international speaking across London, Salvador, and Europe."
                : "Disponível para projetos residenciais de alto padrão, hospitalidade, alta marcenaria sob medida e palestras internacionais em Londres, Salvador e Europa."}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <button
              type="button"
              onClick={() => openConcierge()}
              className="inline-flex items-center justify-center gap-3 bg-oxblood hover:bg-bronze text-limestone px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              <span>
                {locale === "en"
                  ? "Book Private Consultation (Cal.com)"
                  : "Agendar Consulta Privada (Cal.com)"}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${
                locale === "en"
                  ? STUDIO_CONFIG.whatsappLondon.replace(/\D/g, "")
                  : STUDIO_CONFIG.whatsappSalvador.replace(/\D/g, "")
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-limestone/25 hover:border-bronze text-limestone px-8 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
            >
              <span>
                {locale === "en"
                  ? "Direct Studio WhatsApp Concierge"
                  : "Concierge Direto via WhatsApp"}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
            </a>
          </div>
        </div>
      </div>

      {/* Global Studios Directory (Inspired by 1508 London + Locomotive) */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-limestone/10">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-9">
              <Image
                src="/images/logo_seahorse.png"
                alt="Ramon Bennett Luxury Interiors"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-serif text-xl tracking-[0.14em] uppercase text-limestone">
                Ramon Bennett
              </p>
              <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-bronze">
                LUXURY INTERIORS · LONDON | SALVADOR
              </p>
            </div>
          </div>
          <p className="text-sm text-sandstone/75 leading-relaxed max-w-sm">
            {locale === "en"
              ? "An international perspective, a 30-year family tradition in bespoke Bahian joinery, and a deeply personal approach to interior architecture informed by human psychology."
              : "Uma perspectiva internacional, 30 anos de tradição familiar em alta marcenaria baiana e uma abordagem profundamente pessoal à arquitetura de interiores."}
          </p>
          <div className="flex flex-col space-y-2 pt-2 text-xs font-mono tracking-[0.12em]">
            <a
              href={STUDIO_CONFIG.instagramStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sandstone hover:text-bronze transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-bronze" />
              <span>@ramonbennettinteriors (Studio Portfolio)</span>
            </a>
            <a
              href={STUDIO_CONFIG.instagramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sandstone hover:text-bronze transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-bronze" />
              <span>@ramonbennettofficial (Founder, Writing & Speaking)</span>
            </a>
          </div>
        </div>

        {/* London Studio */}
        {STUDIO_CONFIG.offices.map((office) => (
          <div key={office.city} className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-bronze">
              {office.city} STUDIO
            </p>
            <p className="font-serif text-xl text-limestone">
              {office.role[locale]}
            </p>
            <div className="space-y-2 text-sm text-sandstone/80 pt-1">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                <span>{office.address}</span>
              </p>
              <p className="font-mono text-xs text-sandstone/60 pl-6 tabular-nums">
                {office.coordinates}
              </p>
              <p className="flex items-center gap-2 pl-0.5">
                <Phone className="w-3.5 h-3.5 text-bronze flex-shrink-0" />
                <a href={`tel:${office.phone}`} className="hover:text-limestone transition-colors tabular-nums">
                  {office.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 pl-0.5">
                <Mail className="w-3.5 h-3.5 text-bronze flex-shrink-0" />
                <a href={`mailto:${office.email}`} className="hover:text-limestone transition-colors">
                  {office.email}
                </a>
              </p>
            </div>
          </div>
        ))}

        {/* Architectural Navigation Index */}
        <div className="lg:col-span-2 space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-bronze">
            {locale === "en" ? "INDEX" : "ÍNDICE"}
          </p>
          <ul className="space-y-2 text-sm text-sandstone/80">
            <li>
              <Link href="/projects" className="hover:text-limestone transition-colors">
                {locale === "en" ? "Selected Works" : "Portfólio"}
              </Link>
            </li>
            <li>
              <Link href="/projects/alphaville-i" className="hover:text-limestone transition-colors">
                Alphaville I (Before & After)
              </Link>
            </li>
            <li>
              <Link href="/projects/kensington-townhouse" className="hover:text-limestone transition-colors">
                Kensington Sanctuary
              </Link>
            </li>
            <li>
              <Link href="/projects/rua-do-palacio" className="hover:text-limestone transition-colors">
                Rua do Palácio
              </Link>
            </li>
            <li>
              <Link href="/studio" className="hover:text-limestone transition-colors">
                {locale === "en" ? "30-Year Family Heritage" : "Herança de 30 Anos"}
              </Link>
            </li>
            <li>
              <Link href="/founder" className="hover:text-limestone transition-colors">
                {locale === "en" ? "Founder & Speaking" : "Fundador & Palestras"}
              </Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-limestone transition-colors">
                {locale === "en" ? "Neurodesign Journal" : "Artigos Neurodesign"}
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-bronze hover:underline">
                {locale === "en" ? "Studio Admin CMS" : "Painel Admin"}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Colophon */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-sandstone/60">
        <p>© {new Date().getFullYear()} RAMON BENNETT INTERIORS LTD. ALL RIGHTS RESERVED.</p>
        <p>LONDON · SALVADOR · BESPOKE ARCHITECTURAL INTERIORS</p>
      </div>
    </footer>
  );
}
