// Using the square function

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);



/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 */

var cube;

cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

/* 2) Call your cube function four times
 *    with different arguments to test it.
 */

cube(2);
cube(3);
cube(4);
cube(5);



/* 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 */

var squareRoot;

squareRoot = function (number) {
  var result;
  result = Math.sqrt(number);
  console.log("The square root of " + number + " is " + result);
};

squareRoot(9);
squareRoot(16);
squareRoot(25);
squareRoot(36);