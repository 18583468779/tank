import StrawCanvas from "./canvas/straw";
import WallCanvas from "./canvas/wall";
import SteelCanvas from "./canvas/steel";
import WaterCanvas from "./canvas/water";

import config from "./config";
import { promises } from "./service/image";
import "./style.css";
const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

async function bootstrap() {
  await Promise.all(promises);
  StrawCanvas.render();
  WallCanvas.render();
  SteelCanvas.render();
  WaterCanvas.render();
}
void bootstrap();
