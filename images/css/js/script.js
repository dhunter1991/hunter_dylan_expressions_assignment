
// Dylan Hunter
// 10/4/2015
// Scalable Data Infrastructures 01
// Expressions assignment



// calculation for gross profit margin percentage //

// Variables

var costOfGoods = prompt("We are going to calculate your gross profit margin. \nenter the total cost of goods");
var payRoll = prompt("enter in the total cost for payroll");
var revenue = prompt("enter the total amount of revenue from sales");
// calculating profit

var profit = Number(revenue) - (Number(costOfGoods) + Number(payRoll));

var profitConstruction = [costOfGoods, revenue, profit, division, payRoll];

console.log(profit);

var division = profitConstruction [2]  / profitConstruction [1] + profitConstruction [4];

var profitConstruction = [costOfGoods, revenue, profit, division, payRoll];

console.log(division);
// calculating profit margin percentage

var profitMargin = profitConstruction [3]  * 100;

console.log(profitMargin);

alert("your companies profit margin is " + profitMargin + " percent");










