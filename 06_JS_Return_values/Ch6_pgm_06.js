// A collection of functions that return values

var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!"; 
};

getHelloTo = function (name) {
    return "Hello to " + name;
};

sum = function (number1, number2) {
    return number1 + number2;
};

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

// 1) Run the program.
// 2) At the console prompt, type getMessage() and press enter.
console.log(getMessage());

// 3) At the console prompt, type getHelloTo("Dax") and press enter.
console.log(getHelloTo("Dax"));

// 4) Call the getHelloTo function with different arguments.
console.log(getHelloTo("John"));
console.log(getHelloTo("Jane"));

// 5) Call the sum and totalCost functions, using different arguments each time.
console.log(sum(10, 20));
console.log(sum(50, 23));
console.log(totalCost(30, 40, 3));
console.log(totalCost(50, 25, 4));