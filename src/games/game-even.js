import gameProcess from '../index.js';

const isNumEven = (number) => {
    if (number % 2 === 0) {
        return 'yes';
    }
    return 'no';
};

const taskOfRound = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRaund = () => {
    const randomNum = Math.ceil(Math.random() * 100);
    const question = randomNum;
    const correctAnswer = isNumEven(question);
    return [question, correctAnswer];        
};

const evenGame = () => gameProcess(gameRaund, taskOfRound);

export default evenGame;