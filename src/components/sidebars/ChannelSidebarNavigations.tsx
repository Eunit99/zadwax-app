import React from 'react'
import Image from "next/image"



export default function ChannelSidebarNavigations() {
  return (
    <>
      <div className="bg-[#FFFFFF] border-r-[1px] border-[#EAECF0] flex-none w-64 pb-7 p-3 hidden md:flex flex-col justify-between items-center font-medium text-[#344054] text-small">


        <div
          className="flex flex-col items-center justify-start w-full h-48 gap-3 mt-4 mb-2"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={212}
            height={40}
            className="object-fill cursor-pointer"
          >
          </Image>

          <div
            className="flex flex-col items-center justify-start w-full gap-3 border-b-2 border-[#EAECF0] pb-3"
          >
            <div
              className="flex flex-row items-center justify-start w-full h-10 gap-4 px-4 py-2 flex-start rounded-lg hover:bg-[#F0EBFC] hover:text-[#4a24a1] cursor-pointer bg-[#F0EBFC]"
            >

              <Image
                src="/icons/home.svg"
                alt="home"
                width={24}
                height={24}
                className="object-fill"
              >
              </Image>

              <p
                className="text-[#4A24A1]"
              >
                Home
              </p>

            </div>

            <div
              className="flex flex-row items-center justify-start w-full h-10 gap-4 px-4 py-2 flex-start rounded-lg hover:bg-[#F0EBFC] hover:text-[#4a24a1] cursor-pointer "
            >

              <Image
                src="/icons/recents.svg"
                alt="recents"
                width={24}
                height={24}
                className="object-none"
              >
              </Image>

              <p
                className=""
              >
                Recent
              </p>

            </div>

            <div
              className="flex flex-row items-center justify-start w-full h-10 gap-4 px-4 py-2 flex-start rounded-lg hover:bg-[#F0EBFC] hover:text-[#4a24a1] cursor-pointer "
            >

              <Image
                src="/icons/starred.svg"
                alt="starred"
                width={24}
                height={24}
                className="object-fill"
              >
              </Image>

              <p
                className=""
              >
                Starred
              </p>

            </div>
          </div>


          <div
            className="flex flex-row items-center justify-start w-full h-10 gap-4 px-4 py-2 flex-start rounded-lg hover:bg-[#F0EBFC] hover:text-[#4a24a1] cursor-pointer mt-3"
          >

            <Image
              src="/icons/projects.svg"
              alt="projects"
              width={24}
              height={24}
              className="object-none"
            >
            </Image>

            <p
              className=""
            >
              Projects
            </p>

          </div>



        </div>















        <div
          className="flex flex-col items-center justify-end w-full h-48 gap-3 mt-4 mb-2"
        >

          <div
            className="flex flex-col items-center justify-start w-full gap-3 pb-3"
          >
            <div
              className="flex flex-row items-center justify-start w-full h-10 gap-4 px-4 py-2 flex-start rounded-lg hover:bg-[#F0EBFC] hover:text-[#4a24a1] cursor-pointer"
            >

              <Image
                src="/icons/support.svg"
                alt="support"
                width={24}
                height={24}
                className="object-fill"
              >
              </Image>

              <p
                className=""
              >
                Support
              </p>

            </div>

            <div
              className="flex flex-row items-center justify-start w-full h-10 gap-4 px-4 py-2 flex-start rounded-lg hover:bg-[#F0EBFC] hover:text-[#4a24a1] cursor-pointer "
            >

              <Image
                src="/icons/settings.svg"
                alt="settings"
                width={24}
                height={24}
                className="object-none"
              >
              </Image>

              <p
                className=""
              >
                Settings
              </p>

            </div>


          </div>



        </div>




      </div>
    </>
  )
}
