"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, ShieldCheck, Clock, UserCheck } from "lucide-react";
import { STUDIO_COMMISSION_PROTOCOL } from "@/data/studioData";
import { useStudio } from "@/context/StudioContext";

export default function StudioCommissionProtocol() {
  const { locale, openConcierge } = useStudio();
  const [activeStep, setActiveStep] = useState(0);
  const current = STUDIO_COMMISSION_PROTOCOL[activeStep] || STUDIO_COMMISSION_PROTOCOL[0];

  return (
    <section className="py-24 lg:py-36 bg-[#F6F3EC] text-[#181412] border-b border-[#181412]/15">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-[#181412]/15 pb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8C6239] block">
              {locale === "en"
                ? "THE COMMISSION PROTOCOL · FROM BRIEF TO HANDOVER"
                : "PROTOCOLO DE COMISSÃO · DO BRIEFING À ENTREGA"}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#181412] tracking-tight leading-[1.04]">
              {locale === "en"
                ? "How We Execute Across Two Continents."
                : "Como Conduzimos Cada Obra Entre Dois Continentes."}
            </h2>
          </div>
          <div className="lg:col-span-4 space-y-3">
            <p className="text-[#524942] text-base leading-relaxed font-light">
              {locale === "en"
                ? "Private architecture requires unshakeable predictability. Our 4-stage delivery framework eliminates revision loops, protects fixed budgets, and unifies clinical spatial psychology with 30 years of master joinery."
                : "Arquitetura de alto padrão exige previsibilidade absoluta. Nosso protocolo em 4 etapas elimina retrabalho, blinda orçamentos e une psicologia espacial à alta marcenaria familiar."}
            </p>
          </div>
        </div>

        {/* 4-Step Interactive Progression Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STUDIO_COMMISSION_PROTOCOL.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.phase}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-6 text-left border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  isActive
                    ? "bg-[#181412] text-[#F6F3EC] border-[#181412] shadow-xl"
                    : "bg-[#EDE6D8]/60 hover:bg-[#EDE6D8] text-[#181412] border-[#181412]/15"
                }`}
              >
                <div className="flex items-center justify-between w-full border-b border-current/15 pb-3">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.2em] ${isActive ? "text-[#8C6239]" : "text-[#524942]"}`}>
                    {step.phase}
                  </span>
                  <span className="font-mono text-xs tabular-nums opacity-75">
                    {step.duration[locale]}
                  </span>
                </div>

                <div className="space-y-1.5 flex-grow">
                  <h3 className="font-serif text-xl sm:text-2xl font-light leading-snug">
                    {step.title[locale]}
                  </h3>
                  <p className={`text-xs font-mono uppercase tracking-wider ${isActive ? "text-[#D8CEBE]" : "text-[#8C6239]"}`}>
                    {step.lead[locale]}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="opacity-70">
                    {locale === "en" ? "Inspect Phase" : "Ver Detalhes"}
                  </span>
                  <span className="text-sm">→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.phase}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-12 bg-[#EDE6D8] border border-[#181412]/15 shadow-sm space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Left Column: Narrative & Focus */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-[#8C6239]">
                  <span>{current.phase}</span>
                  <span>·</span>
                  <span>{current.duration[locale]}</span>
                  <span>·</span>
                  <span className="text-[#181412] font-medium">{current.lead[locale]}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#181412] font-light leading-snug">
                  {current.title[locale]}
                </h3>

                <p className="text-[#524942] text-base leading-relaxed font-light">
                  {current.desc[locale]}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => openConcierge()}
                    className="inline-flex items-center gap-2 bg-[#181412] hover:bg-[#4A1E1B] text-[#F6F3EC] px-6 py-3.5 text-xs font-mono uppercase tracking-[0.18em] transition-colors font-medium"
                  >
                    <span>
                      {locale === "en"
                        ? "Initiate Phase 01 Discovery Call"
                        : "Iniciar Diagnóstico da Etapa 01"}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-[#181412]/20 hover:border-[#8C6239] text-[#181412] px-5 py-3.5 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
                  >
                    <span>
                      {locale === "en" ? "Schedule Consultation" : "Agendar Consulta"}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Tangible Phase Deliverables */}
              <div className="lg:col-span-5 bg-[#F6F3EC] p-6 sm:p-8 border border-[#181412]/10 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8C6239] border-b border-[#181412]/10 pb-3 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#8C6239]" />
                  <span>
                    {locale === "en" ? "Contractual Phase Deliverables" : "Entregas Contratuais da Etapa"}
                  </span>
                </div>

                <ul className="space-y-4">
                  {current.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#181412]">
                      <span className="w-5 h-5 rounded-full bg-[#181412] text-[#F6F3EC] flex items-center justify-center text-[10px] font-mono flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="font-light leading-relaxed">
                        {deliv[locale]}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[#181412]/10 text-[11px] font-mono text-[#524942] flex items-center justify-between">
                  <span>
                    {locale === "en" ? "Governance:" : "Governança:"}
                  </span>
                  <span className="text-[#8C6239] font-medium">
                    {locale === "en" ? "100% Milestone Sign-Off Gated" : "Aprovação Formal por Marco"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
