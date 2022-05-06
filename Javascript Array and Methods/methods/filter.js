/** ######################### Array.filter() #########################
 * * The filter() method creates a new array filled with elements that pass a test provided by a function.
 * * The filter() method does not execute the function for empty elements.
 * * The filter() method does not change the original array.
 */

let ages = [32, 33, 16, 40, 15];

function checkAdult(age) {
  if (age >= 18) return true;
  return false;
}

let result = ages.filter(checkAdult);
console.log(result);

result = [10, 25, 45, 42, 22, 17, 16].filter((currentValue, index, arr) => {
  if (currentValue >= 18) return true;
});

console.log(result);
console.log(ages);

/**
 * array.filter(function(currentValue, index, arr),this)
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
