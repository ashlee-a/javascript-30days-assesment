// Passing information to a function

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

// 1) Change the message in the parentheses when showMessage is called
showMessage("Hello, Universe!");



// 2) Add two more calls to the showMessage function with different arguments each time
showMessage("The answer is 42.");
showMessage("May the force be with you.");



// 3) Change the showMessage function itself. Make it add some extra text after the message passed in
showMessage = function (message) {
	console.log("The message is: " + message + " - This is the end of the message.");
};

showMessage("It's full of stars!");
showMessage("Hello, Universe!");
showMessage("The answer is 42.");
showMessage("May the force be with you.");