'use client'
import { Icon } from 'landing-page-ui';
import React from 'react'

const ClickToCopy = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("npm i landing-page-ui");
  };
  return (
    <Icon
      icon=" fa-copy"
      iconLibrary="font-awesome"
      iconStyles="group-hover:text-gray-950 group-hover:dark:text-[#6fb8e6]"
      onClick={handleCopy}
      // title="Click to copy" 
    />
  )
}

export default ClickToCopy