# Go

Kata Go con el paquete `testing` de la libreria estandar.

## Requisitos

- Go 1.26.
- Docker.

Se puede usar el toolchain oficial de Go o `mise` para seleccionar la version.

## Tests

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task fmt:check`, `task vet` y `task docker:test`.

```bash
```

## Docker

```bash
```

## Troubleshooting

- Comprueba `go version` y que el modulo actual sea `kata-setup/go`.
- Usa `go test ./...` desde esta carpeta para incluir todos los paquetes.
- Si no hay dependencias externas, `go mod download` no descargara paquetes adicionales.

## Dependencias directas

No hay dependencias externas; usa `testing` y `fmt` de la libreria estandar.
