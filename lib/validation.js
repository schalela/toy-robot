export const isIntegerString = (str) => {
  const n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
};

export const parsePosition = (position) => {
  let { 0: X, 1: Y, 2: F } = position.split(',');

  X = isIntegerString(X) ? parseInt(X) : -1;
  Y = isIntegerString(Y) ? parseInt(Y) : -1;

  return { X, Y, F };
};

export const isValid = (position) => {
  const { X, Y, F } = parsePosition(position);

  return X <= 5 &&
         X > -1 &&
         Y <= 5 &&
         Y > -1 &&
         ['NORTH', 'SOUTH', 'EAST', 'WEST'].indexOf(F) > -1;
};
