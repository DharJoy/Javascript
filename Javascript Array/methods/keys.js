/** ######################### Array.keys() #########################
 * * The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
 * * The keys() method does not change the original array.
 */

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let keys = fruits.keys();

console.log(keys);

for (let element of keys) {
  console.log(element);
}

// does'nt ignore blank

let arr = [1, , 3];
console.log(arr.keys());
console.log(Array.from(arr.keys()));
