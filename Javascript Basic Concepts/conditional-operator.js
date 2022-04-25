/**
 * conditional operator --
 *              | -- if statement
 *              | -- switch statement
 */

// if statment

if (true) {
  console.log("Hello Javascript");
}

if (false) {
  console.log("Hello Php");
}

// if statement with else statment

let age = 45;
if (age < 18) {
  console.log(`you can't vote now. you are ${age} years old.`);
} else {
  console.log(`you can vote now. you are ${age} years old.`);
}

// if statment with else if and else statment

if (age < 18) {
  console.log(" you can play ⚽");
} else if (age > 18 && age < 50) {
  console.log("you can also play ⚽ ..but ⚠️");
} else {
  console.log("you watch ⚽");
}

// * ternary operator

let ageGroup =
  age < 18
    ? "Younger"
    : age >= 18 && age < 50
    ? "Youth and Mature person"
    : "Senior Citizen";
console.log(ageGroup);

// * switch
// The switch statement is used to perform different actions based on different conditions.
let sum = 5;
switch (sum) {
  case 1:
    console.log("The Sum is 1");
    break;
  case 5:
    console.log("The Sum is 5");
    break;
  case 10:
    console.log("The Sum is 10");
    break;
  default:
    console.log("The Sum is Uncountable");
    break;
}

// * switch common code block /group statment

let day = new Date().getDay();

switch (day) {
  case 4:
  case 5:
    console.log("Soon it is Weekend");
    break;
  case 0:
  case 6:
    console.log("It is Weekend");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

//* switch case use strict comparison (===);
let plus = prompt(" 10 + 7 = ", 17);
switch (+plus) {
  case 15:
    console.log("Wrong ans.Please Try Agian");
    break;
  case 16:
    console.log("Wrong ans.Please Try Agian");
    break;
  case 17:
    console.log("Right Answer.");
    break;
  default:
    console.log("Wrong ans.Please Try Agian");
    break;
}
