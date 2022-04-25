/** ################ alert ################
 * The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”
 */

alert("Hello World.. 😎");

/** ################ prompt ################
 * It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
 * shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
 */

var prompt = prompt("Where are you living?", "chittagong");
console.log(prompt);

/** ################ confirm ################
 * The function confirm shows a modal window with a question and two buttons: OK and Cancel.
 * The result is true if OK is pressed and false otherwise.
 */

var isTall = confirm("are yoy above 6 foot long? ");
console.log(isTall);
