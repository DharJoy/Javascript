/**
 * Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types.
 */

var x = 100;
var y = "Hello";
var z = null;

var a = x;
var b = y;
var c = z;

console.log("before changing value");
console.log(`x = ${x} y = ${y}`);
console.log(`a = ${a} b = ${b}`);
console.log(`c = ${c}`);

a = 25;
b = "test";
c = undefined;
console.log("after changing value");
console.log(`a = ${a} b = ${b}`);
console.log(`c = ${c}`);

/**
 * Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
 *
 * Javascript has 3 data types that are passed by reference: Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.
 */

let user = {
  name: "Karim",
  age: 25,
};

let copyObj = user;
copyObj.name = "Sabbir";

console.log(user);

let arr = [1, 2, 3];

var arrCopy = arr;
arrCopy[1] = 5;

console.log(arr);

/**
 * * use "==="
 * When the equality operators, == and ===, are used on reference-type variables, they check the reference. If the variables contain a reference to the same item, the comparison will result in true.
 */

var arr1 = ["Sakib", "Karim"];
var arr2 = arr1;

console.log(arr1 === arr2);

var arr3 = ["Sakib", "Karim"];
console.log(arr1 === arr3);

var obj = {
  lang: "JavaScript",
};

var copyObj2 = obj;

console.log(obj === copyObj2);
console.log(obj === { lang: "Javascript" });
