import config from "../config";
import CanvasAbstract from "./canvas";
import Wall from "../modal/wall";
// 墙体画布
class WallCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.drawModels(config.wall.num, Wall); // super 关键字可以调用父类的方法
  }

  render(): void {
    super.modelRender();
  }
}

export default new WallCanvas();
