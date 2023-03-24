import { TDToolType } from "@tldraw/tldraw";

import { ToolSection } from "./ToolSection";
import { TopSection } from "./TopSection";

type Props = {
  activeTool: TDToolType;
  onSelectTool: (tool: TDToolType) => void;
};

export const Template: React.FC<Props> = (props) => {
  return (
    <>
      <TopSection title="💪🏻Wevox Product Team のふりかえり （2023/03/12）" />
      <ToolSection
        activeTool={props.activeTool}
        onSelectTool={props.onSelectTool}
      />
    </>
  );
};
