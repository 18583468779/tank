// 总配置文件
import straw from "./static/images/straw/straw.png";
import tankTop from "./static/images/tank/top.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";

import wall from "./static/images/wall/wall.gif";
import steel from "./static/images/wall/steels.gif";
import water from "./static/images/water/water.gif";

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
    num: 80,
  },
  wall: {
    num: 80,
  },
  steel: {
    num: 50,
  },
  water: {
    num: 50,
  },
  tank: {
    num: 20,
  },
  images: {
    // 图片的路径
    straw,
    tankTop,
    tankBottom,
    tankLeft,
    tankRight,
    wall,
    steel,
    water,
  },
};
