// Displaying a player's information using properties

var showPlayerName = function (playerName) {
    console.log(playerName);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showLine = function (length, char) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += char;
    }
    console.log(line);
};

var showPlayerInfo = function (player) {
    console.log("");

    showLine(player.name.length + 4, "*");
    console.log("* " + player.name + " *");
    showLine(player.name.length + 4, "*");

    console.log("----------------------------");

    showPlayerPlace(player.name, player.place);
    showPlayerHealth(player.name, player.health);

    console.log("----------------------------");
    console.log("");
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo(player1);
showPlayerInfo(player2);// Displaying a player's information using properties

var showPlayerName = function (playerName) {
    console.log(playerName);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showLine = function (length, char) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += char;
    }
    console.log(line);
};

var showPlayerInfo = function (player) {
    console.log("");

    showLine(player.name.length + 4, "*");
    console.log("* " + player.name + " *");
    showLine(player.name.length + 4, "*");

    console.log("----------------------------");

    showPlayerPlace(player.name, player.place);
    showPlayerHealth(player.name, player.health);

    console.log("----------------------------");
    console.log("");
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo(player1);
showPlayerInfo(player2);