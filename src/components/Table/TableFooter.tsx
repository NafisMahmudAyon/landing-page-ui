import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface TableFooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: string;
  styles?: string;
  children?: React.ReactNode;
}

export const TableFooter: React.FC<TableFooterProps> = ({ children, styles = "", variant, ...rest }) => {
  const [variantValue, setVariantValue] = useState<string>("");

  useEffect(() => {
    if (variant === "1") {
      setVariantValue("");
    }
  }, [variant]);

  return (
    <tfoot className={`${variantValue} ${styles}`} {...rest}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          variant: variant,
        });
      })}
    </tfoot>
  );
};