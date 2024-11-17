// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce()  case 1

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
/*
  La función reduce() toma dos argumentos: una función de callback y un valor inicial.
  La función de callback toma dos argumentos: el acumulador y el valor actual.
  El valor inicial es 0 en este caso.
*/
console.log(numbersReduce)
console.log(sum)


// reduce() case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']
/*
En este ejemplo se busca la frecuencia de cada palabra en un array de palabras.
Se utiliza reduce() para acumular la frecuencia de cada palabra en un objeto.
Y se inicializa el acumulador como un objeto vacío.
*/

const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {})

console.log(wordFrecuency)



/*
Otro ejemplo de reduce pero con un array de objetos
*/
const data = [{ apple: 5 }, { banana: 10 }, { apple: 10 }, { banana: 5 }, { apple: 15 }]

const totalFruits = data.reduce((accumulator, currentValue) => {
  const [[key, value]] = Object.entries(currentValue)
  // para obtener la llave y el valor de un objeto se puede
  // hacer mejor con un for..in
  if (accumulator[key]) {
    accumulator[key] += value
  } else {
    accumulator[key] = value
  }
  return accumulator
}, {})

console.log(totalFruits)



// Exercise: Passing Grade Average

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]
const passingGrades = grades.filter(grade => grade >= 70)
const averagePassingGrade =
  passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('Original Grades: ', grades)
console.log('Passing Grades: ', passingGrades)
console.log('Average Passing Grade: ', averagePassingGrade)
