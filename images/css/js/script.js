
// Dylan Hunter
// 10/4/2015
//


// calculation for gross profit margin percentage



var costOfGoods = prompt("enter the total cost of goods");
var revenue = prompt("enter the total amount of revenue from sales");
var payRoll = prompt("enter in the amount used for payroll");
var profit = Number(costOfGoods) + Number(payRoll) - Number(revenue);

var profitConstruction = [costOfGoods, revenue, profit, division,payRoll];

console.log(profit);

var division = profitConstruction [2] / profitConstruction [1];

var profitConstruction = [costOfGoods, revenue, profit, division,payRoll];

console.log(division);

var profitMargin = profitConstruction [3]  * 100;

console.log(profitMargin);

alert("your companies profit margin is " + profitMargin + " percent");










