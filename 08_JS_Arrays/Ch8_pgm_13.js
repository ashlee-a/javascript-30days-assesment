// ...

// Create a player
var player1 = {
  name: "Kandra",
  place: "The Dungeon of Doom",
  health: 50,
  items : ["a trusty lamp"]
};

showPlayerInfo(player1, "=");

/* 1) Add and remove items at the prompt
 *    using push and pop. Notice what is displayed
 *    when push and pop are called.
 */
player1.items.push("a rusty key");
showPlayerInfo(player1, "*");

player1.items.pop();
showPlayerInfo(player1, "*");


var getPlayerItems = function (player) {
  var itemsString = "Items:" + spacer.newLine();

  player.items.forEach(function (item, i) {
    itemsString += "   - " + (i + 1) + ". " + item + spacer.newLine();
  });

  return itemsString;
};

var showItem = function (player, itemNumber) {
  if (itemNumber > 0 && itemNumber <= player.items.length) {
    console.log("Item " + itemNumber + ": " + player.items[itemNumber - 1]);
  } else {
    console.log("Item not found.");
  }
};

showItem(player1, 1);


var addItem = function (player, item) {
  player.items.push(item);
  console.log("Item added: " + item);
};

addItem(player1, "a magic sword");
showPlayerInfo(player1, "*");