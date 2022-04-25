/** ------------------ Comparison and logical operators --------------------
 * * Comparison and Logical operators are used to test for true or false.
 */

/** ------------------ Comparison operators --------------------
 * * Comparison operators are used in logical statements to determine equality or difference between variables or values.
 *
 * Operators --
 *          |-- equal to (==)
 *          |-- equal value and equal type (===)
 *          |-- not equal (!=)
 *          |-- not equal value or not equal type (!==)
 *          |-- greater than (>)
 *          |-- greater than or equal to (>=)
 *          |-- less than (<)
 *          |-- less than or equal to (<=)
 */

/** ------------------ string comparison ------------------
 * * Javascript use "lexicographical" order for string comparison.
 */

let a = "Hello";
let b = "Hi";
console.log(a > b);
console.log("A" > "a");
console.log("A" == "a");

// equality check

console.log("10" == 20);
console.log("25" == 25); // string '25' becomes a number 25
console.log(01 == "01"); // string '01' becomes a number 01

console.log(25 === "25"); // false, because they are different type
console.log(100 === 100);
console.log("Hello" === "Hello");

console.log(20 != 15);
console.log(10 != 10);

console.log("5" !== 5);
console.log(100 !== "100");

// greater and less than

console.log(10 > 25);
console.log(100 > 50);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 25);
console.log(100 < 500);
console.log(5 < 5);
console.log(5 >= 5);

// null & undefined

console.log(null == undefined);
console.log(null === undefined);

console.log(null > 0);
console.log(null == 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

/** ----------------- logical operators ----------------
 *
 * logical operator --
 *                  | -- && (and)
 *                  | -- || (or)
 *                  | -- ! (not)
 */

/** ----------------- || (or) operators -----------------
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

// let x = false / true;
// x || alert("Hello");

/** ----------------- && (and) operators -----------------
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

/** ----------------- !(not) operators -----------------
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

// console.log(alert(1) || 2 || alert(3)); // alert 1 and 2
