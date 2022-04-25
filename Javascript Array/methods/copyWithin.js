/** ######################### Array.copyWithin(target,start,end) #########################
 * * Copies array elements within the array, to and from specified positions.
 * * The copyWithin() method overwrites the existing values.
 * * The copyWithin() method does not add items to the array.
 */

let mainArray = ["Banana", "Orange", "Apple", "Mango"];

// Copy the first two array elements to the last two array elements
let copied = mainArray.copyWithin(2, 0);
console.log(mainArray);
console.log(copied);

// Copy the first two array elements to the third and fourth position

let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruits);

// Copy the (third,forth) two array elements to the first and second position
let numbers = [10, 20, 30, 40, 50, 60, 70, 80];
numbers.copyWithin(0, 2, 4);
console.log(numbers);

/**
 * Array.copyWithin(target,start,end)
 *  --- target -- Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.
                  If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.
  *                
  * --- start -- Zero-based index at which to start copying elements from. If negative, start will be counted from the end.
                 If start is omitted, copyWithin will copy from index 0.
  *
  * --- end -- Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. 
                If negative, end will be counted from the end.If end is omitted, copyWithin will copy until the last index (default to arr.length).
 */
