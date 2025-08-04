function divide(a, b) {
  if (b === 0) {
    console.log("Division by zero is not allowed.");
  } else {
    const result = a / b;
    console.log(`Division of ${a} by ${b} is ${result}`);
  }
}

module.exports = divide;
