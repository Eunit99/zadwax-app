import Image from 'next/image'
import React from 'react'




export default function ChannelList() {
  return (
    <>
      {/* Sidebar / channel lis */}
      <div className="bg-[#5F2ECF] text-purple-lighter flex-none w-[68px] p-4 hidden md:block">

        <div className="cursor-pointer mb-4">
          <div
            className="bg-[#0077B5] h-10 w-10 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-auto">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={36}
              height={36}
              className="object-fill"
            >
            </Image>
          </div>
        </div>


        <div className="cursor-pointer mb-4">
          <div
            className="bg-[#040921] h-10 w-10 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-auto">
            <Image
              src="/icons/figma.svg"
              alt="figma"
              width={36}
              height={36}
              className="object-fill"
            >
            </Image>
          </div>
        </div>


        <div className="cursor-pointer mb-4">
          <div
            className="bg-[#040921] h-10 w-10 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-auto">
            <Image
              src="/icons/figma.svg"
              alt="figma"
              width={36}
              height={36}
              className="object-fill"
            >
            </Image>
          </div>
        </div>


        <div className="cursor-pointer mb-4">
          <div
            className="bg-[#ffffff] h-10 w-10 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-auto">
            <Image
              src="/icons/add.svg"
              alt="add"
              width={36}
              height={36}
              className="object-fill"
            >
            </Image>
          </div>
        </div>

      </div>
    </>
  )
}
