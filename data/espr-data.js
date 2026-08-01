const ESPR_DOCUMENTS = [
  {
    "chapter": "Chapter I",
    "article": "Article 1",
    "title": "Subject matter and scope",
    "summary": "Establishes the core objective of ESPR (improving product environmental sustainability and circularity) and defines its scope across physical goods placed on the EU market."
  },
  {
    "chapter": "Chapter I",
    "article": "Article 2",
    "title": "Definitions",
    "summary": "Provides official legal definitions for key terms used throughout the regulation (e.g., ecodesign, digital product passport, economic operator, durability)."
  },
  {
    "chapter": "Chapter I",
    "article": "Article 3",
    "title": "Free movement",
    "summary": "Prohibits EU Member States from restricting or banning products that comply with ESPR ecodesign requirements from entering their national markets."
  },
  {
    "chapter": "Chapter II",
    "article": "Article 4",
    "title": "Empowerments to adopt delegated acts",
    "summary": "Grants the European Commission legal power to adopt delegated acts specifying ecodesign requirements for specific product groups."
  },
  {
    "chapter": "Chapter II",
    "article": "Article 5",
    "title": "Ecodesign requirements",
    "summary": "Mandates that products satisfy performance requirements, information requirements, or both, based on the parameters set out in Annex I."
  },
  {
    "chapter": "Chapter II",
    "article": "Article 6",
    "title": "Performance requirements",
    "summary": "Details how quantitative or qualitative performance thresholds (e.g., durability, energy efficiency, recycled content) are established for products."
  },
  {
    "chapter": "Chapter II",
    "article": "Article 7",
    "title": "Information requirements",
    "summary": "Details requirements to provide technical and sustainability information, including the Digital Product Passport (DPP), physical labels, and user manuals."
  },
  {
    "chapter": "Chapter II",
    "article": "Article 8",
    "title": "Content of the delegated acts",
    "summary": "Specifies mandatory elements and information points that must be included within product-specific delegated acts."
  },
  {
    "chapter": "Chapter III",
    "article": "Article 9",
    "title": "Digital Product Passport",
    "summary": "Establishes the mandatory creation of a Digital Product Passport (DPP) for products regulated under ESPR delegated acts before market placement."
  },
  {
    "chapter": "Chapter III",
    "article": "Article 10",
    "title": "Requirements for the digital product passport",
    "summary": "Outlines technical specifications for the DPP, ensuring data is accurate, machine-readable, interoperable, and accessible via a data carrier (e.g., QR code)."
  },
  {
    "chapter": "Chapter III",
    "article": "Article 11",
    "title": "Technical design and operation of the digital product passport",
    "summary": "Sets operational rules, including open standards, data security, protection against data loss, and system integration."
  },
  {
    "chapter": "Chapter III",
    "article": "Article 12",
    "title": "Unique identifiers",
    "summary": "Mandates unique identification codes for products, facilities, and economic operators to enable digital traceability."
  },
  {
    "chapter": "Chapter III",
    "article": "Article 13",
    "title": "Digital product passport registry",
    "summary": "Establishes a centralized EU registry to store unique identifiers and compliance data for all registered DPPs."
  },
  {
    "chapter": "Chapter III",
    "article": "Article 14",
    "title": "Web portal for data in the digital product passport",
    "summary": "Directs the Commission to set up a digital portal enabling consumers and stakeholders to search and compare DPP data."
  },
  {
    "chapter": "Chapter III",
    "article": "Article 15",
    "title": "Customs controls relating to the digital product passport",
    "summary": "Integrates the DPP system with EU Customs databases (EU Single Window Environment for Customs) to automate border compliance verification."
  },
  {
    "chapter": "Chapter IV",
    "article": "Article 16",
    "title": "Labels",
    "summary": "Mandates the display of clear physical or digital labels indicating product sustainability performance or energy efficiency when required by delegated acts."
  },
  {
    "chapter": "Chapter IV",
    "article": "Article 17",
    "title": "Mimicking labels",
    "summary": "Explicitly prohibits placing labels, marks, or symbols on products that mimic official EU ecodesign labels and mislead consumers."
  },
  {
    "chapter": "Chapter V",
    "article": "Article 18",
    "title": "Prioritisation and planning",
    "summary": "Directs the European Commission to publish multi-year working plans setting priority product groups (e.g., textiles, iron, steel, aluminum, furniture)."
  },
  {
    "chapter": "Chapter V",
    "article": "Article 19",
    "title": "Ecodesign Forum",
    "summary": "Establishes an expert advisory body representing Member States, industry, SMEs, environmental NGOs, and consumers to participate in drafting ecodesign rules."
  },
  {
    "chapter": "Chapter V",
    "article": "Article 20",
    "title": "Member States Expert Group",
    "summary": "Establishes a group of Member State representatives to advise and ensure consistent implementation of ecodesign measures across the EU."
  },
  {
    "chapter": "Chapter V",
    "article": "Article 21",
    "title": "Self-regulation measures",
    "summary": "Sets conditions under which voluntary industry agreements (self-regulation) can be recognized as valid alternatives to delegated acts."
  },
  {
    "chapter": "Chapter V",
    "article": "Article 22",
    "title": "Small and medium-sized enterprises",
    "summary": "Mandates Member States and the Commission to provide technical, financial, and organizational support to Small and Medium-Sized Enterprises (SMEs)."
  },
  {
    "chapter": "Chapter VI",
    "article": "Article 23",
    "title": "General principle of prevention of destruction",
    "summary": "Requires economic operators to implement operational measures to prevent the destruction of unsold consumer products."
  },
  {
    "chapter": "Chapter VI",
    "article": "Article 24",
    "title": "Disclosure of information on unsold consumer products",
    "summary": "Forces large enterprises to publicly report the quantity, weight, and reasons for discarding/destroying unsold consumer goods annually."
  },
  {
    "chapter": "Chapter VI",
    "article": "Article 25",
    "title": "Destruction of unsold consumer products",
    "summary": "Explicitly prohibits large companies from destroying unsold consumer products, starting with apparel, clothing accessories, and footwear."
  },
  {
    "chapter": "Chapter VI",
    "article": "Article 26",
    "title": "Consolidated information on the destruction of unsold consumer products",
    "summary": "Requires the Commission to compile and publish aggregated EU-level data on the destruction of unsold consumer products."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 27",
    "title": "Obligations of manufacturers",
    "summary": "Sets legal duties for manufacturers (carrying out conformity assessments, attaching CE marks, creating DPPs, and retaining technical documentation for 10 years)."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 28",
    "title": "Authorized representatives",
    "summary": "Outlines duties and mandates for representatives appointed by non-EU manufacturers to handle compliance matters within the Union."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 29",
    "title": "Obligations of importers",
    "summary": "Requires importers to verify that foreign manufacturers have completed conformity assessments, created a valid DPP, and affixed required markings before market entry."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 30",
    "title": "Obligations of distributors",
    "summary": "Requires distributors to inspect products for CE marks, labels, and QR codes before making them available to consumers."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 31",
    "title": "Obligations of dealers",
    "summary": "Requires physical retailers and online merchants to ensure sustainability labels and DPP links are clearly visible and accessible to buyers."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 32",
    "title": "Obligations related to labels",
    "summary": "Prohibits economic operators and dealers from displaying misleading labels or marks that interfere with official ecodesign labels."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 33",
    "title": "Obligations of fulfilment service providers",
    "summary": "Sets compliance verification duties for logistics and fulfillment companies handling product storage, packaging, and shipping."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 34",
    "title": "Cases in which obligations of manufacturers apply to importers and distributors",
    "summary": "Establishes that importers or distributors who modify products or market them under their own brand assume full manufacturer responsibilities."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 35",
    "title": "Obligations of providers of online marketplaces and online search engines",
    "summary": "Mandates online platforms and search engines to cooperate with market surveillance authorities and ensure sellers display required DPP links and labels on product listings."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 36",
    "title": "Information obligations of economic operators",
    "summary": "Requires operators to maintain supply chain traceability records detailing where products were sourced and to whom they were sold."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 37",
    "title": "Monitoring and reporting obligations of economic operators",
    "summary": "Forces economic operators to monitor compliance and submit documentation/data to national authorities upon request."
  },
  {
    "chapter": "Chapter VII",
    "article": "Article 38",
    "title": "Requirements on supply chain actors",
    "summary": "Mandates suppliers and intermediate actors to provide manufacturers with necessary material data and compliance information."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 39",
    "title": "Test, measurement and calculation methods",
    "summary": "Mandates that testing and calculation methods used for ecodesign compliance be reliable, reproducible, and standardized across the EU."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 40",
    "title": "Prevention of circumvention and worsening of performance",
    "summary": "Prohibits manufacturers from using defeat devices, software alterations, or deliberate test-tailoring that alters performance during official testing."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 41",
    "title": "Presumption of conformity",
    "summary": "Products tested using recognized EU harmonized standards are legally presumed to comply with ESPR requirements."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 42",
    "title": "Common specifications",
    "summary": "Empowers the Commission to publish common technical specifications when European standards bodies fail to issue harmonized standards on time."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 43",
    "title": "Conformity assessment",
    "summary": "Requires manufacturers to carry out appropriate conformity assessment procedures (as detailed in Annex IV) before releasing products."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 44",
    "title": "EU declaration of conformity",
    "summary": "Establishes the structure, legal contents, and mandatory entries required in the official EU Declaration of Conformity."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 45",
    "title": "General principles of the CE marking",
    "summary": "Defines rules governing the CE mark as proof of full compliance with ESPR and applicable EU legislation."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 46",
    "title": "Rules and conditions for affixing the CE marking",
    "summary": "Specifies physical placement, visibility, and legibility requirements for affixing the CE mark to products, packaging, or documents."
  },
  {
    "chapter": "Chapter VIII",
    "article": "Article 47",
    "title": "Specific rules on markings",
    "summary": "Regulates additional national or voluntary markings to prevent confusion or overlap with the official CE mark."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 48",
    "title": "Notification",
    "summary": "Regulates the official process by which Member States notify the Commission of third-party bodies authorized to conduct conformity assessments."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 49",
    "title": "Notifying authorities",
    "summary": "Sets rules for national authorities responsible for designated assessment and monitoring of conformity assessment bodies."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 50",
    "title": "Requirements relating to notifying authorities",
    "summary": "Mandates independence, objectivity, competence, and impartiality for national notifying authorities."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 51",
    "title": "Information obligation on notifying authorities",
    "summary": "Requires national authorities to inform the Commission of their procedures for assessing and monitoring auditing bodies."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 52",
    "title": "Requirements relating to notified bodies",
    "summary": "Establishes organizational, technical, ethical, and independence standards for third-party auditing bodies (Notified Bodies)."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 53",
    "title": "Presumption of conformity of notified bodies",
    "summary": "Testing bodies complying with relevant harmonized standards are legally presumed to meet the requirements of Article 52."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 54",
    "title": "Subsidiaries of and subcontracting by notified bodies",
    "summary": "Regulates conditions under which a Notified Body may subcontract specific testing tasks to external laboratories."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 55",
    "title": "Application for notification",
    "summary": "Outlines how testing bodies apply to national authorities to become official Notified Bodies."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 56",
    "title": "Notification procedure",
    "summary": "Details the approval workflow between Member States and the European Commission for accrediting Notified Bodies."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 57",
    "title": "Identification numbers and lists of notified bodies",
    "summary": "Mandates the Commission to assign unique identification numbers to approved Notified Bodies and maintain a public directory."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 58",
    "title": "Changes to notifications",
    "summary": "Sets procedures for handling cases where a Notified Body loses accreditation, restricts operations, or ceases activity."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 59",
    "title": "Challenge of the competence of notified bodies",
    "summary": "Outlines procedures for the European Commission to investigate cases where a Notified Body's technical competence is questioned."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 60",
    "title": "Operational obligations of notified bodies",
    "summary": "Requires Notified Bodies to perform conformity assessments proportionately, avoiding unnecessary administrative burdens on businesses."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 61",
    "title": "Information obligation on notified bodies",
    "summary": "Forces Notified Bodies to inform national authorities of certificate refusals, suspensions, or withdrawals."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 62",
    "title": "Exchange of experience",
    "summary": "Mandates the Commission to organize knowledge-sharing sessions between national notifying authorities."
  },
  {
    "chapter": "Chapter IX",
    "article": "Article 63",
    "title": "Coordination of notified bodies",
    "summary": "Establishes a sectoral coordination group of Notified Bodies to ensure technical alignment across the EU."
  },
  {
    "chapter": "Chapter X",
    "article": "Article 64",
    "title": "Member State incentives",
    "summary": "Regulates how Member States can grant national financial incentives (subsidies) to encourage the adoption of high-performing ecodesigned products."
  },
  {
    "chapter": "Chapter X",
    "article": "Article 65",
    "title": "Green public procurement",
    "summary": "Requires public authorities to align state procurement contracts with minimum mandatory ecodesign performance standards."
  },
  {
    "chapter": "Chapter XI",
    "article": "Article 66",
    "title": "Planned market surveillance activities",
    "summary": "Requires Member States to establish and execute national risk-based market surveillance plans and product inspections."
  },
  {
    "chapter": "Chapter XI",
    "article": "Article 67",
    "title": "Reporting and benchmarking",
    "summary": "Requires national surveillance authorities to report inspection findings and mandates EU-wide benchmarking of enforcement efforts."
  },
  {
    "chapter": "Chapter XI",
    "article": "Article 68",
    "title": "Market surveillance coordination and support",
    "summary": "Establishes an Administrative Cooperation Group (ADCO) and support mechanisms to coordinate enforcement actions across Member States."
  },
  {
    "chapter": "Chapter XII",
    "article": "Article 69",
    "title": "Procedure for dealing with products presenting a risk at national level",
    "summary": "Outlines national enforcement actions when a Market Surveillance Authority discovers a product that fails ecodesign standards or poses a risk."
  },
  {
    "chapter": "Chapter XII",
    "article": "Article 70",
    "title": "Union safeguard procedure",
    "summary": "Defines the EU-wide resolution process triggered when a Member State takes action against a product and another Member State or the Commission objects."
  },
  {
    "chapter": "Chapter XII",
    "article": "Article 71",
    "title": "Formal non-compliance",
    "summary": "Outlines administrative enforcement for minor formal defects (e.g., missing CE marks, incorrect QR code formatting, missing declaration of conformity)."
  },
  {
    "chapter": "Chapter XIII",
    "article": "Article 72",
    "title": "Exercise of the delegation",
    "summary": "Sets terms, conditions, and time limits governing the delegated powers granted to the European Commission under ESPR."
  },
  {
    "chapter": "Chapter XIII",
    "article": "Article 73",
    "title": "Committee procedure",
    "summary": "Establishes the advisory committee assisting the Commission in implementing technical rules and delegated acts."
  },
  {
    "chapter": "Chapter XIV",
    "article": "Article 74",
    "title": "Penalties",
    "summary": "Mandates Member States to establish effective, proportionate, and dissuasive national penalties (including financial fines) for ESPR violations."
  },
  {
    "chapter": "Chapter XIV",
    "article": "Article 75",
    "title": "Monitoring and evaluation",
    "summary": "Directs the Commission to evaluate the real-world impact of ESPR periodically and submit formal reports to the European Parliament."
  },
  {
    "chapter": "Chapter XIV",
    "article": "Article 76",
    "title": "Consumer redress",
    "summary": "Guarantees consumers the legal right to seek remedies (e.g., product repair, replacement, or financial compensation) if a product violates ecodesign standards."
  },
  {
    "chapter": "Chapter XIV",
    "article": "Article 77",
    "title": "Amendment of Directive (EU) 2020/1828",
    "summary": "Amends EU collective redress directives to allow representative actions (class actions) for ESPR violations."
  },
  {
    "chapter": "Chapter XIV",
    "article": "Article 78",
    "title": "Amendment of Directive (EU) 2023/1542",
    "summary": "Aligns cross-references and structural provisions between the EU Battery Regulation and the broader ESPR framework."
  },
  {
    "chapter": "Chapter XIV",
    "article": "Article 79",
    "title": "Repeal and transitional provisions",
    "summary": "Repeals the former Ecodesign Directive (2009/125/EC) while preserving existing product measures until replaced by new ESPR delegated acts."
  },
  {
    "chapter": "Chapter XIV",
    "article": "Article 80",
    "title": "Entry into force",
    "summary": "Sets the official entry into force date and applicability rules across all EU Member States."
  },
  {
    "chapter": "Annex",
    "article": "Annex I",
    "title": "Product parameters",
    "summary": "Complete catalog of physical and environmental parameters (e.g., durability, reusability, carbon footprint, chemical composition) used to formulate ecodesign rules."
  },
  {
    "chapter": "Annex",
    "article": "Annex II",
    "title": "Procedure for defining performance requirements",
    "summary": "Outlines the methodology and Life-Cycle Assessment (LCA) guidelines followed when establishing product performance requirements."
  },
  {
    "chapter": "Annex",
    "article": "Annex III",
    "title": "Digital product Passport (referred to in Articles 9 to 12)",
    "summary": "Technical specifications regarding data formatting, interoperability, access permissions, and security standards for the DPP."
  },
  {
    "chapter": "Annex",
    "article": "Annex IV",
    "title": "Internal production control (Module A)",
    "summary": "Details specific technical evaluation modules (such as Internal Production Control / Module A) used by manufacturers to prove product compliance."
  },
  {
    "chapter": "Annex",
    "article": "Annex V",
    "title": "EU Declaration of Conformity (referred to in Article 44)",
    "summary": "Mandatory layout, fields, and legal statements required in the official EU Declaration of Conformity document."
  },
  {
    "chapter": "Annex",
    "article": "Annex VI",
    "title": "Criteria for self-regulation measures (referred to in Article 21)",
    "summary": "Sets out the assessment criteria, transparency requirements, and audit standards for voluntary industry self-regulation measures."
  },
  {
    "chapter": "Annex",
    "article": "Annex VII",
    "title": "Consumer products of which the destruction by economic operators is prohibited",
    "summary": "Lists specific consumer product categories (e.g., apparel, clothing accessories, footwear) legally banned from destruction."
  },
  {
    "chapter": "Annex",
    "article": "Annex VIII",
    "title": "Correlation Table",
    "summary": "Comparative legal table mapping provisions from the former Ecodesign Directive (Directive 2009/125/EC) to the current ESPR (Regulation (EU) 2024/1781)."
  }
];

const ESPR_ACTORS = [
  {
    "actor": "Manufacturers",
    "reference": "Articles 9, 27, 43, 44, 46",
    "scope": "Economic Operator",
    "responsibilities": "Carry out conformity assessments (or ensure Module A is completed); draw up EU declaration of conformity; affix CE marking; create Digital Product Passport (DPP) & upload required data to DPP registry; retain technical documentation & DPP for 10 years; ensure compliance with performance & information requirements; take immediate corrective action or recall non-compliant products; prevent circumvention/defeat devices."
  },
  {
    "actor": "Authorized Representatives",
    "reference": "Article 28",
    "scope": "Economic Operator",
    "responsibilities": "Act under a written mandate from non-EU manufacturers; keep EU declaration of conformity and technical documentation available for national surveillance authorities for 10 years; cooperate with authorities to eliminate compliance risks; provide proof of compliance upon reasoned request."
  },
  {
    "actor": "Importers",
    "reference": "Articles 29, 34",
    "scope": "Economic Operator",
    "responsibilities": "Verify that non-EU manufacturers carried out conformity assessments, drew up technical docs, affixed CE marking, and created DPP; ensure product compliance before placing on EU market; refrain from placing non-compliant/risky products on market; store EU declaration of conformity copy for 10 years; assume full manufacturer obligations if modifying products or placing under own brand name."
  },
  {
    "actor": "Distributors",
    "reference": "Articles 30, 34",
    "scope": "Economic Operator",
    "responsibilities": "Verify products bear required CE marking, physical/digital labels, and accessible DPP/data carriers before making available on market; ensure storage & transport conditions do not jeopardize compliance; refrain from making non-compliant products available; assume full manufacturer obligations if modifying products or selling under own brand."
  },
  {
    "actor": "Dealers (Retailers & Merchants)",
    "reference": "Articles 31, 32",
    "scope": "Economic Operator",
    "responsibilities": "Ensure sustainability/energy labels and DPP data links are clearly visible and accessible to consumers in physical stores and online channels; refrain from displaying misleading or mimicking labels that confuse consumers."
  },
  {
    "actor": "Fulfilment Service Providers",
    "reference": "Article 33",
    "scope": "Logistics / Supply Chain",
    "responsibilities": "Ensure products handled (warehousing, packaging, parcel delivery) satisfy CE marking, labeling, and DPP requirements before shipping when no manufacturer or importer is established in the EU; cooperate with market surveillance authorities."
  },
  {
    "actor": "Providers of Online Marketplaces & Search Engines",
    "reference": "Article 35",
    "scope": "Digital Intermediaries",
    "responsibilities": "Design platforms/interfaces allowing third-party sellers to display mandatory DPP links, labels, and compliance info; cooperate with market surveillance authorities to identify and remove listings of non-compliant products; act upon explicit take-down orders."
  },
  {
    "actor": "Supply Chain Actors (Suppliers & Material Vendors)",
    "reference": "Article 38",
    "scope": "Upstream Value Chain",
    "responsibilities": "Provide manufacturers with necessary, verified information, chemical data, material compositions, and life-cycle inputs required to complete DPPs, technical documentation, and compliance testing."
  },
  {
    "actor": "Economic Operators (General / Unsold Products)",
    "reference": "Articles 23, 24, 25, 36, 37",
    "scope": "Economic Operator (General)",
    "responsibilities": "Take operational measures to prevent destruction of unsold consumer products; disclose annual volume/reasons for unsold discarded goods (for large/medium enterprises); comply with direct bans on destroying specific unsold goods (e.g. apparel/footwear); maintain supply chain traceability records for 10 years."
  },
  {
    "actor": "European Commission",
    "reference": "Articles 4, 13, 14, 18, 26, 42, 70, 72, 75",
    "scope": "EU Executive Body",
    "responsibilities": "Adopt product-specific delegated acts; establish multi-year Ecodesign Working Plans; manage and host the centralized EU Digital Product Passport (DPP) Registry and public web portal; establish common technical specifications when standard bodies lag; evaluate ESPR impacts; compile consolidated EU data on unsold product destruction."
  },
  {
    "actor": "Member States / Competent Authorities",
    "reference": "Articles 3, 22, 64, 66, 74",
    "scope": "National Government / Governance",
    "responsibilities": "Ensure free movement of compliant products; refrain from restricting compliant goods; provide support/assistance to SMEs; establish risk-based national market surveillance plans; enforce effective, proportionate, and dissuasive penalties for violations; align national financial incentives with high performance levels."
  },
  {
    "actor": "Market Surveillance Authorities (MSAs)",
    "reference": "Articles 66, 67, 68, 69, 71",
    "scope": "National Enforcement",
    "responsibilities": "Conduct physical checks, laboratory tests, and digital audits on products; inspect DPPs and technical documentation; order corrective measures, product withdrawals, or market recalls for non-compliant goods; address formal non-compliance; report inspection findings to the EU benchmarking database."
  },
  {
    "actor": "Notifying Authorities",
    "reference": "Articles 48, 49, 50, 51",
    "scope": "National Regulatory Oversight",
    "responsibilities": "Assess, accredit, notify, and monitor third-party conformity assessment bodies (Notified Bodies); maintain independence, objectivity, and confidentiality; inform the Commission of designated accreditation procedures."
  },
  {
    "actor": "Notified Bodies",
    "reference": "Articles 52, 54, 60, 61, 63",
    "scope": "Third-Party Auditing / Certification",
    "responsibilities": "Perform conformity assessment activities as mandated in delegated acts; maintain technical competence, impartiality, and independence; issue conformity certificates; notify authorities of certificate refusals, suspensions, or withdrawals; participate in sectoral coordination groups."
  },
  {
    "actor": "Public Buyers / Contracting Authorities",
    "reference": "Article 65",
    "scope": "Public Procurement",
    "responsibilities": "Comply with mandatory Green Public Procurement (GPP) requirements; ensure state procurement contracts and public tenders require compliance with top ecodesign performance classes and standards."
  },
  {
    "actor": "Ecodesign Forum & Expert Groups",
    "reference": "Articles 19, 20",
    "scope": "Advisory / Consultative Bodies",
    "responsibilities": "Advise the European Commission on setting ecodesign working plans, drafting delegated acts, self-regulation measures, and market surveillance priorities (comprising Member State representatives, industry, SMEs, environmental NGOs, and consumer groups)."
  },
  {
    "actor": "Administrative Cooperation Group (ADCO)",
    "reference": "Article 68",
    "scope": "EU Coordination Body",
    "responsibilities": "Facilitate cross-border cooperation, joint market surveillance projects, and information sharing among Member States' market surveillance authorities."
  },
  {
    "actor": "Consumers / End-Users",
    "reference": "Articles 7, 14, 76, 77",
    "scope": "Rights Holders / End Buyers",
    "responsibilities": "Access clear sustainability performance information via physical labels and DPP web portal; hold legal rights to redress (repairs, replacements, financial compensation) and representative class actions for products violating ecodesign standards."
  }
];
