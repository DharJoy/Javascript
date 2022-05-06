/** ######################### String Methods - search(value) #########################
 * * The search() method matches a string against a regular expression 
 * 
 * * The search() method returns the index (position) of the first match
 * 
 * * The search() method returns -1 if no match is found.
 * 
 * * The search() method is case sensitive.
 */

let str = "Mr. Blue has a blue house";

// Search for "Blue"
console.log(str.search("Blue"));

//Search for "blue"
console.log(str.search('blue'));

// Search for /Blue/
console.log(str.search(/Blue/));

// Search for /blue/
console.log(str.search(/blue/));

// Search case insensitive
console.log(str.search(/bLue/i));