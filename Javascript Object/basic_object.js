/** ######################### Object #########################
 * * In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.
 */

let obj1 = {}; // literals way
obj1 = {
  name: "Sakib",
  city: "Dhaka",
  "hair color": "Black",
};
console.log(obj1);

// accessing properties (dot notation)

let name = obj1.name;
console.log(name);

// console.log(obj1.'hair color');

// accessing properties (array like notation)

let city = obj1["city"];
console.log(city);

console.log(obj1["hair color"]);

// method in object

let person = {
  name: "Karim",
  city: "Chittagong",
  getName: function () {
    // getName is a object method
    console.log(this.name);
  },
};

person.getName();

// add properties or method

person.hairColor = "Blue";
console.log(person);

person.getCity = function () {
  console.log(this.city);
};
person.getCity();

// delete properties or methods

person.isTall = true;

delete person.hairColor;

console.log(person);

// Property existence test, “in” operator

console.log("name" in person);

person["hair color"] = "black";

console.log("hair color" in person);
console.log("body color" in person);

// for in loop

for (key in person) {
  console.log(key);
}
for (key in person) {
  console.log(key, ":", person[key]);
}

// object constructor

let user = new Object();
user.name = "Fatima";
user.age = 35;
console.log(user);
