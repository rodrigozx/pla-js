const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// Notación científica e infinito
const cientifico = 5e3;
const infinito = Infinity;
const noEsUnNumero = NaN;

// Operaciones aritméticas
const suma = 3 + 4;
const resta = 4 - 5;
const mutiplicacion = 4 * 7;
const division = 16 / 2;

//Modulo y exponenciacion
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

// Precisión de los números
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3);

// Métodos de Math
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random();
const exponenciacion2 = Math.pow(2, 3);

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);
