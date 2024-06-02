'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import { Radio } from './Radio';
export const RadioGroup = ({ styles = "", name = "", children, onChange, defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    useEffect(() => {
        // Find the initially checked radio button if any
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child) && child.type === Radio && child.props.checked) {
                setSelectedValue(child.props.value);
            }
        });
    }, [children]);
    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        if (typeof onChange === 'function') {
            onChange(value);
        }
    };
    return (_jsx("fieldset", { className: `${styles}`, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === Radio) {
                const radioProps = {
                    name: name,
                    onChange: handleChange,
                    ...(selectedValue === child.props.value ? { checked: true } : { checked: false }),
                };
                return React.cloneElement(child, radioProps);
            }
            return child;
        }) }));
};
