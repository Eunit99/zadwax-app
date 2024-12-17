import React from 'react'
import { bottomContent } from '../../../../public/data/data'








export default function BottomContent() {
  return (
    <div
      className="flex flex-col gap-6 mb-40"
    >
      <p
        className="text-[#0C111D] font-bold text-xl font-aeonikPro"
      >
        Resources for you
      </p>



      <div
        className="flex flex-col gap-6 md:flex-row"
      >




        {
          bottomContent.map((content) => {
            return (

              <div
                key={content.id}
                className="flex flex-col gap-0 w-full sm:w-1/2 md:w-2/4 lg:w-1/4 min-h-[230px]"
              >
                <div
                  className="bg-[#BDA6F2] rounded-tl-xl rounded-tr-xl bg-analysis-illustration bg-no-repeat bg-center bg-cover w-full h-[45%]"
                >

                </div>
                <div
                  className="flex flex-col w-full gap-1 p-4 h-[55%] bg-[#ffffff] rounded-bl-xl rounded-br-xl border-[1px] border-[#EAECF0]"
                >
                  <p
                    className="text-[#344054] font-medium text-lg font-aeonikPro"
                  >
                    {content.title}
                  </p>
                  <p
                    className="text-[#667085] font-normal text-xs font-aeonikPro"
                  >
                    {content.description}
                  </p>
                </div>
              </div>

            )
          })
        }




      </div>


    </div>
  )
}
