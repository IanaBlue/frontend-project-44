import startGameProcess from '../index.js';
import generateRandomNum from '../helpers.js';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'undefined operator';
  }
};

const description = 'What is the result of the expression?';
const minNum = 1;
const maxNum = 50;

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = generateRandomNum(minNum, maxNum);
  const num2 = generateRandomNum(minNum, maxNum);

  const question = (`${num1} ${currentOperator} ${num2}`);
  const answer = String(calculate(num1, num2, currentOperator));
  return [question, answer];
};

const runCalcGame = () => startGameProcess(generateRound, description);

export default runCalcGame;
