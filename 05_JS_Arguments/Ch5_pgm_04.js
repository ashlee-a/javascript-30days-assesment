// Calling the same function with different arguments

var showMessage;

showMessage = function (message) {
	console.log("The message is:");
	console.log(message);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");



/* Further Adventures
 *
 * 1) Change the showMessage function to
 *    display its prefixed text on a
 *    separate line to the message.
 */

// Already done in the above code.



/* 2) Declare a myMessage variable and
 *    assign it a string value.
 */

var myMessage;
myMessage = "Hello to the whole universe!";



/* 3) Call the showMessage function with
 *    myMessage as the argument.
 */

showMessage(myMessage);