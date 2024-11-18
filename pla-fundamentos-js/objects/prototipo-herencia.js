class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite un sonido");
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonido() {
    console.log("El perro ladra");
  }
  correr() {
    console.log(`${this.nombre} corre alegremente`);
  }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function () {
  console.log("Este es un metodo");
};

// En JavaScript, las clases son una mejora sintáctica sobre la
// herencia basada en prototipos.
Perro.prototype.segundoMetodo = function () {
  console.log("Es otro nuevo metodo");
};


Animal.prototype.tercerMetodo = function () {
  console.log("Un metodo mÃ¡s");
};


/**
 * La herencia es una cadena de prototipos.
 * para verlo vamos a ver la relacion entre los objetos
 */

// Perro -> Animal -> Object

console.log(perro1);
/*
    si vemos el log de perro1, podemos ver que el [[Prototype]]
    es un objeto de tipo Animal y este a su vez tiene un [[Prototype]]
    de tipo Object.
    Object es el prototipo base de todos los objetos en JavaScript.
*/

// Object.getPrototypeOf() es un método que devuelve el prototipo del objeto especificado.
const c1 = Object.getPrototypeOf(perro1);
console.log(c1);
