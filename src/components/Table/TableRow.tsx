import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  variant?: string;
  children?: React.ReactNode;
  styles?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ children, styles = "", variant, ...rest }) => {
  const [variantValue, setVariantValue] = useState<string>("");

  useEffect(() => {
    if (variant === "1") {
      setVariantValue("border-b border-gray-500 last:border-b-0 odd:bg-gray-200 even:bg-gray-300");
    } else if (variant === "2") {
      setVariantValue("");
    }
  }, [variant]);

  return (
    <tr className={`${variantValue} ${styles}`} {...rest}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          variant: variant,
        });
      })}
    </tr>
  );
};