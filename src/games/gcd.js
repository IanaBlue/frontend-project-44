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

const generateRound = () => {
  const number1 = generateRandomNum();
  const number2 = generateRandomNum();

  const question = `${number1} ${number2}`;
  const answer = String(maxDivider(number1, number2));
  return [question, answer];
};

const runGcdGame = () => startGameProcess(generateRound, description);

export default runGcdGame;
