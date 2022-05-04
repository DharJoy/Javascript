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
