const isEven = (num) => !(num % 2);

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomFromArray = (arr) => {
  const pos = getRandomInt(arr.length);
  return arr[pos];
};

const gcd = (x, y) => (x !== 0 ? gcd(y % x, x) : y);

export default {
  gcd,
  getRandomInt,
  getRandomFromArray,
  isEven,
};
