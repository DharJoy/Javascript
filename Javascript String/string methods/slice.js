/** ######################### Extract string - slice(start,end) #########################
 * * slice() extracts a part of a string and returns the extracted part in a new string.
 * * The method takes 2 parameters: the start position, and the end position (end not included).
 * * If a parameter is negative, the position is counted from the end of the string.
 * * If second parameter is omit, the method will slice out the rest of the string
 */

let language = "Javascript";

let sliced = language.slice(2, 5);
console.log(sliced);

sliced = language.slice(-10, -6);
console.log(sliced);

sliced = language.slice(4);
console.log(sliced);

sliced = language.slice(-6);
console.log(sliced);
