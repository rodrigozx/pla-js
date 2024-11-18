/**
   Para crear promesas en JavaScript se utiliza la clase Promise

los estados de una promesa son:
- pending: estado inicial, no se ha cumplido ni rechazado.
- fulfilled: la promesa se cumplió.
- rejected: la promesa no se cumplió.

la resolución de una promesa puede ser:
- resolve: se cumplió la promesa.
- reject: no se cumplió la promesa.

*/


const promesa = new Promise((resolve, reject) => {

  // es aleatorio si la promesa se cumple o no
  const numero = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if (numero > 5) {
      resolve(numero);
    } else {
      reject(new Error("El número es menor a 5"));
    }
  }, 1000);
});

promesa.then((resultado) => {
  console.log("La promesa se cumplió", resultado);
}).catch((error) => {
  console.error("La promesa no se cumplió", error);
});
