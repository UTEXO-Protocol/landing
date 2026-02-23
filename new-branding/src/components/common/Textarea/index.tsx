"use client";

import { FieldError } from "react-hook-form";
import "./index.scss";

interface CommonTextareaProps {
  title?: string;
  placeholder?: string;
  field: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  };
  error?: FieldError;
  rows?: number;
}

export const CommonTextarea = ({ title, placeholder, field, error, rows = 5 }: CommonTextareaProps) => {
  return (
    <div className="common-textarea">
      {title && <label className="common-textarea__label">{title}</label>}
      <div className={`common-textarea__input-wrap ${error ? "common-textarea__input-wrap--error" : ""}`}>
        <textarea {...field} placeholder={placeholder} rows={rows} className="common-textarea__field" />
      </div>
      <div className="common-textarea__error-slot">{error && <span className="common-textarea__error">{error.message}</span>}</div>
    </div>
  );
};
