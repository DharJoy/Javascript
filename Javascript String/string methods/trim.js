/** ######################### String - trim() #########################
 * * The trim() method removes whitespace from both sides of a string
 * *
 */

let text = "         Hello Javascript!";
console.log(text);

let trimed = text.trim();
console.log(trimed);

// * trimStart() - remove whitespace from left side of a string

let str = "         Hello Javascript!          ";
trimed = str.trimStart();
console.log(trimed);

// * trimEnd() - remove whitespace from right side of a string

trimed = str.trimEnd();
console.log(trimed);

// * padStart(maxLength,fillString) -  padding at the beginning
let str2 = "Hello";
paded = str2.padStart(10, "@");
console.log(paded);

//  * padEnd(maxLength,fillString) -  padding at the end
paded = str2.padEnd(10, "-");
console.log(paded);
