import { info } from './output';

export const Commands = (robot) => ({
  PLACE: (position) => robot.place(position),
  MOVE: () => robot.move(),
  RIGHT: () => robot.rotate('RIGHT'),
  LEFT: () => robot.rotate('LEFT'),
  REPORT: () => info(`The current position is: ${robot.report()}`),
  EXIT: () => info('Bye!', 'red')
});

export const Question = [
  {
    name: 'value',
    type: 'input',
    message: 'Enter a command:',
    validate: value => {
      if (value.length) {
        return true;
      } else {
        return 'Please enter a command.';
      }
    }
  }
];
