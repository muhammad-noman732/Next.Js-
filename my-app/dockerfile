# --- STAGE 0: The Base ---
FROM node:18-alpine AS base

# --- STAGE 1: Install Dependencies ---
FROM base AS deps
# The "translator used for Alpine Linux
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# --- STAGE 2: Build the Next.js App ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# This compiles Next.js into the highly optimized 'standalone' folder
RUN npm run build

# --- STAGE 3: Secure Production Runner ---
FROM base AS runner
WORKDIR /app

# Put Node in production mode
ENV NODE_ENV=production

# 1. Create the restricted user and group
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 2. Copy ONLY the compiled files from the builder
COPY --from=builder /app/public ./public

# Set permissions for the Next.js cache folder
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the standalone Next.js server files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 3. DROP ROOT PRIVILEGES - Switch to the restricted user
USER nextjs

# 4. Open the door and start the server
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]