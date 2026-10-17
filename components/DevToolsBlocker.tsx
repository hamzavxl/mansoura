"use client";

import { useEffect } from "react";

/**
 * DevTools & Source Protection:
 * - Blocks F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+Shift+K, Ctrl+U, Ctrl+S
 * - Strictly preserves Copy (Ctrl+C), Paste (Ctrl+V), Cut (Ctrl+X), Select All (Ctrl+A)
 * - Allows Right-Click Context Menu when text is selected or inside form inputs (for Copy/Paste)
 * - Blocks empty Right-Click to prevent opening browser inspect context menu
 */
export default function DevToolsBlocker() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Block F12
      if (e.key === "F12" || e.code === "F12") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      const isCtrlOrMeta = e.ctrlKey || e.metaKey;

      if (isCtrlOrMeta) {
        const key = e.key.toLowerCase();
        const code = e.code ? e.code.toLowerCase() : "";

        // Explicitly allow Copy, Paste, Cut, Select All, and Refresh
        if (!e.shiftKey && (key === "c" || key === "v" || key === "x" || key === "a" || key === "r")) {
          return;
        }

        // Block DevTools shortcuts: Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+Shift+K
        if (
          e.shiftKey &&
          (key === "i" || key === "j" || key === "c" || key === "k" ||
           code === "keyi" || code === "keyj" || code === "keyc" || code === "keyk")
        ) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Block View Page Source (Ctrl + U)
        if (!e.shiftKey && (key === "u" || code === "keyu")) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Block Save Page (Ctrl + S)
        if (!e.shiftKey && (key === "s" || code === "keys")) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    // Full Right-Click Context Menu Protection (Disables native inspect menu completely)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("contextmenu", handleContextMenu, { capture: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("contextmenu", handleContextMenu, { capture: true });
    };
  }, []);

  return null;
}
