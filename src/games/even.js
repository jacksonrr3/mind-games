import utils from '../utils.js';

const maxNum = 1000;

const getGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getRondFunc = () => () => {
  const question = utils.getRandomInt(maxNum);
  const answer = utils.isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default {
  getGameRules,
  getRondFunc,
};
