/** ######################### String Methods -includes(searchvalue,start) #########################
 * * The includes() method returns true if a string contains a specified string.
 * * Otherwise it returns false.
 * * The includes() method is case sensitive.
 * 
 */

let str = "Hello World";
console.log(str.includes("world"));
console.log(str.includes("World"));

let txt = "Hello world, welcome to the universe."
console.log(txt.includes("world",12));
console.log(txt.includes("world",4));
