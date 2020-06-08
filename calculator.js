let result = 0;

function add(a, b) {
  return a + b;
}

function substrack() {
  return a - b;
}

function multiply() {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function Operate(operator, a, b) {
  switch (operator) {
    case "+":
      result = add(+a, +b);
      break;
    case "-":
      result = substrack(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
  }
}
