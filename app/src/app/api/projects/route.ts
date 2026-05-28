import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ensureDatabase } from "@/lib/db/init";
import { projects, projectOutcomes, projectTechnologies, projectSections } from "@/lib/db/schema";
import { nanoid } from "nanoid";
import { eq, desc } from "drizzle-orm";

// Ensure DB exists on first request
let initialized = false;
function init() {
  if (!initialized) {
    ensureDatabase();
    initialized = true;
  }
}

export async function POST(req: NextRequest) {
  init();

  const body = await req.json();
  const projectId = nanoid(12);
  const userId = "default"; // Single-user mode for now

  // Create project
  db.insert(projects).values({
    id: projectId,
    userId,
    name: body.name,
    company: body.company || null,
    buildingType: body.buildingType,
    buildingSqft: body.buildingSqft ? parseInt(body.buildingSqft.replace(/,/g, "")) : null,
    buildingLocation: body.buildingLocation || null,
    buildingAge: body.buildingAge || null,
    budgetRange: body.budgetRange || null,
    timeline: body.timeline || null,
    projectType: body.projectType || null,
  }).run();

  // Create outcome associations
  for (const outcomeId of body.selectedOutcomes || []) {
    db.insert(projectOutcomes).values({
      id: nanoid(12),
      projectId,
      outcomeId,
    }).run();
  }

  // Create technology associations
  for (const technologyId of body.selectedTechnologies || []) {
    db.insert(projectTechnologies).values({
      id: nanoid(12),
      projectId,
      technologyId,
    }).run();
  }

  // Pre-create 7 canvas sections
  for (let i = 1; i <= 7; i++) {
    db.insert(projectSections).values({
      id: nanoid(12),
      projectId,
      sectionNumber: i,
      userInput: "",
      status: "draft",
    }).run();
  }

  return NextResponse.json({ id: projectId }, { status: 201 });
}

export async function GET() {
  init();

  const allProjects = db
    .select()
    .from(projects)
    .where(eq(projects.userId, "default"))
    .orderBy(desc(projects.createdAt))
    .all();

  return NextResponse.json(allProjects);
}
