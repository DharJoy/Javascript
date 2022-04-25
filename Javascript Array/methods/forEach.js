/** ######################### Array.forEach() #########################
 * * The forEach() method executes a provided function once for each array element.
 * * The forEach() method is not executed for empty elements.
 */

let arr = [10, 20, 30, 40];

let result = arr.forEach((e) => console.log(e));

// * No operation for uninitialized values:

let arr1 = [10, 20, , 40, , 50];
let callbackRuns = 0;
console.log(arr1.length); // 6

arr1.forEach((e) => {
  console.log(e);
  callbackRuns++;
});

console.log("callback function runs : ", callbackRuns, " times."); // 4

// * Converting a for loop to forEach

let arr2 = ["item1", "item2"];

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

arr2.forEach((e) => console.log(e));

/**
 * array.forEach(function(currentValue, index, arr),this)
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
