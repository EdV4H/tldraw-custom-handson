import { Renderer, TLBinding, TLPage, TLPageState } from "@tldraw/core";

import { Shape, shapeUtils } from "./shapes";

type Props = {
  children: React.ReactNode;
};

const initialPage: TLPage<Shape, TLBinding> = {
  id: "init-page",
  shapes: {},
  bindings: {},
};

const initalPageState: TLPageState = {
  id: "page1",
  selectedIds: [],
  camera: {
    point: [0, 0],
    zoom: 1,
  },
  brush: null,
  pointedId: null,
  hoveredId: null,
  editingId: null,
  bindingId: null,
};
export const WhiteboardProvider: React.FC<Props> = ({ children }) => {
  return (
    <div className="tldraw">
      <Renderer
        shapeUtils={shapeUtils}
        page={initialPage}
        pageState={initalPageState}
      />
      {children}
    </div>
  );
};
