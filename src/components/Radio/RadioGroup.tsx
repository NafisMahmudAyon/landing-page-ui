import React from 'react'
import { Radio } from './Radio';

interface RadioGroupProps {
  styles?: string;
  name?: string;
  children?: React.ReactNode
}

type RadioProps = {
  name?: string;
}


export const RadioGroup: React.FC<RadioGroupProps> = ({ styles = "", name = "", children }) => {
  const radioProps: RadioProps = {
    name: name,
  }
  return (
    <fieldset>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(child, radioProps);
        }
        return child
      })}
    </fieldset>
  )
}
