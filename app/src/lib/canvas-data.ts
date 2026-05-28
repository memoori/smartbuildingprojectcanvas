/**
 * The 7 sections of the Smart Building Project Canvas.
 * Questions sourced from the original canvas/index.html.
 */
export const CANVAS_SECTIONS = [
  {
    number: 1,
    title: "Key Project Goals & Value Proposition",
    color: "#63c7f2",
    questions: [
      "What are the problems this smart building project will help to solve?",
      "What tenants are we trying to attract, and how will this project help?",
      "What value will it deliver to our business?",
      "What goal(s) must the project achieve?",
    ],
    examples: [
      "Improve our tenant's experience",
      "Reduce energy costs",
      "Optimize space",
      "Ensure compliance",
      "Achieve a certification (e.g. LEED / SmartScore / BREEAM / WELL / RESET / SPIRE)",
    ],
    tip: "Frame goals in business outcomes, not technology. Think: 'What does a fully leased, profitable building look like?' — not 'What sensors do we need?'",
  },
  {
    number: 2,
    title: "Initial Actions",
    color: "#e83d7d",
    questions: [
      "What actions will our value propositions require?",
      "Which actions are most important and in what order should they be performed?",
      "Do our core actions have any prerequisites (e.g. for retrofit projects, is a building systems audit required to understand what we already have)?",
      "Which existing building/business systems may need to be integrated?",
    ],
    examples: [
      "In order to optimize our space we need to measure occupancy utilization.",
      "Air quality is now a key tenant concern so we need to monitor CO₂ levels.",
      "Our current access control system vendor does not allow the necessary integrations, so we need to source a new vendor.",
    ],
    tip: "Start with the 'three rings' baseline: What do you believe about your building? What do the records say? What is the operational truth? Don't skip this step.",
  },
  {
    number: 3,
    title: "Partnerships & Resources",
    color: "#055da9",
    questions: [
      "Which core actions will partners need to perform (internal or external)?",
      "How do we select the right partners?",
      "What internal partners do we need to involve in the project?",
      "How will we make sure we are not 'locked-in' to one vendor ecosystem?",
      "Do partners require access to resources, skills or datasets to support delivery?",
      "Do we have the skill and ability to define our building's use cases for all the personas that use it? (e.g. tenants, visitors, etc.)",
    ],
    examples: [
      "In order to select the right occupancy analytics vendor, we need a detailed RFI document.",
      "Engage a specialist to help us define our building's use cases and communicate them to all stakeholders.",
    ],
    tip: "Consider whether you need a Master Systems Integrator (MSI) — especially if you have 5+ technology subsystems that need to interoperate.",
  },
  {
    number: 4,
    title: "Costs & Risk",
    color: "#fab313",
    questions: [
      "What are the most important costs inherent in delivering our project?",
      "Cost Scalability. CAPEX/OPEX. Should we defer CAPEX at least until tenants take space?",
      "How can we mitigate risk to ensure goals are met within the budget & deadline?",
      "Have we adequately considered Cyber Security and mitigated all associated risks?",
      "Can product vendors and delivery partners take us to existing buildings and demonstrate their work in a live environment?",
    ],
    examples: [
      "Create a detailed budget plan.",
      "Consider vendors who offer Pay As You Lease models.",
      "Engage the vendor to deliver a proof of concept on one floor before rolling out to the whole building.",
      "Ensure vendor hardware or software have been tested and validated to current Cyber Security standards.",
      "Prioritise our use case list, so we know what we can afford to lose.",
    ],
    tip: "The biggest risk is underinvestment in commissioning. Technology installed but not properly commissioned delivers 0% savings. Budget for commissioning and 12 months of performance monitoring.",
  },
  {
    number: 5,
    title: "Management & Delivery",
    color: "#82b129",
    questions: [
      "Who is responsible for managing the project and ensuring it is delivered on time and on budget?",
      "Who are the key stakeholders and who can 'sign off'?",
      "Does a Master Systems Integrator or Smart Building Consultant need to be engaged to ensure effective delivery?",
      "Can we put sufficient processes in place to ensure proper installation, integration & commissioning of the technology?",
    ],
    examples: [
      "Engage a consultant during the design phase to advise on system architecture and write the RFI documents.",
      "Put in place procedures to double-check and validate all commissioning of systems.",
    ],
    tip: "Stakeholder alignment is the real challenge. IT, facilities, security, and operations all need a common version of reality before procurement begins.",
  },
  {
    number: 6,
    title: "Future-Proofing",
    color: "#464545",
    questions: [
      "How do we ensure that our investment in technology does not become obsolete too quickly?",
      "Which systems (legacy or future) should the project interface or integrate with? (i.e. interoperability)",
      "Who will be responsible for maintaining hardware (firmware upgrades) and/or upgrading, patching software?",
    ],
    examples: [
      "Ensure that partners are contractually required to adhere to open data standards.",
      "Keep site-based technology focused on the end user and able to sustain Internet outages. Push complexity to the cloud where possible.",
      "Create internal procedures and supplier agreements so that firmware and software patches are regularly applied to ensure robust cybersecurity.",
    ],
    tip: "Equipment bought today may be installed years from now. Technology cycles are 3-5 years; buildings operate for decades. Insist on open standards (BACnet, MQTT, open APIs) and contractual upgrade provisions.",
  },
  {
    number: 7,
    title: "Key Performance Indicators",
    color: "#1b3660",
    questions: [
      "What values or metrics will be used to measure the success of our project?",
      "When, and with what frequency will they be measured, and which are the most important?",
    ],
    examples: [
      "Rental Yield Increased by X%",
      "Tenant satisfaction increased by Y% (survey)",
      "Certification Achieved",
      "Energy Use Intensity reduced to Z kBtu/sq ft",
    ],
    tip: "Include both quantitative metrics (specific objective data) and qualitative measures (interpretation of feelings, opinions, or experiences). If you can't measure it, you can't manage it.",
  },
] as const;

export type CanvasSection = (typeof CANVAS_SECTIONS)[number];
