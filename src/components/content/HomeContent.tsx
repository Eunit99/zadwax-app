import React from 'react'
import TopContent from './components/TopContent'
import MiddleContent from './components/MiddleContent'
import BottomContent from './components/BottomContent'



export default function HomeContent() {
  return (
    <div
      className="flex flex-col gap-10 px-8 py-7"
    >
      <TopContent />
      <MiddleContent />
      <BottomContent />
    </div>
  )
}
