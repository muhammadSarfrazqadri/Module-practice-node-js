const {num1 , num2 ,result} = require(./app.js)

function add(a, b) {
  result.innerText = `Addition of ${a} and ${b} is ${a + b}`;
}

module.exports = add;
