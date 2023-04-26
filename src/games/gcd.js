import startGameProcess from '../index.js';
import generateRandomNum from '../helpers.js';

const maxDivider = (num1, num2) => {
  let firstDiveder = num1;
  let secondDiveder = num2;
  while (firstDiveder !== secondDiveder) {
    if (firstDiveder > secondDiveder) {
      firstDiveder -= secondDiveder;
    } else {
      secondDiveder -= firstDiveder;
    }
  }
  return (firstDiveder || secondDiveder);
};

const description = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 30;

const generateRound = () => {
  const num1 = generateRandomNum(minNum, maxNum);
  const num2 = generateRandomNum(minNum, maxNum);

  const question = `${num1} ${num2}`;
  const answer = String(maxDivider(num1, num2));
  return [question, answer];
};

const runGcdGame = () => startGameProcess(generateRound, description);

export default runGcdGame;
