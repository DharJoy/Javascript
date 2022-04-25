/** ######################### First Class Function #########################
 *
 * * A programming language is said to have First-class functions if functions in that language are treated like other "variables". So the functions can be "assigned to any other variable" or "passed as an argument" or can be "returned by another function".
 *
 * *
 */

//* ✅ store in a variable

function myFunc() {
  return "This function is store in a variable";
}

let result = myFunc;
console.log(result());

let arr = [
  function log() {
    return "This function in an array";
  },
];

console.log(arr[0]());

let user = {
  name: "Sakib",
  printName: function () {
    return "This function is a object Method";
  },
};
console.log(user.printName());

// * ✅ passed as a arguments

function canVote() {
  return "Yes, you can";
}

function canNotVote() {
  return "No, you can't";
}

function voter(age, yes, no) {
  if (age >= 18) return yes();
  return no();
}

let john = voter(25, canVote, canNotVote);
console.log(john);

let sam = voter(14, canVote, canNotVote);
console.log(sam);

// * ✅ returned from a function

function greet(name, message) {
  function printMessage() {
    return message + " " + name.split(" ")[0];
  }
  return printMessage;
}

let a = greet("John Smith", "Good Morning!");
console.log(a());

console.log(greet("Tamim Iqbal", "Best Player")());

/** ######################### higher-order function #########################
 * * ☑️ pass a function as an arguments
 *
 * * ☑️ return a function from another function
 */
