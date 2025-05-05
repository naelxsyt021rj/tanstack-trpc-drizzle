import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

const db = drizzle({
	casing: "snake_case",
	connection: {
		url: process.env.DATABASE_URL! as string,
		authToken: process.env.DATABASE_AUTH_TOKEN,
	},
});

await migrate(db, { migrationsFolder: "drizzle" });

export { db };
