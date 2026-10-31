# AGENTS.md — Autonomous Engineering & Design Operating System
# Project: Ramon Bennett Interiors (London | Salvador) — Next.js 15 Luxury Web Platform
# Fiverr Order #946031451 | Delivery Deadline: November 19, 2026

## 1. Mission & Project Identity
You are working on the official Next.js 15 web platform for **Ramon Bennett Interiors** (`https://www.ramonbennettinteriors.com/`), a London and Salvador (Brazil) luxury interior architecture, bespoke joinery, and spatial psychology studio founded by **Ramon Bennett** alongside his aunt **Márcia Ribeiro** (30+ years master bespoke joinery) and sister **Mariana Figueiredo** (10 years legal & project delivery governance).

### Critical Brand Law (Unified Personal + Studio Identity)
Ramon Bennett explicitly specified that his personal brand (`@ramonbennettofficial` — luxury, public speaking, writing, and human relationships/psychology) and his interior studio (`@ramonbennettinteriors`) are **one unified philosophical identity**:
- **Never** treat the site as a generic corporate furniture catalog.
- **Never** include any legacy Portuguese couples-therapy clinic copy (`"Instituto Ramon Bennett | terapia"`) that leaked from his old cloned Wix database.
- **Always** frame his background in Human Sciences, Law, and Psychotherapy as the intellectual foundation of **Spatial Psychology & Neurodesign** (*"Every space tells a story. Ours begins by listening."*).

---

## 2. Contractual Deliverables Checklist (Must Be 100% Fulfilled)
1. **Bespoke Next.js 15 App Router Architecture** with `< 45 KB` core script weight, instant mobile-first rendering, and zero Wix bloat.
2. **Editorial Luxury Typography & Color System (WCAG AAA):**
   - Canvas Background: Warm Limestone (`#F6F3EC`)
   - Elevated Surface: Honed Travertine (`#EDE6D8`)
   - Atelier Dark Surface: Deep Obsidian (`#161311`)
   - Primary Text: Deep Espresso (`#181412` — 16.4:1 contrast)
   - Secondary Text: Warm Umber (`#524942` — 7.8:1 contrast)
   - Brand Accents: Aged Bahian Bronze (`#8C6239`) & Heritage Oxblood (`#4A1E1B`)
   - Fonts (`next/font/google`): `Cormorant Garamond` (Display/Editorial Serif), `Plus Jakarta Sans` (Body/UI), `JetBrains Mono` (Architectural Coordinates, Metrics & Labels).
3. **Motion & Visual Treatment Engine (2026 Awwwards Standard):**
   - **Lenis Smooth Scroll** synchronized with **Framer Motion** (`useScroll`, `useTransform`, `useInView`, `AnimatePresence`).
   - **Heavy Architectural Cubic-Bezier Easings:** Always use `[0.76, 0, 0.24, 1]` or `[0.22, 1, 0.36, 1]`. Never use bouncy or cartoon springs.
   - **Homepage & Portfolio Video Support:** Dedicated `<HeroVideoShowcase />` supporting muted ambient micro-life loops + full-screen cinema modal with sound, plus portfolio reel embeds.
   - **Interactive Before & After Spatial Transformation Slider:** Both drag-handle and scroll-scrubbed comparison (`02_before_alphaville_raw_space.jpg` vs. `03_after_alphaville_transformed.jpg`) with clickable architectural cure pins.
   - **Editorial Image Treatment:** All images rendered with unified warm editorial color grading, responsive `next/image` WebP/AVIF optimization, and zero layout shift (`CLS = 0`).
4. **The 4-Platform Client Ownership Stack:**
   - **GitHub:** Clean, documented repository ready for client transfer/push.
   - **Vercel:** Zero-config production deployment with custom domain (`ramonbennettinteriors.com`) and `301`/`410` redirects purging legacy Wix therapy URLs.
   - **Brevo (`/api/inquire`):** Transactional email notification & CRM contact creation on every client inquiry, with automatic local JSON/storage fallback if `BREVO_API_KEY` is not yet configured.
   - **Cal.com (`<CalBookingModal />`):** Embedded private consultation scheduler (`NEXT_PUBLIC_CAL_LINK`) for London (In-Person/Zoom) and Salvador/International commissions.
5. **Intuitive Visual Admin Dashboard (`/admin`):**
   - Allows Ramon (a non-developer) to visually add/edit portfolio projects, upload/swap Before & After photos, update the Homepage Video URL, publish `/journal` essays, and review client inquiries without touching code.

---

## 3. Directory & Asset Map
- `d:\ramonbennettinteriors\research\client_assets\` — Original extracted Wix media (Seahorse logo `logo_seahorse.png`, Aunt Márcia archival drafting photo `studio_craftsmanship_1.jpg`, carved settee `studio_craftsmanship_2.jpeg`, courtyard pool `home_courtyard_pool.jpg`, golden living room `home_golden_living_room.png`, Alphaville salons `residential_alphaville_1.png` & `residential_alphaville_2.png`, Ramon portrait `people_ramon.png`).
- `d:\ramonbennettinteriors\research\generated_visuals\` — High-resolution *Architectural Digest* editorial visuals (`01_hero_salvador_london_penthouse`, `02_before_alphaville_raw_space`, `03_after_alphaville_transformed`, `04_bespoke_joinery_atelier_detail`, `05_rua_do_palacio_hospitality_lounge`).
- `d:\ramonbennettinteriors\public\images\` — Production web-served copies of all client + generated visuals.
- `d:\ramonbennettinteriors\src\data\studioData.ts` — Single source of truth for bilingual (`EN-GB` & `PT-BR`) studio copy, projects, heritage timeline, services, journal essays, and speaking topics.

---

## 4. Agent Execution & Verification Rules
1. **Bounded Verification (Impeccable Standard):** Build complete, production-ready components with zero placeholders (`TODO`, `Lorem ipsum`, or empty pages are strictly forbidden). Every route in the navbar (`/`, `/studio`, `/founder`, `/projects`, `/projects/[slug]`, `/services`, `/journal`, `/contact`, `/admin`) must be 100% populated and functional.
2. **SEO & Redirect Hygiene:** Ensure `src/app/layout.tsx` sets title `"Ramon Bennett Interiors | Luxury Interior Architecture & Bespoke Joinery — London & Salvador"` and injects valid `InteriorDesignBusiness` + `Person` JSON-LD Schema. Ensure `next.config.ts` redirects legacy Wix routes (`/about-3` -> `/studio`, `/about-1` -> `/founder`, `/rua-do-palácio` -> `/projects/rua-do-palacio`, `/alphaville-i` -> `/projects/alphaville-i`, `/alphaville-ii` -> `/projects/alphaville-ii`).
3. **Browser QA:** After `npm run build` succeeds, verify desktop (`1440x900`) and mobile (`390x844`) viewports using `chrome-devtools-mcp` to confirm zero horizontal overflow, crisp typography, and smooth 60fps interaction.
