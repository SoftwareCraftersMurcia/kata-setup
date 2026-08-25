# syntax=docker/dockerfile:1

FROM eclipse-temurin:26-jdk AS test
WORKDIR /workspace
ADD https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.11/apache-maven-3.9.11-bin.tar.gz /tmp/
RUN tar -xzf /tmp/apache-maven-3.9.11-bin.tar.gz -C /opt \
    && rm /tmp/apache-maven-3.9.11-bin.tar.gz
ENV PATH="/opt/apache-maven-3.9.11/bin:${PATH}"
COPY pom.xml ./
RUN mvn -B dependency:go-offline
COPY src ./src
CMD ["mvn", "-B", "test"]
