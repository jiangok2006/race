import Database from 'better-sqlite3';
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import type { TestContext } from 'vitest';
import { beforeEach } from 'vitest';

export const httpUrl = process.env.APP_HTTP_URL
console.log(`httpUrl: ${httpUrl}`)


export interface TestContextWithDB extends TestContext {
    db: BetterSQLite3Database<Record<string, never>>;
}

beforeEach(async (context: TestContextWithDB) => {
    const sqlite = new Database(':memory:');
    context.db = drizzle(sqlite);
    await migrate(context.db, { migrationsFolder: 'drizzle' });
})