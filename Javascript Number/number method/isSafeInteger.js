/** ######################### what is Safe integer #########################
 * *
 * * A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number: all integers from (253 - 1) to -(253 - 1).
 */

/** ######################### Number methods - isSafeInteger(value) #########################
 * *
 * * The Number.isSafeInteger() method returns true if a number is a safe integer.
 */

console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(-100));
console.log(Number.isSafeInteger("10"));

console.log(Number.isSafeInteger(5 - 2));
console.log(Number.isSafeInteger(0));
console.log(Number.isSafeInteger(0.5));
console.log(Number.isSafeInteger(0 / 0));

console.log(Number.isSafeInteger(Math.pow(2, 55)));
console.log(Number.isSafeInteger(Math.pow(2, 55) - 1));

console.log(Number.isSafeInteger(true));
console.log(Number.isSafeInteger(false));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger(-0 / 0));
