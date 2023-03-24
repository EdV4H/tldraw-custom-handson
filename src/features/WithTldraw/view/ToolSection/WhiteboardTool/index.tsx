import {
  NearMeOutlined,
  PanToolOutlined,
  RectangleOutlined,
  CallMade,
  SentimentVerySatisfied,
  Undo,
  Redo,
  StickyNote2Outlined,
} from "@mui/icons-material";
import { Paper, Stack, IconButton, Divider } from "@mui/material";
import { TDToolType, TDShapeType } from "@tldraw/tldraw";

type Props = {
  activeTool: TDToolType;
  onSelectTool: (tool: TDToolType) => void;
};

export const WhiteboardTool: React.FC<Props> = ({
  activeTool,
  onSelectTool,
}) => {
  return (
    <Paper elevation={3} sx={{ zIndex: 2, padding: 1, borderRadius: 4 }}>
      <Stack spacing={1}>
        <IconButton size="small" onClick={() => onSelectTool("select")}>
          <NearMeOutlined
            color={activeTool === "select" ? "primary" : "action"}
          />
        </IconButton>
        <IconButton size="small">
          <PanToolOutlined color="action" />
        </IconButton>
        <Divider />
        <IconButton
          size="small"
          onClick={() => onSelectTool(TDShapeType.Rectangle)}
        >
          <RectangleOutlined
            color={activeTool === TDShapeType.Rectangle ? "primary" : "action"}
          />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => onSelectTool(TDShapeType.Arrow)}
        >
          <CallMade
            color={activeTool === TDShapeType.Arrow ? "primary" : "action"}
          />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => onSelectTool(TDShapeType.Sticky)}
        >
          <StickyNote2Outlined
            color={activeTool === TDShapeType.Sticky ? "primary" : "action"}
          />
        </IconButton>
        <IconButton size="small">
          <SentimentVerySatisfied color="action" />
        </IconButton>
        <Divider />
        <IconButton size="small">
          <Undo color="action" />
        </IconButton>
        <IconButton size="small">
          <Redo color="action" />
        </IconButton>
      </Stack>
    </Paper>
  );
};
