import React, { useState } from 'react';

import "../../../css/output.css"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  styles?: string;
  inputStyles?: string;
  onChange?: React.ChangeEventHandler | undefined;
  errorStyles?: string;
  id?: string;
  title?: string;
  disabledStyles?: string;
  requiredStyles?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value: propValue,
  placeholder,
  error = true,
  helperText = "Incorrect Value",
  disabled,
  required,
  autoComplete = "on",
  styles = "",
  inputStyles = "",
  onChange,
  errorStyles = "",
  id,
  title,
  disabledStyles = "",
  requiredStyles = "",
  ...rest
}) => {
  const [value, setValue] = useState(propValue || "");

  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const newValue = e.target.value;
  //   setValue(newValue);

  //   if (onChange) {
  //     onChange(newValue);
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onChange && typeof onChange === 'function') {
      onChange(e); // Pass the event object to the onChange handler
    }
  };

  return (
    <>
      <fieldset className={` ${styles} relative w-full `}>
        <textarea
          id={id}
          title={title}
          placeholder={placeholder}
          className={` ${inputStyles}  ${disabled ? disabledStyles : ""} ${required ? requiredStyles : ""
            } min-h-16 border border-gray-400 w-full rounded-lg px-3 py-2 h-11 placeholder:font-normal placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 
            focus-visible:shadow-md text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent  `}
          autoComplete={autoComplete}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          required={required}
          {...rest}
        />
      </fieldset>
      {!error && <p className={` ${errorStyles} text-red-500`}>{helperText}</p>}
    </>
  );
};