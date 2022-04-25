/** *-------------------- loops --------------------*
 * * Loops are a way to repeat the same code multiple times.
 *
 * loops types :
 *          --| while loop
 *          --| do while loop
 *          --| for loop
 *  * While the condition is truthy, the code from the loop body is executed.
 *
 * * A single execution of the loop body is called an iteration.
 */

/** ------- while loop ---------

 * syntax 
 * ---------
 while(condition){
  code....
   }

 */
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
i = 3;
while (i) {
  console.log(i);
  i--;
}

// * curly braces are not required for a single line body

// i = 2;
// while (i) console.log(i);

/** ------- do while loop ---------
   
   * syntax 
    * ---------
    do{
      // loop body .....
    }while(condition);
   
   * * The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
    */

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

i = "Execute First";
do {
  console.log(i);
  i++;
} while (i < 3);

/** ------- do while loop ---------
   
   * syntax 
    * ---------
   for(begin,condition,step){
     code....
   }
   
    */

for (let i = 2; i < 5; i++) {
  console.log("i = ", i);
}

/**  ########## Inline variable ##########
 * * variable declared in loop is called "inline variable"
 *
 * * inline variables are visible only inside the loop.
 */

for (let x = 0; x < 3; x++) {
  console.log("x = ", x);
}
// console.log("inline variable 'x' = ", x); // Error

let x = 0;
for (x = 0; x < 2; x++) {
  console.log(x);
}
console.log(x);

/**
 * ########## skipping parts ##########
 * * Any part of for can be skipped.
 */

// * ########## skip "begin" part ##########

var a = 0;
for (; a < 3; a++) {
  console.log(a);
}

// * ########## skip "step" part ##########

for (; a < 5; ) {
  console.log(a++);
}

/** ########## "breaking loop" ##########
 * * Normally, a loop exits when its condition becomes falsy.
 * * But we can force the exit at any time using the special break directive.
 */

// let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number ", "");
//   if (!value) break;1

//   sum += value;
// }
// console.log("sum = ", sum);

/** ########## "continue loop" ##########
 * * The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
 */

for (let m = 0; m < 10; m++) {
  if (m % 2 != 0) continue;
  console.log(m);
}

/** ########## label ##########
 * * Sometimes we need to break out from multiple nested loops at once.
 *
 * * The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!
 *
 * * A label is an identifier with a colon before a loop
 */

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");
//     //  if an empty string or canceled, then break out of both loops
//     if (!input) break outer;
//     console.log(`{${i},${j4}}`);
//   }
// }
