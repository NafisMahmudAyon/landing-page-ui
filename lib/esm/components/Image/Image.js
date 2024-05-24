'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
export const Image = ({ src = "https://source.unsplash.com/random/600x600?nature=1", alt = "Description of the image", imageCaption, captionEnabled, isLink, linkTo, target = "_self", lightBox, lightBoxImageSrc, lightBoxCaptionEnabled, lightBoxCaption, imageStyles = "", captionStyles = "", lightBoxStyles = "", lightBoxImageStyles = "", lightBoxCaptionStyles = "", closeButtonStyles = "", tagName, styles = "", lazyLoad, ...rest }) => {
    let [customTag, setCustomTag] = useState(tagName || "div");
    const CustomTag = customTag.toLowerCase();
    const [isOpen, setIsOpen] = useState(false);
    // const [lightboxSrc, setLightboxSrc] = useState("");
    useEffect(() => {
        if (isLink) {
            setCustomTag("a");
        }
        else {
            setCustomTag(tagName || "div");
        }
    }, [isLink, tagName]);
    const openLightbox = () => {
        // setLightboxSrc(src || "");
        setIsOpen(true);
    };
    const closeLightbox = () => {
        setIsOpen(false);
    };
    return (_jsxs(CustomTag, { className: ` ${styles} relative `, ...(isLink && {
            href: linkTo,
            target: target,
        }), children: [_jsxs("figure", { className: "flex flex-col items-center", children: [_jsx("img", { className: ` ${imageStyles} max-w-full h-auto `, src: src ||
                            "https://source.unsplash.com/random/800x600?nature", alt: alt || imageCaption, onClick: linkTo ? undefined : lightBox ? openLightbox : undefined, ...rest }), captionEnabled && (_jsx("figcaption", { className: ` ${captionStyles} text-gray-600 text-sm mt-2 `, children: imageCaption || alt || "This is the caption for the image." }))] }), isOpen && (_jsx("div", { className: ` ${lightBoxStyles} fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 flex justify-center items-center z-[9999] overflow-auto `, children: _jsxs("div", { className: "relative p-3 flex flex-col items-center", children: [_jsx("button", { className: ` ${closeButtonStyles} absolute top-0 right-5 h-8 w-8 flex items-center justify-center bg-red-500 rounded-full text-black hover:bg-gray-200 text-base `, onClick: closeLightbox, children: "\u00D7" }), _jsx("img", { src: lightBoxImageSrc ||
                                src ||
                                "https://source.unsplash.com/random/800x600?nature", alt: alt || "lightbox", className: ` ${lightBoxImageStyles} max-w-[95%] w-full rounded-md` }), lightBoxCaptionEnabled && (_jsx("figcaption", { className: ` ${lightBoxCaptionStyles} text-gray-400 text-sm mt-2 text-center `, children: lightBoxCaption ||
                                imageCaption ||
                                alt ||
                                "This is the caption for the image." }))] }) }))] }));
};
