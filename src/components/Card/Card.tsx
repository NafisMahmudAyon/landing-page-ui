import React, { ReactNode } from 'react';

// import "../../../css/output.css"

interface CardProps {
  children?: ReactNode;
  styles?: string;
}

export const Card: React.FC<CardProps> = ({ children, styles = "", ...rest }) => {
  return (
    <div className={` ${styles} bg-gray-500 rounded shadow text-white overflow-hidden w-full `} {...rest}>
      {children}
    </div>
  );
};


