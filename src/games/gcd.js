import utils from '../utils.js';

const maxNum = 500;

const getGameRules = () => 'Find the greatest common divisor of given numbers.';

const getRondFunc = () => () => {
  const firstNum = utils.getRandomInt(maxNum);
  const secondNum = utils.getRandomInt(maxNum);

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
