import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Label } from '../Label';
import { Icon } from '../Icon';
export const Radio = ({ checked, name, onChange, disabled, required, styles = "", checkboxStyles = "", disabledStyles = "", requiredStyles = "", id, title, value, icon, iconLibrary, iconStyle, checkedIcon, checkedIconStyle, checkedIconLibrary, label, labelPosition = "before", labelStyles = "", ...rest }) => {
    const handleChange = (e) => {
        if (onChange && e.target.checked) {
            onChange(e);
        }
    };
    return (_jsxs(_Fragment, { children: [icon && (_jsxs("span", { className: "relative", children: [label && labelPosition === "before" && (_jsx(Label, { htmlFor: id ? id : label ? label : "", className: `${labelStyles}`, children: label })), _jsx("input", { type: "radio", id: id, name: name, title: title, disabled: disabled, required: required, value: value, checked: checked, onChange: handleChange, className: `${styles} absolute top-0 left-0 w-full h-full opacity-0`, ...rest }), !checked && _jsx(Icon, { icon: icon, iconLibrary: iconLibrary, iconStyles: iconStyle }), checked && (_jsx(Icon, { icon: checkedIcon ? checkedIcon : icon, iconLibrary: checkedIconLibrary ? checkedIconLibrary : iconLibrary, iconStyles: checkedIconStyle })), label && labelPosition === "after" && (_jsx(Label, { htmlFor: id ? id : label ? label : "", className: `${labelStyles}`, children: label }))] })), !icon && (_jsx(_Fragment, { children: label && (_jsxs(Label, { htmlFor: id ? id : label ? label : "", className: `${labelStyles}`, children: [labelPosition === "before" && _jsx(_Fragment, { children: label }), _jsx("input", { type: "radio", id: id, name: name, title: title, disabled: disabled, required: required, value: value, checked: checked, onChange: handleChange, className: `${styles}`, ...rest }), labelPosition === "after" && _jsx(_Fragment, { children: label })] })) })), !icon && !label && (_jsx("input", { type: "radio", id: id, name: name, title: title, disabled: disabled, required: required, value: value, checked: checked, onChange: handleChange, className: `${styles}`, ...rest }))] }));
};
