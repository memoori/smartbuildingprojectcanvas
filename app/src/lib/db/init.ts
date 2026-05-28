import Database from "better-sqlite3";
import { join } from "path";
import { mkdirSync, existsSync } from "fs";

const DB_PATH = process.env.DATABASE_URL || join(process.cwd(), "data", "rfi-generator.db");

/**
 * Ensure the database and tables exist.
 * Called on first API request.
 */
export function ensureDatabase() {
  // Ensure data directory exists
  const dir = join(process.cwd(), "data");
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT,
      created_at INTEGER NOT NULL DEFAULT (unixepoch())
    );

    CREATE TABLE IF NOT EXISTS user_settings (
      user_id TEXT PRIMARY KEY REFERENCES users(id),
      provider TEXT NOT NULL DEFAULT 'openai',
      api_key_encrypted TEXT,
      model TEXT DEFAULT 'gpt-4o',
      preferences TEXT
    );

    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id),
      name TEXT NOT NULL,
      company TEXT,
      building_type TEXT NOT NULL,
      building_sqft INTEGER,
      building_location TEXT,
      building_age TEXT,
      budget_range TEXT,
      timeline TEXT,
      project_type TEXT,
      created_at INTEGER NOT NULL DEFAULT (unixepoch()),
      updated_at INTEGER NOT NULL DEFAULT (unixepoch())
    );

    CREATE TABLE IF NOT EXISTS project_outcomes (
      id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL REFERENCES projects(id),
      outcome_id TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS project_technologies (
      id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL REFERENCES projects(id),
      technology_id TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS project_sections (
      id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL REFERENCES projects(id),
      section_number INTEGER NOT NULL,
      user_input TEXT,
      status TEXT NOT NULL DEFAULT 'draft',
      created_at INTEGER NOT NULL DEFAULT (unixepoch()),
      updated_at INTEGER NOT NULL DEFAULT (unixepoch())
    );

    CREATE TABLE IF NOT EXISTS rfi_outputs (
      id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL REFERENCES projects(id),
      section_key TEXT NOT NULL,
      content TEXT NOT NULL,
      model_used TEXT,
      tokens_used INTEGER,
      generation_time_ms INTEGER,
      version INTEGER NOT NULL DEFAULT 1,
      created_at INTEGER NOT NULL DEFAULT (unixepoch())
    );

    -- Ensure a default user exists for single-user mode
    INSERT OR IGNORE INTO users (id, email) VALUES ('default', 'local@localhost');
  `);

  db.close();
}
