const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
  if (element === 5) {
    break; // break the loop
  }
}

console.log("length " + array.length);