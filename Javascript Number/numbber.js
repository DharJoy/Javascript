/** ######################### Javascript Number #########################
 * * JavaScript has only one type of number. Numbers can be written with or without decimals.
 * *
 */

let x = 3.14;
let y = 3;

console.log("with decimal - ", x);
console.log("without decimal - ", y);

// * Extra large or extra small numbers can be written with scientific (exponent) notation

x = 123e5;
console.log(x);

y = 123e-5;
console.log(y);

// * JavaScript Numbers are Always 64-bit Floating Point

// * Integer Precision - Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

x = 999999999999999;
console.log(x);
y = 9999999999999999;
console.log(y);

// The maximum number of decimals is 17.

// * Floating Precision - Floating point arithmetic is not always 100% accurate

let wrong = 0.1 + 0.2;
console.log(wrong);

console.log(wrong == 0.3);

let right = (0.1 * 10 + 0.2 * 10) / 10;
console.log(right);
console.log(right == 0.3);

/** ######################### Adding numbers & String #########################
 * * JavaScript uses the + operator for both addition and concatenation.
 *
 * * Numbers are added. Strings are concatenated.
 */

// If we add two numbers, the result will be a number
let a = 10;
let b = 20;
console.log(a + b);
console.log(typeof (a + b));

// If we add two strings, the result will be a string concatenation

a = "10";
b = "20";
console.log(a + b);
console.log(typeof (a + b));

// If we add a number and a string, the result will be a string concatenation

a = "10";
b = 20;
console.log(a + b);
console.log(typeof (a + b));

// The JavaScript interpreter works from left to right.

/** ######################### Numeric Strings #########################
 * * JavaScript strings can have numeric content:
 */

a = 100;
console.log(a);
b = "200";
console.log(b);

//  JavaScript will try to convert strings to numbers in all numeric operations

a = "200";
b = "10";
console.log(a / b);

console.log(a * b);
console.log(a - b);
console.log(a + b);

/** ######################### NaN - Not a Number #########################
 * * NaN is a JavaScript reserved word indicating that a number is not a legal number.
 * *
 */

a = 100 / "ten";
console.log(a);

// However, if the string contains a numeric value , the result will be a number
console.log(100 / "10");

// we can use the global JavaScript function isNaN() to find out if a value is a not a number:

console.log(isNaN(100 / "ten"));
console.log(isNaN(100 / "10"));

console.log(NaN + 5);
console.log(NaN + "10");
console.log(typeof NaN);

/** ######################### Infinity #########################
 * * Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
 */

console.log(2 / 0);
console.log(-2 / 0);
console.log(typeof (10 / 0));

/** ######################### number Base #########################
 * * By default, JavaScript displays numbers as base 10 decimals.
 *
 * * But we can use the toString() method to output numbers from base 2 to base 36.
 *
 * * Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
 * *
 */
x = 32;
console.log(x.toString(32));
console.log(x.toString(16));
console.log(x.toString(12));
console.log(x.toString(18));
console.log(x.toString(10));
console.log(x.toString(8));
console.log(x.toString(2));
