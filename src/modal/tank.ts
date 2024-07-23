import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import ModelAbstract from "./modelAbstract";

// 墙体模型
export default class extends ModelAbstract implements IModel {
  name: string = "tank";
  protected direction: directionEnum = directionEnum.top;
  render(): void {
    this.randomDirection();
    super.draw(this.randomImage());
  }
  // 随机方向
  randomDirection() {
    const index = Math.floor(Math.random() * 4);
    this.direction = Object.values(directionEnum)[index] as directionEnum;
  }
  randomImage() {
    let dir = this.name + this.direction;
    return image.get(dir as keyof typeof config.images)!;
  }
}
