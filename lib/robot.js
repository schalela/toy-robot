import { isValid } from './validation';
import { move, rotate } from './navigation';
import { info } from './output';

export default class Robot {
  constructor (position) {
    this.position = position || 'OFF';
    this.place = this.place.bind(this);
    this.report = this.report.bind(this);
    this.move = this.move.bind(this);
  }

  place (newPosition) {
    if (isValid(newPosition)) {
      this.position = newPosition;
    } else {
      info(`The new position ${newPosition} is not a valid position on the table`);
    }
  }

  move () {
    const { position } = this;
    if (position === 'OFF') {
      info(`The robot is no on the table. Please use PLACE first`);
      return;
    }

    const newPosition = move(position);

    this.place(newPosition);
  }

  rotate (direction) {
    const { position } = this;
    if (position === 'OFF') {
      info(`The robot is no on the table. Please use PLACE first`);
      return;
    }

    const newPosition = rotate(position, direction);

    this.place(newPosition);
  }

  report () {
    const { position } = this;
    if (position === 'OFF') {
      info(`The robot is not on the table. Please use PLACE first`);
    }

    return position;
  }
}
