import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameProcess = (gameRaund, taskOfRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(taskOfRound);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = gameRaund();
    const playerAnswer = readlineSync.question(`Question: ${question}`);
    if (correctAnswer !== playerAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameProcess;
