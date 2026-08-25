# JavaScript

Kata JavaScript aislada con CommonJS y Vitest. Vite se usa como infraestructura de configuracion de Vitest; no se fuerza un servidor ni un bundle de aplicacion.

## Requisitos

- Node.js 26 o posterior.
- pnpm 11.15.1.
- Docker para la ejecucion aislada.

Se recomienda instalar Node con `nvm` o `fnm`. La version del proyecto esta indicada en `package.json` y el gestor de paquetes en `packageManager`.

## Instalacion local

```bash
corepack enable
pnpm install --frozen-lockfile
```

El lockfile `pnpm-lock.yaml` contiene la resolucion exacta de dependencias y debe mantenerse versionado.

## Tests

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task coverage` y `task docker:test`.

Ejecucion normal mediante el script del proyecto:

```bash
pnpm test
```

Ejecucion directa con la CLI de Vitest:

```bash
pnpm exec vitest run
```

Modo watch y cobertura:

```bash
pnpm test:watch
pnpm coverage
```

## Docker

Construir y ejecutar los tests dentro de una imagen limpia:

```bash
docker build --pull --target test -t kata-javascript .
docker run --rm kata-javascript
```

El contenedor instala desde `pnpm-lock.yaml`, no usa `node_modules` del host y ejecuta como usuario no root.

## Troubleshooting

- Si `pnpm` no existe, ejecuta `corepack enable` con una instalacion de Node compatible.
- Si el lockfile no coincide con `package.json`, ejecuta `pnpm install` y revisa el cambio antes de usar `--frozen-lockfile`.
- Si Docker usa una arquitectura distinta, construye con `docker buildx build --platform linux/amd64` o `linux/arm64`.
- Si el test no se descubre, comprueba que el nombre contiene `.test.` o `.spec.`.

## Dependencias directas

- `@vitest/coverage-v8`: cobertura basada en V8.
- `vite`: configuracion y runtime de build de Vitest.
- `vitest`: framework de tests.

Las dependencias transitivas estan en `pnpm-lock.yaml`.
