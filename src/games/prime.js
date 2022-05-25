import utils from '../utils.js';

const maxNum = 1000;

const isPrime = (num) => {
  for (let divider = 2; divider < num / 2; divider += 1) {
    if ((num % divider) === 0) {
      return false;
    }
  }
  return true;
};

const getGameRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRondFunc = () => () => {
  const num = utils.getRandomInt(maxNum);
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default {
  getGameRules,
  getRondFunc,
};
