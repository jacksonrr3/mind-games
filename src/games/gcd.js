import utils from '../utils.js';

const getGameRules = () => 'Find the greatest common divisor of given numbers.';

const getRondFunc = () => () => {
  const firstNum = utils.getRandomInt(500);
  const secondNum = utils.getRandomInt(500);

  const question = `${firstNum} ${secondNum}`;
  const answer = utils.gcd(firstNum, secondNum);
  return {
    question,
    answer,
  };
};

export default {
  getGameRules,
  getRondFunc,
};
