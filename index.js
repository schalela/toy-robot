import clear from 'clear';
import inquirer from 'inquirer';

import { title } from './lib/output.js';
import { Commands, Question } from './lib/cli';
import Robot from './lib/robot';

const commandList = Commands(new Robot());

const askForUserInput = async () => inquirer.prompt(Question);

const run = async () => {
  clear();
  title();

  let input;
  do {
    const { value } = input = await askForUserInput();

    let { 0: command, 1: position } = value.split(' ');
    command = command.toUpperCase();

    commandList[command](position);
  } while (input.value.toUpperCase() !== 'EXIT');
};

run();
