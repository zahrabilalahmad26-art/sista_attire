import React from 'react'

const TopHeader = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 flex h-[5vh]  w-full items-center overflow-hidden bg-gray-200 text-black">
        <div className="flex min-w-max animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          <span className="px-4 py-2 text-sm md:text-sm font-normal">
            Free Shipping Nationwide. For Queries: +923-111-111-(ZSJ) 975 OR WhatsApp: +923173179230
          </span>
          <span className="inline-block w-[100vw]" aria-hidden="true" />
          <span className="px-4 py-2 text-sm md:text-sm font-semibold" aria-hidden="true">
            Free Shipping Nationwide. For Queries: +923-111-111-(ZSJ) 975 OR WhatsApp: +923173179230
          </span>
          <span className="inline-block w-[100vw]" aria-hidden="true" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}

export default TopHeader