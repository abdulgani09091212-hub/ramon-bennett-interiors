import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy Wix Studio & People routes
      {
        source: "/about-3",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/about-1",
        destination: "/founder",
        permanent: true,
      },
      // Legacy Wix Project routes
      {
        source: "/rua-do-pal%C3%A1cio",
        destination: "/projects/rua-do-palacio",
        permanent: true,
      },
      {
        source: "/rua-do-palacio",
        destination: "/projects/rua-do-palacio",
        permanent: true,
      },
      {
        source: "/alphaville-i",
        destination: "/projects/alphaville-i",
        permanent: true,
      },
      {
        source: "/alphaville-ii",
        destination: "/projects/alphaville-ii",
        permanent: true,
      },
      // Legacy Wix Category routes
      {
        source: "/residential",
        destination: "/projects?category=Residential",
        permanent: true,
      },
      {
        source: "/hospitality",
        destination: "/projects?category=Hospitality",
        permanent: true,
      },
      {
        source: "/commercial",
        destination: "/projects?category=Commercial",
        permanent: true,
      },
      // Legacy Neurodesign post preserved & elevated into Journal
      {
        source: "/post/neurodesign-e-tdah-construindo-ambientes-adapt%C3%A1veis",
        destination: "/journal/neurodesign-adaptive-luxury-sanctuaries",
        permanent: true,
      },
      // Purge contaminated Wix couples-therapy blog & template routes
      {
        source: "/about-1-1",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/book-online",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/challenges",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/journal",
        permanent: true,
      },
      {
        source: "/product-page/:slug*",
        destination: "/journal",
        permanent: true,
      },
      {
        source: "/post/:slug*",
        destination: "/journal",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
