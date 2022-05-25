import utils from '../utils.js';

const maxNum = 500;

const getGameRules = () => 'What is the result of the expression?';

const getRondFunc = () => () => {
  const ops = [
    {
      name: '+',
      getRes: (a, b) => a + b,
    },
    {
      name: '-',
      getRes: (a, b) => a - b,
    },
    {
      name: '*',
      getRes: (a, b) => a * b,
    },
  ];
  const op = utils.getRandomFromArray(ops);
  const firstNum = utils.getRandomInt(maxNum);
  const secondNum = utils.getRandomInt(maxNum);

  const question = `${firstNum} ${op.name} ${secondNum}`;
  const answer = op.getRes(firstNum, secondNum);
  return {
    question,
    answer,
  };
};

export default {
  getGameRules,
  getRondFunc,
};
