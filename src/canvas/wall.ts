import config from "../config";
import CanvasAbstract from "./canvas";
import Wall from "../modal/wall";
// 墙体画布
class WallCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.drawModels(); // super 关键字可以调用父类的方法
  }
  num(): number {
    return config.wall.num;
  }
  model(): ModelConstructor {
    return Wall;
  }
  render(): void {
    super.modelRender();
  }
}

export default new WallCanvas();
