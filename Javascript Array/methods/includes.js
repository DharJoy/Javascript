/** ######################### Array.includes() #########################
 * * The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * *
 */

let arr = [10, 20, 30, 40];
console.log(arr.includes(20));
console.log(arr.includes(70));

let arr1 = ["Banana", "Orange", "Kiwi", "Apple", "Mango", "Apple", "Mango"];
console.log(arr1.includes("kiwi", 4)); // false

arr1 = ["Banana", "Orange", "Kiwi", "Apple", "Mango", "Apple", "Mango"];
console.log(arr1.includes("Kiwi", 0)); // true

/**
 * Array.includes(searchElement, fromIndex)
 *
 * --- searchElement --- The value to search for.When comparing strings and characters, includes() is case-sensitive.
 *
 * --- fromIndex --- The position in this array at which to begin searching for searchElement.
 */
