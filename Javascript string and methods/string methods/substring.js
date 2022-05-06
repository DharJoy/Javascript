/** ######################### string extract - substring(start,end) #########################
 * * substring() is similar to slice().
 * * The difference is that substring() cannot accept negative indexes.
 * * If second parameter is omit, the method will slice out the rest of the string
 */

let language = "Javascript";

let subString = language.substring(4, 10);
console.log(subString);

subString = language.substring(4);
console.log(subString);

subString = language.substring(-10, -6);
console.log(subString); // empty string
