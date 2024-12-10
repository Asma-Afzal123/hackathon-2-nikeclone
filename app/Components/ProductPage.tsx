"use client"
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar/Navbar";

const ProductPage: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [loopCount, setLoopCount] = useState(0); // Tracks the number of loops
  const [products, setProducts] = useState([
    {
      image: "/Images/pcard1.png",
      tag: "Just In",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: "₹10,795.00",
    },
    {
      image: "/Images/pcard2.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard3.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard4.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard5.png",
      tag: "Promo Exclusion",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard6.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard7.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard8.png",
      tag: "Just In",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: "₹10,795.00",
    },
    {
      image: "/Images/pcard9.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard10.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard11.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard12.png",
      tag: "Promo Exclusion",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    // Add more products here...
  ]);

  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Handle loading more products
  const handleLoadMore = () => {
    if (loopCount < 5) {
      setVisibleProducts((prev) => prev + 12);
      setLoopCount((prevCount) => prevCount + 1); // Increase loop count on each load
    }
  };

  // Reset the product list to loop when the end is reached
  const loopProducts = () => {
    if (loopCount < 5) { // Only loop if less than 5 times
      setProducts((prevProducts) => {
        const allProducts = [...prevProducts];
        while (allProducts.length < visibleProducts) {
          allProducts.push(...prevProducts); // Loop through the products until we reach the desired number of visible items
        }
        return allProducts;
      });
    }
  };

  // Trigger loopProducts when visibleProducts is updated
  useEffect(() => {
    loopProducts();
  }, [visibleProducts]);

  // Setting up the IntersectionObserver to trigger the load more when scrolled to the bottom
  useEffect(() => {
    if (loadMoreRef.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            handleLoadMore();
          }
        },
        { rootMargin: "0px", threshold: 1.0 }
      );
      observer.current.observe(loadMoreRef.current);
    }
    return () => {
      if (observer.current && loadMoreRef.current) {
        observer.current.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMoreRef]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, visibleProducts).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                tag={product.tag}
                name={product.name}
                category={product.category}
                price={product.price}
              />
            ))}
          </div>

          {/* Loading more when the user scrolls to the bottom */}
          <div ref={loadMoreRef} className="my-4 text-center">
            <span className="text-gray-500">Loading more...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
