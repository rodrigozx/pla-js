// Ejemplo 1: Contexto Global
console.log(this); // En el navegador, `this` se refiere al objeto `window`

// Ejemplo 2: Contexto de un Objeto
const obj = {
  name: 'Objeto',
  getName: function () {
    return this.name; // `this` se refiere al objeto `obj`
  }
};
console.log(obj.getName()); // Salida: 'Objeto'

// Ejemplo 3: Contexto de una Función
function showThis() {
  console.log(this); // En modo estricto, `this` es `undefined`, en modo no estricto, `this` es el objeto global
}
showThis(); // Salida: objeto global o `undefined` en modo estricto

// Ejemplo 4: Contexto de una Función Flecha
const arrowFunction = () => {
  console.log(this); // Las funciones flecha no tienen su propio `this`, heredan el `this` del contexto donde fueron definidas
};
arrowFunction(); // Salida: objeto global en el navegador
/**
  Porque las arrow functions no tienen su propio contexto?
  --------------------------------------------------------
  Porque las arrow functions no tienen su propio `this`, heredan el `this`
  del contexto donde fueron definidas. Esto significa que el `this` dentro de
  una arrow function siempre se refiere al `this` del contexto donde la arrow.
  Es muy útil cuando se trabaja con eventos o funciones que se llaman en un
  contexto específico, como en el caso de React, donde se necesita acceder a
  las propiedades del componente.
 */




// Ejemplo 5: Contexto en un Constructor
function Person(name) {
  this.name = name; // `this` se refiere a la nueva instancia del objeto
}
const person = new Person('Juan');
console.log(person.name); // Salida: 'Juan'

// Ejemplo 6: Cambiando el Contexto con `call`
const anotherObj = {
  name: 'Otro Objeto'
};
console.log(obj.getName.call(anotherObj)); // Salida: 'Otro Objeto', `this` se refiere a `anotherObj`

// Ejemplo 7: Diferencia entre `call` y `apply`
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

// Usando call
greet.call(person1, 'Hello', '!'); // Salida: 'Hello, Alice!'
greet.call(person2, 'Hi', '.'); // Salida: 'Hi, Bob.'

// Usando apply
greet.apply(person1, ['Hello', '!']); // Salida: 'Hello, Alice!'
greet.apply(person2, ['Hi', '.']); // Salida: 'Hi, Bob.'
