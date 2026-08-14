# syntax=docker/dockerfile:1

FROM eclipse-temurin:26-jdk AS test
WORKDIR /workspace
COPY . .
RUN chmod +x gradlew
CMD ["./gradlew", "test", "--no-daemon"]
