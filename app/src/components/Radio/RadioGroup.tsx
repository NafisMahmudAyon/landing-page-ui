'use client'

import React, { useEffect, useState } from 'react'
import { Radio } from './Radio';

interface RadioGroupProps {
  styles?: string;
  name?: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

type RadioProps = {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value?: string;
};


export const RadioGroup: React.FC<RadioGroupProps> = ({ styles = "", name = "", children, onChange, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    // Find the initially checked radio button if any
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === Radio && child.props.checked) {
        setSelectedValue(child.props.value);
      }
    });
  }, [children]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    if (typeof onChange === 'function') {
      onChange(value);
    }
  };
  return (
    <fieldset className={`${styles}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio) {
          const radioProps: RadioProps = {
            name: name,
            onChange: handleChange,
            ...(selectedValue === child.props.value ? { checked: true } : { checked: false }),
          };
          return React.cloneElement(child, radioProps);
        }
        return child;
      })}
    </fieldset>
  )
}
