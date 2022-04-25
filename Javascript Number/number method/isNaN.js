/** ######################### Numbers methods - isInteger(value) #########################
 * * The Number.isNaN() method returns true if the value is NaN, and the type is a Number.
 *
 * In JavaScript, NaN is short for "Not-a-Number".
 * In JavaScript, NaN is a number that is not a legal number.
 *
 */
console.log(Number.isNaN(10));
console.log(Number.isNaN(-10));
console.log(Number.isNaN(10.35));
console.log(Number.isNaN("10"));
console.log(Number.isNaN(10 / 0));
console.log(Number.isNaN("Ten"));
console.log(Number.isNaN(10 - 5));
console.log(Number.isNaN("2005/12/12"));
console.log(Number.isNaN(" "));
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(false));
console.log(Number.isNaN(true));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("NaN"));
console.log(Number.isNaN(null));

// * isNaN() converts the value to a number before testing it.
/** ######################### Difference Between isnan() and Number.isnan() #########################
 * * isNaN() method returns true if a value is Not-a-Number.
 * * Number.isNaN() returns true if a number is Not-a-Number.
 */

console.log(isNaN(10));
console.log(isNaN(-10));
console.log(isNaN(10.35));
console.log(isNaN("10"));
console.log(isNaN(10 / 0));
console.log(isNaN("Ten"));
console.log(isNaN(10 - 5));
console.log(isNaN("2005/12/12"));
console.log(isNaN(" "));
console.log(isNaN(0 / 0));
console.log(isNaN(false));
console.log(isNaN(true));
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN("NaN"));
console.log(isNaN(null));

/** ######################### Number methods - NaN #########################
 * * In JavaScript, NaN is short for "Not-a-Number".
 * * In JavaScript, NaN is a number that is not a legal number.
 * * The Global NaN property is the same as the Number.Nan property.
 * *
 */

let y = Number.NaN;

console.log(y);

y = NaN;
console.log(y);
