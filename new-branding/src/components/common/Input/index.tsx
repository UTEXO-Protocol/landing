"use client";

import { FieldError } from "react-hook-form";
import "./index.scss";

interface CommonInputProps {
  title?: string;
  placeholder?: string;
  type?: string;
  field: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  error?: FieldError;
}

export const CommonInput = ({ title, placeholder, type = "text", field, error }: CommonInputProps) => {
  return (
    <div className="common-input">
      {title && <label className="common-input__label">{title}</label>}
      <div className={`common-input__input-wrap ${error ? "common-input__input-wrap--error" : ""}`}>
        <input {...field} type={type} placeholder={placeholder} className="common-input__field" />
      </div>
      <div className="common-input__error-slot">{error && <span className="common-input__error">{error.message}</span>}</div>
    </div>
  );
};
