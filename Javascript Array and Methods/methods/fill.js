/** ######################### Array.fill() #########################
 * * The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
 * * The fill() method overwrites the original array.
 */

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Fill all the elements with a value
let filled = fruits.fill("kiwi");
console.log(filled);
console.log(fruits);

// Fill the last two elements
fruits = ["Banana", "Orange", "Apple", "Mango"];
filled = fruits.fill("kiwi", 2);
console.log(filled);

// Fill the last 5th & 6th elements
fruits = ["Banana", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango"];
filled = fruits.fill("kiwi", 4, 6);
console.log(filled);
/**
 * array.fill(value,start,end)
 *  --- value -- Value to fill the array with. (Note all elements in the array will be this exact value.)
 *
 * --- start -- Start index (inclusive), default 0.
 *
 * --- end -- End index (exclusive), default arr.length.
 *
 */
