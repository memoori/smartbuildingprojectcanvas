const CANVAS_SECTIONS = [
  {
    number: 1,
    title: "Key Project Goals & Value Proposition",
    color: "#63c7f2",
    description: "Define the business outcomes your smart building project must achieve.",
  },
  {
    number: 2,
    title: "Initial Actions",
    color: "#e83d7d",
    description: "Identify what actions your value propositions require and their priorities.",
  },
  {
    number: 3,
    title: "Partnerships & Resources",
    color: "#055da9",
    description: "Determine which partners and resources are needed for delivery.",
  },
  {
    number: 4,
    title: "Costs & Risk",
    color: "#fab313",
    description: "Assess costs, budget scalability, and risk mitigation strategies.",
  },
  {
    number: 5,
    title: "Management & Delivery",
    color: "#82b129",
    description: "Establish project management, stakeholder sign-off, and MSI engagement.",
  },
  {
    number: 6,
    title: "Future-Proofing",
    color: "#464545",
    description: "Ensure technology investments remain relevant and interoperable.",
  },
  {
    number: 7,
    title: "Key Performance Indicators",
    color: "#1b3660",
    description: "Define metrics to measure project success — quantitative and qualitative.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#1b3660] sm:text-5xl">
          Smart Building RFI Generator
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Generate professional Requests for Information for commercial building
          technology procurement. Guided by the Smart Building Project Canvas,
          powered by your choice of AI.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/project/new"
            className="rounded-lg bg-[#1b3660] px-6 py-3 text-lg font-medium text-white hover:bg-[#0d2340] transition-colors"
          >
            Start a New RFI Project
          </a>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1b3660] text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border bg-white p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#63c7f2] text-white text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Define Your Project</h3>
            <p className="text-gray-600 text-sm">
              Walk through the 7-section Smart Building Project Canvas. Define
              your building type, desired outcomes, and technology needs.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e83d7d] text-white text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Generate Your RFI</h3>
            <p className="text-gray-600 text-sm">
              AI generates a structured RFI document using Memoori&apos;s smart
              building knowledge base — tailored to your building and goals.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#82b129] text-white text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Export &amp; Send</h3>
            <p className="text-gray-600 text-sm">
              Review, edit, and export your RFI as a Word document or PDF. Send
              it to technology vendors to start the procurement process.
            </p>
          </div>
        </div>
      </div>

      {/* Canvas preview */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1b3660] text-center mb-8">
          The Smart Building Project Canvas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CANVAS_SECTIONS.map((section) => (
            <div
              key={section.number}
              className="rounded-lg border-l-4 bg-white p-4 shadow-sm"
              style={{ borderLeftColor: section.color }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded text-xs font-bold text-white"
                  style={{ backgroundColor: section.color }}
                >
                  {section.number}
                </span>
                <h3 className="text-sm font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500">{section.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key features */}
      <div className="rounded-xl border bg-white p-8">
        <h2 className="text-2xl font-bold text-[#1b3660] mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-[#055da9] mb-1">
              Bring Your Own API Key
            </h3>
            <p className="text-sm text-gray-600">
              Use your own OpenAI or Anthropic API key. Your key is encrypted at
              rest and never shared.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#055da9] mb-1">
              Outcomes-Based Approach
            </h3>
            <p className="text-sm text-gray-600">
              Define business outcomes, not technology specs. Let vendors propose
              how to achieve your goals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#055da9] mb-1">
              Industry Knowledge Base
            </h3>
            <p className="text-sm text-gray-600">
              Built on Memoori Research data covering BMS, HVAC, access control,
              occupancy sensing, energy management, and more.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#055da9] mb-1">
              Open Source &amp; Self-Hostable
            </h3>
            <p className="text-sm text-gray-600">
              Run it yourself with Docker. Contribute skills and improvements.
              BSD 3-Clause / CC-BY-SA 4.0 licensed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
