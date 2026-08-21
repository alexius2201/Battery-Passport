const BATTERY_REGULATION_DOCUMENTS = [
  {
    "chapter": "Chapter I: General Provisions",
    "article": "Article 1",
    "title": "Subject matter and scope",
    "summary": "Lays down sustainability, safety, labelling, and waste management requirements for placing batteries on the EU market across all 5 battery categories."
  },
  {
    "chapter": "Chapter I: General Provisions",
    "article": "Article 2",
    "title": "Objectives",
    "summary": "Sets out dual goals: ensuring internal market functioning and protecting the environment and human health by reducing battery impacts."
  },
  {
    "chapter": "Chapter I: General Provisions",
    "article": "Article 3",
    "title": "Definitions",
    "summary": "Provides legal definitions for 72 key terms, including battery categories, economic operators, State of Health (SoH), and the Digital Battery Passport."
  },
  {
    "chapter": "Chapter I: General Provisions",
    "article": "Article 4",
    "title": "Free movement",
    "summary": "Guarantees the free movement of compliant batteries within the EU single market without national trade barriers."
  },
  {
    "chapter": "Chapter I: General Provisions",
    "article": "Article 5",
    "title": "Sustainability, safety, labelling and information requirements for batteries",
    "summary": "Prohibits placing batteries on the market unless they fully comply with Chapters II and III."
  },
  {
    "chapter": "Chapter II: Sustainability & Safety Requirements",
    "article": "Article 6",
    "title": "Restrictions on substances",
    "summary": "Prohibits or restricts hazardous chemicals (e.g., Lead, Mercury, Cadmium) as set out in Annex I and REACH."
  },
  {
    "chapter": "Chapter II: Sustainability & Safety Requirements",
    "article": "Article 7",
    "title": "Carbon footprint of electric vehicle batteries, rechargeable industrial batteries and LMT batteries",
    "summary": "Mandates carbon footprint declarations, performance classes, and maximum lifecycle carbon threshold caps."
  },
  {
    "chapter": "Chapter II: Sustainability & Safety Requirements",
    "article": "Article 8",
    "title": "Recycled content in industrial batteries, electric vehicle batteries, LMT batteries and SLI batteries",
    "summary": "Sets minimum percentage targets for recovered Cobalt, Lead, Lithium, and Nickel used in new battery manufacturing."
  },
  {
    "chapter": "Chapter II: Sustainability & Safety Requirements",
    "article": "Article 9",
    "title": "Performance and durability requirements for portable batteries of general use",
    "summary": "Mandates minimum electrochemical performance and durability benchmarks for non-rechargeable and rechargeable portable batteries."
  },
  {
    "chapter": "Chapter II: Sustainability & Safety Requirements",
    "article": "Article 10",
    "title": "Performance and durability requirements for rechargeable industrial batteries, LMT batteries and electric vehicle batteries",
    "summary": "Outlines mandatory electrochemical durability thresholds, including capacity retention and internal resistance degradation."
  },
  {
    "chapter": "Chapter II: Sustainability & Safety Requirements",
    "article": "Article 11",
    "title": "Removability and replaceability of portable batteries and LMT batteries",
    "summary": "Requires portable batteries to be removable and replaceable by end-users, and LMT batteries by independent repair professionals."
  },
  {
    "chapter": "Chapter II: Sustainability & Safety Requirements",
    "article": "Article 12",
    "title": "Safety of stationary battery energy storage systems",
    "summary": "Requires stationary battery energy storage systems (BESS) to be safe during normal operation and pass Annex V safety testing parameters."
  },
  {
    "chapter": "Chapter III: Labelling, Marking & Information Requirements",
    "article": "Article 13",
    "title": "Labelling and marking of batteries",
    "summary": "Specifies physical label rules: capacity, heavy metal symbols, separate collection marks, and carbon footprint labels."
  },
  {
    "chapter": "Chapter III: Labelling, Marking & Information Requirements",
    "article": "Article 14",
    "title": "Information on the state of health and expected lifetime of batteries",
    "summary": "Requires real-time access to internal Battery Management System (BMS) diagnostic health data for battery owners, repairers, and recyclers."
  },
  {
    "chapter": "Chapter IV: Conformity of Batteries",
    "article": "Article 15",
    "title": "Presumption of conformity of batteries",
    "summary": "Presumes compliance for batteries conforming to harmonised European standards or common specifications published in the Official Journal."
  },
  {
    "chapter": "Chapter IV: Conformity of Batteries",
    "article": "Article 16",
    "title": "Common specifications",
    "summary": "Empowers the Commission to establish common specifications where harmonised standards are lacking, inadequate, or delayed."
  },
  {
    "chapter": "Chapter IV: Conformity of Batteries",
    "article": "Article 17",
    "title": "Conformity assessment procedures",
    "summary": "Establishes mandatory compliance auditing procedures and module paths (e.g., Module A, D1, G) before market placement."
  },
  {
    "chapter": "Chapter IV: Conformity of Batteries",
    "article": "Article 18",
    "title": "EU declaration of conformity",
    "summary": "Details the formal written declaration signed by the manufacturer attesting that regulatory requirements have been fulfilled."
  },
  {
    "chapter": "Chapter IV: Conformity of Batteries",
    "article": "Article 19",
    "title": "General principles of the CE marking",
    "summary": "Sets out overarching principles governing the CE mark, confirming conformity with relevant Union harmonisation legislation."
  },
  {
    "chapter": "Chapter IV: Conformity of Batteries",
    "article": "Article 20",
    "title": "Rules and conditions for affixing the CE marking",
    "summary": "Outlines physical placement, legibility, and timing requirements for affixing the CE mark to batteries or packaging."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 21",
    "title": "Notification",
    "summary": "Mandates Member States to notify the Commission and other countries of authorized third-party conformity assessment bodies."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 22",
    "title": "Notifying authorities",
    "summary": "Requires Member States to designate national notifying authorities responsible for setting up procedures to assess and monitor notified bodies."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 23",
    "title": "Requirements relating to notifying authorities",
    "summary": "Sets organizational, impartiality, and conflict-of-interest rules for notifying authorities."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 24",
    "title": "Information obligation on notifying authorities",
    "summary": "Requires notifying authorities to inform the Commission of their procedures for assessing and monitoring conformity assessment bodies."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 25",
    "title": "Requirements relating to notified bodies",
    "summary": "Outlines strict operational, technical competence, independence, and impartiality criteria required for notified bodies."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 26",
    "title": "Presumption of conformity of notified bodies",
    "summary": "Presumes notified bodies meeting relevant harmonised standards satisfy the operational requirements of Article 25."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 27",
    "title": "Subsidiaries of and subcontracting by notified bodies",
    "summary": "Regulates notified body subcontractors and subsidiaries, ensuring they meet the same competence and confidentiality standards."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 28",
    "title": "Application for notification",
    "summary": "Specifies application procedures and documentation for conformity assessment bodies seeking notified body status."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 29",
    "title": "Notification procedure",
    "summary": "Outlines the formal notification process, validation timelines, and objection mechanisms for new notified bodies."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 30",
    "title": "Identification numbers and lists of notified bodies",
    "summary": "Requires the Commission to assign identification numbers and publish a central online list (NANDO) of notified bodies."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 31",
    "title": "Changes to notifications",
    "summary": "Sets rules for restricting, suspending, or withdrawing notified body accreditations when technical competence is lost."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 32",
    "title": "Challenge to the competence of notified bodies",
    "summary": "Empowers the Commission to investigate cases where the competence of a notified body is questioned by Member States."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 33",
    "title": "Operational obligations of notified bodies",
    "summary": "Defines procedures for notified bodies when carrying out assessments, issuing certificates, or demanding corrective actions."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 34",
    "title": "Appeal against decisions of notified bodies",
    "summary": "Mandates that notified bodies establish transparent appeal procedures against their negative assessment decisions."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 35",
    "title": "Information obligation on notified bodies",
    "summary": "Forces notified bodies to report issued, refused, suspended, or withdrawn conformity certificates to notifying authorities."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 36",
    "title": "Exchange of experience and good practice",
    "summary": "Mandates the Commission to organize exchanges of experience between national notifying authorities across Member States."
  },
  {
    "chapter": "Chapter V: Notification of Conformity Assessment Bodies",
    "article": "Article 37",
    "title": "Coordination of notified bodies",
    "summary": "Establishes a sectorial coordination group of notified bodies to ensure technical alignment and uniform assessment practices."
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 38",
    "title": "Obligations of manufacturers",
    "summary": "Defines primary liabilities: ensuring compliance, drawing technical files, carrying out conformity assessment, affixing CE/QR marks, and providing technical documentation."
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 39",
    "title": "Obligations of supplier of battery cells and battery modules",
    "summary": "Defines obligations to provide information and documentation necessary when supplying battery cells or modules to a manufacturer"
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 40",
    "title": "Obligations of authorised representatives",
    "summary": "Outlines written mandates and legal duties for non-EU manufacturers' designated representatives in the Union."
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 41",
    "title": "Obligations of importers",
    "summary": "Requires importers to verify that foreign manufacturers conducted conformity assessments, affixed marks, and created valid technical records before market placement."
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 42",
    "title": "Obligations of distributors",
    "summary": "Mandates distributors to verify CE marks, labels, language requirements, and storage conditions before making batteries available."
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 43",
    "title": "Obligations of fulfilment service providers",
    "summary": "Imposes compliance obligations on warehousing and dispatching services to ensure products hold valid compliance documentation."
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 44",
    "title": "Case in which obligations of manufacturers apply to importers and distributors",
    "summary": "Converts importers or distributors legally into manufacturers if they modify batteries or sell products under their own brand."
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 45",
    "title": "Obligations of economic operators placing on the market or putting into service batteries that have been subject to preparation for re-use, preparation for repurposing, repurposing or remanufacturing",
    "summary": "Establishes that repurposers and remanufacturers assume full manufacturer liability, conduct new assessments, and generate a new DPP."
  },
  {
    "chapter": "Chapter VI: Obligations of Economic Operators Other Than Obligations in Chapter VII and VIII",
    "article": "Article 46",
    "title": "Identification of economic operators",
    "summary": "Forces operators to disclose supply chain actors to market surveillance authorities upon request for a period of 10 years."
  },
  {
    "chapter": "Chapter VII: Obligations of economic operators as regards battery due diligence policies",
    "article": "Article 47",
    "title": "Scope of this Chapter",
    "summary": "Applies mandatory due diligence rules to economic operators placing EV, LMT, or large industrial batteries (>2 kWh) on the market."
  },
  {
    "chapter": "Chapter VII: Obligations of economic operators as regards battery due diligence policies",
    "article": "Article 48",
    "title": "Battery due diligence policies",
    "summary": "Requires operators to adopt and implement policies addressing social and environmental supply chain risks for critical raw materials."
  },
  {
    "chapter": "Chapter VII: Obligations of economic operators as regards battery due diligence policies",
    "article": "Article 49",
    "title": "Economic operator's management system",
    "summary": "Mandates corporate supply chain management systems, senior executive oversight, chain-of-custody tracking, and grievance mechanisms."
  },
  {
    "chapter": "Chapter VII: Obligations of economic operators as regards battery due diligence policies",
    "article": "Article 50",
    "title": "Risk management obligations",
    "summary": "Requires operators to identify, assess, prevent, and mitigate supply chain risks (human rights, labor rights, environmental damage)."
  },
  {
    "chapter": "Chapter VII: Obligations of economic operators as regards battery due diligence policies",
    "article": "Article 51",
    "title": "Third-party verification of battery due diligence policies",
    "summary": "Requires mandatory third-party audits of corporate due diligence policies by accredited notified bodies."
  },
  {
    "chapter": "Chapter VII: Obligations of economic operators as regards battery due diligence policies",
    "article": "Article 52",
    "title": "Disclosure of information on battery due diligence policies",
    "summary": "Mandates annual public reporting on due diligence policies, risk assessments, third-party audit reports, and mitigation measures."
  },
  {
    "chapter": "Chapter VII: Obligations of economic operators as regards battery due diligence policies",
    "article": "Article 53",
    "title": "Recognition of due diligence schemes",
    "summary": "Allows the European Commission to formally recognize government or industry due diligence schemes as equivalent to EU legal standards."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 54",
    "title": "Competent authority",
    "summary": "Requires Member States to designate competent national authorities responsible for waste battery policy enforcement and monitoring."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 55",
    "title": "Register of producers",
    "summary": "Establishes national registers where battery producers must register before making batteries available on the market of a Member State."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 56",
    "title": "Extended Producer Responsibility",
    "summary": "Holds producers financially and organizationally responsible for waste battery collection, treatment, and recycling."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 57",
    "title": "Producer Responsibility Organisation",
    "summary": "Permits producers to fulfill Extended Producer Responsibility (EPR) obligations individually or collectively through approved Producer Responsibility Organisations (PROs)."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 58",
    "title": "Authorisation on fulfilment of extended producer responsibility",
    "summary": "Outlines formal state authorization procedures and operational requirements for EPR compliance schemes and PROs."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 59",
    "title": "Collection of waste portable batteries",
    "summary": "Sets binding collection targets for waste portable batteries (45% by 2023, 63% by 2027, 73% by 2030) free of charge to end-users."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 60",
    "title": "Collection of waste LMT batteries",
    "summary": "Establishes mandatory collection targets for Light Means of Transport (LMT) batteries (51% by 2028, 61% by 2031)."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 61",
    "title": "Collection of waste SLI batteries, industrial batteries and electric vehicle batteries",
    "summary": "Requires producers to take back all waste SLI, industrial, and EV batteries free of charge without requiring new purchases."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 62",
    "title": "Obligations of distributors",
    "summary": "Requires distributors to take back waste batteries from end-users free of charge at retail locations regardless of new purchases."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 63",
    "title": "Deposit return systems for batteries",
    "summary": "Empowers Member States to establish national deposit return systems for batteries to boost collection rates."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 64",
    "title": "Obligations of end-users",
    "summary": "Obligates end-users to dispose of waste batteries separately from unsorted municipal waste at designated collection points."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 65",
    "title": "Obligations of operators of treatment facilities",
    "summary": "Mandates that permitted treatment facilities handle waste batteries in accordance with mandatory environmental and health standards."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 66",
    "title": "Participation of public waste management authorities",
    "summary": "Sets rules for municipal waste authorities participating in waste battery collection, sorting, and transfer."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 67",
    "title": "Participation of voluntary collection points",
    "summary": "Regulates voluntary collection points established for waste portable and waste LMT batteries. Requires them to hand over all collected waste batteries to producers, Producer Responsibility Organisations (PROs), or designated waste management operators for proper treatment."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 68",
    "title": "Restrictions regarding handover of waste portable batteries and waste LMT batteries",
    "summary": "Permits Member States to restrict how distributors, waste treatment facilities, public waste authorities, and voluntary collection points hand over collected waste portable and LMT batteries. This ensures alignment with national collection and recycling systems while preventing adverse impacts on waste management."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 69",
    "title": "Obligations for Member States regarding collection targets for waste portable batteries and waste LMT batteries",
    "summary": "Mandates that Member States monitor, calculate, and verify annual collection rates for waste portable batteries and waste LMT batteries to ensure national fulfillment of binding collection targets set in Articles 59 and 60 (e.g., portable: 63% by 2027, 73% by 2030; LMT: 51% by 2028, 61% by 2031)."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 70",
    "title": "Treatment",
    "summary": "Mandates that all collected waste batteries undergo proper treatment and recycling using Best Available Techniques (BAT)."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 71",
    "title": "Targets for recycling efficiency and recovery of materials",
    "summary": "Sets binding material recovery targets (e.g., 95% Cobalt/Nickel/Copper and 80% Lithium by 2031)."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 72",
    "title": "Shipment of waste batteries",
    "summary": "Regulates transboundary shipments of waste batteries, requiring proof that overseas recycling facilities meet equivalent EU environmental standards."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 73",
    "title": "Preparation for re-use or preparation for repurposing of waste LMT batteries, waste industrial batteries and waste electric vehicle batteries",
    "summary": "Outlines technical safety testing, State of Health (SoH) verification, and documentation required before second-life battery placement."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 74",
    "title": "Information on prevention and management of waste batteries",
    "summary": "Mandates public information campaigns on waste prevention, separate disposal, collection points, and toxicity risks."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 75",
    "title": "Minimum requirements for reporting to the competent authorities",
    "summary": "Specifies data accuracy, auditability, and verification standards for waste management reporting submitted to Member States."
  },
  {
    "chapter": "Chapter VIII: Management of Waste Batteries",
    "article": "Article 76",
    "title": "Reporting to the Commission",
    "summary": "Requires Member States to submit annual waste battery collection rates, recycling efficiencies, and material recovery data to the Commission."
  },
  {
    "chapter": "Chapter IX: Digital Battery Passport",
    "article": "Article 77",
    "title": "Battery passport",
    "summary": "Mandates a unique Digital Battery Passport for every LMT, industrial (>2 kWh), and EV battery placed on the market from 18 February 2027."
  },
  {
    "chapter": "Chapter IX: Digital Battery Passport",
    "article": "Article 78",
    "title": "Technical design and operation of the battery passport",
    "summary": "Defines technical design rules: open standards, interoperability, persistent data availability, and Role-Based Access Control (RBAC)."
  },
  {
    "chapter": "Chapter X: Union Market Surveillance & Safeguard Procedures",
    "article": "Article 79",
    "title": "Procedure at national level for dealing with batteries presenting a risk",
    "summary": "Outlines Market Surveillance Authority (MSA) inspection procedures, risk evaluations, and enforcement actions for unsafe batteries."
  },
  {
    "chapter": "Chapter X: Union Market Surveillance & Safeguard Procedures",
    "article": "Article 80",
    "title": "Union safeguard procedure",
    "summary": "Sets up EU-wide notifications and objection procedures when a Member State restricts or bans an unsafe battery model."
  },
  {
    "chapter": "Chapter X: Union Market Surveillance & Safeguard Procedures",
    "article": "Article 81",
    "title": "Compliant batteries which present a risk",
    "summary": "Establishes procedures for handling batteries that comply with formal rules but still present unforeseen health, safety, or environmental risks."
  },
  {
    "chapter": "Chapter X: Union Market Surveillance & Safeguard Procedures",
    "article": "Article 82",
    "title": "Joint activities",
    "summary": "Encourages joint market surveillance activities and cross-border testing campaigns between national enforcement authorities."
  },
  {
    "chapter": "Chapter X: Union Market Surveillance & Safeguard Procedures",
    "article": "Article 83",
    "title": "Formal non-compliance",
    "summary": "Lists administrative failures (missing CE mark, missing QR code, incomplete file) and mandates formal corrective action timelines."
  },
  {
    "chapter": "Chapter X: Union Market Surveillance & Safeguard Procedures",
    "article": "Article 84",
    "title": "Non-compliance with due diligence obligations",
    "summary": "Outlines enforcement procedures and corrective orders for failure to implement supply chain due diligence policies or missing audit reports."
  },
  {
    "chapter": "Chapter XI: Green Public Procurement & Substance Restrictions",
    "article": "Article 85",
    "title": "Green public procurement",
    "summary": "Mandates public authorities to incorporate lifecycle environmental criteria when procuring batteries or products containing them."
  },
  {
    "chapter": "Chapter XI: Green Public Procurement & Substance Restrictions",
    "article": "Article 86",
    "title": "Restriction procedure for substances",
    "summary": "Outlines the formal EU legislative process for proposing and introducing new chemical restrictions on battery substances."
  },
  {
    "chapter": "Chapter XI: Green Public Procurement & Substance Restrictions",
    "article": "Article 87",
    "title": "Opinion of the Agency's Committees",
    "summary": "Requires the European Chemicals Agency (ECHA) risk assessment committees to issue formal opinions on chemical restriction proposals."
  },
  {
    "chapter": "Chapter XI: Green Public Procurement & Substance Restrictions",
    "article": "Article 88",
    "title": "Submission of an opinion to the Commission",
    "summary": "Sets rules for ECHA submitting final restriction opinions to the European Commission for legislative enactment."
  },
  {
    "chapter": "Chapter XII: Delegated Powers & Committee Procedure",
    "article": "Article 89",
    "title": "Exercise of the delegation",
    "summary": "Defines the legal scope, duration, and conditions under which the Commission may adopt Level 3 Delegated Acts."
  },
  {
    "chapter": "Chapter XII: Delegated Powers & Committee Procedure",
    "article": "Article 90",
    "title": "Committee procedure",
    "summary": "Establishes the official EU Batteries Committee to assist the Commission under standard comitology rules."
  },
  {
    "chapter": "Chapter XIII: Amendments",
    "article": "Article 91",
    "title": "Amendments to Regulation (EU) 2019/1020",
    "summary": "Formally amends the EU Market Surveillance Regulation to incorporate battery enforcement rules."
  },
  {
    "chapter": "Chapter XIII: Amendments",
    "article": "Article 92",
    "title": "Amendment to Directive 2008/98/EC",
    "summary": "Amends the Waste Framework Directive to harmonize battery waste definitions and legal provisions."
  },
  {
    "chapter": "Chapter XIV: Final Provisions",
    "article": "Article 93",
    "title": "Penalties",
    "summary": "Mandates Member States to establish effective, proportionate, and dissuasive national penalties for regulatory infringements."
  },
  {
    "chapter": "Chapter XIV: Final Provisions",
    "article": "Article 94",
    "title": "Review",
    "summary": "Requires the European Commission to periodically review the Regulation's impact and report to the European Parliament and Council."
  },
  {
    "chapter": "Chapter XIV: Final Provisions",
    "article": "Article 95",
    "title": "Repeal and transitional rules",
    "summary": "Repeals former Directive 2006/66/EC and sets transitional rules for existing battery models placed on the market."
  },
  {
    "chapter": "Chapter XIV: Final Provisions",
    "article": "Article 96",
    "title": "Entry into force and application",
    "summary": "Specifies entry into force (17 August 2023), general application date (18 February 2024), and staggered timelines for specific articles through 2031."
  },
  {
    "chapter": "Annex",
    "article": "Annex I",
    "title": "Restrictions on hazardous substances",
    "summary": "Specifies maximum concentration thresholds for restricted hazardous substances in batteries (e.g., Lead, Mercury, Cadmium)."
  },
  {
    "chapter": "Annex",
    "article": "Annex II",
    "title": "Carbon footprint calculation methodology",
    "summary": "Defines the scientific lifecycle assessment (LCA) rules for computing greenhouse gas emissions (gCO2eq/kWh) across raw material extraction, production, transport, and recycling."
  },
  {
    "chapter": "Annex",
    "article": "Annex III",
    "title": "Electrochemical performance and durability parameters for portable batteries of general use",
    "summary": "Sets standard measurement criteria for capacity fade, discharge performance, and cycle life for general-use portable batteries."
  },
  {
    "chapter": "Annex",
    "article": "Annex IV",
    "title": "Electrochemical performance and durability parameters for LMT, industrial, and EV batteries",
    "summary": "Establishes required parameters: rated capacity (Ah), power fade (W), internal resistance increase (Ohms), energy round-trip efficiency, and expected cycle life."
  },
  {
    "chapter": "Annex",
    "article": "Annex V",
    "title": "Safety parameters",
    "summary": "Outlines mandatory thermal, mechanical, and electrical hazard testing parameters (e.g., thermal runaway propagation, short-circuit protection, overcharge protection)."
  },
  {
    "chapter": "Annex",
    "article": "Annex VI",
    "title": "Labelling, marking, and information requirements",
    "summary": "Details exact graphic designs, dimensions, and formatting rules for battery labels, chemical symbols, collection bins, and scannable QR codes."
  },
  {
    "chapter": "Annex",
    "article": "Annex VII",
    "title": "Parameters for determining State of Health (SoH) and expected lifetime of batteries",
    "summary": "Outlines dynamic parameters tracked by the Battery Management System (BMS): capacity loss, power capability fade, temperature exposure history, and operating hours."
  },
  {
    "chapter": "Annex",
    "article": "Annex VIII",
    "title": "Conformity assessment procedures",
    "summary": "Outlines official compliance verification modules (Module A: Internal production control, Module D1: Quality assurance, Module G: Unit verification)."
  },
  {
    "chapter": "Annex",
    "article": "Annex IX",
    "title": "EU declaration of conformity",
    "summary": "Specifies mandatory elements required in the written CE compliance document signed by the manufacturer (e.g., model ID, notified body details, harmonised standard references)."
  },
  {
    "chapter": "Annex",
    "article": "Annex X",
    "title": "List of raw materials and risk categories",
    "summary": "Lists critical battery minerals (Cobalt, Natural Graphite, Lithium, Nickel) and environmental/social risk categories (labor rights, community impact, water usage) required for corporate audits."
  },
  {
    "chapter": "Annex",
    "article": "Annex XI",
    "title": "Calculation of collection rates for waste portable and LMT batteries",
    "summary": "Defines mathematical formulas used by Member States and Producer Responsibility Organisations (PROs) to report annual waste battery collection percentages."
  },
  {
    "chapter": "Annex",
    "article": "Annex XII",
    "title": "Storage and treatment, including recycling, requirements",
    "summary": "Establishes binding percentage targets for recyclers (e.g., recovering 95% Cobalt/Nickel/Copper and 80% Lithium by 2031)."
  },
  {
    "chapter": "Annex",
    "article": "Annex XIII",
    "title": "Information to be included in the Battery Passport",
    "summary": "The core Digital Product Passport dataset: Categorizes 70+ mandatory data points across 4 access tiers (Public data, Legitimate interest/repairer data, Market surveillance audit data, and Individual unit telemetry)."
  },
  {
    "chapter": "Annex",
    "article": "Annex XIV",
    "title": "Minimum requirements for shipments of used batteries",
    "summary": "Outlines technical health, safety, and environmental standards for processing waste battery plants and hydrometallurgical shredding facilities."
  },
  {
    "chapter": "Annex",
    "article": "Annex XV",
    "title": "Correlation table",
    "summary": "Maps every article from the repealed Directive 2006/66/EC to its new equivalent location in Regulation (EU) 2023/1542."
  }
];

const BATTERY_REGULATION_ACTORS = [
  {
    "actor": "Manufacturer",
    "reference": "Chapter VI, Article 38",
    "scope": "Entity that manufactures a battery or has a battery designed/manufactured under its own brand name.",
    "responsibilities": "Conduct conformity assessment procedures and draw up technical documentation; Affix CE marking, QR code, and required labels; Create the Digital Battery Passport (for EV, LMT, and industrial batteries >2 kWh); Ensure compliance with carbon footprint thresholds and recycled content targets."
  },
  {
    "actor": "Authorised Representative",
    "reference": "Chapter VI, Article 39",
    "scope": "EU-established natural/legal person mandated in writing by a non-EU manufacturer.",
    "responsibilities": "Retain technical documentation and EU Declarations of Conformity for 10 years; Cooperate with Market Surveillance Authorities (MSAs) and provide proof of conformity upon request."
  },
  {
    "actor": "Importer",
    "reference": "Chapter VI, Article 40",
    "scope": "Natural or legal person established in the EU placing batteries from third (non-EU) countries on the market.",
    "responsibilities": "Verify that foreign manufacturer completed conformity assessments, CE marking, QR codes, and technical documentation; Indicate name, registered trade name, and contact address on battery or packaging; Ensure storage and transport conditions do not jeopardize compliance."
  },
  {
    "actor": "Distributor",
    "reference": "Chapter VI, Articles 41 & 62",
    "scope": "Any entity in the supply chain (other than manufacturer/importer) making a battery available on the market.",
    "responsibilities": "Verify CE marking, QR codes, required labels, and language requirements before selling; Ensure proper storage and transport; Take back waste batteries from end-users free of charge at retail locations (Article 62)."
  },
  {
    "actor": "Fulfilment Service Provider",
    "reference": "Chapter VI, Article 42",
    "scope": "Logistics entities offering warehousing, packaging, addressing, and dispatch services without taking product ownership.",
    "responsibilities": "Verify that products hosted and dispatched carry required compliance markings and documentation when no importer or authorised representative is present in the EU."
  },
  {
    "actor": "Repurposer / Remanufacturer / Second-Life Operator",
    "reference": "Chapter VI & VIII, Articles 43 & 73",
    "scope": "Entity carrying out preparation for re-use, repurposing, or remanufacturing of used batteries (e.g., EV to stationary storage).",
    "responsibilities": "Assumes full legal status and liability of a Manufacturer for the modified product; Conducts new conformity assessments, updates performance data, and issues a new or updated Digital Battery Passport; Verifies battery safety and State of Health (SoH) prior to second-life placement."
  },
  {
    "actor": "Economic Operator Subject to Due Diligence",
    "reference": "Chapter VII, Articles 47–53",
    "scope": "Operators placing EV, LMT, or industrial batteries (>2 kWh) on the EU market (SME exemptions apply).",
    "responsibilities": "Establish corporate supply chain due diligence policies covering social and environmental risks in sourcing raw minerals (Lithium, Cobalt, Nickel, Natural Graphite); Subject due diligence policies to mandatory third-party verification by Notified Bodies; Publish annual public reports on supply chain due diligence."
  },
  {
    "actor": "Producer (EPR Context)",
    "reference": "Chapter VIII, Articles 55 & 56",
    "scope": "First manufacturer, importer, or distributor supplying a battery on the market of a specific Member State.",
    "responsibilities": "Register in national producer registers; Bear Extended Producer Responsibility (EPR): finance and organize the separate collection, treatment, and recycling of waste batteries; Achieve category-specific waste collection targets."
  },
  {
    "actor": "Producer Responsibility Organisation (PRO)",
    "reference": "Chapter VIII, Articles 57 & 58",
    "scope": "Legal entity organizing collective EPR fulfillment on behalf of multiple producers.",
    "responsibilities": "Manage waste battery collection infrastructure, transport, and treatment schemes; Report collection rates, material recovery data, and financial contributions to competent national authorities."
  },
  {
    "actor": "Waste Management Operator / Recycler",
    "reference": "Chapter VIII, Articles 64 & 69–71",
    "scope": "Authorized facilities processing, dismantling, shredding, and recycling end-of-life batteries.",
    "responsibilities": "Achieve mandatory recycling efficiency rates and material recovery targets (e.g., recovering 95% Cobalt/Nickel/Copper and 80% Lithium by 2031); Access the Digital Battery Passport for safe disassembly steps and chemical composition details; Report recovery metrics to competent state authorities."
  },
  {
    "actor": "Independent Operator / Independent Repairer",
    "reference": "Chapter II & IX, Articles 14, 77 & 78",
    "scope": "Mechanics, independent repairers, refurbishers, and recyclers operating independently from OEMs.",
    "responsibilities": "Granted legal rights to access restricted data tiers in the Digital Battery Passport and real-time Battery Management System (BMS) health metrics (SoH, capacity fade) for maintenance, repair, and recycling."
  },
  {
    "actor": "Notified Body",
    "reference": "Chapter V, Articles 21–37",
    "scope": "Accredited independent third-party auditing body.",
    "responsibilities": "Carry out third-party conformity assessment procedures for carbon footprint declarations, quality systems, and supply chain due diligence policies."
  },
  {
    "actor": "Market Surveillance Authority (MSA)",
    "reference": "Chapter X, Articles 79–84",
    "scope": "Governmental national market enforcement agency.",
    "responsibilities": "Inspect batteries, audit technical files and battery passports, conduct safety testing, and enforce market bans or product recalls for non-compliant items."
  }
];
