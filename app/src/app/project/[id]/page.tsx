"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { CANVAS_SECTIONS } from "@/lib/canvas-data";
import { SectionCard } from "@/components/canvas/section-card";
import { ProgressBar } from "@/components/canvas/progress-bar";

interface ProjectData {
  id: string;
  name: string;
  company: string | null;
  buildingType: string;
  buildingSqft: number | null;
  buildingLocation: string | null;
  buildingAge: string | null;
  budgetRange: string | null;
  timeline: string | null;
  projectType: string | null;
  outcomes: string[];
  technologies: string[];
  sections: {
    id: string;
    sectionNumber: number;
    userInput: string | null;
    status: string;
  }[];
}

export default function ProjectCanvasPage() {
  const params = useParams();
  const id = params.id as string;

  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<number | null>(1);
  const [sectionNotes, setSectionNotes] = useState<Record<number, string>>({});
  const [sectionStatuses, setSectionStatuses] = useState<
    Record<number, "draft" | "completed">
  >({});
  const [guidance, setGuidance] = useState<Record<number, string[]>>({});
  const [saving, setSaving] = useState(false);
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load project data
  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Project not found");
        return res.json();
      })
      .then((data: ProjectData) => {
        setProject(data);
        // Initialize section notes and statuses from saved data
        const notes: Record<number, string> = {};
        const statuses: Record<number, "draft" | "completed"> = {};
        for (const section of data.sections) {
          notes[section.sectionNumber] = section.userInput || "";
          statuses[section.sectionNumber] = section.status as
            | "draft"
            | "completed";
        }
        setSectionNotes(notes);
        setSectionStatuses(statuses);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Load skills guidance
  useEffect(() => {
    if (!project) return;
    const params = new URLSearchParams({
      buildingType: project.buildingType,
      outcomes: project.outcomes.join(","),
      technologies: project.technologies.join(","),
    });
    fetch(`/api/skills?${params}`)
      .then((res) => res.json())
      .then((data) => setGuidance(data.guidance || {}))
      .catch(() => {});
  }, [project]);

  // Auto-save section notes (debounced)
  const saveSection = useCallback(
    (sectionNumber: number, userInput: string, status: string) => {
      setSaving(true);
      fetch(`/api/projects/${id}/sections`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionNumber, userInput, status }),
      })
        .then(() => setSaving(false))
        .catch(() => setSaving(false));
    },
    [id]
  );

  const handleNotesChange = useCallback(
    (sectionNumber: number, notes: string) => {
      setSectionNotes((prev) => ({ ...prev, [sectionNumber]: notes }));
      // Debounce save
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
      saveTimeout.current = setTimeout(() => {
        saveSection(
          sectionNumber,
          notes,
          sectionStatuses[sectionNumber] || "draft"
        );
      }, 1000);
    },
    [saveSection, sectionStatuses]
  );

  const handleToggleComplete = useCallback(
    (sectionNumber: number) => {
      const newStatus =
        sectionStatuses[sectionNumber] === "completed" ? "draft" : "completed";
      setSectionStatuses((prev) => ({ ...prev, [sectionNumber]: newStatus }));
      saveSection(
        sectionNumber,
        sectionNotes[sectionNumber] || "",
        newStatus
      );
    },
    [sectionStatuses, sectionNotes, saveSection]
  );

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-64 rounded bg-gray-200" />
          <div className="h-4 w-96 rounded bg-gray-100" />
          <div className="h-12 rounded bg-gray-100" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 rounded-xl bg-gray-100" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="text-lg font-semibold text-red-800">
            Project Not Found
          </h2>
          <p className="mt-2 text-sm text-red-600">
            {error || "This project could not be loaded."}
          </p>
          <a
            href="/project/new"
            className="mt-4 inline-block rounded-lg bg-[#1b3660] px-4 py-2 text-sm text-white hover:bg-[#0d2340]"
          >
            Create New Project
          </a>
        </div>
      </div>
    );
  }

  const completedCount = Object.values(sectionStatuses).filter(
    (s) => s === "completed"
  ).length;
  const allComplete = completedCount === 7;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Project header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1b3660]">
              {project.name}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {project.company && `${project.company} · `}
              {project.buildingType.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              {project.buildingSqft &&
                ` · ${project.buildingSqft.toLocaleString()} sq ft`}
              {project.buildingLocation && ` · ${project.buildingLocation}`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {saving && (
              <span className="text-xs text-gray-400 animate-pulse">
                Saving...
              </span>
            )}
            {allComplete && (
              <a
                href={`/project/${id}/generate`}
                className="rounded-lg bg-[#82b129] px-4 py-2 text-sm font-medium text-white hover:bg-[#6a9422] transition-colors"
              >
                Generate RFI
              </a>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.outcomes.map((o) => (
            <span
              key={o}
              className="rounded-full bg-[#63c7f2]/10 px-2.5 py-0.5 text-xs text-[#1b3660]"
            >
              {o.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          ))}
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#e83d7d]/10 px-2.5 py-0.5 text-xs text-[#1b3660]"
            >
              {t.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <ProgressBar
          sectionStatuses={sectionStatuses}
          activeSection={activeSection}
          onSectionClick={(n) =>
            setActiveSection(activeSection === n ? null : n)
          }
        />
      </div>

      {/* Instruction */}
      <div className="mb-4 rounded-lg bg-[#1b3660]/5 p-3 text-sm text-gray-700">
        <strong>Walk through each section in order.</strong> Answer the
        questions, add your notes, and mark each section complete. Once all 7
        sections are done, you can generate your RFI.
      </div>

      {/* Canvas sections */}
      <div className="space-y-3">
        {CANVAS_SECTIONS.map((section) => (
          <SectionCard
            key={section.number}
            section={section}
            userNotes={sectionNotes[section.number] || ""}
            onNotesChange={(notes) =>
              handleNotesChange(section.number, notes)
            }
            guidance={guidance[section.number]}
            isActive={activeSection === section.number}
            onToggle={() =>
              setActiveSection(
                activeSection === section.number ? null : section.number
              )
            }
            status={sectionStatuses[section.number] || "draft"}
            onMarkComplete={() => handleToggleComplete(section.number)}
          />
        ))}
      </div>

      {/* Bottom action */}
      <div className="mt-8 flex justify-center">
        {allComplete ? (
          <a
            href={`/project/${id}/generate`}
            className="rounded-lg bg-[#82b129] px-8 py-3 text-lg font-medium text-white hover:bg-[#6a9422] transition-colors shadow-md"
          >
            All Sections Complete — Generate RFI
          </a>
        ) : (
          <p className="text-sm text-gray-500">
            Complete all 7 canvas sections to generate your RFI.{" "}
            <strong>
              {completedCount} of 7
            </strong>{" "}
            done.
          </p>
        )}
      </div>
    </div>
  );
}
