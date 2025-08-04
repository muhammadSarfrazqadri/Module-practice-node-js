const {num1 , num2 ,result} = require(./app.js)

function add(a, b) {
  result.innerText = `Addition of ${a} and ${b} is ${a + b}`;
  num1.style.display = 'none'
  num2.style.display = 'none'
  result.style.display = 'block'
}

module.exports = add;
