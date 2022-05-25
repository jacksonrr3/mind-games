import cli from './cli.js';
import utils from './utils.js';

const runGame = (userName) => {
  let isLoose = false;
  cli.writeToUser('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = utils.getRandomInt(1000);
    cli.writeToUser(`Question: ${randomNum}`);
    const userAnswer = cli.getUserAnswer('Your answer: ');
    const answer = utils.isEven(randomNum) ? 'yes' : 'no';
    if (userAnswer !== answer) {
      cli.writeToUser(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      isLoose = true;
      break;
    }
    cli.writeToUser('Correct!');
  }
  const gameResult = isLoose ? `Let's try again, ${userName}` : `Congratulations, ${userName}!`;
  cli.writeToUser(gameResult);
};

export default {
  runGame,
};
