// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

console.log(line(30));
console.log(line(40));
console.log(line(50));

// Testing line lengths from -20 to 60 in steps of 10
for (var i = -20; i <= 60; i += 10) {
  console.log("Line length " + i + ": " + line(i));
}

// Defining a spaces function
var spaces = function (numSpaces) {
  numSpaces = Math.max(0, numSpaces);
  numSpaces = Math.min(40, numSpaces);
  return Array(numSpaces + 1).join(" ");
};

// Defining an emptyBox function
var emptyBox = function (width) {
  width = Math.max(0, width);
  width = Math.min(40, width);
  var topAndBottom = "=" + Array(width + 1).join("=") + "=";
  var middle = "= " + spaces(width - 2) + " =";
  var result = topAndBottom + "\n";
  for (var i = 0; i < 3; i++) {
      result += middle + "\n";
  }
  result += topAndBottom;
  return result;
};

console.log(emptyBox(12));