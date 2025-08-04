const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const result = document.getElementById("result")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const addBtn = document.getElementById('addBtn')
const divBtn = document.getElementById('addBtn')
const subBtn = document.getElementById('addBtn')
const mulBtn = document.getElementById('addBtn')

module.export = {num1 , num2, result}

addBtn.addEventListener(click, (num1,num2)=> add(num1,num2));
divBtn.addEventListener(click, (num1,num2)=> divide(num1,num2));
subBtn.addEventListener(click, (num1,num2)=> subtract(num1,num2));
mulBtn.addEventListener(click, (num1,num2)=> multiply(num1,num2));
