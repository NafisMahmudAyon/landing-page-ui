'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
export const Icon = ({ icon, iconStyles = '', iconLibrary = 'material-icons', isLink, linkTo = '', target = '_self', title, onClick, ...rest }) => {
    useEffect(() => {
        const getStylesheetUrl = (library) => {
            switch (library) {
                case 'material-icons':
                    return 'https://fonts.googleapis.com/icon?family=Material+Icons';
                case 'material-icons-outlined':
                    return 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined';
                case 'material-icons-round':
                    return 'https://fonts.googleapis.com/icon?family=Material+Icons+Round';
                case 'material-icons-sharp':
                    return 'https://fonts.googleapis.com/icon?family=Material+Icons+Sharp';
                case 'material-icons-two-tone':
                    return 'https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone';
                case 'bootstrap-icons':
                    return 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
                case 'font-awesome':
                    return 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
                case 'ico-font':
                    return 'https://nafismahmudayon.github.io/icofont/icofont.min.css';
                default:
                    return '';
            }
        };
        const link = document.createElement('link');
        link.href = getStylesheetUrl(iconLibrary);
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, [iconLibrary]);
    const iconHtml = iconLibrary === 'font-awesome' ? `<i class="fa-solid ${icon}"></i>` : `<i class="${icon}"></i>`;
    return (_jsxs(_Fragment, { children: [(isLink || linkTo) && (_jsx("a", { href: linkTo || '#', target: target, className: ` ${iconStyles} `, onClick: onClick, ...rest, dangerouslySetInnerHTML: { __html: iconHtml } })), (!isLink || !linkTo) && (_jsx("span", { className: ` ${iconStyles} `, onClick: onClick, ...rest, dangerouslySetInnerHTML: { __html: iconHtml } }))] }));
};
