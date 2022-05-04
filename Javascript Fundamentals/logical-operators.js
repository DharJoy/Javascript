/**
 * * There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
 */

/** ----------------- logical operators ----------------
 *
 * logical operator --
 *                  | -- && (and)
 *                  | -- || (or)
 *                  | -- ! (not)
 *                  | -- ?? (Nullish Coalescing)
 */

/**
 * * ----------------- || (or) operators -----------------
 * Evaluates operands from left to right.
 * For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
 * If all operands have been evaluated (i.e. all were false), returns the last operand.
 * OR || returns the first truthy value or the last one if no truthy value is found.
 */

console.log(1 || 0);
console.log(true || 100);
console.log(true || false);
console.log(1 || null);
console.log("" || undefined || null || "0");
console.log("Sakib" || undefined || null || "john");

let x = false || 0;
x || alert("Hello");

/**
 * * ----------------- && (and) operators -----------------
 * Evaluates operands from left to right.
 * For each operand, converts it to boolean. If the result is false, stops and returns the original value of that operand.
 * If all operands have been evaluated (i.e. all were truthy), returns the last operand.
 * && (AND) returns the first falsy value or the last value if none were found.
 */
console.log(1 && 0);
console.log(true && 100);
console.log(true && false);
console.log(1 && null);
console.log("" && undefined && null && "0");
console.log("Sakib" && undefined && null && "john");
console.log("John" && "Tamim");

/** * Note : The precedence of AND && operator is higher than OR || */

console.log(null || (2 && 3) || 5);
/**
 * step 1 -> 2 && 3 > 3
 * step 2 -> null || 3 || 5 => return 3
 */

/**
 * *----------------- !(not) operators -----------------
 * Converts the operand to boolean type: true/false.
 * Returns the inverse value.
 * A double NOT !! is sometimes used for converting a value to boolean
 */

console.log(!true);
console.log(!false);
console.log(!"");
console.log(!"a");

console.log(!!true);
/**
 * step1 --> !true converts in false
 * step2 --> !false converts in again true.
 */

console.log(alert(1) || 2 || alert(3)); // alert 1 and log 2

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
