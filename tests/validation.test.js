import { isValid } from '../lib/validation';

describe('is a valid position in the table', () => {
  test('valid position (1,3) facing NORTH', () => {
    expect(isValid('1,3,NORTH')).toBe(true);
  });

  test('valid position SOUTHWEST Corner facing NORTH', () => {
    expect(isValid('0,0,NORTH')).toBe(true);
  });

  test('valid position NORTHEAST Corner facing SOUTH', () => {
    expect(isValid('5,5,NORTH')).toBe(true);
  });

  test('invalid position (6,3) facing SOUTH', () => {
    expect(isValid('6,3,SOUTH')).toBe(false);
  });

  test('invalid position (9,0) facing EAST', () => {
    expect(isValid('9,0,EAST')).toBe(false);
  });

  test('invalid direction SOUTHWEST', () => {
    expect(isValid('0,0,SOUTHWEST')).toBe(false);
  });

  test('invalid position (incomplete)', () => {
    expect(isValid('0,EAST')).toBe(false);
  });

  test('invalid position (syntax)', () => {
    expect(isValid('EAST,1,3')).toBe(false);
  });

  test('invalid position (decimal coordinates)', () => {
    expect(isValid('4.3,3,NORTH')).toBe(false);
  });
});
