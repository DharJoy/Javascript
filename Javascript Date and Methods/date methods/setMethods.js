let date = new Date();

/** ######################### setDate() #########################
 * * setDate() sets the day of the month of a date.
 */

let setDate = date.setDate(10);
console.log(date);

setDate = date.setDate(0); // Set the day of the month to the last day of the previous month
console.log(date);

/** ######################### setFullYear() #########################
 * * setFullYear() sets the year of a date.
 * * setFullYear() can also set month and day.
 */

let setFullYear = date.setFullYear(2020);
console.log(date);

setFullYear = date.setFullYear(2018, 4, 15);
console.log(date);

/** ######################### setHours() #########################
 * * setHours() sets the hour of a date.
 * * setHours() can also set minutes, seconds and milliseconds.
 */

let setHours = date.setHours(10);
console.log(date);

setHours = date.setHours(10, 25, 33);
console.log(date);

/** #########################  #########################
 * * setMilliseconds() sets the milliseconds of a date.
 * *
 */

let setMilliseconds = date.setMilliseconds(200);
console.log(date.getMilliseconds());

/** ######################### setMinutes() #########################
 * * setMinutes() sets the minutes of a date
 * * This method can also be used to set the seconds and milliseconds.
 */

let setMinutes = date.setMinutes(25);
console.log(date);

setMinutes = date.setMinutes(32, 45, 450);
console.log(date);

// Set the date time to be 90 minutes ago
var d = new Date();
console.log(d.getMinutes() - 90);

/** ######################### setMonth() #########################
 * * The setMonth() method sets the month of a date object.
 * * This method can also be used to set the day of the month.
 */

let setMonth = date.setMonth(5);
console.log(date);

setMonth = date.setMonth(4, 15);
console.log(date);

/** ######################### setSeconds() #########################
 * * The setSeconds() method sets the seconds of a date object.
 * * This method can also be used to set the milliseconds.
 */

let setSeconds = date.setSeconds(44);
console.log(date);

setSeconds = date.setSeconds(55, 600);
console.log(date);

/** ######################### setTime() #########################
 * * The setTime() method sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.
 * *
 */

let setTime = date.setTime(1332403882588);
console.log(date);

setTime = date.setTime(-1332403882588);
console.log(date);

/** ######################### setUTCDate() #########################
 * * The setUTCDate() method sets the day of a Date object, according to UTC
 */
date = new Date();
let setUtcDate = date.setUTCDate(15);
console.log(date);

// Set the day of the month to the last day of the previous month
setUtcDate = date.setDate(0);
console.log(date);

/** ######################### setUTCFullYear(year,month,day) #########################
 * * The setUTCFullYear(year,month,day) method sets the year of a date object, according to UTC.
 */

let setUtcFullYear = date.setUTCFullYear(2025);
console.log(date);

setUtcFullYear = date.setFullYear(2022, 6, 12);
console.log(date);

/** ######################### setUTCHours(hours,minutes,seconds,milliseconds) #########################
 * * The setUTCHours(hours,minutes,seconds,milliseconds) method sets the hour of a date object, according to UTC.
 * * It can also be used to set the minutes, seconds and milliseconds.
 */

let setUtcHours = date.setUTCHours(8, 45, 37, 250);
console.log(date);
console.log(date.getUTCMilliseconds());

/** ######################### setUTCMilliseconds() #########################
 * * The setUTCMilliseconds() method sets the milliseconds (from 0 to 999) of a date object, according to UTC.
 */

let setUTCMilliseconds = date.setUTCMilliseconds(333);
console.log(date.getUTCMilliseconds());

/** ######################### setUTCMinutes() #########################
 * * The setUTCMinutes() method sets the minutes of a date object, according to UTC.
 */

let setUTCMinutes = date.setUTCMinutes(27);
console.log(date);

/** ######################### setUTCMonth() #########################
 * * The setUTCMonth() method sets the month (from 0 to 11) of a date object, according to UTC.
 * * It can also be used to set the day.
 */

let setutcMonth = date.setUTCMonth(7);
console.log(date);
setutcMonth = date.setUTCMonth(7, 10);
console.log(date);

/** ######################### setUTCSeconds() #########################
 * * The setUTCSeconds() method sets the seconds of a date object, according to UTC.
 * * It can also be used to set the milliseconds.
 */

let setUTCSeconds = date.setUTCSeconds(44);
console.log(date);

setUTCSeconds = date.setUTCSeconds(37, 500);
console.log(date);
console.log(date.getUTCMilliseconds());

/** ######################### toDateString() #########################
 * * The toDateString() method returns the date (not the time) of a date object as a string.
 */

date = new Date();
let toDateString = date.toDateString();
console.log(toDateString);

/** ######################### toISOString() #########################
 * * The toISOString() method returns a date object as a string, using the ISO standard.
 * * The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
 */

let toISOString = date.toISOString();
console.log(toISOString);

/** ######################### toJSON() #########################
 * * The toJSON() method returns a date object as a string, formatted as a JSON date.
 * * JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ
 */

let toJson = date.toJSON();
console.log(toJson);

/** ######################### toLocaleDateString() #########################
 * * The toLocaleDateString() method returns the date (not the time) of a date object as a string, using locale conventions.
 */

let tolocalDateString = date.toLocaleDateString();
console.log(tolocalDateString);

/** ######################### toLocaleTimeString() #########################
 * * The toLocaleTimeString() method returns the time portion of a date object as a string, using locale conventions.
 */

let toLocaleTimeString = date.toLocaleTimeString();
console.log(toLocaleTimeString);

/** ######################### toLocaleString(locales, options) #########################
 * * The toLocaleString(locales, options) method returns a Date object as a string, using locale settings.
 * The default language depends on the locale setup on your computer.
 */

let tolocalString = date.toLocaleString("bn-BD", {
  timeStyle: "short",
  dateStyle: "short",
});
console.log(tolocalString);

/** ######################### toString() #########################
 * * The toString() method returns a date object as a string.
 */
let toString = date.toString();
console.log(toString);

/** ######################### toTimeString() #########################
 * * The toTimeString() method returns the time portion of a date object as a string.
 */
console.log(date.toTimeString());

/** ######################### toUTCString #########################
 * * The toUTCString() method returns a date object as a string, according to UTC.
 */

console.log(date.toUTCString());

/** ######################### Date.UTC(year, month, day, hours, minutes, seconds, millisec) #########################
 * * The Date.UTC(year, month, day, hours, minutes, seconds, millisec) method returns the number of milliseconds between a specified date and midnight of January 1, 1970, according to UTC.
 */

let newDate = new Date(Date.UTC(2025, 4, 12, 7, 45, 22, 320));
console.log(newDate);
console.log(newDate.getUTCMilliseconds());
