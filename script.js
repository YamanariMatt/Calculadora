let currentInput = ''; 
let previousInput = ''; 
let operator = ''; 

function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return; 
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(op) {
  if (currentInput === '') return; 
  if (previousInput !== '') calculate(); 
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (!previousInput || !currentInput || !operator) return;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 === 0 ? 'Erro' : num1 / num2;
      break;
    default:
      return;
  }

  updateDisplay(result);
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('0');
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || '0');
}

function updateDisplay(value) {
  document.getElementById('display').textContent = value;
}
