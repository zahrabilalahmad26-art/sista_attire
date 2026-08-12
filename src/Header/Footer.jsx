import React from 'react'
import Logo from "../assets/Logo1.png"

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f4ef] px-4 pt-12 pb-6 md:px-10 md:pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 border-b border-gray-200 pb-10 sm:grid-cols-4 md:gap-6">
        {/* Brand column */}
        <div className="col-span-2 sm:col-span-1">
          <img
            src={Logo}
            alt="Sista Attire"
            className="h-10 w-auto object-contain"
          />
          <h2 className="mt-3 font-serif text-2xl tracking-wide text-gray-900">
            Sista Attire
          </h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
            Modest, minimal, and made to move with you.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-900">
            SHOP
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">New In</a></li>
            <li><a href="#" className="hover:text-gray-900">Seoul Muse</a></li>
            <li><a href="#" className="hover:text-gray-900">Solence</a></li>
            <li><a href="#" className="hover:text-gray-900">Chiffon Frocks</a></li>
            <li><a href="#" className="hover:text-gray-900">Kameez &amp; Shalwar Sets</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-900">
            HELP
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Track Order</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping &amp; Returns</a></li>
            <li><a href="#" className="hover:text-gray-900">Size Guide</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
          </ul>
        </div>

        {/* Stay connected */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-900">
            STAY CONNECTED
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Subscribe for new arrivals and early access.
          </p>
          <form className="mt-4 flex items-center border-b border-gray-400 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="ml-2 flex-shrink-0 text-gray-700 hover:text-gray-900"
            >
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
              <i className="fa-brands fa-facebook text-lg"></i>
            </a>
            <a href="#" aria-label="TikTok" className="text-gray-600 hover:text-gray-900">
              <i className="fa-brands fa-tiktok text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 pt-6 text-xs text-gray-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Sista Attire. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer