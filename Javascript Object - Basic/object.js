/** ######################### Object #########################
 * * In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.
 */

// note : create object using literals

let obj1 = {
  name: "Sakib",
  city: "Dhaka",
  "hair color": "Black",
};

console.log("log obj1 : ", obj1);

/** ######################### Object Properties #########################
 * * Properties are the values associated with a JavaScript object.
 *
 * * A JavaScript object is a collection of unordered properties.
 */

// note : accessing properties (dot notation)

let name = obj1.name;
console.log("log obj1.name : ", name);

// console.log(obj1.'hair color'); // error

// note : accessing properties (array like notation)

let city = obj1["city"];
console.log("log city : ", city);

console.log("log hair color : ", obj1["hair color"]);

// note : method in object

let person = {
  name: "Karim",
  city: "Chittagong",
  getName: function () {
    // getName is a object method
    console.log(this.name);
  },
};

person.getName();

// note : add properties or method

person.hairColor = "Blue";
console.log(person);

person.getCity = function () {
  console.log(this.city);
};
person.getCity();

// note : delete properties or methods

person.isTall = true;

delete person.hairColor;

console.log("log person : ", person);

// note : Property existence check, using “in” operator

console.log("log name in person : ", "name" in person);

person["hair color"] = "black";

console.log("hair color" in person);
console.log("body color" in person);

// note : for in loop

for (key in person) {
  console.log("log person key : ", key);
}
for (key in person) {
  console.log(key, ":", person[key]);
}

// note : create object using constructor function

let obj2 = new Object();

obj2.name = "Karim";
obj2.city = "chittagong";
obj2.getName = function () {
  console.log(this.name);
};

obj2["fav city"] = "Dhaka";

console.log("log obj2 : ", obj2);

// note : nested object

let user = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log("log user object : ", user);

// note : accessing nested object properties

console.log("log user->cars->car2 : ", user.cars.car2);
console.log("log user->cars->car1 : ", user.cars.car1);

// delete nested object prop.

delete user.cars.car3;
console.log("log user->cars : ", user.cars);

// add nested object prop

user.cars.car3 = "Fiat";
user["cars"]["car3"] = "Fiat";

console.log("log user->cars : ", user.cars);

// * nested arrays and objects

let person2 = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

console.log(person2.cars[0].name);
console.log(person2.cars[0].models[1]);

console.log("start for in for nested array and objects");

for (let i in person2.cars) {
  console.log("-------------------");
  console.log(person2.cars[i].name);
  console.log("-------------------");

  for (let j in person2.cars[i].models) {
    console.log(person2.cars[i].models[j]);
  }
}

// note : "this"
/** ######################### this #########################
 * * In JavaScript, the this keyword refers to an object.
 * --- In an object method, this refers to the object.
 * --- Alone, this refers to the global object.
 * --- In a function, this refers to the global object.
 * --- In a function, in strict mode, this is undefined.
 * --- In an event, this refers to the element that received the event.
 * --- Methods like call(), apply(), and bind() can refer this to any object.
 */
