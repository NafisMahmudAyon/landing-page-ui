import React, { ReactNode, useState } from 'react';

import { Image } from '../Image';

// import "../../../css/output.css"

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  imageCaption?: string;
  captionEnabled?: boolean;
  lightBox?: boolean;
  lightBoxCaptionEnabled?: boolean;
  children?: ReactNode
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

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  imageCaption,
  captionEnabled,
  lightBox,
  lightBoxCaptionEnabled,
  children,
  styles = "",
  imageStyles = "",
  captionStyles = "",
  lightBoxStyles = "",
  lightBoxImageStyles = "",
  lightBoxCaptionStyles = "",
  closeButtonStyles = "",
  lightBoxCaption,
  lightBoxImageSrc,
  tagName,
  ...rest
}) => {
  let [customTag, setCustomTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();

  type GalleryProps = {
    imageCaption?: string,
    captionEnabled?: boolean,
    captionStyles?: string,
    lightBox?: boolean,
    imageStyles?: string,
    lightBoxStyles?: string,
    lightBoxImageStyles?: string,
    lightBoxImageSrc?: string,
    lightBoxCaption?: string,
    lightBoxCaptionEnabled?: boolean,
    lightBoxCaptionStyles?: string,
    closeButtonStyles?: string
  }

  const galleryProps: GalleryProps = {
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
  }

  return (
    <CustomTag className={` ${styles} `} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Image) {
          return React.cloneElement(child, galleryProps);
        }
      })}
    </CustomTag>
  );
};

