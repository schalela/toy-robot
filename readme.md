# Toy Robot Challenge

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![CircleCI](https://circleci.com/gh/schalela/toy-robot/tree/master.svg?style=svg)](https://circleci.com/gh/schalela/toy-robot/tree/master)

A simple Node.js console application to simulate a toy robot moving on a square table top, of dimensions 5 units x 5 units. The solution BDD to describe the expected behaviour in a feature file and to use Cucumber runner with Jest to run the tests in the step definitions.

Also, Jest was used to describe the functional behaviour for the unit tests following a TDD approach.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This application requires Node.js 8+ and a module packager (npm or yarn).

### Installing

Just clone this repo and run

```
npm i
```

or

```
yarn
```

## Running the tests

Just run 

```
npm test
```
or

```
yarn test
```

## Run the application

Use 

```
npm run start
```
or

```
yarn start
```
And then you can use the following commands:

*PLACE X,Y,F* - To place the robot in any place on the table. 0,0 is the SOUTHWEST corner and F (facing) can be NORTH, SOUTH, EAST, WEST.

*MOVE* - Moves the robot 1 square in the direction that is facing

*RIGHT* - Rotates the robot 90 degrees to the right.

*LEFT* - Rotates the robot 90 degrees to the left.

*REPORT* - Shows the robot current position.

## Example

The following sequence:

PLACE 0,0,NORTH

MOVE

MOVE

RIGHT

MOVE

MOVE

RIGHT

REPORT

Should display position 2,2,SOUTH

## Built With

* [Poi](https://poi.js.org/) - A zero-config bundler for the web
* [Jest](https://jestjs.io/) - Delightful JavaScript Testing
* [Cucumber](https://cucumber.io/) - Simple, human collaboration

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
