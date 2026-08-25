# Kata Setup

Plantillas aisladas para practicar TDD y testing en JavaScript, TypeScript, Deno, Python, PHP, Java, Scala, Kotlin, C# y Go.

## Experiencia rapida

Instala [mise](https://mise.jdx.dev/installing-mise), [Task](https://taskfile.dev/installation/) y Docker. Cada proyecto es independiente y tiene su propio `mise.toml` y `Taskfile.yml` con las tareas de su ecosistema. Los `mise.toml` gestionan las versiones de las herramientas; el `Taskfile.yml` raiz ofrece una interfaz uniforme.

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

## Experiencia con mise

[mise](https://mise.jdx.dev/) gestiona las versiones de todas las herramientas desde archivos `mise.toml`. Cada sub-proyecto declara sus herramientas y tareas en su propio `mise.toml`.

### Instalacion

```bash
curl https://mise.run | sh
```

### Activacion

```bash
# Bash
echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc

# Zsh
echo 'eval "$(~/.local/bin/mise activate zsh)"' >> ~/.zshrc

# Fish
echo '~/.local/bin/mise activate fish | source' >> ~/.config/fish/config.fish
```

Reiniciar la sesion del shell despues de modificar el archivo de configuracion.

### Uso

Desde cualquier sub-proyecto:

```bash
cd javascript
mise install        # instala node y pnpm con las versiones correctas
mise run install    # instala dependencias del proyecto
mise run test       # ejecuta los tests
```

Desde la raiz, entrar en el sub-proyecto deseado:

```bash
cd python
mise install
mise run install
mise run test
```

### Herramientas por sub-proyecto

| Sub-proyecto | Herramientas gestionadas por mise |
|---|---|
| `javascript` | Node.js 26.7.0, pnpm 11.15.1 |
| `typescript` | Node.js 26.7.0, pnpm 11.15.1 |
| `typescript-deno` | Deno 2.9.0 |
| `python` | Python 3.14, uv 0.12.1 |
| `php` | PHP 8.5 |
| `java` | JDK 26 (Eclipse Temurin EA) |
| `kotlin` | JDK 26 (Eclipse Temurin EA) |
| `scala` | JDK 26 (Eclipse Temurin EA), Scala 3.8.4, sbt 1.11.7 |
| `csharp` | .NET SDK 10.0 (preview) |
| `go` | Go 1.26 |

### Notas

- mise gestiona las versiones de los runtimes y herramientas de sistema. Los wrappers de los proyectos (`mvnw`, `gradlew`) siguen gestionando las versiones de los build tools (Maven, Gradle).
- Los archivos `.nvmrc`, `.python-version` y `package.json` se mantienen para compatibilidad con nvm, fnm, uv y otros gestores.
- Docker sigue siendo la validacion reproducible. mise es para desarrollo local.

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

- **[mise](https://mise.jdx.dev/)** (recomendado): gestiona todas las herramientas desde `mise.toml`.
  ```bash
  curl https://mise.run | sh
  eval "$(mise activate bash)"  # o zsh/fish
  cd javascript && mise install
  ```
- Node: `nvm` o `fnm` (alternativa a mise).
- Python: `uv` (alternativa a mise).
- Java, Kotlin y Scala: SDKMAN! (alternativa a mise).
- Go, PHP y .NET: gestor oficial o `mise`.
- Deno: instalador oficial o `mise`.

Docker es autonomo y no depende de estos gestores del host.

## Verificacion

La calidad se verifica ejecutando la tarea `test:<proyecto>` desde la raiz o `task test` dentro del proyecto. La validacion reproducible de cada proyecto se ejecuta tambien en su imagen Docker mediante `docker:test:<proyecto>` o `task docker:test`.

Una validacion completa debe terminar sin errores en `task test:all` y `task docker:test:all`. Los proyectos que incluyen comprobaciones adicionales las exponen en sus tareas locales, como `lint`, `typecheck`, `vet`, `format:check`, `audit` o `mutation`.

## Politicas

- Versiones estables actuales, sin previews.
- Lockfiles versionados.
- No se usa npm en los proyectos Node; se usa pnpm.
- No se usa Pipenv; Python usa uv.
- No se usa Docker Compose.
- No se usa GitHub Actions.
- No se usa FluentAssertions; C# usa Shouldly.

## Herramientas y decisiones

- [mise](https://mise.jdx.dev/): gestiona las versiones de runtimes y herramientas de desarrollo desde archivos `mise.toml` por sub-proyecto. Sustituye la necesidad de multiples gestores (nvm, pyenv, SDKMAN!, etc.) con una sola herramienta polyglot.
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

