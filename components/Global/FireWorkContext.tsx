"use client";

import { createContext, useState } from "react";
import Pride from "react-canvas-confetti/dist/presets/pride";

export const FireWorkContext = createContext<(() => void) | null>(null);

//This wrapper comp has a sole purpose to provide any component within the application the possibility to trigger a firework.
function FireWorkLogic({ children }: { children: React.ReactNode }) {
  const [isFiring, setIsFiring] = useState(false);

  const triggerFireWork = () => {
    setIsFiring(true);
    setTimeout(() => setIsFiring(false), 5000);
  };

  return (
    <FireWorkContext.Provider value={triggerFireWork}>
      {children}
      {isFiring && (
        <Pride
          autorun={{ speed: 40, duration: 2000, delay: 500 }}
          decorateOptions={(options) => {
            options.colors = ["#FF00B2", "#D900FF", "#ffffff"];
            options.disableForReducedMotion = true;
            return options;
          }}
        />
      )}
    </FireWorkContext.Provider>
  );
}

export default FireWorkLogic;
