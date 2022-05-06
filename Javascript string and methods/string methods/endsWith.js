/** ######################### String endsWith(searchValue,length) - methods #########################
 * * The endsWith() method returns true if a string ends with a specified string.
 * * Otherwise it returns false.
 * * The endsWith() method is case sensitive.
 */

let text = "Hello world, welcome to the universe.";

console.log(text.endsWith("world")); // check full sentence
console.log(text.endsWith("world", 11)); // Check if the 11 first characters of a string ends with "world"


console.log("Hello World".endsWith("world"))
console.log("Hello World".endsWith("World"))