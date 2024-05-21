'use client'

import React, { useState } from 'react';
import { Icon } from '../Icon';

interface ListProps extends React.HTMLAttributes<HTMLElement> {
  list?: string[];
  tagName?: string;
  styles?: string;
  listStyles?: string;
  iconLibrary?: string;
  icon?: string;
  iconStyles?: string;
  iconPosition?: "before" | "after";
}

export const List: React.FC<ListProps> = ({
  list = [],
  tagName,
  styles = "",
  listStyles = "",
  iconLibrary,
  icon,
  iconStyles = "",
  iconPosition = "before",
  ...rest
}) => {
  let [customTag]: any = useState(tagName || "ol");
  const CustomTag: any = customTag.toLowerCase();

  return (
    <CustomTag {...rest} className={` ${styles} `} {...rest}>
      {list.map((item, index) => (
        <li key={index} className={` ${listStyles} `}>
          {icon && iconPosition === "before" && (
            <Icon
              iconLibrary={iconLibrary}
              icon={icon}
              iconStyles={iconStyles}
            />
          )}
          <span dangerouslySetInnerHTML={{ __html: item }} />
          {icon && iconPosition === "after" && (
            <Icon
              iconLibrary={iconLibrary}
              icon={icon}
              iconStyles={iconStyles}
            />
          )}
        </li>
      ))}
    </CustomTag>
  );
};