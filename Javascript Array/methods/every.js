/** ######################### Array.every() #########################
 * * Checks if every element in an array pass a test.
 * * The every() method returns true if the function returns true for all elements, or returns false.
 * * The every() method does not execute the function for empty elements
 * * The every() method does not change the original array
 */

let arr = [1, 30, 39, 29, 10, 13];

function bigerThan20(element, index, array) {
  if (element > 20) {
    return true;
  }
  return false;
}
console.log(arr.every(bigerThan20));
console.log([30, 39, 29].every(bigerThan20));
console.log(arr);

// inline function

let checked = arr.every(function (el, index, arr) {
  if (el > 20) return true;
  return false;
});

console.log(checked);

checked = [25, 26, 89].every(function (el, index, arr) {
  if (el > 20) return true;
  return false;
});

console.log(checked);

// arrow function

checked = arr.every((el, index, arr) => {
  if (el > 20) return true;
});

console.log(checked);

checked = [100, 200, 300].every((el, index, arr) => {
  if (el > 20) return true;
});

console.log(checked);

/**
 * array.every(function(currentValue, index, arr), thisValue)
 *  --- currentValue -- The current element being processed in the array.
 *
 * --- index -- The index of the current element being processed in the array.
 *
 * --- arr -- The array every was called upon.
 *
 * --- this -- A value to use as this when executing callbackFn.
 */
