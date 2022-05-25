#!/usr/bin/env node

import even from '../src/games/even.js';
import game from '../src/index.js';

game.runGame({
  rules: even.getGameRules(),
  getRoundData: even.getRondFunc(),
});
