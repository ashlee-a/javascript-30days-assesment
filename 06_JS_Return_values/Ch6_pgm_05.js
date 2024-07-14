// A function with three arguments

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
	var total = callOutCharge + costPerHour * numberOfHours;
	if (discount) {
		total -= discount;
	}
	return total;
};

// 1) What is the cost for 12 hours work?
console.log("$" + totalCost(30, 40, 12));

// 2) The plumber sometimes issues discount coupons.
//    Add a fourth parameter to the totalCost function definition to account for discounts.

// 3) Update the function to subtract the discount from the total before returning it.

// 4) If a customer has a $20 off coupon, update the call to totalCost to display the total cost.
console.log("$" + totalCost(30, 40, 3, 20));