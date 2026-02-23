"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CommonInput } from "@/components/common/Input";
import { CommonTextarea } from "@/components/common/Textarea";
import { CommonSelect } from "@/components/common/Select";
import { Button } from "@/components/common/CommonButton";
import "./index.scss";

const projectTypeOptions = [
  { label: "Web Development", value: "web" },
  { label: "Mobile App", value: "mobile" },
  { label: "Design", value: "design" },
  { label: "Consulting", value: "consulting" },
  { label: "Other", value: "other" },
];

const validationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof validationSchema>;

export const ContactForm = () => {
  const { control, handleSubmit } = useForm<ContactFormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="contact-form">
      <form className="contact-form__form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller name="fullName" control={control} render={({ field, fieldState }) => <CommonInput title="Full name" placeholder="Your name" field={field} error={fieldState.error} />} />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => <CommonInput title="Email" placeholder="Introduce your e-mail" type="email" field={field} error={fieldState.error} />}
        />
        <Controller
          name="projectType"
          control={control}
          render={({ field, fieldState }) => <CommonSelect title="Type of project *" placeholder="Select an option..." options={projectTypeOptions} field={field} error={fieldState.error} />}
        />
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => <CommonTextarea title="Message" placeholder="What would you like help with?" field={field} error={fieldState.error} rows={5} />}
        />
        <Button variant="white" size="full">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};
