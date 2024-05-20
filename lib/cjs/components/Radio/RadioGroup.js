import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Radio } from './Radio';
export const RadioGroup = ({ styles = "", name = "", children }) => {
    const radioProps = {
        name: name,
    };
    return (_jsx("fieldset", { className: `${styles}`, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === Radio) {
                return React.cloneElement(child, radioProps);
            }
            return child;
        }) }));
};
