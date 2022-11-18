# Rock Paper Scissors
We are creating a rock-paper-scissors game, to do so, we create the rules of the game

## Rock Beats Scissors

**Business needs / User story**

```gherkin
As a player
I want the rock to beat scissors
```

**Solution**

```gherkin
Given I have chosen rock
When the opponent chooses scissors
Then I should win
```

```gherkin
Given I have chosen scissors
When the opponent chooses rock
Then the opponent win
```

## Paper Beats Rock

**Business needs / User story**

```
As a player
I want the paper to beat rock
```

**Solution**

```gherkin
Given I have chosen paper
When the opponent chooses rock
Then I should win
```

```gherkin
Given I have chosen rock
When the opponent chooses paper
Then the opponent should win
```

## Scissors Beats Paper

**Business needs / User story**

```
As a player
I want scissors to beat paper
```

**Solution**

```gherkin
Given I have chosen scissors
When the opponent chooses paper
Then I should win
```

```gherkin
Given I have chosen paper
When the opponent chooses scissors
Then the opponent should win
```

## Same Moves Result in Draw

**Business need / User story**

```
As a player
I want the same moves to draw
```

**Solution**

```gherkin
Given I have chosen rock
When the opponent chooses rock
Then it should be a draw
```

```gherkin
Given I have chosen scissors
When the opponent chooses scissors
Then it should be a draw
```

```gherkin
Given I have chosen paper
When the opponent chooses paper
Then it should be a draw
```

## Valid API

```java
public class RockPaperScissors {
    public String rockPaperSissors(String movePlayer1, String movePlayer2) {}
}
```

```java
public class RockPaperScissors {
    public GameStatus rockPaperSissors(Moves movePlayer1, Moves movePlayer2) {}
}
```

# Base para hacer tests

Configuración básica para empezar a hacer una kata o aprender a hacer tests en los siguientes lenguajes:

- PHP y PHPUnit
- Javascript con Jest
- Typescript con Deno
- Java, Junit y Mockito
- Scala, Munit y Scalacheck
- Kotlin, JUnit5 y MockK
- C#, xUnit (con FluentAsertion) y NSubstitute (para mock)

# Configuración específica por lenguaje

## PHP
1. Instalar [composer](https://getcomposer.org/) `curl -sS https://getcomposer.org/installer | php`
2. `composer install` (estando en la carpeta php)
3. `./vendor/bin/phpunit`

## Javascript
1. Instalar [Node](http://nodejs.org/)
2. `npm install` (Estando en la carpeta javascript)
3. `npm test`

## Typescript
1. Instalar [Deno](https://deno.land/#installation)
2. `deno test` (Estando en la carpeta typescript)

## Java
1. Instalar las dependencias y tests con Maven [mvn test]
2. Ejecutar los tests con el IDE

## Scala
1. `sbt` (en la carpeta scala)
2. `~test` para ejecutar los test en hot reload

### Linux/Mac
1. Instalar [SDKMan](https://sdkman.io/)
2. `sdk install java 11.0.12-open` instala OpenJDK
3. `sdk install sbt` una vez instalado SDKMan

### Windows
1. Instalar [OpenJDK](https://docs.microsoft.com/es-es/java/openjdk/download#openjdk-110141-lts--see-previous-releases)
2. Instalar [SBT](https://www.scala-sbt.org/download.html)

### Visual Studio Code
1. Descargar [Visual Studio Code](https://code.visualstudio.com/)
2. Instalar para VS Code [Metals](https://scalameta.org/metals/docs/editors/vscode)

## Kotlin
1. Por consola: Puedes instalar dependencias y lanzar los tests con `gradlew test`
2. Usando IDE: Simplemente abre el proyecto desde el raiz de la plantilla Kotlin

## C#
1. Instalar Microsoft Visual Studio Community 2022
2. Abre el proyecto y se descargaran automáticamente los paquetes Nuguet necesarios

## Python
1. Instalar python 3.x
2. Una vez descargado el código fuente dentro de la carpeta */python/ creamos un virtual enviroment:
3. `python3 -m venv env`
4. Activamos en virtual environment:
- windows: `.\env\Scripts\activate.bat`
- linux/mac: `source env/bin/activate `
5. `pytest` para ejecutar los tests.


# Documentación
## Javascript
[Jest](https://jestjs.io)

## Typescript
[Deno](https://deno.land/manual)

[BDD module](https://deno.land/manual/testing/behavior_driven_development)

[Expect module](https://deno.land/x/expect)

## PHP
[PHPUnit](https://phpunit.readthedocs.io/)

[Prophecy](https://github.com/phpspec/prophecy) para dobles de prueba

## Java
[JUnit](https://github.com/junit-team/junit/wiki)

[Mockito](http://site.mockito.org/mockito/docs/current/org/mockito/Mockito.html)

## Scala

[Munit](https://scalameta.org/munit/docs/tests.html)

[Scalacheck](https://github.com/typelevel/scalacheck/blob/main/doc/UserGuide.md) para testing basado en propiedades

## Kotlin
[JUnit5](https://junit.org/junit5/)

[MockK](https://mockk.io/)

## C#
[xUnit](https://xunit.net/)
[NSubstitute](https://nsubstitute.github.io/help.html)
[FluentAssertions](https://fluentassertions.com/introduction)
