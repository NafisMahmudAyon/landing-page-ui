import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  styles?: string;
  htmlFor?: string;
  required?: boolean;
  children?: React.ReactNode;
  requiredContent?: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  children,
  styles = "",
  htmlFor = "",
  required,
  requiredContent,
  ...rest
}) => {
  return (
    <>
      <label
        className={` ${styles} block text-sm font-medium text-gray-500 `}
        htmlFor={htmlFor}
        {...rest}
      >
        {children}
        {required && <span className="text-red-500">{requiredContent ? requiredContent : "*"}</span>}
      </label>
    </>
  );
};
