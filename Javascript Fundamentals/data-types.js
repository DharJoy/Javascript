/**
 * Javascript has 2 types data
 * Javascript
 *      |-- Primitive
 *          |-- String
 *          |-- Number
 *          |-- Boolean
 *          |-- Null
 *          |-- undefined
 *          |-- Symbol
 *          |-- Bigint
 *      |-- Objects
 *          |-- function
 *          |-- array
 *          |-- Object
 *
 */

// * primitive data type - All types except objects define immutable values (that is, values which can't be changed).

/** --------------- String -----------------
 * * String - JavaScript's String type is used to represent textual data.
 * * The length of a String is the number of elements in it.
 */
let text = "Hello world!";
console.log(text);

let doubleQuotes = "This is a 'string'";
console.log(doubleQuotes);

let singleQuotes = 'This is a "string" too..';
console.log(singleQuotes);

/** --------------- Number -----------------
 * * Numbers can be written with, or without decimals
 * * Extra large or extra small numbers can be written with scientific (exponential) notation
 */

let x = 100;
console.log(x);

x = 105.12;
console.log(x);

let exponentialNumber = 123e5;
console.log(exponentialNumber);

exponentialNumber = 123e-5;
console.log(exponentialNumber);

let infinityX = 42 / 0;
console.log(infinityX);
infinityX = -42 / 0;
console.log(infinityX);

/** --------------- Bigint -----------------
 * * The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, we can safely store and operate on large integers even beyond the safe integer limit for Numbers.
 *
 * * A BigInt is created by appending n to the end of an integer or by calling the constructor.
 */

let bigInt = 2n ** 53n;
console.log(bigInt);

/** --------------- Boolean -----------------
 * * Booleans can only have two values: true or false.
 * * Booleans are often used in conditional testing.
 */

let bool = true;
console.log(bool);
bool = false;
console.log(bool);

if (bool) {
  console.log("Hello");
}

/** ------------- undefined -----------------
 * * In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
 * * An empty value has nothing to do with undefined.
 * * An empty string has both a legal value and a type.
 */

let a;
console.log(a);
a = undefined;
console.log(a);
// empty string
// a = "";
// console.log(a);

/** --------------------- Symbol -----------------------
 * * A Symbol is a unique and immutable primitive value and may be used as the key of an Object property
 */

let symbol = Symbol();
console.log(symbol);

/** ----------------- null -------------------
 * * The Null type has exactly one value: null.
 */

let nullValue = null;
console.log(nullValue);

/** --------------------- Object -----------------------
 * * In JavaScript, objects can be seen as a collection of properties.
 * * There are two types of object properties: The data property and the accessor property.
 */

/** --------------------- Array ---------------------
 * * JavaScript arrays are written with square brackets.
 * * Array items are separated by commas.
 */
let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

/** --------------------- object ---------------------
 * * JavaScript objects are written with curly braces {}.
 * * Object properties are written as name:value pairs, separated by commas.
 */
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person);

/** --------------------- function ---------------------
 * * A JavaScript function is a block of code designed to perform a particular task.
 */

function sayHi() {
  console.log("Hello World!");
}
sayHi();

/** --------------------- typeof operator ---------------------
 * * The typeof operator returns the type of a variable or an expression
 */

console.log(typeof doubleQuotes);
console.log(typeof x);
console.log(typeof bool);
console.log(typeof a);
console.log(typeof symbol);
console.log(typeof nullValue);
console.log(typeof cars);
console.log(typeof person);
console.log(typeof sayHi);

/** --------------------- Javascript Dynamic types --------------------
 * * JavaScript has dynamic types. This means that the same variable can be used to hold different data types
 */

let abc; // now abc is "undefined" data type
console.log(typeof abc);
abc = 100; // now abc is "number" data type
console.log(typeof abc);
abc = "String"; // now abc is "string" data type
console.log(typeof abc);
abc = true; // now abc is "boolean" data type
console.log(typeof abc);
abc = []; // now abc is "object(array)" data type
console.log(typeof abc);
abc = {}; // now abc is "object" data type
console.log(typeof abc);
abc = function () {}; // now abc is "object(function)" data type
console.log(typeof abc);

// ----------------------------------------------------------------

// * Note : JavaScript evaluates expressions from left to right.
