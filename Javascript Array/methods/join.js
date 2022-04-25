/** ######################### Array.join() #########################
 * * The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 *
 * * The join() method does not change the original array.
 */

let arr = ["Banana", "Orange", "Apple", "Mango"];
console.log(arr.join());
console.log(arr.join("-"));
console.log(arr.join("--*"));
console.log(arr.join(" %% "));
console.log(arr.join(" and "));

/**
 * Array.join(separator)
 * ---- separator ---- The separator to be used.
Default is a comma.
 */
