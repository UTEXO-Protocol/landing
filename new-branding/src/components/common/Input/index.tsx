"use client";

import { useId } from "react";
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
  const generatedId = useId();
  const inputId = `input-${generatedId}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="common-input">
      {title && <label htmlFor={inputId} className="common-input__label">{title}</label>}
      <div className={`common-input__input-wrap ${error ? "common-input__input-wrap--error" : ""}`}>
        <input {...field} id={inputId} type={type} placeholder={placeholder} className="common-input__field" aria-invalid={!!error} aria-describedby={error ? errorId : undefined} />
      </div>
      <div className="common-input__error-slot" aria-live="polite">{error && <span id={errorId} className="common-input__error" role="alert">{error.message}</span>}</div>
    </div>
  );
};
