import { defineFeature, loadFeature } from 'jest-cucumber';
import Robot from '../lib/robot';

const feature = loadFeature('./features/robot.feature', {
  errorOnMissingScenariosAndSteps: true
});

let robot;

const givenAnInstanceOfTheRobotIsWaitingForCommands = given => {
  given(/^an instance of the robot in position (.*) is waiting for commands/, position => {
    robot = new Robot(position);
  });
};

const thenTheRobotNewPositionShouldBe = then => {
  then(/^the robot new position should be (.*)$/, response => {
    expect(robot.report()).toBe(response);
  });
};

defineFeature(feature, test => {
  test('Place the robot on the table', ({ given, when, then }) => {
    givenAnInstanceOfTheRobotIsWaitingForCommands(given);

    when(/^I type: PLACE (.*)$/, newPosition => {
      robot.place(newPosition);
    });

    thenTheRobotNewPositionShouldBe(then);
  });

  test('Move the robot through the table', ({ given, when, then }) => {
    givenAnInstanceOfTheRobotIsWaitingForCommands(given);

    when('I type MOVE', () => {
      robot.move();
    });

    thenTheRobotNewPositionShouldBe(then);
  });

  test('Rotate the robot position', ({ given, when, then }) => {
    givenAnInstanceOfTheRobotIsWaitingForCommands(given);

    when(/^I type (.*)$/, (command) => {
      robot.rotate(command);
    });

    thenTheRobotNewPositionShouldBe(then);
  });
});
