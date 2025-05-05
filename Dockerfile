# Use a lightweight base image with Bun
ARG BUN_VERSION=1.2.11
FROM oven/bun:${BUN_VERSION}-alpine AS deps

WORKDIR /app

# Only copy lockfile and manifest to leverage Docker layer caching
COPY bun.lock package.json ./

# Install only dependencies
RUN bun install --frozen-lockfile --ignore-scripts

# Build stage
FROM oven/bun:${BUN_VERSION}-alpine AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/bun.lock ./bun.lock

# Copy the rest of the app and build
COPY . .
RUN bun run build

# Final slim image to serve the app
FROM oven/bun:${BUN_VERSION}-alpine AS runner

WORKDIR /app

# Optionally use a non-root user (ensure your app supports it)
USER bun

# Copy built output and any runtime dependencies
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/drizzle ./drizzle

EXPOSE 3000/tcp

CMD ["bun", "run", ".output/server/index.mjs"]
