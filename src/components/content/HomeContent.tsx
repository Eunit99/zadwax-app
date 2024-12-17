import React from 'react'
import TopContent from './components/TopContent'
import MiddleContent from './components/MiddleContent'
import BottomContent from './components/BottomContent'



export default function HomeContent() {
  return (
    <div
      className="flex flex-col gap-10 pl-8 pr-10 py-7"
    >
      <TopContent />
      <MiddleContent />
      <BottomContent />
    </div>
  )
}
