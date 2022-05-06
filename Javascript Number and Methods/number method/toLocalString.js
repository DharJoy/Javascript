/** ######################### Number methods - toLocaleString(locales,options) #########################
 * * The toLocaleString() returns a number as a string, using local language format.
 * * The language format depends on the locale setup on your computer.
 */

let num = 2000;

// Format a number into a string, using locale settings

let text = num.toLocaleString();
console.log(text);

// Format a number into a string, using the locale specific of Finland

text = num.toLocaleString("fi-FI");
console.log(text);

// Format a number into a string, using the locale specific of New Zealand
text = num.toLocaleString("en-NZ");
console.log(text);

// Format a number into a currency string, using the locale specific of USA
text = num.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "code",
});
console.log(text);

console.log(typeof text);
