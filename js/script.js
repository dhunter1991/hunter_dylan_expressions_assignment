// Dylan Hunter
// 10/4/2015
//Scalable Data Infrastructures 01
// Expressions assignment

// calculation for gross profit margin percentage

// variables
var costOfGoods;
var payRoll;
var revenue;
var profit;

// prompts allow me to get the information needed to calculate the profit margin

var costOfGoods = prompt("We are going to calculate your gross profit margin. \nenter the total cost of goods");
var payRoll = prompt("enter in the total cost for payroll");
var revenue = prompt("enter the total amount of revenue from sales");

// calculating profit needed for final percentage

var profit = Number(revenue) - (Number(costOfGoods) + Number(payRoll));

// array of variables in order to keep together

var profitConstruction = [costOfGoods, revenue, profit, division, payRoll];

// calculating ratio of cost to revenue

var division = profitConstruction [2]  / profitConstruction [1];

var profitConstruction = [costOfGoods, revenue, profit, division, payRoll];

// calculating profit margin percentage

var profitMargin = profitConstruction [3]  * 100;

// console log of the information I have calculated

console.log("your companies gross profit after cost of goods and payroll is " +  profit);
console.log(division);
console.log( "your companies gross profit margin percentage is " + profitMargin);


// alert of the final profit margin percentage of the information entered

alert("your companies profit margin percentage is " + profitMargin);


