# Tanstack FullStack

This site is built with TanStack Start!

- [TanStack Start Docs](https://tanstack.com/start)

This template uses the following tools:

- [Bun](https://bun.sh/docs) as the package manager & runtime
- [Biome](https://biomejs.dev/) as the linter & formatter
- [Lefthook](https://lefthook.dev/) as the git hooks manager
- [Tailwind CSS](https://tailwindcss.com/) as the CSS framework
- [tRPC](https://trpc.io/) as the backend
- [Tanstack Query](https://tanstack.com/query/latest) as the server state manager
- [Turso Database](https://turso.tech) as the Cloud SQLite provider
- [Drizzle ORM](https://drizzle.team) as the ORM
- [Better Auth](https://www.better-auth.com/) as the Auth solution

## Installation

To setup a project from this template, the simplest way is to use gitpick:

```sh
git clone https://github.com/depsimon/tanstack-basic.git my-app
cd my-app
bun install
touch database.sql # Create locale database
cp .env.example .env # Set your environment variables
```

## Development

From your terminal:

```sh
bun install
bun dev
```

This starts your app in development mode, rebuilding assets on file changes.
