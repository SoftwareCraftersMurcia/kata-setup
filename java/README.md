# Java

Kata Java con JUnit, AssertJ, Hamcrest y Mockito, gestionada por Maven Wrapper.

## Requisitos

- JDK 26.
- Maven Wrapper incluido.
- Docker.

Se recomienda SDKMAN! para instalar y seleccionar Java.

## Instalacion y tests

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task clean` y `task docker:test`.

```bash
./mvnw -B test
./mvnw -B clean test
```

## Docker

```bash
```

## Troubleshooting

- Si falla Java, comprueba `java -version` y `JAVA_HOME`.
- El wrapper descarga Maven 3.9.11; no es necesario instalar Maven globalmente.
- Borra `target` si existen artefactos de una compilacion anterior.

## Dependencias directas

JUnit Jupiter, AssertJ, Hamcrest Core, Hamcrest Library, Mockito Core y Maven Surefire. Las versiones estan en `pom.xml` y Maven resuelve las transitivas durante la compilacion. Docker usa Maven 3.9.11 porque el wrapper binario no esta versionado en el repositorio.
