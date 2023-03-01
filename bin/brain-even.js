#!/usr/bin/env node


import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const numderCheck = () => {
    for (let i = 0; i < 3; i += 1) {
        let getRandomNumber = Math.ceil(Math.random() * 100);
        let playerAnswer = readlineSync.question('Question: ' + getRandomNumber);
        console.log('Your answer: ' + playerAnswer);

        if (playerAnswer !== 'yes' && playerAnswer !== 'no') {
            console.log(playerAnswer + ' is wrong answer ;(. \nLet\'s try again, ' + userName + '!');
            break;
        } else if (getRandomNumber % 2 === 0 && playerAnswer === 'yes' || getRandomNumber % 2 !== 0 && playerAnswer === 'no') {
            console.log('Correct!');
        } else if (getRandomNumber % 2 === 0 && playerAnswer === 'no') {
            console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'. \nLet\'s try again, ' + userName + '!');
            break;
        } else if (getRandomNumber % 2 !== 0 && playerAnswer === 'yes') {
            console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'. \nLet\'s try again, ' + userName + '!');
            break;
        }  
    }
    console.log('Congratulations, ' + userName + '!');
};
numderCheck();
