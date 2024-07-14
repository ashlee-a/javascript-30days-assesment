// Calling forEach with an inline function

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];
var showItems;

console.log("Dream destinations:");

showItems = function () {
    console.log("Dream destinations:");
    console.log("You have " + items.length + " places to visit:");
    items.forEach(function (item) {
        console.log(" – " + item);
    });
};

showItems();





// Add an item
items.push("The Eiffel Tower");
showItems();

// Remove an item
items.pop();
showItems();

// Add multiple items
items.push("The Statue of Liberty", "The Acropolis");
showItems();

// Remove an item by index
items.splice(1, 1);
showItems();