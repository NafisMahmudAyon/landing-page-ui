import React, { ReactNode } from 'react';

import "../../../css/output.css"

interface TabProps {
  styles?: string;
  activeTabStyles?: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
  orientation: 'horizontal' | 'vertical';
}

export const Tab: React.FC<TabProps> = ({
  styles = "",
  activeTabStyles = "",
  value,
  isActive,
  onClick,
  children,
  orientation,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${styles} ${isActive ? activeTabStyles : ""} ${orientation === "vertical" ? "block" : "inline-block"
        }`}
      onClick={onClick}
      data-value={value}
    >
      {children}
    </button>
  );
};

