import startGameProcess from '../index.js';
import generateRandomNumber from '../helpers.js';

const generateProgression = (startNumber, increment, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(startNumber + i * increment);
  }
  return result;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const startNumber = generateRandomNumber(1, 5);
  const increment = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);

  const progression = generateProgression(startNumber, increment, length);
  const hiddenIndex = generateRandomNumber(0, progression.length - 1);

  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runProgressionGame = () => startGameProcess(generateRound, description);

export default runProgressionGame;
