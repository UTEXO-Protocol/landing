"use client";

import { useEffect, useRef } from "react";

export const useReducedMotionVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mq.matches) videoRef.current?.pause();

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) videoRef.current?.pause();
      else videoRef.current?.play();
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return videoRef;
};
