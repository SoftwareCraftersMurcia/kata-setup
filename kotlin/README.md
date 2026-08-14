# Kotlin

Kata Kotlin/JVM con JUnit y MockK, gestionada por Gradle Wrapper.

## Requisitos

- Kotlin 2.4.10.
- JDK 26.
- Gradle Wrapper 9.1.0.
- Docker.

Se recomienda SDKMAN! para Java y Kotlin.

## Tests

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task clean` y `task docker:test`.

```bash
./gradlew test
```

## Docker

```bash
```

## Troubleshooting

- Ejecuta `./gradlew --stop` si un daemon antiguo interfiere.
- Borra `.gradle` y `build` si hay caches incompatibles.
- Comprueba `java -version` y el target JVM configurado.

## Dependencias directas

Kotlin Test y MockK. Las dependencias del wrapper y Gradle estan fijadas por los archivos de Gradle.
