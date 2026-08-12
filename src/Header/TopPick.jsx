import React from 'react'
import SeolMuseBanner from "../assets/SeoulMuseBanner.png"
import SolenceBanner from "../assets/SolenceBanner.png"
import VaeloraBanner from "../assets/VaeloraBanner.png"

const PICKS = [
  {
    id: 1,
    label: 'Explore Seoul Muse',
    image: SeolMuseBanner,
  },
  {
    id: 2,
   label: 'Explore Solence',
    image: SolenceBanner,
  },
  {
    id: 3,
   label: 'Explore Vaelora',
    image: VaeloraBanner,
  },
]

const TopPick = () => {
  return (
    <section className="w-full bg-white px-4 py-8 md:px-10 md:py-12">
      <h2 className="mb-6 text-center text-sm font-semibold tracking-[0.2em] text-gray-900 md:mb-8 md:text-base">
        Featured Collections
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
        {PICKS.map((pick) => (
          <a
            key={pick.id}
            href="#"
            className="group flex flex-col items-center" >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f2ede8]">
              <img
                src={pick.image}
                alt={pick.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p className="mt-3 text-xs tracking-wide text-gray-700 underline underline-offset-4 transition-colors group-hover:text-gray-900 md:text-sm">
              {pick.label}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default TopPick