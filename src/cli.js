import readLineSync from 'readline-sync';

const greetingUser = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export default greetingUser;
