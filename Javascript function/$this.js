/** ######################### this #########################
 * *
 * -------- "this" - rule ---------
 * * ☑️ implicit binding
 * * ☑️ explicit binding
 * * ☑️ new binding
 * * ☑️ window binding
 */

/** ######################### ‼️ implicit binding ‼️ #########################
 * *
 * * ✔️ কোন লাইনে ফাংশন কল করা হয়েছে
 * * ✔️ ফাংশন কলের আগে ডট (.)
 * * ✔️ ডটের ঠিক আগের অবজেক্টই হলো "This"
 */

let player = {
  name: "Tamim",
  age: 39,
  printName: function () {
    console.log(this.name);
  },
};

player.printName();

var printName = function (obj) {
  obj.printPersonName = function () {
    console.log(this.name);
  };
};

var user1 = {
  name: "Sofia",
  age: 25,
};
var user2 = {
  name: "Pinkie",
  age: 25,
};

printName(user1);
printName(user2);

user1.printPersonName();
user2.printPersonName();

function printParent() {
  console.log(name + " is child of " + this.name);
}
var person = {
  fatherName: "Debra McLaughlin",

  child: {
    childName: "Jaime",
    parent: function () {
      console.log(this.childName + " is child of " + person.fatherName);
    },

    child2: {
      child2name: "Sarina",
      parent: function () {
        console.log(this.child2name + " is child of " + person.child.childName);
      },
    },
  },
};

person.child.parent();
person.child.child2.parent();

/** ######################### ‼️ explicit binding ‼️ #########################
 * *
 * * ✔️ call() - The JavaScript Function call() method calls a function with a given this value and arguments provided individually.
 *
 * * ✔️ apply() - The JavaScript Function apply() method calls a function with a given this value, and arguments provided as an array.
 *                The apply() method calls a function by passing this value and arguments provided as an array.
 * * ✔️ bind() - The bind() method allows an object to borrow a method from another object without copying.
 */

// * -------------------- call --------------------

function printNameFunction(age, city) {
  console.log(this.name);
  console.log(`${this.name} is ${age} years old & he lives in ${city}.`);
}

var user3 = {
  name: "Bradley Rowe DDS",
};

var age = 55;
var city = "South Maude";

printNameFunction.call(user3, age, city);

// * -------------------- apply --------------------

var userArgs = [(age = 25), (city = "Lake Eldridgeshire")];
printNameFunction.apply(user3, userArgs);

//* Using apply() method to borrow a method of another object

var car = {
  name: "BMW",
  description() {
    return `The ${this.name} is of ${this.color} color.`;
  },
};

var bike = {
  name: "Duke",
  color: "black",
};

console.log(car.description.apply(bike));

//*  Using apply() method to append two arrays

var color1 = ["Red", "Green", "Blue"];
var color2 = ["Yellow", "Black"];
color1.push.apply(color1, color2);
console.log(color1);

// * -------------------- bind --------------------

var student = {
  name: "Carrie",
  score: 78,
  message: function () {
    console.log(this.name + " scored " + this.score + " in an exam.");
  },
  message2: function (score) {
    console.log(this.name + " scored " + score + " in an exam.");
  },
};

var student2 = {
  name: "Dorris",
  score: 72,
};

var student3 = {
  name: "Rubye",
};

let logMessage = student.message.bind(student2);
logMessage();

let logMessage2 = student.message2.bind(student3, 85);
logMessage2();

/** ######################### ‼️ new binding ‼️ #########################
 *
 * * When a function is invoked with the new keyword, JavaScript creates an internal this object(like, this = {}) within the function. The newly created this binds to the object being created using the new keyword.
 * *
 */

let Person = function (name, age) {
  (this.name = name), (this.age = age);
  console.log(`${name} is ${age} years old.`);
};

let user4 = new Person("Reilly", 55);
console.log(user4);

/** ######################### ‼️ window binding ‼️ #########################
 *
 * * If the 'this' keyword is not resolved with any of the bindings, implicit, explicit or new, then the this is bound to the window(global) object.
 * *
 */

let sayNameFunction = function () {
  console.log(this);
  console.log(this.personName);
};

var personName = {
  name: "Jeromy",
};

sayNameFunction();
