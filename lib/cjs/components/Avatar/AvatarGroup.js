'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Avatar } from './Avatar';
export const AvatarGroup = ({ styles = "", children, variant, ...rest }) => {
    const [variantValue, setVariantValue] = useState({
        styles: "",
    });
    useEffect(() => {
        if (variant == 1) {
            setVariantValue({
                styles: " -space-x-2",
            });
        }
        else if (variant == 2 || variant == 3 || variant == 4 || variant == 5 || variant == 6) {
            setVariantValue({
                styles: "-space-x-2 ",
            });
        }
    }, [variant]);
    return (_jsx("div", { className: `${styles} ${variantValue.styles} flex items-center`, ...rest, children: !children ? (_jsxs(_Fragment, { children: [_jsx(Avatar, {}), _jsx(Avatar, {})] })) : (_jsx(_Fragment, { children: children })) }));
};
