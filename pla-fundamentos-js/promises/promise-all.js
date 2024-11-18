/**
  Promise.all
  Se utiliza para ejecutar múltiples promesas al mismo tiempo
  y esperar a que todas se cumplan.
  Si una de las promesas es rechazada, entonces Promise.all también
  se rechaza.
 */

// Siguiendo el ejemplo de la API de Rick y Morty
// vamos a hacer una petición para obtener personajes

// definimos las urls de las peticiones
const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode"
];

// creamos un array de promesas
const requests = urls.map(url => fetch(url));

// Promise.all recibe un array de promesas
// y devuelve una nueva promesa que se cumple
// cuando todas las promesas del array se cumplan
Promise.all(requests)
  .then(responses => {
    // responses es un array con las respuestas de las peticiones
    // cada respuesta es un objeto Response
    for (const response of responses) {
      console.log(response);
    }
  })
  .catch(error => {
    console.log("Error en las peticiones", error);
  });

// la petición se hace en paralelo y se espera a que todas se cumplan

// dependiendo de la logica esto puede ser muy util si es necesario
// hacer varias peticiones al mismo tiempo y esperar a que todas se cumplan
// para continuar con el flujo del programa, por ejemplo cruzar datos de diferentes
// fuentes de información.
