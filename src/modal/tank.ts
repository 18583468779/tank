import { image } from "../service/image";
import ModelAbstract from "./modelAbstract";

// 墙体模型
export default class extends ModelAbstract implements IModel {
  render(): void {
    super.draw(this.randomImage());
  }
  randomImage() {
    return image.get("tank")!;
  }
}
