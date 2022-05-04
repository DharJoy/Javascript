/**
 * 1. if operators
 * 2. ternary ? operators
 */

/** ######################### if #########################
 * * The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
 */

if (true) {
  console.log("Hello Javascript");
}

if (false) {
  console.log("Hello Php");
}

/** ######################### else #########################
 * * The if statement may contain an optional “else” block. It executes when the condition is falsy.
 */

let age = 45;
if (age < 18) {
  console.log(`you can't vote now. you are ${age} years old.`);
} else {
  console.log(`you can vote now. you are ${age} years old.`);
}

/** ######################### else if #########################
 * * Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that
 */

if (age < 18) {
  console.log(" you can play ⚽");
} else if (age > 18 && age < 50) {
  console.log("you can also play ⚽ ..but ⚠️");
} else {
  console.log("you watch ⚽");
}

/** ######################### ternary ? operators #########################
 * * Sometimes, we need to assign a variable depending on a condition.
 *
 * *The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
 *
 * *The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands
 */

/**
 * * syntax :
 *   ---------
 * * let result = condition ? return value (if true) : return value (if false)
 */

let ageGroup =
  age < 18
    ? "Younger"
    : age >= 18 && age < 50
    ? "Youth and Mature person"
    : "Senior Citizen";

console.log(ageGroup);
