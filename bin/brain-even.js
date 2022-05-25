#!/usr/bin/env node

import cli from '../src/cli.js';
import even from '../src/games/even.js';
import game from '../src/index.js';

cli.writeGreeting();
const userName = cli.getUserName();
game.runGame(userName, {
  rules: even.getGameRules(),
  getRoundData: even.getRondFunc(),
});
