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
  }

  protected createCanvas() {
    // 创建canvas
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el); //将一个给定的元素节点插入到相对于当前元素的指定位置(内部)。
  }
}
