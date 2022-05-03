/** ######################### Arrow function #########################
 * * An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
 */

// regular function
function myFunc() {
  console.log("Hello World!");
}
myFunc();

// arrow function
let f = () => {
  console.log("Hello World!");
};
f();

// without return keyword
let a = () => (x = 200);
console.log(a());

// single parameters
let b = (a, b) => a + b;
console.log(b(20, 25));

// return Object
let c = () => ({ a: 100, b: 250 });
console.log(c());

/** ######################### "this" keyword #########################
 * *
 */
//* regular function :

// During a simple invocation the value of this equals to the global object (or undefined if the function runs in strict mode)

function myfunc() {
  console.log(this);
}
myfunc(); // window object == in nodeJs it's global object

// During a method invocation the value of this is the object owning the method

var person = {
  name: "Sakib",
  getName: function () {
    console.log(this);
  },
};
person.getName();

// During an indirect invocation using .call(thisArg,arg1...argN) , .apply(thisArg,arg1...argN) , .bind(thisArg,[arg1...argN]) the value of this equals to the first argument

function myfunc2() {
  console.log(this);
}

var myContext = { Value: "A" };

myfunc2.call(myContext);
myfunc2.apply(myContext);
var log = myfunc2.bind(myContext);
log();

// During a constructor invocation using new keyword this equals to the newly created instance

let Person = function () {
  console.log(this);
};

new Person();

// * Arrow function

// No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function.

// In other words, the arrow function resolves this lexically.

let myObj = {
  myMethod1() {
    console.log(this);
    let myMethod2 = (items) => {
      console.log(this); // logs myObj

      let callBack = () => {
        console.log(this); // logs myObj
      };
      // items.forEach(callBack)

      callBack();
    };
    myMethod2();
  },
};

myObj.myMethod1([1, 2, 3]);

/** ######################### can't be called with new #########################
 * * Not having this naturally means another limitation: arrow functions can’t be used as constructors. They can’t be called with new
 */

let Car = function (model, color, price) {
  this.model = model;
  this.color = color;
  this.price = "$" + price;
};

let volvo = new Car("Volvo S60", "White", 250000);
console.log(volvo);

// let Car2 = (model, color, price) => {
//   this.model = model;
//   this.color = color;
//   this.price = "$" + price;
// };

// let volvo2 = new Car2("Volvo S60", "White", 250000);
// console.log(volvo2); // typeError : Car2 is not a constructor

/** ######################### arguments object #########################
 * * Inside the body of a regular function, arguments is a special array-like object containing the list of arguments with which the function has been invoked.
 *
 * * On the other side, no arguments special keyword is defined inside an arrow function.
 *
 * * Again (same as with this value), the arguments object is resolved lexically: the arrow function accesses arguments from the outer function.
 */

function func() {
  console.log(arguments);
}
func(10, 20, 30, 40);

function regularFunction() {
  console.log(arguments);
  let arrowFunction = () => {
    console.log(arguments); // logs{0:'a',1:'b'}
  };
  arrowFunction(10, 20, 30);
}
regularFunction("a", "b");

function regularFunction2() {
  console.log(arguments); // logs {0:'a',1:'b'}

  // use rest operators for access arguments of the arrow function

  let arrowFunction2 = (...args) => {
    console.log(args); // logs [10,20,30]
  };
  arrowFunction2(10, 20, 30);
}
regularFunction2("a", "b");
