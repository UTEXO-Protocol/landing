"use client";

import { useId } from "react";
import { FieldError } from "react-hook-form";
import "./index.scss";

export type Option<T = string> = {
  label: string;
  value: T;
};

interface CommonSelectProps<T extends string = string> {
  title?: string;
  placeholder?: string;
  options: Option<T>[];
  field: {
    name: string;
    value: T;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  };
  error?: FieldError;
}

export const CommonSelect = <T extends string = string>({ title, placeholder = "Select an option...", options, field, error }: CommonSelectProps<T>) => {
  const generatedId = useId();
  const selectId = `select-${generatedId}`;
  const errorId = `${selectId}-error`;

  return (
    <div className="common-select">
      {title && <label htmlFor={selectId} className="common-select__label">{title}</label>}
      <div className={`common-select__input-wrap ${error ? "common-select__input-wrap--error" : ""}`}>
        <select {...field} id={selectId} className="common-select__field" aria-invalid={!!error} aria-describedby={error ? errorId : undefined}>
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map(opt => (
            <option key={String(opt.value)} value={String(opt.value)}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="common-select__select-chevron">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <div className="common-select__error-slot" aria-live="polite">{error && <span id={errorId} className="common-select__error" role="alert">{error.message}</span>}</div>
    </div>
  );
};
