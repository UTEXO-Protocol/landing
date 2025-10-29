"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterClient() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className:
          "font-jetbrains text-[12px] rounded-[10px] border border-neutral-800 bg-black text-white",
        duration: 3000,
        success: { iconTheme: { primary: "#10b981", secondary: "#000" } },
        error:   { iconTheme: { primary: "#ef4444", secondary: "#000" } },
      }}
    />
  );
}
