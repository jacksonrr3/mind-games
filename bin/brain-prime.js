#!/usr/bin/env node

import game from '../src/index.js';
import prime from '../src/games/prime.js';

game.runGame({
  rules: prime.getGameRules(),
  getRoundData: prime.getRondFunc(),
});
