import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompilationTask

plugins {
    kotlin("jvm") version "2.4.10"
    application
}

group = "com.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

var mockKversion = "1.14.9"

dependencies {
    testImplementation(kotlin("test"))
    testImplementation("io.mockk:mockk:$mockKversion")
}

tasks.test {
    useJUnitPlatform()
}

kotlin {
    jvmToolchain(26)
    compilerOptions {
        jvmTarget.set(JvmTarget.JVM_26)
    }
}

application {
    mainClass.set("MainKt")
}
