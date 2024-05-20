import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export const AccordionDetails = ({ tagName, styles = '', children, id, active, deactivate, variant = "1", ...rest }) => {
    let [customTag] = useState(tagName || "div");
    const CustomTag = customTag.toLowerCase();
    const [variantValue, setVariantValue] = useState({
        styles: '',
    });
    useEffect(() => {
        if (variant == "none") {
            setVariantValue({
                styles: "",
            });
        }
        if (variant == "1") {
            setVariantValue({
                styles: "bg-neutral-900 px-4 py-4 rounded-b-lg dark:bg-gray-900 border-x border-b !text-gray-200",
            });
        }
        if (variant == "2") {
            setVariantValue({
                styles: 'px-4 py-1 pb-3 !text-gray-200',
            });
        }
        if (variant == "3") {
            setVariantValue({
                styles: 'p-5  text-[#626262]',
            });
        }
        if (variant == "4") {
            setVariantValue({
                styles: 'p-5 !text-[#ffffff7d]',
            });
        }
        if (variant == "5") {
            setVariantValue({
                styles: 'px-4 py-1 pb-3 bg-zinc-800 !text-gray-200',
            });
        }
        if (variant == "6") {
            setVariantValue({
                styles: 'p-5 text-[#908e8e]',
            });
        }
    }, [variant]);
    console.log(variant);
    console.log(variantValue);
    console.log("styles: ", styles);
    console.log("variantValue.styles: ", variantValue.styles);
    console.log(` ${styles} ${variant ? variantValue.styles : ""} `);
    return (_jsx(CustomTag, { id: id, className: ` ${styles} ${variant ? variantValue.styles : ""} `, ...rest, children: children }));
};
