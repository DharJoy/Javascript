/** ######################### Javascript Function parameters & arguments #########################
 * * parameters ==> Function parameters are the names listed in the function definition.
 * * arguments ==> Function arguments are the real values passed to (and received by) the function.
 */

function sum(a, b) {
  return a + b;
} // a & b are two parameters here.

console.log(sum(10, 20));

/** ######################### default arguments #########################
 * * The default parameters is used to initialized the named parameters with default values in case of when no value or undefined is passed.
 * *
 */

// without default value
function greetings(name, greet) {
  return `${name} ${greet}`;
}

console.log(greetings("John Smith", " "));
console.log(greetings("Hello"));

// with default value
function greetings1(name, message = "Welcome!🍁") {
  return `${name} ${message}`;
}

console.log(greetings1("John"));

/** ######################### Arguments are Passed by Value #########################
 * *  In a function call the parameters are called as arguments. The pass by value sends the value of variable to the function. It does not sends the address of variable. If the function changes the value of arguments then it does not affect the original value.
 * *
 */

function f(a, b) {
  a = 200;
  b = 300;
  console.log(`with function call a = ${a}, b = ${b}`);
}

let a = 10;
let b = 30;

console.log(`before function call a = ${a}, b = ${b}`);
f(a, b);
console.log(`after function call a = ${a}, b = ${b}`);

/** ######################### Arguments object are passed by reference #########################
 * * In Objects Pass by Reference, passing the address of variable instead of the value as the argument to call the Function. If we change the value of variable inside function then it will affect outside function variables.
 * *
 */

let person = {
  name: "Sakib",
  age: 33,
};

function abc(x) {
  x.name = "Tamim";
  x.city = "Dhaka";
  return x;
}

console.log("before function call - ", person);
abc(person);
console.log("before function call - ", person);
