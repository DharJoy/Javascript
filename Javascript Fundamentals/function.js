/** ######################### What is Function #########################
 * * JavaScript functions are defined with the function keyword.

 * * A JavaScript function is a block of code designed to perform a particular task.
 */

// * function declaration

function hello() {
  // executed code ....
  console.log("Hello World");
}

function sum(a, b) {
  console.log(a + b);
}

/** ######################### function constructor #########################
   * * As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
  
   * * Functions can also be defined with a built-in JavaScript function constructor called Function()
   */

const myFunc = Function("", console.log("Hello This is Function Constructor"));
myFunc();

/** ######################### function hoisting #########################
 * * Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
 * * Hoisting applies to variable declarations and to function declarations.
 * * Because of this, JavaScript functions can be called before they are declared
 */

sum(10, 20);

function sum(a, b) {
  console.log(a + b);
}

// sum2(15, 45);// Functions defined using an expression are not hoisted

let sum2 = function (a, b) {
  console.log(a + b);
};

/** ######################### function tips #########################
   * * The typeof operator in JavaScript returns "function" for functions.
   * * But, JavaScript functions can best be described as objects. JavaScript functions have both properties and methods.
  
   * * A function defined as the property of an object, is called a method to the object.
   * * A function designed to create new objects, is called an object constructor.
   */

const person = {
  name: "John Smith",
  sayHello: function () {
    console.log(`Hello Mr.${this.name}`);
  },
};

person.sayHello();
