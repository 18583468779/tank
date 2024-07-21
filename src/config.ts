// 总配置文件
import straw from "./static/images/straw/straw.png";
import tank from "./static/images/tank/bottom.gif";
import wall from "./static/images/wall/wall.gif";
import steel from "./static/images/wall/steels.gif";

export default {
  canvas: {
    // 画布的宽高
    width: 1600,
    height: 800,
  },
  model: {
    // 模型的宽高
    width: 40,
    height: 40,
  },
  straw: {
    num: 50,
  },
  wall: {
    num: 50,
  },
  steel: {
    num: 50,
  },
  images: {
    // 图片的路径
    straw,
    tank,
    wall,
    steel,
  },
};
