import { Template } from "./view";
import { useViewModel } from "./viewModel";

export const Whiteboard: React.FC = () => {
  const { states, handlers } = useViewModel();

  return (
    <Template
      activeTool={states.activeTool}
      onSelectTool={handlers.handleSelectTool}
    />
  );
};
