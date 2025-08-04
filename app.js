const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const result = document.getElementById("result")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")

module.export = {num1 , num2, result}
add(10, 5);
subtract(10, 5);
multiply(10, 5);
divide(10, 5);
divide(10, 0);
