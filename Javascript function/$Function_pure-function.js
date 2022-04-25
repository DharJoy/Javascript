/** ######################### Pure function #########################
 * * Pure Function is a function (a block of code ) that always returns the same result if the same arguments are passed.
 *
 * * pure function does not produce any observable side effects
 */

// returns same result

function returnSquare(n) {
  return n * n;
}

console.log(returnSquare(3));
console.log(returnSquare(4));

// side effects

let x = 100;

function change() {
  x = 200;
}

console.log(x);
change();
console.log(x);

// pure function

let user = { name: "John Smith" };
function msg(x) {
  return {
    name: x.name || "Guest",
    messgae: "Welcome Sir",
  };
}

console.log(user);
console.log(msg(user));
console.log(user);
console.log(msg({}));
