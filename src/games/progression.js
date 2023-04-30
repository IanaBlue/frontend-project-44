import startGameProcess from '../index.js';
import generateRandomNum from '../helpers.js';

const generateProgression = (startNumber, increment, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(startNumber + i * increment);
  }
  return result;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const startNumber = generateRandomNum(1, 5);
  const increment = generateRandomNum(1, 10);
  const length = generateRandomNum(5, 10);

  const progression = generateProgression(startNumber, increment, length);
  const hiddenIndex = generateRandomNum(0, progression.length);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  const answer = hiddenNumber.toString();
  return [question, answer];
};

const runProgressionGame = () => startGameProcess(generateRound, description);

export default runProgressionGame;
