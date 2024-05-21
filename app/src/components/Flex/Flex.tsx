'use client'

import React, { useState } from 'react';

interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: string;
  styles?: string;
  children?: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({ tagName, styles = "", children, ...rest }) => {
  let [customTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();

  return (
    <CustomTag className={` ${styles} flex gap-2 flex-wrap `} {...rest}>
      {children}
    </CustomTag>
  );
};