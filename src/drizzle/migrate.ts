import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "./drizzle";
import dotenv from "dotenv";

dotenv.config({path: ".env.development.local"});


const main = async () => {
  console.log("migrating...");
  try {
    await migrate(db, { migrationsFolder: "./src/drizzle/migrations" });
  } catch (e) {
    console.log("error--", e);
  }
  process.exit(0);
};
main();



