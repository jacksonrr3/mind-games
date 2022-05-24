import readLineSync from 'readline-sync';

const writeGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export default {
  writeGreeting,
  getUserName,
};
