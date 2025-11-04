# Use the official Bun Alpine image
FROM oven/bun:canary-alpine

WORKDIR /app

# Copy dependency files first (better caching)
COPY package.json bun.lockb* ./


# Install dependencies
RUN bun install

# Copy the rest of your project
COPY . .

# Optional – expose a port if you’re running a server
EXPOSE 3000


# Start the app
CMD ["bun", "run", "dev"]