/** ######################### string concat() - method #########################
 * * concat() joins two or more strings
 * *
 */

let text1 = "Hello";
let text2 = "World!";

let conCated = text1.concat(text2);
console.log(conCated);

conCated = text1.concat(" ", text2);
console.log(conCated);

// * The concat() method can be used instead of the plus operator.

conCated = "Hello" + " 👋 " + "world!";
console.log(conCated);

conCated = "Hello".concat(" 👋 ", "World!");
console.log(conCated);

