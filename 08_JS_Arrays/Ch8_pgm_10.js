
var rectangles = [
  { length: 10, width: 5 },
  { length: 20, width: 10 },
  { length: 30, width: 15 }
];

function assignArea(rectangle) {
  rectangle.area = rectangle.length * rectangle.width;
}

function showInfo(rectangle) {
  console.log("Length: " + rectangle.length);
  console.log("Width: " + rectangle.width);
  console.log("Area: " + rectangle.area);
  console.log("------------------------");
}

rectangles.forEach(function (rectangle) {
  assignArea(rectangle);
  showInfo(rectangle);
});