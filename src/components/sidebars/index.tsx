import React from 'react'
import ChannelList from './ChannelList'
import ChannelSidebarNavigations from './ChannelSidebarNavigations'




export default function Sidebars() {
  return (
    <>
      {/* Sidebar / channel lis */}
      <ChannelList />
      <ChannelSidebarNavigations />
    </>
  )
}
