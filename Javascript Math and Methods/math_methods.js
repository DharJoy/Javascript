// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// -------------------- Math object Properties ----------------------

/** ######################### Math.E #########################
 * * Math.E returns Euler's number, base of natural logarithms, approximately 2.718.
 * *
 */

let x = Math.E;
console.log(x);

/** ######################### Math.LN2 #########################
 * * Math.LN2 returns the natural logarithm of 2, approximately 0.693.
 * *
 */

x = Math.LN2;
console.log(x);

/** ######################### Math.LN10 #########################
 * * Math.LN10 returns the natural logarithm of 10, approximately 2.302.
 * *
 */

x = Math.LN10;
console.log(x);

/** ######################### Math.LOG2E #########################
 * * Math.LOG2E returns the base-2 logarithm of E, approximately 1.442.
 * *
 */

x = Math.LOG2E;
console.log(x);

/** ######################### Math.LOG10E #########################
 * * Math.LOG10E returns the base-10 logarithm of E, approximately 0.434
 * *
 */

x = Math.LOG10E;
console.log(x);

/** ######################### Math.PI #########################
 * * Math.PI returns PI (the ratio of a circle's area to the square of its radius, approximately 3.14)
 * *
 */

x = Math.PI;
console.log(x);

/** ######################### Math.SQRT1_2 #########################
 * * Math.SQRT1_2 returns the square root of 1/2, approximately 0.707.
 * *
 */

x = Math.SQRT1_2;
console.log(x);

/** ######################### Math.SQRT2 #########################
 * * Math.SQRT2 returns the square root of 2, approximately 1.414.
 * *
 */

x = Math.SQRT2;
console.log(x);

// -------------------- Math object Methods ----------------------

/** ######################### Math.abs() #########################
 * * The Math.abs() method returns the absolute value of a number.
 * * A number representing the absolute value of the specified number.
 * * NaN if the value is not a number.
 * * 0 if the value is null.
 */

x = Math.abs(-7.25);
console.log(x);
console.log(Math.abs(7.25));
console.log(Math.abs(null));
console.log(Math.abs("ten"));
console.log(Math.abs(2 - 3));

/** ######################### Math.acos() #########################
 * * The Math.acos() method returns the arccosine of a number as a value value between 0 and PI radians.
 * * If the parameter x is outside the range -1 to 1, the method will return NaN.
 * * -1 will return the value of PI.
 */

console.log(Math.acos(0));
console.log(Math.acos(0.5));
console.log(Math.acos(10));
console.log(Math.acos(-1));

/** ######################### Math.acosh() #########################
 * * The Math.acosh() method returns the hyperbolic arccosine of a number.
 * * If the parameter x is less than 1, the method will return NaN.
 */

console.log(Math.acosh(2));
console.log(Math.acosh(0));
console.log(Math.acosh(10));

/** ######################### Math.asin() #########################
 * * The Math.asin() method returns the arcsine of a number as a value between -PI/2 and PI/2 radians.
 * * If the parameter x is outside the range -1 to 1, the browser will return NaN.
 * * 1 will return the value of PI/2. -1 will return the value of -PI/2.
 */

console.log(Math.asin(0.5));
console.log(Math.asin(1));
console.log(Math.asin(2));
console.log(Math.asin("1"));
console.log(Math.asin("One"));

/** ######################### Math.asinh() #########################
 * * The Math.asinh() method returns the hyperbolic arcsine of a number.
 */

console.log(Math.asinh(2));
console.log(Math.asinh(20));
console.log(Math.asinh(-2));
console.log(Math.asinh("Ten"));
console.log(Math.asinh("10"));

/** ######################### Math.atan() #########################
 * * The Math.atan() method returns the arctangent of a number as a value between -PI/2 and PI/2 radians.
 */

console.log(Math.atan(2));
console.log(Math.atan(-2));
console.log(Math.atan("2"));
console.log(Math.atan("Two"));
console.log(Math.atan());
console.log(Math.atan(""));

/** ######################### Math.atan2() #########################
 * * The Math.atan2() method returns the arctangent of the quotient of its arguments, as a numeric value between PI and -PI radians.
 *
 * * The number returned represents the counterclockwise angle in radians (not degrees) between the positive X axis and the point (x, y).
 *
 * * With atan2(), the y coordinate is passed as the first argument and the x coordinate is passed as the second argument.
 */

console.log(Math.atan2(8, 4));

/** ######################### Math.atanh() #########################
 * * The Math.atanh() method returns the hyperbolic arctangent of a number.
 *
 * * If the parameter x is greater than 1, or less than -1, the method will return NaN.
 *
 * * If the parameter x is 1, the method will return Infinity.
 *
 * * If the parameter x is -1, the method will return -Infinity.
 */

console.log(Math.atanh(2));
console.log(Math.atanh(0.2));
console.log(Math.atanh(-1));
console.log(Math.atanh(1));

/** ######################### Math.cbrt() #########################
 * * The Math.cbrt() method returns the cubic root of a number.
 */

console.log(Math.cbrt(2));

/** ######################### Math.celi() #########################
 * * The Math.ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.
 */

console.log(Math.ceil(3.4));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.6));
console.log(Math.ceil(-4.6));
console.log(Math.ceil(-0.6));
console.log(Math.ceil(0.6));

/** ######################### Math.clz32() #########################
 * * The Math.clz32() method (short for CountLeadingZeroes32), returns the number of leading zeros in a 32-bit binary representation of a number.
 */

console.log(Math.clz32());
console.log(Math.clz32(0));
console.log(Math.clz32(7));
console.log(Math.clz32(5));
console.log(Math.clz32(4));
console.log(Math.clz32(2));
console.log(Math.clz32(1));

/** #########################  #########################
 * * The Math.cos() method returns the cosine of a number.
 *
 * * Math.cos() returns a numeric value between -1 and 1, which represents the cosine of the angle
 */
console.log(Math.cos(5));
console.log(Math.cos(Math.PI * 2));
console.log(Math.cos(Math.PI));

/** ######################### Math.cosh() #########################
 * * The Math.cosh() method returns the hyperbolic cosine of a number.
 */
console.log(Math.cosh(3));
console.log(Math.cosh());
console.log(Math.cosh(""));
console.log(Math.cosh("25"));

/** ######################### Math.exp() #########################
 * * The Math.exp() method returns the value of Ex, where E is Euler's number (approximately 2.7183) and x is the number passed to it.
 */
console.log(Math.exp(2));
console.log(Math.pow(Math.E, 2));
console.log(Math.exp(-2));

/** ######################### Math.expm1() #########################
 * * The expm1() method returns the value of Ex minus 1, where E is Euler's number (approximately 2.7183) and x is the number passed to it.
 */

console.log(Math.expm1(2));
console.log(Math.exp(1));
console.log(Math.exp(-1));
console.log(Math.exp(5));
console.log(Math.exp(10));
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
