'use client'

import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface ImageProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  src?: string;
  alt: string;
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

export const Image: React.FC<ImageProps> = ({
  src = "https://source.unsplash.com/random/600x600?nature=1",
  alt = "Description of the image",
  imageCaption,
  captionEnabled,
  isLink,
  linkTo,
  target = "_self",
  lightBox,
  lightBoxImageSrc,
  lightBoxCaptionEnabled,
  lightBoxCaption,
  imageStyles = "",
  captionStyles = "",
  lightBoxStyles = "",
  lightBoxImageStyles = "",
  lightBoxCaptionStyles = "",
  closeButtonStyles = "",
  tagName,
  styles = "",
  lazyLoad,
  ...rest
}) => {
  let [customTag, setCustomTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();
  const [isOpen, setIsOpen] = useState(false);
  // const [lightboxSrc, setLightboxSrc] = useState("");

  useEffect(() => {
    if (isLink) {
      setCustomTag("a");
    } else {
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


  return (
    <CustomTag
      className={` ${styles} relative `}
      {...(isLink && {
        href: linkTo,
        target: target,
      })}
    >
      <figure className="flex flex-col items-center">
        <img
          className={` ${imageStyles} max-w-full h-auto `}
          src={
            src ||
            "https://source.unsplash.com/random/800x600?nature"
          }
          alt={alt || imageCaption}
          onClick={linkTo ? undefined : lightBox ? openLightbox : undefined}
          {...rest}
        />
        {captionEnabled && (
          <figcaption
            className={` ${captionStyles} text-gray-600 text-sm mt-2 `}
          >
            {imageCaption || alt || "This is the caption for the image."}
          </figcaption>
        )}
      </figure>
      {isOpen && (
        <div
          className={` ${lightBoxStyles} fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 flex justify-center items-center z-[9999] overflow-auto `}
        >
          <div className="relative p-3 flex flex-col items-center">
            <button
              className={` ${closeButtonStyles} absolute top-0 right-5 h-8 w-8 flex items-center justify-center bg-red-500 rounded-full text-black hover:bg-gray-200 text-base `}
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={
                lightBoxImageSrc ||
                src ||
                "https://source.unsplash.com/random/800x600?nature"
              }
              alt={alt || "lightbox"}
              className={` ${lightBoxImageStyles} max-w-[95%] w-full rounded-md`}
            />
            {lightBoxCaptionEnabled && (
              <figcaption
                className={` ${lightBoxCaptionStyles} text-gray-400 text-sm mt-2 text-center `}
              >
                {lightBoxCaption ||
                  imageCaption ||
                  alt ||
                  "This is the caption for the image."}
              </figcaption>
            )}
          </div>
        </div>
      )}
    </CustomTag>
  );
};
