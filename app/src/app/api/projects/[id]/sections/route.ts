import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ensureDatabase } from "@/lib/db/init";
import { projectSections } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";

let initialized = false;
function init() {
  if (!initialized) {
    ensureDatabase();
    initialized = true;
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  init();
  const { id } = await params;
  const body = await req.json();

  const { sectionNumber, userInput, status } = body;

  const existing = db
    .select()
    .from(projectSections)
    .where(
      and(
        eq(projectSections.projectId, id),
        eq(projectSections.sectionNumber, sectionNumber)
      )
    )
    .get();

  if (!existing) {
    return NextResponse.json(
      { error: "Section not found" },
      { status: 404 }
    );
  }

  db.update(projectSections)
    .set({
      userInput: userInput !== undefined ? userInput : existing.userInput,
      status: status !== undefined ? status : existing.status,
      updatedAt: new Date(),
    })
    .where(eq(projectSections.id, existing.id))
    .run();

  return NextResponse.json({ success: true });
}
