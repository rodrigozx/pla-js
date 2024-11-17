/*
Ejemplo de Memoization

Memoization es una técnica de optimización que almacena los resultados
de las llamadas a funciones costosas y devuelve el resultado almacenado
cuando se realizan las mismas entradas nuevamente.
Esto mejora el rendimiento al evitar cálculos repetidos.

En este ejemplo, utilizamos memoization para optimizar el cálculo
del factorial de un número.
*/

function memoize(fn) {
  const cache = {}; // Almacena los resultados de las llamadas a la función
  return function (n) {
    if (cache[n]) { // Verifica si el resultado ya está en la caché
      return cache[n]; // Devuelve el resultado almacenado
    } else {
      const result = fn(n); // Calcula el resultado
      cache[n] = result; // Almacena el resultado en la caché
      return result; // Devuelve el resultado calculado
    }
  };
}

function factorial(x) {
  if (x === 0) { // Caso base: el factorial de 0 es 1
    return 1;
  } else {
    return x * factorial(x - 1); // Llamada recursiva para calcular el factorial
  }
}

const memoizedFactorial = memoize(factorial); // Memoiza la función factorial

function timedMemoizedFactorial(n) {
  console.time(`Factorial of ${n}`); // Inicia el temporizador
  const result = memoizedFactorial(n); // Llama a la función memoizada
  console.timeEnd(`Factorial of ${n}`); // Detiene el temporizador y muestra el tiempo transcurrido
  return result; // Devuelve el resultado
}

console.log(timedMemoizedFactorial(5)); // Calcula y mide el tiempo del factorial de 5
console.log(timedMemoizedFactorial(6)); // Calcula y mide el tiempo del factorial de 6
console.log(timedMemoizedFactorial(5)); // Recupera de la caché y mide el tiempo del factorial de 5


/*
Un ejemmplo del resultado puede ser:
Factorial of 5: 0.061ms
120
Factorial of 6: 0.01ms
720
Factorial of 5: 0.007ms
120

Como se puede ver, la primera vez que se calcula el factorial de 5, se tarda
0.061ms. La segunda vez que se calcula el factorial de 5, se tarda 0.007ms,
ya que el resultado se recupera de la caché en lugar de calcularlo nuevamente.
*/