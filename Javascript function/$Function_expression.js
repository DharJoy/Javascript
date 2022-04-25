/** ######################### What is function Expression #########################
 * * The function keyword can be used to define a function inside an expression.
 * * A function expression can be stored in a variable.
 *
 * * Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
 *
 * * The function is actually an anonymous function (a function without a name).
 */

const sayHi = function () {
  console.log("Hello World!");
};

sayHi();

const sum = function (a, b) {
  return a + b;
};

let add = sum(15, 25);

console.log(add);

let add2 = sum;
console.log(add2(20, 30));

/** ######################### self-invoking function #########################
 * * Function expressions can be made "self-invoking".
 * * A self-invoking expression is invoked (started) automatically, without being called.
 * * cannot self-invoke a function declaration.
 * The function is actually an anonymous self-invoking function (function without name).
 */
(function () {
  console.log("This is Self invoking function");
})();
