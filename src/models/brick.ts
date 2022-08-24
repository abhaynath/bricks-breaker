class BrickModel {
  x = 0;
  y = 0;
  width = 42;
  height: 15;
  brickType = 0;
  color = "#FF4B39";
  private strength = 20;

  constructor(x: number, y: number, brickType = 0) {
    this.brickType = brickType;
    this.setPosition(x, y);
    this.setBrickType();
  }
  setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  setBrickType() {
    switch (this.brickType) {
      case 1:
        this.strength = 30;
        this.color = "#ff00ff";
        break;
      case 2:
        this.strength = 40;
        this.color = "#0000ff";
        break;
      case 3:
        this.strength = 50;
        this.color = "#00ff00";
        break;
      default:
        this.strength = 20;
        this.color = "#FF4B39";
        break;
    }
  }
}
export { BrickModel };
