/*
 En 2015 se introdujo una nueva forma de crear objetos en JavaScript: las clases.
 Las clases son una forma de crear plantillas para objetos.
 En JavaScript, las clases son una mejora sintáctica sobre la herencia basada en prototipos.
 La sintaxis para definir clases es similar a la de las funciones, pero se usa la palabra clave class.
*/
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    // el this hace referencia al objeto en el que se está ejecutando el método
    // es el contexto de ejecución del método
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} aÃ±os.`);
  }
}

const persona1 = new Persona("Mariana", 25);

persona1.saludar();