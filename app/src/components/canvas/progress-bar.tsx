"use client";

import { CANVAS_SECTIONS } from "@/lib/canvas-data";

interface ProgressBarProps {
  sectionStatuses: Record<number, "draft" | "completed">;
  activeSection: number | null;
  onSectionClick: (sectionNumber: number) => void;
}

export function ProgressBar({
  sectionStatuses,
  activeSection,
  onSectionClick,
}: ProgressBarProps) {
  const completedCount = Object.values(sectionStatuses).filter(
    (s) => s === "completed"
  ).length;

  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-700">Canvas Progress</h3>
        <span className="text-sm text-gray-500">
          {completedCount} of {CANVAS_SECTIONS.length} sections
        </span>
      </div>

      <div className="flex gap-1">
        {CANVAS_SECTIONS.map((section) => {
          const status = sectionStatuses[section.number] || "draft";
          const isActive = activeSection === section.number;

          return (
            <button
              key={section.number}
              onClick={() => onSectionClick(section.number)}
              className={`flex-1 h-2.5 rounded-full transition-all ${
                isActive ? "ring-2 ring-offset-1" : ""
              }`}
              style={{
                backgroundColor:
                  status === "completed"
                    ? section.color
                    : `${section.color}30`,
                ["--tw-ring-color" as string]: isActive ? section.color : undefined,
              } as React.CSSProperties}
              title={`${section.number}. ${section.title} — ${status}`}
            />
          );
        })}
      </div>

      {/* Section labels */}
      <div className="flex gap-1 mt-1.5">
        {CANVAS_SECTIONS.map((section) => (
          <button
            key={section.number}
            onClick={() => onSectionClick(section.number)}
            className={`flex-1 text-center text-[10px] transition-colors ${
              activeSection === section.number
                ? "font-bold text-gray-800"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {section.number}
          </button>
        ))}
      </div>
    </div>
  );
}
