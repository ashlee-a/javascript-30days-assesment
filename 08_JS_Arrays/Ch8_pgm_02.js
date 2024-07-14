// Using existing objects in an array

var place1 = { name : "The Pyramids", country : "Egypt" };
var place2 = { name : "The Grand Canyon", country : "USA" };
var place3 = { name : "Bondi Beach", country : "Australia" };

var thisYear = [ place1, place2 ];
var nextYear = [ place3 ];

console.log(thisYear);
console.log(nextYear);

nextYear.push(place1);

console.log(nextYear);
console.log(thisYear);

place1.name = "The Great Pyramids";

console.log(thisYear);
console.log(nextYear);