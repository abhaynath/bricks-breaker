/**
 * Ball contains the data and logic.
 *
 * @class Ball
 */
class BallModel {
  x: number = 0;
  y: number = 0;
  radius: number;
  constructor() {
    this.radius = 15;
  }
  setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export { BallModel };
