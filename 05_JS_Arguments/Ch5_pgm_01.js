// Relying on a variable outside of the function

var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(msg);
};

showMessage();



/* Further Adventures
 *
 * 1) Change the message and run the program.
 */

msg = "Hello, Universe!";
showMessage();



/* 2) Change the variable name in the
 *    parentheses for console.log.
 *    e.g. console.log(myMessage);
 *
 * 3) Run the program
 */

var myMessage;
var showMessage;

myMessage = "It's full of stars!";

showMessage = function () {
	console.log(myMessage);
};

showMessage();