import config from "../config";
import { image } from "../service/image";
import ModelAbstract from "./modelAbstract";

// 水模型
export default class extends ModelAbstract implements IModel {
  name: string = "water";
  image(): HTMLImageElement {
    return image.get(this.name as keyof typeof config.images)!;
  }
  render(): void {
    // super.draw(this.image());
  }
}
