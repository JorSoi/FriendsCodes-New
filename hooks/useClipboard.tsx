import { useState } from "react";

export const useClipboard = () => {
  const [hasCopied, setHasCopied] = useState(false);

  async function writeText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
      // Reset the "Copied!" state after 2 seconds
      setTimeout(() => setHasCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setHasCopied(false);
    }
  }

  return [writeText, hasCopied] as const;
};
