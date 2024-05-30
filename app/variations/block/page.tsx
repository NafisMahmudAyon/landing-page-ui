'use client'

import {
  Block,
  Text,
} from "@/app/src";

const page = () => {
  
  return (
    <Block tagName={"div"} styles="scroll-smooth w-full flex flex-col items-center justify-center min-h-[calc(100vh-100px)] ">
      <Text styles="gradient-background text-5xl lg:text-7xl font-bold font-mono bg-clip-text text-transparent">
        Coming Soon.
      </Text>
      <Text styles="text-xl lg:text-2xl mt-3 font-sans">
        Variations will available soon.
      </Text>
    </Block>
  );
};

export default page;
