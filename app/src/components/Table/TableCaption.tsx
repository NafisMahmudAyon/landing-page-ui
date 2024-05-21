'use client'

import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
  position?: "top" | "bottom";
  variant?: string;
  children?: React.ReactNode;
  styles?: string;
}

export const TableCaption: React.FC<TableCaptionProps> = ({ children, styles = "", position, variant, ...rest }) => {
  const [variantValue, setVariantValue] = useState<string>("");

  useEffect(() => {
    if (variant == "1") {
      setVariantValue("text-slate-500 py-4 text-xs");
    }
  }, [variant]);

  return (
    <caption
      className={`${position === "top" ? "caption-top" : "caption-bottom"} ${variantValue} ${styles}`}
      {...rest}
    >
      {children}
    </caption>
  );
};