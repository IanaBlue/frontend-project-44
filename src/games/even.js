import startGameProcess from '../index.js';
import generateRandomNum from '../helpers.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = 1;
const maxNum = 10;

const generateRound = () => {
  const randomNum = generateRandomNum(minNum, maxNum);

  const question = randomNum;
  const answer = isEven(question);
  return [question, answer];
};

const runEvenGame = () => startGameProcess(generateRound, description);

export default runEvenGame;
