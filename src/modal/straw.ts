import config from "../config";
import { image } from "../service/image";
import ModelAbstract from "./modelAbstract";

// 草地模型
export default class extends ModelAbstract implements IModel {
  name: string = "straw";
  image(): HTMLImageElement {
    return image.get(this.name as keyof typeof config.images)!;
  }
  render(): void {
    // super.draw(this.image());
  }
}
