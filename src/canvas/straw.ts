import CanvasAbstract from "./canvas";

// 草地画布
class Straw extends CanvasAbstract {
  render(): void {
    super.drawModels(); // super 关键字可以调用父类的方法
  }
}

export default new Straw();
