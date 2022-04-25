/** ######################### Array.reduce() #########################
 * * The reduce() method executes a reducer function for array element.
 * * The reduce() method returns a single value: the function's accumulated result.
 * * The reduce() method does not execute the function for empty array elements.
 * * The reduce() method does not change the original array.
 */

let numbers = [10, 20, 30, 40, 50];

// without initial value

let sum = numbers.reduce((prevValue, curValue, curIndex) => {
  console.log(
    `previous: ${prevValue}, current: ${curValue}, index: ${curIndex}, returns: ${
      prevValue + curValue
    }`
  );
  return prevValue + curValue;
});

console.log(sum);

// with initial Value

sum = numbers.reduce((prevValue, curValue, curIndex) => {
  console.log(
    `previous: ${prevValue}, current: ${curValue}, index: ${curIndex},returns: ${
      prevValue + curValue
    }`
  );
  return prevValue + curValue;
}, 50);

console.log(sum);

function reducer(prevValue, curValue, curIndex, array) {
  let returns = prevValue + curValue;
  console.log(
    `previous: ${prevValue}, current: ${curValue}, index: ${curIndex}, returns: ${returns}`
  );
  return returns;
}

let arr = [1, 2, 3, 4, 5];

arr.reduce(reducer);

//* Sum of values in an object array

let x = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((prevValue, curValue) => {
  return prevValue + curValue.x;
}, 0);
console.log(x);

//* Flatten an array of arrays

let flattenArray = [
  [1, 2],
  [3, 4],
  [5, 6],
].reduce((prevValue, curValue) => {
  return prevValue.concat(curValue);
});

console.log(flattenArray);

//* Counting instances of values in an object

let countInstance = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Tiff"].reduce(
  (prevValue, curValue) => {
    if (curValue in prevValue) {
      prevValue[curValue]++;
    } else {
      prevValue[curValue] = 1;
    }
    return prevValue;
  },
  {}
);

console.log(countInstance);

// * Grouping objects by a property

let users = [
  { name: "Maximillia", age: 25 },
  { name: "Pasquale", age: 20 },
  { name: "Gaylord", age: 25 },
  { name: "Ayden", age: 25 },
];

function groupBy(obj, prop) {
  return obj.reduce((prevValue, curValue) => {
    let key = curValue[prop];
    if (!prevValue[key]) {
      prevValue[key] = [];
    }
    prevValue[key].push(curValue);
    return prevValue;
  }, {});
}

let groupedByProp = groupBy(users, "age");
console.log(groupedByProp);

//* remove duplicate items

let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

let unique = myArray.reduce((prev, curr) => {
  if (prev.indexOf(curr) === -1) {
    prev.push(curr);
  }
  return prev;
}, []);

console.log(unique);
/**
 * array.reduce(function(previousValue, currentValue, currentIndex, arr), initialValue)
 *
 * => function : => A reducer callback function
 *
 * => previousValue : =>  the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
 *
 * => currentValue : =>  the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
 *
 * => currentUIndex : => the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
 *
 * => arr : =>  the array to traverse.
 *
 * => initialValue : => A value to which previousValue is initialized the first time the callback is called.
 */
