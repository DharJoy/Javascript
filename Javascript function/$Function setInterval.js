/** ######################### setInterval() #########################
 * * The setInterval() method repeats a block of code at every given timing event.
 */

// * syntax : setInterval (function,miliseconds,[arguments])

// function f() {
//   console.log("Hello World");
// }
// setInterval(f, 1000);

// * using arrow function

// setInterval(() => console.log("Hello"), 1000);

/** ######################### clearInterval() #########################
 * * The clearInterval() method clears a timer set with the setInterval() method.
 *
 * * To clear an interval, use the id returned from setInterval()
 */

let intervalId = setInterval(() => console.log("Hello"), 2000);
console.log(intervalId);

let a = setInterval(() => {
  console.log("Hello World");
}, 1000);

clearInterval(intervalId);
clearInterval(a);

/** ######################### with arguments #########################
 * *
 */

let b = setInterval(
  (name, age) => {
    console.log(`${name} is ${age} years old.`);
  },
  2000,
  "John",
  54
);
