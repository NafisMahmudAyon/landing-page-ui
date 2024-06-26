'use client'

import React, { useState } from "react";
import { Icon } from "../Icon";
import { Label } from "../Label";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  name?: string;
  onChange?: (checked: boolean | React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  styles?: string;
  checkboxStyles?: string;
  disabledStyles?: string;
  requiredStyles?: string;
  value?: string;
  id?: string;
  title?: string;
  icon?: string;
  iconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
  iconStyle?: string;
  checkedIcon?: string;
  checkedIconStyle?: string;
  checkedIconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
  label?: string;
  labelPosition?: "before" | "after" | "inside";
  labelStyles?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  name,
  onChange,
  disabled,
  required,
  styles = "",
  checkboxStyles = "",
  disabledStyles = "",
  requiredStyles = "",
  id,
  title,
  value,
  icon,
  iconLibrary,
  iconStyle,
  checkedIcon,
  checkedIconStyle,
  checkedIconLibrary,
  label,
  labelPosition = "before",
  labelStyles = "",
  ...rest
}) => {
  const [checkedOn, setCheckedOn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedValue = e.target.checked;
    setCheckedOn(newCheckedValue);

    if (onChange) {
      onChange(newCheckedValue);
    }
  };
  return (
    <>
      {icon && <>
        <span className="relative">
          {label && labelPosition === "before" && <Label htmlFor={id ? id : label ? label : ""} className={`${labelStyles}`}>{label}</Label>}

          <input
            type="checkbox"
            id={id}
            name={name}
            title={title}
            disabled={disabled}
            required={required}
            value={value}
            onChange={handleChange}
            className={`${styles} absolute top-0 left-0 w-full h-full opacity-0`}
            {...rest} />
          {!checkedOn &&
            <Icon icon={icon} iconLibrary={iconLibrary} iconStyles={iconStyle} />}
          {checkedOn &&
            <Icon icon={checkedIcon ? checkedIcon : icon} iconLibrary={checkedIconLibrary ? checkedIconLibrary : iconLibrary} iconStyles={checkedIconStyle} />}
          {label && labelPosition === "after" && <Label htmlFor={id ? id : label ? label : ""} className={`${labelStyles}`}>{label}</Label>}
        </span>
      </>}
      {!icon && <>
        {/* {label && labelPosition === "before" && <Label htmlFor={label} className={`${labelStyles}`}>{label}</Label>} */}
        {label && <Label htmlFor={id ? id : label ? label : ""} className={`${labelStyles}`}>
          {labelPosition === "before" && <>{label}</>}


          <input
            type="checkbox"
            id={id}
            name={name}
            title={title}
            disabled={disabled}
            required={required}
            value={value}
            onChange={handleChange}
            className={`${styles}`}
            {...rest} />
          {labelPosition === "after" && <>{label}</>}




        </Label>}
        {/* {label && labelPosition === "after" && <Label htmlFor={label} className={`${labelStyles}`}>{label}</Label>} */}
      </>}
      {!icon && !label && <><input
        type="checkbox"
        id={id}
        name={name}
        title={title}
        disabled={disabled}
        required={required}
        value={value}
        onChange={handleChange}
        className={`${styles}`}
        {...rest} /></>}
    </>
  );
}