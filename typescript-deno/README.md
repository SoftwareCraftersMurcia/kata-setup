# TypeScript con Deno

Kata TypeScript aislada ejecutada con Deno, imports JSR y tests BDD.

## Requisitos

- Deno 2.9.0 o posterior estable.
- Docker.

Se recomienda instalar Deno mediante su instalador oficial o `mise`. Deno es el runtime, gestor de dependencias y ejecutor de tests del proyecto.

## Instalacion local

```bash
deno --version
```

El lockfile `deno.lock` fija las dependencias JSR resueltas.

## Tests

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task check`, `task lint` y `task docker:test`.

```bash
```

## Docker

```bash
```

## Troubleshooting

- Si `deno` no existe, instala Deno con el instalador oficial o `mise` y reinicia el terminal.
- Si cambia una dependencia JSR, regenera el lockfile con `deno cache --lock=deno.lock`.
- Si el contenedor no puede escribir archivos, revisa el ownership y no montes el proyecto sobre `/workspace`.
- Los permisos del test son explicitos; no se concede acceso de red ni escritura innecesario.

## Dependencias directas

- `jsr:@std/assert`: aserciones.
- `jsr:@std/testing`: helpers BDD `describe` e `it`.

Las versiones transitivas y hashes se encuentran en `deno.lock`.
