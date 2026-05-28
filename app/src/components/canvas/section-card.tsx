"use client";

import { useState } from "react";
import type { CanvasSection } from "@/lib/canvas-data";

interface SectionCardProps {
  section: CanvasSection;
  userNotes: string;
  onNotesChange: (notes: string) => void;
  guidance?: string[];
  isActive: boolean;
  onToggle: () => void;
  status: "draft" | "completed";
  onMarkComplete: () => void;
}

export function SectionCard({
  section,
  userNotes,
  onNotesChange,
  guidance,
  isActive,
  onToggle,
  status,
  onMarkComplete,
}: SectionCardProps) {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <div
      className={`rounded-xl border bg-white overflow-hidden transition-shadow ${
        isActive ? "shadow-md ring-2" : "shadow-sm"
      }`}
      style={{
        borderColor: isActive ? section.color : undefined,
        ["--tw-ring-color" as string]: isActive ? section.color : undefined,
      } as React.CSSProperties}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
          style={{ backgroundColor: section.color }}
        >
          {section.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900">{section.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {status === "completed" && (
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Done
            </span>
          )}
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform ${
              isActive ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      {isActive && (
        <div className="border-t px-4 pb-4">
          {/* Tip */}
          <div
            className="mt-4 rounded-lg p-3 text-sm"
            style={{ backgroundColor: `${section.color}10` }}
          >
            <div className="flex gap-2">
              <span className="text-base">💡</span>
              <p className="text-gray-700">{section.tip}</p>
            </div>
          </div>

          {/* Questions */}
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Key Questions to Consider
            </h4>
            <ul className="space-y-2">
              {section.questions.map((q, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: section.color }}
                  />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills-driven guidance */}
          {guidance && guidance.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1.5">
                <span className="text-base">📋</span>
                Guidance for Your Building Type
              </h4>
              <ul className="space-y-1.5">
                {guidance.map((g, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 rounded-md bg-blue-50 px-3 py-2"
                  >
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examples (collapsible) */}
          <div className="mt-4">
            <button
              onClick={() => setShowExamples(!showExamples)}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <svg
                className={`h-3.5 w-3.5 transition-transform ${
                  showExamples ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Example Outputs
            </button>
            {showExamples && (
              <ul className="mt-2 space-y-1 pl-5">
                {section.examples.map((ex, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-500 italic list-disc"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* User notes */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your Notes
            </label>
            <textarea
              value={userNotes}
              onChange={(e) => onNotesChange(e.target.value)}
              rows={5}
              placeholder={`Enter your notes for "${section.title}"... Answer the questions above, capture decisions, and note any requirements specific to your project.`}
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-colors resize-y"
              style={
                {
                  "--tw-ring-color": section.color,
                } as React.CSSProperties
              }
            />
          </div>

          {/* Actions */}
          <div className="mt-3 flex justify-between items-center">
            <span className="text-xs text-gray-400">
              {userNotes.length > 0
                ? `${userNotes.length} characters`
                : "No notes yet"}
            </span>
            <button
              onClick={onMarkComplete}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                status === "completed"
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  : "text-white hover:opacity-90"
              }`}
              style={
                status !== "completed"
                  ? { backgroundColor: section.color }
                  : undefined
              }
            >
              {status === "completed"
                ? "Mark as In Progress"
                : "Mark as Complete"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
