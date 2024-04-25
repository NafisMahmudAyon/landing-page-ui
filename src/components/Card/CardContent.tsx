import React, { ReactNode } from 'react';

import "../../../css/output.css"

interface CardContentProps {
  children?: ReactNode;
  styles?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, styles = "", ...rest }) => {
  return <div className={` ${styles} p-3 text-left `} {...rest}>{children}</div>;
};

