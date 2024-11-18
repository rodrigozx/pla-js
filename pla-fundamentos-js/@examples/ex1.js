/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("CuÃ¡l es tu usuario?");
const password = prompt("CuÃ¡l es tu contraseÃ±a?");

function usuarioExistente(username, password) {
  for (const element of usersDatabase) {
    if (
      element.username === username &&
      element.password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
    writeTimeline();
  } else {
    alert("Uuups, usuario o contraseÃ±a incorrectos!");
  }
}

function writeTimeline() {
  document.write("<h1>Timeline</h1>");
  for (const element of usersTimeline) {
    document.write(`<h2>${element.username}</h2>`);
    document.write(`<p>${element.timeline}</p>`);
  }
}

signIn(username, password);