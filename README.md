# Ramon Bennett Interiors — Luxury Interior Architecture & Spatial Psychology

> **London & Salvador (Bahia)** | Official Web Platform & Editorial Atelier  
> Live Production: [ramonbennettinteriors.com](https://www.ramonbennettinteriors.com/)

[![Next.js 15](https://img.shields.io/badge/Next.js-15.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG_AAA-2E7D32?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## 1. Studio Identity & Architectural Philosophy

Founded by **Ramon Bennett** alongside his aunt **Márcia Ribeiro** (30+ years master bespoke joinery) and sister **Mariana Figueiredo** (10 years legal & operational delivery governance), Ramon Bennett Interiors synthesizes European restraint with Brazilian warmth.

This platform unifies Ramon Bennett’s personal philosophical identity (`@ramonbennettofficial` — human sciences, psychotherapy, and public speaking) with his architectural practice (`@ramonbennettinteriors`) into **Spatial Psychology & Neurodesign**:

> *"Every space tells a story. Ours begins by listening."*

---

## 2. Core Technical Architecture

- **Next.js 15 App Router & React 19:** Instant Server-Side Rendering (SSR), streaming hydration, zero-CLS image loading, and sub-45KB initial bundle footprint.
- **Editorial Typography & Palette (WCAG AAA Compliant):**
  - **Limestone Canvas:** `#F6F3EC`
  - **Honed Travertine:** `#EDE6D8`
  - **Deep Obsidian:** `#161311`
  - **Deep Espresso Text:** `#181412` (16.4:1 contrast ratio)
  - **Warm Umber Text:** `#524942` (7.8:1 contrast ratio)
  - **Brand Accents:** Aged Bahian Bronze (`#8C6239`) & Heritage Oxblood (`#4A1E1B`)
  - **Typography:** `Cormorant Garamond` (Display), `Plus Jakarta Sans` (Body UI), `JetBrains Mono` (Architectural coordinates & metrics).
- **Motion & Visual Engine:**
  - Lenis smooth scrolling with Framer Motion interpolation.
  - Architectural cubic-bezier easings (`[0.76, 0, 0.24, 1]`).
  - Interactive **Before & After Spatial Metamorphosis Slider** with touch/mouse scrubbing and architectural cure pins.
  - Ambient Hero Video showcase supporting cinematic full-screen view and sound toggle.
- **Inquiry Concierge & CRM:**
  - Dynamic consultation concierge (`/api/inquire`) integrated with Brevo CRM & transactional email dispatch.
  - Cal.com embedded private consultation scheduler (`NEXT_PUBLIC_CAL_LINK`).
  - Resilient local JSON data store fallback when API keys are pending.
- **Visual Admin Dashboard (`/admin`):**
  - Intuitive, zero-code content management for Ramon to add portfolio commissions, publish journal essays, swap hero videos, and view client leads.

---

## 3. Directory Structure

```
d:\ramonbennettinteriors\
├── src\
│   ├── app\
│   │   ├── admin\           # Visual Admin CMS & Inquiries Manager
│   │   ├── api\inquire\     # Brevo CRM & Lead Routing Endpoint
│   │   ├── contact\         # Consultation Concierge & Contact Route
│   │   ├── founder\         # Ramon Bennett Personal Philosophy & Neurodesign
│   │   ├── journal\         # Editorial Architectural Journal
│   │   │   └── [slug]\      # Dynamic Essay Pages
│   │   ├── projects\        # Curated Portfolio Archive
│   │   │   └── [slug]\      # Architectural Case Studies & Before/After
│   │   ├── services\        # Private Commissions & Bespoke Joinery Menu
│   │   ├── studio\          # Transatlantic Atelier, Márcia & Mariana Story
│   │   ├── globals.css      # Custom utility classes & styling
│   │   ├── layout.tsx       # Root layout, JSON-LD Schema, WCAG Tokens
│   │   └── page.tsx         # Atelier Flagship Homepage
│   ├── components\          # Reusable Luxury Architectural UI Components
│   └── data\
│       └── studioData.ts    # Single Source of Truth for Studio Data
├── public\
│   ├── images\              # Optimized editorial visuals (WebP/AVIF)
│   └── videos\              # Ambient loops & transformation reels
├── research\                # Archival client photography & transcripts
├── AGENTS.md                # Autonomous Engineering Operating Rules
└── PRODUCT.md               # Product Requirements & Technical Specifications
```

---

## 4. Getting Started

### Local Development

```bash
# Clone the repository
git clone https://github.com/abdulgani09091212-hub/ramon-bennett-interiors.git
cd ramon-bennett-interiors

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 5. Client Transfer & Ownership Handover

This project is built for complete, seamless ownership transfer to Ramon Bennett:

### A. GitHub Ownership Transfer
1. Navigate to repository **Settings** on GitHub.
2. Scroll to the bottom of the **General** tab to the **Danger Zone**.
3. Click **Transfer ownership**.
4. Enter Ramon Bennett's GitHub username or organization name.
5. The repository, all commit history, and branches will transfer immediately.

### B. Vercel Project Transfer
1. Navigate to the project on the [Vercel Dashboard](https://vercel.com).
2. Go to **Settings > General > Transfer Project**.
3. Enter Ramon Bennett's Vercel account or team name.
4. Click **Transfer**. The domain `ramonbennettinteriors.com` and all environment variables will transfer seamlessly without downtime.

---

© 2026 Ramon Bennett Interiors. All rights reserved. London • Salvador.
