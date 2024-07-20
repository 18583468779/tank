// 总配置文件
import straw from "./static/images/straw/straw.png";
import tank from "./static/images/tank/bottom.gif";

export default {
  canvas: {
    // 画布的宽高
    width: 1600,
    height: 800,
  },
  model: {
    // 模型的宽高
    width: 35,
    height: 35,
  },
  straw: {
    num: 50,
  },
  images: {
    // 图片的路径
    straw,
    tank,
  },
};
