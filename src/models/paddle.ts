class PaddleModel {
  x = 0;
  y = 0;
  width = 80;
  height = 8;
  constructor(x: number, y: number, width: number, height: number) {
    this.setPosition(x, y);
    this.width = width;
    this.height = height;
  }
  setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export { PaddleModel };
