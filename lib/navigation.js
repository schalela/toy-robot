import { parsePosition } from './validation';

export const move = (position) => {
  const { X, Y, F } = parsePosition(position);

  let newX = X;
  let newY = Y;

  switch (F) {
    case 'NORTH':
      newY++;
      break;
    case 'SOUTH':
      newY--;
      break;
    case 'EAST':
      newX++;
      break;
    case 'WEST':
      newX--;
      break;
    default:
      return 'Invalid input';
  }

  return `${newX},${newY},${F}`;
};

export const rotate = (position, direction) => {
  const { X, Y, F } = parsePosition(position);

  if (['LEFT', 'RIGHT'].indexOf(direction) === -1) {
    return 'Invalid direction';
  } else {

    let newF;
    switch (F) {
      case 'NORTH':
        newF = direction === 'RIGHT' ? 'EAST' : 'WEST';
        break;
      case 'SOUTH':
        newF = direction === 'LEFT' ? 'EAST' : 'WEST';
        break;
      case 'EAST':
        newF = direction === 'RIGHT' ? 'SOUTH' : 'NORTH';
        break;
      case 'WEST':
        newF = direction === 'LEFT' ? 'SOUTH' : 'NORTH';
        break;
      default:
        return 'Invalid input';
    }

    return `${X},${Y},${newF}`;
  }
};
