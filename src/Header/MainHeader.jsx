import React, { useEffect, useState } from 'react'
import Banner1 from '../assets/Banner1.png'
import logo from '../assets/Logo1.png'

const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-[calc(100vh-5vh)] w-full overflow-hidden">
      <img
        src={Banner1}
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div
        className={`fixed left-0 top-[5vh] z-40 flex h-20 w-full items-center justify-between px-4 transition-all duration-300 md:h-24 md:px-8 ${
          scrolled
            ? 'bg-white text-gray-900 shadow-md'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="flex items-center">
          <button className="flex items-center gap-2 text-sm font-medium md:text-base">
            <i className="fa-solid fa-bars"></i>
            <span>Menu</span>
          </button>
        </div>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
          <img
            src={logo}
            alt="Sista Attire Logo"
            className="h-10 w-auto object-contain md:h-16"
          />
          <span className="font-serif text-xl tracking-[0.15em] md:text-3xl">
            SISTA ATTIRE
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 ${
              scrolled ? 'border-gray-900/60' : 'border-white/60'
            }`}
          >
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </button>

          <button
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 ${
              scrolled ? 'border-gray-900/60' : 'border-white/60'
            }`}
          >
            <i className="fa-solid fa-user text-sm"></i>
          </button>

          <button
            className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 ${
              scrolled ? 'border-gray-900/60' : 'border-white/60'
            }`}
          >
            <i className="fa-solid fa-cart-shopping text-sm"></i>
            <span
              className={`absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold transition-colors duration-300 ${
                scrolled ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}
            >
              0
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainHeader