import gameProcess from '../index.js';

const ramdomNum10 = Math.ceil(Math.random() * 10);
const ramdomNum50 = Math.ceil(Math.random() * 50);

const progressionNumbers = () => {
    const result = [];
    for (let i = ramdomNum50; result.length != 10; i += ramdomNum10) {
        result.push(i);
    }
    return result;
};

const taskOfRound = 'What number is missing in the progression?';

const gameRaund = () => {
    let currentProgressionNumbers = progressionNumbers();
    let removed = currentProgressionNumbers.splice(ramdomNum10 - 1, 1, '..');
    
    const question = currentProgressionNumbers.toString();
    const correctAnswer = removed.toString();
    return [question, correctAnswer];        
};

const progressionGame = () => gameProcess(gameRaund, taskOfRound);

export default progressionGame;