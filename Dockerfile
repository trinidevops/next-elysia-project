# install dependencies into temp directory
# this will cache them and speed up future builds
FROM oven/bun:alpine AS base
WORKDIR /usr/src/app

# Copy package files
COPY package.json bun.lockb* ./


# Install dependencies (including dev)
RUN bun install --frozen-lockfile

# Copy all project files
COPY . .


# Expose Next.js port
EXPOSE 3000

# Run the app
CMD ["bun", "run", "dev"]