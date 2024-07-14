// Moving a point in 2D

var point1;
var point2;
var move;
var showPoint;
var reflectX;
var rotate90;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 3, y : 1 }); // Changed the amount by which the point is moved

showPoint(point1);
console.log("Move 3 across and 1 down");
showPoint(point2);

point3 = reflectX(point1); // Reflect the point in the x-axis
console.log("Reflect in x-axis");
showPoint(point3);

point4 = rotate90(point1); // Rotate the point by 90 degrees anticlockwise around (0, 0)
console.log("Rotate 90 degrees anticlockwise");
showPoint(point4);