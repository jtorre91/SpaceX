                                
# Space X

Space-x es una api desarrollada para crear tarjetas en un tablero de Trello. [Desafio](https://doc.clickup.com/p/h/e12h-16043/f3e54f9ffd37f57/e12h-16043)

## Instalación

Clonar el proyecto del repositorio. Situarse sobre la carpeta del mismo y ejecutar:

```bash
$ npm install
```

## Run

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

# test coverage
$ npm run test:cov
```

## Instrucciones

La aplicación ya viene con una configuración prestablecida y una colección y ambiente de Postman para que ustedes puedan utilizarla sobre un [tablero](https://trello.com/b/VuTDwWDD/spacex) de trello ya existente. Si no desean utilizar Postman, más abajo detallo unos curls que sirven de ejemplo para realizar las llamadas al servicio.

Sepan que la aplicación es parametrizable para poder poder crear tarjetas en los tableros y listas que usted desee, más adelante indico como hacerlo.

#### Usando Postman

Dentro de la carpeta del proyecto, hay una carpeta llamada *postman* dentro contiene una Postman Collection y Envirioment para ser importados y comenzar a usar inmediatamente.
Si nunca usaste postman no te preocupes es muy sencillo. Simplemente podes descargar la aplicación desde https://www.postman.com/downloads/ para comenzar a utilizarla. 

Una vez que tengas la aplicación podes importar los archivos de la carpeta postman, simplemente presionando el boton *Import* y arrastrando los archivos hacia la ventana emergente. Para más información: https://learning.postman.com/docs/getting-started/importing-and-exporting-data/

 ### Tipo de Cartas

Por el momento hay 3 tipos de cartas. Pero se pueden agregar los que uno desee. Simplemente tiene que ir al mapper de CardType, agregar el tipo y con que parámetros de trello desea construirlo. Si el parámetro de trello nunca fue utilizado anteriormente para ningún desarrollo, debera agregarlo tambien al objeto TrelloParams.

 #### Bug

  _Create Bug:_ Crea una card de tipo Bug y la asigna automaticamente a alguno de los miembros del tablero

##### Params

  - type: string - Required
  - description: string

##### Example

```curl --location --request POST 'http://localhost:3000/card' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "bug",
    "description": "Asteroid approaching starship"
}'
```
#### Issue

_Create Issue:_ Crea una card de tipo Issue y la deja en la lista ToDo

##### Params

  - type: string - Required
  - title: string - Required
  - description: string

##### Example

```curl --location --request POST 'http://localhost:3000/card' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "issue",
    "title": "Send message",
    "description": "The pilots send messages to Central"
}'
```

#### Task

  _Create Task:_ Crea una card de tipo Task a la que se le puede asignar alguna de las etiquetas que disponga en el tablero.

##### Params

  - type: string - Required
  - title: string - Required
  - category: string - One of de labels you got in your board
  - description: string

##### Example

```curl --location --request POST 'http://localhost:3000/card' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "task",
    "title": "Clean the Rocket",
    "category": "Maintenance"
}'
```

 ### Tableros y Listas

 La api ya viene con un tablero en donde trabajar y una lista en donde va a insertar las nuevas tarjetas que vaya creando. Si usted desea cambiar uno de estos dos debe realizar lo siguiente.

 #### Tablero

Ya se encuentra seteado un tablero inicial, si desea seguir utilizandolo puede invitar miembros con el siguiente [link](https://trello.com/invite/b/VuTDwWDD/bc222cfd26300a3eef779a3a0a0a5669/spacex)

Tambien dispone de una cuenta de prueba para el mismo board:

  * User: fabon55039@spruzme.com
  * Pass: 112233test


Ahora bien si desea cambiar el tablero simplemente debe indicar el *idBoard* del tablero sobre el cual quiere crear las tarjetas en las configuraciones de entorno.

Para obtener este id de uno de sus tableros de trabajo, lo primero que necesita es su clave y token de trello.

Estos pueden ser obtenidos desde https://trello.com/app-key con su cuenta de trello logueada. Una vez que lo obtenga puede utilizar el siguiente curl para obtener el _id_ que desea.

```
curl --location --request GET 'https://api.trello.com/1/members/me/boards?key=<YOUR_KEY>&token=<YOUR_TOKEN>'

```

 #### Lista

La lista es la columna o lista de trello sobre la cual van a crearse las tarjetas. Por defecto esta seteada en la lista ToDo del tablero con el cual viene la api.

Para cambiar de lista debe modificar el *idList* en las configuraciones de entorno. Para saber que id corresponde con que tarjeta puede utilizar el endpoint "Search on Board"

```
curl --location --request GET 'http://localhost:3000/card/board?search=lists'

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
    key: 'f084b29610f75f55de91cc11fba919df',
    token: '7d894d7070991f692f587290e9a4b92e844ec79853794048687d76e90135ed0e',
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

* shuffleMembers <boolean>: Indica que asignara aleatoreamente las tarjetas creadas entre los usuarios del tablero sobre el cual se esta trabajando. Sólo si el tipo de carta lo refleja.
  
## Qué me falto ?
  
  Si bien la api tiene las funcionalidades que se pidieron, por ser un desafío no quería extenderme demasiado con el desarrollo del mismo. Asi que nombro algunas     cosas que me quedaron sin resolver, pero creo que le sumarían al proyecto para tener en concideración.
  
  1 - Unit test, claramente le agregaría testing a los componentes de mi api. Completando minimamente con un 80% o más de coverage.
  
  2 - Manejo de errores. Agregaría un error handler para tratar bien los distintos tipos de excepciones.
  
  3 - Logger module. Un logger para ir logueando los errores, o request, o lo que se quiera.
  
  4 - Un endpoint extra donde te pida sólo el auth_key, auth_token y devuelva una lista con todos los boards, para no tener que ir contra la api de trello               si se quiere cambiar sobre el tablero que se esta trabajando.

## Stack 🛠️ 
  - [NestJS](https://nestjs.com)
  
## Author
  - [Javier A. Torre](javier.torre91@gmail.com)
