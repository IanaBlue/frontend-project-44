import gameProcess from '../index.js';

const maxDivider = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return (num1 || num2);
};

const taskOfRound = 'Find the greatest common divisor of given numbers.';

const gameRaund = () => {
  const num1 = Math.ceil(Math.random() * 20);
  const num2 = Math.ceil(Math.random() * 20);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(maxDivider(num1, num2));
  return [question, correctAnswer];
};

const gcdGame = () => gameProcess(gameRaund, taskOfRound);

export default gcdGame;
