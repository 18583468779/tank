import config from "../config";
import CanvasAbstract from "./canvas";
import Straw from "../modal/straw";
// 草地画布
class StrawCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.drawModels(config.straw.num, Straw); // super 关键字可以调用父类的方法
  }

  render(): void {
    super.modelRender();
  }
}

export default new StrawCanvas();
