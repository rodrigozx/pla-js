const string = "42";
const integer = parseInt(string);
const number = Number(string);

console.log("tests 1 --------------------------------------");
console.log(string, typeof string);
console.log(integer, typeof integer);
console.log(number, typeof number);

const stringDecimal = "3.14";
const float = parseFloat(stringDecimal);
const numberDecimal = Number(stringDecimal);

console.log("tests 2 --------------------------------------");
console.log(stringDecimal, typeof stringDecimal);
console.log(float, typeof float);
console.log(numberDecimal, typeof numberDecimal);

const binary = "1010";
const binaryNumber = parseInt(binary, 2);
const binaryNumber2 = Number("0b" + binary);
const binaryNumber3 = Number("0b1010");

console.log("tests 3 --------------------------------------");
console.log(binaryNumber, typeof binaryNumber);
console.log(binaryNumber2, typeof binaryNumber2);
console.log(binaryNumber3, typeof binaryNumber3);

// Imnplicit type casting

// concatenation instead of sum
const sum = 5 + "3";
console.log("tests 4 --------------------------------------");
console.log(sum, typeof sum);

// sum instead of concatenation
const concatenation = 5 + true;
