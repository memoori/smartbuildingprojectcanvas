import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const userSettings = sqliteTable("user_settings", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id),
  provider: text("provider").notNull().default("openai"),
  apiKeyEncrypted: text("api_key_encrypted"),
  model: text("model").default("gpt-4o"),
  preferences: text("preferences"), // JSON blob
});

export const projects = sqliteTable("projects", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  company: text("company"),
  buildingType: text("building_type").notNull(),
  buildingSqft: integer("building_sqft"),
  buildingLocation: text("building_location"),
  buildingAge: text("building_age"),
  budgetRange: text("budget_range"),
  timeline: text("timeline"),
  projectType: text("project_type"), // "new-build" | "retrofit" | "technology-overlay"
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const projectOutcomes = sqliteTable("project_outcomes", {
  id: text("id").primaryKey(),
  projectId: text("project_id")
    .notNull()
    .references(() => projects.id),
  outcomeId: text("outcome_id").notNull(), // references skills/outcomes/*.md id
});

export const projectTechnologies = sqliteTable("project_technologies", {
  id: text("id").primaryKey(),
  projectId: text("project_id")
    .notNull()
    .references(() => projects.id),
  technologyId: text("technology_id").notNull(), // references skills/technologies/*/
});

export const projectSections = sqliteTable("project_sections", {
  id: text("id").primaryKey(),
  projectId: text("project_id")
    .notNull()
    .references(() => projects.id),
  sectionNumber: integer("section_number").notNull(), // 1-7 (canvas sections)
  userInput: text("user_input"), // JSON: user's notes/answers
  status: text("status").notNull().default("draft"), // "draft" | "completed"
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const rfiOutputs = sqliteTable("rfi_outputs", {
  id: text("id").primaryKey(),
  projectId: text("project_id")
    .notNull()
    .references(() => projects.id),
  sectionKey: text("section_key").notNull(), // e.g., "introduction", "technology-requirements"
  content: text("content").notNull(), // Generated markdown
  modelUsed: text("model_used"),
  tokensUsed: integer("tokens_used"),
  generationTimeMs: integer("generation_time_ms"),
  version: integer("version").notNull().default(1),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
