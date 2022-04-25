/** ######################### replace() -method #########################
 * * The replace() method replaces a specified value with another value in a string
 * * The replace() method does not change the string it is called on.
 * * The replace() method returns a new string.
 * * The replace() method replaces only the first match
 * * By default, the replace() method replaces only the first match. replace() method is case-sensitive.
 */

let str = "Please visit Microsoft!";

let replacedText = str.replace("Microsoft", "W3Schools");

console.log(replacedText);
console.log(str);

let str2 = "Please visit Microsoft! and Microsoft!";
replacedText = str2.replace("Microsoft", "W3schools.com");
console.log(replacedText);

let str3 = "Please visit microsoft! and Microsoft!";
replacedText = str3.replace("Microsoft", "W3Schools.com");
console.log(replacedText);
