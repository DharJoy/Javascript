/** ######################### String Methods - split(separator,limit) #########################
 * * The split() method splits a string into an array of substrings.
 *
 * * The split() method returns the new array.
 *
 * * The split() method returns the new array.
 *
 * * If (" ") is used as separator, the string is split between words.
 *
 */

let str = "Hello World!";
// Split the words
let myArray = str.split(" ");

console.log(myArray);

// Split the characters, including spaces
myArray = str.split("");
console.log(myArray);

// Use the limit parameter
str = "How are you doing today?";
myArray = str.split(" ", 3);
console.log(myArray);

// Use a letter as a separator
str = "Hello world";
myArray = str.split("o");
console.log(myArray);

// If the separator parameter is omitted, an array with the original string is returned

str = "Hello World";
myArray = str.split();
console.log(myArray);
