/** ######################### Math.floor() #########################
 * * The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
 */

console.log(Math.floor(4.4));
console.log(Math.floor(4.6));
console.log(Math.floor(-4.5));

/** ######################### Math.fround() #########################
 * * The Math.fround() method returns the nearest (32-bit single precision) float representation of a number.
 */

console.log(Math.fround(2.6));
console.log(Math.fround(2.4));
console.log(Math.fround(2.49));
console.log(Math.fround(2.5));

/** ######################### Math.log() #########################
 * * The Math.log() method returns the natural logarithm (base E) of a number.
 */

console.log(Math.log(2));
console.log(Math.log(20));
console.log(Math.log(-20));
console.log(Math.log(0));

/** ######################### Math.log10() #########################
 * * The Math.log10() method returns the base-10 logarithm of a number.
 */
console.log(Math.log10(2));
console.log(Math.log10(20));
console.log(Math.log10(-20));
console.log(Math.log10(-1));
console.log(Math.log10(0));

/** ######################### Math.log1p() #########################
 * * The Math.log1p() method returns the natural logarithm (base E) of 1 + a number.
 * * If the number is -1, -Infinity is returned.
 * * If the number is less than -1, NaN is returned.
 */

console.log(Math.log1p(2));
console.log(Math.log1p(-2));
console.log(Math.log1p(-1));
console.log(Math.log1p(0));

/** ######################### Math.log2() #########################
 * * The Math.log2() method returns the base-2 logarithm of a number.
 * * If the number is -1, -Infinity is returned.
 * * If the number is less than -1, NaN is returned.
 */

console.log(Math.log2(2));
console.log(Math.log2(-2));
console.log(Math.log2(-1));
console.log(Math.log2(0));

/** ######################### Math.sign() #########################
 * * The Math.sign() method retuns whether a number is negative, positive or zero.
 * * If the number is positive, this method returns 1.
 * * If the number is negative, it returns -1.
 * * If the number is zero, it returns 0.
 */

console.log(Math.sign(-2));
console.log(Math.sign(2));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign());

/** #########################  Math.sin()  #########################
 * * The Math.sin() method returns the sine of a number.
 * * A number (from -1 to 1) representing the sine of an angle.
 * * NaN if the value is empty.
 */

console.log(Math.sin(-2));
console.log(Math.sin(0));
console.log(Math.sin(2));
console.log(Math.sin());
console.log(Math.sin(Math.PI));
console.log(Math.sin(Math.PI / 2));

/** ######################### Math.sinh() #########################
 * * The sinh() method returns the hyperbolic sine of a number.
 */

console.log(Math.sinh(-2));
console.log(Math.sinh(0));
console.log(Math.sinh(2));
console.log(Math.sinh());
console.log(Math.sinh(Math.PI));
console.log(Math.sinh(Math.PI / 2));

/** ######################### Math.sqrt() #########################
 * * The Math.sqrt() method returns the square root of a number.
 * * If x is a negative number, NaN is returned.
 */

console.log(Math.sqrt(0));
console.log(Math.sqrt(1));
console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
console.log(Math.sqrt(-9));

/** ######################### Math.max() #########################
 * * The Math.max() method returns the number with the highest value.
 * Infinity if no arguments are given.
 * NaN if one or more arguments are not a number.
 */

console.log(Math.max(45, 68));
console.log(Math.max(45, 6, 78, 84, 12));
console.log(Math.max(-5, -10));
console.log(Math.max(1.5, 2.5));

/** ######################### Math.min() #########################
 * * The Math.min() method returns the number with the lowest value.
 * Infinity if no arguments are given.
 * NaN if one or more arguments are not a number.
 */

console.log(Math.min(45, 68));
console.log(Math.min(45, 6, 78, 84, 12));
console.log(Math.min(-5, -10));
console.log(Math.min(1.5, 2.5));

/** ######################### Math.pow() #########################
 * * The Math.pow() method returns the value of x to the power of y (xy).
 */

console.log(Math.pow(2, 3));
console.log(Math.pow(0, 1));
console.log(Math.pow(1, 1));
console.log(Math.pow(1, 10));
console.log(Math.pow(3, 3));
console.log(Math.pow(-3, 3));
console.log(Math.pow(2, 4));

/** ######################### Math.random() #########################
 * * The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
 */

console.log(Math.random());
// Return a random number between 1 and 10
console.log(Math.floor(Math.random() * 10 + 1));
// Return a random number between 1 and 100
console.log(Math.floor(Math.random() * 100 + 1));

/** ######################### Math.round() #########################
 * * The Math.round() method rounds a number to the nearest integer.
 */

console.log(Math.round(2.4));
console.log(Math.round(2.5));

console.log(Math.round(2.6));
console.log(Math.round(2.5));
console.log(Math.round(2.49));
console.log(Math.round(-2.6));
console.log(Math.round(-2.5));
console.log(Math.round(-2.49));

/** ######################### Math.tan() #########################
 * * The Math.tan() method returns the tangent of a number.
 */

console.log(Math.tan(2));
console.log(Math.tan(1));
console.log(Math.tan(-1));
console.log(Math.tan());

/** ######################### Math.tanh() #########################
 * * The Math.tanh() method returns the hyperbolic tangent of a number.
 */

console.log(Math.tanh(2));
console.log(Math.tanh(1));
console.log(Math.tanh(-1));
console.log(Math.tanh());

/** ######################### Math.trunc() #########################
 * * The Math.trunc() method returns the integer part of a number.
 * This method will NOT round the number up/down to the nearest integer, but simply remove the decimals.
 */

console.log(Math.trunc(2.6));
console.log(Math.trunc(2.5));
console.log(Math.trunc(2.49));
console.log(Math.trunc(-2.6));
console.log(Math.trunc(-2.5));
console.log(Math.trunc(-2.49));
