"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, Calendar, X, ArrowUpRight } from "lucide-react";
import { useStudio } from "@/context/StudioContext";

export default function VipConciergePill() {
  const { locale, openConcierge } = useStudio();
  const [openMenu, setOpenMenu] = useState(false);

  const whatsappMessage =
    locale === "en"
      ? "Hello Ramon, I am inquiring about a private architectural commission with Ramon Bennett Interiors."
      : "Olá Ramon, gostaria de consultar a disponibilidade do estúdio para um projeto privado de arquitetura.";

  const whatsappLondon = `https://wa.me/442079460921?text=${encodeURIComponent(whatsappMessage)}`;
  const whatsappSalvador = `https://wa.me/5571999824100?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside aria-label="Private Studio Concierge" className="fixed bottom-6 right-6 z-30 font-sans">
      {/* Floating Expanded Luxury Menu */}
      {openMenu && (
        <div className="mb-3 w-80 bg-obsidian border border-limestone/20 p-5 shadow-2xl text-limestone animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start justify-between border-b border-limestone/15 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-6 h-5 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo_seahorse.png"
                  alt="Ramon Bennett Crest"
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-serif text-sm tracking-wide text-limestone">
                  Ramon Bennett
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sandstone/70">
                  Private Client Concierge
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenMenu(false)}
              className="text-sandstone/70 hover:text-limestone p-1"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-sandstone/85 leading-relaxed mb-4 font-light">
            {locale === "en"
              ? "For urgent commissions, bespoke joinery inquiries, or confidential consultations directly with the principal."
              : "Para projetos prioritários, marcenaria sob medida ou atendimento direto com Ramon Bennett."}
          </p>

          <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.14em]">
            <a
              href={whatsappLondon}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-limestone/5 hover:bg-oxblood/80 border border-limestone/10 hover:border-oxblood text-limestone transition-colors"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-sandstone" />
                <span>London WhatsApp (SW7)</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={whatsappSalvador}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-limestone/5 hover:bg-bronze/80 border border-limestone/10 hover:border-bronze text-limestone transition-colors"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-sandstone" />
                <span>Salvador WhatsApp (BR)</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => {
                setOpenMenu(false);
                openConcierge();
              }}
              className="w-full flex items-center justify-between p-3 bg-limestone text-espresso hover:bg-oxblood hover:text-limestone transition-colors font-medium"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-current" />
                <span>
                  {locale === "en" ? "Schedule Brief / Zoom" : "Agendar Consulta"}
                </span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-limestone/10 flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.18em] text-sandstone/60">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct Studio Line
            </span>
            <span>Est. 1996</span>
          </div>
        </div>
      )}

      {/* Primary Floating Action Pill */}
      <button
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
        className="group flex items-center gap-2.5 bg-obsidian text-limestone border border-limestone/25 px-4 py-2.5 shadow-xl hover:border-bronze hover:bg-espresso transition-all duration-300"
      >
        <div className="relative w-4 h-4 overflow-hidden flex-shrink-0">
          <Image
            src="/images/logo_seahorse.png"
            alt=""
            fill
            sizes="16px"
            className="object-contain"
          />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium hidden sm:inline">
          {locale === "en" ? "Private Concierge" : "Concierge Privado"}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium sm:hidden">
          {locale === "en" ? "Concierge" : "Contato"}
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
      </button>
    </aside>
  );
}
