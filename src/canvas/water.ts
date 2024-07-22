import config from "../config";
import CanvasAbstract from "./canvas";
import Water from "../modal/water";
// 水画布
class WaterCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.drawModels(config.water.num, Water); // super 关键字可以调用父类的方法
  }

  render(): void {
    super.modelRender();
  }
}

export default new WaterCanvas();
