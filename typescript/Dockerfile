# syntax=docker/dockerfile:1

FROM node:26-bookworm-slim AS base
WORKDIR /workspace
RUN npm install --global pnpm@11.15.1

FROM base AS dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

FROM dependencies AS test
COPY --chown=node:node . .
RUN chown node:node /workspace
USER node
CMD ["pnpm", "test"]
