import type { Config } from 'drizzle-kit';

export default {
    schema: "./dist/db/schema/*",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 5432,
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "password",
        database: process.env.DB_DATABASE || "hobby",
    }
} satisfies Config;