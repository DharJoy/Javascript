//  JavaScript variables can be converted to a new variable and another data type

/**
 * By the use of a JavaScript function
 * Automatically by JavaScript itself
 */

/** ---------------* string to number *---------------**
 * * The global method Number() can convert strings to numbers.
 * * Empty strings convert to 0.
 * * Anything else converts to NaN (Not a Number).
 * * unary + operator
 */

let strToNumber = Number("100");
strToNumber = Number("0");
strToNumber = Number("");
strToNumber = Number(" ");
strToNumber = Number("Ten");
strToNumber = Number("10 20");
strToNumber = +"5";
strToNumber = +"John";
/**
 * we can also use
 * -- | parseInt
 * -- | parseFloat
 * for convert string to Number
 */
console.log(strToNumber, typeof strToNumber);

/** ---------------* Number to String *---------------**
 * * The global method String() can convert Numbers to String.
 * * The toString() method.
 */

let numberToString = String("500");
numberToString = "" + 100;
numberToString = 12 + "";
numberToString = String(120);
numberToString = (125).toString();
numberToString = (125 + 25).toString();

/**
 * we can also use
 * -- | toExponential
 * -- | toFixed
 * -- |toPrecision
 */

console.log(numberToString, typeof numberToString);

/** ---------------* Booleans to Number *---------------**
 * * The global method Number() can convert booleans to numbers.
 */

let booleanToNumber = Number(true);
booleanToNumber = Number(false);
console.log(booleanToNumber, typeof booleanToNumber);

/** ---------------* Booleans to String *---------------**
 * * The global method String() can convert booleans to String.
 * * The Boolean method toString() does the same
 */

let booleansToString = String(true);
booleansToString = String(false);
booleanToNumber;
console.log(booleansToString, typeof booleansToString);

/** ---------------* Dates to Number *---------------**
 * * The global method Number() can be used to convert dates to numbers.
 * * The date method getTime() does the same.
 */

let date = new Date();
let dateToNumber = Number(date);
dateToNumber = date.getTime();
console.log(dateToNumber, typeof dateToNumber);

/** ---------------* Dates to String *---------------**
 * * The global method String() can convert dates to strings.
 * * The Date method toString() does the same.
 */

let dateToString = String(date);
dateToString = date.toString();

console.log(dateToString, typeof dateToString);

/**
 * we can also use
 *    --| getDate()
 *    --| getDay()
 *    --| getFullYear()
 *    --| getHours()
 *    --| getMilliseconds()
 *    --| getMinutes()
 *    --| getMonth()
 *    --| getSeconds()
 *    --| getTime()
 */

/** ---------------* Automatic Type Conversion *---------------**
 *
 */

let convertType = 5 + null;
convertType = "5" + null;
convertType = "5" + 2;
convertType = "5" - 2;
convertType = "5" * 2;
convertType = +undefined;
convertType = +null;

console.log(convertType, typeof convertType);
