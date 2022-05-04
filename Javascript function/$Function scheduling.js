/** ######################### function scheduling #########################
 * * We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.
 */

/** ######################### setTimeout #########################
 * * The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
 */

//* syntax : setTimeout(function,timer,[arguments])

function sayHi() {
  console.log("Hello World!");
}
setTimeout(sayHi, 2000);
console.log("Abc");

// using arrow function

setTimeout(() => console.log("lorem ipsum at"), 3000);

// * with arguments

setTimeout(
  (name, age) => console.log(`Mr ${name} is ${age} years Old.`),
  2000,
  "John",
  54
);

/** ######################### clearTimeOut #########################
 * * The clearTimeout() method requires the id returned by setTimeout() to know which setTimeout() method to cancel
 */

let timerId = setTimeout(() => console.log("never happens"), 5000);
console.log(`timerID is : ${timerId}`); // timer identifier

clearTimeout(timerId);
console.log(`timerID is : ${timerId}`); // same identifier (doesn't become null after canceling)
