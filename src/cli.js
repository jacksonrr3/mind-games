import readLineSync from 'readline-sync';

export const greetingUser = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};
