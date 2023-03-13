#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('What is the result of the expression?');
const expressionCheck = () => {
    let i = 1;
    while (i <= 3) {
        let operators = ['+','-','*'];
        let randomIndexOfOperator = Math.floor(Math.random()*operators.length);
        let currentOperator = operators[randomIndexOfOperator];
        let num1 = Math.ceil(Math.random() * 20);
        let num2 = Math.ceil(Math.random() * 10);


        const resultOfExpression = (a, b) => {
            let result
            if (currentOperator === '+') {
               result = a + b;
             } if (currentOperator === '-') {
               result = a - b;
             } if (currentOperator === '*') {
               result = a * b;
             }
             return result;
             };

        let playerAnswer = readlineSync.question('Question: ' + num1 + currentOperator + num2);
        console.log('Your answer: ' + playerAnswer);

        if (String(resultOfExpression(num1,num2)) === playerAnswer) {
            console.log('Correct!'); 
            i += 1;
            if (i > 3) {
                console.log('Congratulations, ' + userName + '!');
            }    
        } else {
            console.log(playerAnswer + ' is wrong answer ;(. Correct answer was ' + resultOfExpression(num1,num2) + '.');
            break;
        } 
    }       
};
expressionCheck();
