export type Source = {
  type: string;
  title: string;
  url: string;
};

export type Organization = {
  id: string;
  name: string;
  aka?: string[];
  place: string;
  lat: number;
  lng: number;
  category: string;
  blurb: string;
  bioregionalContext: string;
  tags: string[];
  sources: Source[];
  website?: string;
};

export const organizations: Organization[] = [
  {
    id: "green-releaf",
    name: "Green Releaf Initiative",
    aka: ["Living Story Landscapes", "Puso Sanctuary"],
    place: "Cebu (Central Cebu Protected Landscapes); also Marawi, Balawag Kalinga",
    lat: 10.3157,
    lng: 123.8854,
    category: "Hubs & Centers",
    blurb:
      "Transforms Disaster Risk Reduction into Design for Resilience and Regeneration via permaculture with displaced and Indigenous communities. Legacy continues as Living Story Landscapes and Puso Sanctuary (bioregional learning center); Handuraw Panaw is the multistakeholder watershed collaboration.",
    bioregionalContext:
      "Philippines in typhoon belt and Ring of Fire; Central Cebu watersheds retain roughly 1% of original forest cover.",
    tags: [
      "Ecosystem Regeneration",
      "Hubs & Centers",
      "Ways of Knowing",
      "Community Governance",
    ],
    sources: [
      {
        type: "article",
        title: "The Green Releaf Initiative — GENR",
        url: "https://genr.world/the-green-releaf-initiative/",
      },
      {
        type: "page",
        title: "Puso Sanctuary / Bayanihan — Ma Earth",
        url: "https://maearth.com/pusosanctuary/bayanihan",
      },
      {
        type: "story",
        title: "Permaculture & 4 Returns — Commonland",
        url: "https://4returns.commonland.com",
      },
    ],
    website: "https://maearth.com/pusosanctuary/bayanihan",
  },
  {
    id: "masungi",
    name: "Masungi Georeserve",
    place: "Baras, Rizal — Upper Marikina River Basin / Sierra Madre",
    lat: 14.605,
    lng: 121.35,
    category: "Ecosystem Regeneration",
    blurb:
      "Conservation and sustainable tourism protecting limestone karst and restoring ~2,700 ha of degraded watershed that buffers Metro Manila from floods.",
    bioregionalContext:
      "Upper Marikina River Basin Protected Landscape (~26,000 ha) is a life-support watershed for ~20 million people downstream in NCR.",
    tags: [
      "Ecosystem Regeneration",
      "Mapping & Indicators",
      "Hubs & Centers",
      "Legal Stewardship",
    ],
    sources: [
      {
        type: "article",
        title: "Mongabay Q&A with Ann Dumaliang (2023)",
        url: "https://news.mongabay.com",
      },
      {
        type: "story",
        title: "The Long Run — founding story",
        url: "https://www.thelongrun.org",
      },
    ],
    website: "https://www.masungigeoreserve.com",
  },
  {
    id: "haribon",
    name: "Haribon Foundation",
    place: "National; mangrove focus Quezon / REINA (Infanta)",
    lat: 14.742,
    lng: 121.649,
    category: "Ecosystem Regeneration",
    blurb:
      "Philippines’ pioneering conservation membership org; community mangrove restoration, Women Go nature-based solutions with rural women in protected areas, Forest for Life.",
    bioregionalContext:
      "Ridge-to-reef coastal and watershed systems under typhoon and conversion pressure.",
    tags: [
      "Ecosystem Regeneration",
      "Agro-Bioeconomy",
      "Community Governance",
    ],
    sources: [
      {
        type: "website",
        title: "Haribon Foundation",
        url: "https://haribon.org.ph",
      },
      {
        type: "article",
        title: "BusinessWorld — mangrove restoration in Quezon (2025)",
        url: "https://www.bworldonline.com",
      },
    ],
    website: "https://haribon.org.ph",
  },
  {
    id: "tambuyog",
    name: "Tambuyog Development Center",
    place: "Visayan Seas / Northern Cebu (Fish Right MKBA)",
    lat: 11.05,
    lng: 123.92,
    category: "Agro-Bioeconomy",
    blurb:
      "Fisheries reform and climate-resilient coastal livelihoods; Fish Right partner for ecosystem-based fisheries management in marine key biodiversity areas.",
    bioregionalContext:
      "Visayan Sea MKBA — fisheries, mangroves, reefs under pressure from overfishing and climate.",
    tags: [
      "Agro-Bioeconomy",
      "Community Governance",
      "Services & Infrastructure",
    ],
    sources: [
      {
        type: "page",
        title: "Tambuyog — Fish Right",
        url: "https://tambuyog.org",
      },
    ],
    website: "https://tambuyog.org",
  },
  {
    id: "ntfp-ep",
    name: "NTFP-EP Philippines",
    place: "Multi-landscape; pin Aborlan, Palawan (Victoria-Anepahan)",
    lat: 9.437,
    lng: 118.548,
    category: "Ways of Knowing",
    blurb:
      "Network with Indigenous Peoples and local communities on non-timber forest products, ancestral-domain governance, ICCAs, and culturally appropriate forest livelihoods (#NotByTimberAlone).",
    bioregionalContext:
      "Ancestral domains and community forests across Sierra Madre, Palawan, Mindoro, Visayas, Northern Mindanao.",
    tags: [
      "Ways of Knowing",
      "Legal Stewardship",
      "Agro-Bioeconomy",
      "Community Governance",
    ],
    sources: [
      {
        type: "website",
        title: "NTFP-EP — Philippines",
        url: "https://ntfp.org",
      },
      {
        type: "page",
        title: "NTFP-EP Philippines locations",
        url: "https://ntfpepphilippines.org/locations",
      },
      {
        type: "story",
        title: "Forest Foundation — Aborlan CBFM",
        url: "https://www.forestfoundation.ph",
      },
    ],
    website: "https://ntfpepphilippines.org",
  },
  {
    id: "philippine-eagle",
    name: "Philippine Eagle Foundation",
    place: "Davao / Eastern Mindanao Biodiversity Corridor",
    lat: 7.186,
    lng: 125.455,
    category: "Ecosystem Regeneration",
    blurb:
      "Culture-based conservation of the Philippine Eagle with Lumad and forest communities; nest monitoring, reforestation, ADSDPP-aligned stewardship across EMBC.",
    bioregionalContext:
      "Eastern Mindanao Biodiversity Corridor hosts a major share of remaining eagle nesting habitat, much within ancestral domains.",
    tags: [
      "Ecosystem Regeneration",
      "Ways of Knowing",
      "Legal Stewardship",
      "Mapping & Indicators",
    ],
    sources: [
      {
        type: "page",
        title: "Culture-based conservation — Philippine Eagle Foundation",
        url: "https://www.philippineeaglefoundation.org",
      },
      {
        type: "article",
        title: "context.ph — EMBC story (Sep 2026)",
        url: "https://context.ph",
      },
    ],
    website: "https://www.philippineeaglefoundation.org",
  },
  {
    id: "coral-triangle",
    name: "Coral Triangle Initiative (CTI-CFF)",
    place: "Coral Triangle waters (PH member state)",
    lat: 9.5,
    lng: 124.0,
    category: "Ecosystem Regeneration",
    blurb:
      "Six-country partnership including the Philippines for coral reefs, fisheries, and food security across the “Amazon of the Seas.”",
    bioregionalContext:
      "~6 million km² of tropical seas; extraordinary reef biodiversity supporting coastal livelihoods.",
    tags: [
      "Ecosystem Regeneration",
      "Community Governance",
      "Mapping & Indicators",
    ],
    sources: [
      {
        type: "website",
        title: "Coral Triangle Initiative",
        url: "https://www.coraltriangleinitiative.org",
      },
    ],
    website: "https://www.coraltriangleinitiative.org",
  },
  {
    id: "handuraw-panaw",
    name: "Handuraw Panaw",
    place: "Cebu watersheds",
    lat: 10.33,
    lng: 123.9,
    category: "Community Governance",
    blurb:
      "Multistakeholder ecosystem (government, civil society, business) scaling watershed restoration across Central Cebu; companion to Puso Sanctuary.",
    bioregionalContext:
      "Same Central Cebu protected landscapes / watershed crisis as Puso Sanctuary.",
    tags: [
      "Community Governance",
      "Ecosystem Regeneration",
      "Hubs & Centers",
    ],
    sources: [
      {
        type: "page",
        title: "Puso Sanctuary / Bayanihan — Ma Earth",
        url: "https://maearth.com/pusosanctuary/bayanihan",
      },
    ],
    website: "https://maearth.com/pusosanctuary/bayanihan",
  },
];

export const ALL_TAGS = Array.from(
  new Set(organizations.flatMap((o) => o.tags))
).sort();

export function getOrganization(id: string): Organization | undefined {
  return organizations.find((o) => o.id === id);
}
