/*
this --- class

this --- objeto -- class
*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Alice", 25);

console.log(persona1);

persona1.nuevoMetodo = function () {
  console.log(`Mi nombre es ${this.nombre}`);
};