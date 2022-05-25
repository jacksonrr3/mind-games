#!/usr/bin/env node

import game from '../src/index.js';
import calc from '../src/games/calc.js';

game.runGame({
  rules: calc.getGameRules(),
  getRoundData: calc.getRondFunc(),
});
