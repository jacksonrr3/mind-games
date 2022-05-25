#!/usr/bin/env node

import cli from '../src/cli.js';
import even from '../src/even.js';

cli.writeGreeting();
const userName = cli.getUserName();
even.runGame(userName);
