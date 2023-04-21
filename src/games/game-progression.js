import gameProcess from '../index.js';

const progressionNumbers = () => {
    const ramdomNum10 = Math.ceil(Math.random() * 10);
    const ramdomNum50 = Math.ceil(Math.random() * 50);
    const result = [];
    for (let i = ramdomNum50; result.length != 10; i += ramdomNum10) {
        result.push(i);
    }
    return result;
};

const taskOfRound = 'What number is missing in the progression?';

const gameRaund = () => {
    let currentProgressionNumbers = progressionNumbers();
    let removed = currentProgressionNumbers.splice((Math.random() * 10) - 1, 1, '..');
    
    const question = currentProgressionNumbers.join(' ');
    const correctAnswer = removed.toString();
    return [question, correctAnswer];        
};

const progressionGame = () => gameProcess(gameRaund, taskOfRound);

export default progressionGame;