// Define a function that returns another function
var getGuesser = function () {
  // Local variable secret, only accessible within getGuesser
  var secret = 8;
  
  // Return a function that takes a userNumber argument
  return function (userNumber) {
    if (userNumber === secret) {
      console.log("Well done!");
    } else {
      console.log("Unlucky, try again.");
    }
  };
};

// Assign the returned function to the guess variable
var guess = getGuesser();

// Test the guess function
guess(2);  // Outputs: Unlucky, try again.
guess(8);  // Outputs: Well done!
guess(10); // Outputs: Unlucky, try again.