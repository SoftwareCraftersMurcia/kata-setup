# Requisitos
Es recomendable tener instalado nvm (Node Version Manager)

- [nvm para Linux/macOS](https://github.com/nvm-sh/nvm#installing-and-updating)
- [nvm para Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)

# Instalación
> Si se encuentra cualquier problema durante la instalación revisar la sección de *Solución de problemas* para resolver los problemas mas comunes.

En la carpeta `typescript` de este proyecto (en la que se encuentra este fichero README.md) ejecutar el siguiente comando para descargar la versión de node correspondiente al proyecto.
```bash
nvm install
```

Una vez descargada esta versión marcarla como activa en la sesión de consola actual mediante el comando:
```bash
nvm use
```

Por último hay que descargar las dependencias del proyecto, esto se puede hacer tanto con `npm` o con `yarn` a vuestra elección.
```bash
npm install
# --- o ---
yarn install
```

# Scripts
Todos los scripts pueden lanzarse con `npm` o con `yarn`, si quieres saber mas sobre estos puedes revisar la sección `scripts` del fichero `package.json`.

> Recuerda que todos estos comandos deben lanzarse en la carpeta `typescript` de este proyecto.

## Lanzar los tests
```bash
npm run test
# --- o ---
yarn test
```

## Calcular la cobertura de los tests
```bash
npm run coverage
# --- o ---
yarn coverage
```

> Encontrarás el reporte de cobertura generado en el fichero `coverage/lcov-report/index.html`.

## Lanzar los tests de forma automática
```bash
npm run test:watch
# --- o ---
yarn test:watch
```

> Lanzará los tests de forma automática siempre que se modifique el código de los tests o de producción.

# Solución de problemas
## No reconoce el comando `nvm`
Si acabas de instalar nvm es posible que tengas que reiniciar el terminal para que te detecte el nuevo comando.

## `nvm install`/`nvm use` me pide que le especifique la versión
Asegúrate de estar dentro de la carpeta `typescript` de este proyecto.

Si no detectase automáticamente la versión, revisarla en el fichero `.nvmrc` y escribir `nvm install [version]`/`nvm use [version]` en su lugar.

## No reconoce el comando `yarn`
Se puede instalar `yarn` tan fácil como ejecutar el siguiente comando:
```bash
npm install --global yarn
```

## No encuentra el fichero package.json al ejecutar cualquier comando con `npm` o `yarn`
Asegúrate de que te encuentras dentro del directorio `typescript` que se encuentra en la raíz de este proyecto.