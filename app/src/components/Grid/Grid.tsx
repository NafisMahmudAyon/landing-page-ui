import React, { useState } from 'react';

interface GridProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: string;
  styles?: string;
  children?: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  tagName,
  styles = "",
  children,
  ...rest
}) => {
  let [customTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();

  return (
    <CustomTag className={` ${styles} grid grid-cols-3 gap-2 `} {...rest}>
      {children}
    </CustomTag>
  );
};