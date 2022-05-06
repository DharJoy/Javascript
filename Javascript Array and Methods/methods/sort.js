/** ######################### Array.short() #########################
 * * The sort() sorts the elements of an array.
 * * The sort() overwrites the original array.
 * * The sort() sorts the elements as strings in alphabetical and ascending order.
 */

let characters = ["a", "d", "c", "e", "b"];
let sortCharacter = characters.sort();
console.log(characters);

let numbers = [1, 3, 4, 6, 8, 10, 7, 2, 9, 5];
let sortNumbers = numbers.sort();
console.log(numbers);

// using compare function(string)
function compare(a, b) {
  if (a < b) {
    return -1;
  }
  return 1;
}

// using compare(number)
function compareNum(a, b) {
  return a - b;
}

sortNumbers = numbers.sort(compareNum);
console.log(sortNumbers);

let users = [
  "Erna",
  "Jammie",
  "Colten",
  "Brayan",
  "Kirstin",
  "Buddy",
  "Carmela",
  "Mae",
  "Jarrell",
];

console.log(users.sort());

let items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
console.log("Sorted by value");
let sortedValue = items.sort((a, b) => a.value - b.value);
console.log(items);

//sort by name
console.log("sorted by name");
let sortedName = items.sort((a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  }
  if (a.name.toUpperCase > b.name.toUpperCase()) {
    return 1;
  }
  return 0;
});
console.log(items);
