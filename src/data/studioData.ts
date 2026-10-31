export type Locale = "en" | "pt";

export interface CurePin {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: { en: string; pt: string };
  beforeProblem: { en: string; pt: string };
  afterCure: { en: string; pt: string };
  materialSpec: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  subtitle: { en: string; pt: string };
  category: "Residential" | "Hospitality" | "Commercial" | "Bespoke Joinery";
  location: string;
  coordinates: string;
  year: string;
  areaSqm: string;
  durationMonths: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: { en: string; pt: string };
  afterLabel: { en: string; pt: string };
  galleryImages: { src: string; caption: { en: string; pt: string }; aspect: "landscape" | "portrait" | "square" }[];
  videoUrl?: string;
  psychologicalBrief: { en: string; pt: string };
  architecturalCure: { en: string; pt: string };
  joineryStory: { en: string; pt: string };
  pullQuote: { en: string; pt: string };
  curePins: CurePin[];
  materials: {
    name: string;
    origin: string;
    finish: string;
    swatchHex: string;
    role: { en: string; pt: string };
  }[];
}

export interface JournalEssay {
  slug: string;
  title: { en: string; pt: string };
  subtitle: { en: string; pt: string };
  category: { en: string; pt: string };
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: { en: string; pt: string };
  bodyParagraphs: { en: string[]; pt: string[] };
  keyTakeaway: { en: string; pt: string };
}

export const STUDIO_CONFIG = {
  brandName: "Ramon Bennett Interiors",
  tagline: {
    en: "The Art of Understanding",
    pt: "A Arte de Compreender",
  },
  subTagline: {
    en: "Every space tells a story. Ours begins by listening.",
    pt: "Cada espaço conta uma história. A nossa começa pela escuta.",
  },
  heroVideoUrl: "/videos/studio-reel.mp4",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "ramonbennett/private-consultation",
  instagramStudio: "https://www.instagram.com/ramonbennettinteriors/",
  instagramPersonal: "https://www.instagram.com/ramonbennettofficial/",
  whatsappLondon: "+442079460921",
  whatsappSalvador: "+5571999824100",
  emailLondon: "london@ramonbennettinteriors.com",
  emailSalvador: "salvador@ramonbennettinteriors.com",
  offices: [
    {
      city: "LONDON",
      role: { en: "Creative Direction & Spatial Psychology Practice", pt: "Direção Criativa & Psicologia Espacial" },
      address: "Kensington & Chelsea, London SW7, United Kingdom",
      coordinates: "51°29'51\"N 00°10'32\"W",
      timezone: "Europe/London",
      phone: "+44 (0) 20 7946 0921",
      email: "london@ramonbennettinteriors.com",
    },
    {
      city: "SALVADOR",
      role: { en: "Master Bespoke Joinery Atelier & Project Delivery", pt: "Atelier de Marcenaria Sob Medida & Gestão de Obras" },
      address: "Alphaville & Centro Histórico, Salvador — Bahia, Brazil",
      coordinates: "12°58'16\"S 38°30'39\"W",
      timezone: "America/Bahia",
      phone: "+55 (71) 99982-4100",
      email: "salvador@ramonbennettinteriors.com",
    },
  ],
};

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    slug: "alphaville-i",
    title: "Alphaville I",
    subtitle: {
      en: "A Life Reimagined — From Compartmentalised 1990s Structure to Open-Plan Freijó Timber Pavilion",
      pt: "Uma Vida Reimaginada — De Estrutura Compartimentada dos Anos 1990 a Pavilhão Integrado em Freijó",
    },
    category: "Residential",
    location: "Salvador, Bahia — Brazil",
    coordinates: "12°56'42\"S 38°24'18\"W",
    year: "2025",
    areaSqm: "480 m²",
    durationMonths: "11 Months",
    heroImage: "/images/03_after_alphaville_transformed.jpg",
    beforeImage: "/images/02_before_alphaville_raw_space.jpg",
    afterImage: "/images/03_after_alphaville_transformed.jpg",
    beforeLabel: {
      en: "BEFORE — 1998 Original Site Survey (Cold Ceramic & Structural Pillars)",
      pt: "ANTES — Levantamento Original 1998 (Cerâmica Fria e Pilares Escuros)",
    },
    afterLabel: {
      en: "AFTER — Completed Pavilion (Fluted Freijó Joinery & Honed Travertine)",
      pt: "DEPOIS — Pavilhão Concluído (Marcenaria Freijó Ripado e Travertino Levigado)",
    },
    galleryImages: [
      {
        src: "/images/03_after_alphaville_transformed.jpg",
        caption: {
          en: "Main living pavilion opened to the tropical perimeter with custom bronze-framed glazing and continuous honed Brazilian travertine.",
          pt: "Pavilhão principal integrado ao jardim tropical com esquadrias em bronze e piso contínuo em travertino brasileiro levigado.",
        },
        aspect: "landscape",
      },
      {
        src: "/images/residential_alphaville_2.png",
        caption: {
          en: "Intimate conversation salon featuring bespoke terracotta velvet daybed, Brazilian modernist timber armchairs, and collected Bahian textiles.",
          pt: "Salão de convivência íntimo com recamier curvo em veludo terracota, poltronas modernistas brasileiras em madeira maciça e têxteis baianos.",
        },
        aspect: "landscape",
      },
      {
        src: "/images/04_bespoke_joinery_atelier_detail.jpg",
        caption: {
          en: "Macro detail of Aunt Márcia Ribeiro's bespoke joinery: hand-fluted Brazilian walnut meeting brushed aged brass and honed Calacatta Viola marble.",
          pt: "Detalhe macro da marcenaria sob medida de Márcia Ribeiro: nogueira brasileira canelada à mão encontrando latão envelhecido e mármore Calacatta Viola.",
        },
        aspect: "portrait",
      },
      {
        src: "/images/home_courtyard_pool.jpg",
        caption: {
          en: "Restorative courtyard plunge pool framed by hand-laid regional stone masonry and warm limewashed plaster.",
          pt: "Piscina contemplativa no pátio interno emoldurada por alvenaria de pedra regional esculpida à mão.",
        },
        aspect: "landscape",
      },
    ],
    psychologicalBrief: {
      en: "What began as a conversation about a family home filled with three decades of memories became a deeply personal psychological transformation. The original 1998 layout suffered from harsh 6000K fluorescent ceiling grids, cold high-gloss white ceramic tiles, and heavy mahogany column partitions that isolated the kitchen and garden from daily family rituals.",
      pt: "O que começou como uma conversa sobre uma casa repleta de memórias tornou-se uma transformação psicológica profunda. O layout original de 1998 sofria com iluminação fluorescente fria, piso cerâmico branco reflexivo e pilares pesados de mogno que isolavam a cozinha e o jardim da convivência familiar.",
    },
    architecturalCure: {
      en: "Guided by spatial psychology, we removed the non-structural corridor partitions and replaced the fragmented balcony doors with a 9-metre bronze-anodised sliding glass threshold. Acoustic calm and visual warmth were engineered through a continuous floor-to-ceiling fluted Brazilian Freijó timber wall concealing storage, AV, and kitchen service doors, paired with 2700K indirect architectural cove lighting.",
      pt: "Guiados pela psicologia espacial, removemos as divisórias não estruturais e substituímos as portas fragmentadas por um vão de 9 metros em vidro e bronze. A calma acústica e o acolhimento tátil foram alcançados por meio de um painel contínuo em madeira Freijó canelada que mimetiza portas e armários, combinado com iluminação indireta em sanca a 2700K.",
    },
    joineryStory: {
      en: "Over 42 linear metres of custom Freijó and Louro Preto joinery were hand-drafted and fabricated in Salvador under Márcia Ribeiro's supervision, with Mariana Figueiredo governing structural glazing, marble import tolerances, and turnkey scheduling.",
      pt: "Mais de 42 metros lineares de marcenaria sob medida em Freijó e Louro Preto foram desenhados e executados em Salvador sob supervisão técnica de Márcia Ribeiro, com gestão contratual e executiva de Mariana Figueiredo.",
    },
    pullQuote: {
      en: "A room may be perfectly composed, but its success is ultimately measured by the life and human connection that unfolds within it.",
      pt: "Um ambiente pode ser perfeitamente composto, mas seu sucesso é medido pela vida e pelas conexões humanas que nele florescem.",
    },
    curePins: [
      {
        id: "pin-glazing",
        x: 28,
        y: 44,
        title: { en: "9m Biophilic Bronze Threshold", pt: "Vão Biofílico de 9m em Bronze" },
        beforeProblem: {
          en: "Narrow aluminium frames blocked 45% of natural daylight and severed visual connection to the palms.",
          pt: "Esquadrias estreitas bloqueavam 45% da luz natural e isolavam a sala do jardim tropical.",
        },
        afterCure: {
          en: "Recessed floor tracks and slimline bronze sliders merge indoor travertine seamlessly with the garden terrace.",
          pt: "Trilhos embutidos no travertino e folhas amplas em bronze integram interior e jardim sem degraus.",
        },
        materialSpec: "Anodised Architectural Bronze + Low-E Acoustic Glass (STC 42)",
      },
      {
        id: "pin-joinery",
        x: 78,
        y: 46,
        title: { en: "Acoustic Fluted Freijó Timber Wall", pt: "Painel Acústico em Freijó Canelado" },
        beforeProblem: {
          en: "Heavy dark mahogany column wraps and a closed drywall kitchen box fractured the room into dead zones.",
          pt: "Pilares escuros de mogno e paredes de alvenaria fragmentavam a sala em corredores ociosos.",
        },
        afterCure: {
          en: "Continuous 28mm solid Freijó slats absorb high-frequency echo while concealing pivot doors to the culinary suite.",
          pt: "Ripado contínuo de 28mm em Freijó maciço absorve reverberação sonora e oculta portas pivotantes.",
        },
        materialSpec: "FSC Certified Brazilian Freijó + Beeswax Matte Oil + 2700K Linear LED",
      },
      {
        id: "pin-floor",
        x: 52,
        y: 82,
        title: { en: "Honed Bahian Travertine Slab Flooring", pt: "Piso em Travertino Baiano Levigado" },
        beforeProblem: {
          en: "40x40cm white ceramic tiles with dark grout lines created visual clutter and cold acoustic reflection.",
          pt: "Cerâmica branca 40x40cm com rejunte escuro gerava poluição visual e sensação clínica.",
        },
        afterCure: {
          en: "Large-format 120x120cm honed, unfilled travertine grounds the barefoot sensory experience of the home.",
          pt: "Placas de 120x120cm em travertino levigado proporcionam textura orgânica e conforto térmico.",
        },
        materialSpec: "Honed Brazilian Beige Travertine — Bookmatched Dry-Lay",
      },
    ],
    materials: [
      {
        name: "Fluted Brazilian Freijó",
        origin: "Salvador Joinery Atelier",
        finish: "Hand-rubbed natural carnauba & beeswax matte",
        swatchHex: "#8B5A36",
        role: { en: "Acoustic architectural wall panelling & credenza", pt: "Painéis arquitetônicos acústicos e aparador" },
      },
      {
        name: "Honed Bahian Travertine",
        origin: "Chapada Diamantina, Bahia",
        finish: "Velvet-honed open pore",
        swatchHex: "#DFD5C3",
        role: { en: "Continuous indoor-outdoor monolithic flooring", pt: "Piso monolítico contínuo interno-externo" },
      },
      {
        name: "Terracotta Silk Mohair & Bouclé",
        origin: "London Textile Archive",
        finish: "High-martindale tactile weave",
        swatchHex: "#A84A32",
        role: { en: "Curved conversation sofas & custom upholstery", pt: "Sofás orgânicos curvos e estofaria sob medida" },
      },
      {
        name: "Unlacquered Aged Brass",
        origin: "Bespoke Foundry",
        finish: "Living hand-brushed patina",
        swatchHex: "#9A7B4F",
        role: { en: "Shadow-gap inlays & cabinet hardware", pt: "Perfis negativos e ferragens de precisão" },
      },
    ],
  },
  {
    slug: "kensington-townhouse",
    title: "Kensington Sanctuary",
    subtitle: {
      en: "Victorian Architectural Proportions Restored Through Smoked Walnut Library Joinery & Neurodesign Calm",
      pt: "Proporções Vitorianas Restauradas com Biblioteca em Nogueira Defumada e Neurodesign Contemplativo",
    },
    category: "Residential",
    location: "Kensington, London SW7 — UK",
    coordinates: "51°29'58\"N 00°10'45\"W",
    year: "2026",
    areaSqm: "340 m²",
    durationMonths: "9 Months",
    heroImage: "/images/08_after_kensington_london_sanctuary.jpg",
    beforeImage: "/images/07_before_kensington_london_raw.jpg",
    afterImage: "/images/08_after_kensington_london_sanctuary.jpg",
    beforeLabel: {
      en: "BEFORE — Dated Kensington Drawing Room (Peeling Wallpaper & Exposed Radiator)",
      pt: "ANTES — Sala Vitoriana em Kensington (Papel de Parede Desgastado e Radiador Exposto)",
    },
    afterLabel: {
      en: "AFTER — Bespoke Smoked Walnut Library, Limestone Hearth & Bouclé Sanctuary",
      pt: "DEPOIS — Biblioteca em Nogueira Sob Medida, Lareira em Calcário e Santuário Tátil",
    },
    galleryImages: [
      {
        src: "/images/08_after_kensington_london_sanctuary.jpg",
        caption: {
          en: "Restored Victorian drawing room featuring floor-to-ceiling smoked walnut library joinery with integrated radiator grilles in woven bronze mesh.",
          pt: "Sala vitoriana restaurada com estantes piso-teto em nogueira defumada e grelhas de calefação em malha de bronze.",
        },
        aspect: "landscape",
      },
      {
        src: "/images/01_hero_salvador_london_penthouse.jpg",
        caption: {
          en: "Primary reception salon blending London Georgian cornices with curved Brazilian Louro Preto cabinetry and golden-hour herringbone parquet.",
          pt: "Salão de recepção principal unindo molduras clássicas londrinas à marcenaria curva brasileira em Louro Preto.",
        },
        aspect: "landscape",
      },
      {
        src: "/images/home_golden_living_room.png",
        caption: {
          en: "Evening atmospheric study showing warm 2400K circadian lighting balance across hand-troweled lime plaster walls.",
          pt: "Estudo atmosférico vespertino demonstrando o equilíbrio circadiano a 2400K sobre paredes em estuque mineral.",
        },
        aspect: "landscape",
      },
    ],
    psychologicalBrief: {
      en: "Commissioned by a London executive couple seeking a cognitive decompression sanctuary away from high-stakes public life. The existing Victorian drawing room had soaring 3.6-metre ceilings and triple sash windows, yet felt cold, echoey, and visually restless due to yellowed wallpaper, exposed cast-iron radiators, and scuffed pine subfloors.",
      pt: "Encomendado por um casal executivo em Londres que buscava um refúgio de descompressão cognitiva. A sala vitoriana possuía pé-direito de 3,6 metros e amplas janelas guilhotina, mas transmitia frieza e dispersão visual devido ao papel de parede antigo, radiador aparente e assoalho desgastado.",
    },
    architecturalCure: {
      en: "We enveloped the perimeter in bespoke floor-to-ceiling smoked walnut library joinery with museum-grade 2400K shelf illumination and woven bronze grilles that conceal the heating infrastructure. The blackened Victorian grate was replaced with a monolithic honed Portland limestone hearth, while herringbone European oak and a hand-knotted wool relief rug anchor the acoustic envelope.",
      pt: "Envolvemos o perímetro em marcenaria piso-teto de nogueira defumada com iluminação museológica a 2400K e telas em bronze tecido que ocultam o sistema de calefação. A antiga lareira escura deu lugar a um pórtico monolítico em calcário Portland levigado.",
    },
    joineryStory: {
      en: "Technical joinery drawings were developed between London and our Salvador atelier, combining traditional English scribed cornice detailing with hand-selected South American walnut veneers.",
      pt: "Os projetos executivos de marcenaria foram desenvolvidos entre Londres e nosso atelier em Salvador, unindo o rigor das molduras clássicas inglesas às lâminas naturais de nogueira sul-americana.",
    },
    pullQuote: {
      en: "True luxury in London is not ornament; it is acoustic stillness, tactile honesty, and a room that lowers your nervous system the moment you cross the threshold.",
      pt: "O verdadeiro luxo em Londres não é o excesso ornamental; é o silêncio acústico, a honestidade tátil e um espaço que desacelera a mente ao cruzar a porta.",
    },
    curePins: [
      {
        id: "pin-library",
        x: 15,
        y: 45,
        title: { en: "Bespoke Smoked Walnut Library & Bronze Mesh Grille", pt: "Biblioteca em Nogueira & Malha de Bronze" },
        beforeProblem: {
          en: "Blank peeling walls and exposed pipework wasted vertical volume and created harsh slap-echo.",
          pt: "Paredes descascadas e tubulações aparentes desperdiçavam o pé-direito e geravam eco.",
        },
        afterCure: {
          en: "3.6m scribed library cabinetry with integrated 2400K LED rebates and perforated bronze radiator enclosures.",
          pt: "Estante de 3,6m ajustada às sancas originais com iluminação embutida e fechamento inferior em malha de bronze.",
        },
        materialSpec: "Crown-Cut Smoked Walnut + Hand-Patinated Woven Brass Mesh",
      },
      {
        id: "pin-windows",
        x: 48,
        y: 38,
        title: { en: "Acoustic Sash Restoration & Belgian Linen Drapery", pt: "Restauro Acústico & Linho Belga" },
        beforeProblem: {
          en: "Exposed central cast-iron radiator and bare window frames let Kensington street noise and glare straight in.",
          pt: "Radiador central aparente e janelas sem tratamento acústico permitiam ruído urbano e ofuscamento.",
        },
        afterCure: {
          en: "Relocated trench heating frees the bay window; full-height unbleached Belgian linen softens London daylight.",
          pt: "Calefação transferida para a marcenaria libera os vãos; cortinas em linho belga filtram a luz londrina.",
        },
        materialSpec: "Double-Glazed Heritage Sash + 420gsm Unbleached Belgian Linen",
      },
      {
        id: "pin-hearth",
        x: 90,
        y: 65,
        title: { en: "Monolithic Honed Limestone Hearth", pt: "Lareira Monolítica em Calcário Levigado" },
        beforeProblem: {
          en: "Soot-stained Victorian cast-iron surround visually weighed down the right elevation.",
          pt: "Antiga lareira de ferro fundido escurecida pesava visualmente na parede lateral.",
        },
        afterCure: {
          en: "Clean architectural limestone surround topped with flush walnut overmantel panelling.",
          pt: "Pórtico limpo em pedra calcária natural coroado por painel contínuo em nogueira.",
        },
        materialSpec: "Honed Portland Limestone + Recessed Flue",
      },
    ],
    materials: [
      {
        name: "Smoked Crown-Cut Walnut",
        origin: "Bespoke Atelier Selection",
        finish: "Dead-flat architectural lacquer (5% sheen)",
        swatchHex: "#4A3222",
        role: { en: "Floor-to-ceiling library & overmantel panelling", pt: "Biblioteca piso-teto e painel superior da lareira" },
      },
      {
        name: "Honed Portland Limestone",
        origin: "Dorset, United Kingdom",
        finish: "Fine matte stone",
        swatchHex: "#E5DEC9",
        role: { en: "Bespoke fireplace surround & hearth plinth", pt: "Lareira esculpida sob medida" },
      },
      {
        name: "Full-Grain Saddle Cognac Leather",
        origin: " Tuscan Tannery",
        finish: "Vegetable-tanned aniline",
        swatchHex: "#7C4728",
        role: { en: "Reading club chair upholstery", pt: "Poltrona de leitura clássica" },
      },
      {
        name: "Herringbone European Oak",
        origin: "France / UK",
        finish: "Brushed & fumed natural oil",
        swatchHex: "#9C7A54",
        role: { en: "Acoustic insulated parquet flooring", pt: "Piso parquet espinha de peixe com manta acústica" },
      },
    ],
  },
  {
    slug: "rua-do-palacio",
    title: "Rua do Palácio",
    subtitle: {
      en: "19th-Century Bahian Stone Arches Reborn as an Intimate Members' Hospitality Lounge",
      pt: "Arcos de Pedra do Século XIX Renascidos como Lounge de Hospitalidade no Centro Histórico",
    },
    category: "Hospitality",
    location: "Centro Histórico, Salvador — Brazil",
    coordinates: "12°58'31\"S 38°30'44\"W",
    year: "2026",
    areaSqm: "390 m²",
    durationMonths: "14 Months",
    heroImage: "/images/05_rua_do_palacio_hospitality_lounge.jpg",
    beforeImage: "/images/06_before_rua_do_palacio_raw_shell.jpg",
    afterImage: "/images/05_rua_do_palacio_hospitality_lounge.jpg",
    beforeLabel: {
      en: "BEFORE — Unrestored 19th-Century Heritage Masonry Shell",
      pt: "ANTES — Casarão Histórico do Século XIX em Estado Bruto",
    },
    afterLabel: {
      en: "AFTER — Candlelit Stone Archways, Terracotta & Olive Velvet Banquettes",
      pt: "DEPOIS — Arcos Restaurados, Banquetes em Veludo Terracota e Verde Oliva",
    },
    galleryImages: [
      {
        src: "/images/05_rua_do_palacio_hospitality_lounge.jpg",
        caption: {
          en: "Restored colonial stone masonry arches juxtaposed against tailored channel-tufted banquettes in burnt terracotta and deep olive velvet.",
          pt: "Arcos coloniais em pedra restaurados em diálogo com banquetes canelados em veludo terracota e verde oliva.",
        },
        aspect: "landscape",
      },
      {
        src: "/images/04_bespoke_joinery_atelier_detail.jpg",
        caption: {
          en: "Custom curved walnut host credenza with Calacatta Viola marble top and aged brass detailing.",
          pt: "Credenza de recepção em nogueira canelada com tampo em mármore Calacatta Viola e latão envelhecido.",
        },
        aspect: "portrait",
      },
      {
        src: "/images/studio_craftsmanship_2.jpeg",
        caption: {
          en: "Heritage Bahian hand-carved jacaranda settee reupholstered in bespoke houndstooth and botanical jacquard.",
          pt: "Canapé tradicional entalhado à mão reestofado em pied-de-poule e jacquard botânico exclusivo.",
        },
        aspect: "landscape",
      },
    ],
    psychologicalBrief: {
      en: "Situated on the historic Rua do Palácio in Salvador, this heritage structure possessed extraordinary 19th-century stone arches and timber roof trusses that had lain derelict under layers of crumbling blue plaster and damp concrete. The brief called for an intimate hospitality lounge that honoured Bahian provenance while channelling the hushed, club-like intimacy of Mayfair.",
      pt: "Localizado na histórica Rua do Palácio em Salvador, este imóvel preservava arcos de pedra do século XIX que estavam degradados sob camadas de reboco úmido. O briefing pedia um espaço de hospitalidade intimista que honrasse a memória baiana com a sofisticação dos clubes privados de Mayfair, em Londres.",
    },
    architecturalCure: {
      en: "Our restoration stripped back the damaged plaster to expose the raw structural stone piers, consolidating the mortar with breathable lime plaster. To foster effortless conversation and romantic proximity, we designed a central spine of back-to-back olive velvet banquettes and perimeter terracotta booths, crowned by a custom hand-blown amber glass and brass chandelier.",
      pt: "Nossa intervenção removeu o reboco comprometido para revelar a cantaria original de pedra, estabilizando as alvenarias com argamassa de cal respirável. Para estimular conversas próximas e conforto acústico, desenhamos uma espinha central de sofás costas-com-costas em veludo verde oliva e nichos laterais em terracota.",
    },
    joineryStory: {
      en: "Every dining table, curved banquette plinth, and acoustic wainscot was fabricated in our Salvador workshop using reclaimed local hardwoods and Verde Alpi marble tops.",
      pt: "Todas as mesas, bases curvas de marcenaria e lambris acústicos foram produzidos em nossa oficina em Salvador utilizando madeiras nobres certificadas e tampos em mármore Verde Alpi.",
    },
    pullQuote: {
      en: "Hospitality design is the choreography of human closeness—lighting the face softly, quieting the room, and letting history hold the conversation.",
      pt: "A arquitetura de hospitalidade é a coreografia da proximidade humana: iluminar o rosto com suavidade, acalmar o ruído e deixar a história acolher a conversa.",
    },
    curePins: [
      {
        id: "pin-arches",
        x: 24,
        y: 32,
        title: { en: "Consolidated 19th-Century Stone Masonry", pt: "Cantaria Histórica do Século XIX Restaurada" },
        beforeProblem: {
          en: "Damp cement render was trapping moisture and flaking off the historic stone archways.",
          pt: "Reboco de cimento incompatível retinha umidade e deteriorava os arcos históricos.",
        },
        afterCure: {
          en: "Hand-dressed stone piers with warm 2200K uplighting celebrating the tactile irregular relief.",
          pt: "Pedra aparente higienizada e consolidada com iluminação focal a 2200K destacando o relevo original.",
        },
        materialSpec: "Original Bahian Sandstone + Breathable Lime Mortar + 2200K Grazing LED",
      },
      {
        id: "pin-banquette",
        x: 48,
        y: 68,
        title: { en: "Dual-Spine Olive & Terracotta Velvet Banquettes", pt: "Banquetes em Veludo Verde Oliva & Terracota" },
        beforeProblem: {
          en: "Vast empty floor span felt cavernous and lacked human-scale seating zones.",
          pt: "Vão central amplo e vazio carecia de escala humana e zonas de permanência íntima.",
        },
        afterCure: {
          en: "Acoustic channel-tufted velvet banquettes divide the hall into intimate conversational pockets.",
          pt: "Estofaria canelada de alta densidade cria ilhas acústicas de conversação.",
        },
        materialSpec: "Fire-Retardant Cotton Velvet + Solid Louro Preto Plinths",
      },
      {
        id: "pin-chandelier",
        x: 50,
        y: 24,
        title: { en: "Bespoke Amber Hand-Blown Glass & Brass Chandelier", pt: "Lustre Sob Medida em Latão e Vidro Âmbar" },
        beforeProblem: {
          en: "Single bare work bulb left the dark timber rafters gloomy and uninviting.",
          pt: "Ausência de iluminação arquitetônica deixava o madeiramento do telhado sombrio.",
        },
        afterCure: {
          en: "Sculptural 14-globe brass luminaire casts a warm golden canopy beneath the restored ceiling beams.",
          pt: "Luminária escultórica de 14 globos em vidro soprado cria um dossel dourado sob o vigamento.",
        },
        materialSpec: "Unlacquered Brushed Brass + Hand-Blown Amber Borosilicate",
      },
    ],
    materials: [
      {
        name: "Heritage Bahian Stone & Lime",
        origin: "19th-Century Original Structure",
        finish: "Consolidated natural relief",
        swatchHex: "#B89F82",
        role: { en: "Structural archways & breathable lime walls", pt: "Arcos estruturais e paredes em cal" },
      },
      {
        name: "Deep Olive & Burnt Terracotta Velvet",
        origin: "Milan / London",
        finish: "Heavyweight acoustic pile",
        swatchHex: "#4B5335",
        role: { en: "Bespoke channel-tufted hospitality banquettes", pt: "Banquetes sob medida de alta absorção acústica" },
      },
      {
        name: "Verde Alpi Marble",
        origin: "Aosta Valley, Italy",
        finish: "Honed bevelled edge",
        swatchHex: "#283B32",
        role: { en: "Bespoke cocktail & dining table tops", pt: "Tampos de mesas de jantar e coquetel" },
      },
      {
        name: "Solid Louro Preto Timber",
        origin: "Salvador Joinery Atelier",
        finish: "Hand-oiled dark satin",
        swatchHex: "#3A261B",
        role: { en: "Dining tables, banquette bases & wainscoting", pt: "Mesas, bases de sofás e lambris" },
      },
    ],
  },
  {
    slug: "alphaville-ii",
    title: "Alphaville II",
    subtitle: {
      en: "Collected Provenance — Heirloom Bahian Craftsmanship Meets Contemporary Collector's Salon",
      pt: "Memória e Acervo — Alta Marcenaria Baiana e Salão de Colecionador Contemporâneo",
    },
    category: "Bespoke Joinery",
    location: "Salvador, Bahia — Brazil",
    coordinates: "12°56'55\"S 38°24'02\"W",
    year: "2025",
    areaSqm: "410 m²",
    durationMonths: "8 Months",
    heroImage: "/images/residential_alphaville_1.png",
    beforeImage: "/images/02_before_alphaville_raw_space.jpg",
    afterImage: "/images/residential_alphaville_1.png",
    beforeLabel: {
      en: "BEFORE — Unarticulated White Drywall Box",
      pt: "ANTES — Caixa Branca Sem Identidade Arquitetônica",
    },
    afterLabel: {
      en: "AFTER — Layered Collector's Salon with Bespoke Timber Panelling & Brass Luminaire",
      pt: "DEPOIS — Salão de Colecionador com Lambris Sob Medida e Iluminação em Latão",
    },
    galleryImages: [
      {
        src: "/images/residential_alphaville_1.png",
        caption: {
          en: "Collector's salon featuring warm walnut panelling, classical sculpture plinths, velvet dining chairs, and ivory bouclé seating.",
          pt: "Salão de colecionador com painéis em nogueira, pedestais em mármore para escultura clássica e sala de jantar integrada.",
        },
        aspect: "landscape",
      },
      {
        src: "/images/04_bespoke_joinery_atelier_detail.jpg",
        caption: {
          en: "Precision fluted timber joinery with integrated brass reveal and Calacatta Viola stone top.",
          pt: "Detalhe de precisão da marcenaria canelada com friso em latão e tampo em Calacatta Viola.",
        },
        aspect: "portrait",
      },
      {
        src: "/images/studio_craftsmanship_1.jpg",
        caption: {
          en: "Archival photograph of Márcia Ribeiro drafting full-scale joinery elevations by hand in Salvador.",
          pt: "Registro histórico de Márcia Ribeiro desenhando elevações técnicas de marcenaria à mão em Salvador.",
        },
        aspect: "landscape",
      },
    ],
    psychologicalBrief: {
      en: "Designed for a family of art collectors who felt alienated by sterile white-cube minimalism. They wanted a home with soul, shadow, and historical weight—where contemporary abstract canvases, classical busts, and heirloom Brazilian furniture could coexist in effortless dialogue.",
      pt: "Projetado para uma família de colecionadores de arte que não se identificava com o minimalismo frio e impessoal. O desejo era uma residência com alma, sombra e densidade histórica, onde telas abstratas contemporâneas e esculturas clássicas dialogassem com naturalidade.",
    },
    architecturalCure: {
      en: "We replaced the stark white drywall with architectural boiserie and dark walnut panelling crafted in our Salvador workshop. By introducing monolithic marble plinths, layered ambient lighting, and deep olive velvet dining chairs, the space transitions effortlessly from daytime reading to intimate evening hosting.",
      pt: "Substituímos as paredes brancas sem expressão por boiseries contemporâneas e painéis em madeira nobre executados em nossa marcenaria. Com pedestais monolíticos em mármore e iluminação cênica em camadas, o espaço acolhe tanto a leitura diurna quanto jantares intimistas.",
    },
    joineryStory: {
      en: "Every architectural moulding, concealed bar cabinet, and monolithic stone pedestal was custom-engineered by Márcia Ribeiro and Mariana Figueiredo's team.",
      pt: "Cada moldura arquitetônica, bar oculto e pedestal de pedra foi projetado e fabricado sob medida pela equipe de Márcia Ribeiro e Mariana Figueiredo.",
    },
    pullQuote: {
      en: "An object may be beautiful, but its meaning belongs to the person who treasures it. Our work is to build the stage worthy of their story.",
      pt: "Um objeto pode ser belo, mas seu significado pertence a quem o estima. Nosso trabalho é construir o cenário digno dessa história.",
    },
    curePins: [
      {
        id: "pin-plinth",
        x: 24,
        y: 55,
        title: { en: "Bespoke Nero Marquina Sculpture Plinth & Walnut Boiserie", pt: "Pedestal em Nero Marquina & Painel em Nogueira" },
        beforeProblem: {
          en: "Artworks and sculptures had no architectural framing, floating awkwardly against flat plaster.",
          pt: "Obras de arte e esculturas ficavam soltas contra paredes brancas sem enquadramento.",
        },
        afterCure: {
          en: "Warm fielded timber panelling and a custom stone pedestal anchor the classical bust in dramatic side light.",
          pt: "Painéis almofadados em madeira e pedestal em pedra escura criam profundidade de galeria.",
        },
        materialSpec: "Solid Brazilian Walnut + Honed Nero Marquina Marble",
      },
      {
        id: "pin-dining",
        x: 46,
        y: 62,
        title: { en: "Circular Brass Ring Chandelier & Olive Velvet Dining Suite", pt: "Lustre Anelar em Latão & Jantar em Veludo Oliva" },
        beforeProblem: {
          en: "Disconnected dining zone lacked warmth and visual hierarchy from the main living salon.",
          pt: "Sala de jantar desconectada carecia de intimidade e hierarquia visual.",
        },
        afterCure: {
          en: "Oversized brushed brass ring pendant and tailored olive velvet chairs create a jewel-box dining perspective.",
          pt: "Pendente circular em latão escovado e cadeiras em veludo verde oliva emolduram o eixo visual.",
        },
        materialSpec: "Brushed Aged Brass + Moss Olive Cotton Velvet",
      },
    ],
    materials: [
      {
        name: "Fielded Brazilian Walnut Panelling",
        origin: "Salvador Joinery Atelier",
        finish: "Warm hand-rubbed satin",
        swatchHex: "#5B3B24",
        role: { en: "Full-height architectural wall panelling", pt: "Painéis arquitetônicos piso-teto" },
      },
      {
        name: "Calacatta Viola & Nero Marquina",
        origin: "Carrara / Spain",
        finish: "Honed architectural edge",
        swatchHex: "#3D2B35",
        role: { en: "Sculpture plinths & credenza tops", pt: "Pedestais de escultura e tampos" },
      },
      {
        name: "Moss Olive & Oxblood Velvet",
        origin: "London / Italy",
        finish: "Deep matte plush",
        swatchHex: "#3F4A2C",
        role: { en: "Dining chairs & accent cushions", pt: "Cadeiras de jantar e almofadas" },
      },
    ],
  },
];

export const STUDIO_HERITAGE_STORY = {
  headline: {
    en: "Before the Studio, There Was a Story.",
    pt: "Antes do Estúdio, Havia uma História.",
  },
  subheadline: {
    en: "Some stories begin with an ambition. Ours began with a family, a love of craftsmanship, and the quiet belief that beautiful things are worth creating with care.",
    pt: "Algumas histórias começam com uma ambição. A nossa começou com uma família, pelo amor ao ofício artesanal e pela convicção silenciosa de que coisas belas merecem ser criadas com rigor.",
  },
  chapters: [
    {
      title: {
        en: "I. The Craftsmanship — Salvador, Brazil (30+ Years of Bespoke Joinery)",
        pt: "I. O Ofício Artesanal — Salvador, Brasil (Mais de 30 Anos de Alta Marcenaria)",
      },
      image: "/images/studio_craftsmanship_1.jpg",
      imageCaption: {
        en: "Márcia Ribeiro at the drafting table in Salvador, translating bespoke furniture concepts into technical joinery blueprints long before digital screens.",
        pt: "Márcia Ribeiro na prancheta de desenho em Salvador, traduzindo ideias em projetos técnicos de marcenaria sob medida.",
      },
      paragraphs: {
        en: [
          "Long before Ramon Bennett Interiors came into being, the foundations of the studio were taking shape in Salvador, Brazil. They were not laid in an architectural practice or a prestigious design showroom, but in the world of bespoke furniture-making, where ideas were translated into drawings, timber was shaped by skilled hands, and every piece carried the unmistakable character of its maker.",
          "At the heart of that story was Márcia Ribeiro, Ramon's aunt. Márcia brought something distinctly her own to the craft: an instinctive talent for drawing, an artistic sensibility, and a remarkable ability to imagine what did not yet exist. This was a time before inspiration could be summoned instantly onto a screen. Ideas had to be sought, studied, sketched, and developed.",
          "Over more than three decades, Márcia's knowledge grew far beyond furniture design. She became deeply involved in the technical development, manufacturing, and installation of bespoke joinery—acquiring the kind of expertise that cannot be learned from books alone. It is knowledge earned through experience, problem-solving, and the countless details that separate something merely well-designed from something exceptionally well-made.",
        ],
        pt: [
          "Muito antes de a Ramon Bennett Interiors existir, os alicerces do estúdio já ganhavam forma em Salvador, Bahia. Eles não nasceram em um showroom convencional, mas no universo da alta marcenaria sob medida, onde ideias eram traduzidas em desenho técnico na prancheta, a madeira maciça era moldada por mãos mestras e cada peça carregava a assinatura de quem a criou.",
          "No coração dessa história está Márcia Ribeiro, tia de Ramon. Ao longo de mais de três décadas, Márcia aprofundou seu domínio muito além do desenho de mobiliário, liderando o desenvolvimento técnico, a fabricação e a instalação de marcenaria arquitetônica de alta precisão — um saber conquistado na prática que separa o que é apenas bem desenhado daquilo que é extraordinariamente bem executado.",
        ],
      },
    },
    {
      title: {
        en: "II. Specification & Governance — Where Law Meets Architectural Delivery",
        pt: "II. Especificação & Governança — Onde o Rigor Jurídico Encontra a Entrega",
      },
      image: "/images/04_bespoke_joinery_atelier_detail.jpg",
      imageCaption: {
        en: "Precision tolerance where hand-fluted Brazilian walnut meets brushed brass and Calacatta Viola marble.",
        pt: "Precisão construtiva onde a nogueira canelada encontra o latão escovado e o mármore Calacatta Viola.",
      },
      paragraphs: {
        en: [
          "Years later, Mariana Figueiredo, Ramon's sister, made a decision that would bring a new dimension to the family enterprise. After a decade working in law, she stepped away from an established legal career to join her aunt in the business.",
          "She entered a world very different from the one she had known, yet brought with her skills that would prove invaluable: an understanding of contracts, organisation, professional relationships, commercial responsibility, and the importance of delivering on a promise.",
          "Where Márcia had spent years mastering the art of making, Mariana brought structure to the processes that supported it. Together, they strengthened a business built on technical knowledge and craftsmanship, developing enduring relationships with architects, designers, and private clients who valued bespoke work.",
        ],
        pt: [
          "Anos mais tarde, Mariana Figueiredo, irmã de Ramon, trouxe uma nova dimensão ao negócio da família. Após uma década atuando no Direito, ela decidiu unir forças com sua tia na empresa de marcenaria e interiores.",
          "Onde Márcia havia dedicado décadas à arte de criar e fabricar, Mariana implementou governança, segurança contratual, cronogramas rigorosos e responsabilidade executiva — garantindo que cada promessa estética fosse entregue com precisão absoluta.",
        ],
      },
    },
    {
      title: {
        en: "III. The Art of Understanding — London to Salvador (Spatial Psychology)",
        pt: "III. A Arte de Compreender — De Londres a Salvador (Psicologia Espacial)",
      },
      image: "/images/people_ramon.png",
      imageCaption: {
        en: "Ramon Bennett — Founder & Creative Director (London | Salvador).",
        pt: "Ramon Bennett — Fundador & Diretor Criativo (Londres | Salvador).",
      },
      paragraphs: {
        en: [
          "Meanwhile, Ramon's path had taken him far from Salvador. He built his adult life over 17 years in London, studying Human & Medical Sciences, then Law, before finding his professional calling in psychotherapy, writing, and public speaking on human relationships.",
          "Although these disciplines may appear distant from interior design, they shared a single enduring thread: a profound curiosity about people—their histories, their motivations, their relationships, the things they express openly, and those they struggle to put into words.",
          "In 2020, Ramon returned to Brazil to develop his own home. For the first time, the family's three forms of expertise converged: Márcia's 30-year mastery of bespoke furniture and technical execution, Mariana's organisational and commercial precision, and Ramon's creative vision shaped by London architecture, international travel, and a professional life dedicated to understanding human behaviour.",
          "To these foundations, Ramon brought an approach to design informed by spatial psychology, attentive listening, and the conviction that truly personal interiors cannot emerge from aesthetics alone. Today, working between London and Salvador, Ramon Bennett Interiors creates spaces that reflect who people are, honour who they have been, and embrace who they aspire to become.",
        ],
        pt: [
          "Enquanto isso, a trajetória de Ramon o levou a Londres, onde viveu por 17 anos, graduando-se em Ciências Humanas e Médicas, Direito e Psicoterapia, além de construir sua carreira como escritor e palestrante sobre relações humanas.",
          "Em 2020, ao desenvolver sua própria residência no Brasil, as três vocações da família convergiram pela primeira vez: a maestria técnica de Márcia na marcenaria, a governança executiva de Mariana e a visão criativa e psicológica de Ramon moldada em Londres.",
          "Hoje, atuando entre Londres e Salvador, a Ramon Bennett Interiors une psicologia espacial, escuta profunda e alta marcenaria artesanal para criar interiores que honram a individualidade e transformam a experiência de viver.",
        ],
      },
    },
  ],
  pillars: [
    {
      name: "Ramon Bennett",
      role: {
        en: "Founder, Creative Director & Spatial Psychologist",
        pt: "Fundador, Diretor Criativo & Estrategista em Psicologia Espacial",
      },
      location: "London & Salvador",
      bio: {
        en: "17 years in London across Human & Medical Sciences, Law, and Psychotherapy. Leads creative direction, client discovery, spatial psychology (Neurodesign), writing, and international keynotes.",
        pt: "17 anos em Londres com formação em Ciências Humanas, Direito e Psicoterapia. Lidera a direção criativa, o diagnóstico de psicologia espacial (Neurodesign) e palestras internacionais.",
      },
      portrait: "/images/people_ramon.png",
      instagram: "@ramonbennettofficial",
    },
    {
      name: "Márcia Ribeiro",
      role: {
        en: "Head of Technical Development & Master Bespoke Joinery",
        pt: "Diretora de Desenvolvimento Técnico & Mestre em Alta Marcenaria",
      },
      location: "Salvador Atelier",
      bio: {
        en: "Over 30 years of master craftsmanship in Salvador. Oversees hand-drafted joinery engineering, hardwood selection, bespoke furniture manufacturing, and precision architectural installation.",
        pt: "Mais de 30 anos de maestria artesanal em Salvador. Lidera o detalhamento técnico, seleção de madeiras nobres, fabricação própria e instalação de alta precisão.",
      },
      portrait: "/images/studio_craftsmanship_1.jpg",
    },
    {
      name: "Mariana Figueiredo",
      role: {
        en: "Director of Operations, Legal Governance & Delivery",
        pt: "Diretora de Operações, Governança Jurídica & Entrega",
      },
      location: "Salvador & International",
      bio: {
        en: "Former lawyer with 10 years of legal practice. Governs client contracts, supplier procurement, architectural timelines, and commercial accountability from brief to handover.",
        pt: "Advogada por 10 anos antes de ingressar no estúdio. Comanda contratos, suprimentos, cronogramas de obra e governança financeira do início à entrega das chaves.",
      },
      portrait: "/images/04_bespoke_joinery_atelier_detail.jpg",
    },
  ],
};

export const NEURODESIGN_ARCHETYPES = [
  {
    id: "sanctuary",
    title: { en: "01. The Restorative Sanctuary", pt: "01. O Santuário Restaurador" },
    psychologicalGoal: {
      en: "Parasympathetic nervous system recovery, acoustic stillness, and sensory decompression for high-performing executives and couples.",
      pt: "Recuperação do sistema nervoso, silêncio acústico e descompressão sensorial para executivos e casais.",
    },
    kelvinTemp: "2400K — Warm Candlelight Spectrum",
    acousticRating: "NRC 0.75 (Fluted Timber + Heavy Bouclé & Belgian Linen)",
    recommendedProjectSlug: "kensington-townhouse",
    previewImage: "/images/08_after_kensington_london_sanctuary.jpg",
    palette: [
      { name: "Warm Limestone Plaster", hex: "#EAE3D5" },
      { name: "Smoked Crown Walnut", hex: "#4A3222" },
      { name: "Unbleached Belgian Linen", hex: "#D8CEBE" },
      { name: "Patina Bronze", hex: "#8C6239" },
    ],
    prescription: {
      en: "We eliminate high-gloss specular glare and hard 90-degree corridor transitions, wrapping the perimeter in sound-absorbing fluted walnut and indirect 2400K cove illumination that signals safety and intimacy to the brain.",
      pt: "Eliminamos superfícies reflexivas frias e quinas agressivas, envolvendo o espaço em nogueira acústica e iluminação indireta a 2400K que induz calma e intimidade imediata.",
    },
  },
  {
    id: "hosting",
    title: { en: "02. Biophilic & Relational Flow", pt: "02. Fluidez Biofílica e Relacional" },
    psychologicalGoal: {
      en: "Dissolving domestic isolation between hosts and guests by uniting culinary, garden, and living rituals into one sun-drenched pavilion.",
      pt: "Dissolver o isolamento espacial entre anfitriões e convidados, integrando jardim, gastronomia e estar.",
    },
    kelvinTemp: "2700K — Golden Hour Architectural Wash",
    acousticRating: "NRC 0.65 (Slatted Freijó Ceiling & Wall Baffling)",
    recommendedProjectSlug: "alphaville-i",
    previewImage: "/images/03_after_alphaville_transformed.jpg",
    palette: [
      { name: "Honed Bahian Travertine", hex: "#DFD5C3" },
      { name: "Natural Brazilian Freijó", hex: "#8B5A36" },
      { name: "Terracotta Silk Mohair", hex: "#A84A32" },
      { name: "Botanical Palm Green", hex: "#3B4D36" },
    ],
    prescription: {
      en: "Curved seating geometry (sofas and daybeds set at 115-degree conversational arcs rather than rigid parallel lines) removes subconscious social tension while 9-metre bronze glass thresholds flood the home with circadian daylight.",
      pt: "Mobiliário curvo posicionado em arcos de 115 graus estimula o contato visual espontâneo, enquanto vãos de 9 metros em vidro e bronze banham o interior com luz natural.",
    },
  },
  {
    id: "intimacy",
    title: { en: "03. Heritage & Nocturnal Intimacy", pt: "03. Memória, Herança e Intimidade Noturna" },
    psychologicalGoal: {
      en: "Creating magnetic emotional gravity, deep conversation, and timeless provenance for boutique hospitality and collector residences.",
      pt: "Criar magnetismo emocional, conversas profundas e senso de permanência histórica.",
    },
    kelvinTemp: "2200K — Amber Borosilicate & Table-Level Pools",
    acousticRating: "NRC 0.80 (Channel-Tufted Velvet & Natural Stone Relief)",
    recommendedProjectSlug: "rua-do-palacio",
    previewImage: "/images/05_rua_do_palacio_hospitality_lounge.jpg",
    palette: [
      { name: "Heritage Bahian Sandstone", hex: "#B89F82" },
      { name: "Burnt Terracotta Velvet", hex: "#8E3B24" },
      { name: "Deep Olive Velvet", hex: "#4B5335" },
      { name: "Verde Alpi Marble", hex: "#283B32" },
    ],
    prescription: {
      en: "Low-hung amber illumination keeps ceilings in velvety shadow while illuminating faces softly across marble tables—the psychological key to unhurried human connection.",
      pt: "Iluminação baixa em vidro âmbar mantém o teto em penumbra acolhedora enquanto ilumina suavemente o rosto na altura das mesas.",
    },
  },
];

export const SERVICES_DATA = [
  {
    number: "01",
    title: { en: "Turnkey Interior Architecture", pt: "Arquitetura de Interiores Turnkey" },
    scope: { en: "London, Salvador & International", pt: "Londres, Salvador & Internacional" },
    description: {
      en: "Comprehensive spatial reconfiguration from initial psychological & lifestyle discovery through architectural spatial planning, lighting design, stone & textile specification, and turnkey site execution.",
      pt: "Reconfiguração espacial completa, desde o diagnóstico profundo de estilo de vida e psicologia espacial até o projeto luminotécnico, especificação de pedras naturais e execução chave na mão.",
    },
    deliverables: [
      "Spatial Psychology & Lifestyle Diagnostic Brief",
      "Full 2D CAD Elevations, Lighting & MEP Coordination",
      "Photorealistic Before/After Architectural Visualisation",
      "Legal, Contractual & Procurement Governance by Mariana Figueiredo",
    ],
  },
  {
    number: "02",
    title: { en: "Bespoke Joinery & Furniture Atelier", pt: "Alta Marcenaria Sob Medida & Mobiliário" },
    scope: { en: "30+ Year Family Workshop in Salvador", pt: "Oficina Própria com 30+ Anos em Salvador" },
    description: {
      en: "Directed by Márcia Ribeiro, our studio designs, drafts, and manufactures heirloom architectural joinery, library boiserie, acoustic fluted timber walls, and collectible freestanding furniture.",
      pt: "Sob direção técnica de Márcia Ribeiro, desenhamos e fabricamos bibliotecas piso-teto, painéis acústicos ripados, cozinhas arquitetônicas e peças de mobiliário autoral em madeiras nobres.",
    },
    deliverables: [
      "1:1 Shop Drawings & Timber Veneer Flitch Selection",
      "Custom Brass, Bronze & Natural Marble Integration",
      "Dedicated Artisan Fabrication & White-Glove Installation",
      "International Crating & Export Coordination",
    ],
  },
  {
    number: "03",
    title: { en: "Spatial Psychology, Neurodesign & Speaking", pt: "Psicologia Espacial, Neurodesign & Palestras" },
    scope: { en: "Advisory, Keynotes & Editorial Commissions", pt: "Consultoria Privada, Palestras & Editorial" },
    description: {
      en: "An extension of Ramon Bennett's personal work in human relationships, psychotherapy, and writing: private consultations and international keynotes on how physical environments shape intimacy, focus, and emotional wellbeing.",
      pt: "Extensão direta da trajetória de Ramon Bennett nas ciências humanas, escrita e palestras: consultoria e keynotes sobre como o espaço físico molda as relações humanas, a intimidade e a saúde emocional.",
    },
    deliverables: [
      "Neurodesign & Sensory Audit for Private Residences (ADHD / Executive Calm)",
      "Relational Space Planning for Couples & Families",
      "Keynote Speaking & Brand Collaborations (@ramonbennettofficial)",
      "Private 1:1 Discovery Consultation (London In-Person or Zoom)",
    ],
  },
];

export const JOURNAL_ESSAYS: JournalEssay[] = [
  {
    slug: "neurodesign-adaptive-luxury-sanctuaries",
    title: {
      en: "Neurodesign & The Architecture of Calm: Designing Adaptive Luxury Sanctuaries",
      pt: "Neurodesign e a Arquitetura da Calma: Construindo Ambientes Adaptáveis de Alto Padrão",
    },
    subtitle: {
      en: "How spatial psychology, circadian lighting, and tactile natural materials quiet the modern nervous system.",
      pt: "Como a psicologia espacial, a iluminação circadiana e os materiais naturais acolhem a mente contemporânea.",
    },
    category: { en: "Neurodesign & Spatial Psychology", pt: "Neurodesign & Psicologia Espacial" },
    date: "October 2026",
    readTime: "6 Min Read",
    coverImage: "/images/08_after_kensington_london_sanctuary.jpg",
    excerpt: {
      en: "For seventeen years in London, my work in human sciences and psychotherapy taught me that people rarely suffer in a vacuum—they suffer inside rooms that overstimulate, isolate, or ignore their emotional rhythms.",
      pt: "Durante dezessete anos em Londres, minha atuação nas ciências humanas e na psicoterapia me ensinou que as pessoas não vivem no vazio — elas habitam espaços que podem acolher ou sobrecarregar suas emoções.",
    },
    bodyParagraphs: {
      en: [
        "When we walk into a room, our nervous system evaluates the environment milliseconds before our conscious mind registers the furniture. The height of the ceiling, the acoustic reverberation of footsteps on stone versus timber, the Kelvin temperature of the light, and whether our back is exposed to an open corridor all trigger immediate neurobiological responses.",
        "In contemporary luxury residential design, there has been a dangerous obsession with visual spectacle at the expense of human neurology. High-gloss marble floors paired with 4000K recessed spotlights and stark white drywall may photograph sharply, but for an executive returning home—or an individual navigating ADHD and sensory fatigue—such spaces act as a perpetual cognitive alarm.",
        "At Ramon Bennett Interiors, our practice of Neurodesign begins by listening to how a person processes the world. By replacing visual clutter with concealed full-height joinery crafted in our Salvador workshop, introducing sound-absorbing fluted Brazilian hardwoods, and choreographing warm 2400K indirect lighting, the home ceases to be a showroom and becomes a psychological sanctuary.",
      ],
      pt: [
        "Quando entramos em um ambiente, nosso sistema nervoso avalia o espaço milissegundos antes de nossa mente consciente reparar no mobiliário. A reverberação acústica, a temperatura de cor da luz e a organização visual acionam respostas neurobiológicas imediatas.",
        "No mercado de luxo contemporâneo, muitas vezes prioriza-se o espetáculo visual em detrimento da neurologia humana. Pisos excessivamente reflexivos e iluminação fria podem parecer imponentes em fotografias rápidas, mas geram fadiga sensorial contínua — especialmente para mentes criativas ou pessoas com TDAH.",
        "Na Ramon Bennett Interiors, aplicamos o Neurodesign unindo escuta clínica e alta marcenaria sob medida: painéis contínuos em madeira natural que ocultam o ruído visual, texturas orgânicas e iluminação indireta quente que devolvem ao lar sua função primordial de refúgio emocional.",
      ],
    },
    keyTakeaway: {
      en: "True luxury is never loud. It is the invisible alignment between architectural proportion, natural materiality, and the human nervous system.",
      pt: "O verdadeiro luxo nunca é ruidoso. É o alinhamento invisível entre proporção arquitetônica, matéria natural e o sistema nervoso humano.",
    },
  },
  {
    slug: "the-architecture-of-human-relationships",
    title: {
      en: "The Architecture of Intimacy: How the Rooms We Inhabit Shape the Way We Love",
      pt: "A Arquitetura da Intimidade: Como os Espaços que Habitamos Moldam Nossas Relações",
    },
    subtitle: {
      en: "Why my work in human relationships and interior architecture have always been one single conversation.",
      pt: "Por que meu trabalho com relações humanas e arquitetura de interiores sempre foram uma única filosofia.",
    },
    category: { en: "Founder Philosophy & Relationships", pt: "Filosofia do Fundador & Relações" },
    date: "October 2026",
    readTime: "5 Min Read",
    coverImage: "/images/05_rua_do_palacio_hospitality_lounge.jpg",
    excerpt: {
      en: "People often ask how a career spanning human sciences, law, and relationship psychology in London led back to founding an interior design studio with my family in Salvador. The answer is simple: every relationship unfolds inside a space.",
      pt: "Muitos perguntam como uma carreira dedicada às ciências humanas e às relações em Londres se uniu à tradição de marcenaria da minha família em Salvador. A resposta é simples: toda relação humana acontece dentro de um espaço.",
    },
    bodyParagraphs: {
      en: [
        "Consider the layout of the 1990s residence we transformed in Alphaville I. Before our intervention, the kitchen was walled off behind a narrow door, and the living room seating was arranged around a television screen rather than facing one another. Without realising it, the architecture was scripting separation into the family's daily life.",
        "When we design a salon—whether for a private townhouse in Kensington or our hospitality lounge on Rua do Palácio—we choreograph proximity. A curved terracotta daybed invites two people to turn toward each other. Candlelit 2200K lighting across a honed marble table softens self-consciousness and invites unhurried conversation.",
        "Interior design is not separate from the art of human relationships; it is its physical vessel. When we honour who people have been and listen to what they struggle to put into words, we can build rooms that hold their most meaningful chapters.",
      ],
      pt: [
        "Observe o layout original da residência que transformamos em Alphaville I. Antes da reforma, a cozinha era isolada por paredes cegas e os sofás não favoreciam o olhar mútuo. Sem que a família percebesse, a própria arquitetura impunha distanciamento na rotina diária.",
        "Quando desenhamos um salão — seja em uma townhouse em Kensington ou no lounge da Rua do Palácio — estamos coreografando encontros. Um sofá curvo convida ao diálogo; a luz suave sobre a madeira maciça reduz a pressa e desperta a presença.",
        "A arquitetura de interiores não está separada da arte das relações humanas: ela é o seu palco físico.",
      ],
    },
    keyTakeaway: {
      en: "We do not merely arrange furniture; we design the spatial conditions where conversation, memory, and intimacy can endure.",
      pt: "Não apenas dispomos móveis; desenhamos as condições espaciais onde o diálogo, a memória e a intimidade podem florescer.",
    },
  },
  {
    slug: "thirty-years-of-bespoke-bahian-joinery",
    title: {
      en: "From the Drafting Board in Salvador: Why Bespoke Joinery Is the Soul of a Room",
      pt: "Da Prancheta em Salvador: Por Que a Alta Marcenaria Artesanal É a Alma de um Espaço",
    },
    subtitle: {
      en: "A tribute to my aunt Márcia Ribeiro, my sister Mariana Figueiredo, and three decades of making things by hand.",
      pt: "Um tributo à minha tia Márcia Ribeiro, à minha irmã Mariana Figueiredo e a três décadas de excelência artesanal.",
    },
    category: { en: "Craftsmanship & Provenance", pt: "Ofício Artesanal & Herança" },
    date: "September 2026",
    readTime: "7 Min Read",
    coverImage: "/images/studio_craftsmanship_1.jpg",
    excerpt: {
      en: "In an era of mass-produced catalog interiors, the difference between a room that merely looks expensive and a room that feels timeless lies in the millimetre tolerances of bespoke joinery.",
      pt: "Em uma era de interiores padronizados de catálogo, a diferença entre um espaço que apenas parece caro e uma obra atemporal reside na precisão milimétrica da marcenaria feita à mão.",
    },
    bodyParagraphs: {
      en: [
        "One of my most treasured photographs in our studio archive shows my aunt, Márcia Ribeiro, seated at her wooden drafting board in Salvador decades ago, pencil and scale ruler in hand. Long before 3D renders existed, she possessed the rare gift of seeing how raw Brazilian timber could be shaped into architectural poetry.",
        "When my sister Mariana Figueiredo left a ten-year career in law to bring structural governance and contractual precision to the workshop, she ensured that Márcia's artistry could scale to complex residential and hospitality commissions without ever compromising a promise.",
        "Today, that thirty-year lineage is the backbone of Ramon Bennett Interiors. Every fluted walnut panel, every concealed pivot door, and every brass-inlaid credenza is born from a family tradition that refuses shortcuts.",
      ],
      pt: [
        "Uma das fotografias mais preciosas do nosso acervo mostra minha tia, Márcia Ribeiro, diante de sua prancheta em Salvador décadas atrás, com lapiseira e escalímetro em mãos. Muito antes dos softwares digitais, ela já dominava a arte de transformar madeira bruta em arquitetura.",
        "Quando minha irmã Mariana Figueiredo deixou dez anos de carreira jurídica para estruturar a gestão executiva e contratual da empresa, ela garantiu que a arte de Márcia pudesse atender grandes projetos residenciais e comerciais com pontualidade e rigor.",
        "Hoje, esse legado de trinta anos é a espinha dorsal da Ramon Bennett Interiors.",
      ],
    },
    keyTakeaway: {
      en: "An interior is only as enduring as the hands that built it and the family word that stands behind its delivery.",
      pt: "Um interior só é verdadeiramente duradouro quando sustentado pela maestria das mãos que o constroem e pela palavra que garante sua entrega.",
    },
  },
];
