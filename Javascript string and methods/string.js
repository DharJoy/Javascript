/** ######################### String #########################
 * * JavaScript strings are for storing and manipulating text.
 * * A JavaScript string is zero or more characters written inside quotes.
 */

let example = "This is a text.";
console.log(example);

/** ######################### quotes #########################
 * * string can be single or double quotes
 */

// let singleQuotes = 'Hello Javascript';
// let doubleQuotes = "Hello Javascript";

let str1 = "It's alright";
str1 = "He is called 'Johnny'";
str1 = 'He is called "Johnny"';
console.log(str1);

// * empty strings
let emptyStr = "";
console.log(typeof emptyStr);

/** ######################### backslash escape character #########################
 * *
 * *
 */

// let str2 = "They are so-called \"vikings\" from the north"
// let str2 = "They are so-called \'vikings\' from the north"
// let str2 = "They are so-called \\vikings\\ from the north";
// let str2 = "They are so-called \b vikings \b from the north";
// let str2 = "They are so-called \n vikings \n from the north";
// let str2 = "They are so-called \t vikings \t from the north";
// let str2 = "They are so-called \v vikings \v from the north";
let str2 = "They are so-called \r\n vikings  from the north";
console.log(str2);

/** ######################### string as object #########################
 * *
 * * Do not create Strings objects.
 * * The new keyword complicates the code and slows down execution speed.
 * * Comparing two JavaScript objects always returns false.
 */
let str3 = "John";
let str4 = new String("John");
console.log(str3);
console.log(str4);
let str5 = new String("John");

console.log(str4 == str5);
console.log(str4 === str5);

// All string methods return a new string. They don't modify the original string.
// ** Note -- Strings are immutable: Strings cannot be changed, only replaced.
