/** ######################### Array.from() #########################
 * * The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
 * * The Array.from() method returns an array from any iterable object.
 */

let str = "Hello World";
// convert string to an array

let result = Array.from(str);
console.log(result);

let numbers = "1234567";
// let numbersArray = Array.from(numbers, (x) => Number(x));
let numbersArray = Array.from(numbers, convertNumber);

console.log(numbersArray);

function convertNumber(x) {
  return Number(x);
}

let user = ["Izabella", "Ramon", "Ana", "Ramon", "Ashlynn", "Ana"];

// remove duplicate

let uniqueUser = new Set(user);

// convert to an array

result = Array.from(uniqueUser);
console.log(result);

// create range

// let range = (start, end, step) =>
//   Array.from({ length: (end - start) / step + 1 }, (v, i) => start + i * step);

function range(start, end, step) {
  let object = {
    length: (end - start) / step + 1,
  };
  return Array.from(object, (v, i) => start + i * step);
}

console.log(range(0, 4, 1));
console.log(range(0, 10, 2));

/**
 * Array.from(object,mapFunction,thisValue)
 *
 * ---- object --- The object to convert to an array.
 *
 * ---- mapFunction --- A map function to call on each item.
 *
 * ---- thisValue --- A value to use as thisfor the mapFunction
 */
