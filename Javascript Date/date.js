/** ######################### Javascript - Date #########################
 * *
 * * It stores the date, time and provides methods for date/time management.
 */

/** * Create Date Objects *
 *
 * There are 4 ways to create a new date object
 * new Date(year, month, day, hours, minutes, seconds, milliseconds)
 * new Date(milliseconds)
 * new Date(date string)
 */

// ----------------------------------------------------------------------------------------------------

/**
 * * -------------------- new Date() --------------------
 * * new Date() creates a new date object with the current date and time
 */
let date = new Date();
console.log(date);
//  Date objects are static. The computer time is ticking, but date objects are not.

// ----------------------------------------------------------------------------------------------------

/**
 * * -------------------- new Date(year, month, day, hours, minutes, seconds, milliseconds) --------------------
 * * new Date(year, month, ...) creates a new date object with a specified date and time.
 *
 * * 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
 */

date = new Date(2022, 01, 10, 7, 22, 30, 300);
console.log(date);

// JavaScript counts months from 0 to 11

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year.
// Specifying a day higher than max, will not result in an error but add the overflow to the next month.
// we can specify 5,6,4,3,2 parameters.
// we cannot omit month. If we supply only one parameter it will be treated as milliseconds.

date = new Date(2022, 13, 32, 7, 22, 30, 300);
console.log(date);

// 6 parameters(year,month,day,hours,minutes,seconds)
date = new Date(2022, 03, 12, 15, 30, 45);
console.log(date);

// 5 parameters(year,month,day,hours,minutes)
date = new Date(2022, 03, 12, 15, 30);
console.log(date);

// 4 parameters(year,month,day,hours,minutes)
date = new Date(2022, 03, 12, 15, 30);
console.log(date);

// 3 parameters(year,month,day)
date = new Date(2022, 03, 12);
console.log(date);

// 2 parameters(year,month)
date = new Date(2022, 03);
console.log(date);

// 1 parameters(year)
date = new Date(2022);
console.log(date);

// ----------------------------------------------------------------------------------------------------

/** ######################### Previous Century #########################
 * * One and two digit years will be interpreted as 19xx
 * *
 */
date = new Date(99, 2, 10);
console.log(date);

date = new Date(9, 2, 10);
console.log(date);

// ----------------------------------------------------------------------------------------------------

/** ######################### new Date(dateString) #########################
 * * new Date(dateString) creates a new date object from a date string
 * *
 */

date = new Date("October 13, 2021 11:13:00");
console.log(date);

// ----------------------------------------------------------------------------------------------------

//* Notes -> JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated)

/** ######################### new Date(milliseconds) #########################
 * * new Date(milliseconds) creates a new date object as zero time plus milliseconds
 * *
 */

date = new Date(0);
console.log(date);

console.log(new Date(100000000000));
console.log(new Date(-100000000000));

// One day (24 hours) is 86 400 000 milliseconds.
