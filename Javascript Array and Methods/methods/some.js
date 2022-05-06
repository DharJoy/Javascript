/** ######################### Array.some() #########################
 * * The some() method checks if any array elements pass a test (provided as a function).

The some() method executes the function once for each array element:

 ==> If the function returns true, some() returns true and stops.
 ==> If the function returns false, some() returns false and stops.

 * * The some() method does not execute the function for empty array elements.

 * * The some() method does not change the original array.
 */

let numbers = [15, 18, 20, 25, 10];

let above20 = numbers.some((value, index, arr) => {
  return value >= 20;
});

let above30 = numbers.some((value, index, arr) => {
  return value >= 30;
});

console.log(above20);
console.log(numbers);

console.log(above30);
/**
 * array.some(function(currentValue, index, arr), thisValue)
 *  --- currentValue -- The current element being processed in the array.
 *
 * --- index -- The index of the current element being processed in the array.
 *
 * --- arr -- The array every was called upon.
 *
 * --- this -- A value to use as this when executing callbackFn.
 */
