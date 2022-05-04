/** ######################### Operand #########################
 * * The numbers (in an arithmetic operation) are called operands.
 */

let operand = 5 + 2; // 5 & 2 are operand

/** ######################### unary #########################
 * * An operator is unary if it has a single operand.
 */

let unary = -10; // -10 is unary

/** ######################### binary #########################
 * * An operator is binary if it has two operands.
 */
let binary = 10 + 20; // + is binary

//* The operation (to be performed between the two operands) is defined by an operator.

let sum = 100 + 500; // operator = (+)

// ******************* ArithMetic Operator *******************

/**
 * (+) = addition (add) = The addition operator (+) adds operands.
 *
 * (-) = subtraction(minus/subtract) = The subtraction operator (-) subtract operands.
 *
 * (*) = multiplication (multiply) = The multiplication operator (*) multiplies operands.
 *
 * (/) = division (dividing) = The division operator (/) divides operands.
 *
 * (%) = modulus (remainder) = The modulus operator (%) returns the division remainder.
 *
 * (++)  = increment = The increment operator (++) increments operands by one.
 * (--) = decrement = The decrement operator (--) decrements Operands by one.
 *
 * (**) = exponentiation = The exponentiation operator (**) raises the first operand to the power of the second operand.
 */

// * Addition (+)

let x = 100;
let y = 500;
let z = x + y;
console.log(z);
console.log(200 + 300);

// subtraction (-)

let a = 500;
let b = 300;
let c = a - b;
console.log(c);
console.log(500 - 400);

// multiplication (*)

let m = 10;
let n = 4;
console.log(m * n);
console.log(1008 * 4);

// division(/)

let a2 = 100;
let b2 = 4;
let c2 = a2 / b2;
console.log(c2);
console.log(50 / 5);

// remainder (%)
let b3 = 6;
let c3 = a2 % b3;
console.log(c3);

// exponentiation)**

let a4 = 5;
let b4 = 2;

console.log(a4 ** b4);
console.log(5 ** 5);

// increment (++) [prefix]

let x1 = 10;
let x2 = x1++;
console.log(x2);
console.log(x1);

// increment (++) [postfix]

let x3 = 15;
let x4 = ++x3;
console.log(x4);
console.log(x3);

// decrement (--) [postfix]

let x5 = 10;
let x6 = x5--;
console.log(x6);
console.log(x5);

// decrement (--) [prefix]

let x7 = 10;
let x8 = x7--;
console.log(x7);
console.log(x7);
