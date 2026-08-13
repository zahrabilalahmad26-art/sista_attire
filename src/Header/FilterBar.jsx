import React from 'react'

// "Old to New" is intentionally left out of the sort options.
const SORT_OPTIONS = [
  { value: 'new-to-old', label: 'Newest' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'name-a-z', label: 'Name: A to Z' },
]

const FilterBar = ({
  productCount,
  searchTerm,
  onSearchChange,
  sortValue,
  onSortChange,
}) => {
  return (
    <div className="flex flex-col gap-3 border-b border-gray-100 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-10">
      <span className="text-xs font-semibold tracking-wide text-gray-900">
        {productCount} {productCount === 1 ? 'ITEM' : 'ITEMS'}
      </span>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search this collection"
            className="w-full border border-gray-300 py-2 pl-8 pr-3 text-xs text-gray-800 placeholder-gray-400 outline-none sm:w-56"
          />
        </div>

        <select
          value={sortValue}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 bg-white px-3 py-2 text-xs tracking-wide text-gray-800 outline-none"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              Sort by: {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterBar