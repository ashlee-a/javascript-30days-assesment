// Displaying a player's health

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo;
    healthInfo = playerName + ": health " + playerHealth;
    console.log(healthInfo);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);

/* Further Adventures
 *
 * 2) Call the showPlayerHealth function
 *    using your own arguments.
 *
 */

showPlayerHealth("Eryndor", 75);
showPlayerHealth("Lila", 30);