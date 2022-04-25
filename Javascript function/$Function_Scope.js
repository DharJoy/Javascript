/** ######################### Function Scope #########################
 * * Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.
 * * JavaScript has function scope: Each function creates a new scope.
 *
 * * Variables defined inside a function are not accessible (visible) from outside the function. but outside variable are accessible from inside a function
 */

// global scope

let person = "John Smith";

console.log(person);

// function scope

function user() {
  return person;
}

console.log(user());

// function f() {
//   let x = 200;
// }
// f();
// console.log(x);

/** ######################### nested function scope #########################
 * * outer function cannot access inner function variable, but inner function can access outter function variable
 * *
 */

function outter(x) {
  let a = x;
  function f() {
    let b = 35;
    let c = a + b;
    console.log(c);
  }
  // let d = x + c; // got error
  // console.log(d);
  return f;
}

let res = outter(15);
res();

let abc = 10;

function myFunc(x) {
  abc = x;
  return function () {
    abc = 20;
    return abc;
  };
}
console.log("before function call ", abc);
let result = myFunc(15);
console.log(result());
console.log("after function call ", abc);
