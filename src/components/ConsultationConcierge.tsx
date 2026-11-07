"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Send, CheckCircle2, ArrowUpRight, MessageSquare } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

export default function ConsultationConcierge() {
  const { locale, isConciergeOpen, closeConcierge, preselectedProject, projects } =
    useStudio();

  const [activeTab, setActiveTab] = useState<"brief" | "cal">("brief");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("London, UK");
  const [scope, setScope] = useState("Turnkey Residential Architecture");
  const [budget, setBudget] = useState("£75,000 – £250,000+ (or BRL Equivalent)");
  const [referenceProject, setReferenceProject] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    message: string;
    whatsappUrl: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (preselectedProject) {
      setReferenceProject(preselectedProject);
    }
    return () => {};
  }, [preselectedProject]);

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape" && isConciergeOpen) {
        closeConcierge();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isConciergeOpen, closeConcierge]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!name.trim() || !email.trim()) {
      setErrorMsg(
        locale === "en"
          ? "Please provide your name and email address so our studio can respond."
          : "Por favor, informe seu nome e e-mail para retorno do estúdio."
      );
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name,
        email,
        phone,
        city,
        scope,
        budget,
        referenceProject,
        notes,
        locale,
        createdAt: new Date().toISOString(),
      };

      // Save locally as backup for /admin inspection
      try {
        const existing = JSON.parse(localStorage.getItem("rbi_inquiries") || "[]");
        localStorage.setItem("rbi_inquiries", JSON.stringify([payload, ...existing]));
      } catch {
        // ignore storage errors
      }

      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(
          data?.error ||
            (locale === "en"
              ? "Your brief is saved locally, but cloud transmission returned an error. Please retry or use the WhatsApp button below."
              : "Seu briefing foi salvo localmente, mas houve erro no envio. Tente novamente ou use o WhatsApp.")
        );
        return;
      }

      const waTarget =
        city.toLowerCase().includes("brazil") || city.toLowerCase().includes("salvador")
          ? STUDIO_CONFIG.whatsappSalvador.replace(/\D/g, "")
          : STUDIO_CONFIG.whatsappLondon.replace(/\D/g, "");

      const waText = encodeURIComponent(
        `Hello Ramon Bennett Studio, my name is ${name} (${city}). I just submitted a project brief for ${scope} (${budget}).`
      );

      setSubmittedData({
        message:
          data?.message ||
          (locale === "en"
            ? "Your private architectural dossier has been logged with our London & Salvador team."
            : "Seu briefing arquitetônico foi recebido por nossa equipe em Londres e Salvador."),
        whatsappUrl: `https://wa.me/${waTarget}?text=${waText}`,
      });
    } catch {
      setErrorMsg(
        locale === "en"
          ? "Network error while sending brief. Please use the direct WhatsApp or email option below."
          : "Erro de conexão ao enviar. Utilize o botão direto de WhatsApp abaixo."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isConciergeOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeConcierge}
            className="fixed inset-0 bg-obsidian/70 backdrop-blur-sm"
          />

          {/* Slide-Over Concierge Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            aria-label="Private Client Consultation Concierge"
            className="relative z-10 w-full max-w-2xl bg-limestone text-espresso h-full overflow-y-auto border-l border-espresso/20 p-6 sm:p-10 flex flex-col justify-between"
          >
            <div className="space-y-7">
              {/* Top Header */}
              <div className="flex items-start justify-between gap-4 border-b border-espresso/15 pb-5">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-oxblood font-semibold">
                    LONDON · SALVADOR PRIVATE CLIENT CONCIERGE
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl text-espresso mt-1">
                    {locale === "en"
                      ? "Commission a Space or Schedule a Discovery Call"
                      : "Iniciar um Projeto ou Agendar Reunião"}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeConcierge}
                  aria-label="Close Concierge Drawer"
                  className="p-2 border border-espresso/20 hover:border-espresso text-espresso transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mode Switcher: Project Brief (Brevo) vs Instant Calendar (Cal.com) */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("brief")}
                  className={`py-3 px-4 text-xs font-mono uppercase tracking-[0.15em] border flex items-center justify-center gap-2 transition-colors ${
                    activeTab === "brief"
                      ? "bg-espresso text-limestone border-espresso"
                      : "bg-travertine/60 text-espresso border-espresso/20 hover:border-bronze"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {locale === "en"
                      ? "1. Commission Dossier"
                      : "1. Dossiê do Projeto"}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cal")}
                  className={`py-3 px-4 text-xs font-mono uppercase tracking-[0.15em] border flex items-center justify-center gap-2 transition-colors ${
                    activeTab === "cal"
                      ? "bg-espresso text-limestone border-espresso"
                      : "bg-travertine/60 text-espresso border-espresso/20 hover:border-bronze"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {locale === "en"
                      ? "2. Private Video Session"
                      : "2. Sessão Privada de Vídeo"}
                  </span>
                </button>
              </div>

              {activeTab === "brief" ? (
                submittedData ? (
                  <div className="bg-travertine border border-bronze p-8 space-y-6">
                    <div className="flex items-center gap-3 text-oxblood">
                      <CheckCircle2 className="w-7 h-7" />
                      <h3 className="font-serif text-3xl text-espresso">
                        {locale === "en"
                          ? "Brief Received by Ramon Bennett Studio"
                          : "Solicitação Recebida com Sucesso"}
                      </h3>
                    </div>
                    <p className="text-umber text-sm leading-relaxed">
                      {submittedData.message}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={submittedData.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-oxblood text-limestone px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>
                          {locale === "en"
                            ? "Continue Immediately on WhatsApp"
                            : "Continuar Agora no WhatsApp"}
                        </span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setActiveTab("cal")}
                        className="inline-flex items-center justify-center gap-2 border border-espresso px-6 py-3.5 text-xs font-mono uppercase tracking-[0.16em]"
                      >
                        <span>
                          {locale === "en"
                            ? "Select Video Consultation Time"
                            : "Escolher Horário de Consulta"}
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMsg && (
                      <div className="p-3.5 bg-oxblood/10 border border-oxblood text-oxblood text-xs font-mono">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-umber mb-1.5">
                          {locale === "en" ? "Your Full Name *" : "Nome Completo *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Lady Victoria Sterling"
                          className="w-full bg-travertine/60 border border-espresso/25 px-4 py-3 text-sm text-espresso placeholder:text-umber/50"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-umber mb-1.5">
                          {locale === "en" ? "Email Address *" : "E-mail *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full bg-travertine/60 border border-espresso/25 px-4 py-3 text-sm text-espresso placeholder:text-umber/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-umber mb-1.5">
                          {locale === "en"
                            ? "WhatsApp / Telephone"
                            : "WhatsApp / Telefone"}
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 7700 900077 / +55 71..."
                          className="w-full bg-travertine/60 border border-espresso/25 px-4 py-3 text-sm text-espresso placeholder:text-umber/50"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-umber mb-1.5">
                          {locale === "en" ? "Property Location" : "Localização do Imóvel"}
                        </label>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full bg-travertine/60 border border-espresso/25 px-4 py-3 text-sm text-espresso"
                        >
                          <option value="London, UK">London / United Kingdom</option>
                          <option value="Salvador / Bahia, Brazil">
                            Salvador / Bahia, Brazil
                          </option>
                          <option value="São Paulo / Rio, Brazil">
                            São Paulo / Brazil
                          </option>
                          <option value="Europe / International">
                            Europe / Middle East / International
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-umber mb-1.5">
                          {locale === "en" ? "Commission Scope" : "Escopo Desejado"}
                        </label>
                        <select
                          value={scope}
                          onChange={(e) => setScope(e.target.value)}
                          className="w-full bg-travertine/60 border border-espresso/25 px-4 py-3 text-sm text-espresso"
                        >
                          <option value="Turnkey Residential Architecture">
                            Turnkey Residential Interior Architecture
                          </option>
                          <option value="Bespoke Joinery & Custom Millwork">
                            Bespoke Joinery & Furniture (Salvador Atelier)
                          </option>
                          <option value="Boutique Hospitality / Commercial">
                            Boutique Hospitality / Commercial Lounge
                          </option>
                          <option value="Neurodesign Audit / Speaking Engagement">
                            Spatial Psychology Advisory / Keynote Speaking
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-umber mb-1.5">
                          {locale === "en"
                            ? "Estimated Investment Tier"
                            : "Investimento Estimado"}
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-travertine/60 border border-espresso/25 px-4 py-3 text-sm text-espresso"
                        >
                          <option value="£25,000 – £75,000 (Single Room / Bespoke Joinery)">
                            £25,000 – £75,000 (or R$ 150k – R$ 450k)
                          </option>
                          <option value="£75,000 – £250,000 (Full Residence)">
                            £75,000 – £250,000 (or R$ 450k – R$ 1.5M)
                          </option>
                          <option value="£250,000+ (Turnkey Townhouse / Hospitality)">
                            £250,000+ (Turnkey Architectural Commission)
                          </option>
                          <option value="Private Advisory / Speaking Inquiry">
                            Private Advisory / Speaking Inquiry
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-umber mb-1.5">
                        {locale === "en"
                          ? "Aesthetic Reference Anchor (Optional)"
                          : "Projeto de Referência (Opcional)"}
                      </label>
                      <select
                        value={referenceProject}
                        onChange={(e) => setReferenceProject(e.target.value)}
                        className="w-full bg-travertine/60 border border-espresso/25 px-4 py-3 text-sm text-espresso"
                      >
                        <option value="">
                          {locale === "en"
                            ? "Select a portfolio reference..."
                            : "Selecione um projeto de referência..."}
                        </option>
                        {projects.map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.title} ({p.location})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-umber mb-1.5">
                        {locale === "en"
                          ? "Tell Us About Your Space & How You Want It to Feel"
                          : "Conte-nos Sobre o Seu Espaço e Suas Expectativas"}
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={
                          locale === "en"
                            ? "Share your property timeline, architectural challenges, or desired atmosphere..."
                            : "Compartilhe prazos, desafios arquitetônicos ou atmosfera desejada..."
                        }
                        className="w-full bg-travertine/60 border border-espresso/25 px-4 py-3 text-sm text-espresso placeholder:text-umber/50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-oxblood hover:bg-espresso text-limestone text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <span>
                        {submitting
                          ? locale === "en"
                            ? "Transmitting Brief to Studio..."
                            : "Enviando para o Estúdio..."
                          : locale === "en"
                          ? "Submit Private Project Brief"
                          : "Enviar Briefing Privado"}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                )
              ) : (
                /* Cal.com Embedded Scheduler View */
                <div className="space-y-4">
                  <div className="p-4 bg-travertine border border-espresso/15 flex items-center justify-between">
                    <div>
                      <p className="font-serif text-xl text-espresso">
                        {locale === "en"
                          ? "Direct Discovery Session with Ramon Bennett"
                          : "Sessão de Diagnóstico Direto com Ramon Bennett"}
                      </p>
                      <p className="text-xs text-umber">
                        {locale === "en"
                          ? "30-Minute Private Video Consultation (London GMT / Salvador BRT)"
                          : "30 Minutos por Vídeo ou Presencial (Londres / Salvador)"}
                      </p>
                    </div>
                    <a
                      href={`https://cal.com/${STUDIO_CONFIG.calLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.14em] text-oxblood underline underline-offset-4"
                    >
                      <span>{locale === "en" ? "Open Fullscreen Scheduler" : "Abrir Agendador Completo"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="w-full h-[440px] border border-espresso/20 bg-travertine/40 overflow-hidden relative">
                    <iframe
                      title="Private Consultation Booking"
                      src={`https://cal.com/${STUDIO_CONFIG.calLink}?embed=true&theme=light`}
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Reassurance Footer */}
            <div className="pt-6 mt-6 border-t border-espresso/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-umber">
              <span>CONFIDENTIAL STUDIO ARCHITECTURE · LONDON & SALVADOR</span>
              <span>RESPONSE WITHIN 24 HOURS</span>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
