import { info, title } from '../lib/output';

jest.mock('chalk', () => ({
  blue: jest.fn((text) => text),
  red: jest.fn((text) => text)
}));

jest.mock('figlet', () => ({
  textSync: jest.fn((text) => text)
}));

const chalk = require('chalk');
const figlet = require('figlet');

describe('info logging', () => {
  test('info method should render with the selected color', () => {
    const textToLog = 'One ring to rule them all';
    const color = 'red';
    info(textToLog, color);
    expect(chalk[color]).toHaveBeenCalledWith(textToLog);
  });
});

describe('render title', () => {
  test('title should render in blue and with figlet textsync', () => {
    title();
    expect(chalk.blue).toHaveBeenCalled();
    expect(figlet.textSync).toHaveBeenCalled();
  });
});
