// lib/signupFlags.ts
export type SignupAction = "newsletter" | "dev" | "sales";

export interface FlagConfig {
  message: string;
  existingMessage: string;
}

export const flagsMap: Record<SignupAction, FlagConfig> = {
  dev: {
    message: "🛰 Thanks, we'll follow up with dev access details.",
    existingMessage: "🛰 You're already on the list for dev access. 🙌",
  },
  sales: {
    message: "💼 Thanks, our team will reach out shortly.",
    existingMessage: "💼 You're already on the list to talk to sales. 🙌",
  },
  newsletter: {
    message: "Thanks for signing up! 🎉",
    existingMessage: "You're already on the list. 🙌",
  },
};

export interface ExistingData {
  wants_dev_access: boolean;
  wants_sales_contact: boolean;
  is_newsletter: boolean;
}

export function calculateFlags(
  action: SignupAction,
  existing: ExistingData | null
) {
  const alreadyDev = existing?.wants_dev_access ?? false;
  const alreadySales = existing?.wants_sales_contact ?? false;
  const alreadyNewsletter = existing?.is_newsletter ?? false;

  const wants_dev_access = alreadyDev || action === "dev";
  const wants_sales_contact = alreadySales || action === "sales";
  const is_newsletter = alreadyNewsletter || action === "newsletter";

  const isNewRecord = !existing;

  const flagJustAddedForThisAction =
    action === "dev"
      ? !alreadyDev && wants_dev_access
      : action === "sales"
        ? !alreadySales && wants_sales_contact
        : !alreadyNewsletter && is_newsletter;

  const message = flagJustAddedForThisAction
    ? flagsMap[action].message
    : flagsMap[action].existingMessage;

  return {
    wants_dev_access,
    wants_sales_contact,
    is_newsletter,
    isNewRecord,
    flagJustAddedForThisAction,
    message,
  };
}