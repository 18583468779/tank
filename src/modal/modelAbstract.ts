import { PositionType } from "../canvas/canvas";
import config from "../config";
import { image } from "../service/image";
export default abstract class ModelAbstract {
  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected position: PositionType
  ) {
    canvas.drawImage(
      image.get("straw")!,
      position.x,
      position.y,
      config.model.width,
      config.model.height
    );
  }
}
