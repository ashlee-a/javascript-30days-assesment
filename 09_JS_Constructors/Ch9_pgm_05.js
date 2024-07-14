// Including a moons array in our Planet constructor

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
  
    this.removeMoon = function () {
        this.moons.pop();
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );

planet.addMoon("Io");
planet.addMoon("Europa");

planet.showPlanet();



/* Further Adventures
 *
 * 1) Create a second planet.
 *    Make one up if you like.
 */
var planet2 = new Planet( "Xylophia-IV", 7, "Ice Giant" );

/* 2) Add three moons to the second planet. */
planet2.addMoon("Gloop");
planet2.addMoon("Gleep");
planet2.addMoon("Glarp");

/* 3) Call the showPlanet method
 *    on the second planet.
 */
planet2.showPlanet();

/* 4) Add a removeMoon method
 *    that removes the last moon
 *    from the moons array.
 */
planet2.removeMoon();
planet2.showPlanet();