/** ######################### String charAt(position)-methods #########################
 * * The charAt() method returns the character at a specified index (position) in a string
 * *
 */

let txt = "Hello World";

let char = txt.charAt(6);
console.log(char);

console.log(txt.charAt(3));
console.log(txt.charAt(8));

/** ######################### string property access #########################
 * * property access [ ] on strings
 * * If no character is found, [ ] returns undefined, while charAt() returns an empty string
 */

let str = "Javascript";
console.log(str[3]);
console.log(str[0]);
console.log(str[6]);

console.log("".charAt());
console.log(""[0]);
