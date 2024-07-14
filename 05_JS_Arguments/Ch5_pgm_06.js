// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);



/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 */

showSum(56, 74);



/* 2) Create a showProduct function to multiply two numbers.
 */

var showProduct;

showProduct = function (number1, number2) {
	var product = number1 * number2;
	console.log("The product is " + product);
};

/* 3) Use your function to multiply three pairs of numbers.
 */

showProduct(3, 5);
showProduct(10, 2);
showProduct(7, 9);



/* 4) What about showDifference and showQuotient
 *    for subtraction and division?
 */

var showDifference;

showDifference = function (number1, number2) {
	var difference = number1 - number2;
	console.log("The difference is " + difference);
};

var showQuotient;

showQuotient = function (number1, number2) {
	var quotient = number1 / number2;
	console.log("The quotient is " + quotient);
};

showDifference(10, 3);
showDifference(20, 15);

showQuotient(10, 2);
showQuotient(20, 5);