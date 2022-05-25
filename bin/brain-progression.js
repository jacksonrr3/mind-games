#!/usr/bin/env node

import game from '../src/index.js';
import progressor from '../src/games/progressor.js';

game.runGame({
  rules: progressor.getGameRules(),
  getRoundData: progressor.getRondFunc(),
});
