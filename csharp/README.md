# C#

Kata C# con xUnit, Shouldly y NSubstitute.

## Requisitos

- .NET 10.
- Docker.

Se recomienda el instalador oficial de .NET o `mise`.

## Tests

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task build`, `task clean` y `task docker:test`.

```bash
```

## Docker

```bash
```

## Resultado actual de tests

El scaffold contiene un test RED intencionado: `firstTest` vale `false` y la asercion espera `true`. Por eso `dotnet test` y Docker ejecutan 1 test y devuelven fallo por la razon correcta. El test no se cambia porque forma parte del ejercicio de la plantilla.

## Troubleshooting

- Borra `bin` y `obj` si hay assets de restore antiguos.
- Comprueba `dotnet --info` y que el SDK 10 este disponible.
- FluentAssertions no se usa: fue sustituido por Shouldly por su cambio de licencia comercial.

## Dependencias directas

Shouldly, Microsoft.NET.Test.Sdk, NSubstitute, xUnit, xUnit runner y coverlet collector.
