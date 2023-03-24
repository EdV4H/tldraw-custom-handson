import { Box } from "@mui/material";
import { Tldraw, TldrawApp } from "@tldraw/tldraw";
import React, { useCallback, useState } from "react";

import "./styles.css";

export const WhiteboardContext = React.createContext<TldrawApp>(
  {} as TldrawApp
);

export const WhiteboardProvider: React.FC = ({ children }) => {
  const [app, setApp] = useState<TldrawApp>();

  const handleMount = useCallback((app: TldrawApp) => {
    if (!app) return;
    setApp(app);
  }, []);

  return (
    <div className="tldraw">
      {/** @note Strict Mode での２回目のMountで動いてない感じがするので onChange時にもmount処理を挟んでいる  */}
      <Tldraw onMount={handleMount} onChange={handleMount} showUI={false} />
      {app && (
        <WhiteboardContext.Provider value={app}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
          >
            {children}
          </Box>
        </WhiteboardContext.Provider>
      )}
    </div>
  );
};
