/** ######################### String Extract Method - substr(start,length) #########################
 * * substr() is similar to slice().
 * * The difference is that the second parameter specifies the length of the extracted part.
 * * If second parameter is omit, the method will slice out the rest of the string
 * * If the first parameter is negative, the position counts from the end of the string.
 */
let language = "Javascript";

let subStr = language.substr(4, 6);
console.log(subStr);

subStr = language.substr(0);
console.log(subStr);

subStr = language.substr(-4);
console.log(subStr);
