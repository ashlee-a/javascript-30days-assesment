// Breaking a function by changing a variable name

var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(msg);
};

showMessage();



/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 */

// Already done in the above code.



/* 2) Declare another message variable
 *    and assign it a value.
 */

var newMsg;
newMsg = "Hello, Universe!";



/* 3) Display the new message as well as the old one.
 */

showMessage = function () {
	console.log(msg);
	console.log(newMsg);
};

showMessage();



/* 4) Display a single message created by joining
 *    the two strings.
 */

showMessage = function () {
	console.log(msg + " " + newMsg);
};

showMessage();