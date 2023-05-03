import startGameProcess from '../index.js';
import generateRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNum = generateRandomNumber(1, 50);

  const question = randomNum;
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => startGameProcess(generateRound, description);

export default runEvenGame;
