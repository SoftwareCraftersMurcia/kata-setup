# Python

Kata Python aislada gestionada con `uv`.

## Requisitos

- Python 3.14.
- uv 0.12.1 o posterior.
- Docker.

`uv` gestiona la version de Python, el entorno virtual, las dependencias y el lockfile. Se recomienda usar `uv python install 3.14`.

## Instalacion local

```bash
uv python install 3.14
uv sync --locked
```

Las dependencias de runtime estan en `project.dependencies` y las de desarrollo en `dependency-groups.dev`. `uv.lock` contiene la resolucion completa.

## Tests y CLI

Desde esta carpeta puedes usar el Taskfile local: `task install`, `task test`, `task cli`, `task coverage`, `task lint`, `task typecheck` y `task docker:test`.

```bash
uv run pytest
uv run python -m pytest
uv run pytest --cov=src
uv run flake8 src tests
uv run mypy src
```

## Docker

```bash
docker build --pull --target test -t kata-python .
docker run --rm kata-python
```

## Troubleshooting

- Si `uv` no existe, instalalo desde su instalador oficial y comprueba `uv --version`.
- Si el lockfile no coincide, ejecuta `uv lock` y revisa el diff.
- Si una dependencia no tiene wheel para Python 3.14, el error se documentara y se actualizara la dependencia compatible; no se ocultara instalando una version antigua.
- Si un test no se descubre, ejecuta `uv run pytest --collect-only`.

## Dependencias directas

El inventario completo de dependencias declaradas se conserva en `pyproject.toml`; las transitivas y hashes estan en `uv.lock`. Se mantienen las dependencias heredadas de Pipenv y se clasifican por runtime y desarrollo. Se eliminaron las entradas invalidas `install`, `typed-ast`, `docker-compose`, `dockerpty` y `pytest-docker-compose`: las dos primeras no son compatibles con Python 3.14 y las restantes son herramientas Compose legacy incompatibles con PyYAML moderno y con la decision del repositorio de no usar Compose.
