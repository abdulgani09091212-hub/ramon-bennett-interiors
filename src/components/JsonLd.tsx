import React from "react";
import { STUDIO_CONFIG, PROJECTS_DATA } from "@/data/studioData";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["InteriorDesignBusiness", "ArchitecturalService"],
        "@id": "https://www.ramonbennettinteriors.com/#studio",
        name: "Ramon Bennett Interiors",
        alternateName: "RB Luxury Interiors London | Salvador",
        url: "https://www.ramonbennettinteriors.com",
        logo: "https://www.ramonbennettinteriors.com/images/logo_seahorse.png",
        image:
          "https://www.ramonbennettinteriors.com/images/01_hero_salvador_london_penthouse.jpg",
        description:
          "Luxury interior architecture, bespoke Brazilian joinery (30+ years heritage), and spatial psychology studio operating in London and Salvador, founded by Ramon Bennett alongside Márcia Ribeiro and Mariana Figueiredo.",
        slogan: "Every space tells a story. Ours begins by listening.",
        priceRange: "££££",
        founder: {
          "@id": "https://www.ramonbennettinteriors.com/#ramon-bennett",
        },
        areaServed: [
          { "@type": "City", name: "London" },
          { "@type": "City", name: "Salvador" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Brazil" },
        ],
        knowsAbout: [
          "Luxury Interior Design",
          "Interior Architecture",
          "Bespoke Joinery",
          "Neurodesign",
          "Spatial Psychology",
          "Hospitality Interior Design",
          "Residential Renovation",
        ],
        sameAs: [
          STUDIO_CONFIG.instagramStudio,
          STUDIO_CONFIG.instagramPersonal,
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.ramonbennettinteriors.com/#ramon-bennett",
        name: "Ramon Bennett",
        jobTitle: "Founder, Creative Director & Spatial Psychologist",
        worksFor: {
          "@id": "https://www.ramonbennettinteriors.com/#studio",
        },
        description:
          "Founder of Ramon Bennett Interiors, writer, and speaker uniting human sciences, law, relationship psychology, and luxury interior architecture between London and Salvador.",
        sameAs: [STUDIO_CONFIG.instagramPersonal, STUDIO_CONFIG.instagramStudio],
      },
      ...PROJECTS_DATA.map((p) => ({
        "@type": "CreativeWork",
        "@id": `https://www.ramonbennettinteriors.com/projects/${p.slug}`,
        name: `${p.title} — ${p.location}`,
        creator: {
          "@id": "https://www.ramonbennettinteriors.com/#studio",
        },
        image: `https://www.ramonbennettinteriors.com${p.afterImage}`,
        description: p.psychologicalBrief.en,
        dateCreated: p.year,
        locationCreated: p.location,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
