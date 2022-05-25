#!/usr/bin/env node

import game from '../src/index.js';
import gcd from '../src/games/gcd.js';

game.runGame({
  rules: gcd.getGameRules(),
  getRoundData: gcd.getRondFunc(),
});
