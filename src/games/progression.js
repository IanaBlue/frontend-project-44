import startGameProcess from '../index.js';
import generateRandomNum from '../helpers.js';

const progressionNumbers = (startNum, increment, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(startNum + i * increment);
  }
  return result;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const startNum = generateRandomNum(1, 5);
  const increment = generateRandomNum(1, 10);
  const length = generateRandomNum(5, 10);

  const currentProgressionNumbers = progressionNumbers(startNum, increment, length);
  const removed = currentProgressionNumbers.splice((Math.random() * 10) - 1, 1, '..');

  const question = currentProgressionNumbers.join(' ');
  const answer = removed.toString();
  return [question, answer];
};

const runProgressionGame = () => startGameProcess(generateRound, description);

export default runProgressionGame;
