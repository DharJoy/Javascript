/** ######################### String methods - valueOf() #########################
 * * The valueOf() method returns the primitive value of a string.
 *
 * * The valueOf() method does not change the original string.
 *
 * * The valueOf() method can be used to convert a string object into a string.
 */

let txt = "Hello World!";

// get the value of a text
console.log(txt.valueOf()); // the same as console.log(txt)

// Get the value of a String object
let str = new String("Hello");
console.log(str.valueOf());

console.log(str);
