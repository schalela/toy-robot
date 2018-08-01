import { move, rotate } from '../lib/navigation';

describe('move the robot position', () => {
  test('move NORTH from position 1,3,NORTH', () => {
    expect(move('1,3,NORTH')).toBe('1,4,NORTH');
  });

  test('move SOUTH from position 1,3,SOUTH', () => {
    expect(move('1,3,SOUTH')).toBe('1,2,SOUTH');
  });

  test('move WEST from position 1,3,WEST', () => {
    expect(move('1,3,WEST')).toBe('0,3,WEST');
  });

  test('move EAST from position 1,3,EAST', () => {
    expect(move('1,3,EAST')).toBe('2,3,EAST');
  });

  test('move with wrong parameter should return error message', () => {
    expect(move('1,3,LEFT')).toBe('Invalid input');
  });
});

describe('rotate the robot', () => {
  test('rotate LEFT', () => {
    const initialPosition = '0,0,NORTH';
    let rotatedPosition = rotate(initialPosition, 'LEFT');
    expect(rotatedPosition).toBe('0,0,WEST');
    rotatedPosition = rotate(rotatedPosition, 'LEFT');
    expect(rotatedPosition).toBe('0,0,SOUTH');
    rotatedPosition = rotate(rotatedPosition, 'LEFT');
    expect(rotatedPosition).toBe('0,0,EAST');
    rotatedPosition = rotate(rotatedPosition, 'LEFT');
    expect(rotatedPosition).toBe(initialPosition);
  });

  test('rotate RIGHT', () => {
    const initialPosition = '0,0,NORTH';
    let rotatedPosition = rotate(initialPosition, 'RIGHT');
    expect(rotatedPosition).toBe('0,0,EAST');
    rotatedPosition = rotate(rotatedPosition, 'RIGHT');
    expect(rotatedPosition).toBe('0,0,SOUTH');
    rotatedPosition = rotate(rotatedPosition, 'RIGHT');
    expect(rotatedPosition).toBe('0,0,WEST');
    rotatedPosition = rotate(rotatedPosition, 'RIGHT');
    expect(rotatedPosition).toBe(initialPosition);
  });

  test('rotate with wrong parameters should return error message', () => {
    let rotatedPosition = rotate('0,0,NORTH', 'WEST');
    expect(rotatedPosition).toBe('Invalid direction');
  });

  test('rotate with wrong position should return error message', () => {
    let rotatedPosition = rotate('0,0,LEFT', 'RIGHT');
    expect(rotatedPosition).toBe('Invalid input');
  });
});
