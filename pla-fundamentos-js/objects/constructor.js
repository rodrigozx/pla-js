/*
estructura de datos
key / value

objeto {
  propiedad: valor,
  propiedad: valor,
  propiedad: valor
  Metodos()
}

*/

// Ejemplo 1: Método dentro del objeto
const persona1 = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "Av Insurgentre 187",
    ciudad: "CDMX",
  },
  saludar() {
    console.log(`hola, mi nombre es ${this.nombre}`);
  },
};

// Ejemplo 2: Método en el prototype
function Persona(nombre, edad, direccion) {
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

// Agregar métodos al prototipo permite que todas las instancias del objeto compartan el mismo método,
// en lugar de tener una copia del método en cada instancia. Esto ahorra memoria y mejora el rendimiento.
Persona.prototype.saludar = function () {
  console.log(`hola, mi nombre es ${this.nombre}`);
};

const persona2 = new Persona("John", 30, {
  calle: "Av Insurgentre 187",
  ciudad: "CDMX",
});

// Imprimamos los objetos
console.log(persona1);
console.log(persona2);

// Imprimamos la propiedad nombre
console.log(persona1.nombre);
console.log(persona2.nombre);

// Imprimamos el metodo saludar
persona1.saludar();
persona2.saludar();

// Agrergamos una propiedad al objeto en este caso telefono
persona1.telefono = "555-555-5555";
persona2.telefono = "555-555-5555";

console.log(persona1.telefono);
console.log(persona2.telefono);

// Agregamos un metodo al objeto
persona1.despedir = () => {
  console.log("Adios");
};
persona2.despedir = () => {
  console.log("Adios");
};

persona1.despedir();
persona2.despedir();

// Acceder a una propiedad de un objeto anidado / Metodo
console.log(persona1.direccion.calle);
console.log(persona2.direccion.calle);

// Eliminar una propiedad de un objeto
delete persona1.telefono;
delete persona2.telefono;
console.log(persona1.telefono);
console.log(persona2.telefono);

// Eliminar un metodo de un objeto
delete persona1.despedir;
delete persona2.despedir;
console.log(persona1.despedir());
console.log(persona2.despedir());

