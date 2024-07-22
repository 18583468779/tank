/// <reference types="vite/client" />

// 对构造函数的类型声明
interface ModelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): IModel;
}

interface IModel {
  render(): void;
  // num(): number;
  // model(): ModelConstructor;
}
