import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  styles?: string;
  variant?: string;
  children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children, styles = "", variant, ...rest }) => {
  const [variantValue, setVariantValue] = useState<string>("");

  useEffect(() => {
    if (variant == "1") {
      setVariantValue("w-full text-sm text-left text-gray-500");
    } else if (variant == "2") {
      setVariantValue("border-collapse w-full");
    }
  }, [variant]);

  return (
    <table className={`${variantValue} ${styles}`} {...rest}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          variant: variant,
        });
      })}
    </table>
  );
};

