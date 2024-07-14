// Using a variable as an index

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log( days[dayInWeek - 1] ); // Friday
console.log( days[dayInWeek - 2] ); // Thursday

dayInWeek = 2;
console.log( days[dayInWeek - 1] ); // Wednesday


var getDay = function(day) {
  return days[day - 1];
};

console.log( getDay(4) ); // Friday