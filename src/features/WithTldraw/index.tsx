import { Whiteboard } from "../../Whiteboard";

import { WhiteboardProvider } from "./providers";

export const WithTldraw: React.FC = () => {
  return (
    <WhiteboardProvider>
      <Whiteboard />
    </WhiteboardProvider>
  );
};
