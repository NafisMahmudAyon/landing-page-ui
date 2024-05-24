'use client'

import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  variant?: number;
  children?: React.ReactNode;
  styles?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({ children, styles = "", variant, ...rest }) => {
  const [variantValue, setVariantValue] = useState<string>("");

  useEffect(() => {
    if (variant == 1) {
      setVariantValue("");
    }
    if (variant == 2) {
      setVariantValue("");
    }
  }, [variant]);

  return (
    <tbody className={`${variantValue} ${styles}`} {...rest}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          variant: variant,
        });
      })}
    </tbody>
  );
};