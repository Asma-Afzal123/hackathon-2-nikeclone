"use client"
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'

const categories = [
  'Shoes',
  'Sports Bras',
  'Tops & T-Shirts',
  'Hoodies & Sweatshirts',
  'Jackets',
  'Trousers & Tights',
  'Shorts',
  'Tracksuits',
  'Jumpsuits & Rompers',
  'Skirts & Dresses',
  'Socks',
  'Accessories & Equipment',
]

const genders = ['Men', 'Women', 'Unisex']
const kids = ['Boys', 'Girls']
const priceRanges = ['Under ₹ 2,500.00', '₹ 2,501.00 - ₹']

export function Filters() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="w-full md:w-64 space-y-6">
      {/* Mobile filter toggle button */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden px-4 py-2 text-white bg-blue-600 rounded-md mb-4"
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Filters Section */}
      <div className={`space-y-6 ${showFilters ? 'block' : 'hidden'} md:block`}>
        {/* Category Section */}
        <div>
          <h3 className="font-medium mb-4 text-lg">Categories</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center">
                <Checkbox id={`category-${index}`} />
                <label htmlFor={`category-${index}`} className="ml-2 text-sm">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Gender Section */}
        <div>
          <h3 className="font-medium mb-4 text-lg">Gender</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {genders.map((gender, index) => (
              <div key={index} className="flex items-center">
                <Checkbox id={`gender-${index}`} />
                <label htmlFor={`gender-${index}`} className="ml-2 text-sm">
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Kids Section */}
        <div>
          <h3 className="font-medium mb-4 text-lg">Kids</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {kids.map((kid, index) => (
              <div key={index} className="flex items-center">
                <Checkbox id={`kid-${index}`} />
                <label htmlFor={`kid-${index}`} className="ml-2 text-sm">
                  {kid}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Section */}
        <div>
          <h3 className="font-medium mb-4 text-lg">Shop By Price</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {priceRanges.map((range, index) => (
              <div key={index} className="flex items-center">
                <Checkbox id={`price-${index}`} />
                <label htmlFor={`price-${index}`} className="ml-2 text-sm">
                  {range}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
