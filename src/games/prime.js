import startGameProcess from '../index.js';
import generateRandomNum from '../helpers.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  const result = [];
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  if (result.length > 1) {
    return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const randomNum = generateRandomNum();

  const question = randomNum;
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrimeGame = () => startGameProcess(generateRound, description);

export default runPrimeGame;
