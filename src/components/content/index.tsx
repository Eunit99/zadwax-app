import React from 'react'
import Topbar from './Topbar'
import HomeContent from './HomeContent'



export default function ChatContent() {
  return (
    <>
      <div
        className="flex flex-col flex-1 overflow-hidden bg-white"
      >
        <Topbar />
        <HomeContent />
      </div>
    </>
  )
}
