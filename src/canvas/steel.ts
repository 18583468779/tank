import config from "../config";
import CanvasAbstract from "./canvas";
import Steel from "../modal/steel";
// 转墙体画布
class SteelCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.drawModels(config.wall.num, Steel); // super 关键字可以调用父类的方法
  }

  render(): void {
    super.modelRender();
  }
}

export default new SteelCanvas();
