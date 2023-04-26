import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGameProcess = (generateRound, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    const playerAnswer = readlineSync.question(`Question: ${question}`);
    if (answer !== playerAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGameProcess;
