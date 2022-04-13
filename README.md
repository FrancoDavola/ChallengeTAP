Challenge TAP
-------------

Lo primero que debemos hacer es descargar las dependencias de nuestro proyecto, para lo cual vamos a utilizar el comando 'npm install' o 'npm i'.
Una vez instaladas vamos a poder correr nuestro proyecto. Para correr el proyecto vamos a usar el comando 'npm run dev'

En este proyecto vamos a encontrar las siguientes rutas : 

             1-   http://localhost:3000/game --- METODO GET

             2-   http://localhost:3000/game/{id} --- METODO GET

             3-   http://localhost:3000/game --- METODO POST

Al utilizar la ruta por método post debemos enviarle el siguiente JSON :

                    {
                        "game": {
                            "state": {
                                "code": "1",                // opciones de code : 1 , 2  o 3
                                "description": "CREATED"    // opciones de description : 'CREATED' , 'WON' O 'LOST'
                                    }
                            },
                        "cells": []
                    }

En este caso opte por la opción de utilizar MongoDB como base de datos de el proyecto. También decidí no enviar los parámetros 'id' y 'created' en el post, ya que esos datos no deberían estar a cargo de el usuario y debería ser manejado en el backend. En este caso al trabajar con mongoose este ya nos provee un id , pero como en el challenge requería que el id estuviera dentro del objeto 'game' decido ignorar el id de mongoose que trae por defecto y crear mi propio id. Para esto utilice una librería llamada 'uuid', la misma es la encargada de crear el id.

Cuando utilicemos el método GET (2) debemos pasarle el id que se encuentra dentro del objeto game, este mismo es el identificador de la partida. Este método nos va a devolver la partida en caso de encontrarla.
Si no pasáramos ningún id como parámetro (1) , se creara automáticamente una partida.


Unit Test 
---------

Para la parte de test utilice postman. Dentro de la carpeta 'challengeTAP/postaman' podemos encontrar los test del proyecto, estos mismos pueden ser importados a postman y correrse desde ahí. Pero también pueden correrse dentro de el proyecto, para eso utilice la librería 'newman'.


Correr los test desde la consola : 
----------------------------------

Para esto vamos a necesitar dos terminales. En una terminal vamos a levantar nuestro proyecto usando 'npm run dev'. Una vez levantado vamos a ir a la otra terminal y vamos a correr el siguiente comando 'npx newman run ./postman/ChallengeTAP.postman_collection' esto nos va a mostrar en consola los resultados de los test. Es muy IMPORTANTE haber levantado el proyecto previamente antes de correr los test, sino los mismos van a fallar.


****************************************************
****************************************************

IMPORTANTE : En este caso habilite la base de datos para que todas las ip puedan ingresar y pueda usarse el proyecto sin tener la necesidad de crear una DB en mongo. Esto no se debería hacer pero para facilitar el uso me parecía lo mejor, ya que es un challenge de prueba y luego se borrara dicha DB. También subí el .env para facilitar la conexión, sino solo se subiría el .env_example.

Saludos!
