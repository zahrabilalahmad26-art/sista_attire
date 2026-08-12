import React, { useEffect, useState } from 'react'
import Banner1 from '../assets/Banner1.png'
import logo from '../assets/Logo1.png'

const MENU_LINKS = [
  { label: 'New In', href: '#' },
  { label: 'Seoul Muse', href: '#' },
  { label: 'Solence', href: '#' },
  { label: 'Chiffon Frocks', href: '#' },
  { label: 'Kameez & Shalwar Sets', href: '#' },
  { label: 'Shirt & Skirt Sets', href: '#' },
  { label: 'Wedding Wear', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#' },
]

const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

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
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-sm font-medium md:text-base"
          >
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

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out md:w-80 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <img
            src={logo}
            alt="Sista Attire Logo"
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center text-gray-700 hover:text-gray-900"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6">
          {MENU_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-sm tracking-wide text-gray-800 transition-colors hover:text-gray-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MainHeader