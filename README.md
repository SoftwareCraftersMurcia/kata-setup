# Base para hacer tests

Configuración básica para empezar a hacer una kata o aprender a hacer tests en los siguientes lenguajes:

- PHP: Estilos clásico y mockist
- Javascript: Estilos clásico y mockist
- Java: Estilo clásico y mockist
- Ruby: Estilo clásico

Se puede descargar la última versión en [zip](https://github.com/luisrovirosa/test-bootstrap/archive/master.zip) o usando [git](https://github.com/luisrovirosa/test-bootstrap).

# Configuración específica por lenguaje

## PHP
1. Instalar [composer](https://getcomposer.org/) `curl -sS https://getcomposer.org/installer | php`
2. `composer install` (estando en la carpeta php)
3. `./vendor/bin/phpunit`

## Javascript
1. Instalar [Node](http://nodejs.org/)
2. `npm install` (Estando en la carpeta javascript)
3. `sh run-test.sh` (Alternativamente el contenido del fichero: `./node_modules/.bin/jasmine`)

## Java
1. Instalar [JUnit](http://junit.org/)
2. Instalar [Mockito](http://mockito.org/) para el mockist. [Download files](https://code.google.com/p/mockito/downloads/list).
2. Ejecutar desde Eclipse u otro entorno de desarrollo.

## Ruby
1. ruby test/my_class_test.rb (Estando en la carpeta ruby)

# Documentación
## Javascript
[Jasmine](http://jasmine.github.io/2.0/introduction.html)

## PHP
[PHPUnit](http://phpunit.de/manual/current/en/writing-tests-for-phpunit.html)

[Prophecy](https://github.com/phpspec/prophecy) para Mocks

## Java
[JUnit](https://github.com/junit-team/junit/wiki)

[Mockito](http://site.mockito.org/mockito/docs/current/org/mockito/Mockito.html)

## Ruby
[Guía básica](http://en.wikibooks.org/wiki/Ruby_Programming/Unit_testing)