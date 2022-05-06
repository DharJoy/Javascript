/** ######################### Array.splice() #########################
 * * The splice() method adds and/or removes array elements.
 * * The splice() method overwrites the original array.
 * * An array containing the removed items (if any).
 */

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// remove two items
var removed = fruits.splice(1, 2);
console.log(removed);
console.log(fruits);

// add two items & remove two items
fruits = ["Banana", "Orange", "Apple", "Mango"];
var add = fruits.splice(1, 2, "kiwi", "Lemon");
console.log(add);
console.log(fruits);

// only add items

var newFruits = fruits.splice(2, 0, "Grapes", "Pineapple", "Avocado");
console.log(fruits);

/**
 * * array.splice(index, howmany, item1, ....., itemX)
 * ==> index ==> The position to add/remove items.
Negative value defines the position from the end of the array.

 * ==> howmany ==> Number of items to be removed.

 * ==> items ==> New elements(s) to be added.
 */
