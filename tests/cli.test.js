import { Question, Commands } from '../lib/cli';
import Robot from '../lib/robot';
import { info } from '../lib/output';

let robot;
let commandList;

jest.mock('../lib/output');

beforeEach(() => {
  robot = new Robot();
  jest.spyOn(robot, 'place');
  jest.spyOn(robot, 'move');
  jest.spyOn(robot, 'rotate');
  jest.spyOn(robot, 'report');
  commandList = Commands(robot);
  commandList.PLACE('0,0,SOUTH');
});

describe('commands', () => {
  test('command PLACE should call place() function with position', () => {
    expect(robot.place).toHaveBeenCalledTimes(1);
    expect(robot.place).toHaveBeenCalledWith('0,0,SOUTH');
  });

  test('command MOVE should call move() function', () => {
    commandList.MOVE();
    expect(robot.move).toHaveBeenCalledTimes(1);
  });

  test('command RIGHT should call rotate() function with direction RIGHT', () => {
    commandList.RIGHT();
    expect(robot.rotate).toHaveBeenCalledTimes(1);
    expect(robot.rotate).toHaveBeenCalledWith('RIGHT');
  });

  test('command LEFT should call rotate() function with direction LEFT', () => {
    commandList.LEFT();
    expect(robot.rotate).toHaveBeenCalledTimes(1);
    expect(robot.rotate).toHaveBeenCalledWith('LEFT');
  });

  test('command REPORT should call report() function and print the current position', () => {
    commandList.PLACE('0,0,EAST');
    commandList.REPORT();
    expect(robot.report).toHaveBeenCalledTimes(1);
    expect(info).toHaveBeenCalledWith('The current robot position is: 0,0,EAST');
  });

  test('command EXIT should print Bye! message', () => {
    commandList.EXIT();
    expect(info).toHaveBeenCalledWith('Bye!', 'red');
  });
});

describe('cli prompt validation', () => {
  test('the prompt validation should return true if there is a value in the input', () => {
    expect(Question[0].validate('some')).toBeTruthy();
  });

  test('the prompt validation should return error message if there is no value in the input', () => {
    expect(Question[0].validate('')).toBe('Please enter a command.');
  });
});
