#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const numderCheck = () => {
    let i = 1;
    while (i <= 3) {
        let randomNum = Math.ceil(Math.random() * 100);
        let playerAnswer = readlineSync.question('Question: ' + randomNum);
        console.log('Your answer: ' + playerAnswer);

        if (randomNum % 2 === 0 && playerAnswer === 'yes' || randomNum % 2 !== 0 && playerAnswer === 'no') {
            console.log('Correct!');
            i +=1;
            if (i > 3) {
                console.log('Congratulations, ' + userName + '!');
            }    
        } else {
            console.log(playerAnswer + ' is wrong answer ;(. \nLet\'s try again, ' + userName + '!');
            break;
        }  
        }       
};
numderCheck();