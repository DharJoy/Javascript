/** ######################### Array.map() #########################
 * * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * * map() does not execute the function for empty elements. map() does not change the original array.
 */

let numbers = [4, 9, 16, 25];
// get square root
let sqroot = numbers.map(Math.sqrt);

console.log(sqroot);

// Multiply all the values in an array with 10

let multiplyBy10 = numbers.map(function (x) {
  return x * 10;
});

console.log(multiplyBy10);

let persons = [
  { firstname: "Malcom", lastname: "Reynolds", age: 25 },
  { firstname: "Kaylee", lastname: "Frye", age: 15 },
  { firstname: "Jayne", lastname: "Cobb", age: 22 },
  { firstname: "Ellis", lastname: "Smith", age: 17 },
];

// get the full name

let getFullName = persons.map((v) => v.firstname);
console.log(getFullName);

// modify object

let modifyObject = persons.map((x) => {
  return {
    ...x,
    message: "Hello " + x.firstname,
  };
});

console.log(modifyObject);

/**
 * array.map(function(element, index, arr),this)
 *  --- function -- A function to run for each array element.
 *
 * --- element	 -- The value of the current element.
 *
 * --- index -- The index of the current element.
 *
 * --- arr -- The array of the current element.
 *
 * --- this -- A value passed to the function as its this value.
 */
