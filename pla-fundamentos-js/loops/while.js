/**
 * while loop
 */

let count = 0;
let condition = true;

while (condition) {
  console.log(`Hello, World! ${count}`);

  if (count === 5) {
    condition = false;
  }
  count++;
}
