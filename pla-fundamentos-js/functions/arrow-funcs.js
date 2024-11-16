const greeting = function (name) {
  return `Hi, ${name}`;
};

// Arrow function - explicit return

const newGreeting = (name) => {
  return `Hi, ${name}`;
};

// Arrow function - implicit return

const newGreetingImplicit = (name) => `Hi, ${name}`;
const newGreetingImplicitWithTwoParameters = (name, lastName) =>
  `Hi, I'm ${name} ${lastName}`;

// Lexical Binding

const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  },
};

finctionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsability."
);

/**
 * el this de las arrow functions no es dinámico, es decir, no cambia su valor,
 * siempre se refiere al this del contexto en el que se encuentra.
 * En este caso, el this de la arrow function se refiere al this global,
 * por lo que this.name es undefined.
 */
finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus.");
