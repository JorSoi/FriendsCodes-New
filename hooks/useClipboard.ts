import { useState } from "react";

export const useClipboard = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const  writeText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
      // Reset the "Copied!" state after 1.1 seconds (which is in line with the confetti animation duration)
      setTimeout(() => setHasCopied(false), 1100);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setHasCopied(false);
    }
  }

  return [writeText, hasCopied] as const;
};
