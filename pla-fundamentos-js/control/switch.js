let expr = "Uvas";

switch (
  expr // ===
) {
  case "Naranjas":
    console.log("Las naranjas cuestan $20 el kilo");
    break;
  case "Manzanas":
    console.log("Las manzanas cuestan $43 el kilo");
    break;
  case "PlÃ¡tanos":
    console.log("El plÃ¡tano esta en $30 el kilo");
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $ 25 pesos el kilo");
    break;
  default:
    console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("Â¿Hay algo mÃ¡s que desees?");
