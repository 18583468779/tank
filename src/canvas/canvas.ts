import config from "../config";
import { image } from "../service/image";

/*******
 * 定义一个抽象类，因为所有的角色都需要画布
 * 抽象类作为父类，子类也必须定义抽象类的方法
 *
 * **/
type PositionType = {
  x: number;
  y: number;
};
export default abstract class CanvasAbstract {
  abstract render(): void; // 定义抽象方法
  constructor(
    protected app = document.querySelector("#app") as HTMLDivElement,
    protected el = document.createElement("canvas"), // 设置画布
    protected canvas = el.getContext("2d")!
  ) {
    this.createCanvas();
  }

  protected createCanvas() {
    // 创建canvas
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el); //将一个给定的元素节点插入到相对于当前元素的指定位置(内部)。
  }

  protected drawModels(num: number) {
    // 创建模型（草地）
    this.positionCollection(num).forEach((position: any) => {
      this.canvas.drawImage(
        image.get("straw")!,
        position.x,
        position.y,
        config.model.width,
        config.model.height
      );
    });
  }
  protected positionCollection(num: number) {
    // 批量生成唯一位置，防止重叠
    const collection = [] as {
      x: number;
      y: number;
    }[];
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
  protected position() {
    // 随机位置生成
    return {
      x:
        Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
        config.model.width,
      y:
        Math.floor(
          Math.random() * (config.canvas.height / config.model.height)
        ) * config.model.height,
    };
  }
}
