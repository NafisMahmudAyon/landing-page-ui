import React, { ReactNode } from 'react';

// import "../../../css/output.css"

interface CardActionProps {
  children?: ReactNode;
  styles?: string;
  link?: string;
  target?: string;
}

export const CardAction: React.FC<CardActionProps> = ({
  children,
  styles = "",
  link = "#",
  target = "_self",
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(link, target);
  };

  return (
    <button
      className={` ${styles} bg-red-500 block bg-transparent outline-0 border-0 m-0 p-0 cursor-pointer select-none w-full text-inherit hover:opacity-85 transition-all duration-300 `}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};


