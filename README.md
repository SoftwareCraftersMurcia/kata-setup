# Kata Setup

Plantillas aisladas para practicar TDD y testing en JavaScript, TypeScript, Deno, Python, PHP, Java, Scala, Kotlin, C# y Go.

## Experiencia rapida

Instala [Task](https://taskfile.dev/installation/) y Docker. Cada proyecto es independiente y tiene su propio `Taskfile.yml` con las tareas de su ecosistema. El `Taskfile.yml` raiz ofrece ademas una interfaz uniforme.

## Ayuda de Task

Desde la raiz:

```bash
task help
task --list
```

Desde cualquier proyecto:

```bash
cd python
task help
task --list
```

La tarea `help` muestra las operaciones disponibles y sus descripciones. El flujo habitual es:

Desde la raiz, el flujo uniforme es:

```bash
task install:javascript
task test:javascript
task docker:test:javascript
task test:all
task docker:test:all
```

`task --list-all` muestra todas las tareas con nombres compuestos.

Tambien puedes entrar en cualquier proyecto y ejecutar directamente:

```bash
cd python
task install
task test
task docker:test
```

Los comandos directos y el troubleshooting completo estan en el `README.md` de cada carpeta.

## Proyectos

- `javascript`: Node 26, pnpm, Vitest y Vite.
- `typescript`: Node 26, pnpm, TypeScript, Vitest y Vite.
- `typescript-deno`: Deno 2.9, JSR y `deno.lock`.
- `python`: Python 3.14 y uv.
- `php`: PHP 8.5, Composer, PHPUnit e Infection.
- `java`: JDK 26 y Maven.
- `scala`: Scala 3.8.4, sbt y MUnit.
- `kotlin`: Kotlin 2.4.10, Gradle y MockK.
- `csharp`: .NET 10, xUnit, Shouldly y NSubstitute.
- `go`: Go 1.26 y testing de la libreria estandar.

## Gestores locales

- Node: `nvm` o `fnm`.
- Python: `uv`.
- Java, Kotlin y Scala: SDKMAN!.
- Go, PHP y .NET: gestor oficial o `mise` cuando sea compatible.
- Deno: instalador oficial o `mise`.

Docker es autonomo y no depende de estos gestores del host.

## Verificacion

Cada fase se valida localmente, mediante CLI y desde Docker. Los resultados actuales son:

| Proyecto | Local/CLI | Docker | Resultado |
|---|---|---|---|
| JavaScript | OK | OK | 1 test pasa |
| TypeScript | OK | OK | type check y 1 test pasan |
| Deno | Pendiente: Deno no instalado en host | OK | 1 test pasa |
| Python | OK | OK | 1 test pasa |
| PHP | Pendiente: host usa PHP 8.3 | OK | 1 test pasa |
| Java | Pendiente: Maven/JDK objetivo no instalado | OK | 1 test pasa |
| Scala | Pendiente: sbt no instalado | OK | 1 test pasa |
| Kotlin | Pendiente: toolchain no instalado | OK | tests pasan |
| C# | Pendiente: SDK no instalado | RED esperado | 1 test falla por `false` esperado `true` |
| Go | Pendiente: no se ha ejecutado localmente en esta sesion | OK | 1 test pasa |

El fallo C# es intencionado por el scaffold y esta documentado en `csharp/README.md`.

## Politicas

- Versiones estables actuales, sin previews.
- Lockfiles versionados.
- No se usa npm en los proyectos Node; se usa pnpm.
- No se usa Pipenv; Python usa uv.
- No se usa Docker Compose.
- No se usa GitHub Actions.
- No se usa FluentAssertions; C# usa Shouldly.

## Herramientas y decisiones

- [Task](https://taskfile.dev/): unifica las operaciones habituales sin ocultar los comandos propios de cada lenguaje. Cada proyecto tiene su propio `Taskfile.yml` y la raiz solo los orquesta.
- [Docker](https://docs.docker.com/): permite ejecutar cada kata en un entorno aislado y reproducible. Los Dockerfiles usan tags de version explicitos, sin digests SHA-256, segun la politica del repositorio.
- [pnpm](https://pnpm.io/): sustituye npm en JavaScript y TypeScript por su store y su instalacion basada en lockfile, reduciendo duplicacion y mejorando la trazabilidad de dependencias.
- [Vitest](https://vitest.dev/): sustituye Jest por un runner moderno integrado con el ecosistema Vite y adecuado para tests JavaScript/TypeScript.
- [Vite](https://vite.dev/): proporciona la infraestructura de configuracion y transformacion que Vitest utiliza; no se introduce un servidor web innecesario en las katas.
- [Deno](https://docs.deno.com/runtime/): ejecuta la kata TypeScript aislada con permisos explicitos y lockfile propio.
- [JSR](https://jsr.io/): proporciona los modulos modernos de aserciones y testing usados por Deno.
- [uv](https://docs.astral.sh/uv/): sustituye Pipenv para gestionar Python, entornos, versiones, dependencias y `uv.lock` desde una sola herramienta.
- [Composer](https://getcomposer.org/doc/01-basic-usage.md): resuelve PHP y conserva `composer.lock` para instalaciones reproducibles.
- [PHPUnit](https://phpunit.de/documentation.html): framework oficial de tests PHP; el test usa atributos compatibles con PHPUnit 12.
- [Infection](https://infection.github.io/): mantiene mutation testing en PHP.
- [Maven](https://maven.apache.org/guides/): gestiona Java y sus dependencias de test.
- [JUnit](https://junit.org/junit5/): framework de testing Java actualizado.
- [Scala](https://www.scala-lang.org/): el proyecto se migro a Scala 3.
- [sbt](https://www.scala-sbt.org/): build tool de Scala y resolucion de sus dependencias.
- [MUnit](https://scalameta.org/munit/): framework de tests Scala.
- [Kotlin](https://kotlinlang.org/): compilador y plugin JVM actualizado.
- [Gradle](https://gradle.org/): wrapper actualizado para construir y ejecutar Kotlin.
- [MockK](https://mockk.io/): mocking para tests Kotlin.
- [.NET](https://dotnet.microsoft.com/): runtime y SDK actualizado a .NET 10.
- [xUnit.net](https://xunit.net/): framework de tests C#.
- [Shouldly](https://shouldly.readthedocs.io/): sustituto de FluentAssertions para evitar una dependencia con licencia comercial para uso comercial.
- [NSubstitute](https://nsubstitute.github.io/): mocking en C#.
- [Go](https://go.dev/doc/): runtime y toolchain Go actualizado; los tests usan el paquete estandar `testing`.

