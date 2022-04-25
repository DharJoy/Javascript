/** ######################### Javascript Date inputs format #########################
 * * There are generally 3 types of JavaScript date input formats
 * * ISO Dates -------------------- "2015-03-25" (The International Standard)
 * * Short Date -------------------- "03/25/2015"
 * * Long Date -------------------- "Mar 25 2015" or "25 Mar 2015"
 */

// The ISO format follows a strict standard in JavaScript.

// The other formats are not so well defined and might be browser specific.

/** ######################### Javascript Date output formats #########################
 * * Independent of input format, JavaScript will (by default) output dates in full text string format
 * *
 */

//* ------------------------------- ISO formats -------------------------------
// ISO 8601 is the international standard for the representation of dates and times.
// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format

let date = new Date("2020-03-25");
console.log(date);

// month & year
date = new Date("2020-04");
console.log(date);

// only year
date = new Date("2020");
console.log(date);

//* Iso formats (date & times) : ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ)

date = new Date("2020-03-12T12:30:45Z");
console.log(date);

// Date and time is separated with a capital T.
// UTC time is defined with a capital letter Z.

// If we want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead.

date = new Date("2020-03-12T12:30:45");
console.log(date);
// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

//* ------------------------------- Short dates formats(MM/DD/YYYY) -------------------------------

date = new Date("03/12/2022");
console.log(date);

//* ------------------------------- Long dates formats(MM DD YYYY) -------------------------------

date = new Date("Mar 03 2012");
console.log(date);
