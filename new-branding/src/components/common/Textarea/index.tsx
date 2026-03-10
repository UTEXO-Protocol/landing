"use client";

import { useId } from "react";
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
  className?: string;
}

export const CommonTextarea = ({ title, placeholder, field, error, rows = 5, className }: CommonTextareaProps) => {
  const generatedId = useId();
  const textareaId = `textarea-${generatedId}`;
  const errorId = `${textareaId}-error`;

  return (
    <div className={`common-textarea ${className ?? ""}`}>
      {title && <label htmlFor={textareaId} className="common-textarea__label">{title}</label>}
      <div className={`common-textarea__input-wrap ${error ? "common-textarea__input-wrap--error" : ""}`}>
        <textarea {...field} id={textareaId} placeholder={placeholder} rows={rows} className="common-textarea__field" aria-invalid={!!error} aria-describedby={error ? errorId : undefined} />
      </div>
      <div className="common-textarea__error-slot" aria-live="polite">{error && <span id={errorId} className="common-textarea__error" role="alert">{error.message}</span>}</div>
    </div>
  );
};
