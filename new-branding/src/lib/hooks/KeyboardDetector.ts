"use client";

import { useEffect } from "react";

export function KeyboardDetector() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.body.classList.add("using-keyboard");
      }
    };

    const handlePointerDown = () => {
      document.body.classList.remove("using-keyboard");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return null;
}
