import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { z } from "zod";
import { rootDir } from "./paths";

const envType = z.object({
  KEY: z.string().length(32),

  CLIENT_ID: z.string().min(16),
  CLIENT_SECRET: z.string().length(32),
  BOT_TOKEN: z.string().min(50),

  DASHBOARD_URL: z.string().url(),
  API_URL: z.string().url(),

  STAFF: z
    .preprocess(
      (v) =>
        String(v)
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s !== ""),
      z.array(z.string()),
    )
    .optional(),

  DEFAULT_ALLOWED_SERVERS: z
    .preprocess(
      (v) =>
        String(v)
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s !== ""),
      z.array(z.string()),
    )
    .optional(),

  PHISHERMAN_API_KEY: z.string().optional(),

  DEVELOPMENT_MYSQL_PASSWORD: z.string().optional(), // Included here for the DB_PASSWORD default in development
  STANDALONE_MYSQL_PASSWORD: z.string().optional(), // Included here for the DB_PASSWORD default in production

  LIGHTWEIGHT_DB_HOST: z.string().optional(),
  LIGHTWEIGHT_DB_PORT: z.preprocess((v) => Number(v), z.number()).optional(),
  LIGHTWEIGHT_DB_USER: z.string().optional(),
  LIGHTWEIGHT_DB_PASSWORD: z.string().optional(),
  LIGHTWEIGHT_DB_DATABASE: z.string().optional(),

  LIGHTWEIGHT_API_PATH_PREFIX: z.string().optional(),

  HOST_MODE: z.enum(["development", "standalone", "lightweight"]).optional().default("lightweight"),
  DEBUG: z
    .string()
    .optional()
    .transform((str) => str === "true"),
});

let toValidate = { ...process.env };
const envPath = path.join(rootDir, ".env");
if (fs.existsSync(envPath)) {
  const buf = fs.readFileSync(envPath);
  toValidate = { ...toValidate, ...dotenv.parse(buf) };
}

export const env = envType.parse(toValidate);
