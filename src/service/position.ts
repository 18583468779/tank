import { PositionType } from "../canvas/canvas";
import config from "../config";

class Position {
  public positionCollection(num: number) {
    // 批量生成唯一位置，防止重叠
    const collection = [] as PositionType[];
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position();
        const exists = collection.some(
          (c) => c.x == position.x && c.y == position.y
        );
        if (!exists) {
          collection.push(this.position());
          break;
        }
      }
    }
    return collection;
  }
  public position() {
    // 随机位置生成
    return {
      x:
        Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
        config.model.width,
      y:
        Math.floor(
          Math.random() * (config.canvas.height / config.model.height - 5)
        ) *
          config.model.height +
        config.model.height * 2,
    };
  }
}
export default new Position();
