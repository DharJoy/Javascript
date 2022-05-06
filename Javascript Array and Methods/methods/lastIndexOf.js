/** ######################### Array.lastIndexOf() #########################
 * * The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
 * *
 */

let fruits = ["Apple", "Orange", "Apple", "Mango"];
let last_Apple = fruits.lastIndexOf("Apple");
console.log(last_Apple);

fruits = ["Orange", "Apple", "Mango", "kiwi", "Banana", "Apple"];
last_Apple = fruits.lastIndexOf("Apple");
console.log(last_Apple);

console.log(fruits.lastIndexOf("apple"));

console.log(fruits.lastIndexOf("Apple", 2));

console.log(fruits.lastIndexOf("Apple", -6));

/**
 * Array.lastIndexOf(searchElement, fromIndex)
 *
 * --- searchElement --- The value to search for.
 *
 * --- fromIndex --- A fromIndex value greater than or equal to the length of the array also causes the whole array to be searched.A fromIndex value greater than 0 is taken as the offset from the beginning of the array.A fromIndex value less than 0 is taken as the offset from the end of the array — in other words, it is taken as specifying the position at array.length + fromIndex. Therefore, if array.length + fromIndex is less than 0, the array is not searched, and the method returns -1.
 */
