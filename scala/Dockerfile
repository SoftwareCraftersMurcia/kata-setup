# syntax=docker/dockerfile:1

FROM eclipse-temurin:26-jdk AS test
WORKDIR /workspace
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates gzip \
    && curl -fsSL https://github.com/sbt/sbt/releases/download/v1.11.7/sbt-1.11.7.tgz \
    | tar -xz -C /opt \
    && rm -rf /var/lib/apt/lists/*
ENV PATH="/opt/sbt/bin:${PATH}"
COPY . .
CMD ["sbt", "test"]
