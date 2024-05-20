import React, { ReactNode } from 'react';

// import "../../../css/output.css"

interface TabsPanelProps {
  styles?: string;
  value: number;
  children: ReactNode;
}

export const TabsPanel: React.FC<TabsPanelProps> = ({
  styles = "",
  value,
  children,
  ...rest
}) => {
  return (
    <div {...rest} className={` ${styles} `}>
      {children}
    </div>
  );
};

