import { WhiteboardProvider } from "./providers";
import { Whiteboard } from "./Whiteboard";

export const Page: React.FC = () => {
  return (
    <WhiteboardProvider>
      <Whiteboard />
    </WhiteboardProvider>
  );
};
