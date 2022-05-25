import utils from '../utils.js';

const arrayLength = 10;
const maxStart = 50;
const maxStep = 10;

const createQuestionFromArray = (arr, position) => {
  const stringArray = arr.map((num, index) => (index === position ? '..' : num.toString()));
  return stringArray.join(' ');
};

const getGameRules = () => 'What number is missing in the progression?';

const getRondFunc = () => () => {
  const start = utils.getRandomInt(maxStart);
  const step = utils.getRandomInt(maxStep);
  const progression = utils.generateRandomArray(arrayLength, start, step);

  // const firstNum = utils.getRandomInt(500);
  // const secondNum = utils.getRandomInt(500);
  const hidedPosition = utils.getRandomInt(10);
  const question = createQuestionFromArray(progression, hidedPosition);
  const answer = progression[hidedPosition].toString();
  return {
    question,
    answer,
  };
};

export default {
  getGameRules,
  getRondFunc,
};
