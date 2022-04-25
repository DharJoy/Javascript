/** ######################### Array.push() #########################
 * * The push() method adds one or more elements to the end of an array and returns the new length of the array.
 * * Modify the original Array
 */

let person = ["Amir", "Abbigail", "Anika", "Jess"];
console.log(person);

// single elements
let pushed = person.push("Derrick");
console.log(person);
console.log(pushed);

// multiple elements
pushed = person.push("Malinda", "Westley", "Louvenia");
console.log(person);
console.log(pushed);

/**
 * Array.push(elements)
 *
 * ----- elements ----- The element(s) to add to the end of the array.
 */
