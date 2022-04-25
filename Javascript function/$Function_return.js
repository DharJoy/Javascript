/** ######################### function return #########################
 * * The return statement is used to return a particular value from the function to the function caller.
 *
 * * The function will stop executing when the return statement is called.
 */

// The return statement should be the last statement in a function because the code after the return statement will be unreachable.

function myFunc() {
  console.log("Hello BanglaDesh");
  return "Hello World";
  console.log("Hello Javscript");
}
console.log(myFunc());
