import { createId } from "@paralleldrive/cuid2";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import { reactStartCookies } from "better-auth/react-start";
import { db } from "~/db";
import { accounts, sessions, users, verifications } from "~/db/schema/auth";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
		usePlural: true,
		schema: {
			users,
			sessions,
			accounts,
			verifications,
		},
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID! as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET! as string,
		},
	},
	session: {
		expiresIn: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 1 day
	},

	advanced: {
		database: {
			generateId() {
				return createId(); // Use cuid2 like in other tables
			},
		},
	},
	plugins: [admin(), reactStartCookies()],
});
