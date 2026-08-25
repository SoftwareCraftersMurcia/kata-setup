# syntax=docker/dockerfile:1

FROM denoland/deno:2.9.0 AS dependencies
WORKDIR /workspace
COPY deno.json ./
COPY deno.lock ./
COPY src ./src
COPY test ./test
RUN deno cache --frozen --lock=deno.lock src/kata.ts test/kata.test.ts

FROM denoland/deno:2.9.0 AS test
WORKDIR /workspace
COPY --from=dependencies --chown=deno:deno /workspace .
USER deno
CMD ["deno", "task", "test"]
