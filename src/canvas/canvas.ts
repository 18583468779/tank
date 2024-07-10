import config from "../config";

/*******
 * 定义一个抽象类，因为所有的角色都需要画布
 * 抽象类作为父类，子类也必须定义抽象类的方法
 *
 * **/
export default abstract class CanvasAbstract {
  constructor(
    protected app = document.querySelector("#app") as HTMLDivElement,
    protected el = document.createElement("canvas"), // 设置画布
    protected canvas = el.getContext("2d")!
  ) {
    this.createCanvas();
    this.drawModels();
  }

  protected createCanvas() {
    // 创建canvas
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el); //将一个给定的元素节点插入到相对于当前元素的指定位置(内部)。
  }

  protected drawModels() {
    // 创建模型（草地）

    const img = document.createElement("img");
    const position = this.position();
    img.src = config.images.straw; // 图片加载不出来，因为图片加载是异步的
    img.onload = () => {
      this.canvas.drawImage(
        img,
        position.x,
        position.y,
        config.model.width,
        config.model.height
      );
    };
  }
  protected position() {
    return {
      x: 220,
      y: 20,
    };
  }
}
