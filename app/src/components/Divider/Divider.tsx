import React from 'react';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  tagName?: string;
  styles?: string;
  position?: "center" | "left" | "right";
  contentStyles?: string;
  children?: React.ReactNode;
}

export const Divider: React.FC<DividerProps> = ({
  tagName,
  styles = "",
  children,
  position = "center",
  contentStyles = "",
  ...rest
}) => {
  return (
    <>
      {!children && (
        <hr
          className={` ${styles} max-w-full border-b-0 border-t border-t-gray-500 my-1 `}
          {...rest}
        />
      )}
      {children && (
        <>
          {position === "center" && (
            <div className="flex items-center ">
              <span
                className={` ${styles} flex-1 border-b-0 border-t border-t-gray-500`}
              ></span>
              <span className={` ${contentStyles} px-2 mx-2 `}>{children}</span>
              <span
                className={` ${styles} flex-1 border-b-0 border-t border-t-gray-500`}
              ></span>
            </div>
          )}
          {position === "left" && (
            <div className="flex items-center ">
              <span className={` ${contentStyles} pr-2 mr-2 `}>{children}</span>
              <span
                className={` ${styles} flex-1 border-b-0 border-t border-t-gray-500`}
              ></span>
            </div>
          )}
          {position === "right" && (
            <div className="flex items-center ">
              <span
                className={` ${styles} flex-1 border-b-0 border-t border-t-gray-500`}
              ></span>
              <span className={` ${contentStyles} pl-2 ml-2 `}>{children}</span>
            </div>
          )}
        </>
      )}
    </>
  );
};