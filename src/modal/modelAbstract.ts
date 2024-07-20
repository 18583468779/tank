import config from "../config";
import { image } from "../service/image";
export default abstract class ModelAbstract {
  abstract render(): void; // 子类必须实现render方法
  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected x: number,
    protected y: number
  ) {}

  protected draw() {
    this.canvas.drawImage(
      image.get("straw")!,
      this.x,
      this.y,
      config.model.width,
      config.model.height
    );
  }
}
