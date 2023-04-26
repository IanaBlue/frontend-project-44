import startGameProcess from '../index.js';
import generateRandomNum from '../helpers.js';

const isNumPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  const result = [];
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  if (result.length > 1) {
    return 'no';
  }
  return 'yes';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const generateRound = () => {
  const randomNum = generateRandomNum(minNum, maxNum);

  const question = randomNum;
  const answer = isNumPrime(question);
  return [question, answer];
};

const runPrimeGame = () => startGameProcess(generateRound, description);

export default runPrimeGame;
