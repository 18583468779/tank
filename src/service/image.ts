import config from "../config";

// 图片服务
type mapKey = keyof typeof config.images;
export const image = new Map<mapKey, HTMLImageElement>();
// ****keyof 假设现在有一个类型 T，keyof T 将会给你一个新类型，
// ****typeof 后面连接值

export const promises = Object.entries(config.images).map(([key, value]) => {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = value;
    img.onload = () => {
      image.set(key as mapKey, img);
      resolve(img);
    };
  });
});
