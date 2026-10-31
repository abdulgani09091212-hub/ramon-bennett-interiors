"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useStudio } from "@/context/StudioContext";

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale, openConcierge } = useStudio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [londonTime, setLondonTime] = useState("15:45 GMT");
  const [salvadorTime, setSalvadorTime] = useState("11:45 BRT");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateClocks = () => {
      try {
        const now = new Date();
        const lon = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(now);
        const ssa = new Intl.DateTimeFormat("en-GB", {
          timeZone: "America/Bahia",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(now);
        setLondonTime(`${lon} UK`);
        setSalvadorTime(`${ssa} BR`);
      } catch {
        // fallback static
      }
    };
    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "/", label: { en: "Atelier", pt: "Atelier" } },
    { href: "/projects", label: { en: "Portfolio", pt: "Portfólio" } },
    { href: "/studio", label: { en: "The Story", pt: "A História" } },
    { href: "/founder", label: { en: "Ramon Bennett", pt: "Ramon Bennett" } },
    { href: "/services", label: { en: "Services", pt: "Serviços" } },
    { href: "/journal", label: { en: "Journal", pt: "Journal" } },
    { href: "/contact", label: { en: "Contact", pt: "Contato" } },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-architectural ${
          scrolled
            ? "bg-limestone/95 backdrop-blur-md border-b border-espresso/10 py-3"
            : "bg-limestone/85 backdrop-blur-sm border-b border-espresso/10 py-4"
        }`}
      >
        {/* Top Architectural Coordinates & Dual-Studio Bar (Vucko / 1508 London inspired) */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <div className="hidden lg:flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-umber pb-2.5 mb-2.5 border-b border-espresso/10 tabular-nums">
            <div className="flex items-center gap-6">
              <span>LONDON · {londonTime}</span>
              <span className="text-bronze">|</span>
              <span>SALVADOR · {salvadorTime}</span>
            </div>
            <div className="flex items-center gap-6">
              <span>INTERIOR ARCHITECTURE · BESPOKE JOINERY · SPATIAL PSYCHOLOGY</span>
              <Link
                href="/admin"
                className="text-umber hover:text-espresso transition-colors underline underline-offset-4"
              >
                {locale === "en" ? "Studio CMS" : "Painel Studio"}
              </Link>
            </div>
          </div>

          {/* Primary Navigation Row */}
          <div className="flex items-center justify-between gap-4">
            {/* Brand Identity with Extracted Seahorse Emblem */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-9 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo_seahorse.png"
                  alt="Ramon Bennett Luxury Interiors Crest"
                  fill
                  sizes="48px"
                  className="object-contain object-center transition-transform duration-700 ease-editorial group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl tracking-[0.14em] uppercase text-espresso leading-none font-normal">
                  Ramon Bennett
                </span>
                <span className="font-mono text-[9.5px] tracking-[0.26em] uppercase text-bronze mt-1">
                  LONDON | SALVADOR
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative py-1 text-xs uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive
                        ? "text-espresso font-medium"
                        : "text-umber hover:text-espresso"
                    }`}
                  >
                    {item.label[locale]}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-oxblood"
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls: Bilingual Switcher + Private Consultation Trigger */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setLocale(locale === "en" ? "pt" : "en")}
                aria-label="Toggle Language between English and Portuguese"
                className="flex items-center gap-1.5 px-2.5 py-1.5 border border-espresso/15 text-[11px] font-mono uppercase tracking-[0.14em] text-espresso hover:border-bronze transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-bronze" />
                <span className={locale === "en" ? "font-semibold underline underline-offset-4" : "opacity-60"}>
                  EN
                </span>
                <span className="opacity-40">/</span>
                <span className={locale === "pt" ? "font-semibold underline underline-offset-4" : "opacity-60"}>
                  PT
                </span>
              </button>

              <button
                type="button"
                onClick={() => openConcierge()}
                className="hidden sm:inline-flex items-center gap-2 bg-oxblood text-limestone px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium hover:bg-espresso transition-colors duration-300"
              >
                <span>{locale === "en" ? "Enquire" : "Agendar"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="xl:hidden p-2 text-espresso border border-espresso/15 hover:border-espresso transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile & Tablet Drawer with Heavy Cubic-Bezier Easing */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-obsidian text-limestone pt-28 pb-10 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-sandstone/70 border-b border-limestone/15 pb-4">
                <span>LONDON · {londonTime}</span>
                <span>SALVADOR · {salvadorTime}</span>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl sm:text-4xl tracking-tight text-limestone hover:text-bronze transition-colors py-1 border-b border-limestone/10 flex items-center justify-between"
                  >
                    <span>{item.label[locale]}</span>
                    <ArrowUpRight className="w-5 h-5 text-bronze" />
                  </Link>
                ))}
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-bronze pt-2"
                >
                  {locale === "en" ? "Studio Visual CMS (/admin)" : "Painel Visual do Estúdio (/admin)"}
                </Link>
              </nav>
            </div>

            <div className="pt-8 border-t border-limestone/15 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConcierge();
                }}
                className="w-full py-4 bg-oxblood text-limestone text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
              >
                <span>
                  {locale === "en"
                    ? "Commission a Private Consultation"
                    : "Agendar Consulta Privada"}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
