'use client'

import { Block } from '@/app/src'
import React from 'react'

const GetStarted = () => {
  const handleGetStarted = () => {
    window.location.href = "/install";
  };
  return (
    <Block
      tagName="button"
      styles="px-6 py-2 dark:bg-bgColor dark:text-textColor bg-darkBgColor text-darkTextColor transition-all duration-300 ease-in-out rounded-lg text-lg font-semibold hover:bg-darkHoverBgColor hover:text-textHoverColor dark:hover:bg-darkHoverBgColor dark:hover:text-[#6fb8e6] "
      onClick={handleGetStarted}
    >
      Get Started
    </Block>
  )
}

export default GetStarted