import React from 'react'
import Image from 'next/image'





export default function Topbar() {
  return (
    <>
      <div className="flex items-center px-6 py-4 border-b sticky top-0 bg-white z-[999999999999999999]">
        <div className="flex flex-col">

        </div>


        <div className="flex flex-row items-center justify-end gap-4 ml-auto md:gap-24">
          <div className="relative flex">

            <div className="z-10 flex items-center justify-center pl-3 -mr-8 pin-y pin-l">
              <svg className="w-4 h-4 fill-current text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
            <input type="search" placeholder="Search"
              className="py-2 pl-8 pr-4 border rounded-lg appearance-none border-grey w-50 md:w-80" />

          </div>


          <div
            className="flex flex-row items-center justify-center gap-4 md:gap-10"
          >

            <Image
              src="/icons/bell.svg"
              alt="bell"
              width={24}
              height={24}
              className="object-fill cursor-pointer"
            >
            </Image>

            <Image
              src="/images/user.png"
              alt="add"
              width={32}
              height={32}
              className="object-fill bg-white rounded-b-full cursor-pointer"
            >
            </Image>

          </div>


        </div>
      </div>

    </>
  )
}
