"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterClient() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className:
          "font-sans text-[16px] rounded-[10px] border border-[#BFBFBF]/44 !bg-[#020101]/60 !text-white/95 text-shadow-sm backdrop-blur-md !px-5 !py-3",
        duration: 3000,
        success: { iconTheme: { primary: "#10b981", secondary: "#000" } },
        error:   { iconTheme: { primary: "#ef4444", secondary: "#000" } },
      }}
    />
  );
}
