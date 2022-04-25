/** ######################### Array.slice() #########################
 * * The slice() method returns selected elements in an array, as a new array.
 *
 * * The slice() method selects from a given start, up to a (not inclusive) given end.
 *
 * * The slice() method does not change the original array.
 */

let animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log("before slice :", animals);

let sliced = animals.slice(2, 4);
console.log(sliced);

console.log(animals);

console.log(animals.slice(1, 4));
console.log(animals.slice(2));
console.log(animals.slice(-2));
console.log(animals.slice(1, -2));

/**
 * * array.slice(start,end)
 * --- start -- Zero-based index at which to start copying elements from. If negative, start will be counted from the end.
                 If start is omitted, copyWithin will copy from index 0.
  *
  * --- end -- Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. 
                If negative, end will be counted from the end.If end is omitted, copyWithin will copy until the last index (default to arr.length).
 * 
 */
