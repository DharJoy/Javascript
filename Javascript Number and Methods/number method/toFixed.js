/** ######################### Number methods - toFixed(x) #########################
 * * The toFixed() method converts a number to a string.
 * * The toFixed() method rounds the string to a specified number of decimals.
 * * If the number of decimals are higher than in the number, zeros are added.
 */

// * x - Optional Number of decimals.Default is 0 (no decimals)
let number = 5.56789;
console.log(number.toFixed());

console.log(number.toFixed(2));

console.log(typeof number.toFixed());

console.log(number.toFixed(10));
