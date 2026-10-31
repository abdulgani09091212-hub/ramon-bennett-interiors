"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PlusCircle,
  Video,
  FileText,
  Inbox,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { ProjectCaseStudy, JournalEssay } from "@/data/studioData";

interface SavedInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
  createdAt: string;
}

const PRESET_STUDIO_IMAGES = [
  { label: "Alphaville I — Transformed Pavilion", url: "/images/03_after_alphaville_transformed.jpg" },
  { label: "Alphaville I — Raw Before Survey", url: "/images/02_before_alphaville_raw_space.jpg" },
  { label: "Kensington London — Walnut Library After", url: "/images/08_after_kensington_london_sanctuary.jpg" },
  { label: "Kensington London — Victorian Before", url: "/images/07_before_kensington_london_raw.jpg" },
  { label: "Rua do Palácio — Hospitality Lounge After", url: "/images/05_rua_do_palacio_hospitality_lounge.jpg" },
  { label: "Rua do Palácio — Heritage Shell Before", url: "/images/06_before_rua_do_palacio_raw_shell.jpg" },
  { label: "Salvador Joinery — Macro Fluted Walnut", url: "/images/04_bespoke_joinery_atelier_detail.jpg" },
  { label: "London/Salvador Penthouse Hero", url: "/images/01_hero_salvador_london_penthouse.jpg" },
];

export default function AdminDashboardPage() {
  const {
    projects,
    addCustomProject,
    essays,
    addCustomEssay,
    heroVideoUrl,
    setHeroVideoUrl,
  } = useStudio();

  const [activeTab, setActiveTab] = useState<"projects" | "video" | "journal" | "inquiries">("projects");
  const [toast, setToast] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<SavedInquiry[]>([]);

  // New Project Form State
  const [projTitle, setProjTitle] = useState("");
  const [projCategory, setProjCategory] = useState<ProjectCaseStudy["category"]>("Residential");
  const [projLocation, setProjLocation] = useState("Chelsea, London SW3 — UK");
  const [projYear, setProjYear] = useState("2026");
  const [projArea, setProjArea] = useState("310 m²");
  const [projDuration, setProjDuration] = useState("8 Months");
  const [projBeforeImg, setProjBeforeImg] = useState("/images/07_before_kensington_london_raw.jpg");
  const [projAfterImg, setProjAfterImg] = useState("/images/08_after_kensington_london_sanctuary.jpg");
  const [projSubtitleEn, setProjSubtitleEn] = useState("");
  const [projSubtitlePt, setProjSubtitlePt] = useState("");
  const [projBriefEn, setProjBriefEn] = useState("");
  const [projCureEn, setProjCureEn] = useState("");

  // Video URL State
  const [videoInput, setVideoInput] = useState(heroVideoUrl || "");

  // New Essay Form State
  const [essayTitleEn, setEssayTitleEn] = useState("");
  const [essayTitlePt, setEssayTitlePt] = useState("");
  const [essayCategory, setEssayCategory] = useState("Neurodesign & Spatial Psychology");
  const [essayCover, setEssayCover] = useState("/images/01_hero_salvador_london_penthouse.jpg");
  const [essayExcerptEn, setEssayExcerptEn] = useState("");
  const [essayBodyEn, setEssayBodyEn] = useState("");
  const [essayTakeawayEn, setEssayTakeawayEn] = useState("");

  useEffect(() => {
    setVideoInput(heroVideoUrl || "");
    try {
      const saved = JSON.parse(localStorage.getItem("rbi_inquiries") || "[]");
      if (Array.isArray(saved)) setInquiries(saved);
    } catch {
      // ignore
    }
  }, [heroVideoUrl]);

  const showNotification = (msg: string) => {
    setToast(msg);
  };

  const handleFileUploadToDataUrl = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setter(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePublishProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projTitle.trim()) return;
    const slug = projTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const newProject: ProjectCaseStudy = {
      slug,
      title: projTitle,
      subtitle: {
        en: projSubtitleEn || `${projTitle} — Bespoke Spatial Psychology & Architectural Joinery`,
        pt: projSubtitlePt || projSubtitleEn || `${projTitle} — Psicologia Espacial & Alta Marcenaria`,
      },
      category: projCategory,
      location: projLocation,
      coordinates: "51°29'21\"N 00°09'48\"W",
      year: projYear,
      areaSqm: projArea,
      durationMonths: projDuration,
      heroImage: projAfterImg,
      beforeImage: projBeforeImg,
      afterImage: projAfterImg,
      beforeLabel: {
        en: `BEFORE — Original Site Survey (${projTitle})`,
        pt: `ANTES — Levantamento Original (${projTitle})`,
      },
      afterLabel: {
        en: `AFTER — Completed Architectural Sanctuary (${projTitle})`,
        pt: `DEPOIS — Intervenção Concluída (${projTitle})`,
      },
      galleryImages: [
        {
          src: projAfterImg,
          caption: {
            en: `${projTitle} — Primary architectural elevation after completion.`,
            pt: `${projTitle} — Vista principal após conclusão da obra.`,
          },
          aspect: "landscape",
        },
        {
          src: "/images/04_bespoke_joinery_atelier_detail.jpg",
          caption: {
            en: "Custom hardwood joinery and brushed brass detailing fabricated by our Salvador atelier.",
            pt: "Detalhe de marcenaria sob medida e latão escovado executados pelo nosso atelier.",
          },
          aspect: "portrait",
        },
      ],
      psychologicalBrief: {
        en:
          projBriefEn ||
          "Commissioned to transform an acoustically restless layout into an emotionally grounded sanctuary tailored to the client's daily rituals.",
        pt:
          projBriefEn ||
          "Encomendado para transformar um espaço fragmentado em um refúgio acolhedor alinhado aos rituais diários do cliente.",
      },
      architecturalCure: {
        en:
          projCureEn ||
          "Full-height bespoke timber joinery, 2400K circadian cove illumination, and natural honed stone surfaces.",
        pt:
          projCureEn ||
          "Marcenaria piso-teto sob medida, iluminação circadiana a 2400K e superfícies em pedra natural levigada.",
      },
      joineryStory: {
        en: "Engineered with Márcia Ribeiro's 30-year bespoke joinery workshop and governed by Mariana Figueiredo.",
        pt: "Desenvolvido com a oficina de 30 anos de Márcia Ribeiro e governança executiva de Mariana Figueiredo.",
      },
      pullQuote: {
        en: "Every space tells a story. Ours begins by listening.",
        pt: "Cada espaço conta uma história. A nossa começa pela escuta.",
      },
      curePins: [
        {
          id: "pin-custom-1",
          x: 35,
          y: 48,
          title: { en: "Bespoke Architectural Joinery", pt: "Marcenaria Arquitetônica Sob Medida" },
          beforeProblem: {
            en: "Visual fragmentation and exposed structural junctions.",
            pt: "Fragmentação visual e interferências estruturais aparentes.",
          },
          afterCure: {
            en: "Continuous hand-finished hardwood panelling with concealed storage.",
            pt: "Painel contínuo em madeira nobre com portas mimetizadas.",
          },
          materialSpec: "FSC Brazilian Hardwood + Brushed Aged Bronze",
        },
      ],
      materials: [
        {
          name: "Hand-Fluted Brazilian Walnut",
          origin: "Salvador Atelier",
          finish: "Natural Matte Beeswax",
          swatchHex: "#5B3B24",
          role: { en: "Primary architectural joinery", pt: "Marcenaria arquitetônica principal" },
        },
        {
          name: "Honed Limestone & Travertine",
          origin: "Bespoke Quarry Selection",
          finish: "Velvet Honed",
          swatchHex: "#DFD5C3",
          role: { en: "Monolithic flooring & hearth", pt: "Piso monolítico e bancadas" },
        },
      ],
    };

    addCustomProject(newProject);
    setProjTitle("");
    setProjSubtitleEn("");
    setProjSubtitlePt("");
    setProjBriefEn("");
    setProjCureEn("");
    showNotification(`Published "${newProject.title}" to Portfolio & Before/After Showcase!`);
  };

  const handleSaveVideo = (e: React.FormEvent) => {
    e.preventDefault();
    setHeroVideoUrl(videoInput.trim());
    showNotification("Homepage Cinema Reel URL updated live!");
  };

  const handlePublishEssay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!essayTitleEn.trim()) return;
    const slug = essayTitleEn
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const paragraphs = essayBodyEn
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);

    const newEssay: JournalEssay = {
      slug,
      title: { en: essayTitleEn, pt: essayTitlePt || essayTitleEn },
      subtitle: {
        en: essayExcerptEn || "Reflections on spatial psychology, human relationships, and bespoke craft.",
        pt: essayExcerptEn || "Reflexões sobre psicologia espacial, relações humanas e alta marcenaria.",
      },
      category: { en: essayCategory, pt: essayCategory },
      date: "November 2026",
      readTime: "5 Min Read",
      coverImage: essayCover,
      excerpt: {
        en: essayExcerptEn || paragraphs[0] || "Every space tells a story. Ours begins by listening.",
        pt: essayExcerptEn || paragraphs[0] || "Cada espaço conta uma história. A nossa começa pela escuta.",
      },
      bodyParagraphs: {
        en: paragraphs.length > 0 ? paragraphs : [essayExcerptEn || "Published via Studio CMS."],
        pt: paragraphs.length > 0 ? paragraphs : [essayExcerptEn || "Publicado via Studio CMS."],
      },
      keyTakeaway: {
        en: essayTakeawayEn || "True luxury is the alignment between architectural proportion and the human nervous system.",
        pt: essayTakeawayEn || "O verdadeiro luxo é a harmonia entre proporção arquitetônica e a mente humana.",
      },
    };

    addCustomEssay(newEssay);
    setEssayTitleEn("");
    setEssayTitlePt("");
    setEssayExcerptEn("");
    setEssayBodyEn("");
    setEssayTakeawayEn("");
    showNotification(`Published essay "${newEssay.title.en}" to /journal!`);
  };

  const handleResetCustomData = () => {
    localStorage.removeItem("rbi_custom_projects");
    localStorage.removeItem("rbi_custom_essays");
    localStorage.removeItem("rbi_hero_video_url");
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#181412] pt-28 md:pt-36 pb-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Studio CMS Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-[#181412]/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8C6239] mb-2">
              <Sparkles className="w-4 h-4" />
              ZERO-CODE STUDIO OWNERSHIP PORTAL
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#181412]">
              Ramon Bennett Visual Studio CMS
            </h1>
            <p className="mt-2 text-[#524942] text-sm md:text-base max-w-2xl">
              Upload new Before & After projects, attach Google Flow / Instagram Reel videos, publish Journal monographs, and review Brevo client inquiries without touching code.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#EDE6D8] border border-[#181412]/15 text-xs font-mono uppercase tracking-wider hover:border-[#8C6239]"
            >
              View Live Portfolio
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={handleResetCustomData}
              className="inline-flex items-center gap-2 px-4 py-3 border border-[#4A1E1B]/30 text-[#4A1E1B] text-xs font-mono uppercase tracking-wider hover:bg-[#4A1E1B] hover:text-[#F6F3EC] transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Reset Custom Edits
            </button>
          </div>
        </div>

        {/* Toast Banner */}
        {toast && (
          <div
            role="status"
            aria-live="polite"
            className="my-6 p-4 bg-[#161311] text-[#F6F3EC] border border-[#8C6239]/50 flex items-center justify-between gap-3 font-mono text-xs"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#C59B6D] shrink-0" />
              <span>{toast}</span>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="px-2 py-1 border border-[#F6F3EC]/20 hover:border-[#F6F3EC] text-[10px] uppercase tracking-wider"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 my-8 border-b border-[#181412]/10 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("projects")}
            className={`inline-flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
              activeTab === "projects"
                ? "bg-[#181412] text-[#F6F3EC]"
                : "bg-[#EDE6D8] text-[#524942] hover:text-[#181412]"
            }`}
          >
            <Layers className="w-4 h-4" />
            1. Portfolio & Before/After ({projects.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("video")}
            className={`inline-flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
              activeTab === "video"
                ? "bg-[#181412] text-[#F6F3EC]"
                : "bg-[#EDE6D8] text-[#524942] hover:text-[#181412]"
            }`}
          >
            <Video className="w-4 h-4" />
            2. Homepage Video & Reels
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("journal")}
            className={`inline-flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
              activeTab === "journal"
                ? "bg-[#181412] text-[#F6F3EC]"
                : "bg-[#EDE6D8] text-[#524942] hover:text-[#181412]"
            }`}
          >
            <FileText className="w-4 h-4" />
            3. Publish Journal Essay ({essays.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("inquiries")}
            className={`inline-flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
              activeTab === "inquiries"
                ? "bg-[#181412] text-[#F6F3EC]"
                : "bg-[#EDE6D8] text-[#524942] hover:text-[#181412]"
            }`}
          >
            <Inbox className="w-4 h-4" />
            4. Client Inquiries & CRM ({inquiries.length})
          </button>
        </div>

        {/* TAB 1: PROJECTS & BEFORE/AFTER BUILDER */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 bg-[#EDE6D8] border border-[#181412]/15 p-8 md:p-10">
              <h2 className="font-serif text-3xl text-[#181412] mb-2">
                Add New Portfolio Case Study & Before/After Slider
              </h2>
              <p className="text-xs text-[#524942] mb-8">
                Upload photos from your computer or select from the studio high-resolution library. Your new project will immediately appear in `/projects` with an interactive Before/After comparison slider.
              </p>

              <form onSubmit={handlePublishProject} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={projTitle}
                      onChange={(e) => setProjTitle(e.target.value)}
                      placeholder="e.g. Belgravia Penthouse / Horto Florestal"
                      className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                      Category
                    </label>
                    <select
                      value={projCategory}
                      onChange={(e) =>
                        setProjCategory(e.target.value as ProjectCaseStudy["category"])
                      }
                      className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Bespoke Joinery">Bespoke Joinery</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={projLocation}
                      onChange={(e) => setProjLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                      Area (m²)
                    </label>
                    <input
                      type="text"
                      value={projArea}
                      onChange={(e) => setProjArea(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                      Completion Year
                    </label>
                    <input
                      type="text"
                      value={projYear}
                      onChange={(e) => setProjYear(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                    />
                  </div>
                </div>

                {/* Before & After Image Selector / Uploader */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 bg-[#F6F3EC] border border-[#181412]/10">
                  <div className="space-y-3">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#8C6239]">
                      BEFORE Image (Raw Site Survey)
                    </label>
                    <select
                      value={projBeforeImg}
                      onChange={(e) => setProjBeforeImg(e.target.value)}
                      className="w-full px-3 py-2 bg-[#EDE6D8] border border-[#181412]/20 text-xs"
                    >
                      {PRESET_STUDIO_IMAGES.map((img) => (
                        <option key={img.url} value={img.url}>
                          {img.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUploadToDataUrl(e, setProjBeforeImg)}
                      className="block w-full text-xs text-[#524942]"
                    />
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#181412]/15">
                      <Image
                        src={projBeforeImg}
                        alt="Before preview"
                        fill
                        sizes="280px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#8C6239]">
                      AFTER Image (Completed Sanctuary)
                    </label>
                    <select
                      value={projAfterImg}
                      onChange={(e) => setProjAfterImg(e.target.value)}
                      className="w-full px-3 py-2 bg-[#EDE6D8] border border-[#181412]/20 text-xs"
                    >
                      {PRESET_STUDIO_IMAGES.map((img) => (
                        <option key={img.url} value={img.url}>
                          {img.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUploadToDataUrl(e, setProjAfterImg)}
                      className="block w-full text-xs text-[#524942]"
                    />
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#181412]/15">
                      <Image
                        src={projAfterImg}
                        alt="After preview"
                        fill
                        sizes="280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    Editorial Subtitle (EN)
                  </label>
                  <input
                    type="text"
                    value={projSubtitleEn}
                    onChange={(e) => setProjSubtitleEn(e.target.value)}
                    placeholder="Restoring Georgian Proportions with Brazilian Freijó Joinery"
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    The Psychological Brief (What the client needed emotionally)
                  </label>
                  <textarea
                    rows={3}
                    value={projBriefEn}
                    onChange={(e) => setProjBriefEn(e.target.value)}
                    placeholder="Describe the original spatial bottleneck and psychological goal..."
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    The Architectural & Joinery Cure
                  </label>
                  <textarea
                    rows={3}
                    value={projCureEn}
                    onChange={(e) => setProjCureEn(e.target.value)}
                    placeholder="Describe the joinery, lighting, and stone solutions..."
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#181412] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  Publish Project to Live Portfolio
                </button>
              </form>
            </div>

            {/* Active Portfolio List */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-2xl text-[#181412]">
                Active Portfolio Commissions ({projects.length})
              </h3>
              <div className="space-y-4">
                {projects.map((p) => (
                  <div
                    key={p.slug}
                    className="p-5 bg-[#EDE6D8] border border-[#181412]/10 flex items-center gap-4"
                  >
                    <div className="relative w-24 h-16 shrink-0 overflow-hidden bg-[#161311]">
                      <Image
                        src={p.heroImage}
                        alt={p.title}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#8C6239]">
                        {p.category} • {p.location}
                      </div>
                      <div className="font-serif text-xl text-[#181412] truncate">
                        {p.title}
                      </div>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-[#181412] underline mt-1"
                      >
                        Inspect Case Study ↗
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HOMEPAGE VIDEO & GOOGLE FLOW REELS */}
        {activeTab === "video" && (
          <div className="max-w-3xl bg-[#EDE6D8] border border-[#181412]/15 p-8 md:p-12 space-y-6">
            <h2 className="font-serif text-3xl text-[#181412]">
              Homepage Cinema Reel & Google Flow (Veo) Video Manager
            </h2>
            <p className="text-sm text-[#524942] leading-relaxed">
              Paste any direct `.mp4` URL (from Cloudinary, Vercel Blob, Google Flow Veo export, or Instagram Reel CDN) to display a live ambient architectural film loop on the Homepage hero. Leave empty to use the high-resolution Ken Burns architectural photography sequence.
            </p>

            <form onSubmit={handleSaveVideo} className="space-y-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                  Direct MP4 Video URL
                </label>
                <input
                  type="url"
                  value={videoInput}
                  onChange={(e) => setVideoInput(e.target.value)}
                  placeholder="https://your-cdn.com/ramon-bennett-reel.mp4"
                  className="w-full px-4 py-3.5 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-[#181412] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
              >
                Save Homepage Reel URL
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: JOURNAL ESSAY PUBLISHER */}
        {activeTab === "journal" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 bg-[#EDE6D8] border border-[#181412]/15 p-8 md:p-10">
              <h2 className="font-serif text-3xl text-[#181412] mb-2">
                Publish New Essay to /journal
              </h2>
              <p className="text-xs text-[#524942] mb-6">
                Share new thoughts on Neurodesign, human relationships, or bespoke craftsmanship.
              </p>

              <form onSubmit={handlePublishEssay} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    Essay Title (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={essayTitleEn}
                    onChange={(e) => setEssayTitleEn(e.target.value)}
                    placeholder="e.g. Why Quiet Rooms Create Deeper Conversations"
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      value={essayCategory}
                      onChange={(e) => setEssayCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                      Cover Photograph
                    </label>
                    <select
                      value={essayCover}
                      onChange={(e) => setEssayCover(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                    >
                      {PRESET_STUDIO_IMAGES.map((img) => (
                        <option key={img.url} value={img.url}>
                          {img.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    Lead Excerpt
                  </label>
                  <textarea
                    rows={2}
                    value={essayExcerptEn}
                    onChange={(e) => setEssayExcerptEn(e.target.value)}
                    placeholder="A 1-2 sentence opening hook..."
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    Full Essay Body (Separate paragraphs with a blank line) *
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={essayBodyEn}
                    onChange={(e) => setEssayBodyEn(e.target.value)}
                    placeholder="Write your essay here..."
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    Signature Pull-Quote Takeaway
                  </label>
                  <input
                    type="text"
                    value={essayTakeawayEn}
                    onChange={(e) => setEssayTakeawayEn(e.target.value)}
                    placeholder="Every space tells a story. Ours begins by listening."
                    className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#181412]/20 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#181412] text-[#F6F3EC] hover:bg-[#8C6239] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
                >
                  Publish Essay Live
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-2xl text-[#181412]">
                Published Journal Monographs ({essays.length})
              </h3>
              {essays.map((e) => (
                <div
                  key={e.slug}
                  className="p-5 bg-[#EDE6D8] border border-[#181412]/10 space-y-2"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8C6239]">
                    {e.category.en} • {e.date}
                  </div>
                  <div className="font-serif text-xl text-[#181412]">{e.title.en}</div>
                  <Link
                    href={`/journal/${e.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#181412] underline"
                  >
                    Read Article ↗
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CLIENT INQUIRIES & BREVO LOG */}
        {activeTab === "inquiries" && (
          <div className="bg-[#EDE6D8] border border-[#181412]/15 p-8 md:p-12 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#181412]/10 pb-6">
              <div>
                <h2 className="font-serif text-3xl text-[#181412]">
                  Client Commission Dossiers & Brevo CRM Log
                </h2>
                <p className="text-xs text-[#524942] mt-1">
                  All submissions from the Consultation Concierge drawer and `/contact` page are forwarded to `/api/inquire` (Brevo) and mirrored below.
                </p>
              </div>
              <span className="px-4 py-2 bg-[#161311] text-[#F6F3EC] font-mono text-xs">
                {inquiries.length} Recorded Dossiers
              </span>
            </div>

            {inquiries.length === 0 ? (
              <div className="py-12 text-center text-[#524942] space-y-3">
                <p className="font-serif text-2xl text-[#181412]">
                  No local test inquiries submitted in this browser session yet.
                </p>
                <p className="text-xs max-w-md mx-auto">
                  Try submitting a test brief via the “Enquire” drawer in the top navigation or on the `/contact` page to see it logged here in real time.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-6 bg-[#F6F3EC] border border-[#181412]/10 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#8C6239]">
                      <span>{inq.projectType || "Private Commission"}</span>
                      <span>{new Date(inq.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="font-serif text-2xl text-[#181412]">
                      {inq.name} — <span className="text-base font-sans text-[#524942]">{inq.email}</span>
                    </div>
                    <div className="text-xs font-mono text-[#524942]">
                      Location: {inq.city || "London / Salvador"} • Budget: {inq.budgetRange || "Not specified"} • Phone: {inq.phone || "N/A"}
                    </div>
                    {inq.message && (
                      <p className="text-sm text-[#181412] bg-[#EDE6D8] p-4 border-l-2 border-[#8C6239]">
                        {inq.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
