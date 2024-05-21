'use client'

import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  variant?: string;
  children?: React.ReactNode;
  styles?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({ children, styles = "", variant, ...rest }) => {
  const [variantValue, setVariantValue] = useState<string>("");

  useEffect(() => {
    if (variant == "1") {
      setVariantValue("text-gray-500 uppercase bg-gray-400");
    }
    if (variant == "2") {
      setVariantValue("font-semibold");
    }
  }, [variant]);

  return (
    <thead className={`${variantValue} ${styles}`} {...rest}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          variant: variant,
        });
      })}
    </thead>
  );
};