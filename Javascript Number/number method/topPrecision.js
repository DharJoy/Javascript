/** ######################### number methods - toPrecision(x) #########################
 * * The toPrecision(x) method formats a number to a specified length.
 * * A decimal point and nulls are added (if needed), to create the specified length.
 * * x - The number of digits. If omitted, the number is returned without any formatting.
 */

// return value -The number formatted to the specified precision.

let number = 13.3745;
console.log(number.toPrecision());

// Format a number to a specified length
let n = number.toPrecision(2);
console.log(n);

// Format a small number
number = 0.001658853;
n = number.toPrecision(2);
console.log(n);

n = number.toPrecision(3);
console.log(n);

n = number.toPrecision(10);
console.log(n);

console.log(typeof n);
