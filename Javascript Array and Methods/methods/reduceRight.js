/** ######################### Array.reduceRight() #########################
 * *
 * * The reduceRight() method works from right to left.
 */

let numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduceRight((prevValue, curValue, curIndex) => {
  console.log(
    `previous: ${prevValue}, current: ${curValue}, index: ${curIndex}, returns: ${
      prevValue + curValue
    }`
  );
  return prevValue + curValue;
});

console.log(sum);

var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight(function (a, b) {
  return a.concat(b);
}, []);
console.log(flattened);
