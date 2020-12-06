import { isValid } from './validation';
import { move, rotate } from './navigation';
import { info } from './output';

const OFF_THE_TABLE_ERROR = `The robot is not on the table. Please use PLACE first`;
const INVALID_POSITION_ERROR = (position) => `The new position ${position} is not a valid position on the table`;

export default class Robot {
  constructor (position) {
    this.position = position || 'OFF';
    this.place = this.place.bind(this);
    this.report = this.report.bind(this);
    this.move = this.move.bind(this);
  }

  place (newPosition) {
    if (!isValid(newPosition)) {
      info(INVALID_POSITION_ERROR(newPosition));
      return;
    }

    this.position = newPosition;
  }

  move () {
    const { position } = this;
    if (position === 'OFF') {
      info(OFF_THE_TABLE_ERROR);
      return;
    }

    const newPosition = move(position);

    this.place(newPosition);
  }

  rotate (direction) {
    const { position } = this;
    if (position === 'OFF') {
      info(OFF_THE_TABLE_ERROR);
      return;
    }

    const newPosition = rotate(position, direction);

    this.place(newPosition);
  }

  report () {
    const { position } = this;
    if (position === 'OFF') {
      info(OFF_THE_TABLE_ERROR);
    }

    return position;
  }
}
