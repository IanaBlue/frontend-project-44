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
      return `Operator ${operator} is invalid`;
  }
};

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[generateRandomNum(0, 3)];
  const number1 = generateRandomNum();
  const number2 = generateRandomNum();

  const question = `${number1} ${currentOperator} ${number2}`;
  const answer = String(calculate(number1, number2, currentOperator));
  return [question, answer];
};

const runCalcGame = () => startGameProcess(generateRound, description);

export default runCalcGame;
