/** ######################### Array.flat() #########################
 * * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * *
 */

let arr = [1, 2, [3, 4, [5, 6]]];

// depth 1
let arr1 = arr.flat(1);
console.log(arr1);
console.log(arr);

// depth 2
let arr2 = arr.flat(2);
console.log(arr2);

// depth Infinity
console.log([1, 2, [3, 4, [5, 6, [7, 8]]]].flat(Infinity));
