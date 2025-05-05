import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "turso",
	schema: "./src/db/schema",
	out: "./drizzle",
	casing: "snake_case",
	dbCredentials: {
		url: process.env.DATABASE_URL! as string,
		authToken: process.env.DATABASE_AUTH_TOKEN,
	},
});
