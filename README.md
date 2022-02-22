
## Descripción

El proyecto lo arme utilizando NestJS un framework con typeScript -> https://nestjs.com.

## Installación

Clonar el proyecto del repositorio. Situarse sobre la carpeta del mismo y ejecutar:

```bash
$ npm install
```

## Para correr la app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Configuración de entorno

Las configuraciones de entorno se pueden cambiar desde el archivo app.config.ts ubicado en /space-x/src/config/app.config.ts

```ts
{
  port: 3000,
  apiTrello: {
    url: 'https://api.trello.com/1',
    timeout: 7000,
    maxRedirects: 3,
    key: '6bf4d17200908d127201779dd73e9aad',
    token: '5fb2f3670202bd8873c49c16632664cdfb876fe32db4ae47d2234e184122c74f',
    idList: '62101d9051c84b1d89319761',
    idBoard: '62101c96a9bb7d34db53d278',
    shuffleMembers: true,
  },
}
```

#### Parametros:

* port <int>: Indica en que puerto se va a iniciar la applicación.
 
* apiTrello: Indica las configuraciones que se relacionan a la api de trello.

* key <string>: Indica la auth_key del usuario de trello con el que desea realizar operaciones.

* token <string>: Indica la auth_token del usuario de trello con el que desea realizar operaciones.

* idList <string>: Indica el id que representa la lista/columna de trello sobre la cual se van a ejecutar las operaciones. Por ahora la aplicación sólo permite trabajar con una columna por vez.

* idBoard <string>: Indica el id que representa el tablero de trello sobre la cual se van a ejecutar las operaciones. Por ahora la aplicación sólo permite trabajar con un tablero por vez.

* suffleMembers: Este booleano si esta en true indica que asignara aleatoreamente las tarjetas creadas entre los usuarios del tablero sobre el cual se esta trabajando. Sólo si el tipo de carta lo refleja.

## Author
- [Javier A. Torre](javier.torre91@gmail.com)
