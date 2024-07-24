import config from "../config";
import { directionEnum } from "../enum/directionEnum";
export default abstract class ModelAbstract {
  abstract render(): void; // 子类必须实现render方法
  abstract name: string;
  abstract image(): HTMLImageElement;
  protected direction: directionEnum = directionEnum.top;

  constructor(
    public canvas: CanvasRenderingContext2D,
    public x: number,
    public y: number
  ) {
    this.randomDirection();
  }

  // protected draw(image: HTMLImageElement) {
  //   this.canvas.drawImage(
  //     image,
  //     this.x,
  //     this.y,
  //     config.model.width,
  //     config.model.height
  //   );
  // }
  // 随机方向
  randomDirection() {
    const index = Math.floor(Math.random() * 4);
    this.direction = Object.values(directionEnum)[index] as directionEnum;
  }
}
