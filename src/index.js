import cli from './cli.js';

const ROUNDS = 3;

const runGame = ({ rules, getRoundData }) => {
  cli.writeGreeting();
  const userName = cli.getUserName();
  cli.writeToUser(rules);
  let isFail = false;

  for (let round = 0; round < ROUNDS; round += 1) {
    const { question, answer } = getRoundData();
    cli.writeToUser(`Question: ${question}`);
    const userAnswer = cli.getUserAnswer('Your answer: ');
    if (userAnswer !== answer) {
      cli.writeToUser(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      isFail = true;
      break;
    }
    cli.writeToUser('Correct!');
  }

  const gameResult = isFail
    ? `Let's try again, ${userName}`
    : `Congratulations, ${userName}!`;
  cli.writeToUser(gameResult);
};

export default {
  runGame,
};
