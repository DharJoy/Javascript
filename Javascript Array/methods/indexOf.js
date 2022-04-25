/** ######################### Array.indexOf() #########################
 * * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * *
 */

let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(30, 4)); // -1
console.log(arr.indexOf(30, -1)); // -1
console.log(arr.indexOf(30, 0)); // -1

/**
 * Array.indexOf(searchElement, fromIndex)
 *
 * --- searchElement --- The value to search for.
 *
 * --- fromIndex --- The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).
 */
