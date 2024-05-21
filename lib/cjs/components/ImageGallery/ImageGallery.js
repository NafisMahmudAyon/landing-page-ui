'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Image } from '../Image';
export const ImageGallery = ({ imageCaption, captionEnabled, lightBox, lightBoxCaptionEnabled, children, styles = "", imageStyles = "", captionStyles = "", lightBoxStyles = "", lightBoxImageStyles = "", lightBoxCaptionStyles = "", closeButtonStyles = "", lightBoxCaption, lightBoxImageSrc, tagName, ...rest }) => {
    let [customTag] = useState(tagName || "div");
    const CustomTag = customTag.toLowerCase();
    const galleryProps = {
        imageCaption: imageCaption,
        captionEnabled: captionEnabled,
        captionStyles: captionStyles,
        lightBox: lightBox,
        imageStyles: imageStyles,
        lightBoxStyles: lightBoxStyles,
        lightBoxImageStyles: lightBoxImageStyles,
        lightBoxImageSrc: lightBoxImageSrc,
        lightBoxCaption: lightBoxCaption,
        lightBoxCaptionEnabled: lightBoxCaptionEnabled,
        lightBoxCaptionStyles: lightBoxCaptionStyles,
        closeButtonStyles: closeButtonStyles
    };
    return (_jsx(CustomTag, { className: ` ${styles} `, ...rest, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === Image) {
                return React.cloneElement(child, galleryProps);
            }
        }) }));
};
