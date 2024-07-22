import config from "../config";
import CanvasAbstract from "./canvas";
import Tank from "../modal/tank";
import position from "../service/position";
// 坦克画布
class TankCanvas extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num;
  }
  model(): ModelConstructor {
    return Tank;
  }
  render(): void {
    this.drawModels(); // super 关键字可以调用父类的方法
    super.modelRender();
  }
  protected drawModels() {
    // 创建模型
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position();
      const model = this.model();
      const instance = new model(this.canvas, pos.x, 0);
      this.modelList.push(instance);
    }
  }
}

export default new TankCanvas();
