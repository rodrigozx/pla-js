// 1. Copying an Array
//------------------------------------------------

const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)

// shallow copy primitivos
copyOfAnArray[0] = 100
console.log(originalArray)
console.log(copyOfAnArray)

/* Aclaración:
Este tipo de copia es una copia superficial (shallow copy)
porque solo copia las referencias a los elementos del array original.
Si los elementos del array son objetos, solo se copiarán las referencias
a los objetos, no los objetos en sí.
Por lo tanto, si modificamos un objeto en el array copiado,
también se modificará en el array original.
El caso anterior funciona porque los elementos del array son primitivos (números).
*/

// 1. Copying an Array with objects
const originalArrayWithObjects = [{ a: 1 }, { b: 2 }, { c: 3 }]
const copyOfArrayWithObjects = [...originalArrayWithObjects]

console.log("Original array with objects:", originalArrayWithObjects)
console.log("Copy of array with objects:", copyOfArrayWithObjects)

// porque es shallow copy
copyOfArrayWithObjects[0].a = 100
console.log("After modification - Original array with objects:", originalArrayWithObjects)
console.log("After modification - Copy of array with objects:", copyOfArrayWithObjects)


// 2. Combining Arrays
//------------------------------------------------

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)


// 3. Creating Arrays with Additional Elements
//------------------------------------------------

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)


// 4. Pasar elementos a funciones
//------------------------------------------------

// Definimos una función que suma tres parámetros
function sum(a, b, c) {
  return a + b + c
}

// Creamos un array con tres números
const numbers = [1, 2, 3]

// Usamos el operador de propagación para pasar los elementos del array como argumentos individuales a la función
const result = sum(...numbers)

// Imprimimos el resultado de la suma
console.log(result) // 6