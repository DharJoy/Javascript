/**
 * * var vs let vs const
 */

// ---------------- Var ----------------

/**
 * * variables defined with "var" can be redeclared.
 * * variables defined with "var" can be declared any time.
 * * variables defined with "var" can be reassaign.
 * * variables defined with "var" have global scope.
 */

var carName = "Volvo";
carName = "BMW"; // re-assaign
console.log(carName);

var carName = "Volkswagen"; // re-declared
console.log(carName);

message = "Good Morning";
console.log(message); // use before declare
var message;

// var create  function scope variable
// var create global variable

var dummy = "functionalities concept hacking";

if (true) {
  var varVariable = "This is Var";
  console.log(dummy);
}
console.log(varVariable);

// ---------------- let ----------------

/**
 * * variables defined with "let" can not be redeclared.
 * * variables defined with "let" must be declared before use.
 * * variables defined with "let" can be reassaign.
 * * variables defined with "let" have block scope.
 */

//* re-declare
// let person = "John Doe";
// console.log(person);
// let person = "John Smith ";
// console.log(person);

// * re-assign
// let person = "John";
// console.log(person);
// person = "Smith";
// console.log(person);

// * declared before use

// person = "BMW";
// let person = "Volvo";
// console.log(person);

// * scope

// let user1 = "Leonora";

// if (true) {
//   let user2 = "Laron";
//   console.log(user1);
// }
// console.log(user2);

// ---------------- const ----------------

/**
 * * variables defined with "const" can not be redeclared.
 * * variables defined with "const" must be declared & initialize before use.
 * * variables defined with "const" can't be reassaign.
 * * variables defined with "const" have block scope.
 */

// * re-declared
// const player = "Sakib";
// console.log(player);

// const player = "Tamim";
// console.log(player);

// * re-assign
// const player = "Tamim";
// console.log(player);

// player = "Sakib";
// console.log(player);

// * declared before use
// player="Sakib";
// const player;
// console.log(player)

// * scope

// const age = 45;
// if (true) {
//   const player = "Sakib";
//   console.log(age);
// //   console.log(player);
// }

// console.log(player);
