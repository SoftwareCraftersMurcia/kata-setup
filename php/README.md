# PHP

Kata PHP con PHPUnit e Infection.

## Requisitos

- PHP 8.5.
- Composer 2.9 o posterior.
- Docker.

Se recomienda `mise` o `phpenv` para seleccionar PHP localmente.

## Instalacion local

```bash
composer install
```

`composer.lock` fija la resolucion completa de dependencias.

## Tests y calidad

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task coverage`, `task mutation`, `task audit` y `task docker:test`.

```bash
vendor/bin/phpunit
composer test
composer test-coverage
composer test-all
```

## Docker

```bash
```

## Troubleshooting

- Si falta una extension PHP, usa Docker o instala la extension requerida por Composer.
- Si Composer detecta cambios en el lockfile, ejecuta `composer update` y revisa el diff.
- Infection requiere una ejecucion de PHPUnit correcta antes de analizar mutaciones.

## Dependencias directas

- `php`: runtime.
- `phpunit/phpunit`: framework de tests.
- `infection/codeception-adapter`: adapter de Infection heredado y verificado durante la instalacion.
- `infection/infection`: mutation testing.

Las transitivas estan en `composer.lock`.
