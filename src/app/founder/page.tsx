"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mic, BookOpen, Brain, Instagram, Compass, Globe2 } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG, JOURNAL_ESSAYS } from "@/data/studioData";
import NeurodesignExplorer from "@/components/NeurodesignExplorer";

const SPEAKING_TOPICS = [
  {
    code: "KEYNOTE 01",
    title: {
      en: "The Architecture of Intimacy: How Physical Space Shapes Human Relationships",
      pt: "A Arquitetura da Intimidade: Como o Espaço Físico Molda as Relações Humanas",
    },
    audience: {
      en: "Luxury Hospitality Summits, Design Weeks (London / São Paulo), Private Members' Clubs",
      pt: "Eventos de Hospitalidade de Luxo, Semanas de Design (Londres / São Paulo), Clubes Privados",
    },
    summary: {
      en: "Drawing on 17 years in London across human sciences, law, and relationship psychology, Ramon explores why modern architectural layouts inadvertently script isolation—and how spatial psychology restores conversation, emotional safety, and desire.",
      pt: "Com base em 17 anos em Londres nas ciências humanas, direito e psicologia das relações, Ramon explora como a arquitetura contemporânea influencia o distanciamento ou a conexão profunda entre casais e famílias.",
    },
  },
  {
    code: "KEYNOTE 02",
    title: {
      en: "Neurodesign & The Executive Sanctuary: Designing for Cognitive Recovery & ADHD",
      pt: "Neurodesign e o Santuário Executivo: Projetando para Descompressão Cognitiva e TDAH",
    },
    audience: {
      en: "Private Wealth & Family Offices, Architectural Forums, Leadership Retreats",
      pt: "Family Offices, Fóruns de Arquitetura, Lideranças Executivas",
    },
    summary: {
      en: "Why high-gloss, cold-lit luxury interiors trigger chronic nervous system fatigue, and how tactile Brazilian hardwoods, acoustic absorption (NRC 0.75+), and circadian lighting create high-performance cognitive sanctuaries.",
      pt: "Por que interiores frios e reflexivos geram fadiga sensorial crônica, e como madeiras naturais, controle acústico e iluminação circadiana criam refúgios de alta recuperação mental.",
    },
  },
  {
    code: "KEYNOTE 03",
    title: {
      en: "Provenance Over Spectacle: Three Decades of Bespoke Bahian Craftsmanship",
      pt: "Permanência Acima do Espetáculo: Três Décadas de Alta Marcenaria Baiana",
    },
    audience: {
      en: "Design Academies, Collectible Design Panels, Cultural Institutions",
      pt: "Academias de Design, Painéis de Design Colecionável, Instituições Culturais",
    },
    summary: {
      en: "A personal reflection on bridging London architectural restraint with a 30-year family bespoke joinery workshop in Salvador led by Márcia Ribeiro and Mariana Figueiredo.",
      pt: "Uma reflexão sobre a ponte entre o rigor arquitetônico londrino e a tradição de mais de 30 anos da oficina familiar de alta marcenaria em Salvador.",
    },
  },
];

const INTELLECTUAL_TIMELINE = [
  {
    era: "LONDON • 17 YEARS",
    discipline: {
      en: "Human & Medical Sciences, Law & Psychotherapy",
      pt: "Ciências Humanas e Médicas, Direito & Psicoterapia",
    },
    detail: {
      en: "Built his adult life in London studying the biological, legal, and psychological architecture of human behaviour—learning to listen not only to what people say, but to what they struggle to put into words.",
      pt: "Construiu sua trajetória adulta em Londres estudando as dimensões biológicas, jurídicas e psicológicas do comportamento humano — aprendendo a escutar não apenas o que é dito, mas o que permanece silencioso.",
    },
  },
  {
    era: "SALVADOR • SINCE 1994",
    discipline: {
      en: "30+ Years of Family Bespoke Joinery & Governance",
      pt: "30+ Anos de Alta Marcenaria Familiar & Governança",
    },
    detail: {
      en: "Rooted in Aunt Márcia Ribeiro's three decades of master timber drafting and fabrication in Bahia, reinforced by sister Mariana Figueiredo's decade of legal and executive project delivery.",
      pt: "Enraizado nas três décadas de maestria artesanal da tia Márcia Ribeiro em Salvador, fortalecido pelos dez anos de carreira jurídica e gestão executiva da irmã Mariana Figueiredo.",
    },
  },
  {
    era: "CONVERGENCE • 2020–PRESENT",
    discipline: {
      en: "Ramon Bennett Interiors (London | Salvador)",
      pt: "Ramon Bennett Interiors (Londres | Salvador)",
    },
    detail: {
      en: "Uniting @ramonbennettofficial (writing, speaking, human relationships) and @ramonbennettinteriors into a single philosophical practice: Spatial Psychology & Turnkey Luxury Architecture.",
      pt: "Unindo @ramonbennettofficial (escrita, palestras e relações humanas) e @ramonbennettinteriors em uma única filosofia: Psicologia Espacial e Arquitetura de Interiores de Alto Padrão.",
    },
  },
];

export default function FounderPage() {
  const { locale, openConcierge } = useStudio();

  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#181412] pt-28 md:pt-36">
      {/* Editorial Portrait & Unified Brand Manifesto */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24 md:pb-32 border-b border-[#181412]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6D8] border border-[#181412]/15 shadow-2xl">
              <Image
                src="/images/people_ramon.png"
                alt="Ramon Bennett — Founder & Creative Director"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#161311]/90 via-[#161311]/50 to-transparent p-6 text-[#F6F3EC]">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#C59B6D]">
                  LONDON SW7 • SALVADOR BAHIA
                </div>
                <div className="font-serif text-2xl mt-1">Ramon Bennett</div>
                <div className="text-xs text-[#D8CEBE] mt-0.5">
                  {locale === "en"
                    ? "Founder, Creative Director, Writer & Speaker"
                    : "Fundador, Diretor Criativo, Escritor & Palestrante"}
                </div>
              </div>
            </div>

            {/* Dual Instagram Ecosystem Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={STUDIO_CONFIG.instagramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#EDE6D8] border border-[#181412]/10 hover:border-[#8C6239] transition-colors group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#8C6239]">
                  <span className="inline-flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5" />
                    PERSONAL VOICE
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="mt-2 font-serif text-lg text-[#181412]">
                  @ramonbennettofficial
                </div>
                <p className="mt-1 text-xs text-[#524942]">
                  {locale === "en"
                    ? "Essays, public speaking, human relationships & design philosophy."
                    : "Ensaios, palestras, relações humanas e filosofia do viver."}
                </p>
              </a>

              <a
                href={STUDIO_CONFIG.instagramStudio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#EDE6D8] border border-[#181412]/10 hover:border-[#8C6239] transition-colors group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#8C6239]">
                  <span className="inline-flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5" />
                    STUDIO PORTFOLIO
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="mt-2 font-serif text-lg text-[#181412]">
                  @ramonbennettinteriors
                </div>
                <p className="mt-1 text-xs text-[#524942]">
                  {locale === "en"
                    ? "Curated architectural commissions & bespoke joinery works."
                    : "Portfólio curado de arquitetura de interiores e alta marcenaria."}
                </p>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-[#181412]"
            >
              {locale === "en"
                ? "One Unified Identity: Human Relationships & The Spaces That Hold Them."
                : "Uma Identidade Única: As Relações Humanas e os Espaços Que as Acolhem."}
            </motion.h1>

            <blockquote className="border-l-2 border-[#8C6239] pl-6 py-2 font-serif italic text-2xl sm:text-3xl text-[#4A1E1B] leading-snug">
              {locale === "en"
                ? "“My interior design practice is not separate from my work in human relationships, writing, and speaking. Every relationship unfolds inside a room—and every room either nurtures intimacy or quietly erodes it.”"
                : "“Minha prática de arquitetura de interiores não está separada do meu trabalho com relações humanas, escrita e palestras. Toda relação acontece dentro de um espaço — e cada ambiente pode nutrir a intimidade ou silenciosamente desgastá-la.”"}
            </blockquote>

            <div className="space-y-5 text-base md:text-lg text-[#524942] leading-relaxed">
              <p>
                {locale === "en"
                  ? "Ramon Bennett spent seventeen years in London immersing himself in Human and Medical Sciences, Law, and Psychotherapy before founding Ramon Bennett Interiors alongside his aunt Márcia Ribeiro and sister Mariana Figueiredo in Salvador, Brazil."
                  : "Ramon Bennett viveu dezessete anos em Londres, aprofundando-se em Ciências Humanas e Médicas, Direito e Psicoterapia antes de fundar a Ramon Bennett Interiors ao lado de sua tia Márcia Ribeiro e de sua irmã Mariana Figueiredo."}
              </p>
              <p>
                {locale === "en"
                  ? "Where conventional interior studios begin with fabric swatches and furniture catalogues, Ramon begins with an intimate diagnostic conversation. How do you wake up? Where does tension accumulate in your workday? How do you and your partner converse in the evening? What memories do your treasured objects hold?"
                  : "Enquanto escritórios convencionais começam por catálogos de móveis, Ramon inicia cada projeto com uma escuta profunda: como você desperta? Onde a tensão do dia se acumula? Como o casal e a família dialogam ao anoitecer? Quais memórias seus objetos de valor guardam?"}
              </p>
              <p>
                {locale === "en"
                  ? "By translating these psychological truths into architectural proportions, circadian lighting, and heirloom Brazilian joinery, Ramon Bennett has established a distinctive transatlantic voice across luxury residential design, hospitality, writing, and keynote speaking."
                  : "Ao traduzir essas verdades psicológicas em proporção arquitetônica, iluminação circadiana e alta marcenaria sob medida, Ramon Bennett consolidou uma voz singular entre Londres e o Brasil."}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => openConcierge()}
                className="px-8 py-4 bg-[#181412] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
              >
                {locale === "en"
                  ? "Request Private Consultation or Keynote"
                  : "Solicitar Consulta ou Palestra"}
              </button>
              <Link
                href="/projects"
                className="px-8 py-4 border border-[#181412]/25 text-[#181412] hover:border-[#181412] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
              >
                {locale === "en" ? "View Architectural Works" : "Ver Portfólio de Obras"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Trajectory (3 Pillars of Ramon's Life) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#181412]">
            {locale === "en"
              ? "The Intellectual Architecture Behind the Studio"
              : "A Arquitetura Intelectual Por Trás do Estúdio"}
          </h2>
          <p className="mt-4 text-[#524942] text-base md:text-lg">
            {locale === "en"
              ? "Why clients in London and Brazil entrust Ramon with both their most private residential sanctuaries and high-level cultural dialogues."
              : "Por que clientes em Londres e no Brasil confiam a Ramon tanto seus refúgios residenciais mais íntimos quanto diálogos culturais e palestras."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INTELLECTUAL_TIMELINE.map((item, idx) => (
            <div
              key={item.era}
              className="p-8 md:p-10 bg-[#EDE6D8] border border-[#181412]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#8C6239] tracking-[0.18em] mb-6">
                  <span>{item.era}</span>
                  <span>0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#181412] leading-snug">
                  {item.discipline[locale]}
                </h3>
                <p className="mt-4 text-sm md:text-base text-[#524942] leading-relaxed">
                  {item.detail[locale]}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#181412]/10 flex items-center gap-2 font-mono text-xs text-[#181412]">
                {idx === 0 && <Brain className="w-4 h-4 text-[#8C6239]" />}
                {idx === 1 && <Compass className="w-4 h-4 text-[#8C6239]" />}
                {idx === 2 && <Globe2 className="w-4 h-4 text-[#8C6239]" />}
                <span>
                  {idx === 0 && (locale === "en" ? "Clinical & Behavioural Depth" : "Escuta Clínica e Humana")}
                  {idx === 1 && (locale === "en" ? "Master Workshop Provenance" : "Tradição Construtivo-Artesanal")}
                  {idx === 2 && (locale === "en" ? "Transatlantic Practice" : "Atuação Transatlântica")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Neurodesign Diagnostic */}
      <NeurodesignExplorer />

      {/* Public Speaking, Keynotes & Editorial Press */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181412] leading-tight">
              {locale === "en"
                ? "Public Speaking, Keynotes & Private Advisory"
                : "Palestras, Keynotes & Consultoria Privada"}
            </h2>
            <p className="mt-4 text-[#524942] text-base md:text-lg leading-relaxed">
              {locale === "en"
                ? "Ramon Bennett speaks internationally on spatial psychology, modern human relationships, and the intersection of quiet luxury and emotional wellbeing."
                : "Ramon Bennett realiza palestras internacionais sobre psicologia espacial, relações humanas contemporâneas e a interseção entre arquitetura de luxo silencioso e saúde emocional."}
            </p>
          </div>
          <button
            onClick={() => openConcierge()}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4A1E1B] text-[#F6F3EC] hover:bg-[#181412] transition-colors font-mono text-xs uppercase tracking-[0.2em] shrink-0"
          >
            <Mic className="w-4 h-4" />
            {locale === "en" ? "Inquire for Speaking / Press" : "Contratar Palestra / Imprensa"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPEAKING_TOPICS.map((topic) => (
            <div
              key={topic.code}
              className="p-8 bg-white/60 border border-[#181412]/10 flex flex-col justify-between hover:border-[#8C6239] transition-colors"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239]">
                  {topic.code}
                </div>
                <h3 className="mt-3 font-serif text-2xl text-[#181412] leading-snug">
                  {topic.title[locale]}
                </h3>
                <p className="mt-4 text-sm text-[#524942] leading-relaxed">
                  {topic.summary[locale]}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#181412]/10">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#8C6239]">
                  {locale === "en" ? "Ideal Format" : "Formato Ideal"}
                </div>
                <div className="mt-1 text-xs text-[#181412] font-medium">
                  {topic.audience[locale]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Writing Preview */}
        <div className="mt-24 pt-16 border-t border-[#181412]/10">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#8C6239]" />
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181412]">
                {locale === "en" ? "Recent Essays by Ramon Bennett" : "Ensaios Recentes de Ramon Bennett"}
              </h3>
            </div>
            <Link
              href="/journal"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239] hover:text-[#181412] inline-flex items-center gap-1.5"
            >
              {locale === "en" ? "Read All Journal Essays" : "Ler Todos os Ensaios"}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ESSAYS.map((essay) => (
              <Link
                key={essay.slug}
                href={`/journal/${essay.slug}`}
                className="group block bg-[#EDE6D8] border border-[#181412]/10 overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={essay.coverImage}
                    alt={essay.title[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[#8C6239]">
                    {essay.category[locale]} • {essay.readTime}
                  </div>
                  <h4 className="mt-2 font-serif text-xl text-[#181412] group-hover:text-[#8C6239] transition-colors leading-snug">
                    {essay.title[locale]}
                  </h4>
                  <p className="mt-2 text-xs text-[#524942] line-clamp-3 leading-relaxed">
                    {essay.excerpt[locale]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
