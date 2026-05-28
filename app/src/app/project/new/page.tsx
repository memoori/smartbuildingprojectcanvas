"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BUILDING_TYPES = [
  { id: "office", label: "Office", emoji: "🏢" },
  { id: "hospital", label: "Hospital / Healthcare", emoji: "🏥" },
  { id: "mixed-use", label: "Mixed-Use Development", emoji: "🏗️" },
  // Phase 2+ building types (greyed out)
  { id: "hotel", label: "Hotel / Hospitality", emoji: "🏨", disabled: true },
  { id: "retail", label: "Retail", emoji: "🛍️", disabled: true },
  { id: "school-university", label: "School / University", emoji: "🎓", disabled: true },
  { id: "data-center", label: "Data Center", emoji: "🖥️", disabled: true },
  { id: "stadium-arena", label: "Stadium / Arena", emoji: "🏟️", disabled: true },
];

const OUTCOMES = [
  { id: "reduce-energy-costs", label: "Reduce Energy Costs", description: "Lower utility bills, optimize HVAC, improve EUI" },
  { id: "improve-tenant-experience", label: "Improve Tenant Experience", description: "Better comfort, access, amenities, and workplace quality" },
  { id: "achieve-leed", label: "Achieve LEED Certification", description: "Meet USGBC LEED requirements (Gold, Platinum)" },
  // Phase 2+
  { id: "achieve-well", label: "Achieve WELL Certification", description: "Focus on occupant health and wellness", disabled: true },
  { id: "harden-cybersecurity", label: "Harden Cybersecurity", description: "Protect building systems from cyber threats", disabled: true },
  { id: "achieve-net-zero", label: "Achieve Net Zero", description: "Eliminate operational carbon emissions", disabled: true },
];

const TECHNOLOGIES = [
  { id: "bms-bas", label: "Building Management System (BMS/BAS)", description: "Central building controls and automation" },
  { id: "hvac-optimization", label: "HVAC Optimization", description: "Heating, cooling, and ventilation efficiency" },
  { id: "access-control", label: "Access Control & Security", description: "Physical access, credentials, visitor management" },
  { id: "occupancy-sensing", label: "Occupancy Sensing", description: "Space utilization and people counting" },
  { id: "energy-management-emis", label: "Energy Management (EMIS)", description: "Metering, analytics, demand response" },
];

const PROJECT_TYPES = [
  { id: "new-build", label: "New Construction", description: "Greenfield development with technology designed in from the start" },
  { id: "retrofit", label: "Major Renovation", description: "Significant building upgrade, opportunity to replace or upgrade systems" },
  { id: "technology-overlay", label: "Technology Overlay", description: "Adding smart technology to an existing building without major physical changes" },
];

type Step = "basics" | "outcomes" | "technologies" | "review";

export default function NewProjectPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("basics");
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    buildingType: "",
    projectType: "",
    buildingSqft: "",
    buildingLocation: "",
    buildingAge: "",
    budgetRange: "",
    timeline: "",
    selectedOutcomes: [] as string[],
    selectedTechnologies: [] as string[],
  });

  const toggleSelection = (field: "selectedOutcomes" | "selectedTechnologies", id: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(id)
        ? prev[field].filter((x) => x !== id)
        : [...prev[field], id],
    }));
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#1b3660] mb-2">New RFI Project</h1>
      <p className="text-gray-600 mb-8">
        Start by defining your building, goals, and technology needs.
        This information shapes the RFI questions sent to vendors.
      </p>

      {/* Step indicator */}
      <div className="flex gap-1 mb-8">
        {(["basics", "outcomes", "technologies", "review"] as Step[]).map((s, i) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full ${
              s === step ? "bg-[#1b3660]" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Basics */}
      {step === "basics" && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#1b3660] flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-[#63c7f2] text-sm font-bold text-white">1</span>
            Project & Building Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g., 100 Main St Smart Building Upgrade"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3660]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company / Organization</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="e.g., Acme Properties Ltd"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3660]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Building Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {BUILDING_TYPES.map((bt) => (
                <button
                  key={bt.id}
                  disabled={"disabled" in bt && bt.disabled}
                  onClick={() => setForm({ ...form, buildingType: bt.id })}
                  className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                    form.buildingType === bt.id
                      ? "border-[#1b3660] bg-[#1b3660]/5 ring-2 ring-[#1b3660]"
                      : "disabled" in bt && bt.disabled
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:border-gray-400"
                  }`}
                >
                  <span className="text-lg">{bt.emoji}</span>
                  <span className="ml-2">{bt.label}</span>
                  {"disabled" in bt && bt.disabled && (
                    <span className="ml-1 text-xs text-gray-400">(soon)</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PROJECT_TYPES.map((pt) => (
                <button
                  key={pt.id}
                  onClick={() => setForm({ ...form, projectType: pt.id })}
                  className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                    form.projectType === pt.id
                      ? "border-[#1b3660] bg-[#1b3660]/5 ring-2 ring-[#1b3660]"
                      : "hover:border-gray-400"
                  }`}
                >
                  <div className="font-medium">{pt.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{pt.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Size (sq ft)</label>
              <input
                type="text"
                value={form.buildingSqft}
                onChange={(e) => setForm({ ...form, buildingSqft: e.target.value })}
                placeholder="e.g., 150,000"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3660]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={form.buildingLocation}
                onChange={(e) => setForm({ ...form, buildingLocation: e.target.value })}
                placeholder="e.g., Chicago, IL"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3660]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Building Age</label>
              <input
                type="text"
                value={form.buildingAge}
                onChange={(e) => setForm({ ...form, buildingAge: e.target.value })}
                placeholder="e.g., Built 2005"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3660]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
              <select
                value={form.budgetRange}
                onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3660]"
              >
                <option value="">Select range...</option>
                <option value="under-100k">Under $100K</option>
                <option value="100k-500k">$100K - $500K</option>
                <option value="500k-1m">$500K - $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="5m-plus">$5M+</option>
                <option value="undetermined">Not yet determined</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
              <select
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3660]"
              >
                <option value="">Select timeline...</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">3-6 months</option>
                <option value="12-months">6-12 months</option>
                <option value="18-months">12-18 months</option>
                <option value="24-months-plus">18+ months</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setStep("outcomes")}
              disabled={!form.name || !form.buildingType}
              className="rounded-lg bg-[#1b3660] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#0d2340] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next: Define Outcomes
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Outcomes */}
      {step === "outcomes" && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#1b3660] flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-[#63c7f2] text-sm font-bold text-white">1</span>
            What outcomes do you want to achieve?
          </h2>
          <p className="text-sm text-gray-600">
            Select the business outcomes that matter most. Think about what success
            looks like — not which technology to buy.
          </p>

          <div className="space-y-2">
            {OUTCOMES.map((outcome) => (
              <button
                key={outcome.id}
                disabled={"disabled" in outcome && outcome.disabled}
                onClick={() => toggleSelection("selectedOutcomes", outcome.id)}
                className={`w-full rounded-lg border p-4 text-left transition-colors ${
                  form.selectedOutcomes.includes(outcome.id)
                    ? "border-[#63c7f2] bg-[#63c7f2]/5 ring-2 ring-[#63c7f2]"
                    : "disabled" in outcome && outcome.disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{outcome.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{outcome.description}</div>
                  </div>
                  {form.selectedOutcomes.includes(outcome.id) && (
                    <span className="text-[#63c7f2] text-lg">&#10003;</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep("basics")}
              className="rounded-lg border px-6 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => setStep("technologies")}
              disabled={form.selectedOutcomes.length === 0}
              className="rounded-lg bg-[#1b3660] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#0d2340] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next: Select Technologies
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Technologies */}
      {step === "technologies" && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#1b3660] flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-[#e83d7d] text-sm font-bold text-white">2</span>
            Which technology categories should the RFI cover?
          </h2>
          <p className="text-sm text-gray-600">
            Select the building technology categories you want to request
            information about. The RFI will include tailored questions for each.
          </p>

          <div className="space-y-2">
            {TECHNOLOGIES.map((tech) => (
              <button
                key={tech.id}
                onClick={() => toggleSelection("selectedTechnologies", tech.id)}
                className={`w-full rounded-lg border p-4 text-left transition-colors ${
                  form.selectedTechnologies.includes(tech.id)
                    ? "border-[#e83d7d] bg-[#e83d7d]/5 ring-2 ring-[#e83d7d]"
                    : "hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{tech.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{tech.description}</div>
                  </div>
                  {form.selectedTechnologies.includes(tech.id) && (
                    <span className="text-[#e83d7d] text-lg">&#10003;</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep("outcomes")}
              className="rounded-lg border px-6 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => setStep("review")}
              disabled={form.selectedTechnologies.length === 0}
              className="rounded-lg bg-[#1b3660] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#0d2340] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next: Review
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Review */}
      {step === "review" && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#1b3660]">Review Your Project</h2>
          <p className="text-sm text-gray-600">
            Confirm your project details before proceeding to the canvas walkthrough.
          </p>

          <div className="rounded-lg border bg-white divide-y">
            <div className="p-4">
              <div className="text-xs font-medium text-gray-500 uppercase">Project</div>
              <div className="text-sm mt-1">{form.name} {form.company && `— ${form.company}`}</div>
            </div>
            <div className="p-4">
              <div className="text-xs font-medium text-gray-500 uppercase">Building</div>
              <div className="text-sm mt-1">
                {BUILDING_TYPES.find(b => b.id === form.buildingType)?.label}
                {form.buildingSqft && ` | ${form.buildingSqft} sq ft`}
                {form.buildingLocation && ` | ${form.buildingLocation}`}
                {form.buildingAge && ` | ${form.buildingAge}`}
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs font-medium text-gray-500 uppercase">Project Type</div>
              <div className="text-sm mt-1">
                {PROJECT_TYPES.find(p => p.id === form.projectType)?.label || "Not specified"}
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs font-medium text-gray-500 uppercase">Desired Outcomes</div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {form.selectedOutcomes.map(id => (
                  <span key={id} className="rounded-full bg-[#63c7f2]/10 px-2.5 py-0.5 text-xs text-[#1b3660]">
                    {OUTCOMES.find(o => o.id === id)?.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs font-medium text-gray-500 uppercase">Technology Categories</div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {form.selectedTechnologies.map(id => (
                  <span key={id} className="rounded-full bg-[#e83d7d]/10 px-2.5 py-0.5 text-xs text-[#1b3660]">
                    {TECHNOLOGIES.find(t => t.id === id)?.label}
                  </span>
                ))}
              </div>
            </div>
            {(form.budgetRange || form.timeline) && (
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 uppercase">Budget & Timeline</div>
                <div className="text-sm mt-1">
                  {form.budgetRange && `Budget: ${form.budgetRange}`}
                  {form.budgetRange && form.timeline && " | "}
                  {form.timeline && `Timeline: ${form.timeline}`}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep("technologies")}
              className="rounded-lg border px-6 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              disabled={creating}
              onClick={async () => {
                setCreating(true);
                try {
                  const res = await fetch("/api/projects", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                  });
                  const data = await res.json();
                  router.push(`/project/${data.id}`);
                } catch {
                  setCreating(false);
                }
              }}
              className="rounded-lg bg-[#82b129] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#6a9422] disabled:opacity-60 transition-colors"
            >
              {creating ? "Creating..." : "Create Project & Start Canvas"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
