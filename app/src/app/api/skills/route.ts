import { NextRequest, NextResponse } from "next/server";
import { findRelevantSkills } from "@/lib/skills/parser";

/**
 * GET /api/skills?buildingType=office&outcomes=reduce-energy-costs,achieve-leed&technologies=bms-bas,hvac-optimization
 *
 * Returns relevant skills content organized by canvas section.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const buildingType = searchParams.get("buildingType") || "office";
  const outcomeIds = searchParams.get("outcomes")?.split(",").filter(Boolean) || [];
  const technologyIds = searchParams.get("technologies")?.split(",").filter(Boolean) || [];

  const skills = findRelevantSkills({ buildingType, outcomeIds, technologyIds });

  // Organize guidance snippets by canvas section
  const guidanceBySections: Record<number, string[]> = {};
  for (let i = 1; i <= 7; i++) {
    guidanceBySections[i] = [];
  }

  for (const skill of skills) {
    const sections = skill.frontmatter.canvas_sections || [];
    for (const secNum of sections) {
      // Extract relevant paragraphs from skill content for this section
      // For building types, extract building-type-specific considerations
      if (skill.frontmatter.category === "building-type") {
        guidanceBySections[secNum].push(
          `[${skill.frontmatter.title}] ${extractSummary(skill.content, 200)}`
        );
      } else if (skill.frontmatter.category === "outcome") {
        // For outcomes, extract canvas section guidance if it exists
        const sectionGuidance = extractCanvasSectionGuidance(
          skill.content,
          secNum
        );
        if (sectionGuidance) {
          guidanceBySections[secNum].push(
            `[${skill.frontmatter.title}] ${sectionGuidance}`
          );
        }
      } else if (skill.frontmatter.category === "cross-cutting") {
        guidanceBySections[secNum].push(
          `[${skill.frontmatter.title}] ${extractSummary(skill.content, 150)}`
        );
      } else if (skill.frontmatter.category === "technology") {
        // For technologies, add a brief note about relevance to this section
        if (secNum === 2 || secNum === 3) {
          guidanceBySections[secNum].push(
            `Consider ${skill.frontmatter.title} — review the RFI guidance for specific questions to ask vendors.`
          );
        }
      }
    }
  }

  // Deduplicate and limit per section
  for (const key of Object.keys(guidanceBySections)) {
    const secNum = parseInt(key);
    guidanceBySections[secNum] = [...new Set(guidanceBySections[secNum])].slice(0, 5);
  }

  return NextResponse.json({
    guidance: guidanceBySections,
    skillCount: skills.length,
  });
}

function extractSummary(content: string, maxLength: number): string {
  // Get the first paragraph after the ## Overview heading, or just the first paragraph
  const overviewMatch = content.match(/## Overview\s*\n\n([\s\S]*?)(?=\n\n##|\n\n$)/);
  const text = overviewMatch ? overviewMatch[1] : content.split("\n\n")[0];
  const clean = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[#*_`]/g, "").trim();
  return clean.length > maxLength ? clean.slice(0, maxLength).trim() + "..." : clean;
}

function extractCanvasSectionGuidance(
  content: string,
  sectionNumber: number
): string | null {
  const sectionRegex = new RegExp(
    `### Section ${sectionNumber}[:\\s]+[^\n]*\n([\s\S]*?)(?=\n### |$)`
  );
  const match = content.match(sectionRegex);
  if (match) {
    return match[1]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[#*_`]/g, "")
      .trim()
      .slice(0, 250);
  }
  return null;
}
