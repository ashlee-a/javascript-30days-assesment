// Using the arguments passed by forEach

var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

// 1) Add two more names to the players array.
players.push("Lysander", "Vexis");

showArguments = function (item, index, wholeArray) {
  console.log("Item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);