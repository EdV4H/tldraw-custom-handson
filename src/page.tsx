import { Whiteboard } from "./features/WithTldraw";
import { WhiteboardProvider } from "./features/WithTldraw/providers";

export const WithTldraw: React.FC = () => {
  return (
    <WhiteboardProvider>
      <Whiteboard />
    </WhiteboardProvider>
  );
};
