import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	title: text("title", { length: 250 }),
	deletedAt: text(),
	updatedAt: text().$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
	createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
});
