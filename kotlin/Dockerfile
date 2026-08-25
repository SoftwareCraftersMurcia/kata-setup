# syntax=docker/dockerfile:1

FROM eclipse-temurin:26-jdk AS test
WORKDIR /workspace
COPY gradle gradle
COPY gradlew settings.gradle.kts build.gradle.kts gradle.properties ./
RUN chmod +x gradlew
RUN ./gradlew dependencies --no-daemon
COPY src src
RUN ./gradlew test --no-daemon
CMD ["./gradlew", "test", "--no-daemon"]
