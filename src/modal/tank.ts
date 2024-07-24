import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import ModelAbstract from "./modelAbstract";

// 墙体模型
export default class extends ModelAbstract implements IModel {
  name: string = "tank";
  render(): void {
    this.move();
  }

  protected move() {
    this.canvas.clearRect(
      this.x,
      this.y,
      config.model.width,
      config.model.height
    );
    switch (this.direction) {
      case directionEnum.top:
        this.y -= 2;
        break;
      case directionEnum.right:
        this.x += 2;
        break;
      case directionEnum.bottom:
        this.y += 2;
        break;
      case directionEnum.left:
        this.x -= 2;
        break;
    }
  }

  image() {
    let dir = this.name + this.direction;
    return image.get(dir as keyof typeof config.images)!;
  }
}
