const isEven = (num) => !(num % 2);

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomFromArray = (arr) => {
  const pos = getRandomInt(arr.length);
  return arr[pos];
};

const generateRandomArray = (length, start, step) => {
  const result = [];
  let num = start;
  for (let i = 0; i < length; i += 1, num += step) {
    result.push(num);
  }
  return result;
};
const gcd = (x, y) => (x !== 0 ? gcd(y % x, x) : y);

export default {
  gcd,
  getRandomInt,
  getRandomFromArray,
  generateRandomArray,
  isEven,
};
