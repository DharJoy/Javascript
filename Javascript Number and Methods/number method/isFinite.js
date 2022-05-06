/** ######################### Numbers methods - isFinite(value) #########################
 * * The Number.isFinite() method returns true if a number is a finite number.
 * * Infinite (not finite) numbers are Infinity, -Infinity, or NaN
 */

let x = 100;
console.log(Number.isFinite(x));
console.log(isFinite(x));

console.log(Number.isFinite("100"));
console.log(isFinite("100"));

/** ######################### Difference Between isFinite() and Number.isFinite() #########################
 *
 * * isFinite() returns true if a value is a finite number.
 *
 * * Number.isFinite() returns true if a number is a finite number.
 *
 * * isFinite() converts the value to a number before testing it.
 */

console.log(Number.isFinite(+1.25));
console.log(Number.isFinite(-1.25));
console.log(Number.isFinite("2022/03/22"));
console.log(Number.isFinite(5 - 2));
console.log(Number.isFinite(5 / 2));
console.log(Number.isFinite(0));
console.log(Number.isFinite(0 / 0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
