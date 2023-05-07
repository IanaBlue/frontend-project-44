import startGameProcess from '../index.js';
import generateRandomNumber from '../helpers.js';

const getMaxDivider = (number1, number2) => {
  let firstDivider = number1;
  let secondDivider = number2;
  while (firstDivider !== secondDivider) {
    if (firstDivider > secondDivider) {
      firstDivider -= secondDivider;
    } else {
      secondDivider -= firstDivider;
    }
  }
  return (firstDivider || secondDivider);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);

  const question = `${number1} ${number2}`;
  const answer = String(getMaxDivider(number1, number2));
  return [question, answer];
};

const runGcdGame = () => startGameProcess(generateRound, description);

export default runGcdGame;
