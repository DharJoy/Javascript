/** ######################### String Methods - match(searchValue) #########################
 * * The match() method matches a string against a regular expression ** (If the search value is a string, it is converted to a regular expression)
 * * The match() method returns an array with the matches.
 * * The match() method returns null if no match is found.
 */

let str = "The rain in SPAIN stays mainly in the plain"

// A seach for "ain" using a regular expression
console.log(str.match(/ain/));
// A seach for "ain" using a string
console.log(str.match("ain")); 
// A global seach for "ain"
console.log(str.match(/ain/g));
// A global, case-insensitive search
console.log(str.match(/ain/gi));