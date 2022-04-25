/** ######################### closure #########################
 *
 * * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 *
 * *  In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
 */

// ==> simple closure

var a = 10;
var b = 20;

function add() {
  return a + b;
}
console.log(add());
console.dir(add);

(function () {
  var a = 10;
  var b = 20;

  function add() {
    return a + b;
  }
  console.log(add());
  console.dir(add);
})();

// function func() {
//   var name = "Javascript";

//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }

// var result = func();

function func() {
  var name = "Javascript";

  function displayName() {
    console.log(name);
  }
  return displayName;
}

var result = func();
console.dir(result);

// ==> private methods with closure

var counter = (function () {
  var privateCounter = 0;
  function changeBy(value) {
    privateCounter += value;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
console.dir(counter.value);

function bankBalance(initial) {
  var balance = initial;
  return function () {
    return balance;
  };
}

var bankAccount = bankBalance(100000);
console.log(bankAccount());
console.dir(bankAccount);

// * ===> closure in loop

// for (let i = 0; i < 3; i++) {
//   var f = function () {
//     console.log(i);
//   };
//   console.log(i);
//   console.dir(f);
//   setTimeout(f, 3000);
// }

// for (var i = 0; i < 3; i++) {
//   var f = function () {
//     console.log(i);
//   };
//   console.log(i);
//   console.dir(f);
//   setTimeout(f, 3000);
// }

// console.log(i);

// * ===> closure store variable references
(function () {
  let x = 10;
  let y = 20;

  function add() {
    return x + y;
  }

  console.log(add());
  console.dir(add);

  x = 30;
  y = 40;

  console.log(add());
  console.dir(add);
})();
