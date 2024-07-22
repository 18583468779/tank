import { image } from "../service/image";
import ModelAbstract from "./modelAbstract";

// 水模型
export default class extends ModelAbstract implements IModel {
  render(): void {
    super.draw(image.get("water")!);
  }
}
