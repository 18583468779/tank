import ModelAbstract from "./modelAbstract";

// 草地模型
export class Straw extends ModelAbstract implements IModel {
  render(): void {
    super.draw();
  }
}
