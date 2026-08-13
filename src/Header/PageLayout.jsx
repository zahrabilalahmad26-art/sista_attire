import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TopHeader from './TopHeader.jsx'
import MainHeader from './MainHeader.jsx'
import Footer from './Footer.jsx'
import FilterBar from './FilterBar.jsx'
import ProductCard from './ProductCard.jsx'

const parsePrice = (price) => Number(String(price).replace(/[^0-9.]/g, '')) || 0

const sortProducts = (products, sortValue) => {
  const list = [...products]
  switch (sortValue) {
    case 'price-low-high':
      return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
    case 'price-high-low':
      return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
    case 'name-a-z':
      return list.sort((a, b) => a.name.localeCompare(b.name))
    case 'new-to-old':
    default:
      return list
  }
}

const PageLayout = ({ title, products }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortValue, setSortValue] = useState('new-to-old')

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )
    return sortProducts(filtered, sortValue)
  }, [products, searchTerm, sortValue])

  return (
    <>
      <TopHeader />
      <MainHeader />

      <section className="w-full bg-white px-4 pt-[8vh] md:px-10">
        <div className="pb-2 text-xs text-gray-500">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-900">{title}</span>
        </div>

        <h1 className="border-b border-gray-100 pb-4 font-serif text-2xl tracking-wide text-gray-900 md:text-3xl">
          {title}
        </h1>
      </section>

      <FilterBar
        productCount={visibleProducts.length}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortValue={sortValue}
        onSortChange={setSortValue}
      />

      <section className="w-full bg-white px-4 py-8 md:px-10 md:py-12">
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-sm text-gray-500">
            No products match your search.
          </p>
        )}
      </section>

      <Footer />
    </>
  )
}

export default PageLayout