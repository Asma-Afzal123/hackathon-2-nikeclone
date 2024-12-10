import React from 'react'
import { SRNKCard } from './SRNKCard'

export default function SRNKGrid() {
  const products = [
    {
      id: 1,
      image: "/Images/snrk1.png",
      showLearnMore: true,
      imageClassName: "bg-gray-200",
    },
    {
      id: 2,
      image: "/Images/snrk2.png",
      title: "Air Max 1 'SE-DLX'",
      description: "University Red",
    },
    {
      id: 3,
      image: "/Images/snrk2.png",
      title: "Air Max 1",
      description: "Big Bubble",
    },
    {
      id: 4,
      image: "/Images/snrk2.png",
      title: "Women's Air Max 1 'SE Original'",
      description: "Big Bubble",
    },
    {
      id: 5,
      image: "/Images/snrk3.png",
      showLearnMore: true,
      imageClassName: "bg-[#ff3366]",
    },
    {
      id: 6,
      image: "/Images/snrk4.png",
      title: "Air Max 1",
      description: "Corduroy",
      imageClassName: "bg-[#0066cc]",
    },
    // Add the rest of the products...
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <SRNKCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            showLearnMore={product.showLearnMore}
            imageClassName={product.imageClassName}
          />
        ))}
      </div>
    </div>
  )
}
