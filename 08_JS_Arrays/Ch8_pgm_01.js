// Creating arrays

var scores;
var names;
var akaScores;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

console.log(scores);
console.log(names);

scores.push(5);
names.push("Zara");

console.log(scores); // Outputs: [ 3, 1, 8, 2, 5 ]
console.log(names); // Outputs: [ "Kandra", "Dax", "Blinky", "Zara" ]


akaScores = scores;

console.log(akaScores); // Outputs: [ 3, 1, 8, 2, 5 ]