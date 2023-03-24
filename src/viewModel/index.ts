import { TDToolType } from "@tldraw/tldraw";

import { useWhiteboard } from "@/hooks";

export const useViewModel = () => {
  const whiteboard = useWhiteboard();

  const activeTool = whiteboard.useStore((state) => state.appState.activeTool);

  return {
    states: {
      activeTool,
    },
    handlers: {
      handleSelectTool: (tool: TDToolType) => whiteboard.selectTool(tool),
    },
  };
};
