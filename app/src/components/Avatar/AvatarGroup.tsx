import React, { useEffect, useState } from 'react';
import { Avatar } from './Avatar';

// import "../../../css/output.css"

interface AvatarGroupProps {
  styles?: string;
  children?: React.ReactNode;
  variant?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ styles = "", children, variant, ...rest }) => {
  const [variantValue, setVariantValue] = useState({
    styles: "",
  });

  useEffect(() => {
    if (variant == "1") {
      setVariantValue({
        styles: " -space-x-2",
      });
    } else if (variant == "2" || variant == "3" || variant == "4" || variant == "5" || variant == "6") {
      setVariantValue({
        styles: "-space-x-2 ",
      });
    }
  }, [variant]);

  return (
    <div className={`${styles} ${variantValue.styles} flex items-center`} {...rest}>
      {!children ? (
        <>
          <Avatar />
          <Avatar />
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

// export default AvatarGroup;
