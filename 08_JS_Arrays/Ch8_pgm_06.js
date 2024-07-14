// Manipulating arrays with push, pop and join

var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));


items.push("The Eiffel Tower");

console.log(items);


console.log(items.join(" and "));



items[1] = "The Great Wall of China";

console.log(items);


items.push("The Statue of Liberty", "The Acropolis");

console.log(items);