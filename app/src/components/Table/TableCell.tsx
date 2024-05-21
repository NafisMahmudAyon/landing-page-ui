'use client'

import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface TableCellProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: string;
  header?: boolean;
  thStyles?: string;
  tdStyles?: string;
  variant?: string;
  scope?: string;
  children?: React.ReactNode;
  styles?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  tagName,
  header,
  thStyles = "",
  tdStyles = "",
  variant,
  styles = "",
  scope,
  ...rest
}) => {
  const [variantValue, setVariantValue] = useState({
    styles: "",
    thStyles: "",
    tdStyles: "",
  });

  // let [customTag]: any = useState(tagName || "div");
  let [customTag]: any = useState(header ? "th" : "td");
  const CustomTag: any = customTag.toLowerCase();

  useEffect(() => {
    if (variant == "1") {
      setVariantValue({
        styles: "px-6 py-4",
        thStyles: "font-bold text-gray-500 whitespace-nowrap",
        tdStyles: "",
      });
    } else if (variant == "2") {
      setVariantValue({
        styles: "p-2 text-left border-0 border-b border-b-gray-500",
        thStyles: "",
        tdStyles: "",
      });
    }
  }, [variant]);

  return (
    <CustomTag
      className={`${header ? thStyles + " " + variantValue.thStyles : tdStyles + " " + variantValue.tdStyles} ${variantValue.styles} ${styles}`}
      {...(scope && { scope })}
      {...rest}
    >
      {children}
    </CustomTag>
  );
};