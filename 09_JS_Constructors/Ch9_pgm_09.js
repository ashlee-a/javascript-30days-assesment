// ... (rest of the code remains the same)

// Testing Player

var library = new Place(
  "The Old Library",
  "You are in a library. Dusty books line the walls."
);

var player1 = new Player("Kandra", 50);
player1.place = library;
player1.addItem("a rusty key");
player1.addItem("The Sword of Doom");

var player2 = new Player("Eryndor", 75);
player2.place = library;
player2.addItem("a shield");
player2.addItem("a magic potion");

player1.showInfo("=");
player2.showInfo("=");



/* Further Adventures
*
* 1) Test out the constructor by
*    creating a couple of Player objects.
*    (already done)
*
* 2) Add items for each player.
*    (already done)
*
* 3) Display each player's info.
*    (already done)
*
* 4) Write a method to drop the last
*    item in a player's items array.
*/
Player.prototype.dropItem = function () {
  if (this.items.length > 0) {
      var droppedItem = this.items.pop();
      console.log(this.name + " dropped " + droppedItem);
  } else {
      console.log(this.name + " has no items to drop");
  }
};

player1.dropItem();
player2.dropItem();