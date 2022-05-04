/** ######################### Object Properties #########################
 * * Properties are the values associated with a JavaScript object.
 *
 * * A JavaScript object is a collection of unordered properties.
 */

let user = {
  firstName: "Santa",
  lastName: "Goldner",
  gender: "female",
  age: 45,
  city: "South Anne",
  "fav Hobby": "Gardening",

  //   printInfo: function () {
  //     console.log(
  //       `${this.firstName + this.lastName} is ${this.age} years old ${
  //         this.gender
  //       } who lives in ${thi.city}`
  //     );
  //   },
};

// * Accessing object Properties (using dot notation)

console.log(user.lastName);
console.log(user.age);

// * Accessing object Properties (using array like notation)

console.log(user["city"]);
console.log(user["fav Hobby"]);

// * Accessing object Properties (using array like notation expression)

var hobby = "fav Hobby";

console.log(user[hobby]);

// * for in loop....

for (let key in user) {
  console.log(key, ":", user[key]);
}

// * adding new properties

user.isTall = false;

user["hair color"] = "brown";

console.log(user);

// * delete properties

delete user.isTall;

delete user["hair color"];

console.log(user);

// * nested object
let person = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

// access nested object properties
console.log(person.cars.car1);

console.log(person["cars"]["car1"]);

var cars = "cars";
var car2 = "car2";

console.log(person[cars][car2]);

// delete nested object prop.

delete person.cars.car3;
console.log(person.cars);

// add nested object prop

person.cars.car3 = "Fiat";
person["cars"]["car3"] = "Fiat";

console.log(person.cars);

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
