import React, { useState } from 'react'
import Dress16 from "../assets/Dress1(6).png"
import Dress24 from "../assets/Dress2(4).png"
import Dress31 from "../assets/Dress3(1).jpeg"
import Dress41 from "../assets/Dress4(1).jpeg"
const TABS = [
  { id: 'new-in', label: 'NEW IN' },
  { id: 'tara-luxe', label: "TARA LUXE'26" },
  { id: 'tara-prints', label: 'TARA PRINTS' },
]

const PRODUCTS = [
  {
    id: 1,
    name: 'Vespera Shirt and Dupatta',
    price: 'Rs 99,500',
    image: Dress16,
  },
  {
    id: 2,
    name: 'Noirea shirt, Inner and Dupatta Set',
    price: 'Rs 110,000',
    image: Dress24,
  },
  {
    id: 3,
    name: 'Zandie Shirt and Dupatta',
    price: 'Rs 90,000',
    image: Dress31,
  },
  {
    id: 4,
    name: 'Anari Shirt And Drape Dupatta With Pants',
    price: 'Rs 110,000',
    image: Dress41,
  },
]

const NewIn = () => {
  const [activeTab, setActiveTab] = useState('new-in')

  return (
    <section className="w-full bg-white px-4 py-8 md:px-10 md:py-12">
      <div className="mb-6 flex items-center gap-6 border-b border-gray-100 pb-4 md:mb-8 md:gap-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-xs font-semibold tracking-wide transition-colors duration-200 md:text-sm ${
              activeTab === tab.id
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f2ede8]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute right-3 top-3 flex flex-col gap-2">
                <button
                  aria-label="Quick view"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white"
                >
                  <i className="fa-regular fa-eye text-sm"></i>
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white"
                >
                  <i className="fa-regular fa-star text-sm"></i>
                </button>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-sm text-gray-800">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewIn