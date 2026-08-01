const ACTOR_ROLE_LABELS = {
  manufacturer: "Manufacturers",
  "raw-material-supplier": "Raw material suppliers & mining companies",
  "material-processor": "Material processors & refiners",
  "notified-body": "Notified bodies",
  "importer-distributor": "Importers & distributors",
  "dealer-end-user": "Dealers & end-users",
  "repurposing-operator": "Repurposing & remanufacturing operators",
  "repairer-second-life": "Repairers & second-life operators",
  "producer-pro": "Producers & producer responsibility organisations",
  "waste-collector": "Waste collectors & treatment facilities",
  recycler: "Recyclers",
};

const LIFECYCLE_STAGES = [
  {
    id: "raw-material-mining",
    label: "Raw Material Mining & Extraction",
    chartLabel: ["Raw Material", "Mining & Extraction"],
    shortLabel: "Mining",
    color: "#6366f1",
    icon: "assets/icons/mining-icon.svg",
    description:
      "Extraction of critical raw materials including lithium, cobalt, nickel, manganese, and graphite from mines and brine operations.",
    passportData: {
      "Material origin": "Chile (Li), DRC (Co), Australia (Ni)",
      "Due diligence": "OECD-aligned supply chain audit",
      "Carbon footprint": "12.4 kg CO₂e / kWh (materials)",
      "Recycled content": "18% average across cathode materials",
    },
    compliance: [
      "Due diligence policy documented",
      "Third-party audit completed (2025)",
      "Risk mitigation plan for high-risk regions",
    ],
    dppActors: [
      {
        role: "raw-material-supplier",
        name: "Raw material suppliers & mining companies",
        articleRefs: "Art. 49–50, Annex XIII",
        responsibilities: [
          "Provide upstream supply chain information on raw materials (e.g. lithium, cobalt, nickel) to downstream operators placing batteries on the market.",
          "Make third-party verification reports on due diligence available to the supply chain as required under Article 50(3).",
          "Supply verified data on material origin and extraction needed for passport material composition and responsible-sourcing fields.",
        ],
      },
      {
        role: "manufacturer",
        name: "Manufacturers (economic operators)",
        articleRefs: "Art. 48, Art. 49–50, Annex XIII",
        responsibilities: [
          "Set up and implement battery due diligence policies covering raw materials listed in Annex X from 18 August 2025 (Art. 48).",
          "Establish traceability systems identifying upstream actors and collect supply chain due diligence data for inclusion in the battery passport.",
          "Keep due diligence documentation — including verification and audit reports — for 10 years after the last battery under the policy is placed on the market.",
        ],
      },
    ],
  },
  {
    id: "material-refining",
    label: "Material Refining & Chemical Processing",
    chartLabel: ["Material Refining &", "Chemical Processing"],
    shortLabel: "Refining",
    color: "#8b5cf6",
    icon: "assets/icons/refining-icon.svg",
    description:
      "Refining of raw materials into battery-grade chemicals, cathode active materials, and anode precursors.",
    passportData: {
      "Processing sites": "3 certified facilities (EU, US, KR)",
      "Purity grade": "Battery-grade (>99.5%)",
      "Energy source": "62% renewable at processing plants",
      "Water usage": "4.2 m³ per MWh processed",
    },
    compliance: [
      "ISO 14001 environmental certification",
      "REACH registration complete",
      "Hazardous substance controls verified",
    ],
    dppActors: [
      {
        role: "material-processor",
        name: "Material processors & refiners",
        articleRefs: "Annex XIII, Art. 8",
        responsibilities: [
          "Provide verified chemical composition, processing site, and material grade data required for passport material-composition fields.",
          "Document recycled content percentages for cobalt, lithium, nickel, and lead where recovered materials enter the processing chain (Art. 8).",
          "Supply environmental and processing data that supports carbon footprint and sustainability declarations in the passport.",
        ],
      },
      {
        role: "manufacturer",
        name: "Manufacturers (economic operators)",
        articleRefs: "Art. 7, Art. 52, Annex XIII",
        responsibilities: [
          "Collect and aggregate carbon footprint data at material and component level for the passport carbon-footprint declaration (Art. 7, Art. 52).",
          "Gather recycled-content and renewable-content evidence from suppliers to complete Annex XIII passport fields before cell production.",
          "Ensure all refining and processing data is accurate and traceable for later passport creation under Article 77.",
        ],
      },
    ],
  },
  {
    id: "cell-manufacturing",
    label: "Cell Manufacturing & Pack Assembly",
    chartLabel: ["Cell Manufacturing &", "Pack Assembly"],
    shortLabel: "Manufacturing",
    color: "#a855f7",
    icon: "assets/icons/manufacturing-icon.svg",
    description:
      "Production of battery cells and integration into modules and packs with thermal management, BMS, and safety systems.",
    passportData: {
      "Cell format": "NMC 811 / Graphite, pouch",
      "Pack configuration": "96s2p (192 cells)",
      "Pack energy": "82 kWh usable",
      "Manufacturing plant": "Gigafactory Nord, Sweden",
      "Serial number": "BP-DE-2026-00847",
    },
    compliance: [
      "IATF 16949 quality management",
      "UN 38.3 transport testing passed",
      "Functional safety ISO 26262 ASIL-D",
    ],
    dppActors: [
      {
        role: "manufacturer",
        name: "Manufacturers (economic operator placing on market)",
        articleRefs: "Art. 77, Art. 13, Annex XIII",
        responsibilities: [
          "Create an electronic battery passport before placing LMT, EV, or industrial batteries (>2 kWh) on the market from 18 February 2027 (Art. 77(1)).",
          "Ensure the passport contains model-level and individual-battery data as set out in Annex XIII, including composition, carbon footprint, and compliance information.",
          "Affix a QR code linking to the passport via a unique identifier and upload that identifier to the EU registry (Art. 77(3), Art. 77(10), Art. 13(6)).",
          "Ensure passport information is accurate, complete, and kept up to date (Art. 77(4)).",
        ],
      },
      {
        role: "notified-body",
        name: "Notified bodies",
        articleRefs: "Art. 48, Art. 51, Annex VIII",
        responsibilities: [
          "Verify battery due diligence policies and conformity assessment procedures that underpin passport data.",
          "Issue verification reports and approval decisions that form part of the compliance documentation linked to the passport.",
        ],
      },
    ],
  },
  {
    id: "market-distribution",
    label: "Market Distribution, Sales, and Usage",
    chartLabel: ["Market Distribution,", "Sales, and Usage"],
    shortLabel: "Usage",
    color: "#ec4899",
    icon: "assets/icons/distribution-icon.svg",
    description:
      "Distribution to market, sale to end users, and operational use in electric vehicles or energy storage systems.",
    passportData: {
      "Application": "Electric passenger vehicle",
      "State of health": "94%",
      "Cycle count": "847 equivalent full cycles",
      "Warranty status": "Active — 8 years / 160,000 km",
      "Last service": "January 2026",
    },
    compliance: [
      "SOH above minimum warranty threshold",
      "Remote diagnostics enabled",
      "Performance data logged to passport",
    ],
    dppActors: [
      {
        role: "manufacturer",
        name: "Manufacturers",
        articleRefs: "Art. 77(2) & (4), Art. 14, Annex XIII",
        responsibilities: [
          "Keep the battery passport updated with individual-battery data resulting from use, including state of health and performance (Art. 77(2)).",
          "Maintain performance and durability information throughout the battery's service life as required by Article 14 and Annex XIII.",
          "Ensure passport data remains accurate, complete, and up to date while the battery is on the market (Art. 77(4)).",
        ],
      },
      {
        role: "importer-distributor",
        name: "Importers & distributors",
        articleRefs: "Art. 58, Art. 59, Art. 77",
        responsibilities: [
          "Verify that a battery passport exists and the QR code is correctly affixed before making the battery available on the market.",
          "Ensure consumers and end-users can access public passport information free of charge via the QR code (Art. 78(b)).",
          "Refrain from placing non-compliant batteries on the market where passport or labelling requirements are not met.",
        ],
      },
      {
        role: "dealer-end-user",
        name: "Dealers & end-users",
        articleRefs: "Art. 77(2)(a), Art. 78(b)",
        responsibilities: [
          "Make passport information accessible to purchasers at the point of sale where required by labelling rules.",
          "End-users access public passport data (composition, carbon footprint, recycled content, compliance certificates) via the QR code.",
        ],
      },
    ],
  },
  {
    id: "second-life",
    label: "Second-Life, Remanufacturing, or Repurposing",
    chartLabel: ["Second-Life,", "Remanufacturing,", "or Repurposing"],
    shortLabel: "2nd Life",
    color: "#f97316",
    icon: "assets/icons/second-life-icon.svg",
    description:
      "Repurposing, remanufacturing, or redeploying batteries with reduced capacity for stationary storage or lower-power applications.",
    passportData: {
      "Repurposing criteria": "SOH 70–80% at end of 1st life",
      "New application": "Grid buffer storage (planned)",
      "Expected 2nd-life duration": "5–8 years",
      "Refurbishment partner": "Circular Energy Solutions",
    },
    compliance: [
      "Safety re-certification required before redeployment",
      "Updated passport status: pending transition",
      "Extended producer responsibility registered",
    ],
    dppActors: [
      {
        role: "repurposing-operator",
        name: "Repurposing & remanufacturing operators",
        articleRefs: "Art. 77(7), Art. 13(8), Annex XIII",
        responsibilities: [
          "When placing a repurposed or remanufactured battery on the market, assume responsibility for passport accuracy (Art. 77(7)).",
          "Create a new battery passport linked to the original passport and record the change of status accessible through the QR code (Art. 13(8)).",
          "Provide state-of-health evaluation documentation when a waste battery ceases to be waste after preparation for re-use or repurposing (Art. 73).",
        ],
      },
      {
        role: "repairer-second-life",
        name: "Repairers & second-life operators",
        articleRefs: "Art. 77(2)(c), Art. 78(b)",
        responsibilities: [
          "Access restricted passport data on dismantling, safety measures, and detailed composition essential for preparation for re-use or repurposing (Art. 77(2)(c)(a)).",
          "Use passport information to evaluate residual value, capability for further use, and suitability for second-life applications.",
        ],
      },
      {
        role: "manufacturer",
        name: "Manufacturers (original producer)",
        articleRefs: "Art. 77(4), Art. 77(7)",
        responsibilities: [
          "Support transition by ensuring original passport data — including performance history and composition — is available for linked second-life passports.",
          "Transfer passport responsibility to the operator placing the changed battery back on the market.",
        ],
      },
    ],
  },
  {
    id: "end-of-life",
    label: "End-of-Life (EoL), Collection, and Recycling",
    chartLabel: ["End-of-Life (EoL),", "Collection, and", "Recycling"],
    shortLabel: "EoL",
    color: "#10b981",
    icon: "assets/icons/recycling-icon.svg",
    description:
      "Collection at end of life, dismantling, material recovery, and reintegration of recovered materials into new production.",
    passportData: {
      "Collection method": "Authorized treatment facility network",
      "Target recovery rate": "95% Co, 95% Li, 98% Ni",
      "Recycling process": "Hydrometallurgical + pyro",
      "Closed-loop rate": "32% of recovered Li re-used",
    },
    compliance: [
      "EU recycling efficiency targets met",
      "Waste shipment regulations followed",
      "Mass balance documentation available",
    ],
    dppActors: [
      {
        role: "producer-pro",
        name: "Producers & producer responsibility organisations",
        articleRefs: "Art. 57, Art. 77(7), Art. 74",
        responsibilities: [
          "When a battery becomes waste, assume passport update responsibility under Article 77(7) — either directly or via an appointed producer responsibility organisation.",
          "Ensure waste-prevention and waste-management information required under Article 74 and Annex XIII is reflected in the passport.",
          "Establish collection systems and ensure waste batteries reach permitted treatment facilities (Art. 59, Art. 70).",
        ],
      },
      {
        role: "waste-collector",
        name: "Waste collectors & treatment facilities",
        articleRefs: "Art. 70, Art. 71, Art. 77(2)(c)",
        responsibilities: [
          "Accept and route waste batteries to permitted recycling or preparation-for-re-use facilities.",
          "Ensure passport remains accessible so recyclers can obtain dismantling instructions and safety information.",
        ],
      },
      {
        role: "recycler",
        name: "Recyclers",
        articleRefs: "Art. 71, Art. 77(2)(c), Art. 77(8)",
        responsibilities: [
          "Access restricted passport data on detailed composition, dismantling procedures, and safety measures essential for recycling (Art. 77(2)(c)(a)).",
          "Meet recycling efficiency and material recovery targets set out in Annex XII (Art. 71).",
          "The battery passport ceases to exist after the battery has been recycled (Art. 77(8)).",
        ],
      },
    ],
  },
];

const BATTERY_ZOOM_LEVELS = [
  {
    id: "full",
    shortLabel: "Full view",
    title: "Zoom Out — Full Battery View",
    layerName: "Physical exterior",
    description:
      "The complete battery pack as placed on the market — outer casing with mandatory safety markings, CE conformity marking, and the scannable DPP QR code affixed to the exterior in compliance with Articles 31 and 32 of the ESPR and the Battery Regulation.",
    focusActors: [],
    dppObligations: [
      "Physical QR code linked to the EU Digital Product Passport registry",
      "CE marking and safety labels visible on the outer casing",
      "Model identification and capacity rating on the product label",
    ],
    articleRefs: "Articles 31 & 32 ESPR · Battery Regulation",
    accent: "#3b82f6",
  },
  {
    id: "level-1",
    shortLabel: "Level 1",
    title: "Zoom Level 1 — Chassis & Casing / Outer Layer",
    layerName: "Chassis & casing",
    description:
      "The structural outer shell and product label layer — the first point of contact for market-facing actors verifying that a battery is registered and correctly labelled before or after sale.",
    focusActors: [
      "Distributors",
      "Dealers",
      "Market Surveillance Authorities (MSAs)",
    ],
    dppObligations: [
      "Consumer information access at point of sale",
      "Price and label transparency requirements",
      "Verification of DPP registration in the Central EU Registry",
    ],
    articleRefs: "Articles 13–15 ESPR",
    accent: "#06b6d4",
  },
  {
    id: "level-2",
    shortLabel: "Level 2",
    title: "Zoom Level 2 — Battery Management System (BMS) / Smart Layer",
    layerName: "BMS / smart layer",
    description:
      "The intelligent monitoring layer inside the pack — the BMS tracks state of health, remaining capacity, and charging history, and is the primary data interface for maintenance, repair, and second-life decisions.",
    focusActors: [
      "Independent Repairers",
      "Remanufacturers",
      "Waste Handlers",
    ],
    dppObligations: [
      "Access rights to real-time BMS data (State of Health, Remaining Capacity, Charging History)",
      "Data for second-life suitability assessments and maintenance workflows",
      "Safe handling information derived from live battery diagnostics",
    ],
    articleRefs: "Battery Regulation · Annex XIII (performance & durability data)",
    accent: "#10b981",
  },
  {
    id: "level-3",
    shortLabel: "Level 3",
    title: "Zoom Level 3 — Cells & Material Composition / Core Layer",
    layerName: "Cells & materials",
    description:
      "The innermost electrochemical core — individual cells and their material composition, including critical raw materials and recycled content, underpinning supply-chain traceability and circular-economy reporting.",
    focusActors: [
      "Mining Companies",
      "Raw Material Suppliers",
      "Recyclers",
    ],
    dppObligations: [
      "Supply chain traceability data under Article 38 ESPR",
      "Recycled content levels for cobalt, lithium, and nickel",
      "Due diligence reports on responsible sourcing of raw materials",
    ],
    articleRefs: "Article 38 ESPR · Articles 49–50 Battery Regulation",
    accent: "#8b5cf6",
  },
];
