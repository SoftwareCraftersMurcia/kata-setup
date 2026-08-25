# syntax=docker/dockerfile:1

FROM python:3.14-slim-bookworm AS base
WORKDIR /workspace
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy
COPY --from=ghcr.io/astral-sh/uv:0.12.1 /uv /uvx /bin/

FROM base AS dependencies
COPY pyproject.toml uv.lock ./
RUN uv sync --locked --no-install-project

FROM dependencies AS test
COPY . .
RUN uv sync --locked
CMD ["uv", "run", "pytest"]
