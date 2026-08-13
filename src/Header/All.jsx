import React from 'react'
import { Link } from 'react-router-dom'
import Shirt from '../assets/Shirt.png'
import Skirt from '../assets/Skirt.png'
import SkirtShirt from '../assets/SkirtShirt.png'
import Casual from '../assets/Casual.png'
import ShalwarKameez from '../assets/ShalwarKameez.png'
import Frocks from '../assets/Frocks.png'

const OCCASIONS = [
  { id: 1, label: 'Shirt', image: Shirt, to: '/shop/shirt' },
  { id: 2, label: 'Skirt', image: Skirt, to: '/shop/skirt' },
  { id: 3, label: 'Skirt&Shirt', image: SkirtShirt, to: '/shop/skirt-shirt' },
  { id: 4, label: 'Casual', image: Casual, to: '/shop/casual' },
  { id: 5, label: 'Shalwar&Kameez', image: ShalwarKameez, to: '/shop/shalwar-kameez' },
  { id: 6, label: 'Frocks', image: Frocks, to: '/shop/frocks' },
]

const ShopByOccasion = () => {
  return (
    <section className="w-full bg-white px-4 py-8 md:px-10 md:py-10">
      <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-6 sm:grid-cols-6 md:gap-4">
        {OCCASIONS.map((occasion) => (
          <Link key={occasion.id} to={occasion.to} className="group flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f2ede8]">
              <img
                src={occasion.image}
                alt={occasion.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-2 text-xs text-gray-800 group-hover:text-gray-600 md:text-sm">
              {occasion.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ShopByOccasion