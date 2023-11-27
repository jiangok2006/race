import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";
dotenv.config();

export default {
    schema: "./app/schema.ts",
    out: "./drizzle",
    driver: 'd1',
} satisfies Config;