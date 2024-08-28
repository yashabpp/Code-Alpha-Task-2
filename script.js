const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.id) {
      case 'clear':
        currentNumber = '';
        previousNumber = '';
        operator = '';
        display.value = '';
        break;
      case 'backspace':
        currentNumber = currentNumber.slice(0, -1);
        display.value = currentNumber;
        break;
      case 'divide':
      case 'multiply':
      case 'subtract':
      case 'add':
        operator = button.id;
        previousNumber = parseFloat(currentNumber);
        currentNumber = '';
        display.value = previousNumber + ' ' + operator;
        break;
      case 'equals':
        if (currentNumber !== '') {
          let num2 = parseFloat(currentNumber);
          let result = calculate(previousNumber, num2, operator);
          display.value = result;
          currentNumber = result.toString();
          previousNumber = '';
          operator = '';
        }
        break;
      default:
        currentNumber += button.id;
        display.value = currentNumber;
    }
  });
});

function calculate(num1, num2, operator) {
  let result;
  switch (operator) {
    case 'divide':
      result = num1 / num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'add':
      result = num1 + num2;
      break;
  }
  return result;
}
