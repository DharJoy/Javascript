/** * --------------------------- nullish coalescing operator (??)--------------------------------*
 * * The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
 */

let user;
console.log(user ?? "Anonymous"); // Anonymous
user = "John Smith";
console.log(user ?? "John Doe"); // John Smith

// * We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.

let firstName = undefined;
let lastName = null;
let userName = "John Doe";

console.log(firstName ?? lastName ?? userName ?? "Sakib");

/** * --------------------------- Comparison with || --------------------------------*
 * * || returns the first truthy value.
 * * ?? returns the first defined value.
 */

console.log(0 || 5);
console.log("" || "Hello");
console.log(0 ?? 5);
console.log("" ?? "Javascript");

// * Note - The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.
