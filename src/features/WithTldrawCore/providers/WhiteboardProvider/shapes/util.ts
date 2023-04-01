import { TLShapeUtil } from "@tldraw/core";

import { BoxShape, BoxUtil } from "./Box";

export type Shape = BoxShape;

export const shapeUtils = {
  box: new BoxUtil(),
};

export const getShapeUtils = <T extends Shape>(shape: T | T["type"]) => {
  if (typeof shape === "string")
    return shapeUtils[shape] as unknown as TLShapeUtil<T>;
  return shapeUtils[shape.type] as unknown as TLShapeUtil<T>;
};
