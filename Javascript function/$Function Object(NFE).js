/** ######################### Named function Object #########################
 * *
 */

/** ######################### the name property #########################
 * * a function’s name is accessible as the “name” property
 */

function myFunc() {
  console.log("This is a simple log");
}

console.log(myFunc.name);

let myFunction = () => {
  console.log("Hello World...");
};

console.log(myFunction.name);

function f(fn = function () {}) {
  console.log(fn.name);
}

f();

let obj = {
  printName() {},

  printAge() {},
};
console.log(obj.printAge.name);
console.log(obj.printName.name);

let ar = [function () {}];
console.log(ar[0].name);

/** ######################### length property #########################
 * * “length” that returns the number of function parameters
 */

function a(a) {}
console.log(a.length);

function b(a, b, c) {}
console.log(b.length);

function c(a, b, ...args) {}
console.log(c.length);
