/** ######################### String methods - startsWith(searchValue,start) #########################
 * * The startsWith() method returns true if a string starts with a specified string.
 * * Otherwise it returns false. The startsWith() method is case sensitive.
 */

let str = "Hello world, welcome to the universe.";

// start at position 0
console.log(str.startsWith("Hello"));

// start at position 6
console.log(str.startsWith("Hello", 6));

// case senseitive
console.log(str.startsWith("hello"));
