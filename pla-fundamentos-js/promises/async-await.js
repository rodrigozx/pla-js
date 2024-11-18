/*
  Async Await

  Async Await es una forma de trabajar con promesas
  mas sencilla y legible.
*/

// aqui se usa then
function fetchCharacters() {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => data.results);
}
function writeCharacters() {
  document.write("<h1>Personajes de Rick y Morty</h1>");
  fetchCharacters().then((characters) => {
    console.log(characters);
    document.write("<table>");
    for (const character of characters) {
      drawCharacters(character);
    }
    document.write("</table>");
  });
}

// ---------------------------------------------

// aqui se usa async await
async function fetchCharacters2() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
  }
  catch (error) {
    console.error("Error en la petición", error);
  }

}

async function writeCharacters2() {
  const characters = await fetchCharacters2();
  document.write("<main>");
  document.write("<h1>Personajes de Rick y Morty</h1>");
  document.write("<table>");
  for (const character of characters) {
    drawCharacters(character);
  }

}

function drawCharacters(character) {
  document.write('<tr style="text-align: center; font-family: Roboto, sans-serif;">');
  document.write(`<td><img src="${character.image}" alt="${character.name}" style="width: 150; height: 150px; border-radius: 50%;"/></td>`);
  document.write(`<td>${character.name}</td>`);
  document.write(`<td><p>${character.species}</p><td>`);
  document.write("</tr>");
}

writeCharacters2();

10 == "10"