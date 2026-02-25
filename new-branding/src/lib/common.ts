import toast from "react-hot-toast";

export const copyToClipboard = async (text: string) => {
  if (typeof window === "undefined") return false;

  await navigator.clipboard.writeText(text);
  toast.success("Copied to clipboard ✅");
};
