/** ######################### getDate() #########################
 * * The getDate() method returns the day of the month (1 to 31) of a date.
 */

let date = new Date();

let getDate = date.getDate();
console.log(getDate);

/** ######################### getDay() #########################
 * * The getDay() method returns the day of the week (0 to 6) of a date.
 */

let getDay = date.getDay();
console.log(getDay);

/** ######################### getYear() #########################
 * * getFullYear() returns the full year (4 digits) of a date.
 */

let getYear = date.getFullYear();
console.log(getYear);

/** ######################### getHours() #########################
 * * getHours() returns the hour (0 to 23) of a date.
 */

let getHours = date.getHours();
console.log(getHours);

/** ######################### getMinutes() #########################
 * * getMinutes() returns the minutes (0 to 59) of a date.
 */

let getMinutes = date.getMinutes();
console.log(getMinutes);

/** ######################### getMonth() #########################
 * * getMonth() returns the month (0 to 11) of a date.
 */

let getMonth = date.getMonth();
console.log(getMonth);

/** ######################### getSeconds() #########################
 * * getSeconds() returns the seconds (0 to 59) of a date.
 */

let getSeconds = date.getSeconds();
console.log(getSeconds);

/** ######################### getMilliseconds() #########################
 * * getMilliseconds() returns the milliseconds (0 to 999) of a date.
 */

let getMilliseconds = date.getMilliseconds();
console.log(getMilliseconds);

/** ######################### getTime() #########################
 * * getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
 */

let getTime = date.getTime();
console.log(getTime);

/** ######################### getTimezoneOffset() #########################
 * * getTimezoneOffset() returns the difference between UTC time and local time
 * * getTimezoneOffset() returns the difference in minutes.
 */
// The value is not constant because of varying Daylight Saving Time.
// The Universal Time Coordinated (UTC) is the time set by the World Time Standard.
// UTC time is the same as GMT (Greenwich Mean Time).

let timeZoneOffset = date.getTimezoneOffset();
console.log(timeZoneOffset);

/** ######################### getUTCDate() #########################
 * * getUTCDate() returns the day of the month (1 to 31) of a date object.
 */

let getUtcDate = date.getUTCDate();
console.log(getUtcDate);

/** ######################### getUTCDay() #########################
 * * getUTCDay() returns the day of the week (0 to 6) of a date.
 */

let getUtcDay = date.getUTCDay();
console.log(getUtcDay);

/** ######################### getUTCFullYear() #########################
 * * getUTCFullYear() returns the year of a date.
 * * getUTCFullYear() returns four digits for years between 1000 and 9999.
 */

let getUTCFullYear = date.getUTCFullYear();
console.log(getUTCFullYear);

/** ######################### getUTCHours() #########################
 * * getUTCHours() returns the hour (0 to 23) of a date.
 */

let getUtcHours = date.getUTCHours();
console.log(getUtcHours);

/** ######################### getUTCMilliseconds() #########################
 * * getUTCMilliseconds() returns the milliseconds (0 to 999) of a date.
 */

let getUTCMilliseconds = new Date(
  "July 21, 1983 01:15:00:195"
).getUTCMilliseconds();
console.log(getUTCMilliseconds);

/** ######################### getUTCMinutes() #########################
 * * getUTCMinutes() returns the minutes (0 to 59) of a date.
 */

let getutcminutes = date.getUTCMinutes();
console.log(getutcminutes);

/** ######################### getUTCMonth() #########################
 * * getUTCMonth() returns the month (0 to 11) of a date.
 */

let getUtcMonth = date.getUTCMonth();
console.log(getUtcMonth);

/** ######################### getUTCSeconds() #########################
 * * getUTCSeconds() returns the seconds (0 to 59) of a date.
 */

let getUTCSeconds = date.getUTCSeconds();
console.log(getUTCSeconds);
