import React from 'react'
import { Label } from '../Label';
import { Icon } from '../Icon';

interface RadioProps {
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

export const Radio: React.FC<RadioProps> = ({ checked,
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
  ...rest }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && e.target.checked) {
      onChange(e);
    }
  };
  return (
    <>
      {icon && (
        <span className="relative">
          {label && labelPosition === "before" && (
            <Label htmlFor={id ? id : label ? label : ""} className={`${labelStyles}`}>
              {label}
            </Label>
          )}
          <input
            type="radio"
            id={id}
            name={name}
            title={title}
            disabled={disabled}
            required={required}
            value={value}
            checked={checked}
            onChange={handleChange}
            className={`${styles} absolute top-0 left-0 w-full h-full opacity-0`}
            {...rest}
          />
          {!checked && <Icon icon={icon} iconLibrary={iconLibrary} iconStyles={iconStyle} />}
          {checked && (
            <Icon icon={checkedIcon ? checkedIcon : icon} iconLibrary={checkedIconLibrary ? checkedIconLibrary : iconLibrary} iconStyles={checkedIconStyle} />
          )}
          {label && labelPosition === "after" && (
            <Label htmlFor={id ? id : label ? label : ""} className={`${labelStyles}`}>
              {label}
            </Label>
          )}
        </span>
      )}
      {!icon && (
        <>
          {label && (
            <Label htmlFor={id ? id : label ? label : ""} className={`${labelStyles}`}>
              {labelPosition === "before" && <>{label}</>}
              <input
                type="radio"
                id={id}
                name={name}
                title={title}
                disabled={disabled}
                required={required}
                value={value}
                checked={checked}
                onChange={handleChange}
                className={`${styles}`}
                {...rest}
              />
              {labelPosition === "after" && <>{label}</>}
            </Label>
          )}
        </>
      )}
      {!icon && !label && (
        <input
          type="radio"
          id={id}
          name={name}
          title={title}
          disabled={disabled}
          required={required}
          value={value}
          checked={checked}
          onChange={handleChange}
          className={`${styles}`}
          {...rest}
        />
      )}
    </>
  );
}

