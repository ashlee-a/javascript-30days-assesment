// Finding substrings

var message = "We choose to go to the Moon!";

console.log(message.substr(17, 5)); // Outputs: Moon!
console.log(message.substr(10, 9)); // Outputs: go to the
console.log(message.substr(0, 10)); // Outputs: We choose

// Investigating what happens if you omit the second argument
console.log(message.substr(10)); // Outputs: go to the Moon!

// Investigating what happens if you use negative numbers as arguments
console.log(message.substr(-5)); // Outputs: Moon!
console.log(message.substr(10, -3)); // Outputs: (empty string)