const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = (num) => !(num % 2);

const getRandomFromArray = (arr) => {
  const pos = getRandomInt(arr.length);
  return arr[pos];
};

export default {
  getRandomInt,
  getRandomFromArray,
  isEven,
};
