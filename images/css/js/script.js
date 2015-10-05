
// Dylan Hunter
// 10/4/2015
//


// calculation for gross profit margin percentage

var profitVariables = ["enter the total cost of goods","enter in the amount used for payroll","enter the total amount of revenue from sales"];

var costOfGoods = prompt("enter the total cost of goods");
var payRoll = prompt("enter in the amount used for payroll");
var revenue = prompt("enter the total amount of revenue from sales");
var profit = Number(revenue) - Number(costOfGoods) + Number(payRoll);

var profitConstruction = [costOfGoods, revenue, profit, division,payRoll];

console.log(profit);

var division = profitConstruction [2] / profitConstruction [1];

var profitConstruction = [costOfGoods, revenue, profit, division,payRoll];

console.log(division);

var profitMargin = profitConstruction [3]  * 100;

console.log(profitMargin);

alert("your companies profit margin is " + profitMargin + " percent");










