/**
    For in is used to iterate over the properties of an object. 
    It is not recommended to use for in with arrays because 
    it can iterate over the prototype chain and it is slower than a for loop. 
 */

const object = { apple: 1, orange: 2, banana: 3 };

for (const key in object) {
  const element = object[key];
  console.log(key, element);

  /*
    print:
        apple 1
        orange 2
        banana 3
*/
}
