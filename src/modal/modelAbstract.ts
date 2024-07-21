import config from "../config";
export default abstract class ModelAbstract {
  abstract render(): void; // 子类必须实现render方法
  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected x: number,
    protected y: number
  ) {}

  protected draw(image: HTMLImageElement) {
    this.canvas.drawImage(
      image,
      this.x,
      this.y,
      config.model.width,
      config.model.height
    );
  }
}
