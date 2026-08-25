# syntax=docker/dockerfile:1

FROM eclipse-temurin:26-jdk AS test
WORKDIR /workspace
ADD https://github.com/sbt/sbt/releases/download/v1.11.7/sbt-1.11.7.tgz /tmp/
RUN tar -xzf /tmp/sbt-1.11.7.tgz -C /opt \
    && rm /tmp/sbt-1.11.7.tgz
ENV PATH="/opt/sbt/bin:${PATH}"
COPY . .
CMD ["sbt", "test"]
