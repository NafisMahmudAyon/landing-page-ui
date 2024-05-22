import React from 'react'

interface RightSideBarProps {
  children?: React.ReactNode;
  id?: string;
}
const RightSideBar: React.FC<RightSideBarProps> = ({children, id=""}) => {

  return (
    <aside id={id} className="hidden md:block fixed right-0 top-[73px] md:w-[29%] lg:w-[21%] pt-2  lg:overflow-y-scroll border-slate-950 dark:border-slate-300/60  pr-5 ">
      {children}
    </aside>
  )
}

export default RightSideBar