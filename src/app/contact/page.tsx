"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Calendar, CheckCircle2, ArrowUpRight, Instagram, MessageSquare } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

export default function ContactPage() {
  const { locale } = useStudio();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "London, UK",
    projectType: "Turnkey Residential Architecture",
    budgetRange: "£150,000 – £350,000+ / R$ 800k+",
    timeline: "Within 1–3 Months",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [syncMode, setSyncMode] = useState<"remote" | "local">("remote");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"brief" | "calendar">("brief");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    const savedList = JSON.parse(localStorage.getItem("rbi_inquiries") || "[]");
    localStorage.setItem(
      "rbi_inquiries",
      JSON.stringify([
        { ...formState, id: Date.now().toString(), createdAt: new Date().toISOString() },
        ...savedList,
      ])
    );

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, locale, submittedAt: new Date().toISOString() }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        setErrorMessage(
          errData?.error ||
            (locale === "en"
              ? "Your brief was saved on this device, but cloud transmission to the studio encountered an error. Please retry or use direct WhatsApp."
              : "Seu briefing foi salvo neste dispositivo, mas houve falha na transmissão em nuvem. Tente novamente ou use o WhatsApp.")
        );
        setStatus("error");
        return;
      }

      const data = await res.json();
      setSyncMode(data?.brevoConnected ? "remote" : "local");
      setStatus("success");
    } catch {
      setErrorMessage(
        locale === "en"
          ? "Network connection interrupted. Your entries are preserved below and saved locally—please retry or message our WhatsApp concierge."
          : "Conexão interrompida. Seus dados foram preservados abaixo — tente novamente ou chame no WhatsApp."
      );
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#181412] pt-28 md:pt-36">
      {/* Top Heading */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24 border-b border-[#181412]/10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-[#181412]"
          >
            {locale === "en"
              ? "Every Space Tells a Story. Ours Begins by Listening."
              : "Cada Espaço Conta uma História. A Nossa Começa Pela Escuta."}
          </motion.h1>
          <p className="mt-6 text-lg md:text-2xl text-[#524942] font-light leading-relaxed">
            {locale === "en"
              ? "Initiate a private architectural commission, bespoke joinery inquiry, or keynote speaking invitation across our London and Salvador studios."
              : "Inicie uma consulta para projeto de arquitetura de interiores, alta marcenaria sob medida ou palestras entre nossos estúdios em Londres e Salvador."}
          </p>
        </div>
      </section>

      {/* Main Split Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Dual Studio Coordinates & Direct Channels */}
          <div className="lg:col-span-5 space-y-10">
            {STUDIO_CONFIG.offices.map((office) => (
              <div
                key={office.city}
                className="p-8 bg-[#EDE6D8] border border-[#181412]/10 space-y-4"
              >
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239]">
                  <span>{office.city} STUDIO</span>
                  <span>{office.coordinates}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#181412]">
                  {office.role[locale]}
                </h2>
                <div className="space-y-2.5 pt-2 text-sm text-[#524942]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#8C6239] shrink-0 mt-1" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#8C6239] shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-[#181412]">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#8C6239] shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#181412]">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Direct WhatsApp & Instagram Concierge */}
            <div className="p-8 bg-[#161311] text-[#F6F3EC] space-y-5">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#C59B6D]">
                {locale === "en" ? "Direct Executive Channels" : "Canais Executivos Diretos"}
              </div>
              <h3 className="font-serif text-2xl">
                {locale === "en"
                  ? "Prefer Instant WhatsApp or Instagram Direct?"
                  : "Prefere Contato Direto via WhatsApp ou Instagram?"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappLondon.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-[#1F1B18] border border-[#F6F3EC]/15 hover:border-[#8C6239] text-xs font-mono uppercase tracking-wider"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#C59B6D]" />
                    WhatsApp UK
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappSalvador.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-[#1F1B18] border border-[#F6F3EC]/15 hover:border-[#8C6239] text-xs font-mono uppercase tracking-wider"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#C59B6D]" />
                    WhatsApp BR
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={STUDIO_CONFIG.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-[#1F1B18] border border-[#F6F3EC]/15 hover:border-[#8C6239] text-xs font-mono"
                >
                  <span className="inline-flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-[#C59B6D]" />
                    @ramonbennettofficial
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={STUDIO_CONFIG.instagramStudio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-[#1F1B18] border border-[#F6F3EC]/15 hover:border-[#8C6239] text-xs font-mono"
                >
                  <span className="inline-flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-[#C59B6D]" />
                    @ramonbennettinteriors
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief + Cal.com Live Scheduler */}
          <div className="lg:col-span-7 bg-[#EDE6D8] border border-[#181412]/15 p-8 md:p-12">
            {/* Switcher Tabs */}
            <div className="flex border-b border-[#181412]/15 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab("brief")}
                className={`pb-4 px-4 font-mono text-xs uppercase tracking-[0.2em] border-b-2 transition-colors ${
                  activeTab === "brief"
                    ? "border-[#8C6239] text-[#181412] font-semibold"
                    : "border-transparent text-[#524942] hover:text-[#181412]"
                }`}
              >
                01. {locale === "en" ? "Submit Project Brief" : "Enviar Dossiê de Projeto"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("calendar")}
                className={`pb-4 px-4 font-mono text-xs uppercase tracking-[0.2em] border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === "calendar"
                    ? "border-[#8C6239] text-[#181412] font-semibold"
                    : "border-transparent text-[#524942] hover:text-[#181412]"
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                02. {locale === "en" ? "Live Calendar Scheduler" : "Agendamento ao Vivo"}
              </button>
            </div>

            {activeTab === "brief" ? (
              status === "success" ? (
                <div className="py-16 text-center space-y-6" role="status" aria-live="polite">
                  <CheckCircle2 className="w-14 h-14 text-[#8C6239] mx-auto" />
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F6F3EC] border border-[#8C6239]/40 font-mono text-[11px] uppercase tracking-widest text-[#8C6239]">
                    {locale === "en"
                      ? "CONFIRMED: TRANSMITTED TO PRINCIPAL ARCHITECT"
                      : "CONFIRMADO: TRANSMITIDO AO ARQUITETO PRINCIPAL"}
                  </div>
                  <h3 className="font-serif text-3xl text-[#181412]">
                    {locale === "en"
                      ? "Your Architectural Dossier Has Been Logged"
                      : "Seu Briefing Arquitetônico Foi Registrado"}
                  </h3>
                  <p className="text-[#524942] max-w-md mx-auto text-sm leading-relaxed">
                    {locale === "en"
                      ? "Ramon Bennett and Mariana Figueiredo review all commissions personally. You will receive a private response within 24 business hours, or you may lock in your consultation slot immediately via our live calendar."
                      : "Ramon Bennett e Mariana Figueiredo analisam todas as solicitações pessoalmente. Retornaremos em até 24 horas úteis."}
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab("calendar")}
                      className="px-6 py-3 bg-[#181412] text-[#F6F3EC] font-mono text-xs uppercase tracking-[0.2em]"
                    >
                      {locale === "en" ? "Select Discovery Call Time →" : "Escolher Horário na Agenda →"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 border border-[#181412]/25 text-[#181412] font-mono text-xs uppercase tracking-[0.2em]"
                    >
                      {locale === "en" ? "Send Another Note" : "Enviar Nova Mensagem"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && errorMessage && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="p-4 bg-[#4A1E1B]/10 border border-[#4A1E1B] text-[#4A1E1B] text-xs font-mono leading-relaxed"
                    >
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#181412] mb-2">
                        {locale === "en" ? "Full Name *" : "Nome Completo *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Lord & Lady Sterling / Dr. Eduardo Costa"
                        className="w-full px-4 py-3.5 bg-[#F6F3EC] border border-[#181412]/20 text-[#181412] text-sm focus:outline-none focus:border-[#8C6239]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#181412] mb-2">
                        {locale === "en" ? "Email Address *" : "E-mail *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3.5 bg-[#F6F3EC] border border-[#181412]/20 text-[#181412] text-sm focus:outline-none focus:border-[#8C6239]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#181412] mb-2">
                        {locale === "en" ? "WhatsApp / Telephone" : "WhatsApp / Telefone"}
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+44 7700 900000 / +55 71 99999-9999"
                        className="w-full px-4 py-3.5 bg-[#F6F3EC] border border-[#181412]/20 text-[#181412] text-sm focus:outline-none focus:border-[#8C6239]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#181412] mb-2">
                        {locale === "en" ? "Property Location" : "Localização do Imóvel"}
                      </label>
                      <input
                        type="text"
                        value={formState.city}
                        onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                        placeholder="Kensington, London / Alphaville, Salvador"
                        className="w-full px-4 py-3.5 bg-[#F6F3EC] border border-[#181412]/20 text-[#181412] text-sm focus:outline-none focus:border-[#8C6239]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#181412] mb-2">
                        {locale === "en" ? "Commission Discipline" : "Modalidade de Projeto"}
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#F6F3EC] border border-[#181412]/20 text-[#181412] text-sm focus:outline-none focus:border-[#8C6239]"
                      >
                        <option value="Turnkey Residential Architecture">
                          01. Turnkey Residential Architecture
                        </option>
                        <option value="Bespoke Joinery & Furniture Atelier">
                          02. Bespoke Joinery & Furniture Atelier
                        </option>
                        <option value="Hospitality / Commercial Lounge">
                          03. Hospitality & Commercial Interior
                        </option>
                        <option value="Neurodesign Consultation / Keynote Speaking">
                          04. Neurodesign Advisory / Keynote Speaking
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[#181412] mb-2">
                        {locale === "en" ? "Estimated Investment" : "Investimento Estimado"}
                      </label>
                      <select
                        value={formState.budgetRange}
                        onChange={(e) => setFormState({ ...formState, budgetRange: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#F6F3EC] border border-[#181412]/20 text-[#181412] text-sm focus:outline-none focus:border-[#8C6239]"
                      >
                        <option value="£75,000 – £150,000 / R$ 400k – R$ 800k">
                          £75,000 – £150,000 / R$ 400k – R$ 800k
                        </option>
                        <option value="£150,000 – £350,000 / R$ 800k – R$ 2M">
                          £150,000 – £350,000 / R$ 800k – R$ 2M
                        </option>
                        <option value="£350,000+ / R$ 2M+ Turnkey Estate">
                          £350,000+ / R$ 2M+ Turnkey Estate
                        </option>
                        <option value="Speaking / Press / Advisory">
                          Speaking / Press / Private Advisory
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#181412] mb-2">
                      {locale === "en"
                        ? "Tell Us About Your Space & How You Wish to Feel Within It *"
                        : "Conte-nos Sobre o Seu Espaço e Como Deseja Viver Nele *"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={
                        locale === "en"
                          ? "Describe your property, architectural goals, or speaking event..."
                          : "Descreva seu imóvel, objetivos arquitetônicos ou convite para palestra..."
                      }
                      className="w-full px-4 py-3.5 bg-[#F6F3EC] border border-[#181412]/20 text-[#181412] text-sm focus:outline-none focus:border-[#8C6239]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-[#181412] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.22em]"
                  >
                    {status === "submitting"
                      ? locale === "en"
                        ? "Transmitting to London & Salvador Studios..."
                        : "Enviando ao Estúdio..."
                      : locale === "en"
                      ? "Submit Private Commission Brief"
                      : "Enviar Briefing de Projeto"}
                  </button>
                </form>
              )
            ) : (
              <div className="space-y-6">
                <div className="p-4 bg-[#F6F3EC] border border-[#181412]/10 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-[#8C6239]">
                      PRIVATE DISCOVERY SCHEDULER · LONDON & SALVADOR
                    </div>
                    <p className="text-xs text-[#524942] mt-0.5">
                      {locale === "en"
                        ? "Select a 30-minute Discovery Session with Ramon Bennett (London GMT or Bahia BRT automatically detected)."
                        : "Selecione um horário de 30 minutos com Ramon Bennett (fuso horário de Londres ou Brasília detectado automaticamente)."}
                    </p>
                  </div>
                  <a
                    href={`https://cal.com/${STUDIO_CONFIG.calLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-widest text-[#181412] hover:text-[#8C6239] transition-colors underline"
                  >
                    {locale === "en" ? "Schedule in New Tab ↗" : "Abrir em Nova Guia ↗"}
                  </a>
                </div>
                <div className="w-full h-[540px] bg-[#F6F3EC] border border-[#181412]/15 overflow-hidden">
                  <iframe
                    src={`https://cal.com/${STUDIO_CONFIG.calLink}?embed=true&theme=light`}
                    title="Ramon Bennett Interiors Consultation Calendar"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
