"use client";

import { useForm, Controller, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CommonInput } from "@/components/common/Input";
import { CommonTextarea } from "@/components/common/Textarea";
import { CommonSelect } from "@/components/common/Select";
import { Button } from "@/components/common/CommonButton";
import toast from "react-hot-toast";
import "./index.scss";

const companyTypeOptions = [
  { label: "Payment Service Provider", value: "psp" },
  { label: "Exchange", value: "exchange" },
  { label: "Wallet Provider", value: "wallet" },
  { label: "Digital Bank / Neobank", value: "neobank" },
  { label: "High-Frequency Trading Firm", value: "hft" },
  { label: "iGaming / Gambling Platform", value: "igaming" },
  { label: "Remittance Provider", value: "remittance" },
  { label: "E-commerce Platform", value: "ecommerce" },
  { label: "Other", value: "other" },
];

const useCaseOptions = [
  { label: "Stablecoin Payments (USDT)", value: "stablecoin" },
  { label: "Lightning Network Integration", value: "lightning" },
  { label: "Cross-border Payments / Remittances", value: "crossborder" },
  { label: "Settlement & Treasury", value: "settlement" },
  { label: "Player Deposits & Withdrawals", value: "igaming" },
  { label: "On/Off-Ramp Infrastructure", value: "onofframp" },
  { label: "Technical Partnership / Integration", value: "partnership" },
  { label: "Other", value: "other" },
];

const volumeOptions = [
  { label: "< $100K", value: "lt100k" },
  { label: "$100K – $1M", value: "100k_1m" },
  { label: "$1M – $10M", value: "1m_10m" },
  { label: "$10M – $100M", value: "10m_100m" },
  { label: "$100M+", value: "gt100m" },
  { label: "Prefer not to say", value: "undisclosed" },
];

const regionOptions = [
  { label: "Latin America", value: "latam" },
  { label: "Africa", value: "africa" },
  { label: "Southeast Asia", value: "sea" },
  { label: "Europe", value: "europe" },
  { label: "Middle East", value: "mena" },
  { label: "North America", value: "na" },
  { label: "Global / Multi-region", value: "global" },
];

const hearAboutOptions = [
  { label: "Referral", value: "referral" },
  { label: "Twitter / X", value: "twitter" },
  { label: "Conference / Event", value: "conference" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "Search", value: "search" },
  { label: "Other", value: "other" },
];

const validationSchema = z.object({
  fullName: z.string().default(""),
  email: z.string().min(1, "Work email is required").email("Invalid email address"),
  companyName: z.string().min(1, "Company name is required"),
  jobTitle: z.string().default(""),
  companyType: z.string().min(1, "Please select a company type"),
  useCase: z.string().min(1, "Please select a use case"),
  volume: z.string().default(""),
  region: z.string().default(""),
  message: z.string().default(""),
  hearAbout: z.string().default(""),
});

type ContactFormValues = z.infer<typeof validationSchema>;

export const ContactForm = () => {
  const { control, handleSubmit, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(validationSchema) as Resolver<ContactFormValues>,
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      jobTitle: "",
      companyType: "",
      useCase: "",
      volume: "",
      region: "",
      message: "",
      hearAbout: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const toastId = toast.loading("Submitting…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }

      toast.success(data?.message ?? "Thanks for contacting us! 🎉", { id: toastId });
      reset();
    } catch {
      toast.error("Please try again.", { id: toastId });
    }
  };

  return (
    <div className="contact-form">
      <form className="contact-form__form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="contact-form__form__wrapper">
          <Controller name="fullName" control={control} render={({ field, fieldState }) => <CommonInput title="Full Name" placeholder="Your name" field={field} error={fieldState.error} />} />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => <CommonInput title="Work Email *" placeholder="name@company.com" type="email" field={field} error={fieldState.error} />}
          />

          <Controller
            name="companyName"
            control={control}
            render={({ field, fieldState }) => <CommonInput title="Company Name *" placeholder="Your company" field={field} error={fieldState.error} />}
          />

          <Controller name="jobTitle" control={control} render={({ field, fieldState }) => <CommonInput title="Job Title" placeholder="Your role" field={field} error={fieldState.error} />} />

          <Controller
            name="companyType"
            control={control}
            render={({ field, fieldState }) => <CommonSelect title="Company Type *" placeholder="Select an option..." options={companyTypeOptions} field={field} error={fieldState.error} />}
          />

          <Controller
            name="useCase"
            control={control}
            render={({ field, fieldState }) => <CommonSelect title="Use Case *" placeholder="Select an option..." options={useCaseOptions} field={field} error={fieldState.error} />}
          />

          <Controller
            name="volume"
            control={control}
            render={({ field, fieldState }) => <CommonSelect title="Monthly Transaction Volume" placeholder="Select an option..." options={volumeOptions} field={field} error={fieldState.error} />}
          />

          <Controller
            name="region"
            control={control}
            render={({ field, fieldState }) => <CommonSelect title="Region" placeholder="Select an option..." options={regionOptions} field={field} error={fieldState.error} />}
          />

          <Controller
            name="hearAbout"
            control={control}
            render={({ field, fieldState }) => <CommonSelect title="How did you hear about us?" placeholder="Select an option..." options={hearAboutOptions} field={field} error={fieldState.error} />}
          />
        </div>
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => (
            <CommonTextarea title="Message" placeholder="Tell us about your project" field={field} error={fieldState.error} rows={5} className="contact-form__textarea" />
          )}
        />
        <Button variant="white" className="contact-form__button">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};
