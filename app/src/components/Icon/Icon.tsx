'use client'

import React, { useEffect, useState } from 'react';

interface IconProps {
  icon?: string;
  iconStyles?: string;
  iconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
  isLink?: boolean;
  linkTo?: string;
  target?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  iconStyles = '',
  iconLibrary = 'material-icons',
  isLink,
  linkTo = '',
  target = '_self',
  title,
  onClick,
  ...rest
}) => {
  useEffect(() => {
    const getStylesheetUrl = (library: string): string => {
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
          return 'https://nafismahmudayon.github.io/bootstrap-icons/bootstrap-icons/font/bootstrap-icons.min.css';
        case 'font-awesome':
          return 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        case 'icofont-icons':
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

  const [iconHtml, setIconHtml] = useState("")

  if (iconLibrary === 'font-awesome') {
    setIconHtml(`<i class="fa-solid ${icon}"></i>`)
  } else if (iconLibrary === 'bootstrap-icons') {
    setIconHtml(`<i class="bi bi-${icon}"></i>`)
  } else if (iconLibrary === 'icofont-icons') {
    setIconHtml(`<i class="icofont-${icon}"></i>`)
  }

  return (
    <>
      {(isLink || linkTo) && (
        <a
          href={linkTo || '#'}
          target={target}
          className={` ${iconStyles} `}
          onClick={onClick}
          {...rest}
          dangerouslySetInnerHTML={{ __html: iconHtml }}
        />
      )}
      {(!isLink || !linkTo) && (
        <span
          className={` ${iconStyles} `}
          onClick={onClick}
          {...rest}
          dangerouslySetInnerHTML={{ __html: iconHtml }}
        />
      )}
    </>
  );
};

