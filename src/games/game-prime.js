import gameProcess from '../index.js';

const isNumPrime = (number) => {
    if (number === 1) {
      return false;
    }
    let result = [];
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

const taskOfRound = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameRaund = () => {
    const randomNum = Math.ceil(Math.random() * 100);
    
    const question = randomNum;
    const correctAnswer = isNumPrime(question);
    return [question, correctAnswer];
};

const primeGame = () => gameProcess(gameRaund, taskOfRound);

export default primeGame;