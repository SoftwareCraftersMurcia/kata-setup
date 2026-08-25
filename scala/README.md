# Scala

Kata Scala 3 con sbt, MUnit, MUnit ScalaCheck y Scalafmt.

## Requisitos

- sbt 1.11.7 mediante wrapper/configuracion del proyecto.
- Scala 3.8.4 mediante `scalaVersion` en sbt.
- JDK 26.
- Docker.

Se recomienda SDKMAN! para Java y sbt.

## Tests

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task format:check` y `task docker:test`.

```bash
sbt test
sbt scalafmtCheck
```

## Docker

```bash
```

## Troubleshooting

- Borra `target` y `project/target` si sbt conserva artefactos incompatibles.
- Comprueba Java 26 con `java -version`.
- Si cambia Scala, revisa `scalaVersion`, el dialecto de Scalafmt y las dependencias `%%`.

## Dependencias directas

Scala 3, MUnit, MUnit ScalaCheck, sbt-scalafmt y Scalafmt.
