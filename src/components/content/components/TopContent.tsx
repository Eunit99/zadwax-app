import React from 'react'





export default function TopContent() {
  return (
    <div
      className="flex flex-col gap-6"
    >

      <div
        className="flex flex-col gap-2"
      >
        <div
          className={`text-[#0C111D] font-bold text-2xl font-brFirma`}
        >
          Welcome Susan,
        </div>
        <p
          className="text-[#344054] font-normal font-aeonikPro text-base"
        >
          Get ready to complete your research processes on Zadwax
        </p>
      </div>


      <div
        className="flex flex-col w-full min-h-[169px] gap-2 px-6 py-10 bg-[#F0EBFC] rounded-xl bg-top-content-bg bg-no-repeat bg-right-bottom bg-auto"
      >
        <p
          className="text-[#101828] leading-5 font-aeonikPro text-sm"
        >
          Welcome to the cool kids club
        </p>

        <p
          className="text-[#4A24A1] leading-8 text-xl md:text-2xl font-medium font-aeonikPro"
        >
          The new way designers revolutionize their work. See how others are using Zadwax to accelerate their design process.
        </p>


      </div>
    </div>
  )
}
