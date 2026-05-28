import Database from "better-sqlite3";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import { join } from "path";
import { mkdirSync, existsSync } from "fs";

const DB_PATH = process.env.DATABASE_URL || join(process.cwd(), "data", "rfi-generator.db");

let _db: BetterSQLite3Database<typeof schema> | null = null;

/**
 * Lazily initialize the database connection.
 * This avoids errors during Next.js build when the data directory doesn't exist.
 */
export function getDb(): BetterSQLite3Database<typeof schema> {
  if (!_db) {
    // Ensure data directory exists
    const dir = join(process.cwd(), "data");
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    const sqlite = new Database(DB_PATH);
    sqlite.pragma("journal_mode = WAL");
    sqlite.pragma("foreign_keys = ON");
    _db = drizzle(sqlite, { schema });
  }
  return _db;
}

// Keep backward compatibility — but this is now lazy
export const db = new Proxy({} as BetterSQLite3Database<typeof schema>, {
  get(_target, prop) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

export type DB = BetterSQLite3Database<typeof schema>;
