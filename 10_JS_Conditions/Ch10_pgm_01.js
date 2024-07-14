// Guess the number

var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else if (userNumber > secret) {
    console.log("Too high!");
  } else {
    console.log("Too low!");
  }
};

// Test the function
guess(2);  // Outputs: Too low!
guess(8);  // Outputs: Well done!
guess(10); // Outputs: Too high!