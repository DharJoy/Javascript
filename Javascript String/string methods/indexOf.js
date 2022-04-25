/** ######################### String Methods - indexOf(searchValue,start) #########################
 * * The indexOf() method returns the position of the first occurrence of a value in a string.
 * * The indexOf() method returns -1 if the value is not found.
 * * The indexOf() method is case sensitive.
 */

let txt = "Hello world, welcome to the universe.";
console.log(txt.indexOf("welcome"));
console.log(txt.indexOf("Welcome"));

let str ='Hello world';
console.log(str.indexOf('e'));
console.log(str.indexOf('o'));
console.log(str.indexOf('o',5));

// The indexOf() method cannot search against a regular expression.