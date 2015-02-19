# Base para hacer tests

Configuración básica para empezar a hacer una kata o aprender a hacer tests en los siguientes lenguajes:

- Javascript
- PHP
- Java
- Ruby

Se puede descargar la última versión en [zip](https://github.com/luisrovirosa/test-bootstrap/archive/master.zip) o usando [git](https://github.com/luisrovirosa/test-bootstrap).

# Configuración específica por lenguaje
## Javascript
1. Instalar [Node](http://nodejs.org/)
2. `npm install` (Estando en la carpeta javascript)
3. `sh run-test.sh` (Alternativamente el contenido del fichero: `./node_modules/.bin/jasmine-node test/ --autotest --watch src/`)

## PHP
1. Instalar [composer](https://getcomposer.org/) `curl -sS https://getcomposer.org/installer | php`
2. `composer install` (estando en la carpeta php)
3. `./vendor/bin/phpunit`

## Java
1. Instalar [JUnit](http://junit.org/)
2. Ejecutar desde Eclipse u otro entorno de desarrollo.

## Ruby
1. ruby test/my_class_test.rb (Estando en la carpeta ruby)

# Documentación
## Javascript
[Jasmine](http://jasmine.github.io/2.0/introduction.html)
## PHP
[PHPUnit](http://phpunit.de/manual/current/en/writing-tests-for-phpunit.html)
## Java
[JUnit](https://github.com/junit-team/junit/wiki)
## Ruby
[Guía básica](http://en.wikibooks.org/wiki/Ruby_Programming/Unit_testing)