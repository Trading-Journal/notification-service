FROM node:22-slim AS builder
WORKDIR /build
COPY package*.json ./
RUN npm install

FROM node:22-slim
RUN apt-get update && apt-get install -y curl --no-install-recommends && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=builder /build/node_modules ./node_modules
COPY src ./src
COPY package.json ./
USER node
EXPOSE 8093
HEALTHCHECK CMD curl -f http://localhost:8093/actuator/health/live || exit 1
ENTRYPOINT ["node", "src/index.js"]
