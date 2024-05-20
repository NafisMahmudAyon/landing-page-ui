import React, { ReactNode } from 'react';
interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
    imageCaption?: string;
    captionEnabled?: boolean;
    lightBox?: boolean;
    lightBoxCaptionEnabled?: boolean;
    children?: ReactNode;
    styles?: string;
    imageStyles?: string;
    captionStyles?: string;
    lightBoxStyles?: string;
    lightBoxImageStyles?: string;
    lightBoxCaptionStyles?: string;
    closeButtonStyles?: string;
    lightBoxCaption?: string;
    lightBoxImageSrc?: string;
    tagName?: string;
}
export declare const ImageGallery: React.FC<ImageGalleryProps>;
export {};
