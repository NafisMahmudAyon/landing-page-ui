import { Block, Text } from '@/app/src';
import React from 'react'

interface RightSideBarItem {
  id: string;
  title: string;
}

interface RightSideBarProps {
  children?: React.ReactNode;
  id?: string;
  data?: RightSideBarItem[];
}
const RightSideBar: React.FC<RightSideBarProps> = ({ id = "", data }) => {

  return (
    <aside id={id} className="hidden md:block fixed right-0 top-[73px] md:w-[29%] lg:w-[21%] pt-2  lg:overflow-y-scroll border-slate-950 dark:border-slate-300/60  pr-5 ">
      <Text styles="text-lg !font-bold pt-3 pl-3 pb-4 ">ON THIS PAGE</Text>
      <Block styles="">
        {data?.map((item) => {
          return (
            <Text
              key={item.id}
              styles="text-sm my-2 block px-2 pl-4 border-l py-1 border-gray-300 dark:border-gray-500 dark:hover:border-gray-100 hover:border-gray-800 transition-all duration-300 "
              isLink={true}
              linkTo={item.id}>
              {item.title}
            </Text>
          )
        })}
      </Block>
    </aside>
  )
}

export default RightSideBar