import gameProcess from '../index.js';

const resultOfExpression = (a, b, operator) => {
  let result;
  if (operator === '+') {
    result = a + b;
  } if (operator === '-') {
    result = a - b;
  } if (operator === '*') {
    result = a * b;
  }
  return result;
};

const taskOfRound = 'What is the result of the expression?';

const gameRaund = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.ceil(Math.random() * 20);
  const num2 = Math.ceil(Math.random() * 10);

  const question = (`${num1} ${currentOperator} ${num2}`);
  const correctAnswer = String(resultOfExpression(num1, num2, currentOperator));
  return [question, correctAnswer];
};

const calcGame = () => gameProcess(gameRaund, taskOfRound);

export default calcGame;
