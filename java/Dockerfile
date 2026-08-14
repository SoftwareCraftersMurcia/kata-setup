# syntax=docker/dockerfile:1

FROM eclipse-temurin:26-jdk AS test
WORKDIR /workspace
RUN apt-get update && apt-get install -y --no-install-recommends curl tar \
    && curl -fsSL https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.11/apache-maven-3.9.11-bin.tar.gz \
    | tar -xz -C /opt \
    && rm -rf /var/lib/apt/lists/*
ENV PATH="/opt/apache-maven-3.9.11/bin:${PATH}"
COPY pom.xml ./
RUN mvn -B dependency:go-offline
COPY src ./src
CMD ["mvn", "-B", "test"]
