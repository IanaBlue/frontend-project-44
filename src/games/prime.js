import startGameProcess from '../index.js';
import generateRandomNumber from '../helpers.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = generateRandomNumber(1, 50);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrimeGame = () => startGameProcess(generateRound, description);

export default runPrimeGame;
