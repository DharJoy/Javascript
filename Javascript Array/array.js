// Array is a special kind of object, suited to storing and managing ordered data items.
// An array can hold many values under a single name, and you can access the values by referring to an index number.

//* Creating Array
// using [] (literal):

let array1 = ["😀", "😂", "😋"];

console.log(array1);

// using new Keyword (constructor) :

let array2 = new Array("😀", "😂", "😋");

console.log(array2);

// The call to new Array(number) creates an array with the given length, but without elements.
array2 = new Array(200);
console.log(array2);

// * Accessing Array Elements

// access an array element by referring to the index number. Array indexes start with 0.

console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array2[2]);

// * Changing an Array Element

array1[2] = "😹";
console.log(array1);

//* Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. Arrays use numbers to access its "elements".

//* Array Elements Can Be Objects,function,array,number string,null etc....

let array3 = [
  { first: "John", last: "Smith" },
  function x() {
    console.log("This is an array elements"), "Hello World";
  },
  253,
  null,
  undefined,
  true,
  [1, 2, 3],
];

console.log(array3);
