// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481, 123, 456 ];

var report = getVisitorReport(visitors, 2);

console.log(report);

var report = getVisitorReport(visitors, 5);

console.log(report);

var report = getVisitorReport(visitors, 7);

console.log(report);

var getMonthlyVisitorReport = function (monthArray, week, day) {
	var weekArray = monthArray[week - 1];
	return getVisitorReport(weekArray, day);
};

var week1 = [ 354, 132, 210, 221, 481, 123, 456 ];
var week2 = [ 100, 200, 300, 400, 500, 600, 700 ];
var week3 = [ 50, 60, 70, 80, 90, 100, 110 ];
var week4 = [ 20, 30, 40, 50, 60, 70, 80 ];

var month = [ week1, week2, week3, week4 ];

var report = getMonthlyVisitorReport(month, 2, 3);

console.log(report);

var report = getMonthlyVisitorReport(month, 4, 7);

console.log(report);