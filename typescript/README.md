# TypeScript

Kata TypeScript aislada con type checking estricto, Vitest y Vite. Vite proporciona la infraestructura de configuracion de Vitest; no se añade una aplicacion web artificial.

## Requisitos

- Node.js 26 o posterior.
- pnpm 11.15.1.
- Docker.

Se recomienda `nvm` o `fnm` para seleccionar Node. El gestor de dependencias es pnpm.

## Instalacion local

```bash
corepack enable
pnpm install --frozen-lockfile
```

`pnpm-lock.yaml` fija la resolucion completa de dependencias.

## Tests y calidad

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task typecheck`, `task lint` y `task docker:test`.

```bash
pnpm test
pnpm exec vitest run
pnpm test:watch
pnpm coverage
pnpm lint
pnpm exec tsc --noEmit
```

El script `test` ejecuta primero TypeScript y despues Vitest. Un error de tipos impide ejecutar los tests, de forma intencionada.

## Docker

```bash
docker build --pull --target test -t kata-typescript .
docker run --rm kata-typescript
```

La imagen instala desde el lockfile y ejecuta como usuario no root.

## Troubleshooting

- Si `pnpm` no existe, ejecuta `corepack enable` o instala pnpm 11.15.1.
- Si aparece un warning de engine, activa Node 26 con `nvm use` o `fnm use`.
- Si el lockfile no coincide, ejecuta `pnpm install` y revisa el diff.
- Si el test no se descubre, comprueba el sufijo `.spec.ts` o `.test.ts`.
- Si falla el type check, ejecuta `pnpm exec tsc --noEmit` para aislar el error.

## Dependencias directas

- `@vitest/coverage-v8`: cobertura V8.
- `ts-standard`: lint TypeScript existente.
- `typescript`: compilador y type checking.
- `vite`: infraestructura de Vitest.
- `vitest`: framework de tests.

Las dependencias transitivas estan en `pnpm-lock.yaml`.
