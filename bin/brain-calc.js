import cli from '../src/cli.js';
import game from '../src/index.js';
import calc from '../src/games/calc.js';

cli.writeGreeting();
const userName = cli.getUserName();
game.runGame(userName, {
  rules: calc.getGameRules(),
  getRoundData: calc.getRondFunc(),
});
