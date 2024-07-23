import config from "../config";
import { image } from "../service/image";
import ModelAbstract from "./modelAbstract";

// 墙体模型
export default class extends ModelAbstract implements IModel {
  name: string = "wall";
  render(): void {
    super.draw(image.get(this.name as keyof typeof config.images)!);
  }
}
