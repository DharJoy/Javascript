/** ######################### Array.concat() #########################
 * * Joins two or more arrays, and returns a copy of the joined arrays
 * * The concat() method does not change the existing arrays.
 */

// Join two arrays
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let concat = arr1.concat(arr2);
console.log(concat);

// Join three arrays
let arr3 = ["Robin"];
concat = arr1.concat(arr2, arr3);
console.log(concat);

// add new elements
concat = arr1.concat("Emil", "Tobias", "Linus", "Robin");
console.log(concat);
