import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StudioProvider } from "@/context/StudioContext";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationConcierge from "@/components/ConsultationConcierge";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ramonbennettinteriors.com"),
  title: {
    default:
      "Ramon Bennett Interiors | Luxury Interior Architecture & Bespoke Joinery — London & Salvador",
    template: "%s | Ramon Bennett Interiors (London | Salvador)",
  },
  description:
    "The Art of Understanding. Luxury residential & hospitality interior architecture, 30-year bespoke Brazilian joinery atelier, and spatial psychology (Neurodesign) between London and Salvador.",
  keywords: [
    "Ramon Bennett Interiors",
    "Ramon Bennett",
    "Luxury Interior Design London",
    "Bespoke Joinery London Salvador",
    "Neurodesign Interior Architecture",
    "Spatial Psychology Interiors",
    "Arquitetura de Interiores Salvador Alphaville",
    "Marcenaria de Alto Padrão Salvador",
  ],
  openGraph: {
    title:
      "Ramon Bennett Interiors | Luxury Interior Architecture & Bespoke Joinery — London & Salvador",
    description:
      "Every space tells a story. Ours begins by listening. International interior architecture, 30-year family bespoke joinery, and spatial psychology.",
    url: "https://www.ramonbennettinteriors.com",
    siteName: "Ramon Bennett Interiors",
    images: [
      {
        url: "/images/01_hero_salvador_london_penthouse.jpg",
        width: 1600,
        height: 900,
        alt: "Ramon Bennett Interiors — London & Salvador Luxury Interior Architecture",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ramon Bennett Interiors | Luxury Interior Architecture — London & Salvador",
    description:
      "Every space tells a story. Ours begins by listening. Bespoke residential, hospitality, and architectural joinery.",
    images: ["/images/01_hero_salvador_london_penthouse.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-limestone text-espresso antialiased selection:bg-oxblood selection:text-limestone">
        <JsonLd />
        <StudioProvider>
          <SmoothScroll>
            <Header />
            <main className="min-h-screen pt-20 lg:pt-28">{children}</main>
            <Footer />
            <ConsultationConcierge />
          </SmoothScroll>
        </StudioProvider>
      </body>
    </html>
  );
}
