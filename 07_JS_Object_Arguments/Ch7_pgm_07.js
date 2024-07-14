// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

// Creating a getBig function
var getBig = function (str) {
    return str.toUpperCase();
};

console.log(getBig("hello")); // Outputs: HELLO

// Creating a getSmall function
var getSmall = function (str) {
    return str.toLowerCase();
};

console.log(getSmall("WORLD")); // Outputs: world