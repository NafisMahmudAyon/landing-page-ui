'use client'
import { Image, Tab, Tabs, TabsNav, TabsPanel } from '@/app/src'
import React from 'react'

const page = () => {
  return (
    <>
      <Image alt='dfdfd' />
      <Tabs>
        <TabsNav>
          <Tab value={1}>fsdfds</Tab>
          <Tab value={2}>fsdfdss</Tab>
        </TabsNav>
        <TabsPanel value={1}>Hello</TabsPanel>
        <TabsPanel value={2}>Hello2</TabsPanel>
      </Tabs>
      </>
  )
}

export default page