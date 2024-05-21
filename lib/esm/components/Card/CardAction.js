'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export const CardAction = ({ children, styles = "", link = "#", target = "_self", variant = "1", ...rest }) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.open(link, target);
    };
    const [variantValue, setVariantValue] = useState({
        styles: ""
    });
    useEffect(() => {
        if (variant == "1") {
            setVariantValue({
                styles: "block bg-transparent outline-0 border-0 m-0 p-0 cursor-pointer select-none w-full text-inherit hover:opacity-85 transition-all duration-300"
            });
        }
        else if (variant == "2") {
            setVariantValue({
                styles: "w-[60px] h-[60px] border-2 rounded-full border-red-500 text-red-500 bg-white flex items-center justify-center ",
            });
        }
        else if (variant == "3") {
            setVariantValue({
                styles: "bg-green-600 w-14 h-14 text-[1.25rem] leading-none border border-white rounded-lg flex items-center justify-center ",
            });
        }
        else if (variant == "4") {
            setVariantValue({
                styles: "w-[60px] h-[60px] border-2 rounded-full border-cyan-500 text-cyan-500 bg-white flex items-center justify-center outline-2 outline-offset-4 outline-cyan-500 outline ",
            });
        }
        else if (variant == "5") {
            setVariantValue({
                styles: "relative inline-flex align-middle text-red-500 ",
            });
        }
        else if (variant == "6") {
            setVariantValue({
                styles: "relative inline-flex align-middle  ",
            });
        }
    }, [variant]);
    return (_jsx("button", { className: ` ${styles} ${variant ? variantValue.styles : ""}`, onClick: handleClick, ...rest, children: children }));
};
