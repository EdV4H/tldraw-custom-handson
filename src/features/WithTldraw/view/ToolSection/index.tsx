import { Stack } from "@mui/material";
import { TDToolType } from "@tldraw/tldraw";

import { WhiteboardTool } from "./WhiteboardTool";

type Props = {
  activeTool: TDToolType;
  onSelectTool: (tool: TDToolType) => void;
};

export const ToolSection: React.FC<Props> = ({ activeTool, onSelectTool }) => {
  return (
    <Stack
      justifyContent="center"
      ml={2}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
      }}
    >
      <WhiteboardTool activeTool={activeTool} onSelectTool={onSelectTool} />
    </Stack>
  );
};
