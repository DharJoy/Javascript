/** ######################### Array.entries() #########################
 * * The entries() method returns an Array Iterator object with key/value pairs
 * * The entries() method does not change the original array.
 */

let user = ["Clifford", "Josefina", "Emmie", "Boyd"];
let entries = user.entries();
console.log(user);
console.log(entries); // Object [Array Iterator] {}

console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());

// get value
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

// loop in entries
for (let e of entries) {
  console.log(e[0]); // print index
  console.log(e[1]); // print value
}
