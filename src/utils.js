function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isEven(num) {
  return !(num % 2);
}

export default {
  getRandomInt,
  isEven,
};
