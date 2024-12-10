'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Swiper as SwiperType } from "swiper"; // Import Swiper type
import { ChevronLeft, ChevronRight } from "lucide-react";

const GearUp = () => {
  const menSwiperRef = useRef<SwiperType | null>(null); // Specify type for ref
  const womenSwiperRef = useRef<SwiperType | null>(null); // Specify type for ref

  const menItems = [
    { image: "/Images/men-tshirt.png", title: "Nike Dri-FIT ADV TechKnit Ultra", category: "Men's Men's Short-Sleeve Running Top", price: "₹ 3,895" },
    { image: "/Images/men-shorts.png", title: "Nike Dri-FIT Challenger", category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts", price: "₹ 2,495" },
  ];

  const womenItems = [
    { image: "/Images/women-tshirt.png", title: "Nike Dri-FIT ADV Run Division", category: "Women's Long-Sleeve Running Top", price: "₹ 5,295" },
    { image: "/Images/women-trouser.png", title: "Nike Fast", category: "Women's Mid-Rise 7/8 Running Leggings with Pockets", price: "₹ 3,795" },
  ];

  const handlePrevMen = () => {
    if (menSwiperRef.current) menSwiperRef.current.swiper.slidePrev();
  };
  
  const handleNextMen = () => {
    if (menSwiperRef.current) menSwiperRef.current.swiper.slideNext();
  };

  const handlePrevWomen = () => {
    if (womenSwiperRef.current) womenSwiperRef.current.swiper.slidePrev();
  };

  const handleNextWomen = () => {
    if (womenSwiperRef.current) womenSwiperRef.current.swiper.slideNext();
  };

  return (
    <div className="airmax-section">
      <div className="header">
        <h2>Best of Air Max</h2>
      </div>

      <div className="items-container">
        <div className="section men-section">
          <div className="arrows">
            <div className="arrow" onClick={handlePrevMen} aria-label="Previous Men Item">
              <ChevronLeft size={20} color="white" />
            </div>
            <div className="arrow" onClick={handleNextMen} aria-label="Next Men Item">
              <ChevronRight size={20} color="white" />
            </div>
          </div>
          <Swiper
            ref={menSwiperRef}
            slidesPerView={2}
            spaceBetween={20}
            navigation={false}
            modules={[Navigation]}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="mySwiper"
          >
            {menItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                  <p className="price">{item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="section women-section">
          <div className="arrows">
            <div className="arrow" onClick={handlePrevWomen} aria-label="Previous Women Item">
              <ChevronLeft size={20} color="white" />
            </div>
            <div className="arrow" onClick={handleNextWomen} aria-label="Next Women Item">
              <ChevronRight size={20} color="white" />
            </div>
          </div>
          <Swiper
            ref={womenSwiperRef}
            slidesPerView={2}
            spaceBetween={20}
            navigation={false}
            modules={[Navigation]}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="mySwiper"
          >
            {womenItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                  <p className="price">{item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .airmax-section { padding: 20px; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        h2 { font-size: 1.5rem; }
        .arrows { display: flex; justify-content: space-between; width: 100%; }
        .arrow { background-color: #F5F5F5; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; border-radius: 50%; cursor: pointer; }
        .arrow:hover { background-color: darkgray; }
        .mySwiper { position: relative; }
        .card { text-align: center; border: 1px solid #e0e0e0; border-radius: 10px; padding: 15px; }
        img { width: 100%; border-radius: 10px; object-fit: cover; }
        .price { color: #ff0000; font-weight: bold; }
        .items-container { display: flex; justify-content: space-between; }
        .section { width: 48%; }
        .men-section { margin-right: 10px; }
        .women-section { margin-left: 10px; }
        
        /* Responsive Styles */
        @media (max-width: 1024px) { .items-container { flex-direction: column; align-items: center; } .section { width: 80%; margin-bottom: 20px; } }
        @media (max-width: 768px) { .section { width: 90%; margin-bottom: 20px; } }
      `}</style>
    </div>
  );
};

export default GearUp;
