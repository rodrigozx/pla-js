/*
Este ejemplo demuestra el concepto de cierres (closures)
en JavaScript, donde una función interna tiene acceso a
las variables de su función externa incluso después de
que la función externa haya terminado de ejecutarse.
*/

function test1() {
  const wonderful = "wonderful";
  function test2(newWord) {
    const amazing = "amazing";
    return `${wonderful}, ${amazing} & ${newWord}`;
  }
  return test2
}

const pepe = test1();
console.log(pepe('awesome'));

const pepe2 = test1('notworking');
console.log(pepe2());

/*
las constantes pepe y pepe2 se asignan con el resultado de la función test1.
La función test1 devuelve la función test2. La función test2 toma un argumento
newWord y devuelve una cadena de texto que incluye las variables wonderful y amazing.

Por ello el parametro debe darse al momento de llamar a la función pepe, que es
la función test2. Si se llama a pepe2, que es la función test1, no se puede pasar
ningún argumento.

El contexto léxico de la función test2 incluye la variable wonderful, que es una
variable de la función externa test1. Por lo tanto, la función test2 tiene acceso
a la variable wonderful incluso después de que la función test1 haya terminado de
ejecutarse. Esto se llama cierre (closure) en JavaScript.

Al asignarse pepe2 tiene otro contexto léxico, por lo que no tiene acceso al
argumento que se le pasó a pepe.
*/

//Ejemplo con sumas

function sum(a) {
  return function (b) {
    return a + b;
  }
}

const add5 = sum(5);
console.log(add5(2));
console.log(add5(3));

const add10 = sum(10);
console.log(add10(2));

/*
En este ejemplo, la función sum toma un argumento a y devuelve una función que
toma un argumento b y devuelve la suma de a y b. La constante add5 se asigna con
el resultado de la función sum(5), que es una función que suma 5 a su argumento.
Por lo tanto, add5(2) devuelve 7 y add5(3) devuelve 8.

La constante add10 se asigna con el resultado de la función sum(10), que es una
función que suma 10 a su argumento. Por lo tanto, add10(2) devuelve 12.

Se puede ver que en memoria son dos funciones diferentes, con diferentes contextos
léxicos, por lo que no se mezclan los valores de a.
*/

/*
Al asignarse una funcion se crea un contexto léxico, que es el conjunto de variables
que están disponibles para la función en el momento de la definición. Esto incluye
los parámetros de la función y las variables definidas en la función externa.

Por eso hay que tener cuidado con los contextos léxicos, ya que si se asigna una
función a una variable y luego se cambia el valor de la variable, la función no
cambiará su contexto léxico. Y la memoria no se libera hasta que la función no se
elimina del contexto.
*/


