/** ######################### Array.findIndex() #########################
 * * The findIndex() method returns the index (position) of the first element that passes a test, returns -1 if no match is found.
 * * The findIndex() method executes a function for each array element.
 * * The findIndex() method does not execute the function for empty array elements.
 * * The findIndex() method does not change the original array.
 */

let ages = [12, 14, 19, 25, 65];

let result = ages.findIndex((value, index, arr) => {
  if (value >= 18) return true;
});

console.log(result);

let user = ["Dave", "Damian", "Nathen"];

result = user.findIndex((value) => {
  if (value.length > 4) return true;
});

console.log(result);

result = user.findIndex((value) => {
  if (value.length > 10) return true;
});

console.log(result);

/**
 * array.findIndex(function(currentValue, index, arr),this)
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
