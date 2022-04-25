/** ######################### nested (inner) function #########################
 * * A nested function is a function inside another function.
 * *
 * * We can create the nested function in the same way we create the normal JavaScript function, But inside another function.
 *
 * * Inner function can access all declared variables in outter function or global Object.
 *
 * * It also forms a closure.
 */

var a = 200;

function outter() {
  var b = 100;
  // create a inner function
  function inner() {
    var c = 500;
    console.log(a + b);
  }

  // invoked inner function
  inner();
}

// invoked outter function
outter();
// console.log(c); // error

// ==> inner function return

function someThing(greet, name) {
  let msg = greet;
  function inner() {
    return msg + name;
  }
  return inner;
}

let result = someThing("Hello, Good Morning ", "John");
console.log(result());

// * ==> Private property

function bankAccount(initial) {
  let balance = initial;
  function f() {
    return balance;
  }
  return f;
}

let bankBalance = bankAccount(20000);
console.log(bankAccount());
console.log(balance);
