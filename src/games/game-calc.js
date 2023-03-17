import gameProcess from '../index.js';

const getRandomNumber = (min, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

const resultOfExpression = (a, b, operator) => {
  let result
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
    const operators = ['+','-','*'];
    const currentOperator = operators[Math.floor(Math.random()*operators.length)];
    const num1 = getRandomNumber(0, 100);
    const num2 = getRandomNumber(0, 100);

    const question = (num1 + currentOperator + num2);
    const correctAnswer = String(resultOfExpression(num1, num2, currentOperator));
    return [question, correctAnswer];        
};

const calcGame = () => gameProcess(gameRaund, taskOfRound);

export default calcGame;