"use client";

import { useEffect, useState } from "react";

/**
 * DevTools Protection & Inspection Blocker:
 * 1. Blocks shortcut triggers: F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+Shift+K, Ctrl+U, Ctrl+S
 * 2. Blocks context menu inspection (right-click)
 * 3. Actively detects DevTools opened prior to navigation or via browser menus (timing + window metrics)
 * 4. Displays an impenetrable access-suspended screen until DevTools is closed
 */
export default function DevToolsBlocker() {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    // 1. Keyboard shortcut interception
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F12" || e.code === "F12") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      const isCtrlOrMeta = e.ctrlKey || e.metaKey;

      if (isCtrlOrMeta) {
        const key = e.key.toLowerCase();
        const code = e.code ? e.code.toLowerCase() : "";

        // Preserve standard clipboard operations (Copy, Paste, Cut, Select All, Refresh)
        if (!e.shiftKey && (key === "c" || key === "v" || key === "x" || key === "a" || key === "r")) {
          return;
        }

        // Block DevTools shortcuts
        if (
          e.shiftKey &&
          (key === "i" || key === "j" || key === "c" || key === "k" ||
           code === "keyi" || code === "keyj" || code === "keyc" || code === "keyk")
        ) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Block Source View (Ctrl+U) and Save Page (Ctrl+S)
        if (!e.shiftKey && (key === "u" || key === "s" || code === "keyu" || code === "keys")) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    // 2. Right-click context menu protection
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 3. Continuous DevTools active state detection
    const detectDevTools = () => {
      let detected = false;

      // 3.1 Window dimension threshold check (Docked inspection on desktop)
      const isDesktop = window.innerWidth >= 800;
      if (isDesktop) {
        const widthDelta = window.outerWidth - window.innerWidth;
        const heightDelta = window.outerHeight - window.innerHeight;
        if (widthDelta > 160 || heightDelta > 160) {
          detected = true;
        }
      }

      // 3.2 Debugger execution latency check (Catches undocked & pre-opened DevTools)
      const start = performance.now();
      try {
        (function () {}.constructor("debugger")());
      } catch {}
      const duration = performance.now() - start;

      if (duration > 100) {
        detected = true;
      }

      setIsDevToolsOpen(detected);
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("contextmenu", handleContextMenu, { capture: true });

    // Initial check on page mount
    detectDevTools();

    // Periodic detection loop (every 750ms)
    const intervalId = setInterval(detectDevTools, 750);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      clearInterval(intervalId);
    };
  }, []);

  // 4. Access Suspended Overlay when DevTools is active
  if (!isDevToolsOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999999] bg-[#0c0809] flex flex-col items-center justify-center p-6 text-center select-none"
      dir="rtl"
    >
      <div className="w-16 h-16 rounded-2xl bg-[#741922] border-2 border-[#b38a38]/80 flex items-center justify-center mb-5 shadow-2xl">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fde047" strokeWidth="2.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>

      <h1 className="text-xl sm:text-2xl font-black text-white mb-2">
        تم تعليق العرض • بيئة المطور نشطة
      </h1>

      <p className="text-xs sm:text-sm text-[#fce7eb]/85 max-w-md leading-relaxed mb-5">
        يرجى إغلاق أدوات المطور (Developer Tools / Inspect Element) لمتابعة تصفح الموقع والاطلاع على المحتوى.
      </p>

      <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-[11px] text-white/70 font-mono" dir="ltr">
        Developer Tools detected. Close inspector to continue.
      </div>
    </div>
  );
}
