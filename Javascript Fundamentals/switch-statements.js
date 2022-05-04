/**
 * *----------------- switch statements -----------------
 *
 * * A switch statement can replace multiple if checks.
 * * It gives a more descriptive way to compare a value with multiple variants.
 */

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
