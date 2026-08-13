import React, { useState } from 'react'

// product.colors = [{ color: '#hex', image: importedImg }, ...] — exactly like Products1.js
const ProductCard = ({ product }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0)
  const activeImage = product.colors[activeColorIndex].image

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f2ede8]">
        <img
          src={activeImage}
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

        <div className="mt-2 flex items-center gap-2">
          {product.colors.map((option, index) => (
            <button
              key={index}
              aria-label={`Color option ${index + 1}`}
              onClick={() => setActiveColorIndex(index)}
              className={`h-4 w-4 rounded-full border transition-transform hover:scale-110 ${
                activeColorIndex === index
                  ? 'border-gray-900 ring-1 ring-offset-1 ring-gray-900'
                  : 'border-gray-300'
              }`}
              style={{ backgroundColor: option.color }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard