/** ######################### arguments object #########################
 * * The arguments object are inbuilt object in JavaScript functions. In all non-arrow functions the arguments object is a local variable. Analyse the arguments inside the function by using its arguments object.
 *
 *
 * * The argument object contains an array of the arguments used when the function was called (invoked).
 *
 * * If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
 */

function test() {
    console.log(typeof arguments);
  return arguments;
}
let x = test(10, 20, 30);
console.log(x[0]);
console.log(x[1]);

// check arguments length

console.log(x.length);

console.log(test(1, 2, 3, 4));

function sumArguments() {
  let argumentsList = arguments;
  let sum = 0;
  for (let i = 0; i < argumentsList.length; i++) {
    sum += argumentsList[i];
  }
  console.log("sum = ", sum);
}

sumArguments(1, 2, 3, 4);
