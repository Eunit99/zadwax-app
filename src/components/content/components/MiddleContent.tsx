import React from 'react'
import { middleContentOne, middleContentTwo } from '../../../../public/data/data'





export default function MiddleContent() {
  return (
    <div
      className="flex flex-row flex-wrap w-full gap-6 md:flex-nowrap"
    >


      <div
        className="flex flex-col p-4 gap-6 bg-white border-[1px] border-[#EAECF0] rounded-lg w-full md:w-1/2"
      >
        <div
          className="flex flex-row items-center justify-between gap-6 border-b-[1px] border-[#EAECF0] pb-3"
        >
          <div>
            <p
              className="text-[#0C111D] leading-7 text-xl font-bold"
            >
              Get Started
            </p>
            <p
              className="text-[#344054] text-sm font-normal"
            >
              Three simple steps to launch your first project
            </p>
          </div>

          <p
            className="text-sm font-bold text-white font-aeonikPro bg-[#6832E3] py-2 px-3 rounded-lg cursor-pointer"
          >
            Create project
          </p>

        </div>


        {
          middleContentOne.map((content) => {
            return (
              <div
                className="flex flex-col gap-1"
                key={content.id}
              >
                <p
                  className="text-[#344054] font-medium text-lg font-aeonikPro"
                >
                  {content.heading}
                </p>
                <p
                  className="text-[#667085] font-normal text-sm font-aeonikPro"
                >
                  {content.description}
                </p>
              </div>

            )
          })
        }

      </div>







      <div
        className="flex flex-col p-4 gap-6 bg-white border-[1px] border-[#EAECF0] rounded-lg w-full md:w-1/2"
      >
        <div
          className="flex flex-row items-center justify-between gap-6 border-b-[1px] border-[#EAECF0] pb-3"
        >
          <div>
            <p
              className="text-[#0C111D] leading-7 text-xl font-bold"
            >
              Research Tips and Tricks
            </p>
            <p
              className="text-[#344054] text-sm font-normal"
            >
              Three simple steps to launch your first project
            </p>
          </div>



        </div>


        {
          middleContentTwo.map((content) => {
            return (
              <div
                className="flex flex-col gap-1"
                key={content.id}
              >
                <p
                  className="text-[#344054] font-medium text-lg font-aeonikPro"
                >
                  {content.heading}
                </p>
                <p
                  className="text-[#667085] font-normal text-sm font-aeonikPro"
                >
                  {content.description}
                </p>
              </div>

            )
          })
        }

      </div>









    </div>
  )
}
