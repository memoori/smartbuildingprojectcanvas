import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ensureDatabase } from "@/lib/db/init";
import {
  projects,
  projectOutcomes,
  projectTechnologies,
  projectSections,
} from "@/lib/db/schema";
import { eq } from "drizzle-orm";

let initialized = false;
function init() {
  if (!initialized) {
    ensureDatabase();
    initialized = true;
  }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  init();
  const { id } = await params;

  const project = db.select().from(projects).where(eq(projects.id, id)).get();
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  const outcomes = db
    .select()
    .from(projectOutcomes)
    .where(eq(projectOutcomes.projectId, id))
    .all();

  const technologies = db
    .select()
    .from(projectTechnologies)
    .where(eq(projectTechnologies.projectId, id))
    .all();

  const sections = db
    .select()
    .from(projectSections)
    .where(eq(projectSections.projectId, id))
    .all();

  return NextResponse.json({
    ...project,
    outcomes: outcomes.map((o) => o.outcomeId),
    technologies: technologies.map((t) => t.technologyId),
    sections: sections.sort((a, b) => a.sectionNumber - b.sectionNumber),
  });
}
