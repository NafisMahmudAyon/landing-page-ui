import React from 'react';
interface ImageProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
    src?: string;
    altText?: string;
    imageCaption?: string;
    captionEnabled?: boolean;
    isLink?: boolean;
    linkTo?: string;
    target?: string;
    lightBox?: boolean;
    lightBoxImageSrc?: string;
    lightBoxCaptionEnabled?: boolean;
    lightBoxCaption?: string;
    imageStyles?: string;
    captionStyles?: string;
    lightBoxStyles?: string;
    lightBoxImageStyles?: string;
    lightBoxCaptionStyles?: string;
    closeButtonStyles?: string;
    tagName?: string;
    styles?: string;
    lazyLoad?: boolean;
}
export declare const Image: React.FC<ImageProps>;
export {};
