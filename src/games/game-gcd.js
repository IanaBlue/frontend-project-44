import gameProcess from '../index.js';

const maxDivider = (num1, num2) => {
    const result = [];
    for (let i = 1; i !== (num1 + num2) / 2; i += 1) {
      if (num1 % i === 0 && num2% i === 0) {
      result.push(i)
    }
    }
    return result[result.length - 1]
  };

const taskOfRound = 'Find the greatest common divisor of given numbers.';

const gameRaund = () => {
    const num1 = Math.ceil(Math.random() * 50);
    const num2 = Math.ceil(Math.random() * 50);

    const question = `${num1} ${num2}`;
    const correctAnswer = String(maxDivider(num1, num2));
    return [question, correctAnswer];        
};

const gcdGame = () => gameProcess(gameRaund, taskOfRound);

export default gcdGame;