import "dotenv/config"
import type { Config } from "drizzle-kit";

export default {
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    driver: 'pg',
    dbCredentials: {
      connectionString: process.env.POSTGRES_URL!,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE
    }
  } satisfies Config;