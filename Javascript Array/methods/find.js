/** ######################### Array.find() #########################
 * * The find() method returns the value of the first element that passes a test.
 * * The find() method executes a function for each array element. The find() method returns undefined if no elements are found. The find() method does not execute the function for empty elements.
 * * The find() method does not change the original array.
 */

//  Find the value of the first element with a value over 18:

let ages = [12, 14, 19, 25, 65];

let result = ages.find((value, index, arr) => {
  if (value >= 18) return true;
});

console.log(ages);
console.log(result);

result = ages.find(function (value) {
  if (value > 18) return true;
});

console.log(result);

/**
 * array.find(function(currentValue, index, arr),this)
 *  --- function -- A function to run for each array element.
 *
 * --- currentValue	 -- The value of the current element.
 *
 * --- index -- The index of the current element.
 *
 * --- arr -- The array of the current element.
 *
 * --- this -- A value passed to the function as its this value.
 */
