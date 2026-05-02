import { useState } from "react";
import { isStarted, reset, start } from "../../../utilities/util";

export const useCounter = () => {
  const [hasRunning, setHasRunning] = useState<boolean>(isStarted());

  const handleStartOrReset = () => {
    if (!hasRunning) {
      start();
      setHasRunning(true);
      return;
    }
    reset();
  };

  return {
    hasRunning,
    handleStartOrReset,
  };
};
