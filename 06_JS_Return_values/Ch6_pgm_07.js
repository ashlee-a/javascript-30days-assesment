// Getting a string for a player’s name

var getPlayerName;

getPlayerName = function (playerName) {
    var prefixSuffix = "==== ";
    var border = "\n| ";
    return border + "\n| " + prefixSuffix + playerName + " " + prefixSuffix + "\n| ";
};

console.log(getPlayerName("Kandra"));
console.log(getPlayerName("Jahver"));