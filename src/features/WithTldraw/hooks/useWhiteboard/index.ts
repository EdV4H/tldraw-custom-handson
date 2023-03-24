import { useContext } from "react";

import { WhiteboardContext } from "../../providers";

/** sugar syntax for useContext(WhiteboardContext) */
export const useWhiteboard = () => useContext(WhiteboardContext);
