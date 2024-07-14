// Iterating over an array with forEach

var items;
var showInfo;
var totalLetters;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

// Add a few extra items to the array
items.push("The Eiffel Tower");
items[4] = "The Statue of Liberty";
items[5] = "The Acropolis";

showInfo = function (itemToShow) {
    console.log(itemToShow + " has " + itemToShow.length + " letters.");
};

items.forEach(showInfo);



totalLetters = function (array) {
    var total = 0;
    array.forEach(function (item) {
        total += item.length;
    });
    console.log("The total number of letters is " + total);
};

totalLetters(items);